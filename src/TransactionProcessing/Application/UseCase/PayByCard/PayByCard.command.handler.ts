import { PayByCardCommand } from './PayByCard.command';
import { TransactionRepository } from '../../../Domain/Gateway/Transaction.repository';
import { AccountRepository } from '../../../Domain/Gateway/Account.repository';
import { InMemoryDataBase } from '../../../Infrastructure/Gateway/InMemoryDataBase';
import { v4 as uuidv4 } from 'uuid';
import { AccountEntry } from '../../../Domain/Model/AccountEntry';
import { Amount } from '../../../Domain/Model/Amount';
import { TransactionLog } from '../../../Domain/Model/TransactionLog';
import { Account } from '../../../Domain/Model/Account';

export class PayByCardCommandHandler {
  constructor(
    private readonly transactionRepository: TransactionRepository,
    private readonly accountRepository: AccountRepository
  ) {}

  public handle(command: PayByCardCommand) {
    let clientAccountNumber = command.details.clientAccountNumber;
    let merchantAccountNumber = command.details.merchantAccountNumber;

    let amount = command.details.amount;
    // The input amount is strictly positive.
    if (amount <= 0) {
      throw new Error('The Amount must be greater than 0');
    }

    let currency = command.details.currency;
    let clientAccount =
      this.accountRepository.loadByNumber(clientAccountNumber);
    let merchantAccount = this.accountRepository.loadByNumber(
      merchantAccountNumber
    );

    let clientBalanceAmount = clientAccount.balance.value;
    let merchantBalanceAmount = merchantAccount.balance.value;

    // todo:
    // compare the transaction currency with the account currency
    if (clientAccount === null) {
      throw new Error('Client account not found');
    }
    if (merchantAccount === null) {
      throw new Error('Merchant account not found');
    }
    if (clientAccount.balance.currency !== currency) {
      throw new Error('Client account currency mismatch');
    }
    if (merchantAccount.balance.currency !== currency) {
      throw new Error('Merchant account currency mismatch');
    }

    // make sure the client has enough money
    if (clientBalanceAmount < amount) {
      throw new Error('Insufficient funds');
    }

    // make transaction
    // create a log in the transaction repository
    let transactionId = uuidv4();
    let transactionDate = new Date();
    let clientAccountEntry = new AccountEntry(
      clientAccountNumber,
      new Amount(amount, currency),
      new Amount(clientBalanceAmount - amount, currency)
    );
    let merchantAccountEntry = new AccountEntry(
      merchantAccountNumber,
      new Amount(amount, currency),
      new Amount(merchantBalanceAmount + amount, currency)
    );
    let transactionLog = new TransactionLog(transactionId, transactionDate, [
      clientAccountEntry,
      merchantAccountEntry,
    ]);
    this.transactionRepository.saveTransaction(transactionLog);

    // update the account repository - save the new balances
    let newClientAccount = new Account(
      clientAccountNumber,
      clientAccountEntry.newBalance
    );
    let newMerchantAccount = new Account(
      merchantAccountNumber,
      merchantAccountEntry.newBalance
    );
    this.accountRepository.saveAccount(newClientAccount);
    this.accountRepository.saveAccount(newMerchantAccount);

    /*
        Your turn :)
        À vous de jouer !
         */
  }
}
