import React, { memo } from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import Dashboard from "../pages/dashboard/Dashboard";
import Subscription from "../pages/subscription/Subscription";
import PropsRoute from "../../../shared/components/PropsRoute";

const styles = (theme) => ({
  wrapper: {
    margin: theme.spacing(1),
    width: "auto",
    [theme.breakpoints.up("xs")]: {
      width: "97%",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(6),
      width: "98%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(6),
      width: "98%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(6),
      width: "98%",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
});

function Routing(props) {
  const {
    classes,
    selectDashboard,
    selectSubscription,
  } = props;
  return (
    <div className={classes.wrapper}>
      <Switch>
        <PropsRoute
          exact
          path="/admin/subscription"
          component={Subscription}
          selectSubscription={selectSubscription}
        />
        <PropsRoute
          component={Dashboard}
          selectDashboard={selectDashboard}
        />
      </Switch>
    </div>
  );
}

Routing.propTypes = {
  classes: PropTypes.object.isRequired,
  selectDashboard: PropTypes.func.isRequired,
  selectSubscription: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(Routing));
