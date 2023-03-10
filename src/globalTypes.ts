interface ratingType {
  rate: number;
  count: number;
}
export interface productInterface {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  description: string;
  rating: ratingType;
}

export interface actionInterface {
  type: string;
  payload: unknown;
}

export interface stateInterface {
  products: productInterface[];
}
