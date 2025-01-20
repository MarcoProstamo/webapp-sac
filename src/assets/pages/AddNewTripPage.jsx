import { useState } from "react";
import { trips } from "../data/trips";
import { useNavigate } from "react-router-dom";

export default function AddNewTripPage() {
  const formInitialData = {
    id: trips.length + 1,
    destination: "",
    img: "https://placehold.co/300x200",
    departure_date: "",
    arrival_date: "",
    guest_number: null,
    emergency_number: "",
  };
  const navigate = useNavigate();
  const [formData, setFormData] = useState(formInitialData);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    const newData = {
      ...formData,
      [name]: value,
    };
    setFormData(newData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    trips.push(formData);
    setFormData(formInitialData);
    navigate(`/trips/${formData.id}`);
  }

  function handleCancel() {
    setFormData(formInitialData);
  }

  return (
    <div className="container my-5">
      <h1 className="fw-semibold text-center">Add New Trip</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="destinationInput"
            placeholder="destination"
            onChange={handleChange}
            name="destination"
            value={formData.destination}
            required
          />
          <label className="text-light" htmlFor="destinationInput">
            Destination
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Image"
            id="imageInput"
            onChange={handleChange}
            name="img"
            value={formData.img}
            required
            disabled
          />
          <label className="text-light" htmlFor="imageInput">
            Image
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="date"
            className="form-control"
            placeholder="Departure Date"
            id="departureDateInput"
            onChange={handleChange}
            name="departure_date"
            value={formData.departure_date}
            required
          />

          <label className="text-light" htmlFor="departureDateInput">
            Departure Date
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="date"
            className="form-control"
            placeholder="Arrival Date"
            id="arrivalDateInput"
            onChange={handleChange}
            name="arrival_date"
            value={formData.arrival_date}
            required
          />

          <label className="text-light" htmlFor="arrivalDateInput">
            Arrival Date
          </label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Emergency Number"
            id="emergencyNumberInput"
            onChange={handleChange}
            name="emergency_number"
            value={formData.emergency_number}
            required
          />
          <label className="text-light" htmlFor="emergencyNumberInput">
            Emergency Number
          </label>
        </div>
        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-success">
            Add Trip
          </button>
        </div>
      </form>
    </div>
  );
}
