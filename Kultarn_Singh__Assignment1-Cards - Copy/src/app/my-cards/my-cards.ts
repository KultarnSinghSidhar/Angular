import { Component } from '@angular/core';

@Component({
  selector: 'app-my-cards',
  standalone: true,
  templateUrl: './my-cards.html',
  styleUrl: './my-cards.css'
})
export class MyCards {

  CardDict: { [key: number]: string } = {
    2: "/Card Images/card_2.png",
    3: "/Card Images/card_3.png",
    4: "/Card Images/card_4.png",
    5: "/Card Images/card_5.png",
    6: "/Card Images/card_6.png",
    7: "/Card Images/card_7.png"
  };

  CardsString = [
    "/Card Images/card_2.png",
    "/Card Images/card_3.png",
    "/Card Images/card_4.png",
    "/Card Images/card_5.png",
    "/Card Images/card_6.png",
    "/Card Images/card_7.png"
  ];

  Sort() {
    this.CardsString.sort();
  }

  Shuffle() {
    const numberMap = [2, 3, 4, 5, 6, 7];
    let Numbers: number[] = [];
    let newCards: string[] = [];

    while (Numbers.length !== 6) {
      const randomIndex = Math.floor(Math.random() * 6);
      if (!Numbers.includes(randomIndex)) {
        Numbers.push(randomIndex);
        const cardNumber = numberMap[randomIndex];
        const cardUrl = this.CardDict[cardNumber];
        newCards.push(cardUrl);
      }
    }
    this.CardsString = newCards;
  }

  Reverse() {
    this.CardsString.reverse();
  }
}
