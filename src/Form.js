import React, { Component } from "react";

// Material ui stuff
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles/FormStyles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

class Form extends Component {
  render() {
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <h1>FORM!</h1>
      </main>
    );
  }
}

export default withStyles(styles)(Form);
