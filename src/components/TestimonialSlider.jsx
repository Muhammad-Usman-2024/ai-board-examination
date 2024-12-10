import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // For screens <= 1024px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // For screens <= 768px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      message:
        "The training and mentorship at IPC have been transformative. I came in with a vision, and IPC gave me the skills, knowledge, and confidence to turn that vision into a billion-dollar reality. Truly life-changing!",
      name: "John S.",
      role: "CEO, Public Company | United States",
    },
    {
      message:
        "IPC has redefined what it means to be a leader in the public sector. Their commitment to excellence and real-world application prepared me to take my company public with confidence. The international insights were invaluable.",
      name: "Yuki T.",
      role: "Entrepreneur and CEO, Technology Firm | Japan",
    },
    {
      message:
        "IPC’s rigorous training and focus on corporate ethics helped me build a solid foundation for my business. The network I gained has opened doors I never thought possible. I’m now leading in my field with pride.",
      name: "Aisha R.",
      role: "Business Owner, Real Estate | Dubai, UAE",
    },
    {
      message:
        "The hands-on approach and global perspective at IPC gave me the tools to make bold moves in my industry. I am grateful for the mentorship and support that guided me every step of the way.",
      name: "Mark L.",
      role: "Founder and CEO, Healthcare Startup | United Kingdom",
    },
    {
      message:
        "As a business owner, IPC helped me harness my potential and equipped me with the skills to lead with impact. Their focus on growth and ethics has empowered me to make a difference in my community.",
      name: "Nabirye K.",
      role: "Social Entrepreneur, Agriculture Sector | Uganda",
    },
    {
      message:
        "IPC provided more than education—it gave me the confidence to lead my company on an international scale. I’m now prepared to navigate global markets, and I owe much of that to IPC’s structured, visionary approach.",
      name: "Emily C.",
      role: "Co-Founder, Eco-Friendly Solutions | Australia",
    },
  ];

  return (
    <>
      <div className="container-fluid p-0 m-0 overflow-hidden">
        <div className="row g-0">
          <h2 className="text-center text-accent-blue font-aeonik text-3xl font-bold mb-10">
            What Clients Say
          </h2>
          <div className="col-12">
            <section className="bg-main-light py-12 px-6">
              <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="col-lg-4 col-md-4 col-12 p-4">
                    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                      <p className="text-text-color font-barlow text-lg">
                        "{testimonial.message}"
                      </p>
                      <h4 className="mt-4 text-main-green font-bold text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-accent-blue">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSlider;
