import { FC, ReactNode } from "react";

export default function Home() {
  return (
    <main className="page">
      <div className="side-panel">
        <ContactInformation />
        <Education />
        <Skills />
      </div>
      <div className="main-panel">
        <CareerObjective />
        <WorkExperience />
      </div>
    </main>
  );
}

const ContactInformation: FC = () => {
  const linkedInLink = (
    <a
      href="https://www.linkedin.com/in/scottmilewski"
      style={{ color: "white" }}
      target="_blank"
    >
      https://www.linkedin.com/in/
      <wbr />
      scottmilewski
    </a>
  );

  return (
    <div className="contact-info">
      <h1>SCOTT MILEWSKI</h1>
      <h2>Senior Front-End Developer</h2>
      <ContactItem
        type={ContactItemType.EMAIL}
        item="scottmilewski@yahoo.com"
      />
      <ContactItem type={ContactItemType.PHONE} item="(636) 357-5243" />
      <ContactItem type={ContactItemType.ADDRESS} item="Columbia, MO" />
      <ContactItem type={ContactItemType.LINKEDIN} item={linkedInLink} />
    </div>
  );
};

enum ContactItemType {
  EMAIL = "email",
  PHONE = "phone",
  ADDRESS = "address",
  LINKEDIN = "linkedin",
}

interface ContactItemProps {
  type:
    | ContactItemType.EMAIL
    | ContactItemType.PHONE
    | ContactItemType.ADDRESS
    | ContactItemType.LINKEDIN;
  item: string | ReactNode;
}

const ContactItem: FC<ContactItemProps> = ({ type, item }) => {
  const IMAGE_SRC = new Map<string, string>([
    [ContactItemType.EMAIL, "/email-icon.svg"],
    [ContactItemType.PHONE, "/phone-icon.svg"],
    [ContactItemType.ADDRESS, "/address-icon.svg"],
    [ContactItemType.LINKEDIN, "/linkedin-icon.svg"],
  ]);

  return (
    <div className="contact-item">
      <img src={IMAGE_SRC.get(type)} alt="icon" height="18px" />
      {item}
    </div>
  );
};

const Education: FC = () => {
  return (
    <div className="section">
      <h3>EDUCATION</h3>
      <p>Bachelor of Science Electrical Engineering</p>
      <h4 style={{ marginTop: "8px" }}>Southern Illinois University</h4>
      <TimeOrPlaceItem type={TimeOrPlaceItemType.TIME} item="May 1993" />
      <TimeOrPlaceItem type={TimeOrPlaceItemType.PLACE} item="Carbondale, IL" />
    </div>
  );
};

enum TimeOrPlaceItemType {
  TIME = "time",
  PLACE = "place",
}

interface TimeOrPlaceItemProps {
  type: TimeOrPlaceItemType.TIME | TimeOrPlaceItemType.PLACE;
  item: string | ReactNode;
}

const TimeOrPlaceItem: FC<TimeOrPlaceItemProps> = ({ type, item }) => {
  const icon = type === "place" ? "/address-icon.svg" : "/calendar-icon.svg";
  return (
    <div className="education-item">
      <img src={icon} alt="icon" height="18px" />
      {item}
    </div>
  );
};

const Skills: FC = () => {
  return (
    <div className="section">
      <h3>SKILLS</h3>
      <h4>Languages</h4>
      <BulletItem item="HTML/HTML5" />
      <BulletItem item="CSS/Sass/Less" />
      <BulletItem item="Java" />
      <BulletItem item="Javascript" />
      <BulletItem item="Typescript" />
      <BulletItem item="Webpack" />
      <h4>Frameworks/Libraries</h4>
      <BulletItem item="React" />
      <BulletItem item="NextJS" />
      <BulletItem item="MobX" />
      <BulletItem item="NodeJS" />
      <h4>Testing</h4>
      <BulletItem item="Enzyme" />
      <BulletItem item="Jest" />
      <BulletItem item="Jest-Axe" />
      <h4>CI/CD</h4>
      <BulletItem item="GIT" />
      <h4>Databases</h4>
      <BulletItem item="MySQL" />
      <BulletItem item="Mongo" />
      <BulletItem item="DynamoDB" />
      <h4>Standards</h4>
      <BulletItem item="WCAG" />
      <BulletItem item="W3C" />
    </div>
  );
};

const BulletItem: FC<{ item: string | ReactNode }> = ({ item }) => {
  return <p>&#x2022; {item}</p>;
};

