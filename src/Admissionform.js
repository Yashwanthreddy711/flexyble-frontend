import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios'
import { NavLink } from 'react-router-dom';



const Admissionform = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    age: '',
    address: '',
    selectedSlot: '',
    joiningDate: new Date(), // Default to today's date
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      joiningDate: date,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    await axios.post('http://localhost:3001/api/adduser',{
        firstName:formData.firstName,
        lastName:formData.lastName,
        email:formData.email,
        mobileNumber:formData.mobileNumber,
        age:formData.age,
        address:formData.address,
        selectedSlot:formData.selectedSlot,
        joiningDate: formData.joiningDate,
      });
      
    console.log('Form submitted:', formData);
  };

  const renderSlots = () => {
    const slots = ['6-7AM', '7-8AM', '8-9AM', '5-6PM'];

    return slots.map((slot) => (
      <button
        key={slot}
        onClick={() => setFormData({ ...formData, selectedSlot: slot })}
        className={`p-2 mx-2 ${
          formData.selectedSlot === slot ? 'bg-blue-500 text-white' : 'bg-gray-300'
        }`}
      >
        {slot}
      </button>
    ));
  };

  return (
    <div id='form' className="max-w-[800px] p-6 mx-auto mt-8 bg-white rounded-md shadow-md">
      {/* <h2 className="mb-4 text-2xl font-bold">Yoga Classes Admission Form</h2> */}
      <form onSubmit={handleSubmit}>
        {/* Input fields */}
        {/* Add more fields as needed */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full p-2 mt-1 border rounded-md"
            required
          />
          <label className="block text-sm font-medium text-gray-600">Last Name</label>
           <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full p-2 mt-1 border rounded-md"
            required
          />
          <label className="block text-sm font-medium text-gray-600">Email</label>
           <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 mt-1 border rounded-md"
            required
          />
          <label className="block text-sm font-medium text-gray-600">Mobile</label>
           <input
            type="Number"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            className="w-full p-2 mt-1 border rounded-md"
            required
          />
        </div>

        {/* Age condition */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className="w-full p-2 mt-1 border rounded-md"
            required
            min="18"
            max="65"
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full p-2 mt-1 border rounded-md"
            required
          />
        </div>

        {/* Joining Date */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Joining Date</label>
          <DatePicker
            selected={formData.joiningDate}
            onChange={handleDateChange}
            dateFormat="yyyy/MM/dd"
            className="w-full p-2 mt-1 border rounded-md"
          />
        </div>

        {/* Slot selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Select Slot</label>
          <div className="flex">{renderSlots()}</div>
        </div>

        {/* Submit button */}
        <button
  type="submit"
  className="flex px-4 py-2 ml-auto text-white bg-blue-500 rounded-md hover:bg-blue-600"
>
<NavLink  to='/payment' > Payment </NavLink>
</button>

      </form>
    </div>
  );
};

  export  default Admissionform;
  