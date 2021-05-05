"use strict";
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ReactGoogleMap from "react-google-map";
import ReactGoogleMapLoader from "react-google-maps-loader";
import iconMarker from "../../../../assets/images/iconMarker.svg";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: theme.palette.background.paper
    },
    removebg: {
        background: "#ffffff"
    },
    formControl: {
        margin: theme.spacing.unit,
        marginLeft: 0,
        marginRight: 0,
        width: "100%"
    },
    checkbox: { display: "flex", width: "100%" },
    button: {
        "&:hover": {
            backgroundColor: "transparent"
        }
    }
});

class SearchMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            labelWidth: 0,
            show: false,
            checkedA: true,
            checkedB: true,
            checkedC: true,
            checkedD: true,
            showdiv: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(state => ({
            show: true
        }));
    }
    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };
    handleClickReset() {
        this.setState(state => ({ show: !state.show }));
    }

    handleRadio1 = event => {
        this.setState({ value: event.target.value });
    };

    handleRadio3 = event => {
        this.setState({ value: event.target.value });
    };
    handleShowClick = () => {
        this.setState({ showdiv: true });
    };
    handleHideClick = () => {
        this.setState({ showdiv: false });
    };
    render() {
        const { classes } = this.props;

        return (
            <div className="rows w-100">
                <div class="stepone w-100">
                    <div className="accountarea requestree toporderbrdr">
                        <div class="grouppay removespacebottom">
                            <div className="GoogleSearchField gPadding" id="pac-container">
                                <TextField
                                    Underline={false}
                                    onKeyPress={this.handleClick}
                                    id="pac-input"
                                    className={classes.formControl}
                                    label="Enter street address"
                                    margin="normal"
                                    variant="filled"
                                    InputProps={{
                                        disableUnderline: true,
                                        endAdornment: (
                                            <InputAdornment
                                                position="end"
                                                className="EndornmentSearchIcon"
                                            >
                                                <i className="material-icons endornmentsearch">
                                                    search
                        </i>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </div>
                            {this.state.show && (
                                <React.Fragment>
                                    <div id="map" className="MapSearch">
                                        <ReactGoogleMapLoader
                                            params={{
                                                key: "AIzaSyBXRvXlLLX2cWsQ93qfokpIUuvs8RjlhYo",
                                                libraries: "places"
                                            }}
                                            render={googleMaps =>
                                                googleMaps && (
                                                    <div
                                                        style={{
                                                            height: "100%",
                                                            width: "100%",
                                                            position: "relative"
                                                        }}
                                                    >

                                                        <ReactGoogleMap
                                                            googleMaps={googleMaps}
                                                            center={{ lat: -33.8688, lng: 151.2195 }}
                                                            zoom={10}
                                                            mapTypeId={"roadmap"}
                                                            coordinates={[
                                                                {
                                                                    icon: iconMarker,
                                                                    position: {},
                                                                    onLoaded: (googleMaps, map) => {
                                                                        const card = document.getElementById(
                                                                            "pac-card"
                                                                        );
                                                                        const input = document.getElementById(
                                                                            "pac-input"
                                                                        );
                                                                        map.controls[
                                                                            googleMaps.ControlPosition.TOP_RIGHT
                                                                        ].push(card);
                                                                        const autocomplete = new googleMaps.places.Autocomplete(
                                                                            input
                                                                        );
                                                                        autocomplete.bindTo("bounds", map);

                                                                        // Set the data fields to return when the user selects a place.
                                                                        autocomplete.setFields([
                                                                            "address_components",
                                                                            "geometry",
                                                                            "icon",
                                                                            "name"
                                                                        ]);
                                                                        const infowindow = new googleMaps.InfoWindow();
                                                                        const infowindowContent = document.getElementById(
                                                                            "infowindow-content"
                                                                        );
                                                                        infowindow.setContent(infowindowContent);
                                                                        const marker = new googleMaps.Marker({
                                                                            map: map,
                                                                            anchorPoint: new googleMaps.Point(0, -29)
                                                                        });

                                                                        autocomplete.addListener(
                                                                            "place_changed",
                                                                            () => {
                                                                                infowindow.close();
                                                                                marker.setVisible(false);
                                                                                const place = autocomplete.getPlace();
                                                                                if (!place.geometry) {
                                                                                    window.alert(
                                                                                        `No details available for input: '${place.name
                                                                                        }'`
                                                                                    );
                                                                                    return;
                                                                                }
                                                                                // If the place has a geometry, then present it on a map.
                                                                                if (place.geometry.viewport) {
                                                                                    map.fitBounds(
                                                                                        place.geometry.viewport
                                                                                    );
                                                                                } else {
                                                                                    map.setCenter(
                                                                                        place.geometry.location
                                                                                    );
                                                                                    map.setZoom(17);
                                                                                }
                                                                                marker.setPosition(
                                                                                    place.geometry.location
                                                                                );
                                                                                marker.setVisible(true);

                                                                                let address = "";
                                                                                if (place.address_components) {
                                                                                    address = [
                                                                                        (place.address_components[0] &&
                                                                                            place.address_components[0]
                                                                                                .short_name) ||
                                                                                        "",
                                                                                        (place.address_components[1] &&
                                                                                            place.address_components[1]
                                                                                                .short_name) ||
                                                                                        "",
                                                                                        (place.address_components[2] &&
                                                                                            place.address_components[2]
                                                                                                .short_name) ||
                                                                                        ""
                                                                                    ].join(" ");
                                                                                }

                                                                                infowindowContent.children[
                                                                                    "place-icon"
                                                                                ].src = place.icon;
                                                                                infowindowContent.children[
                                                                                    "place-name"
                                                                                ].textContent = place.name;
                                                                                infowindowContent.children[
                                                                                    "place-address"
                                                                                ].textContent = address;
                                                                                infowindow.open(map, marker);
                                                                            }
                                                                        );
                                                                    }
                                                                }
                                                            ]}
                                                        />
                                                    </div>
                                                )
                                            }
                                        />

                                        <div className="cusLookup">
                                            <span className="material-icons">place</span>
                                            <div>
                                                <label>
                                                    1234 Doe Street Utility, CO 12345
                                                            </label>
                                                <small>1 Electric Meter </small>
                                                <small>1 Gas Meter </small>
                                            </div>

                                        </div>
                                    </div>

                                </React.Fragment>
                            )}
                            <div className="PingArea">
                                <Button
                                    color="primary"
                                    className={classes.button}
                                    onClick={this.handleClickReset.bind(this)}
                                >
                                    Not the right address? Try again{" "}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
Map.propTypes = {
    googleMaps: PropTypes.object.isRequired
};

SearchMap.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchMap);
