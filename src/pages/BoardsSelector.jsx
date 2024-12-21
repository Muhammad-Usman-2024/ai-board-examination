// import React from "react";

// const BoardsSelector = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen font-sans p-6">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-12 text-white">
//         <div className="mb-8 mx-auto">
//           {/* Heading */}
//           <h2 className="text-2xl text-center  font-semibold mb-2 tracking-wide">
//             AI Board of Artificial Intelligence
//           </h2>

//           {/* Main Heading */}
//           <h1 className="text-5xl text-center  font-bold mt-6 text-white mb-6 leading-tight">
//             Join the AI Era. Your Journey Starts Here.
//           </h1>

//           {/* Summary Section */}
//           <p className="text-lg max-w-7xl text-white mx-auto leading-relaxed">
//             The AI Board of Artificial Intelligence is the ultimate program for
//             anyone who wants to learn about AI and how it works in the real
//             world. This program is open to everyone, no matter their age,
//             background, or education level. If you're curious about machine
//             learning, robotics, or how AI is shaping our future, this is the
//             perfect starting point. Your journey begins with a Training Needs
//             Analysis (TNA) to understand your current knowledge. Based on this,
//             the program is customized to match your skills and goals. You’ll
//             learn about AI concepts like neural networks, algorithms, and
//             automation. You’ll also discover how AI is used in industries like
//             healthcare, gaming, and business. This program requires you to
//             complete your studies and take the exam within six months. Exams
//             focus on real-world AI problems, like creating AI models or
//             improving existing technologies. Once you pass with a top score,
//             you’ll receive a blockchain-secured certification, trusted globally.
//             Whether you want to be an AI engineer, researcher, or entrepreneur,
//             the AI Board of Artificial Intelligence prepares you for success.
//             Exams can be taken online or at test centers worldwide, making it
//             flexible and accessible.
//           </p>
//         </div>

//       </div>

//       {/* Registration Form */}
//       <div className="max-w-2xl mt-12 mx-auto bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
//           Registration Form
//         </h2>

//         <form>
//           {/* Full Name */}
//           <div className="mb-4">
//             <label className="block text-lg font-semibold text-gray-600 mb-2">
//               Full Name
//             </label>
//             <input
//               type="text"
//               placeholder="First Name, Last Name"
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Email Address */}
//           <div className="mb-4">
//             <label className="block text-lg font-semibold text-gray-600 mb-2">
//               Email Address
//             </label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-lg font-semibold text-gray-600 mb-2">
//               Confirm Email Address
//             </label>
//             <input
//               type="email"
//               placeholder="Confirm your email"
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Phone Number */}
//           <div className="mb-4">
//             <label className="block text-lg font-semibold text-gray-600 mb-2">
//               Phone Number (Optional)
//             </label>
//             <input
//               type="text"
//               placeholder="Enter your phone number"
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Choose a Program */}
//           <div className="mb-4">
//             <label className="block text-lg font-semibold text-gray-600 mb-2">
//               Choose a Subject
//             </label>
//             <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
//               <option value="">Select a Subject</option>
//               <option value="ai-certification">AI Certification</option>
//               <option value="data-science">Data Science</option>
//               <option value="cyber-security">Cyber Security</option>
//             </select>
//           </div>

//           {/* Choose a Subject */}
//           <div className="mb-4">
//             <label className="block text-lg font-semibold text-gray-600 mb-2">
//               Choose a Board
//             </label>
//             <input
//               type="text"
//               placeholder="Enter your preferred subject"
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Current Education Level */}
//           <div className="mb-4">
//             <label className="block text-lg font-semibold text-gray-600 mb-2">
//               Choose Your Level of Exams
//             </label>
//             <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
//               <option value="">Select Education Level</option>
//               <option value="high-school">High School</option>
//               <option value="undergraduate">Undergraduate</option>
//               <option value="postgraduate">Postgraduate</option>
//               <option value="phd">Ph.D.</option>
//             </select>
//           </div>

