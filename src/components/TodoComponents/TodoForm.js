import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      RoutineText: ''
    };
  }

  handleChanges = e => {
    
    this.setState({
        RoutineText: e.target.value
    });
  };


  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.RoutineText);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        
        <input
          type="text"
          name="item"
          value={this.state.RoutineText}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;