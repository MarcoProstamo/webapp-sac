import { useParams } from "react-router-dom";
import { trips } from "../data/trips";
import { guests as allGuests } from "../data/guests";
import GuestCard from "../components/GuestCard";

export default function TripPage() {
  const { id } = useParams();
  const trip = trips.find((trip) => trip.id === parseInt(id));
  const { img, destination } = trip;
  const guests = allGuests.filter((guest) => guest.trip_id === parseInt(id));

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
        <div className="row row-cols-3 g-1">
          {guests &&
            guests.map((guest) => <GuestCard key={guest.id} guest={guest} />)}
        </div>
      </div>
    </div>
  );
}
