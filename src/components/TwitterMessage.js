import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      newMessage:''

    };
  }
  handleNewMessageChange=(event) =>{
    this.setState({
      newMessage:event.target.value
    })

  }
  

  render() {
 
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        maxLength={this.props.maxChars}
        onChange={event => this.handleNewMessageChange(event)} type="text" name="message" id="message" value={this.state.newMessage}/>
      {this.props.maxChars-this.state.newMessage.length}
      </div>
    );
  }
}

export default TwitterMessage;
