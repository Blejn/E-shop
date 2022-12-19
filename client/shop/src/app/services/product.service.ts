import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = '/products';
  private apiUrlPromotions = '/products/promotions';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.API_URL + this.apiUrl);
  }

  getPromotionProduts(): Observable<Product[]> {
    return this.http.get<Product[]>(
      environment.API_URL + this.apiUrlPromotions
    );
  }
}
