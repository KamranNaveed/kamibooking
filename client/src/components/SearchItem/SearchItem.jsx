import { Link } from "react-router-dom"
import "./SearchItem.css"

const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt=""/>
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">Studio apartment with air conditiong</span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Free Cancellation</span>
        <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRatings">
            <span>Excellent</span>
            <button>{item.rating}</button>
        </div>}
        <div className="siDetailsText">
            <span className="siPrice">{item.cheapestRoom}</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <Link to = {`/hotels/${item._id}`}>
              <button className="siCheckButton">See availability</button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default SearchItem
