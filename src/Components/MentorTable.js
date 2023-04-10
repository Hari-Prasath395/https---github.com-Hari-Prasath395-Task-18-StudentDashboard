import React from "react";

export default function MentorTable(props) {
  const { mentors } = props;
  return (
    <div className="table-responsive">
       <h4 className='student-table-header mt-3'>Mentor's Table</h4>
      <table className="table table-striped table-bordered text-center mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Batch Id</th>
            <th>Contact Number</th>
            <th>E-Contact No</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {mentors.length > 0 ? (
            mentors.map((mentor) => (
              <tr key={mentor.id}>
                <td className="col-2">{mentor.name}</td>
                <td className="col-2">{mentor.batchId}</td>
                <td className="col-2">{mentor.contactNumber}</td>
                <td className="col-2">{mentor.emergencyContactNumber}</td>
                <td>
                  <button
                    onClick={() => {
                      props.editRow(mentor);
                    }}
                    className="btn btn-outline-secondary  mx-3"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => props.deleteMentor(mentor.id)}
                    className="btn btn-outline-danger  mx-3"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No Mentors Found</td>
            </tr>
          )}
        </tbody>
      </table>
      <p></p>
    </div>
  );
}
