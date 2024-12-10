import React from "react";

const BoardSelector = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans p-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-12 text-white">
        <div className="text-center mb-8 max-w-3xl mx-auto">
          {/* New Line Added */}
          <h2 className="text-2xl font-semibold mb-2 tracking-wide">
            Redefining Certification with AI-Powered Examinations
          </h2>

          {/* Main Heading */}
          <h1 className="text-5xl font-bold mt-6 text-white mb-6 leading-tight">
            Join the AI Era. <br/> Your Journey Starts Here.
          </h1>

          {/* Subheading */}
          <p className="text-lg text-white max-w-2xl mx-auto leading-relaxed">
            Sign up for AIBX, the World’s First AI Boards of Examination, and
            unlock your potential with revolutionary AI-powered learning and
            certifications.
          </p>

          {/* Features List */}
          <ul className="text-white mt-6 text-left mx-auto max-w-lg space-y-2">
            <li className="flex items-center">
              <span className="w-4 h-4 bg-green-400 rounded-full inline-block mr-3"></span>
              Globally recognized certifications.
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-green-400 rounded-full inline-block mr-3"></span>
              AI tutoring customized to your needs.
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-green-400 rounded-full inline-block mr-3"></span>
              Blockchain-secured credentials.
            </li>
          </ul>
        </div>
      </div>

      {/* Registration Form */}
      <div className="max-w-2xl mt-12 mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Registration Form
        </h2>

        <form>
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-lg font-semibold text-gray-600 mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="First Name, Last Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email Address */}
          <div className="mb-4">
            <label className="block text-lg font-semibold text-gray-600 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold text-gray-600 mb-2">
              Confirm Email Address
            </label>
            <input
              type="email"
              placeholder="Confirm your email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="block text-lg font-semibold text-gray-600 mb-2">
              Phone Number (Optional)
            </label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Choose a Program */}
          <div className="mb-4">
            <label className="block text-lg font-semibold text-gray-600 mb-2">
              Choose a Subject
            </label>
            <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select a Subject</option>
              <option value="ai-certification">AI Certification</option>
              <option value="data-science">Data Science</option>
              <option value="cyber-security">Cyber Security</option>
            </select>
          </div>

          {/* Choose a Subject */}
          <div className="mb-4">
            <label className="block text-lg font-semibold text-gray-600 mb-2">
              Choose a Board
            </label>
            <input
              type="text"
              placeholder="Enter your preferred subject"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Current Education Level */}
          <div className="mb-4">
            <label className="block text-lg font-semibold text-gray-600 mb-2">
              Choose Your Level of Exams
            </label>
            <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select Education Level</option>
              <option value="high-school">High School</option>
              <option value="undergraduate">Undergraduate</option>
              <option value="postgraduate">Postgraduate</option>
              <option value="phd">Ph.D.</option>
            </select>
          </div>

          {/* Country/Location */}
          <div className="mb-4">
            <label className="block text-lg font-semibold text-gray-600 mb-2">
              Country/Location
            </label>
            <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select Country</option>
              <option value="pakistan">Pakistan</option>
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
            </select>
          </div>

          {/* Preferred Exam Mode */}
          <div className="mb-4">
            <label className="block text-lg font-semibold text-gray-600 mb-2">
              Preferred Exam Mode
            </label>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="exam_mode"
                  value="online"
                  className="form-radio"
                  required
                />
                <span className="ml-2">Online</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  name="exam_mode"
                  value="in-person"
                  className="form-radio"
                />
                <span className="ml-2">In-Person</span>
              </label>
            </div>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-lg font-semibold text-gray-600 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold text-gray-600 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Agree to Terms */}
          <div className="mb-6">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" required />
              <span className="ml-2">
                I agree to the{" "}
                <a href="#" className="text-blue-500">
                  Terms and Conditions
                </a>
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-all">
            Register Now
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Need help? Contact us at{" "}
          <a href="mailto:support@aibx.com" className="text-blue-500">
            support@aibx.com
          </a>{" "}
          or chat with us live.
        </p>
      </div>
    </div>
  );
};

export default BoardSelector;
