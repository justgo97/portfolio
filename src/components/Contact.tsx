import { targetContact } from "../util/consts";
import Emoji from "./Emoji";

interface ContactProps {
  darkMode: boolean;
}

const Contact = ({ darkMode }: ContactProps) => {
  return (
    <div className="contact" data-id={targetContact}>
      <h2>
        <Emoji symbol={"📞"} /> Contact Me:
      </h2>
      <div className="contact-info">
        <div className="contact-social">
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/hamdi20/"
            >
              <i className="linkedin-icon devicon-linkedin-plain-wordmark colored"></i>
            </a>
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/justgo97/"
            >
              <i
                className={`devicon-github-original-wordmark ${
                  !darkMode ? "colored" : ""
                }`}
              ></i>
            </a>
          </div>
        </div>

        <div>
          <div className="contact-email">
            <Emoji className="contact-email-emoji" symbol={"📧"} />
            Email:{" "}
            <a href="mailto: hamdi.mar20@gmail.com">hamdi.mar20@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
