// PaymentForm.js
import axios from 'axios';
import React, { useState } from 'react';

const Payment= () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolder: '',
    email: '',
    price:0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await axios.post('http://localhost:3001/api/payment', {
        email: formData.email,
        cardholder: formData.cardHolder,
        amount: formData.price,
        paymentDate: new Date(),
      });
  
      // If the API call is successful, update the state to indicate payment success
      setPaymentSuccess(true);
    } catch (error) {
      // Handle the error here (e.g., log it, show an error message to the user)
      console.error('Error during payment:', error);
      // You might also want to set an error state and display an error message to the user
    }
  };
  

  return (
    <div id='payment' className="max-w-md p-4 mx-auto">
      {paymentSuccess ? (
        <div className="p-4 text-white bg-green-500 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold">Payment Successful!</h2>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Card Number:</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Card Holder:</label>
            <input
              type="text"
              name="cardHolder"
              value={formData.cardHolder}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-md"
              required
            />
             <label className="block text-sm font-medium text-gray-600">Amount:</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-md"
              required
            />
            
          </div>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Pay Now
          </button>
        </form>
      )}
    </div>
  );
};

export default Payment;
