import React from "react";
import './Program.css';
import { Arr } from "./Data/Programarr";

const Program = () => {

    return (
        <>
            <div className="program_div" id="program">
                <div className="program_f_div">
                    <span className="txt_bd">explore our</span>
                    <span>programs</span>
                    <span className="txt_bd">to shape you</span>
                </div>

                <div className="main_program_boxes">
                    {Arr.map((Box) => {
                        return (
                            <div className="program_boxes" key={Box.id}>
                                <span>{Box.img}</span>
                                <h3>{Box.heading}</h3>
                                <p className="program_para">{Box.text}</p>
                                <div className="jn_ar">
                                    <span className="pro_join">{Box.btn} </span>
                                    <span>{Box.arrowbtn}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default Program;