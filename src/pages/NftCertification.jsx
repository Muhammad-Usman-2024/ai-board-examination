// import React from "react";
// import { useNavigate } from "react-router-dom";

// const NftCertification = () => {
//   const navigate = useNavigate();

//   // Grouped boards with headings
// const boardCategories = [
//   {
//     heading: "STEM and Technology Boards",
//     boards: [
//       "AI Board of Artificial Intelligence",
//       "AI Board of Data Science",
//       "AI Board of Machine Learning",
//       "AI Board of Robotics",
//       "AI Board of Computer Science",
//       "AI Board of Software Engineering",
//       "AI Board of Civil Engineering",
//       "AI Board of Mechanical Engineering",
//       "AI Board of Electrical Engineering",
//       "AI Board of Aerospace Engineering",
//       "AI Board of Telecommunications",
//       "AI Board of Quantum Computing",
//       "AI Board of Nanotechnology",
//       "AI Board of Space Science",
//       "AI Board of Hydrology and Water Resources",
//       "AI Board of Biomedical Engineering",
//       "AI Board of Systems Engineering",
//       "AI Board of AI Ethics",
//       "AI Board of Quantum Physics",
//       "AI Board of Bioinformatics",
//     ],
//   },
//   {
//     heading: "Medicine and Healthcare Boards",
//     boards: [
//       "AI Medical Board of General Practice",
//       "AI Medical Board of Surgery",
//       "AI Board of Pharmacy",
//       "AI Board of Nursing",
//       "AI Board of Medical Research",
//       "AI Board of Public Health",
//       "AI Medical Board of Radiology",
//       "AI Medical Board of Anesthesiology",
//       "AI Medical Board of Pediatrics",
//       "AI Medical Board of Dermatology",
//       "AI Medical Board of Psychiatry",
//       "AI Medical Board of Cardiology",
//       "AI Medical Board of Neurology",
//       "AI Dental Board of Examination",
//       "AI Veterinary Board of Examination",
//       "AI Medical Board of Oncology",
//       "AI Board of Reproductive Health",
//       "AI Board of Geriatrics",
//       "AI Board of Physiotherapy",
//       "AI Board of Paramedical Sciences",
//       "AI Board of Alternative Medicine",
//       "AI Board of Nutrition and Dietetics",
//       "AI Board of Forensic Medicine",
//       "AI Board of Genetic Counseling",
//     ],
//   },
//   {
//     heading: "Business and Management Boards",
//     boards: [
//       "AI Business Board of Marketing",
//       "AI Business Board of Human Resource Management",
//       "AI Business Board of Finance",
//       "AI Business Board of Accounting",
//       "AI Board of Business Administration",
//       "AI Board of Entrepreneurship",
//       "AI Business Board of Operations Management",
//       "AI Business Board of Supply Chain Management",
//       "AI Board of Real Estate Management",
//       "AI Board of E-Commerce Management",
//       "AI Board of Leadership Development",
//       "AI Board of Strategic Management",
//       "AI Board of Project Management",
//       "AI Board of Microfinance",
//       "AI Board of Risk Management",
//       "AI Board of Tourism and Hospitality Management",
//       "AI Board of Behavioral Economics",
//     ],
//   },
//   {
//     heading: "Creative Arts and Design Boards",
//     boards: [
//       "AI Board of Graphic Design",
//       "AI Board of Fashion Design",
//       "AI Board of Music Composition",
//       "AI Board of Film and Media Production",
//       "AI Board of Animation and Game Design",
//       "AI Board of Architecture",
//       "AI Board of Interior Design",
//       "AI Board of Fine Arts",
//       "AI Board of Creative Writing",
//       "AI Board of Photography",
//       "AI Board of Performing Arts",
//       "AI Board of Literary Arts",
//       "AI Board of Industrial Design",
//       "AI Board of Visual Effects (VFX) and Animation",
//       "AI Board of Jewelry Design",
//     ],
//   },
//   {
//     heading: "Vocational and Technological Boards",
//     boards: [
//       "AI Board of Coding and Development",
//       "AI Board of Web Development",
//       "AI Board of App Development",
//       "AI Board of Automotive Engineering",
//       "AI Board of Food Science and Technology",
//       "AI Board of Blockchain Development",
//       "AI Agricultural Board of Examination",
//       "AI Board of Renewable Technology",
//       "AI Board of Green Tech Innovation",
//       "AI Board of Energy Systems",
//     ],
//   },
//   {
//     heading: "Social Sciences and Humanities Boards",
//     boards: [
//       "AI Board of Political Science",
//       "AI Board of Sociology",
//       "AI Board of Psychology",
//       "AI Board of Anthropology",
//       "AI Board of History",
//       "AI Board of Geography",
//       "AI Board of Philosophy",
//       "AI Board of Economics",
//       "AI Board of International Relations",
//       "AI Board of Criminology",
//       "AI Board of Media Studies",
//       "AI Board of Cultural Studies",
//       "AI Board of Archaeology",
//       "AI Board of Human Rights",
//       "AI Board of Social Work",
//       "AI Board of Gender Studies",
//       "AI Board of Peace and Conflict Studies",
//     ],
//   },
//   {
//     heading: "Law and Governance Boards",
//     boards: [
//       "AI Board of Constitutional Law",
//       "AI Board of International Law",
//       "AI Board of Cyber Law",
//       "AI Board of Corporate Law",
//       "AI Board of Public Administration",
//       "AI Board of Governance and Policy Making",
//       "AI Board of Environmental Law",
//       "AI Board of Taxation Law",
//       "AI Board of Space Law",
//     ],
//   },
//   {
//     heading: "Environment and Sustainability Boards",
//     boards: [
//       "AI Board of Climate Change",
//       "AI Board of Sustainable Development",
//       "AI Board of Wildlife Conservation",
//       "AI Board of Marine Biology",
//       "AI Board of Environmental Engineering",
//       "AI Board of Urban Sustainability",
//       "AI Board of Ecological Studies",
//     ],
//   },
//   {
//     heading: "Education and Language Boards",
//     boards: [
//       "AI Board of Teaching and Curriculum Design",
//       "AI Board of Linguistics",
//       "AI Board of English Language and Literature",
//       "AI Board of Translation and Interpretation",
//       "AI Board of Comparative Literature",
//       "AI Board of Multilingual Studies",
//     ],
//   },
// ];

