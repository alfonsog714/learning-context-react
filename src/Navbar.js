import React, { Component } from "react";
import styles from "./styles/NavBarStyles";

// Material UI stuff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";

// Context
import { ThemeContext } from "./contexts/ThemeContext.js";
import { withLanguageContext } from "./contexts/LanguageContext.js";

const content = {
  english: {
    search: "Search",
    flag: "US"
  },

  spanish: {
    search: "Buscar",
    flag: "ES"
  }
};

class Navbar extends Component {
  static contextType = ThemeContext; // Tells the component to look up and see if they're inside of a ThemeContext provider.

  render() {
    const { classes } = this.props;
    const { isDarkMode, toggleTheme } = this.context;
    const { language } = this.prop.languageContext;
    const { search, flag } = content[language];

    return (
      <div className={classes.root}>
        <AppBar position="static" color={isDarkMode ? "default" : "primary"}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit">
              <span>US</span>
            </IconButton>
            <Typography className={classes.title} color="inherit">
              App Title
            </Typography>
            <Switch onChange={toggleTheme} />
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withLanguageContext(withStyles(styles)(Navbar));
