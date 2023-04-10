import { useState, useEffect } from "react";
import MentorTable from "../Components/MentorTable";

function Sample() {
  const initialFormState = {
    id: null,
    name: "",
    batchId: "",
    contactNumber: "",
    emergencyContactNumber: "",
  };
  const [currentMentor, setCurrentMentor] = useState(initialFormState);
  const [mentors, setMentors] = useState([]);
  const [editing, setEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentMentor({ ...currentMentor, [name]: value });
  };

  const addMentor = () => {
    if (
      !currentMentor.name ||
      !currentMentor.batchId ||
      !currentMentor.contactNumber ||
      !currentMentor.emergencyContactNumber
    )
      return;
    const mentor = { ...currentMentor, id: mentors.length + 1 };
    setMentors([...mentors, mentor]);
    setCurrentMentor(initialFormState);
    localStorage.setItem("mentors", JSON.stringify([...mentors, mentor]));
  };

  const deleteMentor = (id) => {
    setMentors(mentors.filter((mentor) => mentor.id !== id));
    localStorage.setItem(
      "mentors",
      JSON.stringify(mentors.filter((mentor) => mentor.id !== id))
    );
  };

  useEffect(() => {
    const savedMentors = JSON.parse(localStorage.getItem("mentors"));
    if (savedMentors) {
      setMentors(savedMentors);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !currentMentor.name ||
      !currentMentor.batchId ||
      !currentMentor.contactNumber ||
      !currentMentor.emergencyContactNumber
    )
      return;
    if (editing) {
      updateMentor(currentMentor.id, currentMentor);
    } else {
      addMentor();
    }
  };

  const savedMentorData = JSON.parse(localStorage.getItem("mentors"));

  const editRow = (mentor) => {
    setEditing(true);
    setCurrentMentor({
      id: mentor.id,
      name: mentor.name,
      batchId: mentor.batchId,
      contactNumber: mentor.contactNumber,
      emergencyContactNumber: mentor.emergencyContactNumber,
    });
  };

  const updateMentor = (id, updatedMentor) => {
    setEditing(false);
    setMentors(
      mentors.map((mentor) => (mentor.id === id ? updatedMentor : mentor))
    );
  };

  const [showTable, setShowTable] = useState(true);

  const handleManageClick = () => {
    setShowTable(false);
  };

  return (
    <div className="mentor-container">
      <div className="top-content">
        <h2>Welcome to Mentor's Profile</h2>
        <button
          onClick={handleManageClick}
          className="btn btn-outline-primary"
          type="button"
        >
          Add
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
                value={currentMentor.name}
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
                value={currentMentor.batchId}
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
                value={currentMentor.contactNumber}
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
                value={currentMentor.emergencyContactNumber}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              {editing ? "Update" : "Save"}
            </button>
            {editing && (
              <button
                type="button"
                className="btn btn-warning mt-3 ml-3 mx-3"
                onClick={() => setEditing(false)}
              >
                Cancel
              </button>
            )}
          </form>
        </div>
      </div>
      {showTable && (
        <MentorTable
          mentors={mentors}
          editRow={editRow}
          deleteMentor={deleteMentor}
        />
      )}
    </div>
  );
}

export default Sample;













































































































































































































































































