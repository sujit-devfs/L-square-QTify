import Tooltip from '@mui/material/Tooltip';
import "./card.css";

const Card = ({
    imgSrc,
    followersCount,
    label,
    songCount
})  => {
    return(
    <Tooltip title={`${songCount} songs`} arrow placement="top">
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
    </Tooltip> 
    )
}

export default Card;