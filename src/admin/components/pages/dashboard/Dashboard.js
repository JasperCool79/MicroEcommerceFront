import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

function Dashboard(props) {
  const {
    selectDashboard,
  } = props;

  useEffect(selectDashboard, [selectDashboard]);

  return (
    <Fragment>
        <Typography variant="subtitle1" align="center">
          Admin Dashbord
        </Typography>
    </Fragment>
  );
}

Dashboard.propTypes = {
  selectDashboard: PropTypes.func.isRequired,
};

export default Dashboard;
