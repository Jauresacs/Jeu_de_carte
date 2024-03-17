import {comparerCartes, Couleur} from "./carte"
import {Carte} from "./carte"
import { creerCarte } from "./carte"
import { afficherCartes } from "./carte"
/**
 *create a array of 52 cards with the 
 *possibility sets of suits and card numbers.
 * @returns returns the Card record type array that contains all 52 cards.
 */
export function creerJeu(): Array<Carte>{
    let cardNumber: number;
    let pickCard: Carte
    let cards: Carte=creerCarte(Couleur.pique, 2);
    let tableOfCards: Array<Carte>=[cards];
    for(cardNumber=3; cardNumber<=14; cardNumber++){
        pickCard=creerCarte(Couleur.pique, cardNumber);
        tableOfCards.push(pickCard);
    }
    for(cardNumber=2; cardNumber<=14; cardNumber++){
        pickCard=creerCarte(Couleur.carreau, cardNumber);
        tableOfCards.push(pickCard);
    }
    for(cardNumber=2; cardNumber<=14; cardNumber++){
        pickCard=creerCarte(Couleur.trèfle, cardNumber);
        tableOfCards.push(pickCard);
    }
    for(cardNumber=2; cardNumber<=14; cardNumber++){
        pickCard=creerCarte(Couleur.coeur, cardNumber);
        tableOfCards.push(pickCard);
    }
    return tableOfCards;
}
/**
 * takes a deck of cards, displays the first card
 * removes it from the tableau
 * @param tableOfCards the cards game
 * @returns return the cards on the first position and delete 
 * the cards on the tables of cards
 */
export function tirerCarte(tableOfCards: Array<Carte>):Carte{
    let firstCards: Carte=tableOfCards[0];
    tableOfCards.splice(0,1);
    return firstCards;
}
/**
 * shows the operation of all the functions written
 * @module
 */
let cardGame: Array<Carte>;
cardGame=creerJeu();
for(let i:number=0; i<cardGame.length; i++){
    afficherCartes(cardGame[i]);
}
let cardWithdrawn: Carte=tirerCarte(cardGame);
console.log(afficherCartes(cardWithdrawn));
comparerCartes(cardGame[0], cardGame[15]);
console.log(afficherCartes(cardGame[0]));
console.log(afficherCartes(cardGame[15]))