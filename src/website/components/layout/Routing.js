import React, { Fragment,memo } from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import PropsRoute from "../../../shared/components/PropsRoute";
import classNames from "classnames";
import { withStyles } from "@material-ui/core";

import Home from "../pages/home/Home";
import About from "../pages/about/About.jsx";
import Contact from "../pages/contact/Contact.jsx";

const styles = (theme) => ({
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(9),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(6),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
    },
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important",
    },
  },
});

function Routing(props) {
  const {classes,selectHome,selectAbout,selectContact } = props;
  return (
    <Fragment>
      <div className={classNames("container-fluid", classes.container)}>
        <Switch>
          <PropsRoute exact path="/" component={Home} selectHome={selectHome} />
          <PropsRoute exact path="/about" component={About} selectAbout={selectAbout} />
          <PropsRoute exact path="/contact" component={Contact} selectContact={selectContact} />
        </Switch>
      </div>
    </Fragment>
    
  );
}

Routing.propTypes = {
  selectHome: PropTypes.func.isRequired,
  selectAbout: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(Routing));
