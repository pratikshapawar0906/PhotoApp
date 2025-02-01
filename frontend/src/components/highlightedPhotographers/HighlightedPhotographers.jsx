import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotographerForm from "../PhotographerForm/photographerForm";
import HightlightedPhotographerCard from "../hightlightedPhotographerCard/HightlightedPhotographerCard";

const HighlightedPhotographers = () => {
  const [photographers, setPhotographers] = useState([]);

  useEffect(() => {
    fetchPhotographers();
  }, []);

  const fetchPhotographers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/uploadPhoto");
      setPhotographers(response.data);
    } catch (error) {
      console.error("Error fetching photographers:", error);
    }
  };

  const handlePhotographerAdded = (newPhotographer) => {
    setPhotographers((prevPhotographers) => [...prevPhotographers, newPhotographer]);
  };

  return (
    <div className="home-container">
      <h1>Photographers</h1>
      <PhotographerForm onPhotographerAdded={handlePhotographerAdded} />
      <div className="photographer-list">
        {photographers.map((photographer) => (
          <HightlightedPhotographerCard key={photographer._id} photographer={photographer} />
        ))}
      </div>
    </div>
  );
};

export default HighlightedPhotographers;
