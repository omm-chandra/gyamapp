import { CgGym } from "react-icons/cg";
import { FaRunning } from "react-icons/fa";
import { FaHotjar } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import { BiRightArrowAlt } from "react-icons/bi";

const Arr = [
    {
        id:1,
        img:<CgGym className="pro_icon" />,
        heading:"strength training",
        text:"In this program, you are trained to improve your strength through many exercises and body.",
        btn:"join now",
        arrowbtn:<BiRightArrowAlt className="arrow" />
    },
    {
        id:2,
        img:<FaRunning className="pro_icon" />,
        heading:"cardio training",
        text:"In this program, you are trained to do sequential moves in range of 20 until 30 minutes.",
        btn:"join now",
        arrowbtn:<BiRightArrowAlt className="arrow" />
    },
    {
        id:3,
        img:<FaHotjar className="pro_icon" />,
        heading:"fast burning",
        text:"This program is suitable for you who wants to get rid of your fat and lose their weight.",
        btn:"join now",
        arrowbtn:<BiRightArrowAlt className="arrow" />
    },
    {
        id:4,
        img:<FaHeartbeat className="pro_icon" />,
        heading:"health fitness",
        text:"This programs is designed for those who exercises only for their body fitness not body.",
        btn:"join now ",
        arrowbtn:<BiRightArrowAlt className="arrow" />
    }
]

export {Arr};