//   const handleBoardClick = (board) => {
//     navigate(`/allboardspage/board/${encodeURIComponent(board)}`);
//   };
//   return (
//     <div className="bg-main-light text-text-color font-aeonik">
//       {/* Hero Section */}
//       <section className="hero_image flex justify-center items-center bg-main-green text-white text-center h-96 sm:h-72 md:h-80 lg:h-96">
//         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold px-4">
//           Certifications & Degrees
//         </h1>
//       </section>

//       {/* Content Section */}
//       <div className="px-6 py-12 md:py-16 lg:py-20">
//         <h2 className="text-3xl md:text-4xl font-bold text-main-dark text-center mb-8">
//           From Grade 1 to PhD
//         </h2>
//         <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-12">
//           At AIBX, we redefine education by offering a seamless, modular pathway
//           from foundational learning to advanced degrees. Whether you're just
//           starting your academic journey or seeking to master a specialized
//           field, our programs are designed to fit your pace, aspirations, and
//           the demands of the future.
//         </p>

//         {/* Subjects Section */}
//         <div className="bg-main-light shadow-lg p-8 rounded-lg mb-12">
//           <h3 className="text-3xl font-bold text-main-dark mb-8 text-center">
//             Subjects We Cover
//           </h3>
//           <div className="space-y-10">
//           {boardCategories.map((category) => (
//             <section key={category.heading}>
//               <h2 className="text-3xl font-aeonik text-accent-blue mb-4">
//                 {category.heading}
//               </h2>
//               <ul className="space-y-2">
//                 {category.boards.map((board) => (
//                   <li
//                     key={board}
//                     className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
//                     onClick={() => handleBoardClick(board)}
//                   >
//                     {board}
//                   </li>
//                 ))}
//               </ul>
//             </section>
//           ))}
//         </div>
//         </div>

