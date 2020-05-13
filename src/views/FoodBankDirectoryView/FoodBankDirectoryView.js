import React, { Component } from 'react';
import './FoodBankDirectoryView.css';

class FoodBankDirectoryView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  render() {
    return (
      <div className="FoodBankDirectoryView">
        <header className="FoodBankDirectoryView-header">
          <p>Food bank directory</p>
        </header>
      </div>
    );
  }
}

export default FoodBankDirectoryView;
