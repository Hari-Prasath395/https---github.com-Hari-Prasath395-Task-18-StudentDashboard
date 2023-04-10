import { useState ,useEffect} from "react";
import BatchTable from "../Components/BatchTable";

function BatchManagement() {
  const [batches, setBatches] = useState([]);

  const [currentBatch, setCurrentBatch] = useState({
    name: "",
    course: "",
    id: "",
    primaryMentorId: "",
    batchSession: "",
    batchType: "",
    batchLanguage: "",
  });


 
    
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentBatch({ ...currentBatch, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!currentBatch.name || !currentBatch.course) return;

    const existingBatchIndex = batches.findIndex(
      (batch) => batch.id === currentBatch.id
    );
    if (existingBatchIndex === -1) {
      setBatches([...batches, currentBatch]);
    } else {
      const updatedBatches = [...batches];
      updatedBatches[existingBatchIndex] = currentBatch;

      setBatches(updatedBatches);
    }

    setCurrentBatch({
      name: "",
      course: "",
      id: "",
      primaryMentorId: "",
      batchSession: "",
      batchType: "",
      batchLanguage: "",
    });
  };

  const editRow = (batch) => {
    setCurrentBatch(batch);
  };

  const deleteBatch = (id) => {
    setBatches(batches.filter((batch) => batch.id !== id));
  };

  const handleAddBatch = () => {
    setCurrentBatch({
      name: "",
      course: "",
      id: "",
      primaryMentorId: "",
      batchSession: "",
      batchType: "",
      batchLanguage: "",
    });
  };

  return (
    <div className="batch-container">
      <div className="top-content">
        <h2>Welcome to Batch Management</h2>
        <button
          onClick={handleAddBatch}
          className="btn btn-outline-primary"
          type="button"
        >
          Add Batch
        </button>
      </div>
      <div className="row">
        <div className="col-12 col-md-4 offset-md-0">
          <form onSubmit={handleSubmit}>
            <div className="form-group py-1">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={currentBatch.name}
                placeholder="Enter Name"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group py-1">
              <label htmlFor="course">Course</label>
              <select
                className="form-control"
                id="course"
                name="course"
                onChange={handleInputChange}
                value={currentBatch.course}
                aria-label="Default select example value"
              >
                <option value="">Select Course</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="Javascript">Javascript</option>
              </select>
            </div>
            <div className="form-group py-1">
              <label htmlFor="id">ID:</label>
              <input
                type="text"
                id="id"
                name="id"
                className="form-control"
                value={currentBatch.id}
                placeholder="Id"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group py-1">
              <label htmlFor="primaryMentorId">Primary Mentor ID:</label>
              <input
                type="text"
                id="primaryMentorId"
                name="primaryMentorId"
                className="form-control"
                value={currentBatch.primaryMentorId}
                placeholder="Primary Mentor Id"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group py-1">
              <label htmlFor="batchSession">Batch Session:</label>
              <input
                type="text"
                id="batchSession"
                name="batchSession"
                className="form-control"
                value={currentBatch.batchSession}
                placeholder="Morning / Evening"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group py-1">
              <label htmlFor="batchType">Batch Type</label>
              <select
                className="form-control"
                id="batchType"
                name="batchType"
                onChange={handleInputChange}
                value={currentBatch.batchType}
                aria-label="Default select example value"
              >
                <option value="">Select Batch</option>
                <option value="Week Day">Week Day</option>
                <option value="Week End">Week End</option>
              </select>
            </div>

            <div className="form-group py-1">
              <label htmlFor="batchLanguage">Batch Language</label>
              <select
                className="form-control"
                id="batchLanguage"
                name="batchLanguage"
                onChange={handleInputChange}
                value={currentBatch.batchLanguage}
                aria-label="Default select example value"
              >
                <option value="">Select Lang</option>
                <option value="Tamil">Tamil</option>
                <option value="English">English</option>
              </select>
            </div>

            <button
              onClick={handleSubmit}
              className="btn-outline-primary btn-md mt-3"
              type="button"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <BatchTable
        batches={batches}
        editRow={editRow}
        deleteBatch={deleteBatch}
      />
    </div>
  );
}

export default BatchManagement;
