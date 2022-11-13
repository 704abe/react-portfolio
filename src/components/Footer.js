import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {

  return (
    <footer className="page-footer text-muted font-small blue p-1 pb-5">
        <div className="container-fluid text-center">
            <div className="row d-flex justify-content-center">
                <div className="col-12 col-md-6">
                    <div className="d-flex justify-content-around">
                        <a href='https://github.com/704abe' target={"_blank"}>
                          <FontAwesomeIcon icon={faGithub} size="lg" />
                        </a>
                        <a href='https://www.linkedin.com/in/704abe/' target={"_blank"}>
                          <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </a>
                        <a href='mailto:smith.abraham19@gmail.com' target={"_blank"}>
                          <FontAwesomeIcon icon={faEnvelope} size="lg" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer