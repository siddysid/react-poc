import React, {Component} from "react";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TicketBoard from '../TicketBoard/TicketBoard'


class Tickets extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [{}],
      };
    }
    componentDidMount() {
      console.log("ssaa");
      fetch('http://localhost:8888/drupal-8/get/all/tickets')
        .then(response => response.json())
        .then(data => this.setState({ data }));
    console.log("ss");
    }

    render() {
        return (
          <TicketBoard tickets={this.state.data} />
        )
      }

  }
  export default Tickets;
