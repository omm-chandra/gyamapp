import React, { useState } from "react";
import logo from '../../image/logo.png'
import heart from '../../image/heart.png'
import builder from '../../image/builder.png'
import graph from '../../image/graph.png'
import { FcMenu } from "react-icons/fc";
import { Link } from "react-scroll";
import CountUp from 'react-countup';
import './Hero.css'

const Header = () => {
    const [Show,setShow]=useState(false)
    return (
        <>
            <div className="Header" id="/">
                <div className="Blur"></div>
                <div className="left_side">
                    <div className="navbar">
                        <img src={logo} alt="WEB_NAME" className="logo" />
                        <ul className= {Show?"active":"nav_ul"}>
                            <li><Link  onClick={()=>setShow(false)} to="/" span={1} smooth={1}>home</Link></li>
                            <li><Link  onClick={()=>setShow(false)} to="program" span={1} smooth={1}>programs</Link></li>
                            <li><Link  onClick={()=>setShow(false)} to="whyus" span={1} smooth={1}>whyus</Link></li>
                            <li><Link  onClick={()=>setShow(false)} to="plan" span={1} smooth={1}>plan</Link></li>
                            <li><Link  onClick={()=>setShow(false)} to="testimonial" span={1} smooth={1}>testimonial</Link></li>
                        </ul>
                        <FcMenu  className="menu_icon" onClick={()=>setShow(!Show)}/>
                    </div>

                    <div className="club_anime">
                        <div></div>
                        <span>THE BEST FITNESS CLUB IN THE TOWN</span>
                    </div>
                    <div className="two_sp"><span className="text_bd">shape</span><span className="simple"> your</span></div>
                    <div className="single_line"><span className="simple">ideal body</span></div>
                    <div className="long_para"><span>In here we will help you to shape and build your ideal body and live of your life to fullest</span></div>

                    <div className="main_num_txt_div">
                        <div className="num_txt">
                            <span className="Number"> <CountUp start={50} end={100}  prefix="+"/> </span>
                            <span className="txt">expert coches</span>
                        </div>
                        <div className="num_txt">
                            <span className="Number"><CountUp start={750} end={800}  prefix="+"/> </span>
                            <span className="txt">member joined</span>
                        </div>
                        <div className="num_txt">
                            <span className="Number"><CountUp start={0} end={50}  prefix="+"/> </span>
                            <span className="txt">fitness Program</span>
                        </div>
                    </div>

                    <div className="hero_btn">
                        <div className="bdr_btn">get started</div>                    
                        <div className="bdr_btn">Learn more</div>
                    </div>

                </div>
                <div className="right_side">
                    <div className="jnhrt_div">
                        <div className="join_div">Join Now</div>
                        <div className="Rate_div">
                            <img src={heart} alt="heart" className="heart"/>
                            <span>Heart Rate</span>
                            <span className="num_bpm"> 116 bpm</span>
                        </div>
                    </div>
                    <img src={builder} alt="builder_img" className="builder_img"/>
                    <div className="graph_div">
                        <img src={graph} alt="graph" className="graph"/>
                        <div className="calori_div">
                            <span>calories burned</span>
                            <span>220 kcal</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;