import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    boxShadow:'none',
    border:'solid 1px #dbdbdb'
  },
}));

function DashboardCards() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item lg={3} xs={12}>
          <Paper className={classes.paper}>
            <div className="dashboard-card">
            <span class="material-icons">euro</span>
              <div className="card-content">
                <div className="card-text">total contracts</div>
                <div className="card-value">607</div>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item lg={3} xs={12}>
          <Paper className={classes.paper}>
            <div className="dashboard-card">
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.6 8H10.8V10.26L12.75 11.39L12.15 12.43L9.6 10.96V8ZM1.6 0H12.8C13.68 0 14.4 0.72 14.4 1.6V6.48C15.39 7.49 16 8.87 16 10.4C16 13.49 13.49 16 10.4 16C8.87 16 7.49 15.39 6.48 14.4H1.6C0.72 14.4 0 13.68 0 12.8V1.6C0 0.72 0.72 0 1.6 0ZM1.6 10.4V12.8H5.34C5 12.07 4.8 11.26 4.8 10.4H1.6ZM1.6 4.8H6.4V2.4H1.6V4.8ZM12.8 4.8V2.4H8V4.8H12.8ZM1.6 8.8H5.03C5.3 7.88 5.81 7.06 6.48 6.4H1.6V8.8ZM10.4 6.52C8.26 6.52 6.52 8.26 6.52 10.4C6.52 12.54 8.26 14.28 10.4 14.28C12.54 14.28 14.28 12.54 14.28 10.4C14.28 8.26 12.54 6.52 10.4 6.52Z"
                    fill="#333333"
                  />
                </svg>
              </span>
              <div className="card-content">
                <div className="card-text">average length of contract</div>
                <div className="card-value">35.8 months</div>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item lg={3} xs={12}>
          <Paper className={classes.paper}>
            <div className="dashboard-card">
              <span>
                <svg
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.102 1.5L15.6327 0L14.1633 1.5L12.6939 0L11.2245 1.5L9.7551 0L8.28571 1.5L6.81632 0L5.34694 1.5L3.87755 0V14H0.938774V17C0.938774 18.66 2.25143 20 3.87755 20H15.6327C17.2588 20 18.5714 18.66 18.5714 17V0L17.102 1.5ZM16.6122 17C16.6122 17.55 16.1714 18 15.6327 18C15.0939 18 14.6531 17.55 14.6531 17V14H5.83673V3H16.6122V17Z"
                    fill="#333333"
                  />
                  <path d="M12.6939 5H6.81632V7H12.6939V5Z" fill="#333333" />
                  <path d="M15.6327 5H13.6735V7H15.6327V5Z" fill="#333333" />
                  <path d="M12.6939 8H6.81632V10H12.6939V8Z" fill="#333333" />
                  <path d="M15.6327 8H13.6735V10H15.6327V8Z" fill="#333333" />
                </svg>
              </span>
              <div className="card-content">
                <div className="card-text">No. added  (last 90 days)</div>
                <div className="card-value">
                  <span>49</span>
                </div>
              </div>
            </div>
          </Paper>
        </Grid>
       
        <Grid item lg={3} xs={12}>
          <Paper className={classes.paper}>
            <div className="dashboard-card">
              <span>
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0H2C0.9 0 0 0.9 0 2V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V6L10 0ZM10 16V14H6V16L3 13L6 10V12H10V10L13 13L10 16ZM9 7V1.5L14.5 7H9Z"
                    fill="#333333"
                  />
                </svg>
              </span>
              <div className="card-content">
                <div className="card-text">renewal percentage</div>
                <div className="card-value">
                  <span>65%</span>
                </div>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
      </React.Fragment>
  );
}

export default DashboardCards;
