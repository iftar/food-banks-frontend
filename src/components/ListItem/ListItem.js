import React from 'react';

function ListItem(props) {
  let foodbank = {
    logo: props.foodbank["Centre Logo link"],
    name: props.foodbank["Name of centre"],
    email: props.foodbank["Centre Contact Email"],
    phone: props.foodbank["Phone number"],
    website: props.foodbank["Website"],
    donation_link: props.foodbank["Donation link"],
    address: {
      line1:    props.foodbank["Address line 1"],
      line2:    props.foodbank["Address line 2"],
      city:     props.foodbank["City / Town"],
      county:   props.foodbank["County"],
      postcode: props.foodbank["Post code"]
    },
    delivery: props.foodbank["Do you offer delivery?"],
    foodAvailability: props.foodbank["What times are food available?"].split('\n'),
    notes: props.foodbank["Notes for public"],
  };

  return (
    <tr>
      <th scope="row">
        <div className="media align-items-center">
          <a href={foodbank.website} className="avatar rounded-circle mr-3" target="_blank">
            <img alt="food bank logo" src={foodbank.logo} />
          </a>
          <div className="media-body">
            <span className="name mb-0 text-sm">{foodbank.name}</span>
          </div>
        </div>
      </th>
      <td><a href={`mailto:${foodbank.email}`}>{foodbank.email}</a></td>
      <td><a href={`tel:${foodbank.phone}`}>{foodbank.phone}</a></td>
      <td><a href={foodbank.website}>{foodbank.website}</a></td>
      <td><a href={foodbank.donation_link}>Donate</a></td>
      <td>
        <address>
          {foodbank.address.line1}<br/>
          {foodbank.address.line2}<br/>
          {foodbank.address.city}<br/>
          {foodbank.address.county}<br/>
          {foodbank.address.postcode}
        </address>
      </td>
      <td>{foodbank.delivery}</td>
      <td>
        {foodbank.foodAvailability.map( (line, key) => {
          return (<div key={key}>{line}</div>);
        })}
      </td>
      <td>{foodbank.notes}</td>
    </tr>
  );
}

export default ListItem;
