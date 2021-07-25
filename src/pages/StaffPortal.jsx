import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Components
import Nav from "../components/Nav";
import Login from "../components/Login";
import StaffMenu from "../components/StaffMenu";
import TodayBookings from "../components/TodayBookings";
import AllBookings from "../components/AllBookings";
import SignUpForm from "../components/SignUpForm";
import ManageStaff from "../components/ManageStaff";
import NotFound from "../pages/NotFound";

const StaffPortal = () => {
  return (
    <div>
      <Nav type="staff" />
      <Switch>
        <Route exact path="/staff" component={StaffMenu} />
        <Route path="/staff/today" component={TodayBookings} />
        <Route path="/staff/all" component={AllBookings} />
        <Route path="/staff/addstaff" component={SignUpForm} />
        <Route exact path="/staff/manage" component={ManageStaff} />
        <Route path="/staff/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default StaffPortal;