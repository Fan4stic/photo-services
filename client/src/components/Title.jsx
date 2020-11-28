import React from 'react'

const Title = (props) => {
  return(
    <div id="title">
      <div id="yelpicon">
        <img src="yelpIcon.png"/>
      </div>
      <div id="searchbar">
        <input type="text" placeholder="Search.." id="searchbarinput"></input>
        <div id="dropdownrow">
        <div class="dropdown">
          <button class="dropbtn">Restaurants</button>
          <div class="dropdown-content">
            <a href="#">Delivery</a>
            <a href="#">Burgers</a>
            <a href="#">Chinese</a>
            <a href="#">Italian</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">Home Services</button>
          <div class="dropdown-content">
            <a href="#">Contractors</a>
            <a href="#">Electricians</a>
            <a href="#">Home Cleaners</a>
            <a href="#">HVAC</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">Auto Services</button>
          <div class="dropdown-content">
            <a href="#">Auto Repair</a>
            <a href="#">Auto Detailing</a>
            <a href="#">Body Shops</a>
            <a href="#">Car Wash</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">More</button>
          <div class="dropdown-content">
            <a href="#">Dry Cleaning</a>
            <a href="#">Phone Repair</a>
            <a href="#">Bars</a>
            <a href="#">Nightlife</a>
          </div>
        </div>
        </div>
      </div>
      <div id="titlebuttons">
      <button id="titlebuttons-business" class="titlebuttons">For Businesses</button>
      <button id="titlebuttons-writeReview" class="titlebuttons">Write a Review</button>
      <button id="titlebuttons-login" class="titlebuttons">Log In</button>
      <button id="titlebuttons-signup" class="titlebuttons">Sign Up</button>
    </div>
    </div>
  )
};

export default Title;