//         {/* Modular Section */}
//         <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
//           <div className="flex-1">
//             <h3 className="text-2xl font-semibold text-main-dark mb-4">
//               Modular Structure: Progress at Your Pace
//             </h3>
//             <p className="text-base text-gray-600">
//               <strong>No Rigid Timelines:</strong> Learn at your own speed,
//               completing modules as quickly or deliberately as you wish, while
//               adhering to time-bound milestones for discipline.
//             </p>
//             <p className="text-base text-gray-600 mt-4">
//               <strong>From Basics to Expertise:</strong> Begin with foundational
//               concepts and progress seamlessly to advanced, PhD-level material
//               without needing to switch institutions.
//             </p>
//           </div>
//           <div className="flex-1">
//             <h3 className="text-2xl font-semibold text-main-dark mb-4">
//               Excellence as a Standard
//             </h3>
//             <ul className="list-disc list-inside text-gray-600">
//               <li>
//                 <strong>90th Percentile or Higher:</strong> Certifications are
//                 awarded only to those achieving top performance.
//               </li>
//               <li>
//                 <strong>Globally Verified:</strong> All certifications are
//                 blockchain-secured, ensuring global acceptance and tamper-proof
//                 credentials.
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NftCertification;

import React from "react";
import { useNavigate } from "react-router-dom";

