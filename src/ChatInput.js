import React, {Component} from 'react';

class ChatInput extends Component {
    state = {
        message: ''
    }

    /*
	If the user did not type anything, he/she should not be
	allowed to submit.
	*/
	isDisabled = () => {
		return this.state.message.length === 0;
    };
    
    handleChange = (e) => {
        this.setState({message: e.target.value})
    }

        // handleSubmit = (e) => {
        //     e.preventDefault();
        //     this.props.addMessage(this.props.username, this.state.message);
        //     this.setState({message: ''})
        // }

    render() {
        return (
            <div>
                <form 
                    className="input-group" 
                    //onSubmit={this.handleSubmit}
                    onSubmit={() => this.props.addMessage(this.props.username, this.state.message)}
                >
                    <input 
                        type="text" 
                        value={this.state.message}
                        onChange={this.handleChange} 
                        className="form-control" 
                        placeholder="Enter your message..." />
                    <div className="input-group-append">
                        <button className="btn submit-button" disabled={this.isDisabled()}>
                        SEND
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ChatInput;