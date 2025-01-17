import { useState } from "react";
import { guests as guestsAll } from "../data/guests";

export default function ContactsPage() {
  const initialData = {
    term: "",
  };
  const [formData, setFormData] = useState(initialData);
  const [guests, setGuests] = useState(guestsAll);

  function handleSubmit(e) {
    e.preventDefault();
    setFormData(initialData);
    setGuests(guestsAll);
  }

  function handleChange(e) {
    let term = e.target.value;
    setFormData({
      term,
    });
    if (term) {
      setGuests(
        guestsAll.filter(
          (guest) =>
            guest.name.toLowerCase().includes(formData.term.toLowerCase()) ||
            guest.surname.toLowerCase().includes(formData.term.toLowerCase())
        )
      );
    } else {
      setGuests(guestsAll);
    }
  }

  return (
    <div className="container mt-5">
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

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {guests &&
            guests.map((guest) => (
              <tr
                key={guest.id}
                className="cursor-pointer"
                data-bs-toggle="modal"
                data-bs-target={"#modal" + guest.id}
              >
                <td className="text-center">
                  <div
                    className={`d-inline-block avatar ${
                      guest.isStaff ? "text-bg-danger" : "text-bg-light"
                    }`}
                  >
                    {guest.name.charAt(0)}
                  </div>
                </td>
                <td>{guest.name}</td>
                <td>{guest.surname}</td>
                <td className="text-center">
                  <button className="btn btn-warning mx-2">
                    <i className="fa-solid fa-pencil"></i>
                  </button>
                  <button className="btn btn-danger">
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {/* Generazione Modali */}
      {guests &&
        guests.map((guest) => (
          <div key={guest.id}>
            <div
              className="modal fade text-light"
              id={"modal" + guest.id}
              tabIndex="-1"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5">{`${guest.name} ${guest.surname}`}</h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        Age:{" "}
                        <span className="badge fs-6 text-bg-secondary">
                          {guest.age}
                        </span>
                      </li>
                      <li className="list-group-item">
                        Cellphone Number:{" "}
                        <span className="badge fs-6 text-bg-secondary">
                          {guest.cellphone_number}
                        </span>
                      </li>
                      <li className="list-group-item">
                        Blood Type:{" "}
                        <span className="badge fs-6 text-bg-secondary">
                          {guest.blood_type}
                        </span>
                      </li>
                      <li className="list-group-item">
                        Email:{" "}
                        <span className="badge fs-6 text-bg-secondary">
                          {guest.email}
                        </span>
                      </li>
                      <li className="list-group-item">
                        Fiscal Code:{" "}
                        <span className="badge fs-6 text-bg-secondary">
                          {guest.fiscal_code}
                        </span>
                      </li>
                      <li className="list-group-item">
                        Address:{" "}
                        <span className="badge fs-6 text-bg-secondary">
                          {guest.address}
                        </span>
                      </li>
                      <li className="list-group-item">
                        Passport number:{" "}
                        <span className="badge fs-6 text-bg-secondary">
                          {guest.passport_number}
                        </span>
                      </li>
                      <li className="list-group-item">
                        Dietary Preferences:{" "}
                        <span className="badge fs-6 text-bg-secondary">
                          {guest.dietary_preferences}
                        </span>
                      </li>
                      <li className="list-group-item">
                        Allergies:{" "}
                        <span className="badge fs-6 text-bg-secondary">
                          {guest.allergies}
                        </span>
                      </li>
                      <li className="list-group-item">
                        Languages Spoken:{" "}
                        <span className="badge fs-6 text-bg-secondary">
                          {guest.languages_spoken.join(", ")}
                        </span>
                      </li>
                      <li className="list-group-item">
                        Emergency Contact:{" "}
                        <span className="badge fs-6 text-bg-secondary">
                          {guest.emergency_contact.phone}
                        </span>
                      </li>
                      <li className="list-group-item">
                        Travel Insurance:{" "}
                        <span className="badge fs-6 text-bg-secondary">
                          {guest.travel_insurance}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="modal-footer d-flex justify-content-between">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target={"#modalMsg" + guest.id}
                      data-bs-whatever="@mdo"
                    >
                      <i className="fa-solid fa-comment"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade text-light"
              id={"modalMsg" + guest.id}
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      To: {`${guest.name} ${guest.surname}`}
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="recipient-name"
                          value={guest.cellphone_number}
                          readOnly
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="message-text"
                          className="col-form-label"
                        >
                          Message:
                        </label>
                        <textarea
                          className="form-control"
                          id="message-text"
                        ></textarea>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer d-flex justify-content-between">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                      onClick={() => alert("Messaged Sent")}
                    >
                      Send message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
