import React from "react";

const PartnerWithUs = () => {
  return (
    <section id="proposal" className="relative py-16 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-transparent rounded-lg shadow-lg p-8">
          <div className="text-center">
            <h3 className="text-4xl font-bold gradient-text mb-6 ">
              WANT TO PARTNER WITH US?
            </h3>
            <p className="text-gray-400 mb-8 font-semibold text-xl">
              Be part of the transformation and make a lasting impact by
              partnering with PEC HACKS, a premier hackathon event that brings
              together talented individuals to innovate and create
              groundbreaking solutions.
              <br />
              <br />
              As a partner, you'll gain valuable visibility among a highly
              engaged audience, connect with top tech talent, and position your
              brand as a leader in the industry. Join us in empowering the next
              generation of innovators and driving technological advancements.
            </p>
            <div className="mt-6">
              <a
                href="/assets/PEC-Hacks-2.0-Sponsor-Deck.pdf"
                className="inline-block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-cyan-400 hover:to-purple-500 text-black font-bold text-base px-8 py-3 rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/30 border-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Brochure
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerWithUs;
