import "./footer.css";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <ul className="footer__social-list">
          <li className="footer__social-item">
            <a
              className="footer__social-link github-link"
              target="blank"
              href="https://github.com/BohdanPanchenko"
              aria-label="github link"
            >
              <Icon
                icon="codicon:github"
                color="white"
                width="32"
                height="32"
              />
            </a>
          </li>
          <li className="footer__social-item" target="blank">
            <a
              className="footer__social-link email-link"
              href="mailto:logitechchillstream@gmail.com"
              aria-label="email link"
            >
              <Icon
                icon="clarity:email-solid"
                color="white"
                width="32"
                height="32"
              />
            </a>
          </li>
          <li className="footer__social-item">
            <a
              className="footer__social-link github-link"
              target="blank"
              href="https://t.me/Bohdan_Panchenko"
              aria-label="github link"
            >
              <Icon icon="jam:telegram" color="white" width="32" height="32" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
