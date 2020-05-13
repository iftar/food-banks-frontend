import React, { Component } from 'react';
import './FoodBankDirectoryView.css';
import Navbar from '../../components/Navbar/Navbar';

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
          <Navbar/>
        </header>
      </div>
    );
  }
}

export default FoodBankDirectoryView;
