import React from 'react';

const Guest =(props) => {
  return (
   <div className="guest">
   <p>{props.guest.firstname} {props.lastname}</p>
   <p>{props.guest.addressline1}</p>
   <p>{props.guest.town}</p>
   <p>{props.guest.postcode}</p>
   <p>{props.guest.email}</p>
   <p>{props.guest.phone}</p>
   <button onClick = { () => { if (window.confirm('Are you sure you wish to delete this item?')) props.handleDeleteGuest(props.id)  } }>Remove</button>
</div>
  )
}
export default Guest;
