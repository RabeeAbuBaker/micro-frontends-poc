import { useEffect, useState } from "react";

const CarDetails = ({ car }) => {

  const rentCar = () => {
    window.dispatchEvent(
      new CustomEvent("carRent", {
        detail: { ...car }
      })
    );
  };

  return (
    <div className="card border-primary text-primary">
      <img className="card-img-top" src={car.img} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{car.name}</h5>
        <p className="card-text">{car.description}</p>
        <p className="card-text"><small className="text-muted">${car.price}</small></p>
        <button type="button" className="btn btn-primary mb-1" onClick={rentCar}>Rent</button>
      </div>
    </div>
  );
};

export function Main(props) {
  useEffect(() => {
    window.addEventListener("carSelect", ({ detail }) => {
      setCar(detail);
    });
  }, []);

  const [car, setCar] = useState();

  return (
    <div style={{ width: "500px" }}>
      {car ?
        <CarDetails car={car} /> :
        <div className="card text-center border-primary"
             style={{ display: "flex", justifyContent: "center", height: "500px" }}>
          <div className="text-primary h5">
            Select a car to view its details here
          </div>
        </div>
      }
    </div>
  );
}

