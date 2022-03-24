import "./Topbar.css";
import Author from '../../images/author.jpg'

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#"><img src={Author} alt="" className="my-img" /></a>
                    <a href="#">Авазхон Акрамов</a>
                </div>
                <div className="logo-wrap">
                    <div className="logo"><a href="#">ilink</a></div>
                    <div className="sub-logo"><a href="#">academy</a></div>
                </div>    
                <div className="right"><button className="sign-up">Панель управления</button></div>
            </div>
        </div>
    )
}