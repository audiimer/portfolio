import React from "react";
import timeline from "./timeline.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
function Education() {
  return (
    <div id="options">
      <div className={timeline.timeline}>
        <div
          className={`${timeline.container} ${timeline.left} ${timeline.education}`}
        >
          <div className={timeline.date}>2024</div>
          <i className={`${timeline.icon} `}>
            <FontAwesomeIcon icon={faGraduationCap} />
          </i>
          <div className={timeline.content}>
            <h2>Master of Science / Computer Science</h2>
            <p>Cumulative GPA: 4.0/4.0</p>
            <hr></hr>

            <p>
              Algorithm design: creating and devising step-by-step instructions
              to solve a specific computational problem efficiently and
              effectively.{" "}
            </p>

            <p>
              Automaton Theory and Formal Languages: understanding the
              theoretical underpinnings of computation and the design of
              efficient algorithms and software systems.{" "}
            </p>

            <p>
              Programming languages: learning the foundation and syntax of programming
              languages such as Java and C#.
            </p>
          </div>
        </div>
        <div
          className={`${timeline.container} ${timeline.right} ${timeline.education}`}
        >
          <div className={timeline.date}>2023</div>
          <i className={`${timeline.icon} `}>
            <FontAwesomeIcon icon={faGraduationCap} />
          </i>
          <div className={timeline.content}>
            <h2>App Academy Open</h2>
            <h2>Full-stack Software Engineer Bootcamp</h2>
            <hr></hr>

            <p>
              React JavaScript Framework: building dynamic and interactive user
              interfaces using components, hooks, and event handling.
            </p>

            <p>
              APIs (Application Programming Interfaces): integrating and
              interacting with external services and data sources.{" "}
            </p>

            <p>
              Data Structures and Algorithms: designing and implementing
              efficient data structures and algorithms to solve complex problems
              and optimize software performance.
            </p>
          </div>
        </div>
        <div
          className={`${timeline.container} ${timeline.left} ${timeline.education}`}
        >
          <div className={timeline.date}>2022</div>
          <i className={`${timeline.icon}`}>
            <FontAwesomeIcon icon={faGraduationCap} />
          </i>
          <div className={timeline.content}>
            <h2>Merit America IT Bootcamp</h2>
            <hr></hr>

            <p>
              Technical support: installing & configuring computer hardware,
              software, and networks.
            </p>

            <p>
              Computer networking: standard protocols for TCP/IP and network
              services (e.g., DNS).
            </p>

            <p>
              IT security: evaluating potential risks and utilizing encryption
              algorithms and techniques.
            </p>
          </div>
        </div>
        <div
          className={`${timeline.container} ${timeline.right} ${timeline.education}`}
        >
          <div className={timeline.date}>2021</div>
          <i className={`${timeline.icon}`}>
            <FontAwesomeIcon icon={faGraduationCap} />
          </i>
          <div className={timeline.content}>
            <h2>Associate of Applied Science / Computer Science</h2>
            <p>Cumulative GPA: 4.0/4.0</p>
            <hr></hr>

            <p>
              OOP (Object-Oriented Programming): designing and implementing
              modular, reusable, and maintainable code using OOP principles such
              as encapsulation, inheritance, and polymorphism.{" "}
            </p>

            <p>
              Web Development: creating HTML, CSS, and JavaScript static and
              responsive web pages with interactive elements.
            </p>

            <p>
              Databases: designing, managing, and querying databases for
              efficient storage and retrieval of data.
            </p>
          </div>
        </div>
        <div
          className={`${timeline.container} ${timeline.left} ${timeline.education}`}
        >
          <div className={timeline.date}>2016</div>
          <i
            className={`${timeline.icon} ${timeline.fa} ${timeline["fa-home"]}`}
          >
            <FontAwesomeIcon icon={faGraduationCap} />
          </i>
          <div className={timeline.content}>
            <h2>
              Bachelor's in Business Administration / Human Resource
              Management
            </h2>
            <p>Cumulative GPA: 3.5/4.0</p>
            <hr></hr>

            <p>Ethics and Professionalism: guiding individuals in their professional roles, promoting integrity, responsibility, and respect for others.</p>

            <p>HR Policies and Compliance: ensuring adherence to legal and regulatory requirements while maintaining a fair and consistent work environment for employees.</p>

            <p>Recruitment and Selection: attracting, evaluating, and choosing the most suitable candidates to fill job positions within an organization.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
