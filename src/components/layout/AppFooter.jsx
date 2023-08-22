import NetcomLogo from "../../assets/netcom-kassel-logo.svg";
import classes from "./AppFooter.module.css";
import PhoneIcon from "@mui/icons-material/Phone";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ArticleIcon from "@mui/icons-material/Article";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function AppFooter() {
  return (
    <footer className={classes["main__footer"]}>
      <ul className={classes["footer__items"]}>
        <li>
          <PhoneIcon />
          <a
            href="https://netcom-kassel.de/privatkunden/kontakt/"
            target="_blank"
          >
            Contact Us
          </a>
        </li>
        <li>
          <RssFeedIcon />
          <a href="https://netcom-kassel.de/privatkunden/blog/" target="_blank">
            Blog
          </a>
        </li>
        <li>
          <ArticleIcon />
          <a
            href="https://netcom-kassel.de/privatkunden/newsletter/"
            target="_blank"
          >
            Newsletter
          </a>
        </li>
      </ul>

      <ul className={classes["footer__social"]}>
        <li>
          <a href="https://www.instagram.com/netcom.kassel/" target="_blank">
            <InstagramIcon fontSize="medium" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/Netcom.Kassel/" target="_blank">
            <FacebookIcon fontSize="medium" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/netcom-kassel/"
            target="_blank"
          >
            <LinkedInIcon fontSize="medium" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default AppFooter;
