import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";



function Home(props) {
  const {selectHome } = props;
  useEffect(() => {
    document.title = "Mini-Ecommece Home Page";
    selectHome();
  }, [selectHome]);
  return (
    <Fragment>
        <h1 style={{textAlign: 'center'}}>Home Page</h1>
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired
};
export default Home;
