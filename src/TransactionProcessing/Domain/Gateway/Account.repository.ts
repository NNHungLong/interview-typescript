import { Account } from "../Model/Account";

export interface AccountRepository {
    loadByNumber(accountNumber: string): Account|null;

    saveAccount(account: Account): void;
}
