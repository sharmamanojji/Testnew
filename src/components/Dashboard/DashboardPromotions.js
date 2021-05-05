import React from "react";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

function DashboardPromotions() {
  const preventDefault = (event) => event.preventDefault();

  return (
    <React.Fragment>
      <h1 className="dashboard-heading">promotions</h1>
      <div className="dashboardPromotion">
        <div className="d-flex">
          <span class="material-icons">euro</span>
          <div>
            <h3>promotion 1</h3>
            <p>
              Vehicula amet aliquam curae faucibus tempor sem ultrices, mus
              ridiculus aliquet metus nascetur rutrum, cubilia augue.
            </p>
          </div>
        </div>
        <Link href="#" onClick={preventDefault}>
          Read More
        </Link>
      </div>
      <div className="dashboardPromotion">
        <div className="d-flex">
          <span class="material-icons">euro</span>
          <div>
            <h3>promotion 1</h3>
            <p>
              Vehicula amet aliquam curae faucibus tempor sem ultrices, mus
              ridiculus aliquet metus nascetur rutrum, cubilia augue.
            </p>
          </div>
        </div>
        <Link href="#" onClick={preventDefault}>
          Read More
        </Link>
      </div>
    </React.Fragment>
  );
}

export default DashboardPromotions;
