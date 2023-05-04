import moment = require('moment');
import { isEmpty } from '../index';

export const dateTimeFormat = (dateTime: string | number, format: string = 'YYYY-MM-DD HH:mm:ss'): string => {
  try {
    if (!isEmpty(dateTime)) {
      const newDateTime: Date = new Date(dateTime);
      if (format.includes('YYYY')) {
        format = format.replace('YYYY', newDateTime.getFullYear() as unknown as string);
      }

      if (format.includes('MM')) {
        let month: number | string = newDateTime.getMonth() + 1;
        month = month > 9 ? month : `0${month}`;
        format = format.replace('MM', month as string);
      }

      if (format.includes('DD')) {
        let date: number | string = newDateTime.getDate();
        date = date > 9 ? date : `0${date}`;
        format = format.replace('DD', date as string);
      }

      if (format.includes('HH')) {
        let hour: number | string = newDateTime.getHours();
        hour = hour > 9 ? hour : `0${hour}`;
        format = format.replace('HH', hour as string);
      }

      if (format.includes('mm')) {
        let minute: number | string = newDateTime.getMinutes();
        minute = minute > 9 ? minute : `0${minute}`;
        format = format.replace('mm', minute as string);
      }

      return format;
    } else {
      return '';
    }
  } catch (err) {
    return '';
  }
};

export const momentFormat = (dateTime: string | number, format = 'YYYY-MM-DD HH:mm'): string => {
  try {
    if (!isEmpty(dateTime)) {
      const newDateTime = new Date(dateTime);
      return moment(newDateTime).format(format);
    }
    return '';
  } catch (err) {
    return '';
  }
};

export const previousMonthISO = (): Date => {
  const today = new Date();
  const firstDayOfPrevMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
  const prevMonth = firstDayOfPrevMonth.getMonth() + 1;
  const prevMonthFirstDate = `${firstDayOfPrevMonth.getFullYear()}-${prevMonth.toString().padStart(2, '0')}-01`;
  return new Date(prevMonthFirstDate);
};
