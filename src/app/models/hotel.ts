export class Hotel {
  constructor(
    public created: Date,
    public updated: Date,
    public name: String,
    public location: object,
    public stars: Number,
    public image: String,
    public amenities: String[],
    public price: object,
    public discount: Number,
    public paymentTypes: String[]
  ) {}
}
