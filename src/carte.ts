/**
 * Set of structures defining the different characteristics of a card.
 * @module
 */


/**
 *Represents the color that a card can take.  
 */
export enum Couleur {
    pique='pique', carreau='carreau', trèfle='trèfle', coeur='coeur'
}

/**
 * Represents a map with its characteristics.
 */

export type Carte={
    /**
     * Color of cards
     */
    couleur: Couleur
    /**
     * value of cards
     */
    valueCarte: number
}

/**
 * Takes one of the colors of the enumeration and a value between 2 and 14 and
 * output a card.
 * @param color represents the color of a card of the enumeration.
 * @param value represents a value between 2 and 14.
 * @returns the map built from the color and the value passed as a parameter.
 */

export function creerCarte(color: Couleur, value: number ): Carte{
    let card: Carte={ couleur: color, valueCarte: value}
    return card;
}

/**
 * takes a map already built as a parameter and displays.
 * it according to its color by assigning it an emoji.
 * @param card Represents the map paconsole.logssed as a parameter.
 */
export function afficherCartes(card: Carte): void{
    if(card.couleur==Couleur.pique){
        console.log("♠️",card.valueCarte, card.couleur)
    }
    if(card.couleur==Couleur.carreau){
        console.log("♦️",card.valueCarte, card.couleur)
    }
    if(card.couleur==Couleur.trèfle){
        console.log("♣️",card.valueCarte, card.couleur)
    }
    if(card.couleur==Couleur.coeur){
        console.log("♥️",card.valueCarte, card.couleur)
    }
}

/**
 * compare two cards by returning a positive value when the first is higher
 * a negative value when the first card is weak and returns 0 when both are equal.
 * @param card1 the first card passed in prametre.
 * @param card2 the second card passed in prametre.
 * poster at the end of the values ​​whose
 * nature depends on the comparison between the two cards.
 */

export function comparerCartes(card1: Carte, card2: Carte): void{
    if( card1.valueCarte> card2.valueCarte){
        console.log(1);
    }
    else
    {
        if(card2.valueCarte>card1.valueCarte ){
        console.log(-1);
        }
        else
        {
        console.log(0);
        }
    }
}