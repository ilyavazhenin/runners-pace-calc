import { SelectChangeEvent } from "@mui/material";

export type ChangeTimeType = SelectChangeEvent;

export interface ITime {
  hrs: number;
  mins: number;
  secs: number;
  mss: number;
}
