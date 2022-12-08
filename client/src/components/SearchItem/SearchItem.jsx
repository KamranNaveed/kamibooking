import "./SearchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img src="https://t-cf.bstatic.com/xdata/images/hotel/square600/330800463.webp?k=91c5dd170bb0612213798c3314fe82276ca19b8c2974c0d5876990b14fd59109&o=&s=1" alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">Tower street apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">Studio apartment with air conditiong</span>
        <span className="siFeatures">Entire studio, 1 bathroom</span>
        <span className="siCancelOp">Free Cancellation</span>
        <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
      </div>
      <div className="siDetails">
        <div className="siRatings">
            <span>Excellent</span>
            <button>8.9</button>
        </div>
        <div className="siDetailsText">
            <span className="siPrice">$123</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem
