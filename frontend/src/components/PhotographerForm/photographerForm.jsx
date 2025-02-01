import { useState } from "react";
import axios from "axios";

function PhotographerForm({ onPhotographerAdded }) {
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [joined, setJoined] = useState("");
  const [dp, setDp] = useState(null);
  const [bg, setBg] = useState(null);
  const [dpPreview, setDpPreview] = useState(null);
  const [bgPreview, setBgPreview] = useState(null);

  const handleDpChange = (e) => {
    const file = e.target.files[0];
    setDp(file);
    setDpPreview(URL.createObjectURL(file));
  };

  const handleBgChange = (e) => {
    const file = e.target.files[0];
    setBg(file);
    setBgPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("specialty", specialty);
    formData.append("joined", joined);
    formData.append("dp", dp);
    formData.append("bg", bg);
  
    try {
      const response = await axios.post(
        "http://localhost:8000/api/addPhotographer",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
  
      // Check if onPhotographerAdded is a function
      if (typeof onPhotographerAdded === "function") {
        onPhotographerAdded(response.data); // Add the photographer to the list
      } else {
        console.error("onPhotographerAdded is not a function");
      }
  
      setName("");
      setSpecialty("");
      setJoined("");
      setDp(null);
      setBg(null);
      setDpPreview(null);
      setBgPreview(null);
    } catch (error) {
      console.error("Error adding photographer:", error);
    }
  };
  
  return (
    <div className="form-container">
      <h2>Add Photographer</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Specialization" value={specialty} onChange={(e) => setSpecialty(e.target.value)} required />
        <input type="date" value={joined} onChange={(e) => setJoined(e.target.value)} required />
        
        <label>Profile Picture:</label>
        <input type="file" accept="image/*" onChange={handleDpChange} required />
        {dpPreview && <img src={dpPreview} alt="Profile Preview" className="image-preview" />}

        <label>Background Image:</label>
        <input type="file" accept="image/*" onChange={handleBgChange} required />
        {bgPreview && <img src={bgPreview} alt="Background Preview" className="image-preview" />}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PhotographerForm;
