import React from 'react'
import PropTypes from "prop-types";
import MySLIDER from './slider/MySLIDER'

export default function HomeSliders(props) {
    return (
        <section className="homeSlider" id='recently'>
            <h1>{props.heading}</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
                inventore alias nemo optio et officia velit natus ipsa consequatur
                saepe. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
                ipsam inventore magni repudiandae deserunt, quod numquam eum odio rerum
                nulla.
            </p>
            <div className='mainSlider'>
                <MySLIDER />
            </div>

        </section>
    )
}
HomeSliders.propType = {
    heading: PropTypes.string
  };