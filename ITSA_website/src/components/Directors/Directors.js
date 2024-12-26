import React from "react";
import "./Directors.css";
import Ik1 from "../../assets/Ik1.png"
import Chairman from "../../assets/Chairman.png"
import Rita from "../../assets/Rita.png"
import BOD from "../../assets/BOD.png"
import Godwin from "../../assets/Godwin.png"
import Josh from "../../assets/Josh.png"
import IK from "../../assets/IK.png"
const directors = [
  {
    id: 1,
    name: "Mr. Ikechukwu Uchendu",
    title: "Non-Executive Director",
    image: Ik1,
  },
  {
    id: 2,
    name: "Demola Odeyemi",
    title: "Non-Executive Director",
    image: BOD,
  },
  {
    id: 3,
    name: "Joshua Babatope",
    title: "Co-Founder",
    image: Josh,
  },
  {
    id: 4,
    name: "Engr Egbert Imomoh",
    title: "Chairman",
    image: Chairman,
  },
  {
    id: 5,
    name: "Godwin Onyeke",
    title: "Non-Executive Director",
    image: Godwin,
  },
  {
    id: 6,
    name: "Ikechukwu Onwumere",
    title: "Founder",
    image: IK,
  },
  {
    id: 7,
    name: "Rita James",
    title: "Non-Executive Director",
    image: Rita,
  },
];

const BoardOfDirectors = () => {
  return (
    <div className="board-of-directors">
      <h2>Board of Directors</h2>
      <p>Meet the visionaries driving IT Service Africa's success.</p>
      <div className="directors-grid">
        {directors.map((director) => (
          <div className="director-card" key={director.id}>
            <img
              src={director.image}
              alt={director.name}
              className="director-image"
            />
            <h3>{director.name}</h3>
            <p>{director.title}</p>
            <button className="read-bio-button">Read Bio</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardOfDirectors;
