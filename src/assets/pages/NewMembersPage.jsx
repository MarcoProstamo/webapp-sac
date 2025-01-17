import { useParams } from "react-router-dom";

export default function NewMembersPage() {
  const { id } = useParams();
  return <h1>New Members {id}</h1>;
}
