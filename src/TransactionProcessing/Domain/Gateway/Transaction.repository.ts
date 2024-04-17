import { TransactionLog } from '../Model/TransactionLog';

export interface TransactionRepository {
  saveTransaction(transaction: TransactionLog): void;
  getTransactionById(transactionId: string): TransactionLog;
}
