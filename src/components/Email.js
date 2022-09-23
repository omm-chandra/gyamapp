import React from "react";
import './Email.css'

const Email = () => {
    return (
        <>
            <div className="Email_div">
                <div className="Left_Email">
                    <div className="g_flex">
                        <div>
                            <div className="after"></div>
                            <span className="txt_bd" >ready to</span>
                        </div>
                        <span className="bold"> level up</span>
                    </div>
                    <div>
                        <span className="bold">your body</span>
                        <span className="txt_bd" > with us?</span>
                    </div>
                </div>
                <div className="Right_email">
                    <div>
                        <h5>Enter your Email Address here</h5>
                        <div className="email_btn"><span>Join now</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Email;