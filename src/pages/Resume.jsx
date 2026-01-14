import "../css/resume.css";
import DossmanResume from "../assets/deliverables/Tom_Dossman_Resume.pdf";
import FEDossmanResume from "../assets/deliverables/Tom_Dossman_Resume_FE.pdf";
import CS50Shirtificate from "../assets/media/CS50_Shirtificate.png";
import CertificateModal from "../components/CertificateModal";

export default function Resume() {
  return (
    <>
      {/* Scannable HTML Resume Section */}
      <div
        className="container mb-5 mt-3"
        style={{
          fontFamily: "Arial, sans-serif",
          lineHeight: 1.5,
        }}
      >
        <header className="resume-header">
          <h2
            style={{
              fontWeight: "normal",
              color: "var(--drkvio)",
              marginTop: 0,
            }}
          >
            Full Stack Developer
          </h2>
          <p
            style={{
              margin: "0.2rem 0",
              fontSize: "0.9rem",
              color: "#444",
            }}
          >
            <a href="mailto:tdossman.development@gmail.com">
              tdossman.development@gmail.com
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/Dossman-thomas"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Dossman-thomas
            </a>{" "}
            |{" "}
            <a
              href="https://linkedin.com/in/tom-dossman"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/tom-dossman
            </a>
          </p>
        </header>
        <section>
          <div className="d-flex mb-3 justify-content-between align-items-center border-bottom pb-3">
            <a className="btn" id="resume-btn" href={DossmanResume} download>
              Download Resume
            </a>
            <a className="btn" id="resume-btn" href={FEDossmanResume} download>
              Download Front-end Resume
            </a>
          </div>

          <section id="summary" className="section-titles">
            <h3 className="underlines">Summary</h3>
            <p>
              Full Stack Developer who is passionate about blending artistic
              design and technology to build clean, modern web applications.
              Skilled in crafting responsive, accessible interfaces while
              leveraging backend knowledge and AI-assisted development tools to
              optimize workflows, enhance code quality, and contribute to
              high-performing, forward-thinking teams.
            </p>
          </section>

          <section id="education-certification" className="section-titles">
            <h3 className="underlines">Education and Certification</h3>
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li>
                <strong>
                  CS50 — Introduction to Programming with Python{" "}
                  <CertificateModal pngPath={CS50Shirtificate} title="CS50P" />
                </strong>{" "}
                | Harvard University &nbsp;
                <em>Course Complete - Final Project In Progress</em>{" "}
                <div className="edu-subtexts">
                  Covered Python Functions, Variables, Conditionals, Loops,
                  Exceptions, Libraries, Unit Tests, File I/O, RegEx, OOP, and a
                  final project.
                </div>
              </li>
              <li>
                <strong>
                  {" "}
                  Full Stack Development
                  <a
                    href="https://certificates-pod.sas.upenn.edu/f093c48e-907f-492c-8794-aebf038db9d3#acc.p73QquhP"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Certification
                  </a>
                </strong>{" "}
                | University of Pennsylvania &nbsp; <em>
                  Sep 2023 – Mar 2024
                </em>{" "}
                <div className="edu-subtexts">
                  Demonstrated a fundamental working knowledge of HTML, CSS,
                  JavaScript, third-party APIs, Progressive Web Applications,
                  MySQL, API design, and the MERN stack (MongoDB, Express.js,
                  React.js, Node.js). Displayed ability to work with diverse
                  teams on demanding timelines to build fully functional web
                  applications from start to finish. Exhibited skills necessary
                  to learn new technologies and resolve issues independently
                </div>
              </li>

              <li>
                <strong>Bachelor’s Degree</strong> | Pennsylvania State
                University, Main Campus &nbsp; <em>Aug 2010 – Dec 2015</em>
                <div className="edu-subtexts">
                  BA of Liberal Arts Emphasizing Business and Audio Technology.
                </div>
              </li>
            </ul>
          </section>

          <section id="technical-skills" className="section-titles">
            <h3 className="underlines">Technical Skills</h3>

            <p>
              <strong>Languages & Frontend Frameworks: </strong> HTML | CSS |
              JavaScript | TypeScript | Angular | React | Bootstrap | Tailwind |
              Bulma
              <br></br>
              <strong>Backend & Runtime: </strong> Python | Node.js | Express
              <br></br>
              <strong>Databases & ORMs: </strong> PostgreSQL | Sequelize (ORM)
              <br></br>
              <strong>UI/UX & Design Tools: </strong> UI/UX Design | Responsive
              Design | Accessibility | Component Architecture | Figma
              <br></br>
              <strong>API Development: </strong> Postman | REST APIs | RESTful
              API Design | Endpoint Testing
              <br></br>
              <strong>Testing & Quality: </strong> Jest | Pytest | Debugging
              <br></br>
              <strong>Security: </strong> AES-based Encryption/Decryption | PGP
              | Auth | JWT
              <br></br>
              <strong>Version Control & Collaboration: </strong> Git | Microsoft
              Teams
              <br></br>
              <strong>AI & DevTools: </strong> ChatGPT | Claude | CoPilot |
              Chrome DevTools | Lighthouse
              <br></br>
            </p>
          </section>

          <section id="soft-skills" className="section-titles">
            <h3 className="underlines">Soft Skills</h3>
            <p>
              Communication | Collaboration | Problem Solving | Attention to
              detail | Commitment to growth | Positive mindset
            </p>
          </section>

          <section id="work-experience" className="section-titles">
            <h3 className="underlines">Work Experience</h3>
            <article style={{ marginBottom: "1rem" }}>
              <h4>Full Stack Developer Intern | AllianceTek Inc | Remote</h4>
              <time dateTime="2024-06">Jun 2024 – Present</time>
              <ul>
                <li>
                  Generate dynamic, responsive web applications using Angular,
                  JavaScript, and TypeScript, delivering modern, engaging
                  components and seamless interfaces.
                </li>
                <li>
                  Collaborate with designers to transform wireframes and
                  prototypes into accessible, pixel-perfect UI components.
                </li>
                <li>
                  Ensure consistent styling and responsiveness across devices
                  using CSS frameworks and design systems.
                </li>
                <li>
                  Configure RESTful APIs with Node.js, optimizing data exchange
                  and improving frontend-backend communication.
                </li>
                <li>
                  Administer secure authentication and authorization using tools
                  like JWT, enhancing application security.
                </li>
                <li>
                  Implement AES and PGP-based encryption and decryption
                  techniques across API services to protect sensitive data in
                  transit and at rest, reinforcing secure data handling in
                  production environments.
                </li>
                <li>
                  Design PostgreSQL queries, stored procedures, and triggers to
                  enforce data integrity, manage complex business logic, and
                  support efficient data operations.
                </li>
                <li>
                  Modularize front and backend logic into scalable service
                  layers, applying middleware and reusable utilities to
                  streamline maintenance, testing, and collaboration.
                </li>
                <li>
                  Participate in code reviews, contributing to a collaborative
                  and iterative development environment.
                </li>
                <li>
                  Apply AI-assisted development tools to accelerate debugging,
                  improve code structure, and streamline repetitive tasks.
                </li>
              </ul>
            </article>
          </section>

          <section id="projects" className="section-titles">
            <h3 className="underlines">Projects</h3>
            <article style={{ marginBottom: "1rem" }}>
              <h4>
                ActivateMe - Activity Tracker App <small>(Mar 2024)</small>
              </h4>
              <p>
                <em>UI/UX Designer, Frontend Developer</em>
              </p>
              <ul>
                <li>
                  Assembled a fluid, intuitive frontend using React, leveraging
                  the Bootstrap CSS framework to ensure a polished visual
                  experience.
                </li>
                <li>
                  Collaborated with the backend team to design and implement
                  strategies for effectively rendering critical data from a
                  MongoDB database, facilitating accuracy and performance.
                </li>
              </ul>
            </article>
            <article>
              <h4>
                DailyDevDose - Tech Blog Site <small>(Jan 2024)</small>
              </h4>
              <p>
                <em>Full Stack Developer</em>
              </p>
              <ul>
                <li>
                  Produced a streamlined interface with Handlebars.js, HTML,
                  CSS, and JavaScript, enabling users to easily view, create,
                  edit, and delete blog posts and comments.
                </li>
                <li>
                  Harnessed Sequelize to successfully manage user accounts, blog
                  content, and comments while maintaining data consistency.
                </li>
              </ul>
            </article>
          </section>
        </section>
      </div>
    </>
  );
}
