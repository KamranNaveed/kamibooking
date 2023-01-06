import React from 'react'
import useFetch from '../../hooks/useFetch'
import "./FeaturedProperties.css"

const FeaturedProperties = () => {
    const {data, loading, error, reFetch} = useFetch("/hotels?featured=true&limit=4")
  return (
    <div className="fp">
        {loading ? "Loading" : 
        <>
        {
            data.map((item,i)=>(
            <div className="fpItem" key = {i}>
                <img src={item.photos[0]} alt="" className="fpImg" width="300px" height="150px" />
                <span className="fpName">{item.name}</span>
                <span className="fpCity">{item.city}</span>
                <span className="fpPrice">{item.cheapestRoom}</span>
                {item.rating && <div className="fpRating">
                    <button className="fpRatingBtn">{item.rating}</button>
                    <span className="fpRatingText">{item.rating > 5 ? "Excellent": "Fair"}</span>
                </div>}
            </div>
            ))
        }
        </>}
    </div>
  )
}

export default FeaturedProperties
