import React,{Component} from 'react'
import {useLocation} from 'react-router-dom';
import './style.css'
function  printReceipt() {
    window.print();
  }
const Payment = ()=> {
  var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
    // console.log(props);
    const location = useLocation();
    console.log(location.state);
    console.log(location.state.hotelId);  
    const data = location.state;
    
      console.log(data);
      const start = data.dates[0].startDate;
      console.log(start);
 return (    
  <div>
 <div class="receipt">

 <h2 class="name"> TripKart </h2>

 <p class="greeting"> Thank you for Booking With Us! </p>

 <div class="order">

   <p> Order No : 1234567890 </p>
   <p> Date :{today}</p>
   <p>Hotel Name : {data.hotelId}</p>
          <p>Total Amount Paid : ₹{data.paisa}</p>
          <p>Check In Date : {start.toString()}</p>
          <p>Check Out Date : {data.dates[0].endDate.toString()}</p>

 </div>




 <div class="totalprice">

   <p class="tot"> Total <span> {data.paisa} ₹  </span> </p>
<img class ='img' src="https://i.pinimg.com/originals/70/a5/52/70a552e8e955049c8587b2d7606cd6a6.gif" alt="logo" width="100" height="100" />
 </div>

 <button  class ='btn' onClick={printReceipt}>Print</button>
 <footer> Lorem ipsum dolor sit amet consectetur adipisicing. </footer>

</div>
</div>)    ;

}   


export default Payment;

// return (
//   <div class="container">
//          <h1>TripKart Payment Page</h1>
          
//           <h1>Booking Details</h1>
//           <h1>Hotel Name : {data.hotelId}</h1>
//           <h1>Total Amount Paid : ₹{data.paisa}</h1>
//           <h1>Check In Date : {start.toString()}</h1>
//           <h1>Check Out Date : {data.dates[0].endDate.toString()}</h1>
//           <h1>Payment Successful</h1>
//           <h1>Thank You</h1>
//     
// </div>

// )
// }

// <div class="container">
//   <div id="logo"><i class="fab fa-lyft"></i></div>
//   <div class="main">
//     <h1>Hi Julie,</h1>
//     <h2>Thank you for riding with lyft!</h2>
//     <p>(July 17, 2018 at 5:21pm)</p>
//   </div>
//   <div class="location">
//     <img class="map" src="https://image.ibb.co/iVkNEJ/lyft.png" />
//     <div class="location__line"></div>
//     <div class="dot pickup">
//       <div class="inner"></div>
//     </div>
//     <div class="location__pickup">
//       <h3>Pick-up <span>11:21 AM</span></h3>
//       <p>2844 19th St, <br/>San Francisco, CA</p>
//     </div>
//     <div class="dot dropoff"><div class="inner"></div></div>
//     <div class="location__dropoff">
//       <h3>Drop-off <span>11:45 AM</span></h3>
//       <p>545 Eddy St, <br/>San Francisco, CA</p>
//     </div>
//   </div>
  
//   <h2 class="receipt__title">Ride Details</h2>
//   <div class="receipt">
//     <div class="receipt__grid1">
//       <p>Lyft Fare</p>
//       <p>Tip</p>
//       <p>Discount (20% off)</p>
//       <p class="total">Visa *0000</p>
//     </div>
//     <div class="receipt__grid2">
//       <p>$8.03</p>
//       <p>$1.00</p>
//       <p>-$1.60</p>
//       <p class="total">$7.43</p>
//     </div>
//   </div>
//   <div class="receipt__line"></div>
//   <div class="rate">
//     <i class="fa fa-star"></i>
//     <i class="fa fa-star"></i>
//     <i class="fa fa-star"></i>
//     <i class="fa fa-star"></i>
//     <i class="far fa-star"></i>
//   </div>