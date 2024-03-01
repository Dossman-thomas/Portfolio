import Project from '../components/Project';
import imageUrl from '../../public/images/projects/DailyDevDose_homepage.png'


export default function Portfolio(){

  const projects = [

    // TECH BLOG SITE
    {
      imageUrl: '../../public/images/projects/DailyDevDose_homepage.png',
      title: 'DailyDevDose - Tech Blog',
      description: 'a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well',
      deployedLink: 'https://daily-dev-dose-6efece3cf6b2.herokuapp.com/',
      githubRepo: 'https://github.com/Dossman-thomas/CMS-style-blog-site'
    },
    // MVC RESTAURANT SAVING SITE
    {
      imageUrl: '../../public/images/projects/City_Glimpse_Demo.gif',
      title: 'NomNav - Restaurant Saver',
      description: 'full-stack web application that empowers users to save and revisit their favorite restaurants on an interactive map.',
      deployedLink: '',
      githubRepo: 'https://github.com/Dossman-thomas/Nom-Nav'
    },
    // MUSIC FINDER APP
    {
      imageUrl: '../../public/images/projects/sound-scout-ss1.png',
      title: 'SoundScout - Music Finder',
      description: 'An interactive music discovery application that takes user input of their favorite musicians and dynamically presents the user with a list of similar artists, as well as links to their top songs, lyrics, music videos, and upcoming concerts.',
      deployedLink: 'https://dossman-thomas.github.io/Sound-Scout/',
      githubRepo: 'https://github.com/Dossman-thomas/Sound-Scout'
    },
    // TEXT EDITOR PWA APP
    {
      imageUrl: '../../public/images/projects/Jate-demo.gif',
      title: 'J.A.T.E. - Text Editor PWA',
      description: 'A single-page text-editor application that meets the PWA criteria, features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser, and functions offline.',
      deployedLink: 'https://dossman-text-editor-1.onrender.com/',
      githubRepo: 'https://github.com/Dossman-thomas/PWA-Text-Editor'
    },
    // CODING QUIZ APP
    {
      imageUrl: '../../public/images/projects/Code-questions-screenshot.png',
      title: 'Code Quiz - Tech Quiz App',
      description: 'A code quiz app that presents web development students with an opportunity to practice for the coding assessment portion of technical interviews they will face during the hiring process.',
      deployedLink: 'https://dossman-thomas.github.io/coding-quiz/',
      githubRepo: 'https://github.com/Dossman-thomas/coding-quiz'
    },
    // WEATHER DASHBOARD APP
    {
      imageUrl: '../../public/images/projects/weather-ss2.png',
      title: 'Weather Dashboard - Weather Forecast App',
      description: 'A weather dashboard that will run in the browser and feature dynamically updated HTML and CSS via data from a weather API.',
      deployedLink: 'https://dossman-thomas.github.io/weather-dashboard/',
      githubRepo: 'https://github.com/Dossman-thomas/weather-dashboard'
    }

  ]

  return (

    <>
    
    

    </>

  )

}