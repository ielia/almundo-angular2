import { Hotel } from './hotel';

// TODO: In case of pagination, we should delegate this logic to the API.

export class OrderBy {
  constructor(
    public text: string,
    public value: string
  ) {}

  public comparator(a: Hotel, b: Hotel) {
    return 0;
  }
}

export class OrderByName extends OrderBy {
  constructor() {
    super('Nombre de Hotel', 'name');
  }

  public comparator(a: Hotel, b: Hotel) {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  }
}

export class OrderByPromoPrice extends OrderBy {
  constructor() {
    super('Precio', 'promo-price');
  }

  public comparator(a: Hotel, b: Hotel) {
    const aPP = a.getPromoPrice(),
      bPP = b.getPromoPrice();
    return aPP < bPP ? -1 : aPP > bPP ? 1 : 0;
  }
}

export class OrderByRegularPrice extends OrderBy {
  constructor() {
    super('Precio sin Promo', 'regular-price');
  }

  public comparator(a: Hotel, b: Hotel) {
    return a.price.amount < b.price.amount ? -1 : a.price.amount > b.price.amount ? 1 : 0;
  }
}

export class OrderByRelevance extends OrderBy {
  constructor() {
    super('Más Relevantes', 'relevance');
  }

  public comparator(a: Hotel, b: Hotel) {
    return a.advertised && b.advertised ? 0 : a.advertised ? -1 : b.advertised ? 1 : 0;
  }
}

export class OrderByStars extends OrderBy {
  constructor() {
    super('Cantidad de Estrellas', 'stars');
  }

  public comparator(a: Hotel, b: Hotel) {
    return a.stars > b.stars ? -1 : a.stars < b.stars ? 1 : 0;
  }
}
