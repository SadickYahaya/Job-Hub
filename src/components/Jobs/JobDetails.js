import React from "react";
import { useNavigate } from "react-router-dom/";

import "../Styles/jobDetails.css";
import { ReactComponent as BackIcon } from "../../assets/back.svg";
import { ReactComponent as TimeIcon } from "../../assets/time.svg";
import Logo from "../../assets/job-logo.webp";

const JobDetails = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="job-details">
        <div className="section-1">
          <div className="back-icon" onClick={() => navigate("/")}>
            <BackIcon />
            Back to search
          </div>
          <div className="how-to-apply">
            <span>How to apply</span>
            <span>
              Please email a copy of your resume <br></br>and online portfolio
              to
              <span className="email"> sadickashton@gmail.com</span>
            </span>
          </div>
        </div>
        <div className="section-2">
          <div className="job-details-title">
            <h1>Front-End Software Engineer</h1>
            <div id="date">
              <span className="date">
                <TimeIcon className="date-icon" />
                <span>5 days ago</span>
              </span>
              <span className="fulltime type">Full time</span>
            </div>
          </div>
          <div>
            <div className="brand-logo">
              <img src={Logo} alt=""></img>
              <div className="location">
                <span>Kasisto</span>
                <span>New York</span>
              </div>
            </div>
            {/* <span>Humanizing Digital Experiences</span> */}
            {/* <span>
              Full-Time Position (Remote) About You We’re seeking a front-end
              React developer who is looking for the opportunity to contribute
              to a variety of social and sustainable causes by empowering the
              public with reliable, actionable information! Our ideal candidate
              is a self-motivated remote worker who is excited to dive into the
              details of browser extension best practices and work closely with
              our passionate startup team to take our software to the next
              level. Job Description The Front-End Engineer will collaborate
              with our internal and contract engineering teams to lead front-end
              development implementation efforts that improve the value of our
              browser extension, and expand our measurable impact by exploring
              new methodologies, digital offerings, and online spaces that align
              with our mission. Strong communication, collaboration, and
              business skills are required, in addition to front-end technical
              experience. While this role has an emphasis on front-end
              techniques and frameworks, we’re looking for a candidate with
              interest in filling any backend/API/database gaps in his or her
              expertise with support from our Back-end Developer.
              Responsibilities Collaborate with leadership on product strategy,
              roadmaps, priorities, architecture, and product improvements
              Research and provide recommendations including latest technologies
              that have the potential to yield competitive advantage Collaborate
              with UX designer to vet and implement UI/UX designs Provide
              details on estimated timelines, anticipated tasks, risks, impacts,
              progress, and requirements of deliverables Develop new features
              for Consciously’s browser extension, API, database, and
              surrounding ecosystem Oversee system delivery, and release
              functionality Develop and maintain documentation as needed Embrace
              and represent Consciously’s company policies and practices
              Day-to-Day Build reusable code and libraries for future use
              Monitor KPIs and user metrics to assess technological performance
              Optimize Consciously’s software and integrations for speed and
              scalability Build and manage quality assurance and data protection
              processes Perform troubleshooting and bug fixes Work Hours &
              Benefits Work from home with in-person meetings as needed. Stock
              Options Available Qualifications Excellent communication,
              collaboration, and team leadership skills 2+ years front-end React
              development experience with some backend experience a bonus
              Knowledge of professional software engineering and best practices
              for the full software development life cycle, including coding
              standards, code reviews, source control management, build
              processes, testing, and operations Experience in development of
              distributed/scalable systems and high-volume applications
              Bachelor’s degree preferred Required Experience 5+ years
              JavaScript, including DOM manipulation and the JavaScript object
              model 2+ years React experience Client-side scripting and
              JavaScript frameworks Basic knowledge of image authoring tools
              Wordpress knowledge a plus Preferred Experience Strong proficiency
              in: Web markup, including HTML5, CSS3 CSS pre-processing platforms
              PHP and Wordpress Metrics tracking with Google Analytics,
              Mixpanel, etc. Integrating with Ecommerce Marketplaces and APIs
              (Amazon, Walmart, etc) Browser Extension & Page Scraping
              techniques
            </span> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
