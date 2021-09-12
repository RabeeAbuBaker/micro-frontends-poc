import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

interface Car {
  description: string,
  id: number,
  img: string,
  name: string,
  price: number,
  year: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  car!: Car;
  isAdmin!: boolean;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.isAdmin = window.location.pathname === '/admin'
    window.addEventListener("carRent", (event) => {
      // @ts-ignore
      this.car = {...event.detail};
    });
  }

  addCar() {
    window.dispatchEvent(
      new CustomEvent("addCar", {
        detail: {
          id: 6,
          name: "Alfa Romeo Mito",
          year: 2008,
          price: "16,450",
          description:
            "3-doors, hatchback, with 5 speed manual transmission and a 160 km/h top Speed",
          img: "https://www.cars-data.com/webp/thumbs/350px/alfa-romeo/alfa-romeo-mito_52_11.webp"
        }
      })
    );
  }
}
