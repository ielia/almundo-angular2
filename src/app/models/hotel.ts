import { PriceRange } from './priceRange';

class Location {
  constructor(
    public address: String,
    public city: String,
    public country: String,
    public lat: Number,
    public lng: Number
  ) {}
}

class Price {
  constructor(
    public currency: String,
    public amount: Number
  ) {}
}

export class Hotel {
  public name: String;
  public location: Location;
  public stars: Number;
  public image: String;
  public amenities: String[];
  public price: Price;
  public discount: Number;
  public paymentTypes: String[];
  public advertised: Boolean;

  constructor(jsonObject) {
    // Object.keys(this).reduce((jspo, field) => { jspo[field] = jsonObject[field]; return jspo; }, this);
    this.name = jsonObject.name;
    this.location = jsonObject.location;
    this.stars = jsonObject.stars;
    this.image = jsonObject.image;
    this.amenities = jsonObject.amenities;
    this.price = jsonObject.price;
    this.discount = jsonObject.discount;
    this.paymentTypes = jsonObject.paymentTypes;
    this.advertised = jsonObject.advertised;
  }

  public getPromoPrice(): Number {
    return Number(this.price.amount) * (1 - Number(this.discount || 0));
  }

  public inPriceRange(priceRange: PriceRange): Boolean {
    return this.price.amount >= priceRange.lowerBound && this.price.amount <= priceRange.upperBound;
  }

  public inPriceRangeSafe(priceRange: PriceRange): Boolean {
    return !priceRange || this.inPriceRange(priceRange);
  }

  public matchesName(matchString: String): Boolean {
    return !matchString || this.name.toLowerCase().indexOf(matchString.toLowerCase()) >= 0;
  }
}
