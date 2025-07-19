import { action, SingletonAction, WillAppearEvent, WillDisappearEvent, DidReceiveSettingsEvent } from "@elgato/streamdeck";

@action({ UUID: "com.teyko.days-counter.increment" })
export class IncrementCounter extends SingletonAction<CounterSettings> {
	private dateCheckInterval?: NodeJS.Timeout;
	private lastDate: string = new Date().toDateString();
	private currentAction: any;

	override onWillAppear(ev: WillAppearEvent<CounterSettings>): void | Promise<void> {
		this.currentAction = ev.action;
		console.log("onWillAppear - Settings:", ev.payload.settings);
		this.updateDaysDisplay(ev.payload.settings);
		this.startDateMonitoring();
	}

	override onWillDisappear(ev: WillDisappearEvent<CounterSettings>): void | Promise<void> {
		this.stopDateMonitoring();
		this.currentAction = null;
	}

	override onDidReceiveSettings(ev: DidReceiveSettingsEvent<CounterSettings>): void | Promise<void> {
		console.log("onDidReceiveSettings - New settings:", ev.payload.settings);
		this.updateDaysDisplay(ev.payload.settings);
	}

	private updateDaysDisplay(settings: CounterSettings): void {
		if (!this.currentAction) return;

		const targetDate = settings.targetDate;
		const timezone = settings.timezone || 'UTC';
		const language = settings.language || 'fr';
		
		console.log("updateDaysDisplay - targetDate:", targetDate, "timezone:", timezone, "language:", language);
		
		if (!targetDate) {
			const noDateText = this.getLocalizedText('noDate', language);
			this.currentAction.setTitle(noDateText);
			return;
		}

		const today = new Date();
		const target = new Date(targetDate);
		
		// Appliquer le fuseau horaire
		const todayInTz = new Date(today.toLocaleString("en-US", {timeZone: timezone}));
		const targetInTz = new Date(target.toLocaleString("en-US", {timeZone: timezone}));
		
		todayInTz.setHours(0, 0, 0, 0);
		targetInTz.setHours(0, 0, 0, 0);
		
		const diffTime = targetInTz.getTime() - todayInTz.getTime();
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

		let numberText: string;
		let labelText: string;
		
		if (diffDays > 0) {
			numberText = `${diffDays}`;
			labelText = this.getLocalizedText('days', language);
		} else if (diffDays === 0) {
			numberText = "";
			labelText = this.getLocalizedText('today', language);
		} else {
			numberText = `${Math.abs(diffDays)}`;
			labelText = this.getLocalizedText('pastDays', language);
		}

		const displayText = numberText ? `${numberText}\n${labelText}` : labelText;
		
		console.log("Setting title to:", displayText);
		this.currentAction.setTitle(displayText);
	}

	private getLocalizedText(key: string, language: string): string {
		const translations: Record<string, Record<string, string>> = {
			fr: {
				noDate: "Pas de date",
				days: "jours",
				today: "Aujourd'hui",
				pastDays: "jours passés"
			},
			en: {
				noDate: "No date",
				days: "days",
				today: "Today",
				pastDays: "days ago"
			},
			es: {
				noDate: "Sin fecha",
				days: "días",
				today: "Hoy",
				pastDays: "días pasados"
			},
			de: {
				noDate: "Kein Datum",
				days: "Tage",
				today: "Heute",
				pastDays: "Tage vergangen"
			},
			it: {
				noDate: "Nessuna data",
				days: "giorni",
				today: "Oggi",
				pastDays: "giorni fa"
			}
		};

		return translations[language]?.[key] || translations['fr'][key] || key;
	}

	private startDateMonitoring(): void {
		this.dateCheckInterval = setInterval(() => {
			const currentDate = new Date().toDateString();
			if (currentDate !== this.lastDate) {
				this.lastDate = currentDate;
				if (this.currentAction) {
					this.currentAction.getSettings().then((settings: CounterSettings) => {
						this.updateDaysDisplay(settings);
					});
				}
			}
		}, 60000);
	}

	private stopDateMonitoring(): void {
		if (this.dateCheckInterval) {
			clearInterval(this.dateCheckInterval);
			this.dateCheckInterval = undefined;
		}
	}
}

type CounterSettings = {
	targetDate?: string;
	timezone?: string;
	language?: string;
};
