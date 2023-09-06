import React from "react";
// import { FaAward } from "react-icons/fa";

import certificate from "../../assets/certificate.avif";

import "./certifications.css";

const Certification = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Front End",
      img: certificate,
      institute: "Coding Ninjas",
      year: "2023",
      link: "https://certificate.codingninjas.com/view/abb6b18af21012c7",
    },
    {
      id: 2,
      title: "Back End",
      img: certificate,
      institute: "Coding Ninjas",
      year: "2023",
      link: "https://certificate.codingninjas.com/view/78ffbf806beac181",
    },
    {
      id: 3,
      title: "React",
      img: certificate,
      institute: "Coding Ninjas",
      year: "2023",
      link: "https://certificate.codingninjas.com/view/45188af635b34957",
    },
    {
      id: 4,
      title: "JAVA",
      img: certificate,
      institute: "Coding Ninjas",
      year: "2023",
      link: "https://certificate.codingninjas.com/view/7a8e28a8ada634a0",
    },
    {
      id: 5,
      title: "Data Structures & Algorithm",
      img: certificate,
      institute: "Coding Ninjas",
      year: "2023",
      link: "https://certificate.codingninjas.com/view/eb547cc99264bc1f",
    },

    {
      id: 6,
      title: "Operating Systems",
      img: certificate,
      institute: "Coding Ninjas",
      year: "2023",
      link: "https://certificate.codingninjas.com/view/fdde7a3c3433f75e",
    },
  ];

  return (
    <section id="certifications">
      <h5>Skills I am Certified In</h5>
      <h2>Certifications</h2>

      <div className="container certifications__container">
        {soloProjects.map((pro) => (
          <article className="certification__item" key={pro.id}>
            <div className="certification__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="certification__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.institute}</p>
              <p>{pro.year}</p>
            </div>
            <div className="certification__item-cta">
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                View
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certification;
