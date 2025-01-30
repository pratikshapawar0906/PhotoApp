import React from "react";
import "./PhotoGrid.css";

const PhotoGrid = ({ photos }) => {
  return (
    <div className="photo-grid">
      {photos.length > 0 ? (
        photos.map((photo) => (
          <div className="photo-item" key={photo._id}>
            <img src={photo.imgUrl} alt="Photographer's Work" />
          </div>
        ))
      ) : (
        <p>No photos uploaded yet.</p>
      )}
    </div>
  );
};

export default PhotoGrid;
