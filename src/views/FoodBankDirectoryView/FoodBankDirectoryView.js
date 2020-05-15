import React, { Component } from 'react';
import './FoodBankDirectoryView.css';
import Navbar from '../../components/Navbar/Navbar';
import Listing from '../../components/Listing/Listing';

class FoodBankDirectoryView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodBanks: [0,3,3]
    }
  }

  render() {
    return (
      <div className="FoodBankDirectoryView">
        <header className="FoodBankDirectoryView-header">
          <Navbar/>
        </header>
        <div className="container">
          <Listing foodBanks={this.state.foodBanks} />
        </div>
      </div>
    );
  }
}

export default FoodBankDirectoryView;
