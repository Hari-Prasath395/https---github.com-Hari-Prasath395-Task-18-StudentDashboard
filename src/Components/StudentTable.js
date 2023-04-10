import React from 'react'

export default function StudentTable(props) {
  const { students } = props;
  return (
    <div className='table-responsive'>
      <h4 className='student-table-header mt-3'>Student's Table</h4>
      <table className="table table-striped table-bordered text-center mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Batch Id</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id}>
                <td className="col-2">{student.name}</td>
                <td className="col-2">{student.course}</td>
                <td className="col-1">{student.batchId}</td>
                <td className="col-2">{student.email}</td>
                <td className="col-2">{student.phoneNumber}</td>
                <td>
                  <button
                    onClick={() => {
                      props.editRow(student);
                    }}
                    className="btn btn-outline-secondary  mx-3"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => props.deleteStudent(student.id)}
                    className="btn btn-outline-danger  mx-3"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No Student Found</td>
            </tr>
          )}
        </tbody>
      </table>
      <p></p>
    </div>
  );
}

