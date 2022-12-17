export interface Filters {
  [key: string]: string | number | null | undefined;
  author?: string | null | undefined;
  bpm?: number | null | undefined;
  key?: string | null | undefined;
  price?: number | null | undefined;
  category?: string | null | undefined;
}
