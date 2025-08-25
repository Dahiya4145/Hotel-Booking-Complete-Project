import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { hotelInputs } from "../../formSource"; // Adjust the path as necessary
import './editHotel.scss'; // If you have a specific SCSS file for this component

const EditHotel = () => {
  const [info, setInfo] = useState({});
  const [rooms, setRooms] = useState([]); // List of rooms for the selected hotel
  const [message, setMessage] = useState("");
  const [hotelId, setHotelId] = useState(""); // State for hotel ID
  const [hotels, setHotels] = useState([]); // State for list of hotels

  // Fetch the list of hotels to display in the dropdown
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await axios.get('/hotels');
        setHotels(res.data); // Set the available hotels
      } catch (err) {
        console.error(err);
        setMessage("Error fetching hotels");
      }
    };
    fetchHotels();
  }, []);

  // Fetch hotel data by its ID
  const fetchHotelData = async (id) => {
    try {
      const res = await axios.get(`/hotels/${id}`);
      console.log(res); // Log the response to ensure it's returning the correct data
      setInfo(res.data);
      setRooms(res.data.rooms || []); // Assuming the rooms are part of the hotel's data
      setMessage(""); // Clear any previous messages
    } catch (err) {
      console.error("Error fetching hotel data:", err); // Log the full error
      
    }
  };

  // Handle hotel selection
  const handleHotelChange = (e) => {
    const selectedHotelId = e.target.value;
    setHotelId(selectedHotelId);
    console.log("Selected Hotel ID:", selectedHotelId); // Log the selected hotel ID
    if (selectedHotelId) {
      fetchHotelData(selectedHotelId); // Fetch data for the selected hotel
    }
  };

  // Handle changes to form inputs
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  // Handle form submission (updating hotel)
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const updatedHotel = {
        ...info,
        rooms,
      };

      await axios.put(`/hotels/${hotelId}`, updatedHotel); // Update the hotel
      setMessage("Hotel Updated Successfully");
    } catch (err) {
      console.error(err);
      setMessage("Error Updating Hotel");
    }
  };

  return (
    <div className="editHotel">
      <h1>Edit Hotel</h1>
      <form>
        {/* Dropdown to select hotel */}
        <div className="formInput">
          <label>Select Hotel</label>
          <select value={hotelId} onChange={handleHotelChange}>
            <option value="">Select a hotel</option>
            {hotels.map((hotel) => (
              <option key={hotel._id} value={hotel._id}>
                {hotel.name}
              </option>
            ))}
          </select>
        </div>

        {/* Hotel Data Inputs (if a hotel is selected) */}
        {hotelId && (
          <>
            {hotelInputs.map((input) => (
              <div className="formInput" key={input.id}>
                <label>{input.label}</label>
                <input
                  id={input.id}
                  value={info[input.id] || ""}
                  onChange={handleChange}
                  type={input.type}
                  placeholder={input.placeholder}
                />
              </div>
            ))}

            {/* Featured field */}
            <div className="formInput">
              <label>Featured</label>
              <select
                id="featured"
                value={info.featured || false}
                onChange={handleChange}
              >
                <option value={false}>No</option>
                <option value={true}>Yes</option>
              </select>
            </div>

            

            <button onClick={handleClick}>Update Hotel</button>
          </>
        )}
      </form>

      {message && <p className="message" style={{ color: "red" }}>{message}</p>}
    </div>
  );
};

export default EditHotel;
