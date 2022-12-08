import { faLocationDot, faCircleXmark, faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import MailList from "../../components/MailList/MailList";
import Footer from "../../components/Footer/Footer";
import "./Hotel.css"
import { useState } from "react";

const Hotel = () => {

    const [slideIndex, setSlideIndex] = useState(0)
    const [openSlider, setOpenSlider] = useState(false)

    const photos = [
        {
            src : "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/330800463.jpg?k=85d26772ca04588f7be34b5cd5cabf05bf1c109ff564b995da15ae71f24a8d21&o=&hp=1"
        }, 
        {
            src : "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/295710118.jpg?k=f77ae4a6bc9e5581a217a6278ab16e0840602dac2a0234e4aa16d6e92f13f078&o=&hp=1"
        }, 
        {
            src : "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/269548869.jpg?k=de68f580fa5b19dc94ec78372e026087ba14cf13a014a3d62ae30ff7d2e02486&o=&hp=1"
        }, 
        {
            src : "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/193379383.jpg?k=b60a8e4d0f2c0e11042eb4a65794d541665401d4775ec494128a706bf785013b&o=&hp=1"
        }, 
        {
            src : "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/193380001.jpg?k=d96ab2b5815805150699a3d85b4a6925fbfe6de7eb4f3a9feda9c03371dfea8f&o=&hp=1"
        }, 
        {
            src : "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/193380020.jpg?k=b469c878392420256402c3d5b485c9176a2a0bd2f11cd656c0c2da858feb6dcc&o=&hp=1"
        } 
    ]

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
            <div className="hotelContainer">
                {openSlider && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpenSlider(false)}/>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
                    <div className="sliderWrapper">
                        <img src={photos[slideIndex].src} alt="" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
                </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>Elton 125 STreet</span>
                    </div>
                    <span className="hotelDistance">Excellent location 500 m from centre</span>
                    <span className="hotelPriceHighlight">Book a stay over $114 at this property and get a free airport taxi</span>
                    <div className="hotelImages">
                        {photos.map((photo, i) => {
                            return <div className="hotelImgWrapper">
                                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
                            </div>
                        })}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsText">
                            <h1 className="hotelTitle">Stay in the heart of Las Vegas </h1>
                            <p className="hotelDesc">Located next to the 20,000 seat T-Mobile Arena, Park MGM Las Vegas is located on the Las Vegas Strip and features a casino and its own theater, Dolby Live at Park MGM, a 5,200 seat arena that hosts top musical artists from around the world. This contemporary resort offers 3 pools complete with poolside cabanas. Guest rooms include an LED TV with premium cable service.

Each spacious room at Park MGM Las Vegas includes an in-room safe, blackout shades, an over-sized vanity and bedside outlets for phones and computers. Private bathrooms include a hairdryer.</p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-night stay</h1>
                            <span>Located in the real heart of Las Vegas</span>
                            <h2>
                                <b>$945</b> (9 nights)
                            </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList/>
                <Footer/>
            </div>
        </div>
    )
}

export default Hotel;