//           {/* Country/Location */}
//           <div className="mb-4">
//             <label className="block text-lg font-semibold text-gray-600 mb-2">
//               Country/Location
//             </label>
//             <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
//               <option value="">Select Country</option>
//               <option value="pakistan">Pakistan</option>
//               <option value="india">India</option>
//               <option value="usa">USA</option>
//               <option value="uk">UK</option>
//             </select>
//           </div>

//           {/* Preferred Exam Mode */}
//           <div className="mb-4">
//             <label className="block text-lg font-semibold text-gray-600 mb-2">
//               Preferred Exam Mode
//             </label>
//             <div>
//               <label className="inline-flex items-center">
//                 <input
//                   type="radio"
//                   name="exam_mode"
//                   value="online"
//                   className="form-radio"
//                   required
//                 />
//                 <span className="ml-2">Online</span>
//               </label>
//               <label className="inline-flex items-center ml-4">
//                 <input
//                   type="radio"
//                   name="exam_mode"
//                   value="in-person"
//                   className="form-radio"
//                 />
//                 <span className="ml-2">In-Person</span>
//               </label>
//             </div>
//           </div>

//           {/* Password */}
//           <div className="mb-4">
//             <label className="block text-lg font-semibold text-gray-600 mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               placeholder="Create a password"
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-lg font-semibold text-gray-600 mb-2">
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               placeholder="Confirm your password"
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Agree to Terms */}
//           <div className="mb-6">
//             <label className="inline-flex items-center">
//               <input type="checkbox" className="form-checkbox" required />
//               <span className="ml-2">
//                 I agree to the{" "}
//                 <a href="#" className="text-blue-500">
//                   Terms and Conditions
//                 </a>
//               </span>
//             </label>
//           </div>

//           {/* Submit Button */}
//           <button className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-all">
//             Register Now
//           </button>
//         </form>

//         <p className="text-center text-gray-600 mt-4">
//           Need help? Contact us at{" "}
//           <a href="mailto:support@aibx.com" className="text-blue-500">
//             support@aibx.com
//           </a>{" "}
//           or chat with us live.
//         </p>
//       </div>

//               {/* Essential Highlights */}
//               <div className="max-w-7xl mx-auto mt-12">
//           <h3 className="text-3xl font-semibold mb-4">
//             Essential Highlights of the AI Board of Artificial Intelligence
//           </h3>
//           <ul className="list-none cursor-pointer pl-8 space-y-2">
//             <li>Open to everyone, regardless of education or age.</li>
//             <li>
//               Personalized programs based on your current knowledge and goals.
//             </li>
//             <li>
//               Learn AI concepts like machine learning, neural networks, and
//               automation.
//             </li>
//             <li>
//               Explore how AI transforms industries such as healthcare and
//               business.
//             </li>
//             <li>
//               Exams must be completed within six months for timely progression.
//             </li>
//             <li>
//               Blockchain-secured certifications ensure global recognition.
//             </li>
//             <li>Focus on solving real-world AI challenges.</li>
//             <li>Flexible exam options: online or at global centers.</li>
//             <li>
//               Prepares you for careers in AI engineering, research, or
//               entrepreneurship.
//             </li>
//             <li>Aligned with the latest global AI standards.</li>
//           </ul>
//         </div>

//         {/* Program Benefits */}
//         <div className="max-w-7xl mx-auto mt-12">
//           <h3 className="text-3xl font-semibold mb-4">Program Benefits</h3>
//           <ul className="list-none cursor-pointer pl-8 space-y-2">
//             <li>Open access to anyone, regardless of background or age.</li>
//             <li>
//               Personalized learning paths based on your skills and experience.
//             </li>
//             <li>Gain practical knowledge of AI concepts and tools.</li>
//             <li>
//               Certifications are globally trusted and secured on the blockchain.
//             </li>
//             <li>Develop real-world problem-solving skills in AI.</li>
//             <li>Structured timeline ensures discipline and focus.</li>
//             <li>
//               Opportunities to explore AI applications in multiple industries.
//             </li>
//             <li>
//               Suitable for aspiring engineers, researchers, or innovators.
//             </li>
//             <li>Accessible exams online or at physical centers worldwide.</li>
//             <li>Learn how to apply AI in healthcare, gaming, and business.</li>
//           </ul>
//         </div>

