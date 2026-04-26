import { FC, ReactNode } from "react";
import Image from "next/image";

export enum ContactItemType {
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
      <Image
        src={IMAGE_SRC.get(type) || ""}
        alt="icon"
        height="18"
        width="18"
      />
      {item}
    </div>
  );
};
export default ContactItem;
