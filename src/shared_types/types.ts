export type ChangeTimeType = React.ChangeEvent<{value: number, name: string}>;

export interface ITime {
  hrs: number;
  mins: number;
  secs: number;
  mss: number;
}
