
import './Home.css'
import Linkedin from '../components/Linkedin';
import Instagram from '../components/Instagram';

function Home() {
  return (
    <div className="home">
        <div className="hero-container">
            <span className='hero-text-container'>

                <span className='name'>RON CABATUANDO</span>

                <span className='job-title'>Fullstack Web Developer</span>
                <span className='passion'>Blending the Best of Tech and Business: Elevating Digital Solutions with Expertise in IT and Business Administration. Explore My Portfolio and Witness the Fusion of Innovation and Operational Excellence.</span>
                <span className='btn-container'>
                    <button class="button" type="button">
                      <span class="button__text">Contact me</span>
                      <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
                    </button>
                    <button class="button" type="button">
                      <span class="button__text">Download CV</span>
                      <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
                    </button>
                </span>
            </span>
            <span className='socials'>
                <span>FOLLOW ME ON</span>
                <Linkedin/>
                <Instagram/>
            </span>
        </div>
        <div className='hero-img-container'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" class="spin-image" alt="React Logo"/>
          <img src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png"  class="spin-image2 node" alt="React Logo"/>
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visual-studio-code-icon.png"  class="spin-image3 vscode" alt="React Logo"/>
          <img  className="my-img" src="https://i.imgur.com/HTPAVSE.png" alt="" />
        </div>


    </div>
  );
}

export default Home;
