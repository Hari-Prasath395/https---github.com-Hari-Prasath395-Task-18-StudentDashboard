import React, { useState, useEffect } from "react";
import StudentTable from "../Components/StudentTable";

const StudentManagement = () => {
  const initialFormState = {
    id: null,
    name: "",
    course: "",
    batchId: "",
    email: "",
    phoneNumber: "",
  };

  const [currentStudent, setCurrentStudent] = useState(initialFormState);
  const [students, setStudents] = useState([]);
  const [editing, setEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentStudent({ ...currentStudent, [name]: value });
  };

  const addStudent = ()=>{
    if (
      !currentStudent.name ||
      !currentStudent.course ||
      !currentStudent.batchId ||
      !currentStudent.email ||
      !currentStudent.phoneNumber
    )
      return;
    const student = { ...currentStudent, id: students.length + 1 };
    setStudents([...students, student]);
    setCurrentStudent(initialFormState);
    localStorage.setItem("students", JSON.stringify([...students, student]));
  }

  useEffect(() => {
    const savedStudents = JSON.parse(localStorage.getItem("students"));
    if (savedStudents) {
      setStudents(savedStudents);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !currentStudent.name ||
      !currentStudent.course ||
      !currentStudent.batchId ||
      !currentStudent.email ||
      !currentStudent.phoneNumber
    ) {
      return;
    }
    if (editing) {
      updateStudent(currentStudent.id, currentStudent);
    } else {
      addStudent();
    }
  };
  const savedStudentData = JSON.parse(localStorage.getItem("students"));
  

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
    localStorage.setItem("students",JSON.stringify(students.filter((student) => student.id !== id)));
      
      
  };

  const editRow = (student) => {
    setEditing(true);
    setCurrentStudent({
      id: student.id,
      name: student.name,
      course: student.course,
      batchId: student.batchId,
      email: student.email,
      phoneNumber: student.phoneNumber,
    });
  };

  const updateStudent = (id, updatedStudent) => {
    setEditing(false);
    setStudents(
      students.map((student) => (student.id === id ? updatedStudent : student))
    );
  };

  const handleAddStudent = () => {
    setEditing(false);
    setCurrentStudent(initialFormState);
  };

  return (
    <div className="student-container">
      <div className="top-content">
        <h2>Welcome to student's Profile</h2>
        <button className="btn btn-outline-primary"  onClick={handleAddStudent} type="button">
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
                value={currentStudent.name}
              />
            </div>
            <div className="form-group py-1">
              <label htmlFor="course">Course</label>
              <select
                className="form-select"
                id="course"
                name="course"
                onChange={handleInputChange}
                value={currentStudent.course}
                aria-label="Default select example value"
              >
                <option value="">Select Course</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="Javascript">Javascript</option>
              </select>
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
                value={currentStudent.batchId}
                />
              </div>
            {/* <div className="form-group">
              <label htmlFor="batchId">Batch ID:</label>
              <select
                className="form-select"
                id="batchId"
                name="batchId"
                onChange={handleInputChange}
                value={currentStudent.batchId}
                aria-label="Default select example value"
              >
                <option value="">Select Batch</option>
                <option value="1">B44</option>
                <option value="2">B43</option>
                <option value="3">B42</option>
              </select>
            </div> */}
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                onChange={handleInputChange}
                placeholder="Email"
                value={currentStudent.email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                className="form-control"
                onChange={handleInputChange}
                placeholder="Mobile Number"
                value={currentStudent.phoneNumber}
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

      <StudentTable
        students={students}
        editRow={editRow}
        deleteStudent={deleteStudent}
      />
    </div>
  );
};

export default StudentManagement;
