const CareerObjective: FC = () => {
  return (
    <div className="section">
      <h3>CAREER OBJECTIVE</h3>
      <p>
        Senior Front-End Developer with over 10 years of proven leadership with
        a progressive and diversified technological background. I have a
        results-driven mentality. I am enthusiastic about learning, teaching,
        and implementing efficient technologies to make aggressive deadlines
        consistently achievable. I am passionate about going the extra mile to
        ensure the customer is unquestionably satisfied with the product or
        service provided. I am a self-starter with excellent verbal and written
        communication skills with the ability to interact with business and
        technical providers. I am able to work on multiple, concurrent projects.
        I have demonstrated a strong ability to solve problems as well as grasp
        and adapt new information, technologies and concepts quickly.
      </p>
    </div>
  );
};

const WorkExperience: FC = () => {
  return (
    <div className="section">
      <h3>WORK EXPERIENCE</h3>
      <WorkExperience1 />
      <br />
      <WorkExperience2 />
    </div>
  );
};

const WorkExperience1: FC = () => {
  return (
    <div>
      <div className="title">Senior Software Engineer</div>
      <div className="text-highlight">Carfax, Inc.</div>
      <div className="work-experience-detail">
        <TimeOrPlaceItem
          type={TimeOrPlaceItemType.TIME}
          item="August 2016 - Present"
        />
        <TimeOrPlaceItem type={TimeOrPlaceItemType.PLACE} item="Columbia, MO" />
      </div>
      <div className="responsibilities">
        <BulletItem item="Collaborated closely with developers, architects, cloud engineers, support teams, security teams, and other stakeholders." />
        <BulletItem item="Implemented AWS to allow easy iteration in company cloud infrastructure." />
        <BulletItem item="Facilitated and participated in design decisions, including new technology research and prototyping." />
        <BulletItem item="Mentored 3 new junior front-end developers on team in expanding JavaScript, React, and MobX skillset." />
        <BulletItem item="Worked in a dynamic, agile, team environment developing awesome new applications and tooling." />
        <BulletItem item="Worked with Quality Assurance to get new pages/products tested, and addressed any issues within 48 hours." />
        <BulletItem item="Drive front end fit and finish, from pixel perfect layouts to animations, ensuring a polished experience is delivered to our customers." />
        <BulletItem item="Contribute to the ideation, concept development, and implementation of visual design concepts." />
      </div>
    </div>
  );
};

const WorkExperience2: FC = () => {
  return (
    <div>
      <div className="title">System Developer</div>
      <div className="text-highlight">Carfax, Inc.</div>
      <div className="work-experience-detail">
        <TimeOrPlaceItem
          type={TimeOrPlaceItemType.TIME}
          item="May 2006 - August 2016"
        />
        <TimeOrPlaceItem type={TimeOrPlaceItemType.PLACE} item="Columbia, MO" />
      </div>
      <div className="responsibilities">
        <BulletItem
          item={
            <span>
              <i>RCMii Project</i> – Rewrote, redesigned and improved
              performance on an internal web application which allowed users to
              control and configure how data is displayed on the Vehicle History
              Report.
            </span>
          }
        />
        <BulletItem
          item={
            <span>
              <i>DIRT Project</i> – Data In Requirements Tool. Designed,
              architected, tested and implemented an internal web application
              for Data Services with a small team using agile principles from
              the ground up which allowed users to more consistently, more
              accurately more efficiently (and in less time) set up how incoming
              data sources are to be processed, transformed and loaded to the
              Vehicle History Database.
            </span>
          }
        />
        <BulletItem
          item={
            <span>
              <i>Receipt Project</i> – Designed, architected, tested and
              implemented an internal web application for Data Services with a
              small team using agile principles which allowed users to configure
              and set up and configure incoming data files to uniquely and
              properly be processed.
            </span>
          }
        />
        <BulletItem
          item={
            <span>
              <i>VHPA Project</i> - Designed, architected, tested and
              implemented an internal web application which allowed business
              analysists to enter data and view adjustments to the Vehicle
              History Pricing Adjustment model.
            </span>
          }
        />
        <BulletItem
          item={
            <span>
              <i>Cradle to Grave Project</i> – Designed, architected, tested and
              implemented an internal RESTful web service to deliver necessary
              information in a JSON format to our Virginia customers who
              ultimately consumed the data to display in the Salesforce web
              application for the end users (Sales team) which enabled CARFAX
              for the first time to understand basic metrics from specific
              roof-top location making it easier for the Sales team to identify
              and troubleshoot data interruptions.
            </span>
          }
        />
      </div>
    </div>
  );
};
