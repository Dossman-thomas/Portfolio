import "../css/resume.css";
import DossmanResume from "../assets/deliverables/Tom_Dossman_Resume.pdf";
import FEDossmanResume from "../assets/deliverables/Tom_Dossman_Resume_FE.pdf";

export default function Resume() {
  return (
    <>
      {/* Scannable HTML Resume Section */}
      <div
        className="container mb-5"
        style={{
          fontFamily: "Arial, sans-serif",
          lineHeight: 1.5,
        }}
      >
        <header className="resume-header">
          <h2
            style={{
              fontWeight: "normal",
              color: "#555",
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

          <section id="summary" style={{ marginTop: "2rem" }}>
            <h3
              style={{
                borderBottom: "2px solid #007ACC",
                paddingBottom: "0.2rem",
              }}
            >
              Summary
            </h3>
            <p>
              Full Stack Developer who is passionate about blending artistic
              design and technology to build clean, modern web applications.
              Skilled in crafting responsive, accessible interfaces while
              leveraging backend knowledge and AI-assisted development tools to
              optimize workflows, enhance code quality, and contribute to
              high-performing, forward-thinking teams.
            </p>
          </section>

          <section id="education-certification" style={{ marginTop: "2rem" }}>
            <h3
              style={{
                borderBottom: "2px solid #007ACC",
                paddingBottom: "0.2rem",
              }}
            >
              Education and Certification
            </h3>
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li>
                <strong>Full Stack Development Certification</strong> |
                University of Pennsylvania &nbsp; <em>Sep 2023 – Mar 2024</em>
              </li>
              <li>
                <strong>Bachelor’s Degree</strong> | Pennsylvania State
                University, Main Campus &nbsp; <em>Aug 2010 – Dec 2015</em>
              </li>
            </ul>
          </section>

          <section id="technical-skills" style={{ marginTop: "2rem" }}>
            <h3
              style={{
                borderBottom: "2px solid #007ACC",
                paddingBottom: "0.2rem",
              }}
            >
              Technical Skills
            </h3>
            <p>
              HTML | CSS | JavaScript | TypeScript | Angular | React | Node |
              Express | UI/UX Design | Figma | Bootstrap | ORMs (Sequelize) |
              PostgreSQL | Jest | Data Encryption/Decryption | Debugging |
              Version Control (Git) | ChatGPT | Claude | Google
            </p>
          </section>

          <section id="soft-skills" style={{ marginTop: "2rem" }}>
            <h3
              style={{
                borderBottom: "2px solid #007ACC",
                paddingBottom: "0.2rem",
              }}
            >
              Soft Skills
            </h3>
            <p>
              Communication | Collaboration | Problem Solving | Attention to
              detail | Commitment to growth | Positive mindset
            </p>
          </section>

          <section id="work-experience" style={{ marginTop: "2rem" }}>
            <h3
              style={{
                borderBottom: "2px solid #007ACC",
                paddingBottom: "0.2rem",
              }}
            >
              Work Experience
            </h3>
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
                  Ensure consistent styling and responsiveness across devices using CSS frameworks and design systems.
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
                  Participate in code reviews, contributing to a collaborative and iterative development environment.
                </li>
                <li>
                  Apply AI-assisted development tools to accelerate debugging,
                  improve code structure, and streamline repetitive tasks.
                </li>
              </ul>
            </article>
          </section>

          <section id="projects" style={{ marginTop: "2rem" }}>
            <h3
              style={{
                borderBottom: "2px solid #007ACC",
                paddingBottom: "0.2rem",
              }}
            >
              Projects
            </h3>
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
