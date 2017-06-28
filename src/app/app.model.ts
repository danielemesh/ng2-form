export interface Color {
  value: ColorValues;
  display: string;
}

export interface Message {
  errorString: string;
  errorType: string;
}

export enum  ColorValues {
  White,
  Black,
  Green
}
