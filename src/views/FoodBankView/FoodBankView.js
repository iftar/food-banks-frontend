import React, { Component } from 'react';
import './FoodBankView.css';

class FoodBankView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.foodBankId
    }
  }

  render() {
    return (
      <div className="FoodBankView">
        <header className="FoodBankView-header">
          <p>Food bank: {this.state.id}</p>
        </header>
      </div>
    );
  }
}

export default FoodBankView;
