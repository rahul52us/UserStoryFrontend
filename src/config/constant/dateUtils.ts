import moment from "moment";

export const SHORT_DATE_FORMAT: string = "MMM D, YYYY";
export const MEDIUM_DATE_FORMAT: string = "MMMM D, YYYY";
export const LONG_DATE_FORMAT: string = "dddd, MMMM D, YYYY";
export const DDMMYYYY_FORMAT: string = "DD/MM/YYYY";
export const YYYYMMDD_FORMAT: string = "YYYY/MM/DD";

export enum DateTimeOrder {
  DateFirst = "DateFirst",
  TimeFirst = "TimeFirst",
}

export function formatDate(date: Date, format?: string): string {
  return moment(date).format(format || DDMMYYYY_FORMAT);
}

// dateUtils.ts
export function formatDateTime(
  timestamp: string,
  format?: string,
  includeSeconds: boolean = true,
  dateTimeOrder?: DateTimeOrder,
): string {

  const momentDate = moment(timestamp);

  if (!momentDate.isValid()) {
    return '-';
  }

  const order = dateTimeOrder || DateTimeOrder.DateFirst;
  const dateFormat = format || DDMMYYYY_FORMAT;
  const timeFormat = includeSeconds ? 'h:mm:ss A' : 'h:mm A';

  const dateTimeFormat =
    order === DateTimeOrder.DateFirst
      ? `${dateFormat}, ${timeFormat}`
      : `${timeFormat}, ${dateFormat}`;

  const formattedDateTime = moment(timestamp).format(dateTimeFormat);
  return formattedDateTime;
}


export function getCustomTextDate(
  title: string,
  dateString: any,
  format?: string
) {
  try {
    const date = moment.utc(dateString);
    const formattedDate = date.format(format || SHORT_DATE_FORMAT);
    return `${title} ${formattedDate}`;
  } catch (_) {
    return ``;
  }
}



export const currentYear = new Date();
export const oneYearLater = new Date(
  currentYear.getFullYear() + 1,
  currentYear.getMonth(),
  currentYear.getDate()
);

const currentDates = moment();

export const currentYears = currentDates.format('YYYY');
export const currentMonth = currentDates.format('MM');
export const currentDateValue = currentDates.format('DD');