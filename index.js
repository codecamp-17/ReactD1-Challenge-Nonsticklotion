/**********************************************
 * 🚀 Welcome to the React Challenge Day-1 🚀
 * 🚀 Build your portfolio website 🚀
 *
 * 🎯 Objective
 * - Breaking Down Problem (Page to Component)
 * - Write a lot of Function Component
 * - CSS Practice
 *
 * 📝 Task:
 * - ดู requirement จาก UI-Design ได้ที่ http://tinyurl.com/yc26ce5u
 * - วิเคราะห์ + แบ่ง UI ออกมาเป็น Component
 * - Develop Website with React + Function Component
 * - Deploy with Netlify
 * - Push your final code to your github
 * -
 *
 * Suggestion 🧘🏻 :
 * - Don't try to solve Big problem, Break it down
 *
 * 🚧 Challenge :
 *
 * 🌈 Enjoy the coding journey, and remember:
 *    "The more you code, the more you learn!" 🚀🌐
 **********************************************/
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);

//Header
function Header() {
  return (
    <>
      <nav className="nav">
        <div className="icon"></div>
        <ul className="middleNav">
          <li>
            <a href="">about</a>
          </li>
          <li>
            <a href="">experience</a>
          </li>
          <li>
            <a href="">project</a>
          </li>
          <li>
            <a href="">contact</a>
          </li>
        </ul>
        <div className="rightbutton">
          <button>Resume</button>
          <button>Hire Me</button>
        </div>
      </nav>
    </>
  );
}
//Hisection
function HiSection() {
  return (
    <>
      <div className="hisection">
        <h1>Hi, I'm John Smith</h1>
        <div className="iDesign">I design and building</div>
        <div className="iDesign">{`>>>`}</div>
      </div>
    </>
  );
}
//About Me
function AboutMe() {
  return (
    <>
      <div className="about_box">
        <div className="about_head">About Me</div>
        <div className="info_about_box">
          <div className="info_about">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              natus autem reprehenderit. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Dicta, suscipit! Error laboriosam minima dolor.
              Debitis nesciunt eaque, officia corporis exercitationem ullam nemo
              autem quibusdam earum.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              natus autem reprehenderit. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Dicta, suscipit! Error laboriosam minima dolor.
              Debitis nesciunt eaque, officia corporis exercitationem ullam nemo
              autem quibusdam earum.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              natus autem reprehenderit. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Dicta, suscipit! Error laboriosam minima dolor.
              Debitis nesciunt eaque, officia corporis exercitationem ullam nemo
              autem quibusdam earum.
            </p>
          </div>
          <div className="pic_about"></div>
        </div>
      </div>
    </>
  );
}
//Experience
function Experience() {
  return (
    <>
      <div className="exp_box">
        <div className="exp_head">Experience</div>
        <div className="job_exp">
          <div className="job_title_left">
            <p>Job Title</p>
            <p>Company Name</p>
            <hr></hr>
            Apr 2018 - Dec 2022
          </div>
          <div className="job_info_left">
            <ul className="job_info_ul">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                nihil praesentium similique numquam harum iure cumque voluptas
                ipsa atque explicabo?
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                nihil praesentium similique numquam harum iure cumque voluptas
                ipsa atque explicabo?
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                nihil praesentium similique numquam harum iure cumque voluptas
                ipsa atque explicabo?
              </li>
            </ul>
          </div>
        </div>
        <div className="job_exp">
          <div className="job_info_right">
            <ul className="job_info_ul">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                nihil praesentium similique numquam harum iure cumque voluptas
                ipsa atque explicabo?
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                nihil praesentium similique numquam harum iure cumque voluptas
                ipsa atque explicabo?
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                nihil praesentium similique numquam harum iure cumque voluptas
                ipsa atque explicabo?
              </li>
            </ul>
          </div>
          <div className="job_title_right">
            <p>Job Title</p>
            <p>Company Name</p>
            <hr></hr>
            Apr 2018 - Dec 2022
          </div>
        </div>
      </div>
    </>
  );
}
//Featured Project
function FeaturedProject() {
  return (
    <>
      <div className="feathured_project">
        <div className="feathured_head">Featured Project</div>
        <div className="project_bigbox">
          <div className="project_box">
            <div className="project_pic"></div>
            <div className="project_info">
              <div className="project_info_head">
                <h3>Project Name</h3>
              </div>
              <div className="project_info_info">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                tempora repudiandae voluptate, molestias consequuntur ducimus
                iusto. Esse, eveniet harum tempora ipsa nulla vero similique
                cupiditate.
              </div>
              <hr />
              <div className="project_info_link">HTML CSS JS Figma React</div>
              <div className="project_info_icon">
                <div className="project_icon"></div>
                <div className="project_icon"></div>
              </div>
            </div>
          </div>
          <div className="project_box">
            <div className="project_info_right">
              <div className="project_info_head">
                <h3>Project Name</h3>
              </div>
              <div className="project_info_info">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                tempora repudiandae voluptate, molestias consequuntur ducimus
                iusto. Esse, eveniet harum tempora ipsa nulla vero similique
                cupiditate.
              </div>
              <hr />
              <div className="project_info_link">HTML CSS JS Figma React</div>
              <div className="project_info_icon">
                <div className="project_icon"></div>
                <div className="project_icon"></div>
              </div>
            </div>
            <div className="project_pic"></div>
          </div>
        </div>
      </div>
    </>
  );
}
//Other Project
function ProjectBoxOther() {
  return (
    <div className="project_box_other">
      <div className="project_pic_other"></div>
      <div className="project_info_other">
        <div className="project_info_head_other">
          <h3>Project Name</h3>
        </div>
        <div className="project_info_info_other">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A tempora
          repudiandae voluptate, molestias consequuntur ducimus iusto. Esse,
          eveniet harum tempora ipsa nulla vero similique cupiditate.
        </div>
        <hr />
        <div className="project_info_link">HTML CSS JS Figma React</div>
        <div className="project_info_icon">
          <div className="project_icon"></div>
          <div className="project_icon"></div>
        </div>
      </div>
    </div>
  );
}
function OtherProject() {
  return (
    <div className="other_project">
      <div className="other_head">Other Project</div>
      <div class="grid-container">
        <div class="grid-item">
          <ProjectBoxOther />
        </div>
        <div class="grid-item">
          <ProjectBoxOther />
        </div>
        <div class="grid-item">
          <ProjectBoxOther />
        </div>
        <div class="grid-item">
          <ProjectBoxOther />
        </div>
      </div>
    </div>
  );
}
function App() {
  return (
    <>
      <div>
        <Header />
        <main className="main">
          <HiSection />
          <AboutMe />
          <Experience />
          <FeaturedProject />
          <OtherProject />
        </main>
      </div>
    </>
  );
}
root.render(<App />);
