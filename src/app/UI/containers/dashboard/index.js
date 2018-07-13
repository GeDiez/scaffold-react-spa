import React, { Component } from "react";
import { Subscribe } from "unstated";

import Session from "../../../stores/session";
import LayoutDashboard from '../../layouts/dashboard'

class ContainerDashboard extends Component {
  render() {
    return (
      <Subscribe to={[Session]}>
        {session => (
          <LayoutDashboard handleLogout={session.logout}>
            <div className="box is-info">
              <h1 className="is-1">Wellcome To My SPA</h1>
              <h3 className="is-2 has-text-weight-bold">Clone me on</h3>
              <div className="control">
                <div className="tags has-addons">
                  <span className="tag is-dark"><i className="fab fa-github fa-lg is-white"></i>GitHub</span>
                  <a className="tag is-danger" href="https://github.com/GeDiez/scaffold-react-spa" target="_blank">scaffold-react-spa</a>
                </div>
              </div>
            </div>
          </LayoutDashboard>
        )}
      </Subscribe>
    )
  }
}

export default ContainerDashboard;