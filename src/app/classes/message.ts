export class Message {
  id: string;
  headers: {
    name: string;
    value: string;
  }[];
  raw: string;
  internalDate: Date;
  folder: string;
  isMarked: boolean = false;
}
