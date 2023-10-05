import dayjs from 'dayjs';

class DayFormatter {
  date: Date;
  constructor(date: Date) {
    this.date = date;
  }

  getMonthDate() {
    return dayjs(this.date).locale('en').format('MMMM Do');
  }

  getMonthDayYear() {
    return dayjs(this.date).format('MMMM D, YYYY');
  }
}

export default DayFormatter;
