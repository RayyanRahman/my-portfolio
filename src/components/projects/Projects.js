import React from "react";
import expenseapp from "../../assets/expenseapp.png";
import youtube from "../../assets/youtube.png";
import newsapp from "../../assets/newsapp.png";
import weatherapp from "../../assets/weatherapp.png";
import medicationapp from "../../assets/medicationapp.png";
import contactapp from "../../assets/contactapp.png";

import "./projects.css";

const Projects = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Expense Management App",
      img: expenseapp,
      description:
        "Your go-to expense management app for effortless tracking and smart financial management. Track expenses, manage income, and plan budgets with ease.",
      technologies: "React | Node.js | Express.js | MongoDB",
      link: "https://rayyan-expense-management.cyclic.app/",
      github: "https://github.com/RayyanRahman/expense-management-app",
    },
    {
      id: 2,
      title: "Youtube Clone",
      img: youtube,
      description:
        "Your personalized video hub. A YouTube clone with video search, recommendations, and interactive features. ",
      technologies: "React | HTML | CSS | JavaScript",
      link: "https://rayyan-youtube-clone.netlify.app/",
      github: "https://github.com/RayyanRahman/youtube-clone",
    },
    {
      id: 3,
      title: "Tech News Daily",
      img: newsapp,
      description:
        "Explore the future with my Tech News App! Real-time tech updates, easy search, and seamless pagination. Stay ahead with clean design and dive into innovation effortlessly. ",
      technologies: "React | HTML | CSS | JavaScript",
      link: "https://rayyan-tech-news.netlify.app/",
      github: "https://github.com/RayyanRahman/tech-news-app",
    },
    {
      id: 4,
      title: "Weather App",
      img: weatherapp,
      description:
        "Real-time weather updates at your fingertips. React-based app for accurate forecasts, interactive UI, and location-based weather info. ",
      technologies: "React | HTML | CSS | JavaScript",
      link: "https://rayyan-weather.netlify.app/",
      github: "https://github.com/RayyanRahman/weather-app",
    },
    {
      id: 5,
      title: "Medication Management App",
      img: medicationapp,
      description:
        "Medication Management App: Never miss a dose! Track medications, set reminders, and stay on top of your health. Simple, intuitive, and built with React.js. ",
      technologies: "React | HTML | CSS | JavaScript",
      link: "https://rayyan-medication-management.netlify.app/",
      github: "https://github.com/RayyanRahman/medication-management-app",
    },
    {
      id: 6,
      title: "Contact List App",
      img: contactapp,
      description:
        "Connect and keep track effortlessly with React Contact List! 📞👥 Seamlessly manage your contacts, add details, and stay in touch hassle-free. Simplify communication! ",
      technologies: "React | Redux | CSS | JavaScript",
      link: "https://rayyan-contact-list-app.netlify.app/",
      github: "https://github.com/RayyanRahman/react-contact-list-app",
    },
  ];

  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
