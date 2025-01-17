import { guests } from "../data/guests";

export default function ContactsPage() {
  return (
    <div className="container mt-5">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
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
                  <div className="d-inline-block avatar text-bg-light">
                    {guest.name.charAt(0)}
                  </div>
                </td>
                <td>{guest.name}</td>
                <td>{guest.surname}</td>
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
                    <ul className="list-unstyled">
                      <li>{guest.age}</li>
                      <li>{guest.cellphone_number}</li>
                      <li>{guest.blood_type}</li>
                      <li>{guest.email}</li>
                      <li>{guest.fiscal_code}</li>
                      <li>{guest.address}</li>
                      <li>{guest.passport_number}</li>
                      <li>{guest.dietary_preferences}</li>
                      <li>{guest.allergies}</li>
                      <li>{guest.languages_spoken}</li>
                      <li>{guest.emergency_contact.phone}</li>
                      <li>{guest.travel_insurance}</li>
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
              <div className="modal-dialog">
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
