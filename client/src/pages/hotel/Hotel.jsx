import { faLocationDot, faCircleXmark, faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import MailList from "../../components/MailList/MailList";
import Footer from "../../components/Footer/Footer";
import "./Hotel.css"
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

const Hotel = () => {

    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const [slideIndex, setSlideIndex] = useState(0)
    const [openSlider, setOpenSlider] = useState(false)
    const {data, loading, error, reFetch} = useFetch(`/hotels/find/${id}`)

    const {dates, options} = useContext(SearchContext)

    const MILLISECONDS_PER_DAY = 1000*60*60*24
    const dayDifference = (date1, date2) => {
        const timeDiff = Math.abs(date2?.getTime()-date1?.getTime())
        const diffDays = Math.ceil(timeDiff/MILLISECONDS_PER_DAY)
        return diffDays
    }
   
    const days = dayDifference(dates[0].endDate, dates[0].startDate)

    const handleOpen = (i) => {
        setSlideIndex(i);
        setOpenSlider(true)
    }

    const handleMove = (direction) => {
        let newSlideIndex;

        if(direction==='l'){
            newSlideIndex = slideIndex === 0 ? 5 : slideIndex-1
        } else {
            newSlideIndex = slideIndex === 5 ? 0 : slideIndex+1
        }
        setSlideIndex(newSlideIndex)
    }

    return(
        <div>
            <Navbar/>
            <Header type = "list"/>
            {loading ? "loading ": <div className="hotelContainer">
                {openSlider && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpenSlider(false)}/>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
                    <div className="sliderWrapper">
                        <img src={data.photos[slideIndex]} alt="" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
                </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotelTitle">{data.name}</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>{data.address}</span>
                    </div>
                    <span className="hotelDistance">Excellent location ${data.distance} m from centre</span>
                    <span className="hotelPriceHighlight">Book a stay over ${data.cheapestRoom} at this property and get a free airport taxi</span>
                    <div className="hotelImages">
                        {data.photos?.map((photo, i) => {
                            return <div className="hotelImgWrapper">
                                <img onClick={()=>handleOpen(i)} src={photo} alt="" className="hotelImg" />
                            </div>
                        })}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsText">
                            <h1 className="hotelTitle">Stay in the heart of {data.city} </h1>
                            <p className="hotelDesc">{data.description}</p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a {days}-night stay</h1>
                            <span>Located in the real heart of {data.city}</span>
                            <h2>
                                <b>${days*data.cheapestRoom*options.room}</b> ({days} nights)
                            </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList/>
                <Footer/>
            </div>}
        </div>
    )
}

export default Hotel;