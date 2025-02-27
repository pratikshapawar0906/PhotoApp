import React from "react";
import HightlightedPhotographerCard from "../hightlightedPhotographerCard/HightlightedPhotographerCard";
import { Link } from "react-router-dom";
import dp from "../../assets//Highlightphotograph/johnDp.png";
import photobg from "../../assets/Highlightphotograph/photographer-card-bg.png";
import shoes from '../../assets/Highlightphotograph/shoes.png'
import bird from '../../assets/Highlightphotograph/bird.png'
import prewedding from '../../assets/Highlightphotograph/prewedding.png'
import  astethic from '../../assets/Highlightphotograph/astethic.png'

const HighlightedPhotographers = () => {
  const photographers = [
    {
      id: 1,
      name: "@atulnaik",
      specialty: "Wedding Photographer",
      joined: "23 Dec 2024",
      dp: dp,
      bg: photobg,
    },
    {
      id: 2,
      name: "Jane Doe",
      specialty: "Travel Photographer",
      joined: "10 Nov 2023",
      dp: dp,
      bg:shoes,
     
    },
    {
      id: 3,
      name: "Michael Lensman",
      specialty: "Portrait Photographer",
      joined: "5 Jan 2022",
      dp:dp,
      bg: prewedding,
    },
    {
      id: 4,
      name: "Michael Lensman",
      specialty: "Portrait Photographer",
      joined: "5 Jan 2022",
      dp: dp,
      bg: astethic,
    },
    {
      id: 5,
      name: "Michael Lensman",
      specialty: "Portrait Photographer",
      joined: "5 Jan 2022",
      dp: dp,
      bg: bird,
    },
    {
      id: 6,
      name: "Michael Lensman",
      specialty: "Portrait Photographer",
      joined: "5 Jan 2022",
      dp: dp,
      bg:  photobg,
    },
    {
      id: 7,
      name: "Michael Lensman",
      specialty: "Portrait Photographer",
      joined: "5 Jan 2022",
      dp: dp,
      bg:  photobg,
    },
    {
      id: 8,
      name: "Michael Lensman",
      specialty: "Portrait Photographer",
      joined: "5 Jan 2022",
      dp:dp,
      bg: photobg,
    },
  ];
  return (
    <div   style={{ display: "flex", flexWrap: "wrap", gap: "10px",justifyContent:'center'  }}>
      {photographers.map((photographer) => (
        <Link className="text-decoration-none" key={photographer.id} to={`/photographerDetails/${photographer.id}`}>
          <HightlightedPhotographerCard photographer={photographer} />
        </Link>
      
      ))}
    </div>
  );
};

export default HighlightedPhotographers;
