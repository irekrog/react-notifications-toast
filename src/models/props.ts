import { NOTIFICATION_TYPE, POSITION_FROM } from "../constants/enums";

export interface IAttributes {
  type: NOTIFICATION_TYPE;
  message: string;
  positionFrom?: POSITION_FROM;
}
