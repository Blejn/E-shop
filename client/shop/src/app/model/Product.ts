export interface Product {
  // [key: string]: string | string[] | number | boolean;
  id: string;
  author: string[];
  bpm: number;
  key: string;
  price: number;
  image: string;
  category: string[];
  promotion: boolean;
  title: string;
}
