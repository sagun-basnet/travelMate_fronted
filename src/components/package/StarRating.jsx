import React, { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { AiFillStar } from "react-icons/ai";

function StarRating({count, rating, color, onRating}) {
    const [hoverRating, setHoverRating] = useState(0);
    const getColor = index =>{
        if(hoverRating >= index){
            return color.filled;
        }else if(!hoverRating && rating >= index){
            return color.filled
        }
        return color.unfilled
    }
    
    const stars = useMemo(() =>{
        return Array(count)
        .fill(0)
        .map((_, i) => i + 1)
        .map( (idx) => (
            <AiFillStar
                key={idx}
                className='cursor-pointer'
                // icon="star"
                onClick={() => onRating(idx)}
                style={{color: getColor(idx), fontSize: "2rem", cursor:"pointer"}}
                onMouseEnter={() => setHoverRating(idx)}
                onMouseLeave={() => setHoverRating(0)}
            />
        ))
    }, [count, rating, hoverRating])
    // console.log(rating);
  return (
    <div>
      {stars}
    </div>
  )
}

StarRating.propTypes = {
    count: PropTypes.number,
    rating: PropTypes.number,
    onChange: PropTypes.func,
    color: PropTypes.shape({
        filled: PropTypes.string,
        unfilled: PropTypes.string,
    }),
}

StarRating.defaultProps = {
    count: 5,
    rating: 0,
    color: {
        filled: "gold",
        unfilled: "#fff",
    }
}

export default StarRating


