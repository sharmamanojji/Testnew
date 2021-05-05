import React from "react";
import { Container, Row, Col } from "reactstrap";
import ManageUsersTable from "./ManageUsersTable";
import "./ManageUsers.scss";
import PageHeader from "../Common/pageHeader";

function ManageUsers() {
  return (
    <React.Fragment>
      <PageHeader headerName="Manage Users" />
      <Container>
        <ManageUsersTable />
      </Container>
    </React.Fragment>
  );
}

export default ManageUsers;
