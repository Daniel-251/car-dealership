import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { CarDealershipService } from '../car-dealership.service';

@Component({
  selector: 'app-global-view',
  standalone: true,
  imports: [CommonModule, RouterModule], // Add CommonModule here
  templateUrl: './global-view.component.html',
  styleUrls: ['./global-view.component.css']
})
export class GlobalViewComponent implements OnInit {
  cars: any[] = [];
  filteredCars: any[] = [];

  constructor(private carService: CarDealershipService, private router: Router) {}

  ngOnInit(): void {
    this.carService.getCarData().subscribe((data) => {
      this.cars = data;
      this.filteredCars = data; // Initialize filteredCars for search functionality
    });
  }

  viewDetails(car: any): void {
    this.router.navigate(['/detail', car.itemNumber]);
  }

  filterCars(event: any): void {
    const query = event.target.value.toLowerCase();
    this.filteredCars = this.cars.filter((car) =>
      `${car.make} ${car.model}`.toLowerCase().includes(query)
    );
  }
}



