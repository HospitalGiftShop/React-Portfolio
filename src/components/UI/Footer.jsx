
import { BsLinkedIn } from "react-icons/bs";
import { BsGitHub } from "react-icons/bs";
import { BsMailBox } from "react-icons/bs";

const Footer = () => {
    return (
        <div style={{paddingTop: '30px', paddingBottom: '30px'}}>
            <BsLinkedIn
            id="icon"
            className="pop-on-hover"
            sx={{ fontSize: 50 }}
            onClick={(event) =>
              (window.location.href =
                "https://www.linkedin.com/in/tmeans/")
            }
          />
          <BsGitHub
            id="icon"
            className="pop-on-hover"
            sx={{ fontSize: 50 }}
            onClick={(event) =>
              (window.location.href = "https://github.com/HospitalGiftShop")
            }
          />
          <BsMailBox
            id="icon"
            className="pop-on-hover"
            sx={{ fontSize: 50 }}
            onClick={(event) =>
              (window.location.href = "mailto:tmeans01@gmail.com")
            }
          />
        </div>
    )
}

export default Footer;