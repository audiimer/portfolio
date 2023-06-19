import React from 'react'
import timeline from "./timeline.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';


function Experience() {
    return (
        <div id='experience'>
            <div className={timeline.timeline}>
                <div className={`${timeline.container} ${timeline.left}`}>
                    <div className={timeline.date}>2022 - 2023</div>
                    <i className={`${timeline.icon} `}><FontAwesomeIcon icon={faBriefcase} /></i>
                    <div className={timeline.content}>
                        <h2>SOFTWARE QUALITY ASSURANCE ENGINEER (INTERNSHIP)</h2>
                        <h5>Medtel.com / Old Greenwich, CT</h5>

                        <p>Found, reported, and documented any backend bugs to ensure a quality product for the customer on its release date.</p>

                        <p> Created test automation features to validate user inputs such as create, update, and remove.</p>

                        <p> Managed multiple features to deploy different testing scenarios using <strong>GET / POST / PUT / PATCH / DELETE</strong>.</p>

                        <p> Maintained constant communication with the development team to ensure tickets were done before the next software update.</p>

                    </div>
                </div>
                <div className={`${timeline.container} ${timeline.right}`}>
                    <div className={timeline.date}>2021 - 2023</div>
                    <i className={`${timeline.icon}`}><FontAwesomeIcon icon={faBriefcase} /></i>
                    <div className={timeline.content}>
                        <h2>INBOUND VENDOR RECEIVE/CUSTOMER RETURNS ASSOCIATE</h2>
                        <h5>Amazon / Easton, PA</h5>

                        <p>Consistently met or exceeded productivity quota of receiving, scanning, and processing 1000 items per day.</p>

                        <p> Verified merchandise and products were packed in a neat and secure manner to ensure customer satisfaction.</p>

                        <p> Processed customer returns by replacing damaged, expired, and products labeled incorrectly to improve the company's warehousing procedures and quality protocols.</p>




                    </div>
                </div>
                <div className={`${timeline.container} ${timeline.left}`}>
                    <div className={timeline.date}>2019 - 2021</div>
                    <i className={`${timeline.icon}`}><FontAwesomeIcon icon={faBriefcase} /></i>
                    <div className={timeline.content}>
                    <h2>RETAIL MERCHANDISE ASSOCIATE</h2>
                        <h5>The TJX Companies, Inc. / Aguadilla, PR</h5>

                        <p>Delivered high-quality customer experiences by greeting customers and responding in a friendly, professional manner to inquiries regarding product location and availability.</p>

                        <p>Routinely met daily objective focused on enrolling customer in company reward program.</p>

                        <p>Maintained organizational, cleanliness, maintenance, and recovery standards of the entire store.</p>

                        <p>Accurately processed and prepared merchandise for the sales floor prioritizing high demand and on-sale products by working as a team with backroom and checkout associates to achieve better sales records.</p>
                    </div>
                </div>
                <div className={`${timeline.container} ${timeline.right}`}>
                    <div className={timeline.date}>2013 – 2019</div>
                    <i className={`${timeline.icon} ${timeline.fa} ${timeline['fa-home']}`}><FontAwesomeIcon icon={faBriefcase} /></i>
                    <div className={timeline.content}>
                    <h2>SALES FLOOR SUPERVISOR</h2>
                        <h5>Kmart Corporation /Aguadilla, PR</h5>

                        <p>Planned and coordinated special activities during high movement periods such as weekend sales, seasonal clearance, and special promotions to achieve store’s $80k-$100k daily sales goals.</p>

                        <p>Prevented accidents through a high hazard monitoring and detection protocol saving the company $10k per accident.</p>

                        <p>Able to quickly troubleshoot all system issues with real-time resolutions following current operating policies.</p>

                        <p>Promoted twice to achieve supervisor level due to exemplary performance as a Cashier and Hardlines Customer Service.</p>
                    </div>
                </div>
                <div className={`${timeline.container} ${timeline.left}`}>
                    <div className={timeline.date}>2016 - 2017</div>
                    <i className={`${timeline.icon} ${timeline.fa} ${timeline['fa-home']}`}><FontAwesomeIcon icon={faBriefcase} /></i>
                    <div className={timeline.content}>
                    <h2>HUMAN RESOURCES ANALYST (INTERNSHIP)</h2>
                        <h5>Town Hall /Isabela, PR</h5>

                        <p>Improved efficiency of hiring process by updating out-of-date job descriptions.</p>

                        <p> Managed the staffing process, including recruiting, interviewing, and hiring candidates for essential role departments such as Finances, Human Resources, and Nursing.</p>

                        <p> Ensured the organization’s compliance with local, state, and federal regulations.</p>


                    </div>
                </div>
               </div>
        </div>
    )
}

export default Experience
