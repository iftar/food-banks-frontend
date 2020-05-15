import React from 'react';
import ListItem from '../ListItem/ListItem';

function Listing(props) {
  let foodbanks = null;
  if (props.foodBanks) {
    foodbanks = props.foodBanks.map((foodbank, key) => {
      return (<ListItem foodbank={foodbank} key={key} />)
    });
  } else {
    foodbanks = (
      <tr>
        <td colSpan="6">Loading...</td>
      </tr>
    )
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
