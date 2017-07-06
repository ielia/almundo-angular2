export class PriceRange {
  constructor(
    public lowerBound?: Number,
    public upperBound?: Number
  ) {}

  private isDefined(value): Boolean {
    return typeof(value) !== 'undefined';
  }

  addPrice(priceAmount: Number) {
    if (!this.isDefined(this.lowerBound) || this.lowerBound > priceAmount) {
      this.lowerBound = priceAmount;
    }
    if (!this.isDefined(this.upperBound) || this.upperBound < priceAmount) {
      this.upperBound = priceAmount;
    }
    return this;
  }
}
