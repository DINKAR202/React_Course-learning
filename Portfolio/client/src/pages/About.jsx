// import { useAuth } from "../store/auth";
import { BsLinkedin } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";
import { SiHackerearth, SiCodechef } from "react-icons/si";

const About = () => {
  // const { user } = useAuth();

  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            {/* hero images  */}
            <div className="hero-image">
              <img
                src="/images/about.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>

            <div className="hero-content">
              <h1 className="main-heading-about mb-3">About Me</h1>
              {/* <p>Hi {user.username} Developer</p> */}
              <h2>A MERN Stack Developer!</h2>
              <p>
                As a passionate MERN Stack Developer, I thrive on crafting
                visually stunning, innovative, and functional websites that
                address real-world challenges. With expertise in MongoDB,
                Express.js, React.js, and Node.js, I seamlessly integrate
                front-end and back-end technologies to deliver seamless user
                experiences.
              </p>
              <div className="btn btn-group grid grid-two-cols">
                <div className="btn btn-group">
                  <a href="https://drive.google.com/file/d/1laD_EZ_Bd6tF1R0DKmOnrBL8w7y7Yrhn/view?usp=sharing">
                    <button className="btn">Resume</button>
                  </a>
                  <a href="mailto:dinkar202@outlook.com">
                    <button className="btn secondary-btn">Hire me</button>
                  </a>
                </div>

                <div className="btn-group">
                  <span>
                    <a href="https://www.linkedin.com/in/dinkar-kumar-pri/">
                      <BsLinkedin />
                    </a>
                  </span>
                  <span>
                    <a href="https://github.com/DINKAR202">
                      <VscGithub />
                    </a>
                  </span>
                  <span>
                    <a href="https://www.hackerrank.com/profile/rathordinkar5">
                      <SiHackerearth />
                    </a>
                  </span>
                  <span>
                    <a href="https://www.codechef.com/users/dinkar7079">
                      <SiCodechef />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;