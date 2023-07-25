import React from "react";
import timeline from "./timeline.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

function Certification() {
  return (
    <div id="options">
      <div className={timeline.timeline}>
        <div
          className={`${timeline.container} ${timeline.left} ${timeline.education}`}
        >
          <div className={timeline.date}>2023</div>
          <i className={`${timeline.icon}`}>
            <FontAwesomeIcon icon={faTrophy} />
          </i>
          <div className={timeline.content}>
            <h2>React - The Complete Guide 2023</h2>
            <p>By Maximilian Schwarzmüller / Udemy</p>
            <hr></hr>

            <p>
              Completed the course "React - The Complete Guide," which also
              covered React Router and Redux.
            </p>
          </div>
        </div>
        <div
          className={`${timeline.container} ${timeline.right} ${timeline.education}`}
        >
          <div className={timeline.date}>2022</div>
          <i className={`${timeline.icon} `}>
            <FontAwesomeIcon icon={faTrophy} />
          </i>
          <div className={timeline.content}>
            <h2>GOOGLE IT SUPPORT</h2>
            <p>By Google.com / Coursera</p>
            <hr></hr>

            <p>
              Completed the course Google IT Support that covered the basics of
              an entry level IT position such as: Technical Support,
              Troubleshooting, IT Security, System Admin.
            </p>
          </div>
        </div>

        <div
          className={`${timeline.container} ${timeline.left} ${timeline.education}`}
        >
          <div className={timeline.date}>2021</div>
          <i className={`${timeline.icon}`}>
            <FontAwesomeIcon icon={faTrophy} />
          </i>
          <div className={timeline.content}>
            <h2>HTML, CSS, AND JAVASCRIPT FOR WEB DEVELOPERS</h2>
            <p>By Yaakov Chaikin / Coursera</p>
            <hr></hr>

            <p>
              Completed the course HTML, CSS, and JavaScript for Web Developers
              that covered the foundations of the language with some beginner
              friendly projects.
            </p>
          </div>
        </div>
        <div
          className={`${timeline.container} ${timeline.right} ${timeline.education}`}
        >
          <div className={timeline.date}>2021</div>
          <i className={`${timeline.icon}`}>
            <FontAwesomeIcon icon={faTrophy} />
          </i>
          <div className={timeline.content}>
            <h2>THE COMPLETE PYTHON BOOTCAMP FROM ZERO TO HERO</h2>
            <p>By Jose Portilla / Udemy</p>
            <h5>Skills Learned:</h5>
            <hr></hr>

            <p>
              Completed the course The Complete Python Bootcamp From Zero to
              Hero that covered the foundations of the programming language.
            </p>
          </div>
        </div>
        <div
          className={`${timeline.container} ${timeline.left} ${timeline.education}`}
        >
          <div className={timeline.date}>2020</div>
          <i
            className={`${timeline.icon} ${timeline.fa} ${timeline["fa-home"]}`}
          >
            <FontAwesomeIcon icon={faTrophy} />
          </i>
          <div className={timeline.content}>
            <h2>ACADEMIC EXCELENCE CERTIFICATE</h2>
            <p>By Inter american University of Puerto Rico</p>
            <hr></hr>

            <p>
              Issued for having a perfect GPA for two consecutive semesters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certification;
