export interface Product {
    id: number;
  productName: string;
  description: string;
  price: {
    old: number;
    current: number;
  };
  picture:string;
  category_id: number;
  brand_id: number;
  reviews:number[];
}
