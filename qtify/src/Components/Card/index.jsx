
import "./card.css";

const Card = ({
    imgSrc,
    followersCount,
    label
})  => {
    return(
      <div className="card-wrapper">
        <div className="card">
            <div className="card-img-frame">
                <img src={imgSrc}/>
            </div>
              <div className="card-content">
                <span className="card-content-pill">
                    {followersCount} follows
                </span>
            </div>
        </div>
        <p className="card-label">{label}</p>
      </div>
    )
}

export default Card;