import { FC } from "react";
import ContactItem, { ContactItemType } from "./ContactItem";

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
      <h2>Senior Front-End Engineer</h2>
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
export default ContactInformation;
