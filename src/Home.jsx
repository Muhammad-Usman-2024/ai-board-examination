import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[url('./assets/images/Hero_Back.jpg')] bg-cover bg-center bg-no-repeat h-screen hero_image lg:h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 to-gray-900/30"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:h-full lg:flex lg:items-center text-main-light">
          <div className="max-w-2xl lg:max-w-4xl text-center lg:text-left">
            <h1 className="text-3xl mt-4 sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-barlow uppercase leading-snug sm:leading-tight">
              <span className="text-white">Welcome to AIBX</span>
            </h1>
            <h1 className="text-3xl mt-4 sm:text-4xl md:text-5xl lg:text-5xl font-extrabold font-barlow uppercase leading-snug sm:leading-tight">
              The World’s First
              <span className="text-main-green">
                &nbsp;Artificial <br />
                Intelligence
              </span>{" "}
              Boards OF Examination
            </h1>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl font-aeonik leading-relaxed">
              Revolutionizing learning with AI-powered exams, Blockchain
              certifications, and global opportunities."
            </p>
            <div className="mt-8">
              <Link
                to="/boardselector"
                className="inline-block bg-main-green text-main-dark px-6 py-3 rounded-lg text-lg font-bold shadow-lg hover:bg-accent-blue hover:text-main-light transition-all duration-300"
              >
                Start Your Journey Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-main-green py-12 px-6 sm:px-12 lg:px-16 mt-12">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-barlow font-extrabold text-white mb-6">
            Ours Boards
          </h2>
          <h2 className="text-4xl sm:text-5xl font-barlow font-extrabold text-main-dark mb-12">
            Comprehensive List of AI Boards of Examination
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
          <div className="p-6 bg-white shadow-lg rounded-3xl hover:shadow-2xl transition">
            <h3 className="text-2xl font-barlow font-bold text-dark mb-4">
              STEM and Technology Boards
            </h3>
            <Link to="/allboardspage">
              <button className="bg-main-dark text-white py-2 px-4 rounded-full hover:bg-dark transition">
                Learn More
              </button>
            </Link>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-3xl hover:shadow-2xl transition">
            <h3 className="text-2xl font-barlow font-bold text-dark mb-4">
              Medicine and Healthcare Boards
            </h3>
            <Link to="/allboardspage">
              <button className="bg-main-dark text-white py-2 px-4 rounded-full hover:bg-dark transition">
                Learn More
              </button>
            </Link>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-3xl hover:shadow-2xl transition">
            <h3 className="text-2xl font-barlow font-bold text-dark mb-4">
              Business and Management Boards
            </h3>
            <Link to="/allboardspage">
              <button className="bg-main-dark text-white py-2 px-4 rounded-full hover:bg-dark transition">
                Learn More
              </button>
            </Link>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-3xl hover:shadow-2xl transition">
            <h3 className="text-2xl font-barlow font-bold text-dark mb-4">
              Creative Arts and Design Boards
            </h3>
            <Link to="/allboardspage">
              <button className="bg-main-dark text-white py-2 px-4 rounded-full hover:bg-dark transition">
                Learn More
              </button>
            </Link>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-3xl hover:shadow-2xl transition">
            <h3 className="text-2xl font-barlow font-bold text-dark mb-4">
              Vocational and Technological Boards
            </h3>
            <Link to="/allboardspage">
              <button className="bg-main-dark text-white py-2 px-4 rounded-full hover:bg-dark transition">
                Learn More
              </button>
            </Link>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-3xl hover:shadow-2xl transition">
            <h3 className="text-[23px] font-barlow font-bold text-dark mb-4">
              Social Sciences & Humanities Boards
            </h3>
            <Link to="/allboardspage">
              <button className="bg-main-dark text-white py-2 px-4 rounded-full hover:bg-dark transition">
                Learn More
              </button>
            </Link>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-3xl hover:shadow-2xl transition">
            <h3 className="text-2xl font-barlow font-bold text-dark mb-4">
              Law and Governance Boards
            </h3>
            <Link to="/allboardspage">
              <button className="bg-main-dark text-white py-2 px-4 rounded-full hover:bg-dark transition">
                Learn More
              </button>
            </Link>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-3xl hover:shadow-2xl transition">
            <h3 className="text-2xl font-barlow font-bold text-dark mb-4">
              Environment & Sustainability Boards
            </h3>
            <Link to="/allboardspage">
              <button className="bg-main-dark text-white py-2 px-4 rounded-full hover:bg-dark transition">
                Learn More
              </button>
            </Link>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-3xl hover:shadow-2xl transition">
            <h3 className="text-2xl font-barlow font-bold text-dark mb-4">
              Education and Language Boards
            </h3>
            <Link to="/allboardspage">
              <button className="bg-main-dark text-white py-2 px-4 rounded-full hover:bg-dark transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

 
      <section className="bg-main-light py-16 px-6 sm:px-12 lg:px-16">
  <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
    {/* First Section */}
    <div>
      <h2 className="text-4xl sm:text-5xl font-barlow font-extrabold text-main-dark mb-6">
        Certifications & Degrees
      </h2>
      <p className="text-lg font-aeonik text-text-color">
        At AIBX, we redefine education by offering a seamless, modular
        pathway from foundational learning to advanced degrees. Whether
        you're just starting your academic journey or seeking to master a
        specialized field, our programs are designed to fit your pace,
        aspirations, and the demands of the future.
      </p>
      <Link
        to="/nft-certifications"
        className="mt-8 inline-block bg-main-green text-main-dark px-6 py-3 rounded-lg text-lg font-bold shadow-lg hover:bg-accent-blue hover:text-main-light transition-all duration-300"
      >
        Learn More
      </Link>
    </div>

    {/* Second Section */}
    <div>
      <h2 className="text-4xl sm:text-5xl font-barlow font-extrabold text-main-dark mb-6">
        Our Institutions
      </h2>
      <p className="text-lg font-aeonik text-text-color">
        At AIBX, we redefine education by offering a seamless, modular
        pathway from foundational learning to advanced degrees. Whether
        you're just starting your academic journey or seeking to master a
        specialized field, our programs are designed to fit your pace,
        aspirations, and the demands of the future.
      </p>
      <Link
        to="/our-institutions"
        className="mt-8 inline-block bg-main-green text-main-dark px-6 py-3 rounded-lg text-lg font-bold shadow-lg hover:bg-accent-blue hover:text-main-light transition-all duration-300"
      >
        Learn More
      </Link>
    </div>
  </div>
