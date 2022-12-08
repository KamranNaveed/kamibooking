import "./featured.css"

const Featured = () => {
  return (
    <div>
      <div className="featured">
        <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/city/square250/349720.webp?k=b7eca2cb90afd858f294732b0d5c194af47e70386b5be99373e3ff03be95c515&o=" alt="Las Vegas" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Las Vegas</h1>
                <h2>5462 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/city/square250/856691.webp?k=9cf21942b6aa8706b8721525de6a06b55e8980139ee21f53593982a8e988a55a&o=" alt="New York City" className="featuredImg" />
            <div className="featuredTitle">
                <h1>New York City</h1>
                <h2>5462 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/city/square250/620103.webp?k=c07eb50383bfb4bedd11308fb59876bff7ef522dc379f4d96a48812cecaf45eb&o=" alt="Orlando" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Orlando</h1>
                <h2>5462 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/city/square250/689603.webp?k=59e9972a1882387f6a8f35f6f2193c7f4e5203723651307392170ce756247bb7&o=" alt="Miami Beach" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Miami Beach</h1>
                <h2>5462 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/city/square250/690242.webp?k=d237489ebaacd4fce01bee28f2947d5b8e4e062f62a47f1b3f771473dae96fb9&o=" alt="Gatlinburg" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Gatlinburg</h1>
                <h2>5462 properties</h2>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
