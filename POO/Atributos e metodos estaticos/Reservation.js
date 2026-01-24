class Reservation {
  constructor(guests, room, days) {
    this.guests = guests;
    this.room = room;
    this.days = days;
    this.total = days * Reservation.baseFee;
  }

  static baseFee = 100;

  static showBaseFee() {
    return console.log(
      `The base fee for a reservation is $${Reservation.baseFee} per day.`,
    );
  }

  static get premiumFee() {
    return Reservation.baseFee * 1.5;
  }
}

Reservation.showBaseFee(); // "The base fee for a reservation is $100 per day."

const r1 = new Reservation(2, "101A", 3);
console.log(r1);

Reservation.baseFee = 200; // Update the base fee and premium fee

const r2 = new Reservation(1, "202B", 5);
console.log(r2);

console.log(`The premium fee is $${Reservation.premiumFee} per day.`); // "The premium fee is $150 per day."
