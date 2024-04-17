import { AccountEntry } from './AccountEntry';

export class TransactionLog {
  constructor(
    public id: string,
    public date: Date,
    public accounting: AccountEntry[]
  ) {}
}
