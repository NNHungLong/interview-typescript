import { AccountRepository } from "../../Domain/Gateway/Account.repository";
import { TransactionRepository } from "../../Domain/Gateway/Transaction.repository";
import { Account } from "../../Domain/Model/Account";
import { TransactionLog } from "../../Domain/Model/TransactionLog";
import { cloneDeep } from '@types/lodash';


export class InMemoryDataBase implements AccountRepository, TransactionRepository {

    private transactions: Map<string, TransactionLog> = new Map<string, TransactionLog>();
    private accounts: Map<string, Account> = new Map<string, Account>();

    constructor(
        accounts : Account[],
        transactions: TransactionLog[]
    ) {
        accounts.forEach(account => this.accounts.set(account.number, account));
        transactions.forEach(transaction => this.transactions.set(transaction.id, transaction));
    }

    loadByNumber(accountNumber: string): Account | null {
        if (this.accounts.get(accountNumber)) {
            cloneDeep(this.accounts.get(accountNumber))
        }
        return null;
    }

    getTransactions(): Map<string, TransactionLog> {
        return this.transactions;
    }

    getAccounts(): Map<string, Account> {
        return this.accounts;
    }

    loadByTransactionId(transactionId: string): TransactionLog | null {
        return this.transactions.get(transactionId) || null;
    }

    saveTransaction(transaction: TransactionLog): void {
        this.transactions.set(transaction.id, transaction);
    }

    saveAccount(account: Account) {
        this.accounts.set(account.number, account);
    }
}
