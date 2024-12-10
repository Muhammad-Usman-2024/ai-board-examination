import React from "react";

const HowItWork = () => {
  return (
    <div className="bg-main-light text-text-color font-aeonik p-6">
      <div className="w-full mx-auto">
        {/* Hero Section */}
        <div className="relative hero_image bg-accent-blue text-white text-center p-10 rounded-lg shadow-lg overflow-hidden">
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-opacity-75 bg-main-dark"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h1 className="text-3xl md:text-5xl font-bold animate-fade-in tracking-wide">
              How It Works: AI-Driven Education for the Future
            </h1>
            <p className="mt-4 text-lg md:text-xl font-barlow">
              Transforming learning with cutting-edge AI technology.
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 bg-accent-blue rounded-full w-40 h-40 opacity-50 blur-lg"></div>
          <div className="absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4 bg-main-light rounded-full w-32 h-32 opacity-50 blur-lg"></div>
        </div>

        {/* Content Section */}
        <div className="mt-10 space-y-8">
  <p className="text-lg md:text-xl font-barlow text-text-color">
    At AIBX, we’re transforming education with cutting-edge technology,
    ensuring students gain knowledge faster, smarter, and with global
    recognition.
  </p>

  <div className="space-y-6">
    <div>
      <h2 className="text-xl font-bold text-main-dark animate-slide-in">
        Step 1: Learn with AI Tutoring
      </h2>
      <p className="text-text-color">
        Every student is paired with an AI tutor powered by ChatGPT, delivering
        personalized lessons based on your pace and learning style. The AI adapts
        to your strengths and areas for improvement, providing real-time feedback
        and guidance.
      </p>
    </div>

    <div>
      <h2 className="text-xl font-bold text-main-dark animate-slide-in">
        Step 2: Modular Programs for Every Level
      </h2>
      <p className="text-text-color">
        From Grade 1 to PhD, our modular system allows you to progress seamlessly
        through subjects, skipping irrelevant content. Advance at your own pace
        while meeting time-bound milestones to stay disciplined and focused.
      </p>
    </div>

    <div>
      <h2 className="text-xl font-bold text-main-dark animate-slide-in">
        Step 3: Take AI-Designed Exams
      </h2>
      <p className="text-text-color">
        Our exams are intelligently crafted to test your understanding and
        problem-solving abilities. Each exam is secure, unbiased, and administered
        online or at global examination centers.
      </p>
    </div>

    <div>
      <h2 className="text-xl font-bold text-main-dark animate-slide-in">
        Step 4: Earn Blockchain-Verified Certifications
      </h2>
      <p className="text-text-color">
        Your achievements are stored securely on the blockchain, making your
        credentials tamper-proof and globally verifiable. Certifications are tied
        to your performance, requiring a score in the 90th percentile or higher,
        ensuring you graduate as a top-tier professional.
      </p>
    </div>

    <div>
      <h2 className="text-xl font-bold text-main-dark animate-slide-in">
        Step 5: Unlock Global Opportunities
      </h2>
      <p className="text-text-color">
        With certifications recognized across industries, access international job
        placements and join a future-ready workforce.
      </p>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default HowItWork;
