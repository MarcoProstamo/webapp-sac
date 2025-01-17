export default function GuestCard({ guest }) {
  return (
    <>
      <div className="col">
        <div
          className="card h-100 cursor-pointer"
          data-bs-toggle="modal"
          data-bs-target={"#modal" + guest.id}
        >
          <div className="card-body d-flex flex-column align-items-center justify-content-center">
            <div className="avatar big mb-2">
              <i className="fa-solid fa-user"></i>
            </div>
            <h6 className="card-title">{`${guest.name} ${guest.surname}`}</h6>
          </div>
        </div>
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
                      <label htmlFor="message-text" className="col-form-label">
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
      </div>
    </>
  );
}
