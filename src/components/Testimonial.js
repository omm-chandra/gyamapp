import React , {useState} from "react";
import { TestimonialData } from "./Data/Testimonialarr";
import './Testimonial.css';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

const Testimonial = () => {
    const [selected,setSelected]=useState(0)
    const tlength = TestimonialData.length;
    return (
        <>
            <div className="testimonial">
                <div className="testimonial_left">
                    <p>testimonial</p>
                    <span className="txt_bd">WHAT THEY</span>
                    <p className="bold">SAY ABOUT US</p>

                    <p className="para_text">{TestimonialData[selected].text}</p>

                    <div className="name_sts">
                        <span>{TestimonialData[selected].Name}</span><span> - {TestimonialData[selected].Status}</span>
                    </div>
                </div>
                <div className="testimonial_right">
                    <div className="r_flex">
                        <div>
                            <BsFillArrowLeftCircleFill className="testi_icons" onClick={()=>{selected === 0 ? setSelected(tlength - 1) : setSelected((preValue)=>preValue - 1) }}/>
                            <BsFillArrowRightCircleFill className="testi_icons" onClick={()=>{selected === tlength - 1 ? setSelected(0) : setSelected((preValue)=>preValue + 1) }}/>
                        </div>
                        <div>
                            <div className="bd"></div>
                            <img src={TestimonialData[selected].image} alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial;