import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  id: number;
  name: string;
  lastName: string;
  address: string;
  city: string;
  country: string;
  email: string;
  number: number;
}

const Home = () => {
  const [phoneBookData, setPhoneBookData] = useState<Props[]>([]);
  const navigate = useNavigate();

  const Edit = (id: string | number) => {
    navigate("/phone-book/edit/" + id);
  };
  const Remove = (id: string | number) => {
    if (window.confirm("Ar you sure you want to remove this contact?")) {
      fetch("http://localhost:8000/phonebook/" + id, {
        method: "DELETE",
      })
        .then((response) => {
          alert("Deleted successfully");
          window.location.reload();
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    fetch("http://localhost:8000/phonebook")
      .then((response) => response.json())
      .then((data) => setPhoneBookData(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="container flex-row">
      <h2 className="flex-col">Contacts</h2>
      <div className="button ">
        <Link className="btn  btn-primary " to="phone-book/create">
          Add Contact
        </Link>
      </div>
      <div className="card">
        <div>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Address</th>
                <th scope="col">City</th>
                <th scope="col">Country</th>
                <th scope="col">Email</th>
                <th scope="col">Number</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {phoneBookData?.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.lastName}</td>
                  <td>{item.address}</td>
                  <td>{item.city}</td>
                  <td>{item.country}</td>
                  <td>{item.email}</td>
                  <td>{item.number}</td>
                  <td>
                    <a
                      onClick={() => {
                        Edit(item.id);
                      }}
                      className="btn btn-success"
                    >
                      Edit
                    </a>
                  </td>
                  <td>
                    <a
                      onClick={() => {
                        Remove(item.id);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
