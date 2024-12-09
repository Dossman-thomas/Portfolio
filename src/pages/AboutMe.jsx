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
            I am a personable Full Stack Developer with a strong foundation in
            Angular, React, TypeScript, JavaScript, and Node. Known for my
            problem-solving skills and ability to thrive in dynamic teams, I
            excel at tackling complex challenges and delivering project success.
            Self-motivated and detail-oriented, I adapt quickly to new concepts
            and technologies, fostering collaboration and positivity in
            fast-paced environments.
            <br></br>
            <br></br>
            When not in front of the screen, I trade code for the therapeutic
            outdoors via hiking, gardening, snowboarding, and windsurfing. I
            also love to mix it up on the ice (hockey), passionately rooting for
            the Philadelphia Flyers! When I'm not doing any of that, you'll
            probably find me making music!
            <br></br>
            <br></br>
            Let's connect and explore the endless possibilities at the
            intersection of technology and creativity!
          </p>
        </div>
      </div>
    </>
  );
}
