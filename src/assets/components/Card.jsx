import { Link } from "react-router-dom";

export default function Card({ trip }) {
  const {
    id,
    img,
    destination,
    departure_date,
    arrival_date,
    duration,
    guest_number,
    emergency_number,
  } = trip;
  return (
    <div className="col">
      <Link to={`/trips/${id}`} className="text-decoration-none">
        <div className="card h-100">
          <img src={img} className="card-img-top h-100" alt={destination} />
          <div className="card-body h-100">
            <h3 className="card-title text-center mb-3">{destination}</h3>
            <p className="card-text">
              <strong>Dep:</strong> {departure_date}
            </p>
            <p className="card-text">
              <strong>Arr:</strong> {arrival_date}
            </p>
            <p className="card-text">
              <strong>Dur:</strong> {duration}
            </p>
          </div>
          <div className="d-flex justify-content-between align-items-end card-body">
            <span>
              <strong>Emg:</strong> {emergency_number}
            </span>
            <span>
              <strong>Guests:</strong> {guest_number}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
