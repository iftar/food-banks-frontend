import React from 'react';
import ListItem from '../ListItem/ListItem';

function Listing(props) {
  return (
    <div className="table-responsive">
      <div>
          <table className="table align-items-center">
            <thead className="thead-light">
                <tr>
                  <th scope="col" className="sort" data-sort="name">Project</th>
                  <th scope="col" className="sort" data-sort="budget">Budget</th>
                  <th scope="col" className="sort" data-sort="status">Status</th>
                  <th scope="col">Users</th>
                  <th scope="col" className="sort" data-sort="completion">Completion</th>
                  <th scope="col"></th>
                </tr>
            </thead>
            <tbody className="list">
              {props.foodBanks.map((foodbank, key) => {
                return (<ListItem foodbank={foodbank} key={key} />)
              })}
            </tbody>
          </table>
      </div>
    </div>
  );
}

export default Listing;
