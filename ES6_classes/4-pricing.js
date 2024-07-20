import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = 0; // Default value
    this._currency = new Currency('', ''); // Default value (empty currency)

    // Validate and set amount
    if (typeof amount === 'number') {
      this._amount = amount;
    } else {
      throw new TypeError('Amount must be a number');
    }

    // Validate and set currency (expects an instance of Currency)
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new TypeError('Currency must be an instance of Currency');
    }
  }

  // Getter and setter for amount
  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAmount === 'number') {
      this._amount = newAmount;
    } else {
      throw new TypeError('Amount must be a number');
    }
  }

  // Getter and setter for currency
  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (newCurrency instanceof Currency) {
      this._currency = newCurrency;
    } else {
      throw new TypeError('Currency must be an instance of Currency');
    }
  }

  // Method to display full price format
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price based on conversion rate
  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number' && typeof conversionRate === 'number') {
      return amount * conversionRate;
    } else {
      throw new TypeError('Amount and conversion rate must be numbers');
    }
  }
}
