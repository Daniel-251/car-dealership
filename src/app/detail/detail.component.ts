import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDealershipService } from '../car-dealership.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  car: any;

  constructor(
    private route: ActivatedRoute,
    private carService: CarDealershipService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const itemNumber = Number(id); // Safely convert 'id' to a number
      this.carService.getCarData().subscribe((data) => {
        this.car = data.find((c) => c.itemNumber === itemNumber);
      });
    } else {
      console.error('No itemNumber found in route parameters.');
      this.goBack(); // Optionally navigate back if no id is found
    }
  }

  goBack(): void {
    this.router.navigate(['/global-view']);
  }
}

