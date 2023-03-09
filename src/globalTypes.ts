export interface productInterface {
  title: string;
  image: string;
}

export interface actionInterface {
  type: string;
  payload: unknown;
}

export interface stateInterface {
  products: productInterface[];
}
