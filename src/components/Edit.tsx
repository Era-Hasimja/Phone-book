import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:8000/phonebook/" + id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setName(data.name);
        setLastName(data.lastName);
        setAddress(data.address);
        setCity(data.city);
        setCountry(data.country);
        setEmail(data.email);
        setNumber(data.number);
      })
      .catch((error) => console.log(error));
  }, []);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const phoneBookData = {
      id,
      name,
      lastName,
      address,
      city,
      country,
      email,
      number,
    };

    fetch("http://localhost:8000/phonebook/" + id, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(phoneBookData),
    })
      .then((response) => {
        alert("Saved successfully");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="container">
      <div className="card-title">
        <h2 className="mb-5">Edit</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="text">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            placeholder="Enter the Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="text">Last Name:</label>
          <input
            type="text"
            className="form-control"
            id="last name"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="text">Adrress:</label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="text">City:</label>
          <input
            type="text"
            className="form-control"
            id="city"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="text">Country:</label>
          <input
            type="text"
            className="form-control"
            id="country"
            placeholder="Enter country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="text">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter the Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="text">Number:</label>
          <input
            type="text"
            className="form-control"
            id="number"
            placeholder="Enter the Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>

        <button type="submit" className="btn mt-3 btn-primary">
          Save
        </button>
        <Link to="/" className="btn btn-danger button-back">
          Back
        </Link>
      </form>
    </div>
  );
};

export default Edit;
