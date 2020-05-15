import axios from 'axios';
import StorageService from './StorageService';
import {FOODBANK_CSV_URL} from '../utils/constants';

class FoodBankService {
  constructor() {
    this.storageService = new StorageService();
  }

  all() {
    return Promise.resolve([1,2,3,4]);
  }
  
}

export default FoodBankService;
