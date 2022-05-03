export interface Availability {
  date: Date | string;
  startTime: string;
  endTime: string;
  price: number;
  slots: number;
  type: string;
}
