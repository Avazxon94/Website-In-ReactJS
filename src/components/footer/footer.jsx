import React from "react";
import "./footer.css";
import Vk from "../../images/Vector.png";

export default function footer() {
    return(
        <div className="footer">
            <div className="footer-in">
                <div className="copyright">© iLINK ACADEMY. ALL RIGHTS RESERVED. 2022</div>
                <div className="social-network">
                    <a href="https://vk.com" target ="_blank"><img src={Vk} alt="" /></a>
                    <a href="telegram.org" target ="_blank"><img src={Vk} alt="" /></a>
                    <a href="#" target ="_blank"><img src={Vk} alt="" /></a>
                </div>
            </div>
        </div> 
    )
}