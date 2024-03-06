import devAvatar from '../assets/media/PortfolioAvatar1.png'

export default function AboutMe() {

  return (
    <>
      <div className="container mt-5 d-flex justify-content-center">

        <div className="greeting-container d-flex flex-column justify-content-center align-items-center">

        <h2 id="greeting">Nice To Meet You!</h2>
        
          <img src={devAvatar} alt="Tom Dossman Full Stack Developer Avatar PNG" id="dev-avatar" />



          <p>
            Hello there! I'm Tom! I’m a passionate Full Stack Developer with a keen eye for frontend magic. My love for art and design fuels my creativity, making the frontend my canvas to craft seamless and visually clean user experiences.
            <br></br>
            <br></br>
            Beyond UX/UI, I'm also intrigued by the backend—how APIs and databases rule the web, plus how it all interfaces with the frontend!
            <br></br>
            <br></br>
            Constantly hungry for knowledge, web development has become my playground, a realm I once took for granted but now embrace for its depth and intricacies.
            <br></br>
            <br></br>
            When not in front of the screen, I trade code for the therapeutic outdoors via hiking, gardening, snowboarding, and windsurfing. I also love to mix it up on the ice (hockey), passionately rooting for the Philadelphia Flyers! When I'm not doing any of that, you'll probably find me making music!
            <br></br>
            <br></br>
            Let's connect and explore the endless possibilities at the intersection of technology and creativity!
          </p>

        </div>


      </div>

    </>

  )

}