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
  constructor(
    public created: Date,
    public updated: Date,
    public name: String,
    public location: Location,
    public stars: Number,
    public image: String,
    public amenities: String[],
    public price: Price,
    public discount: Number,
    public paymentTypes: String[],
    public advertised: Boolean
  ) {}
}
