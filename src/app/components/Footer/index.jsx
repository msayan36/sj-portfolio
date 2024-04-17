import "./style.css"
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const index = () => {
  return (
    <footer>
        <div className="footer">
            <div className="footer-txt-1">Feel Free to Contact me!</div>
            <div className="footer-txt-2">
                <p className="bold">DR. SUSOVAN JANA</p>
                <p className="bold">INSTITUTE OF ENGINEERING & MANAGEMENT, KOLKATA</p>
                <p><span>@</span> jana.susovan2@gmail.com</p>
                <p><span>@</span> susovan.jana@iem.edu.in</p>
                <p className="phone"><span><FaPhone /></span>{" "} +91 9748052998</p>
                <div className="socials-footer">
                    <IoMdMail />
                    <FaLinkedin />
                    <FaGithub />
                </div>
            </div>
            <div className="footer-txt-3">
                <button className="cv">Academic CV</button>
            </div>
        </div>
        <div className="th">
            <p style={{fontSize: "1.2rem", fontWeight: "700"}}>Thank You, Visit Again</p>
            <p>Susovan Jana © 2024</p>
            <p style={{fontSize: "0.8rem", marginTop: "1rem", fontStyle: "italic"}}>Designed and Developed by Sayan Munshi</p>
        </div>
    </footer>
  )
}

export default index