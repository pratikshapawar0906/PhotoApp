import React from "react";
import './featuredPhoto.css'
import user1 from '../../assets/user1_img.png'
import user2 from '../../assets/user2_img.png'
import user3 from '../../assets/user3_img.png'
import user4 from '../../assets/user4_img.png'
import user5 from '../../assets/user5_img.png'
const data = [
  {
    username: '@user1',
    image: user1,
    
  },
  {
    username: '@user2',
    image:  user2,
    
  },
  {
    username: '@user3',
    image:  user3,
   
  },
  {
    username: '@user4',
    image:  user4,
  },  
  {
    username: '@user5',
    image:  user5,
   
  },
];

const FeaturedPhotos = () => {
  
  return ( 
  <>
  <div className="container">
      {data.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.image} alt={`Post by ${item.username}`} className="image img-fluid" />
          
        </div>
      ))}
    </div>


  </> 
  )
};

export default FeaturedPhotos;
  