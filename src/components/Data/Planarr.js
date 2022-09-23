import { RiHeartAddLine } from "react-icons/ri";
import { BsCheck2Circle } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaCrown } from "react-icons/fa";
import { CgGym } from "react-icons/cg";



const Planarr = [
    {
        id:1,
        mainicon:<RiHeartAddLine className="planmain_icon"/>,
        heading:"basic plan",
        price:"$25",
        tick:<BsCheck2Circle/>,
        textone:"2 hours of excercises",
        texttwo:"Free consulation coaches",
        textthree:"Access to the Community",
        text:"See more benifits",
        arrowicon:<BiRightArrowAlt className="arrow"/>,
        join:"Join Now"
    },
    {
        id:2,
        mainicon:<FaCrown className="planmain_icon"/>,
        heading:"premium plan",
        price:"$30",
        tick:<BsCheck2Circle/>,
        textone:"5 hours of excercises",
        texttwo:"Free consulation coaches",
        textthree:"Access to the Community",
        text:"See more benifits",
        arrowicon:<BiRightArrowAlt className="arrow"/>,
        join:"Join Now"
    },
    {
        id:3,
        mainicon:<CgGym className="planmain_icon"/>,
        heading:"pro plan",
        price:"$45",
        tick:<BsCheck2Circle/>,
        textone:"8 hours of excercises",
        texttwo:"Consulation of Private Coach",
        textthree:"Free Fitness Merchandieses",
        text:"See more benifits",
        arrowicon:<BiRightArrowAlt className="arrow"/>,
        join:"Join Now"
    }
]

export {Planarr};