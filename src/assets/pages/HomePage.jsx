import { trips } from "../data/trips";
import Card from "../components/Card";

export default function HomePage() {
  return (
    <div className="container my-5">
      <div className="row row-cols-sm-1 row-cols-md-3 row-cols-auto g-3">
        {trips && trips.map((trip) => <Card key={trip.id} trip={trip} />)}
      </div>
    </div>
  );
}