//         {/* Program Features */}
//         <div className="max-w-7xl mx-auto mt-12">
//           <h3 className="text-3xl font-semibold mb-4">Program Features</h3>
//           <ul className="list-none cursor-pointer pl-8 space-y-2">
//             <li>
//               Comprehensive study of AI topics like neural networks and machine
//               learning.
//             </li>
//             <li>Training Needs Analysis to tailor the learning experience.</li>
//             <li>Advanced modules on real-world AI applications.</li>
//             <li>
//               Time-bound program requiring exam completion within six months.
//             </li>
//             <li>Blockchain-secured certification for global recognition.</li>
//             <li>
//               Exams designed around practical AI challenges and case studies.
//             </li>
//             <li>Flexible options for online or in-person testing.</li>
//             <li>High standards requiring top 90% scores for certification.</li>
//             <li>
//               Continuous updates to reflect the latest AI technologies and
//               trends.
//             </li>
//             <li>
//               Aligns with international benchmarks for AI education and
//               training.
//             </li>
//           </ul>
//         </div>
//     </div>
//   );
// };

// export default BoardsSelector;

import React from "react";
import { useParams } from "react-router-dom";
import boardsData from "../data/baordData";

const BoardsSelector = () => {
  const { boardName } = useParams(); // Get the board name from the URL
  const boardContent = boardsData[decodeURIComponent(boardName)]; // Fetch data for the board

  if (!boardContent) {
    return (
      <div className="bg-gray-100 min-h-screen font-sans p-6 text-center">
        <h1 className="text-4xl font-bold text-red-600">Board Not Found</h1>
        <p className="text-lg text-gray-700 mt-4">
          The board you are looking for does not exist. Please go back and
          select a valid board.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen font-sans p-6">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-800 via-blue-700 to-blue-900 py-20 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-10 -left-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 opacity-30 rounded-full animate-floating"></div>
          <div className="absolute bottom-0 right-10 w-80 h-80 bg-gradient-to-bl from-pink-500 to-indigo-600 opacity-50 rounded-full blur-3xl animate-slow-pulse"></div>
          <div className="absolute top-40 left-1/2 w-64 h-64 bg-gradient-to-br from-teal-400 to-blue-500 opacity-40 rounded-full blur-xl animate-fade-in"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-semibold tracking-wide uppercase mb-4 text-gray-200 animate-slide-in">
            {boardContent.heading}
          </h2>
          <h1 className="text-6xl font-bold leading-tight text-white mb-6 animate-text-focus-in">
            {boardContent.mainHeading}
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-7xl mx-auto px-4 animate-fade-up">
            {boardContent.summary}
          </p>
        </div>
      </div>

      {/* Registration Form */}
      <div className="max-w-5xl mx-auto bg-white mt-12 p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-main-green mb-10 text-center">
          Registration Form
        </h2>

        <form>
          {/* Row 1: Full Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-lg font-semibold text-gray-600 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="First Name, Last Name"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-main-green"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-600 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-main-green"
                required
              />
            </div>
          </div>

          {/* Row 2: Confirm Email and Phone Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-lg font-semibold text-gray-600 mb-2">
                Confirm Email Address
              </label>
              <input
                type="email"
                placeholder="Confirm your email"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-main-green"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-600 mb-2">
                Phone Number (Optional)
              </label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-main-green"
              />
            </div>
          </div>

          {/* Row 3: Choose a Program and Board */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-lg font-semibold text-gray-600 mb-2">
                Choose a Subject
              </label>
              <select className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-main-green">
                <option value="">Select a Subject</option>
                <option value="ai-certification">AI Certification</option>
                <option value="data-science">Data Science</option>
                <option value="cyber-security">Cyber Security</option>
              </select>
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-600 mb-2">
                Choose a Board
              </label>
              <input
                type="text"
                value={decodeURIComponent(boardName)} // Pre-populated
                readOnly
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-main-green"
              />
            </div>
          </div>

          {/* Row 4: Education Level and Country */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-lg font-semibold text-gray-600 mb-2">
                Education Level
              </label>
              <select className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-main-green">
                <option value="">Select Education Level</option>
                <option value="high-school">High School</option>
                <option value="undergraduate">Undergraduate</option>
                <option value="postgraduate">Postgraduate</option>
                <option value="phd">Ph.D.</option>
              </select>
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-600 mb-2">
                Country/Location
              </label>
              <select className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-main-green">
                <option value="">Select Country</option>
                <option value="pakistan">Pakistan</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
              </select>
            </div>
          </div>

          {/* Row 5: Exam Mode and Password */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-lg font-semibold text-gray-600 mb-2">
                Preferred Exam Mode
              </label>
              <div className="flex items-center gap-4">
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
                <label className="inline-flex items-center">
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
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="password"
                placeholder="Create Password"
                className="flex-1 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-main-green"
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="flex-1 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-main-green"
                required
              />
            </div>
          </div>

          {/* Agree to Terms */}
          <div className="mb-6">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" required />
              <span className="ml-2">
                I agree to the{" "}
                <a href="#" className="text-main-green underline">
                  Terms and Conditions
                </a>
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button className="w-full py-4 bg-main-green text-white font-bold rounded-lg hover:bg-accent-blue transition-all">
            Register Now
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Need help? Contact us at{" "}
          <a
            href="mailto:support@aibx.com"
            className="text-main-green underline"
          >
            support@aibx.com
          </a>{" "}
          or chat with us live.
        </p>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto mt-12 space-y-16 px-6 md:px-8 lg:px-12">
        {/* Highlights Section */}
        <section className="p-8 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-xl shadow-lg">
          <h3 className="text-4xl font-bold mb-6 text-indigo-800 tracking-wide border-b-4 border-indigo-500 inline-block pb-2">
            Highlights
          </h3>
          <ul className="list-none cursor-pointer pl-8 space-y-4 text-lg text-gray-700">
            {boardContent.highlights.map((highlight, index) => (
              <li
                key={index}
                className="relative pl-6 text-gray-800 hover:text-indigo-600 transition duration-300"
              >
                <span className="absolute left-0 top-1 text-indigo-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                </span>
                {highlight}
              </li>
            ))}
          </ul>
        </section>

        {/* Benefits Section */}
        <section className="p-8 bg-gradient-to-r from-indigo-50 to-purple-100 rounded-xl shadow-lg">
          <h3 className="text-4xl font-bold mb-6 text-purple-800 tracking-wide border-b-4 border-purple-500 inline-block pb-2">
            Benefits
          </h3>
          <ul className="list-none cursor-pointer pl-8 space-y-4 text-lg text-gray-700">
            {boardContent.benefits.map((benefit, index) => (
              <li
                key={index}
                className="relative pl-6 text-gray-800 hover:text-purple-600 transition duration-300"
              >
                <span className="absolute left-0 top-1 text-purple-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </section>

        {/* Features Section */}
        <section className="p-8 bg-gradient-to-r from-purple-50 to-pink-100 rounded-xl shadow-lg">
          <h3 className="text-4xl font-bold mb-6 text-pink-800 tracking-wide border-b-4 border-pink-500 inline-block pb-2">
            Features
          </h3>
          <ul className="list-none cursor-pointer pl-8 space-y-4 text-lg text-gray-700">
            {boardContent.features.map((feature, index) => (
              <li
                key={index}
                className="relative pl-6 text-gray-800 hover:text-pink-600 transition duration-300"
              >
                <span className="absolute left-0 top-1 text-pink-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default BoardsSelector;
