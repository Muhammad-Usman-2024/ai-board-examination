import React from 'react';

const NftCertification = () => {
  return (
    <div className="bg-main-light text-text-color font-aeonik">
      {/* Hero Section */}
      <section className="hero_image flex justify-center items-center bg-main-green text-white text-center h-96 sm:h-72 md:h-80 lg:h-96">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold px-4">
          Certifications & Degrees
        </h1>
      </section>

      {/* Content Section */}
      <div className="px-6 py-12 md:py-16 lg:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-main-dark text-center mb-8">
          From Grade 1 to PhD
        </h2>
        <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-12">
          At AIBX, we redefine education by offering a seamless, modular pathway
          from foundational learning to advanced degrees. Whether you're just
          starting your academic journey or seeking to master a specialized
          field, our programs are designed to fit your pace, aspirations, and
          the demands of the future.
        </p>

        {/* Subjects Section */}
        <div className="bg-main-light shadow-lg p-8 rounded-lg mb-12">
  <h3 className="text-3xl font-bold text-main-dark mb-8 text-center">
    Subjects We Cover
  </h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {/* STEM Fields */}
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <h4 className="text-xl font-semibold text-accent-blue mb-4">
        STEM Fields
      </h4>
      <ul>
        {[
          "Artificial Intelligence",
          "Data Science",
          "Machine Learning",
          "Robotics",
          "Computer Science",
          "Software Engineering",
          "Civil Engineering",
          "Mechanical Engineering",
          "Electrical Engineering",
          "Environmental Science",
          "Nanotechnology",
          "Cybersecurity",
          "Renewable Energy",
          "Physics",
          "Chemistry",
          "Mathematics",
          "Biology",
        ].map((subject, index) => (
          <li
            key={index}
            className="bg-main-light hover:bg-accent-blue hover:text-white transition-transform transform hover:scale-105 p-4 rounded-lg shadow-sm flex items-center gap-3"
          >
            <span className="bg-main-dark text-white rounded-full p-2 text-sm">
              🎓
            </span>
            {subject}
          </li>
        ))}
      </ul>
    </div>

    {/* Medicine & Healthcare */}
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <h4 className="text-xl font-semibold text-accent-blue mb-4">
        Medicine & Healthcare
      </h4>
      <ul>
        {[
          "General Practice",
          "Surgery",
          "Pharmacy",
          "Nursing",
          "Medical Research",
          "Public Health",
          "Radiology",
          "Anesthesiology",
          "Pediatrics",
          "Dermatology",
          "Psychiatry",
          "Cardiology",
          "Neurology",
          "Dentistry",
          "Veterinary Science",
        ].map((subject, index) => (
          <li
            key={index}
            className="bg-main-light hover:bg-accent-blue hover:text-white transition-transform transform hover:scale-105 p-4 rounded-lg shadow-sm flex items-center gap-3"
          >
            <span className="bg-main-dark text-white rounded-full p-2 text-sm">
              🩺
            </span>
            {subject}
          </li>
        ))}
      </ul>
    </div>

    {/* Business & Management */}
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <h4 className="text-xl font-semibold text-accent-blue mb-4">
        Business & Management
      </h4>
      <ul>
        {[
          "Marketing",
          "Finance",
          "Accounting",
          "Business Administration",
          "Human Resource Management",
          "Operations Management",
          "Supply Chain Management",
          "E-Commerce Management",
          "Investment & Portfolio Management",
          "Entrepreneurship",
          "Real Estate Management",
        ].map((subject, index) => (
          <li
            key={index}
            className="bg-main-light hover:bg-accent-blue hover:text-white transition-transform transform hover:scale-105 p-4 rounded-lg shadow-sm flex items-center gap-3"
          >
            <span className="bg-main-dark text-white rounded-full p-2 text-sm">
              💼
            </span>
            {subject}
          </li>
        ))}
      </ul>
    </div>

    {/* Creative Arts */}
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <h4 className="text-xl font-semibold text-accent-blue mb-4">
        Creative Arts
      </h4>
      <ul>
        {[
          "Graphic Design",
          "Fashion Design",
          "Music Composition",
          "Film Production",
          "Animation & Game Design",
          "Architecture",
          "Interior Design",
          "Fine Arts",
          "Creative Writing",
          "Photography",
        ].map((subject, index) => (
          <li
            key={index}
            className="bg-main-light hover:bg-accent-blue hover:text-white transition-transform transform hover:scale-105 p-4 rounded-lg shadow-sm flex items-center gap-3"
          >
            <span className="bg-main-dark text-white rounded-full p-2 text-sm">
              🎨
            </span>
            {subject}
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>



        {/* Modular Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-main-dark mb-4">
              Modular Structure: Progress at Your Pace
            </h3>
            <p className="text-base text-gray-600">
              <strong>No Rigid Timelines:</strong> Learn at your own speed,
              completing modules as quickly or deliberately as you wish, while
              adhering to time-bound milestones for discipline.
            </p>
            <p className="text-base text-gray-600 mt-4">
              <strong>From Basics to Expertise:</strong> Begin with foundational
              concepts and progress seamlessly to advanced, PhD-level material
              without needing to switch institutions.
            </p>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-main-dark mb-4">
              Excellence as a Standard
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>
                <strong>90th Percentile or Higher:</strong> Certifications are
                awarded only to those achieving top performance.
              </li>
              <li>
                <strong>Globally Verified:</strong> All certifications are
                blockchain-secured, ensuring global acceptance and tamper-proof
                credentials.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftCertification;
