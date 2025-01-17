import { useParams } from "react-router-dom";
import { trips } from "../data/trips";
import { guests as allGuests } from "../data/guests";
import GuestCard from "../components/GuestCard";
import { useState } from "react";

export default function TripPage() {
  const { id } = useParams();
  const trip = trips.find((trip) => trip.id === parseInt(id));
  const { img, destination } = trip;
  const guests = allGuests.filter((guest) => guest.trip_id === parseInt(id));

  const initialData = {
    term: "",
  };
  const [formData, setFormData] = useState(initialData);
  const [filteredGuests, setFilteredGuests] = useState(guests);

  function handleSubmit(e) {
    e.preventDefault();
    setFormData(initialData);
    setGuests(allGuests);
  }

  function handleChange(e) {
    let term = e.target.value;
    setFormData({
      term,
    });
    if (term) {
      setFilteredGuests(
        guests.filter(
          (guest) =>
            guest.name.toLowerCase().includes(formData.term.toLowerCase()) ||
            guest.surname.toLowerCase().includes(formData.term.toLowerCase())
        )
      );
    } else {
      setFilteredGuests(guests);
    }
  }

  return (
    <div className="container pb-5">
      <div className="row justify-content-center mt-5 mb-3">
        <div className="col-12 col-lg-5">
          <div className="card border-0 rounded-5 overflow-hidden">
            <img src={img} alt={destination} />
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-center fw-semibold">{destination}</h1>
        <form className="d-flex mb-2" role="search" onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={formData.term}
            onChange={handleChange}
          />
          <button className="btn btn-outline-dark" type="submit">
            Cancel
          </button>
        </form>
        <div className="row row-cols-3 g-1">
          {filteredGuests &&
            filteredGuests.map((guest) => (
              <GuestCard key={guest.id} guest={guest} />
            ))}
        </div>
      </div>
    </div>
  );
}
