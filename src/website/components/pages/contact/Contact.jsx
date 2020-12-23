import React,{useEffect} from 'react'
import PropTypes from 'prop-types'

function Contact(props) {
    useEffect(() => {
        document.title = "Contact Page"
    },[])
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Contact Us Page</h1>
        </div>
    )
}

Contact.propTypes = {

}

export default Contact

