import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { guests } from "../data/guests";

export default function NewMembersPage() {
  const navigate = useNavigate();

  const { id } = useParams();
  const formInitialData = {
    isStaff: false,
    id: guests.length + 1,
    trip_id: parseInt(id),
    name: "",
    surname: "",
    age: "",
    cellphone_number: "",
    blood_type: "",
    email: "",
    fiscal_code: "",
    passport_number: "",
    emergency_contact: "",
  };

  const [formData, setFormData] = useState(formInitialData);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    const newData = {
      ...formData,
      [name]: value,
    };
    setFormData(newData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    guests.push(formData);
    setFormData(formInitialData);
    navigate(`/trips/${id}`);
    console.log(formData, guests);
  }

  function handleCancel() {
    setFormData(formInitialData);
  }

  return (
    <div className="container my-5">
      <h1 className="fw-semibold text-center">Add New Guest</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="nameInput"
            placeholder="destination"
            onChange={handleChange}
            name="name"
            value={formData.name}
            required
          />
          <label className="text-light" htmlFor="nameInput">
            Name
          </label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Surname"
            id="surnameInput"
            onChange={handleChange}
            name="surname"
            value={formData.surname}
            required
          />
          <label className="text-light" htmlFor="surnameInput">
            Surname
          </label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="ageInput"
            placeholder="Age"
            onChange={handleChange}
            name="age"
            value={formData.age}
            required
          />
          <label className="text-light" htmlFor="ageInput">
            Age
          </label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="cellphoneInput"
            placeholder="Cellphone Number"
            onChange={handleChange}
            name="cellphone_number"
            value={formData.cellphone_number}
            required
          />
          <label className="text-light" htmlFor="cellphoneInput">
            Cellphone Number
          </label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="bloodTypeInput"
            placeholder="Blood Type"
            onChange={handleChange}
            name="blood_type"
            value={formData.blood_type}
            required
          />
          <label className="text-light" htmlFor="bloodTypeInput">
            Blood Type
          </label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={formData.email}
            required
          />
          <label className="text-light" htmlFor="emailInput">
            Email
          </label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="fiscalCodeInput"
            placeholder="Fiscal Code"
            onChange={handleChange}
            name="fiscal_code"
            value={formData.fiscal_code}
            required
          />
          <label className="text-light" htmlFor="fiscalCodeInput">
            Fiscal Code
          </label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="passPortInput"
            placeholder="Passport Number"
            onChange={handleChange}
            name="passport_number"
            value={formData.passport_number}
            required
          />
          <label className="text-light" htmlFor="passPortInput">
            Passport Number
          </label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="emergencyInput"
            placeholder="Emergency Contact"
            onChange={handleChange}
            name="emergency_contact"
            value={formData.emergency_contact}
            required
          />
          <label className="text-light" htmlFor="emergencyInput">
            Emergency Contact
          </label>
        </div>

        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-success">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
