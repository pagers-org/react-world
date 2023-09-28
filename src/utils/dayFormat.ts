import dayjs from 'dayjs';

class DayFormatter {
  date: Date;
  constructor(date: Date) {
    this.date = date;
  }

  getMonthDayYear() {
    return dayjs(this.date).format('MMMM D, YYYY');
  }
}

export default DayFormatter;
