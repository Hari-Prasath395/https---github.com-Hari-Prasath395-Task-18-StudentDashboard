import React, { useState } from "react";
import MentorTable from "../Components/MentorTable";

const ManageMentor = () => {
  const initialFormState = {
    id: null,
    name: "",
    batchId: "",
    contactNumber: "",
    emergencyContactNumber: "",
  };

  const [currentMentor, setCurrentMentor] = useState({
    id: null,
    name: "",
    batchId: "",
    contactNumber: "",
    emergencyContactNumber: "",
  });

  const [mentor, setMentor] = useState(currentUser);
  const [editing, setEditing] = useState(false);

  useEffect(()=>{
    setMentor(currentMentor)
},[currentMentor])

const handleInputChange = (e) => {
const { name, value } = e.target;
setMentor({ ...mentor, [name]: value });
};

const editRow = (mentor) => {
    setEditing(true);
    setCurrentUser({
      id: mentor.id,
      name: mentor.name,
      batchId: mentor.batchId,
      contactNumber: mentor.contactNumber,
      emergencyContactNumber:mentor.emergencyContactNumber
    });
  };

  const updateMentor = (id, updatedMentor) => {
    setEditing(false);
    setMentors(mentor.map((mentor) => (mentor.id === id ? updatedMentor : mentor)));
  };

  const handleManageClick = () => {
    setShowTable(true);
  };

return (
    <div className="mentor-container">
      <div className="top-content">
        <h2>Welcome to Mentor's's Profile</h2>
        <button
          onClick={handleManageClick}
          className="btn btn-outline-primary"
          type="button"
        >
          Add Mentor
        </button>
      </div>
      <div className="row">
        <div className="col-12 col-md-4 offset-md-0">
          <form onSubmit={handleSubmit}>
            <div className="form-group py-1">
              <label htmlFor="name">Name</label>
              <input
                className="form-control"
                onChange={handleInputChange}
                id="name"
                name="name"
                type="text"
                placeholder="Enter Name"
                value={mentor.name}
              />
            </div>
            <div className="form-group py-1">
              <label htmlFor="batchId">Batch ID</label>
              <input
                className="form-control"
                onChange={handleInputChange}
                id="batchId"
                name="batchId"
                type="text"
                placeholder="Enter Batch ID"
                value={mentor.batchId}
              />
            </div>
            <div className="form-group py-1">
              <label htmlFor="contactNumber">Contact Number</label>
              <input
                className="form-control"
                onChange={handleInputChange}
                id="contactNumber"
                name="contactNumber"
                type="number"
                placeholder="Enter Contact Number"
                value={mentor.contactNumber}
              />
            </div>
            <div className="form-group py-1">
              <label htmlFor="emergencyContactNumber">
                Emergency Contact Number
              </label>
              <input
                className="form-control"
                onChange={handleInputChange}
                id="emergencyContactNumber"
                name="emergencyContactNumber"
                type="number"
                placeholder="Enter Emergency Contact Number"
                value={mentor.emergencyContactNumber}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Update
            </button>
            <button type="submit" className="btn btn-warning mt-3">
              Cancel
            </button>
          </form>
        </div>
      </div>

      {showTable ? (
        <MentorTable editRow={editRow}   />
      ) : null}
    </div>
  );
      }

export default ManageMentor;
