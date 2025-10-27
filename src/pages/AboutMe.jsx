import devAvatar from "../assets/media/PortfolioAvatar1.png";

export default function AboutMe() {
  return (
    <>
      <div className="container mt-5 d-flex justify-content-center">
        <div className="greeting-container d-flex flex-column justify-content-center align-items-center">
          <h2 id="greeting">Nice To Meet You!</h2>

          <img
            src={devAvatar}
            alt="Tom Dossman Full Stack Developer Avatar PNG"
            id="dev-avatar"
          />

          <p>
            I'm a Full Stack Developer, passionate about
            blending artistic design and technology to build clean, modern, and
            intuitive web applications. I love creating responsive, accessible
            interfaces that elevate user experiences and bring ideas to life
            through thoughtful design and efficient code.
            <br></br>
            <br></br>
            Proficient across the full development stack, I also enjoy building
            APIs, optimizing performance, and deploying scalable solutions. I'm
            highly skilled in leveraging AI-assisted development tools and
            emerging technologies to increase efficiency, enhance product
            quality, and contribute to high-performing, forward-thinking teams.
            <br></br>
            <br></br>
            ⚡ Fun facts: I love pickleball, ice hockey, and long walks and hikes to recharge creative energy!
          </p>
        </div>
      </div>
    </>
  );
}
