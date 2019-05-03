import React from 'react';

import Icon from '@material-ui/core/Icon';
import './home.css';
import Login from './Login';
const home = () => {
  return (
    <div className="main">
      <div className="image">
        <div className="leftbody">
          <Login />
        </div>
        <div className="rightbody">
          <div className="item-container">
            <h1>School Management Software</h1>
            <p>
              online school management software is a fully featured, secure web based school
              management system with great support.</p>
          </div>
        </div>

      </div>

      <div className="section2">
        <div className="set2">
          <div>
            <h2 className="one">School management software for K-12 that administrators love.</h2>
          </div>
          <div>
            <p className="large-text">An intuitive and powerful interface that requires
                    little training and ensures that work gets done quickly.</p>
          </div>
        </div>
        <div className="set21">
          <div className="mydiv">
            <div><Icon>trending_up</Icon></div>
            <div><h3>Fast implementation</h3></div>
            <div><p>Painless data migration from most platforms</p></div>
          </div>
          <div className="mydiv">
            <div><Icon>airline_seat_recline_extra</Icon></div>
            <div><h3>Easy to use</h3></div>
            <div><p>Minimal training required, even for less savvy users</p></div>
          </div>
          <div className="mydiv">
            <div><Icon>linear_scale</Icon></div>
            <div><h3>Flexible</h3></div>
            <div><p>Most aspects of MySchool are configurable to suit your needs</p></div>
          </div>
          <div className="mydiv">
            <div><Icon> smartphone</Icon></div>
            <div><h3>Great support</h3></div>
            <div><p>Friendly and professional staff who are ready to help you</p></div>
          </div>
        </div>
        <div className="functionDetail">
          <div><h2 className="one">All the tools you need.</h2></div>
          <div><p className="large-text">From students’ attendance to invoicing — everything packaged in one powerful school management system.</p></div>
          <div className="detail">
            <div className="left">
              <div className="singleComponent">
                <div className="puk"><Icon>done_all</Icon></div>
                <div><h3>Attendance</h3><p> Simple to take and easy to manage Attendence.</p></div>
              </div>
              <div className="singleComponent">
                <div><Icon>picture_as_pdf</Icon></div>
                <div><h3>Grade Reports</h3><p>Attractive, customisable student reports cards.</p></div>
              </div>
              <div className="singleComponent">
                <div><Icon>nature_people</Icon></div>
                <div><h3>Donation & Fund-raising</h3><p>Manage campaigns and collect payments online.</p></div>
              </div>
              <div className="singleComponent">
                <div><Icon>developer_board</Icon></div>
                <div><h3>Time-tables & Resource Management</h3><p>Share timetables and optimise resource usage.</p></div>
              </div>
            </div>
            <div className="right">
              <div className="singleComponent">
                <div><Icon>smartphone</Icon></div>
                <div><h3>Communication Management</h3><p>Powerful solution for email, online questionnaire.</p></div>
              </div>
              <div className="singleComponent">
                <div><Icon>format_list_numbered</Icon></div>
                <div><h3>Invoicing & Payments</h3><p>Invoicing solution build specifically for schools.</p></div>
              </div>
              <div className="singleComponent">
                <div><Icon>chrome_reader_mode</Icon></div>
                <div><h3>Homework & Assignments</h3><p>Assign and accessible to parents and students.</p></div>
              </div>
              <div className="singleComponent">
                <div><Icon>credit_card</Icon></div>
                <div><h3>Questionnaires</h3><p>Collect or confirm information from parents.</p></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default home;
