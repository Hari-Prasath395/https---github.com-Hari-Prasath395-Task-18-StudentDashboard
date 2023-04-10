import React from 'react'

export default function BatchTable(props) {
    const { batches } = props;
    return (
     
      <div className='table-responsive'>
         <h4 className='student-table-header mt-3'>Batch Table</h4>
        <table className="table table-striped table-bordered text-center mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Course</th>
              <th>Id</th>
              <th>Primary-MID</th>
              <th>B-Session</th>
              <th>B-Type</th>
              <th>B-Lang</th>
              <th>Actions</th>
            </tr>
          </thead>
  
          <tbody>
            {batches.length > 0 ? (
              batches.map((batch) => (
                <tr key={batch.id}>
                  <td>{batch.name}</td>
                  <td>{batch.course}</td>
                  <td>{batch.id}</td>
                  <td>{batch.primaryMentorId}</td>
                  <td>{batch.batchSession}</td>
                  <td>{batch.batchType}</td>
                  <td>{batch.batchLanguage}</td>
                  <td>
                    <button
                      onClick={() => {
                        props.editRow(batch);
                      }}
                      className="btn btn-outline-secondary  mx-3"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => props.deleteBatch(batch.id)}
                      className="btn btn-outline-danger  mx-3"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8">No Batch Found</td>
              </tr>
            )}
          </tbody>
        </table>
        <p></p>
      </div>
     
    );
}
