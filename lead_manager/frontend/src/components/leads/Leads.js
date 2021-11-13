import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLeads } from "../../actions/leads";

const Leads = () => {
  return (
    <div>
      <h1>add lead form lead.js</h1>
    </div>
  );
};

const mapStateToPress = (state) => ({
  leads: state.leads.leads,
});

export default connect(Leads);
