import axios from 'axios';
import csvtojson from 'csvtojson';
import StorageService from './StorageService';
import {FOODBANK_CSV_URL} from '../utils/constants';

class FoodBankService {
  constructor() {
    this.storageService = new StorageService();
  }

  all() {
    return this.getData();
  }

  async getData() {
    let csv = await this.getCSV();
    if (!csv) return [];
    let data = await this.transformCsvToJson(csv.data);
    return this.filterOnlyApproved(data);
  }

  async getCSV() {
    if (!FOODBANK_CSV_URL) return false;
    try {
      return await axios.get(`${FOODBANK_CSV_URL}`);
    } catch (error) {
      return error.response;
    }
  }

  async transformCsvToJson(csv) {
    return await csvtojson().fromString(csv);
  }

  filterOnlyApproved(data) {
    return data.filter(foodbank => foodbank["Approved"] === "TRUE");
  }
}

export default FoodBankService;
