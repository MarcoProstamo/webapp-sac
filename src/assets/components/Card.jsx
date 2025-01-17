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
        <div className="card h-100 border-0">
          <img src={img} className="card-img-top h-100" alt={destination} />
          <span className="text-center text-bg-secondary fs-1">
            {destination}
          </span>
          <div className="card-body h-50 d-flex flex-column justify-content-center">
            <div className="card-text d-flex mx-1 fs-5 position-relative">
              <span className="badge text-bg-success align-self-center py-2">
                <i className="fa-solid fa-plane-departure"></i> {departure_date}
              </span>
              <hr className="border border-warning border-2 opacity-75 w-100" />
              <span className="badge text-bg-primary align-self-center py-2">
                {arrival_date} <i className="fa-solid fa-plane-arrival"></i>
              </span>
            </div>
            <p className="card-text"></p>
          </div>
          <div className="d-flex justify-content-between align-items-end card-body fs-4">
            <span className="badge text-bg-danger p-2">
              <i className="fa-solid fa-triangle-exclamation"></i>{" "}
              {emergency_number}
            </span>

            <span className="badge text-bg-info p-2">
              <i className="fa-solid fa-user"></i> {guest_number}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
