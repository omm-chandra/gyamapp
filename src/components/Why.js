import React from "react";
import "./Why.css"
import one from '../image/Body-one.jpg'
import two from '../image/Body-two.jpg'
import three from '../image/Body-three.jpg'
import { BsCheck2Circle } from "react-icons/bs";
import { SiJordan, SiNike, SiAdidas, SiPuma } from "react-icons/si";


const Whyus = () => {
    return (
        <>
            <div className="main_whyus_div" id="whyus">

                <div className="img_whyus">

                    <div className="left_whyus">
                        <img src={one} alt="gym_img" className="one" />
                        <img src={two} alt="gym_img" className="two" />
                    </div>

                    <div className="right_whyus">
                        <img src={three} alt="gym_img" className="three" />
                    </div>

                </div>

                <div className="text_whyus">
                    <h5>some reasons</h5>
                    <div className="text-head">
                        <span className="txt_bd">WHY </span>
                        <span className="bold"> CHOOSE US?</span>
                    </div>
                    <div className="for_sec">
                        <div className="tick_text"><BsCheck2Circle className="right_icon" /><h5>over 140+ expert coachs</h5></div>
                        <div className="tick_text"><BsCheck2Circle className="right_icon" /><h5>train smarter and faster than before</h5></div>
                        <div className="tick_text"><BsCheck2Circle className="right_icon" /><h5>1 free program for new member</h5></div>
                        <div className="tick_text"><BsCheck2Circle className="right_icon" /><h5>reliable partners</h5></div>
                    </div>
                    <p className="our_text">our partners</p>

                    <div className="icons">
                        <SiJordan className="sports_icon" />
                        <SiNike className="sports_icon" />
                        <SiAdidas className="sports_icon" />
                        <SiPuma className="sports_icon" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Whyus;