import { HiMiniBars3 } from "react-icons/hi2";
import kanbasSmallNav from "./Navigation/kanbasSmall";
import { useState } from "react";

function ModulesNavTop() {
    const [kanbasNavShown, setKanbasNavShown] = useState(false);

    return (        
        <div className="nav-top">
            <div className="d-block d-md-none">
                <div className="nav">
                    <HiMiniBars3 className="white-icon" onClick={() => setKanbasNavShown(true)} />

                    <p>CS 4550.12631.202410 Modules</p>
                    <a href="public/Kanbas/Courses/Home/NavigationSmall.html">
                        <i className="fa-solid fa-chevron-up"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default ModulesNavTop;