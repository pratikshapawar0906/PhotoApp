import React from "react";
import "./featured.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Base styles
import { Autoplay } from "swiper/modules";
import featured1 from "../../assets/featured/fatured1.png";
import featured2 from "../../assets/featured/fatured2.png";
import featured3 from "../../assets/featured/fatured3.png";
import featured4 from "../../assets/featured/fatured4.png";
import featured5 from "../../assets/featured/fatured5.png";
import featured6 from "../../assets/featured/fatured6.png";
import featured7 from "../../assets/featured/fatured7.png";
import featured8 from "../../assets/featured/fatured8.png";

const FeaturedPhotographers = () => {
  const teamMembers = [
    {
      name: "Samaira Dixit",
      role: "Photographer",
      studio: "Pixelbee Studios",
      position: "DOP",
      imageUrl: featured1,
    },
    {
      name: "Abhi Mishra",
      role: "Photographer",
      studio: "Pixelbee Studios",
      position: "DOP",
      imageUrl: featured2,
    },
    {
      name: "Samaira Dixit",
      role: "Photographer",
      studio: "Pixelbee Studios",
      position: "DOP",
      imageUrl: featured3,
    },
    {
      name: "Samaira Dixit",
      role: "Photographer",
      studio: "Pixelbee Studios",
      position: "DOP",
      imageUrl: featured4,
    },
    {
      name: "Samaira Dixit",
      role: "Photographer",
      studio: "Pixelbee Studios",
      position: "DOP",
      imageUrl: featured5,
    },
    {
      name: "Samaira Dixit",
      role: "Photographer",
      studio: "Pixelbee Studios",
      position: "DOP",
      imageUrl: featured6,
    },
    {
      name: "Samaira Dixit",
      role: "Photographer",
      studio: "Pixelbee Studios",
      position: "DOP",
      imageUrl: featured7,
    },
    {
      name: "Samaira Dixit",
      role: "Photographer",
      studio: "Pixelbee Studios",
      position: "DOP",
      imageUrl: featured8,
    },
  ];

  return (
    <div className="carousel-container">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Automate the swiper
        loop={true} // Enable infinite scrolling
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 5 },
        }}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="team-card">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="team-image"
              />
              <div className="team-info">
                <h3>{member.name}</h3>
                <p>{member.studio}</p>
                <p className="role">{member.role}</p>
                <p className="position">{member.position}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedPhotographers;