</section>


      <div className="homepage">
        <header className="hero_image flex flex-col items-center justify-center text-center bg-gradient-to-r from-main-light to-main-green py-20">
          <h1 className="text-main-dark font-aeonik text-5xl drop-shadow-md">
            AIBX Certifications: Where Excellence Meets Opportunity
          </h1>
          <p className="text-text-color font-barlow text-lg mt-4 max-w-2xl">
            Only the Top 10% Earn Blockchain-Powered Global Recognition
          </p>

          <p className="text-main-dark font-aeonik text-xl text-center leading-relaxed max-w-4xl mx-auto mt-10">
            At AIBX, we redefine what it means to succeed. Our certifications
            are not just about passing an exam—they are your gateway to global
            recognition, prestigious opportunities, and a future of
            possibilities. Only the top 10% receive blockchain-secured
            certifications, ensuring you stand out in the world.
          </p>

          <section className="p-3 rounded-lg mx-4 md:mx-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <div className="card p-8 bg-gradient-to-b from-main-light to-white text-center shadow-lg hover:shadow-xl rounded-lg transition-transform transform hover:scale-105">
                <h3 className="text-accent-blue text-2xl font-aeonik mb-4">
                  Top 1%: The Elite Circle
                </h3>
                <p className="text-text-color mb-6 leading-relaxed">
                  Proof of unmatched skills, global summits, leadership events,
                  and Hall of Fame recognition await you.
                </p>
                <Link
                  to="/elite-circle"
                  className="btn mt-4 py-2 px-6 bg-accent-blue text-white rounded-full shadow hover:bg-main-dark transition"
                >
                  Learn More
                </Link>
              </div>

              <div className="card p-8 bg-gradient-to-b from-main-light to-white text-center shadow-lg hover:shadow-xl rounded-lg transition-transform transform hover:scale-105">
                <h3 className="text-accent-blue text-2xl font-aeonik mb-4">
                  Top 5%: Excellence Achievers
                </h3>
                <p className="text-text-color mb-6 leading-relaxed">
                  Exclusive networking, global NFT certification, and
                  preferential visibility for top opportunities.
                </p>
                <Link
                  to="/excellence-achievers"
                  className="btn mt-4 py-2 px-6 bg-accent-blue text-white rounded-full shadow hover:bg-main-dark transition"
                >
                  Learn More
                </Link>
              </div>

              <div className="card p-8 bg-gradient-to-b from-main-light to-white text-center shadow-lg hover:shadow-xl rounded-lg transition-transform transform hover:scale-105">
                <h3 className="text-accent-blue text-2xl font-aeonik mb-4">
                  Top 10%: Distinguished Achievers
                </h3>
                <p className="text-text-color mb-6 leading-relaxed">
                  Prestige badges, personalized job guidance, and pathways to
                  advanced AIBX programs.
                </p>
                <Link
                  to="/distinguished-achievers"
                  className="btn mt-4 py-2 px-6 bg-accent-blue text-white rounded-full shadow hover:bg-main-dark transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </section>
        </header>
      </div>

      {/* How It Works Section */}
      <section className="bg-main-green py-16 px-6 mt-12 sm:px-12 lg:px-16">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-barlow font-extrabold text-main-dark mb-6">
            NFT-Based
          </h2>
          <p className="text-xl font-aeonik text-text-color mb-12">
            Certification Process
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto">
          <div className="p-6 bg-white shadow-lg rounded-3xl hover:shadow-2xl transition">
            <h3 className="text-2xl font-barlow font-bold text-dark mb-4">
              Own Your Certification
            </h3>
            <p className="text-text-color font-aeonik">
              Your certification is minted as an NFT, ensuring authenticity and
              ownership in a digital, blockchain-secured format.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-3xl hover:shadow-2xl transition">
            <h3 className="text-2xl font-barlow font-bold text-dark mb-4">
              Understand NFTs
            </h3>
            <p className="text-text-color font-aeonik">
              Learn how NFTs provide unique, verifiable credentials that you own
              and control, stored securely on the blockchain.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-3xl hover:shadow-2xl transition">
            <h3 className="text-2xl font-barlow font-bold text-dark mb-4">
              Access Your NFT
            </h3>
            <p className="text-text-color font-aeonik">
              Connect your wallet to view and manage your NFT-based
              certification conveniently online.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-3xl hover:shadow-2xl transition">
            <h3 className="text-2xl font-barlow font-bold text-dark mb-4">
              Showcase Your Credentials
            </h3>
            <p className="text-text-color font-aeonik">
              Use your NFT to validate your achievements and stand out with
              blockchain-verified credentials.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-main-light py-16 px-6 sm:px-12 lg:px-16">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-barlow font-extrabold text-main-dark mb-6">
            Key Features
          </h2>
          <p className="text-xl font-aeonik text-text-color mb-12">
            Innovative, Transparent, and Future-Focused
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
          <div className="p-6 bg-white shadow-lg rounded-3xl hover:shadow-2xl transition">
            <h3 className="text-2xl font-barlow font-bold text-dark mb-4">
              Modular Certifications
            </h3>
            <p className="text-text-color font-aeonik">
              Certifications tailored to meet your career goals across various
              industries.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-3xl hover:shadow-2xl transition">
            <h3 className="text-2xl font-barlow font-bold text-dark mb-4">
              AI-Powered Learning
            </h3>
            <p className="text-text-color font-aeonik">
              Personalized AI tutors to guide your study journey.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-3xl hover:shadow-2xl transition">
            <h3 className="text-2xl font-barlow font-bold text-dark mb-4">
              Blockchain Credentials
            </h3>
            <p className="text-text-color font-aeonik">
              Secure, verifiable, and globally recognized certifications.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-main-green py-16 px-6 sm:px-12 lg:px-16">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-barlow font-extrabold text-main-dark mb-6">
            How It Works: AI-Driven Education for the Future
          </h2>
          <p className="text-xl font-aeonik text-text-color mb-12">
            At AIBX, we’re transforming education with cutting-edge technology,
            ensuring students gain knowledge faster, smarter, and with global
            recognition.
          </p>
          <Link
            to="/howitwork"
            className="inline-block bg-accent-blue text-white px-6 py-3 rounded-lg text-lg font-bold shadow-lg hover:bg-accent-blue hover:text-main-light transition-all duration-300"
          >
            Read More
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-main-light py-16 px-6 sm:px-12 lg:px-16">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-barlow font-extrabold text-main-dark mb-6">
            About Us
          </h2>
          <p className="text-xl sm:text-2xl font-aeonik text-text-color mb-12">
            Transforming Certification with Innovation
          </p>
          <p className="text-lg font-aeonik text-text-color">
            AIBX is the world’s first AI-powered examination board, offering
            global degree equivalency certifications with unmatched transparency
            and innovation. Using AI and blockchain, we provide modular programs
            tailored for every field, ensuring accessibility and global
            recognition.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-main-green py-16 px-6 sm:px-12 lg:px-16">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-barlow font-extrabold text-dark mb-6">
            Transparent Pricing
          </h2>
          <p className="text-xl font-aeonik text-dark mb-12">
            Affordable, Transparent, and No Hidden Fees
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-3xl hover:shadow-2xl transition">
              <h3 className="text-2xl font-barlow font-bold text-main-dark mb-4">
                Basic Certification
              </h3>
              <p className="text-main-dark">$99 per module</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-3xl hover:shadow-2xl transition">
              <h3 className="text-2xl font-barlow font-bold text-main-dark mb-4">
                Advanced Certification
              </h3>
              <p className="text-main-dark">$199 per module</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-3xl hover:shadow-2xl transition">
              <h3 className="text-2xl font-barlow font-bold text-main-dark mb-4">
                Premium Certification
              </h3>
              <p className="text-main-dark">$299 per module</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-main-light py-16 px-6 sm:px-12 lg:px-16">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-barlow font-extrabold text-main-dark mb-6">
            Contact Us
          </h2>
          <form className="space-y-6 max-w-md mx-auto">
            <input
              type="text"
              className="w-full p-4 rounded-md"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="w-full p-4 rounded-md"
              placeholder="Your Email"
            />
            <textarea
              className="w-full p-4 rounded-md"
              rows="4"
              placeholder="Your Message"
            ></textarea>
            <button className="w-full bg-main-dark text-white py-3 rounded-lg hover:bg-main-green transition">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-main-green py-16 px-6 sm:px-12 lg:px-16">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-barlow font-extrabold text-dark mb-6">
            Insights & Blog
          </h2>
          <p className="text-lg font-aeonik text-dark">
            Discover articles on AI in education, blockchain technology, and
            success stories from certified professionals.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
