import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles, Typography } from "@material-ui/core";

const styles = {
  divider: {
    backgroundColor: "rgba(0, 0, 0, 0.26)"
  }
};

function Subscription(props) {
  const {
    classes,
    selectSubscription
  } = props;

  useEffect(selectSubscription, [selectSubscription]);

  return (
    <Fragment>
      <Typography variant="subtitle1" align="center">
      Subscription Dashbord
      </Typography>
    </Fragment>
  );
}

Subscription.propTypes = {
  classes: PropTypes.object.isRequired,
  selectSubscription: PropTypes.func.isRequired,
};

export default withStyles(styles)(Subscription);
