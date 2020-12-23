import React, {useEffect} from 'react'
import PropTypes from 'prop-types'


  
function About(props) {
    useEffect(() => {
        document.title = "About Page";
    },[])

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>About Page</h1>
        </div>
    )
}

About.propTypes = {

}

export default About

