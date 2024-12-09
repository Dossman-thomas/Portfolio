import "../css/resume.css";
import ResumeJpg from "../assets/deliverables/TomDossman-RESUME-jpg.jpg";
import ResumePng from "../assets/deliverables/TomDossman-RESUME-png.png";

export default function Resume() {
  return (
    <>
      <div className="container" id="bod">
        <div
          className="container mt-5 mb-5 d-flex justify-content-end align-items-center"
        >
          <a className="btn" id="resume-btn" href={ResumeJpg} download>
            Download
          </a>
        </div>

        <div className="container text-center w-50">
        <img className="w-100" src={ResumePng}></img>
        </div>

      </div>
    </>
  );
}
