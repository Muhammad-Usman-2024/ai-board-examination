import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const AdmissionForm = () => {
    const [formData, setFormData] = useState({
      full_name: '',
      nationality: '',
      profession: '',
      email: '',
      phone_number: '',
      city: '',
      country: '',
      comments: '',
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Log form data to ensure it's populated correctly
      
        emailjs
          .send(
            'service_z8cr3lf',
            'template_7w9y25c',
            formData,
            'IpakiaUw3rbKMdmV6'
          )
          .then(
            (result) => {
              alert('Form submitted successfully!');
              console.log('Response:', result.text);
            },
            (error) => {
              alert('Failed to submit the form. Please try again.');
              console.error('Error:', error.text);
            }
          );
      };
      

  return (
    <div className="min-h-screen bg-main-green flex items-center justify-center px-6">
      <div className="w-full max-w-lg bg-white mt-12 mb-12 shadow-2xl rounded-2xl p-10 animate-fade-in">
        {/* Form Heading */}
        <h2 className="text-main-dark text-3xl font-bold mb-6 font-aeonik text-center">
          📝 Admission Form
        </h2>
        <p className="text-text-color text-center mb-6 font-aeonik">
          Please fill in the required fields to submit your admission form.
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="block text-text-color font-semibold mb-2 font-semibold">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="full_name"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg p-3 text-text-color focus:ring-2 focus:ring-main-green transition-shadow shadow-md hover:shadow-lg"
              value={formData.full_name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Nationality */}
          <div>
            <label className="block text-text-color font-semibold mb-2 font-semibold">
              Nationality <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="nationality"
              placeholder="Enter your nationality"
              className="w-full border border-gray-300 rounded-lg p-3 text-text-color focus:ring-2 focus:ring-main-green transition-shadow shadow-md hover:shadow-lg"
              value={formData.nationality}
              onChange={handleChange}
              required
            />
          </div>

          {/* Other Input Fields */}
          {/* Profession */}
          <div>
            <label className="block text-text-color font-semibold mb-2 font-semibold">
              Profession <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="profession"
              placeholder="Enter your profession"
              className="w-full border border-gray-300 rounded-lg p-3 text-text-color focus:ring-2 focus:ring-main-green transition-shadow shadow-md hover:shadow-lg"
              value={formData.profession}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-text-color font-semibold mb-2 font-semibold">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg p-3 text-text-color focus:ring-2 focus:ring-main-green transition-shadow shadow-md hover:shadow-lg"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-text-color font-semibold mb-2 font-semibold">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone_number"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-lg p-3 text-text-color focus:ring-2 focus:ring-main-green transition-shadow shadow-md hover:shadow-lg"
              value={formData.phone_number}
              onChange={handleChange}
              required
            />
          </div>

          {/* City of Residence */}
          <div>
            <label className="block text-text-color font-semibold mb-2 font-semibold">
              City of Residence <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="city"
              placeholder="Enter your city"
              className="w-full border border-gray-300 rounded-lg p-3 text-text-color focus:ring-2 focus:ring-main-green transition-shadow shadow-md hover:shadow-lg"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          {/* Country of Franchise */}
          <div>
            <label className="block text-text-color font-semibold mb-2 font-semibold">
              Country of Franchise <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="country"
              placeholder="Enter your country"
              className="w-full border border-gray-300 rounded-lg p-3 text-text-color focus:ring-2 focus:ring-main-green transition-shadow shadow-md hover:shadow-lg"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>

          {/* Comments */}
          <div>
            <label className="block text-text-color font-semibold mb-2 font-semibold">
              Comments
            </label>
            <textarea
              name="comments"
              placeholder="Write any comments or additional information"
              className="w-full border border-gray-300 rounded-lg p-3 text-text-color focus:ring-2 focus:ring-main-green transition-shadow shadow-md hover:shadow-lg"
              rows="4"
              value={formData.comments}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-main-green to-accent-blue text-white font-bold py-3 rounded-lg hover:opacity-90 transition-all shadow-lg"
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;
