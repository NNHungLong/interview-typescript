import {PayByCardCommand} from "./PayByCard.command";
import {TransactionRepository} from "../../../Domain/Gateway/Transaction.repository";
import {AccountRepository} from "../../../Domain/Gateway/Account.repository";
import {InMemoryDataBase} from "../../../Infrastructure/Gateway/InMemoryDataBase";

export class PayByCardCommandHandler  {
    constructor(
        private readonly transactionRepository: TransactionRepository,
        private readonly accountRepository: AccountRepository,
) {}

    public handle(command: PayByCardCommand) {
        /*
        Your turn :)
        À vous de jouer !
         */
    }
}
