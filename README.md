# Recruitment Test Typescript - English

## Prerequisites

- Install Webstorm or VSCode
- Install Docker

## Installation

```
git clone git@gitlab.com:skaleet-public/interview/interview-typescript.git
cd interview
```

## Evaluation criteria

For this exercise, your priority is to develop readable, tested and maintainable code.
We will evaluate your knowledge of SOLID principles, your skills in automated testing, hexagonal architecture and the tactical patterns of Domain Driven Design.

You don't need to have implemented all the business rules to pass this test.
We prefer a candidate who doesn't implement all the rules, but delivers code he's proud of.

The aim of the exercise is to demonstrate your ability to understand a business problem and model it in clean, tested code.
You must then implement the handle() method of the `PayByCardCommandHandler` class and the associated tests to validate your implementation in `PayByCardCommand.handler.test.ts`.

## Exercise #1: 

### Use case description

A customer visits a retailer and wishes to pay for his purchases by credit card.
He places the card on the payment terminal and a request is sent to the system to validate the transaction.

You need to implement the business logic that is triggered when such a call arrives on the system.
Here's a list of the business rules to be implemented:

- The input amount is strictly positive.
- The currency of the impacted accounts and of the payment must be identical.
- The customer's account is debited by the amount of the transaction.
- The merchant's account is credited with the transaction amount.
- The transaction date is the current date at the time of payment.

**Please note**: amounts are modeled in centimes. So `100` is `1.00 €`.

### Acceptance criteria

### Example 1

- A customer has a balance of €150
- A merchant has a balance of €2,500
- The bank has a balance of €10,000

The customer makes a payment of €15.36

|                  | Customer's account | Merchant's account |
|------------------|--------------------|--------------------|
| Initial balance* | 150 €              | 2 500 €            |
| *payment*        | -15.36 €           | +15.36 €           |
| *final balance*  | 134.64 €           | 2 515.36 €         |


### Class available

- Account: represents a bank account
- AccountEntry: represents a bank account entry
- Amount : represents an amount
- TransactionLog : represents a transaction log

### Constraints 

- The PayByCardCommand class must not be modified
- The name and parameters supplied to the public handle() method of the PayByCardCommandHandler class must not be modified.
- The behavior and signature of existing methods of the InMemoryDatabase class must not be modified. New methods can be added if required.
- Apart from the classes specified above, any other class can be modelled.
 
### Run tests

```
docker compose up
```


# Recruitment Test Typescript - Français

## Pré-requis

- Installer Webstorm ou VSCode
- Installer Docker

## Installation

```
git clone git@gitlab.com:skaleet-public/interview/interview-typescript.git
cd interview
```

## Critères d'evaluation

Pour cet exercice votre priorité est de développer un code lisible, testé et maintenable.
Nous évaluerons vos connaissances des principes SOLID, vos compétences en tests automatisés, architecture hexagonale et les tactical patterns du Domain Driven Design.

Il n'est pas nécessaire d'avoir implémenté toutes les règles de gestion pour réussir ce test.
Nous préférons un candidat qui n'implémente pas toutes les règles, mais qui livre un code dont il est fier.

Le but de l'exercice est de montrer votre capacité à comprendre un problème métier et à le modéliser dans un code propre et testé.
Vous devez alors implémenter la méthode handle() de la classe `PayByCardCommandHandler` ainsi que les tests associés pour valider votre implémentation dans `PayByCardCommand.handler.test.ts`

## Exercice #1 : 

### Description du  use case

Un client se rend chez un commerçant et souhaite régler ses achats par carte bancaire.
Il positionne la carte sur le terminal de paiement et une requête est envoyée au système pour valider la transaction.

Vous devez implémenter la logique métier qui se déclenche lorsqu'un tel appel arrive sur le système.
Voici la liste des règles de gestions à implémenter :

- Le montant fourni en entrée est strictement positif.
- La devise des comptes impactés et du paiement doivent être identiques.
- Le compte du client est débité du montant de la transaction.
- Le compte du commerçant est crédité du montant de la transaction.
- La date de la transaction est la date courante au moment du paiement.

**Attention** : les montants sont modélisés en centimes. Donc `100` vaut `1.00 €`.

### Critères d'acceptance

### Example 1

- Un client a un solde de 150€
- Un commerçant a un solde de 2 500€
- La banque a un solde 10 000€

Le client fait un paiement de 15.36 €

|                 | Compte du client | Compte du commerçant |
|-----------------|------------------|----------------------|
| *solde initial* | 150 €            | 2 500 €              |
| *paiement*      | -15.36 €         | +15.36 €             |
| *solde final*   | 134.64 €         | 2 515.36 €           |


### Classe à disposition

- Account : représente un compte bancaire
- AccountEntry : représente une entrée de compte bancaire
- Amount : représente un montant
- TransactionLog : représente un log de transaction

### Contraintes 

- La classe PayByCardCommand ne doit pas être modifiée
- Le nom et les paramètres fournis à la méthode public handle() de la classe PayByCardCommandHandler ne doivent pas être modifiés
- Le comportement et la signature des méthodes existantes de la classe InMemoryDatabase ne doivent pas être modifiés. Il est possible d'y ajouter de nouvelles méthodes si besoin
- Hormis les classes spécifiées ci-dessus, n'importe quelle autre classe peut être mod
 
### Lancer les tests

```
docker compose up
```
