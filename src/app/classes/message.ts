export interface Message {
  id: string;
  headers: {
    name: string;
    value: string;
  }[];
  raw: string;
  internalDate: Date;
  folder: string;
  isMarked: boolean;
  topic: string;
}