const NftCertification = () => {
  const navigate = useNavigate();

  const boardCategories = [
    {
      heading: "STEM and Technology Boards",
      boards: [
        "AI Board of Artificial Intelligence",
        "AI Board of Data Science",
        "AI Board of Machine Learning",
        "AI Board of Robotics",
        "AI Board of Computer Science",
        "AI Board of Software Engineering",
        "AI Board of Civil Engineering",
        "AI Board of Mechanical Engineering",
        "AI Board of Electrical Engineering",
        "AI Board of Aerospace Engineering",
        "AI Board of Telecommunications",
        "AI Board of Quantum Computing",
        "AI Board of Nanotechnology",
        "AI Board of Space Science",
        "AI Board of Hydrology and Water Resources",
        "AI Board of Biomedical Engineering",
        "AI Board of Systems Engineering",
        "AI Board of AI Ethics",
        "AI Board of Quantum Physics",
        "AI Board of Bioinformatics",
      ],
    },
    {
      heading: "Medicine and Healthcare Boards",
      boards: [
        "AI Medical Board of General Practice",
        "AI Medical Board of Surgery",
        "AI Board of Pharmacy",
        "AI Board of Nursing",
        "AI Board of Medical Research",
        "AI Board of Public Health",
        "AI Medical Board of Radiology",
        "AI Medical Board of Anesthesiology",
        "AI Medical Board of Pediatrics",
        "AI Medical Board of Dermatology",
        "AI Medical Board of Psychiatry",
        "AI Medical Board of Cardiology",
        "AI Medical Board of Neurology",
        "AI Dental Board of Examination",
        "AI Veterinary Board of Examination",
        "AI Medical Board of Oncology",
        "AI Board of Reproductive Health",
        "AI Board of Geriatrics",
        "AI Board of Physiotherapy",
        "AI Board of Paramedical Sciences",
        "AI Board of Alternative Medicine",
        "AI Board of Nutrition and Dietetics",
        "AI Board of Forensic Medicine",
        "AI Board of Genetic Counseling",
      ],
    },
    {
      heading: "Business and Management Boards",
      boards: [
        "AI Business Board of Marketing",
        "AI Business Board of Human Resource Management",
        "AI Business Board of Finance",
        "AI Business Board of Accounting",
        "AI Board of Business Administration",
        "AI Board of Entrepreneurship",
        "AI Business Board of Operations Management",
        "AI Business Board of Supply Chain Management",
        "AI Board of Real Estate Management",
        "AI Board of E-Commerce Management",
        "AI Board of Leadership Development",
        "AI Board of Strategic Management",
        "AI Board of Project Management",
        "AI Board of Microfinance",
        "AI Board of Risk Management",
        "AI Board of Tourism and Hospitality Management",
        "AI Board of Behavioral Economics",
      ],
    },
    {
      heading: "Creative Arts and Design Boards",
      boards: [
        "AI Board of Graphic Design",
        "AI Board of Fashion Design",
        "AI Board of Music Composition",
        "AI Board of Film and Media Production",
        "AI Board of Animation and Game Design",
        "AI Board of Architecture",
        "AI Board of Interior Design",
        "AI Board of Fine Arts",
        "AI Board of Creative Writing",
        "AI Board of Photography",
        "AI Board of Performing Arts",
        "AI Board of Literary Arts",
        "AI Board of Industrial Design",
        "AI Board of Visual Effects (VFX) and Animation",
        "AI Board of Jewelry Design",
      ],
    },
    {
      heading: "Vocational and Technological Boards",
      boards: [
        "AI Board of Coding and Development",
        "AI Board of Web Development",
        "AI Board of App Development",
        "AI Board of Automotive Engineering",
        "AI Board of Food Science and Technology",
        "AI Board of Blockchain Development",
        "AI Agricultural Board of Examination",
        "AI Board of Renewable Technology",
        "AI Board of Green Tech Innovation",
        "AI Board of Energy Systems",
      ],
    },
    {
      heading: "Social Sciences and Humanities Boards",
      boards: [
        "AI Board of Political Science",
        "AI Board of Sociology",
        "AI Board of Psychology",
        "AI Board of Anthropology",
        "AI Board of History",
        "AI Board of Geography",
        "AI Board of Philosophy",
        "AI Board of Economics",
        "AI Board of International Relations",
        "AI Board of Criminology",
        "AI Board of Media Studies",
        "AI Board of Cultural Studies",
        "AI Board of Archaeology",
        "AI Board of Human Rights",
        "AI Board of Social Work",
        "AI Board of Gender Studies",
        "AI Board of Peace and Conflict Studies",
      ],
    },
    {
      heading: "Law and Governance Boards",
      boards: [
        "AI Board of Constitutional Law",
        "AI Board of International Law",
        "AI Board of Cyber Law",
        "AI Board of Corporate Law",
        "AI Board of Public Administration",
        "AI Board of Governance and Policy Making",
        "AI Board of Environmental Law",
        "AI Board of Taxation Law",
        "AI Board of Space Law",
      ],
    },
    {
      heading: "Environment and Sustainability Boards",
      boards: [
        "AI Board of Climate Change",
        "AI Board of Sustainable Development",
        "AI Board of Wildlife Conservation",
        "AI Board of Marine Biology",
        "AI Board of Environmental Engineering",
        "AI Board of Urban Sustainability",
        "AI Board of Ecological Studies",
      ],
    },
    {
      heading: "Education and Language Boards",
      boards: [
        "AI Board of Teaching and Curriculum Design",
        "AI Board of Linguistics",
        "AI Board of English Language and Literature",
        "AI Board of Translation and Interpretation",
        "AI Board of Comparative Literature",
        "AI Board of Multilingual Studies",
      ],
    },
  ];

  // Function to generate short names
  const getShortName = (board) => {
    return board.replace(
      /^(AI Board of |AI Medical Board of |AI Business Board of )/,
      ""
    );
  };

  const handleBoardClick = (board) => {
    navigate(`/allboardspage/board/${encodeURIComponent(board)}`);
  };

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
          <div className="space-y-10">
            {boardCategories.map((category) => (
              <section key={category.heading}>
                <h2 className="text-3xl font-aeonik text-accent-blue mb-4">
                  {category.heading}
                </h2>
                <ul className="space-y-2">
                  {category.boards.map((board) => (
                    <li
                      key={board}
                      className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                      onClick={() => handleBoardClick(board)}
                    >
                      {getShortName(board)}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftCertification;
