import React from "react";
import './Plan.css';
import {Planarr} from "./Data/Planarr";

const Plan = () => {
    return (
        <>
            <div className="main_plan_div" id="plan">
                <div className="program_f_div">
                    <span className="txt_bd">ready to start</span>
                    <span>your journey</span>
                    <span className="txt_bd">now withus</span>
                </div>
                <div className="plan_flex">
                    {
                        Planarr.map((Box)=>{
                            return(
                                <div className="plan_box" key={Box.id}>
                                <div className="under_planbox">
                                    <div>{Box.mainicon}</div>
                                    <h5>{Box.heading}</h5>
                                    <h1>{Box.price}</h1>
                                    <div className="three_line">
                                        <div className="div_line">{Box.tick}<h4>{Box.textone}</h4></div>
                                        <div className="div_line">{Box.tick}<h4>{Box.texttwo}</h4></div>
                                        <div className="div_line">{Box.tick}<h4>{Box.textthree}</h4></div>
                                    </div>
                                    <div className="text_arrow">
                                        <h5>{Box.text}</h5><span>{Box.arrowicon}</span>
                                    </div>
                                    <div className="Join_plan">
                                        {Box.join}
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Plan;