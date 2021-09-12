import { useEffect, useState } from "react";

const CarsList = ({ cars }) => {

  const emit = (car) => {
    window.dispatchEvent(
      new CustomEvent("carSelect", {
        detail: { ...car }
      })
    );
  };

  return (
    <div className="list-group">
      {cars.map((car) => (
        <div
          role="button"
          key={car.id}
          className="list-group-item list-group-item-action flex-column align-items-start border-primary"
          style={{ cursor: "pointer" }}
          onClick={() => emit(car)}
        >
          <div className=" d-flex justify-content-between align-items-center">
            {car.name}
            <span className="badge badge-primary badge-pill">
                    {car.year}
                  </span>
          </div>
          <small className="text-muted">${car.price}</small>
        </div>
      ))}
    </div>
  );
};

export function Main(props) {
  const [cars, setCars] = useState([
    {
      id: 1,
      name: "Audi Q7",
      year: 2009,
      price: "99,710",
      description:
        "5-doors, suv/crossover, with 6 speed manual transmission and a 210 km/h top Speed",
      img: "https://www.cars-data.com/webp/thumbs/350px/audi/audi-q7_215_9.webp"
    },
    {
      id: 2,
      name: "Audi Q5",
      year: 2008,
      price: "50,660",
      description:
        "5-doors, suv/crossover, with 8 speed automatic transmission and a 222 km/h top Speed",
      img: "https://www.cars-data.com/webp/thumbs/350px/audi/audi-q5_213_1.webp"
    },
    {
      id: 3,
      name: "Hyundai Kona",
      year: 2018,
      price: "40,715",
      description:
        "5-doors, hatchback, with an electric motor and traploze automatic transmission and a 167 km/h top Speed",
      img: "https://www.cars-data.com/webp/thumbs/350px/hyundai/hyundai-kona-electric_4202_1.webp"
    },
    {
      id: 4,
      name: "Ford Mustang",
      year: 2015,
      price: "80,350",
      description:
        "2-doors, coupé, with 6 speed automatic transmission and a 234 km/h top Speed",
      img: "https://www.cars-data.com/webp/thumbs/350px/ford/ford-mustang-fastback_4189_1.webp"
    },
    {
      id: 5,
      name: "Hyundai Ioniq",
      year: 2019,
      price: "27,995",
      description:
        "5-doors, hatchback, with 6 speed automatic with double clutch transmission and a 185 km/h top Speed",
      img: "https://www.cars-data.com/webp/thumbs/350px/hyundai/hyundai-ioniq_4540_1.webp"
    }
  ]);

  useEffect(() => {
    window.addEventListener("addCar", ({ detail }) => {
      setCars([...cars, detail]);
    });
  }, []);

  return (
    <>
      <div className="card border-primary" style={{ width: "500px", minHeight: "500px" }}>
        <div className="card-header">Available cars:</div>
        <div className="card-body">
          <div className="list-group">
            <CarsList cars={cars} />
          </div>
        </div>
      </div>
    </>
  );
}
