import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CarDealershipService {
  private dataUrl = 'assets/carData.json'; // Correct path to your JSON file

  constructor(private http: HttpClient) {}

  getCarData(): Observable<any[]> {
    return this.http.get<any[]>(this.dataUrl).pipe(
      catchError((error) => {
        console.error('Error fetching car data:', error);
        return throwError(() => new Error('Failed to fetch car data'));
      })
    );
  }
}


