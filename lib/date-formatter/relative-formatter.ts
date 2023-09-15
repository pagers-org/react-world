import type { DateFormatter } from "./date-formatter";

const YEAR_MS = 365 * 24 * 60 * 60 * 1000;
const MONTH_MS = 30 * 24 * 60 * 60 * 1000;
const DAY_MS = 24 * 60 * 60 * 1000;
const HOUR_MS = 60 * 60 * 1000;
const MINUTE_MS = 60 * 1000;

export class RelativeFormatter implements DateFormatter {
  private readonly date: Date;

  constructor(date: Date) {
    this.date = date;
  }

  format(target: Date): string {
    const start = new Date(target);

    const diff = this.date.getTime() - start.getTime();

    if (diff > YEAR_MS) {
      return `${Math.floor(diff / YEAR_MS)} years ago`;
    }

    if (diff > MONTH_MS) {
      return `${Math.floor(diff / MONTH_MS)} months ago`;
    }

    if (diff > DAY_MS) {
      return `${Math.floor(diff / DAY_MS)} days ago`;
    }

    if (diff > HOUR_MS) {
      return `${Math.floor(diff / HOUR_MS)} hours ago`;
    }

    if (diff > MINUTE_MS) {
      return `${Math.floor(diff / MINUTE_MS)} minutes ago`;
    }

    return "Just now";
  }
}
