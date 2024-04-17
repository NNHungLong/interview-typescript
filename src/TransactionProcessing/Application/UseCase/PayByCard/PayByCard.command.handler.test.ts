import { Account } from '../../../Domain/Model/Account';
import { Amount } from '../../../Domain/Model/Amount';
import { InMemoryDataBase } from '../../../Infrastructure/Gateway/InMemoryDataBase';
import { PayByCardCommandHandler } from './PayByCard.command.handler';
import { TransactionRepository } from '../../../Domain/Gateway/Transaction.repository';
import { AccountRepository } from '../../../Domain/Gateway/Account.repository';
import { TransactionLog } from '../../../Domain/Model/TransactionLog';
import { AccountEntry } from '../../../Domain/Model/AccountEntry';
import { PayByCardCommand } from './PayByCard.command';

describe('Exercice #1', () => {
  const BANK_EUR = '847596';
  const BANK_USD = '145896';
  const MERCHANT_EUR = '371954';
  const MERCHANT_USD = '284619';
  const CLIENT_EUR = '951575';
  const CLIENT_USD = '745288';
  let database: InMemoryDataBase;
  let payByCardCommandHandler: PayByCardCommandHandler;
  let transactionRepository: TransactionRepository;
  let accountRepository: AccountRepository;

  beforeEach(() => {
    database = new InMemoryDataBase(
      [
        new Account(BANK_EUR, new Amount(-2150_00, 'EUR')),
        new Account(MERCHANT_EUR, new Amount(2000_00, 'EUR')),
        new Account(CLIENT_EUR, new Amount(150_00, 'EUR')),
        new Account(BANK_USD, new Amount(-1825_00, 'USD')),
        new Account(MERCHANT_USD, new Amount(1750_00, 'USD')),
        new Account(CLIENT_USD, new Amount(75_00, 'USD')),
      ],
      [
        new TransactionLog('abcd', new Date('2024/01/15 11:14:42'), [
          new AccountEntry(
            BANK_EUR,
            new Amount(-2000_00, 'EUR'),
            new Amount(-2000_00, 'EUR')
          ),
          new AccountEntry(
            MERCHANT_EUR,
            new Amount(2000_00, 'EUR'),
            new Amount(2000_00, 'EUR')
          ),
        ]),
        new TransactionLog('efgh', new Date('2024/01/15 13:45:22'), [
          new AccountEntry(
            BANK_EUR,
            new Amount(-150_00, 'EUR'),
            new Amount(-2150_00, 'EUR')
          ),
          new AccountEntry(
            CLIENT_EUR,
            new Amount(150_00, 'EUR'),
            new Amount(150_00, 'EUR')
          ),
        ]),
        new TransactionLog('ijkl', new Date('2024/01/15 14:33:12'), [
          new AccountEntry(
            BANK_USD,
            new Amount(-1750_00, 'USD'),
            new Amount(-1750_00, 'USD')
          ),
          new AccountEntry(
            MERCHANT_USD,
            new Amount(1750_00, 'USD'),
            new Amount(1750_00, 'USD')
          ),
        ]),
        new TransactionLog('mnop', new Date('2024/01/15 15:12:34'), [
          new AccountEntry(
            BANK_USD,
            new Amount(-75_00, 'USD'),
            new Amount(-1825_00, 'USD')
          ),
          new AccountEntry(
            CLIENT_USD,
            new Amount(75_00, 'USD'),
            new Amount(75_00, 'USD')
          ),
        ]),
      ]
    );
    transactionRepository = database;
    accountRepository = database;
    payByCardCommandHandler = new PayByCardCommandHandler(
      database as TransactionRepository,
      database as AccountRepository
    );
  });

  describe('PayByCardCommandHandlerTest', () => {
    it('should process transaction "abcd"', () => {
      const transactionId = 'transaction1';
      let payByCardCommand = {
        clientAccountNumber: CLIENT_EUR,
        merchantAccountNumber: MERCHANT_EUR,
        amount: 150_00,
      };
      let payByCardCommand = new PayByCardCommand(); //
      // expect(payByCardCommand.handle())

      // const result = payByCardCommandHandler.handle(transaction);

      // Assert the result here
      // For example, you can expect the result to be successful
      expect(result.success).toBe(true);
      //A toi de jouer
      expect(null).toBeNull();
    });
  });
});
