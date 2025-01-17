import { trips } from "../data/trips";
import Card from "../components/Card";

export default function HomePage() {
  return (
    <div className="container my-5">
      <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
        {trips && trips.map((trip) => <Card key={trip.id} trip={trip} />)}
      </div>
    </div>
  );
}
