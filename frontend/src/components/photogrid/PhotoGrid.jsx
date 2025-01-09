import React, { useEffect } from "react";
import axios from "axios";
import "./PhotoGrid.css";

const PhotoGrid = () => {
  const [photos, setPhotos] = React.useState([]);

  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = async () => {
    const response = await axios.get("http://localhost:8000/getAllPhotos");
    setPhotos(response.data.data);
    console.log(response.data.data);
  };

  return (
    <>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div className="photo-item" key={photo._id}>
            <img className="" src={photo.imgUrl} alt="abc" />
          </div>
        ))}
      </div>
    </>
  );
};

export default PhotoGrid;
