import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const OurTeam = () => {
  const teamData = {
    leadOrganizer: {
      name: "Alex Thompson",
      role: "Lead Organizer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      social: {
        linkedin: "https://linkedin.com/in/alexthompson",
        email: "alex@company.com",
        instagram: "https://instagram.com/alexthompson",
        github: "https://github.com/alexthompson",
      },
    },
    eventDirectors: [
      {
        name: "Sarah Chen",
        role: "Event Director",
        image:
          "https://images.unsplash.com/photo-1494790108755-2616b332c1d8?w=300&h=300&fit=crop&crop=face",
        social: {
          linkedin: "https://linkedin.com/in/sarahchen",
          email: "sarah@company.com",
          instagram: "https://instagram.com/sarahchen",
        },
      },
      {
        name: "Michael Rodriguez",
        role: "Event Director",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
        social: {
          linkedin: "https://linkedin.com/in/michaelrodriguez",
          email: "michael@company.com",
          github: "https://github.com/michaelrodriguez",
        },
      },
    ],
    teamMembers: [
      {
        name: "Emily Johnson",
        role: "Editorial Head",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
        social: {
          linkedin: "https://linkedin.com/in/emilyjohnson",
          email: "emily@company.com",
          instagram: "https://instagram.com/emilyjohnson",
        },
      },
      {
        name: "David Park",
        role: "Sponsorship",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
        social: {
          linkedin: "https://linkedin.com/in/davidpark",
          email: "david@company.com",
          github: "https://github.com/davidpark",
        },
      },
      {
        name: "Lisa Wang",
        role: "Marketing",
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face",
        social: {
          linkedin: "https://linkedin.com/in/lisawang",
          email: "lisa@company.com",
          instagram: "https://instagram.com/lisawang",
        },
      },
      {
        name: "James Wilson",
        role: "Design & Media",
        image:
          "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face",
        social: {
          linkedin: "https://linkedin.com/in/jameswilson",
          email: "james@company.com",
          instagram: "https://instagram.com/jameswilson",
          github: "https://github.com/jameswilson",
        },
      },
      {
        name: "Maria Garcia",
        role: "Outreach",
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
        social: {
          linkedin: "https://linkedin.com/in/mariagarcia",
          email: "maria@company.com",
          instagram: "https://instagram.com/mariagarcia",
        },
      },
      {
        name: "Kevin Lee",
        role: "Hospitality",
        image:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
        social: {
          linkedin: "https://linkedin.com/in/kevinlee",
          email: "kevin@company.com",
          github: "https://github.com/kevinlee",
        },
      },
      {
        name: "Rachel Brown",
        role: "Web Ops",
        image:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
        social: {
          linkedin: "https://linkedin.com/in/rachelbrown",
          email: "rachel@company.com",
          instagram: "https://instagram.com/rachelbrown",
          github: "https://github.com/rachelbrown",
        },
      },
      {
        name: "Daniel Kim",
        role: "Marketing",
        image:
          "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=300&fit=crop&crop=face",
        social: {
          linkedin: "https://linkedin.com/in/danielkim",
          email: "daniel@company.com",
          github: "https://github.com/danielkim",
        },
      },
    ],
  };

  const TeamCard = ({ name, role, image, social, isLead = false }) => {
    const getSocialIcon = (platform) => {
      switch (platform) {
        case "linkedin":
          return <FaLinkedin size={20} />;
        case "email":
          return <HiMail size={20} />;
        case "instagram":
          return <FaInstagram size={20} />;
        case "github":
          return <FaGithub size={20} />;
        default:
          return null;
      }
    };

    const getSocialColor = (platform) => {
      switch (platform) {
        case "linkedin":
          return "hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]";
        case "email":
          return "hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(0,217,255,0.5)]";
        case "instagram":
          return "hover:text-pink-400 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]";
        case "github":
          return "hover:text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]";
        default:
          return "hover:text-cyan-400";
      }
    };

    return (
      <div
        className={`group relative bg-black/40 backdrop-blur-xl border rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:bg-black/20 ${
          isLead
            ? "border-2 border-cyan-400/50 shadow-[0_0_30px_rgba(0,217,255,0.3)] hover:shadow-[0_0_40px_rgba(0,217,255,0.5)]"
            : "border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
        }`}
      >
        <div className="relative flex items-center gap-6">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div
              className={`w-24 h-24 rounded-full overflow-hidden border-4 transition-all duration-500 ${
                isLead
                  ? "border-cyan-400/50 group-hover:border-cyan-400 shadow-[0_0_25px_rgba(0,217,255,0.4)]"
                  : "border-purple-500/50 group-hover:border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.3)]"
              }`}
            >
              <img
                src={image}
                alt={`${name} - ${role}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Lead Badge */}
            {isLead && (
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-black text-xs px-3 py-1 rounded-full font-bold shadow-[0_0_15px_rgba(0,217,255,0.5)] animate-pulse">
                LEAD
              </div>
            )}
          </div>

          {/* Name, Role and Social Icons */}
          <div className="flex-1">
            <div className="mb-2">
              <h3 className="text-xl font-bold text-white">{name}</h3>
              <p
                className={`text-sm font-medium ${
                  isLead ? "text-cyan-400" : "text-purple-400"
                }`}
              >
                {role}
              </p>
            </div>

            {/* Social Media Icons - Different behavior for mobile and desktop */}
            <div className="md:relative md:overflow-hidden md:h-0 md:group-hover:h-10 transition-all duration-500 ease-in-out">
              <div className="flex flex-wrap gap-2 md:absolute md:bottom-0 md:left-0 md:w-full md:pt-2 md:translate-y-10 md:group-hover:translate-y-0 md:transition-transform md:duration-500 md:ease-in-out">
                {Object.entries(social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 bg-black/50 border border-gray-600/50 rounded-full text-gray-400 transition-all duration-300 hover:scale-110 hover:border-transparent hover:bg-black/80 ${getSocialColor(
                      platform
                    )}`}
                    aria-label={`${name}'s ${platform}`}
                  >
                    {getSocialIcon(platform)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative min-h-screen bg-transparent overflow-hidden">
      {/* Gradient Background Blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-purple-500/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Main Heading */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-black mb-6 gradient-text tracking-wider">
            OUR TEAM
          </h1>
          <div className="text-2xl md:text-3xl font-light text-white/80 mb-4">
            Building the <span className="text-white font-bold">future</span>{" "}
            together
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Lead Organizer */}
        <div className="flex justify-center mb-20">
          <div className="w-full max-w-md">
            <TeamCard {...teamData.leadOrganizer} isLead={true} />
          </div>
        </div>

        {/* Event Directors */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Event Directors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamData.eventDirectors.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Core Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamData.teamMembers.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
