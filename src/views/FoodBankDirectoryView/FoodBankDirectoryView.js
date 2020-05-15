import React, { Component } from 'react';
import './FoodBankDirectoryView.css';
import Navbar from '../../components/Navbar/Navbar';
import Listing from '../../components/Listing/Listing';
import FoodBankService from '../../services/FoodBankService';

class FoodBankDirectoryView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodBanks: null
    }
  }

  async componentDidMount() {
    let foodBanks = await this.getFoodBanks();
    this.setState(() => ({
      foodBanks: foodBanks
    }));
  }

  async getFoodBanks() {
    let foodBankService = new FoodBankService();
    return await foodBankService.all();
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
