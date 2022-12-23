export enum ErrorTypeEnum {
  POSTGRES = "postgres",
}

export interface IError {
  appCode: number;
  type: string;
  code: string;
  condition: string;
}
