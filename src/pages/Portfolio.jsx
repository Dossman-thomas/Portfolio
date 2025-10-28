import Project from "../components/Project.jsx";

import quizCardImage from "../images/projects/QuizCard_demo.gif";
import LAMountainsImage from "../images/projects/LAMountainsPage_demo.gif";
import flickFolioImage from "../images/projects/FlickFolio-demo.gif";
import blogImage from "../images/projects/DailyDevDose_homepage.png";
import musicImage from "../images/projects/sound-scout-ss1.png";
import pwaImage from "../images/projects/Jate-demo.gif";
import ActivateMeImage from "../images/projects/ActivateMe-demo.gif";
import weatherImage from "../images/projects/weather-ss2.png";

export default function Portfolio() {
  const projects = [
    // FLASHCARD STUDY APP
    {
      imageUrl: quizCardImage,
      title: "QuizCard - Flashcard Study App",
      description:
        "Digital Flashcard Study web application frontend that allows users to create, manage, and study flashcards for efficient learning purposes.",
      deployedLink: "https://quiz-card.netlify.app/",
      githubRepo: "https://github.com/Dossman-thomas/Quiz-Card",
    },
    // ACTIVITY TRACKER APP
    {
      imageUrl: ActivateMeImage,
      title: "ActivateMe. - Activity Tracker App",
      description:
        "A collaborative project designed to empower users in tracking their daily activities and fostering healthier lifestyle habits. With ActivateMe, users can effortlessly monitor their daily routines, including exercise, nutrition, sleep, and more, with the ultimate goal of enhancing productivity and overall well-being.",
      deployedLink: "https://activateme.onrender.com/",
      githubRepo: "https://github.com/spritchard54/ActivateMe",
    },
    // TECH BLOG SITE
    {
      imageUrl: blogImage,
      title: "DailyDevDose - Tech Blog",
      description:
        "a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well",
      // deployedLink: "https://daily-dev-dose-6efece3cf6b2.herokuapp.com/",
      githubRepo: "https://github.com/Dossman-thomas/CMS-style-blog-site",
    },
    // MUSIC FINDER APP
    {
      imageUrl: musicImage,
      title: "SoundScout - Music Finder",
      description:
        "An interactive music discovery application that takes user input of their favorite musicians and dynamically presents the user with a list of similar artists, as well as links to their top songs, lyrics, music videos, and upcoming concerts.",
      deployedLink: "https://dossman-thomas.github.io/Sound-Scout/",
      githubRepo: "https://github.com/Dossman-thomas/Sound-Scout",
    },
    // FLICK FOLIO MOVIE FINDER APP
    {
      imageUrl: flickFolioImage,
      title: "Flick-Folio - Movie Library App",
      description:
        "A sleek and intuitive movie library app built with React.js. Seamlessly discover your favorite movies in one place. With FlickFolio, users can easily browse through a vast collection of films.",
      deployedLink: "https://flick-folio.onrender.com/",
      githubRepo: "https://github.com/Dossman-thomas/flick-folio",
    },
    // LA Mountains INFO SITE
    {
      imageUrl: LAMountainsImage,
      title: "LA Mountains - Info Single Page Site",
      description:
        "A responsive single-page site providing information about the LA Mountains, exhibiting a modern design with semantic HTML for SEO, and enhanced user experience through CSS styling and JavaScript interactivity; showing off frontend skills.",
      deployedLink: "https://dossman-thomas.github.io/Los-Angeles-Mountains",
      githubRepo: "https://github.com/Dossman-thomas/Los-Angeles-Mountains",
    },
    // TEXT EDITOR PWA APP
    {
      imageUrl: pwaImage,
      title: "J.A.T.E. - Text Editor PWA",
      description:
        "A single-page text-editor application that meets the PWA criteria, features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser, and functions offline.",
      deployedLink: "https://dossman-text-editor-1.onrender.com/",
      githubRepo: "https://github.com/Dossman-thomas/PWA-Text-Editor",
    },
    // WEATHER DASHBOARD APP
    {
      imageUrl: weatherImage,
      title: "Weather Dashboard - Weather Forecast App",
      description:
        "A weather dashboard that will run in the browser and feature dynamically updated HTML and CSS via data from a weather API.",
      deployedLink: "https://dossman-thomas.github.io/weather-dashboard/",
      githubRepo: "https://github.com/Dossman-thomas/weather-dashboard",
    },
  ];

  return (
    <>
      <div className="projects-container">
        {projects.map((project) => (
          <Project
            imageUrl={project.imageUrl}
            title={project.title}
            description={project.description}
            deployedLink={project.deployedLink}
            githubRepo={project.githubRepo}
          />
        ))}
      </div>
    </>
  );
}
