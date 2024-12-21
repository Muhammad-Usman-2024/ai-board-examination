import React from "react";

const OurInstitution = () => {
  const institutions = [
    {
      name: "The First Institute",
      link: "https://thefirstinstitute.com/",
    },
    { name: "Institute Of Opportunity", link: "https://instituteofbillionaires.com/instituteofopportunity" },
    { name: "Institute Of Public Companies", link: "https://instituteofbillionaires.com/instituteofopublic" },
    { name: "Institute Of Billionheirs", link: "https://instituteofbillionaires.com/instituteofobillionheirs" },
    { name: "Institute Of Billionaires Guarantee LTD.", link: "https://instituteofbillionaires.com/guaranteecompany" },
    { name: "Unicorn Stock Exchange", link: "https://instituteofbillionaires.com/unicorn-stock-exchange" },
    { name: "Unicorns Chamber of Commerce & Industry", link: "https://instituteofbillionaires.com/unicorn-chamber-Commerce" },
    { name: "Billionaires Chamber of Commerce & Industry", link: "https://instituteofbillionaires.com/billionaires-chamber-Commerce" },
    { name: "Cartel & Syndicate Business School", link: "https://instituteofbillionaires.com/cartel-syndicated-business-school" },
    { name: "Aristocracy, Business & Command School", link: "https://instituteofbillionaires.com/aristocracybusinessschool" },
    { name: "Supply Chain Institute", link: "https://instituteofbillionaires.com/supplychaininstitute" },
    { name: "Institute of Founding Fathers", link: "https://instituteofbillionaires.com/foundingfatherinstitute" },
    {
      name: "Institute of Environment Protection & Conservation",
      link: "https://instituteofbillionaires.com/environmentprotectioninstitute",
    },
    { name: "Yves Saint Laurent School Of Fashion And Style", link: "https://instituteofbillionaires.com/yvessaint" },
    { name: "Leonardo Da Vinci School Of Arts Culture", link: "https://instituteofbillionaires.com/LeonardoDa" },
    { name: "Oprah Winfrey School Of Media Public Relations", link: "https://instituteofbillionaires.com/OprahWinfrey" },
    {
      name: "Sahibzada Yaqub Khan School Of Diplomacy International Relations",
      link: "https://instituteofbillionaires.com/SahibzadaYaqub",
    },
    {
      name: "Linus Pauling School Of Nutrition Health, Institute Of Billionaires",
      link: "https://instituteofbillionaires.com/LinusPauling",
    },
    {
      name: "Cesar Ritz Butlers School Of The Institute Of Billionaires",
      link: "https://instituteofbillionaires.com/CesarRitz",
    },
    { name: "Sam Altman AI School Of Business", link: "https://instituteofbillionaires.com/ArtificialIntelligence" },
    {
      name: "Gianni Agnelli Finishing School Of Institute Of Billionaires",
      link: "https://instituteofbillionaires.com/GianniAngelli",
    },
    { name: "Gates & Buffett School Of Philanthropy", link: "https://instituteofbillionaires.com/GatesBuffett" },
  ];

  return (
    <div className="font-barlow bg-main-light text-text-color min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-aeonik font-bold text-main-green uppercase mb-6 text-center">
          Our Institutions
        </h1>
        <p className="text-lg font-aeonik text-center text-text-color">
          At AIBX, we redefine education by offering a seamless, modular pathway
          from foundational learning to advanced degrees. Whether you're just
          starting your academic journey or seeking to master a specialized
          field, our programs are designed to fit your pace, aspirations, and
          the demands of the future.
        </p>
        <ul className="space-y-4 mt-6">
          {institutions.map((institution, index) => (
            <li
              key={index}
              className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <a
                href={institution.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-main-dark hover:text-main-accent transition-colors duration-300"
              >
                {institution.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OurInstitution;
