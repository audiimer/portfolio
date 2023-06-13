import React from 'react'
import timeline from "./timeline.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
function Education() {
  return (
    <div>
            <div className={timeline.timeline}>
                <div className={`${timeline.container} ${timeline.left} ${timeline.education}`}>
                    <div className={timeline.date}>2023</div>
                    <i className={`${timeline.icon} `}><FontAwesomeIcon icon={faGraduationCap} /></i>
                    <div className={timeline.content}>
                        <h2>APP ACADEMY OPEN FULL-STACK SOFTWARE ENGINEER BOOTCAMP</h2>
                        <h5>Skills Learning:</h5>
                        <hr></hr>

                        <p>React JavaScript Framework: building dynamic and interactive user interfaces</p>

                        <p>APIs (Application Programming Interfaces): integrating and interacting with external services and data sources </p>

                        <p>Data Structures and Algorithms: designing and implementing efficient data structures and algorithms to solve complex problems and optimize software performance</p>

                        <p>Python: developing versatile applications, data analysis, and automation tasks with a focus on readability and simplicity</p>

                        <p>SQL: managing databases, writing queries, and optimizing database performance</p>

                    </div>
                </div>
                <div className={`${timeline.container} ${timeline.right} ${timeline.education}`}>
                    <div className={timeline.date}>2022</div>
                    <i className={`${timeline.icon}`}><FontAwesomeIcon icon={faGraduationCap} /></i>
                    <div className={timeline.content}>
                    <h2>MERIT AMERICA IT BOOTCAMP</h2>
                        <h5>Skills Learned:</h5>
                        <hr></hr>

                        <p>Technical support: installing & configuring computer hardware, software, and networks</p>

                        <p>Computer networking: standard protocols for TCP/IP and network services (e.g., DNS)</p>

                        <p>Operating systems: creating users, groups, and permissions for account access & installing, configuring, and removing software on Windows and Linux operating systems</p>

                        <p>Systems administration: server management and user & information management</p>

                        <p>IT security: evaluating potential risks and utilizing encryption algorithms and techniques</p>

                    </div>
                </div>
                <div className={`${timeline.container} ${timeline.left} ${timeline.education}`}>
                    <div className={timeline.date}>2021</div>
                    <i className={`${timeline.icon}`}><FontAwesomeIcon icon={faGraduationCap} /></i>
                    <div className={timeline.content}>
                    <h2>ASSOCIATE OF APPLIED SCIENCE / COMPUTER SCIENCE</h2>
                    <p>Cumulative GPA: 4.0/4.0</p>
                        <h5>Skills Learned:</h5>
                        <hr></hr>

                        <p>OOP (Object-Oriented Programming): designing and implementing modular, reusable, and maintainable code using OOP principles such as encapsulation, inheritance, and polymorphism </p>

                        <p>Web Development: creating  HTML, CSS, and JavaScript static and responsive web pages with interactive elements</p>

                        <p>Databases: designing, managing, and querying databases for efficient storage and retrieval of  data</p>

                        <p>Programming languages: foundations and syntax of Java and C#</p>

                        <p>Data Structures: understanding of data structures including arrays, stacks, queues, trees, and graphs</p>
                    </div>
                </div>
                <div className={`${timeline.container} ${timeline.right} ${timeline.education}`}>
                    <div className={timeline.date}>2016</div>
                    <i className={`${timeline.icon} ${timeline.fa} ${timeline['fa-home']}`}><FontAwesomeIcon icon={faGraduationCap} /></i>
                    <div className={timeline.content}>
                    <h2>BACHELOR’S DEGREE IN BUSINESS ADMINISTRATION / HUMAN RESOURCE MANAGEMENT</h2>
                    <p>Cumulative GPA: 3.5/4.0</p>
                        <h5>Recruitment and Selection</h5>
                        <hr></hr>

                        <p>Ethics and Professionalism</p>

                        <p>Communication and Interpersonal Skills</p>

                        <p>Compensation and Benefits</p>

                        <p>HR Policies and Compliance</p>

                        <p>Recruitment and Selection
</p>
                    </div>
                </div>

               </div>
        </div>
  )
}

export default Education
