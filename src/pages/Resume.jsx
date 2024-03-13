import '../css/resume.css'
import ResumePng from '../assets/deliverables/Tom-Dossman-resume.png';

export default function Resume() {

  return (
    <>

      <div className="container" id='bod'>

        <div className="container mt-5 mb-5 d-flex justify-content-between align-items-center" id="resume-header">

          <h2>
            Full Stack Developer
          </h2>
          <a className='btn' id='resume-btn' href={ResumePng} download>
            Download
          </a>

        </div>
        <div className='container d-flex justify-content-center align-items-center flex-column'>
          <h3 className='mb-3'>
            Hello!
          </h3>
          <p className='text-center mb-5'>
            I am a dedicated and highly personable Full Stack Developer with a passion for art and design, underpinned by a solid foundation in JavaScript. I am known for my problem-solving skills and possess the ability to thrive both independently and collaboratively within dynamic teams. Thanks to my keen eye for detail, I excel in identifying and resolving complex challenges, contributing significantly to project success.
            My work ethic is self-motivated, allowing me to excel in fast-paced environments. Additionally, my effective written and verbal communication skills, coupled with altruistic values, contribute to fostering collaborative and positive work environments. I bring a commitment to continuous learning, showcasing my ability to quickly grasp new concepts and technologies, making me a valuable asset to any team.
          </p>

        </div>

        <div className='container d-flex flex-column p-4 mb-5' id='projects-box'>

          <h3 className='mt-2 mb-4 text-center' id='projects-heading'>
            Top Projects
          </h3>

          {/* Project 1 */}

          <div className='container d-flex flex-column'>

            <h5>
              DailyDevDose - Tech Blog Site, Jan 2024
            </h5>

            <p className='white-text'>
              Full Stack Developer
            </p>

            <p className='white-text mb-1'>
              a comprehensive tech blog site, facilitating user registration, login, and seamless posting of tech blog entries. Users can engage through comments on existing posts, fostering a vibrant community.
            </p>

            <ul className='white-text' id='resume-points'>

              <li>
                Built the site from scratch, demonstrating proficiency in full-stack development.
              </li>

              <li>
                Implemented secure user authentication using bcrypt, ensuring data integrity.
              </li>

              <li>
                Utilized Sequelize ORM for efficient and structured database interactions.
              </li>

              <li>
                Employed Handlebars to dynamically render HTML content, enhancing the user experience.
              </li>

            </ul>

            <p className='orange-text mb-4'>
              TECHNOLOGIES: Node.js, MySQL (Sequelize ORM), Express.js, Bcrypt, Handlebars, Dotenv
            </p>

          </div>

          {/* Project 2 */}

          <div className='container d-flex flex-column'>

            <h5>
              NomNav - Restaurant Saving App, Jan 2024
            </h5>

            <p className='white-text'>
              UI/UX Designer, Frontend Developer
            </p>

            <p className='white-text mb-1'>
              A full-stack web application enabling users to effortlessly save and revisit their favored restaurants.  The application features an interactive map interface for an enhanced user experience.
            </p>

            <ul className='white-text' id='resume-points'>

              <li>
                Spearheaded the front-end development efforts for a collaborative project with a team of four members, concentrating on the user interface and experience.
              </li>

              <li>
                Utilized Figma to design the framework for the application, ensuring a cohesive and visually appealing layout that aligns with project objectives and user expectations.
              </li>

              <li>
                Applied expertise in responsive design, producing a site that seamlessly adapts to various screen sizes and devices, optimizing user accessibility and experience.
              </li>

              <li>
                Collaborated effectively within the team to integrate front-end elements with back-end functionalities, ensuring a seamless and cohesive end-to-end application.
              </li>

            </ul>

            <p className='orange-text mb-4'>
              TECHNOLOGIES: Node.js, MySQL (Sequelize ORM), Express.js, Bcrypt, Handlebars, Dotenv, Leaflet.js
            </p>

          </div>

          {/* Project 3 */}
          <div className='container d-flex flex-column'>

            <h5>
              SoundScout - Music Discovery App, Nov 2023
            </h5>

            <p className='white-text'>
              UI/UX Designer, Frontend Developer
            </p>

            <p className='white-text mb-1'>
              An interactive music discovery application that takes user input of their favorite musicians and dynamically presents the user with a list of similar artists, as well as links to their top songs, lyrics, music videos, and upcoming concerts.
            </p>

            <ul className='white-text' id='resume-points'>

              <li>
                Served as the primary architect responsible for the application’s framework, design, and CSS styling.
              </li>

              <li>
                Demonstrated proficiency in HTML, CSS, and JavaScript to craft an aesthetically pleasing and user-friendly front end, utilizing Bulma CSS framework to ensure responsiveness and a seamless visual experience.
              </li>

              <li>
                Played a pivotal role in the application's functionality by contributing significantly to the JavaScript codebase, implementing core features that power the dynamic generation of personalized music recommendations based on user input.
              </li>

              <li>
                Successfully integrated Last FM and Shazam APIs into the application, fostering real-time data retrieval for accurate artist information, top songs, lyrics, music videos, and upcoming concerts.
              </li>

            </ul>

            <p className='orange-text mb-4'>
              TECHNOLOGIES: HTML, CSS, JavaScript, Bulma CSS, Last FM API, Shazam API.
            </p>

          </div>

        </div>

        <h3 className='text-center mb-4'>
          Technical Skills
        </h3>

        <div className='container d-flex justify-content-around mb-4'>

          <div>

            <ul>

              <li>
                HTML5
              </li>

              <li>
                CSS3
              </li>

              <li>
                JavaScript
              </li>

              <li>
                jQuery
              </li>

              <li>
                UI/UX Design
              </li>

              <li>
                Responsive Design
              </li>

              <li>
                React
              </li>

              <li>
                Bootstrap CSS
              </li>

            </ul>

          </div>

          <div>
            <ul>

              <li>
                Bulma CSS
              </li>

              <li>
                Figma
              </li>

              <li>
                Handlebars
              </li>

              <li>
                RESTful APIs
              </li>

              <li>
                Node.js
              </li>

              <li>
                Express.js
              </li>

              <li>
                MySQL, Sequelize
              </li>

              <li>
                MongoDB, Mongoose
              </li>

              <li>
                ChatGPT
              </li>

            </ul>

          </div>

        </div>

        <div className='container d-flex flex-column p-4 mb-2' id='edu-box'>

          <h3 className='mt-2 mb-4 text-center' id='education-heading'>
            Education
          </h3>

          {/* UPenn Bootcamp */}

          <div className='container d-flex flex-column'>

            <div className='container d-flex justify-content-between align-items-center school-yr'>
              <h5>
                University of Pennsylvania
              </h5>
              <h6>
                Sept 2023 - March 2024
              </h6>
            </div>


            <p className='white-text'>
              Certified Full Stack Developer
            </p>

            <p className='white-text mb-4'>
              Bootcamp certification by EdX.
            </p>

          </div>

          {/* Penn State */}

          <div className='container d-flex flex-column'>
            
            <div className='container d-flex justify-content-between align-items-center school-yr'>
              <h5>
                Penn State University
              </h5>
              <h6>
                Aug 2010 - Dec 2015
              </h6>
            </div>


            <p className='white-text'>
              Bachelor of Integrated Arts
            </p>

            <p className='white-text mb-3'>
              Minors in Business and Music Technology
            </p>

          </div>

        </div>

      </div>


    </>
  )

}