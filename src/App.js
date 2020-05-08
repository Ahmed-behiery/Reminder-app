import React, { Component } from 'react';
import { add_Reminder, remove_Reminder, clear_Reminder } from "./actions";
import moment from "moment";
import { connect } from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



class App extends Component{

  state = {
    text: "",
    date: new Date()
  }

  renderReminders = () => {
    const {reminders} = this.props;
    return (
      <ul className="list-group">
          {
            reminders.map(reminder => {
              return (
                <li key={reminder.id} className="list-group-item">
                  <div>{reminder.text}</div>
                  <div>{moment(new Date(reminder.date)).fromNow()}</div>
                  <div className="btn btn-warning close" onClick={() => this.props.remove_Reminder(reminder.id)}>X</div>
                </li>
              )
            })
          }
      </ul>
    )
  }

    handleAdd = () => {
      this.props.add_Reminder(this.state.text, this.state.date)
      this.setState({ text: "", date: new Date()})
    }

  render(){


  return (
    <div className="App">
      
        <img src="reminder.png" alt="" />
        <h1>What Should U Do .. ?!</h1>

        <input 
            value={this.state.text}
            onChange={(e) => this.setState({ text: e.target.value })}
            className="form-control"
            type="text"
            placeholder="Enter What U Think ... !?" />

        {/* <input 
            value={this.state.date}
            onChange={(e) => this.setState({ date: e.target.value })}
            className="form-control"
            type="datetime-local"
            placeholde="Enter What U Think ... !?" />
 */}
        <DatePicker
              className="form-control picker"
              value={this.state.date}
              selected={this.state.date}
              onChange={date => {this.setState({date})}}
              showTimeSelect
              timeFormat="HH:mm"
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
            />

        {this.renderReminders()}


        <button
           onClick={this.handleAdd}
           className="btn btn-primary btn-block">Add Reminder</button>
        <button onClick={() => this.props.clear_Reminder()} className="btn btn-danger btn-block">Clear Reminder</button>

    </div>
  );
  }   
}


// function mapDispatchToProps (dispatch) {
//   return{
//     add_Reminder: () => dispatch(add_Reminder())
//   }
// }

function mapStateToProps (state) {
  return {
      reminders: state
  }
}

export default connect(mapStateToProps, { add_Reminder, remove_Reminder, clear_Reminder }) (App);
