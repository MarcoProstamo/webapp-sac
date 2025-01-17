import { useParams } from "react-router-dom";

export default function TripPage() {
  const { id } = useParams();
  return <h1>TripPage {id}</h1>;
}
