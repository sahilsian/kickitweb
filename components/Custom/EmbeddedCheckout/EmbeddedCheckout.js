import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export const EmbeddedCheckout = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    date_of_birth: '',
    phone_number: '',
    address: '',
    city: '',
    region: '',
    post_code: '',
    country: '',
    product_id: 'product1'
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const stripe = await stripePromise;

    const response = await fetch('/api/create_checkout_sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      alert(result.error.message);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className='mb-4'>Test Form</h1>
      {/* Add form fields here */}
      <div className='p-3 border-2 rounded-md mb-3'>
          <input className='w-full outline-none' placeholder='Email' type="email" name="email"  value={formData.email} onChange={handleChange} required />
      </div>
      <div className='p-3 border-2 rounded-md mb-3'>
          <input className='w-full outline-none' placeholder='First Name' type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
      </div>
      <div className='p-3 border-2 rounded-md mb-3'>
          <input className='w-full outline-none' placeholder='Last Name' type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
      </div>
      <div className='p-3 border-2 rounded-md mb-3'>
          <input className='w-full outline-none' placeholder='Select your Date of Birth' type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} required />
      </div>
      <div className='p-3 border-2 rounded-md mb-3'>
          <input className='w-full outline-none' placeholder='Phone Number' type="tel" name="phone_number" value={formData.phone_number} onChange={handleChange} required />
      </div>
      <div className='p-3 border-2 rounded-md mb-3'>
          <input className='w-full outline-none' placeholder='Address'  type="text" name="address" value={formData.address} onChange={handleChange} required />
      </div>
      <div className='p-3 border-2 rounded-md mb-3'>
          <input  className='w-full outline-none' placeholder='City' type="text" name="city" value={formData.city} onChange={handleChange} required />
      </div>
      <div className='p-3 border-2 rounded-md mb-3'>
          <input  className='w-full outline-none' placeholder='Province/State/Region' type="text" name="region" value={formData.region} onChange={handleChange} required />
      </div>
      <div  className='p-3 border-2 rounded-md mb-3'>
          <input  className='w-full outline-none' placeholder='Post Code' type="text" name="post_code" value={formData.post_code} onChange={handleChange} required />
      </div>
      <div className='p-3 border-2 rounded-md mb-3'>
          <input  className='w-full outline-none' placeholder='Country' type="text" name="country" value={formData.country} onChange={handleChange} required />
      </div>
      <div className='p-3 border-2 rounded-md mb-3'>
          <select className='w-full bg-none border-[0px] outline-none bg-transparent' name="product_id" value={formData.product_id} onChange={handleChange}>
            <option value="product1">Universal Reiki $197.00</option>
            <option value="product2">Universal Reiki Level 2  $197.00</option>
            <option value="product3">In Person or Online Level 1/2  $396.00</option>
          </select>
      </div>
      <button className='p-3 border-2 rounded-md mb-3 bg-blue-500 text-white' type="submit" disabled={loading}>
        {loading ? 'Processing...' : 'Buy Now'}
      </button>
    </form>
  );
}
