import React from 'react';
import ListItem from '../ListItem/ListItem';

function Listing(props) {
  let foodbanks = null;
  if (props.foodBanks && props.foodBanks.length) {
    foodbanks = props.foodBanks.map((foodbank, key) => {
      return (<ListItem foodbank={foodbank} key={key} />)
    });
  } else if (props.foodBanks && props.foodBanks.length === 0) {
    foodbanks = (
      <tr>
        <td colSpan="9">No foodbanks found</td>
      </tr>
    );
  } else {
    foodbanks = (
      <tr>
        <td colSpan="9">Loading...</td>
      </tr>
    );
  }

  return (
    <div className="table-responsive">
      <div>
          <table className="table align-items-center">
            <thead className="thead-light">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Website</th>
                  <th scope="col">Donation Link</th>
                  <th scope="col">Address</th>
                  <th scope="col">Delivery</th>
                  <th scope="col">Food Availability information</th>
                  <th scope="col">Other notes</th>
                </tr>
            </thead>
            <tbody className="list">
              {foodbanks}
            </tbody>
          </table>
      </div>
    </div>
  );
}

export default Listing;
