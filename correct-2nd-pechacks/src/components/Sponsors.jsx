import React from "react";

const Sponsors = () => {
  // Sponsors data organized by category
  const sponsorCategories = [
    {
      title: "TITLE SPONSOR",
      sponsors: [
        {
          name: "Logitech",
          url: "https://www.logitech.com/en-in?srsltid=AfmBOoppVprmkK7HwNRfWqIc7ddtAuxLHIWmTS9CknNzN4OSSQJYIxEt",
          logo: "https://assets.pechacks.org/sponsors/Logitech.PNG",
        },
      ],
    },
    {
      title: "GOLD SPONSORS",
      sponsors: [
        {
          name: "Devfolio",
          url: "https://devfolio.co/",
          logo: "https://assets.pechacks.org/sponsors/4_lqjtfq.png",
        },
        {
          name: "Polygon",
          url: "https://polygon.technology/",
          logo: "https://assets.pechacks.org/sponsors/6_cic6mb.png",
        },
        {
          name: "Aptos",
          url: "https://aptos.dev/",
          logo: "https://assets.pechacks.org/sponsors/44_rgsqli.png",
        },
      ],
    },
    {
      title: "SILVER SPONSORS",
      sponsors: [
        {
          name: "GitHub",
          url: "https://github.com/",
          logo: "https://assets.pechacks.org/sponsors/35_isudye.png",
        },
        {
          name: "ETHIndia",
          url: "https://ethindia.co/",
          logo: "https://assets.pechacks.org/sponsors/37_q1zwzr.png",
        },
        {
          name: "Loft Labs",
          url: "https://www.loft.sh/",
          logo: "https://assets.pechacks.org/sponsors/loftlabs.png",
        },
        {
          name: "GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/?ref=next_article",
          logo: "https://assets.pechacks.org/sponsors/34_mmqmvx.png",
        },
        {
          name: "DevDock",
          url: "https://devdock.ai/",
          logo: "https://assets.pechacks.org/sponsors/devdock.png",
        },
      ],
    },
    {
      title: "HACKATHON PARTNER",
      sponsors: [
        {
          name: "MLH",
          url: "https://mlh.io/seasons/2025/events",
          logo: "https://assets.pechacks.org/img/MLH_Logo.png",
        },
      ],
    },
    {
      title: "BRONZE SPONSORS",
      sponsors: [
        {
          name: "NavanAi",
          url: "https://niia.ai/",
          logo: "https://assets.pechacks.org/sponsors/38_jnxltv.png",
        },
        {
          name: "Axure",
          url: "https://www.axure.com/",
          logo: "https://assets.pechacks.org/sponsors/39_beepgg.png",
        },
        {
          name: "Flatlogic",
          url: "https://flatlogic.com/",
          logo: "https://assets.pechacks.org/sponsors/40_wrwlex.png",
        },
        {
          name: "Nordpass",
          url: "https://nordpass.com/",
          logo: "https://assets.pechacks.org/sponsors/31_v3hzdi.png",
        },
        {
          name: "NordVPN",
          url: "https://nordvpn.com/",
          logo: "https://assets.pechacks.org/sponsors/30_jrd5ot.png",
        },
        {
          name: "Balsamiq",
          url: "https://balsamiq.com/",
          logo: "https://assets.pechacks.org/sponsors/10_o1krlb.png",
        },
        {
          name: "Incogni",
          url: "https://incogni.com/",
          logo: "https://assets.pechacks.org/sponsors/32_tsgwlg.png",
        },
        {
          name: "Saily",
          url: "https://saily.com/",
          logo: "https://assets.pechacks.org/sponsors/46_rqbqwd.png",
        },
        {
          name: "Slido",
          url: "https://www.slido.com/",
          logo: "https://assets.pechacks.org/sponsors/17_spdvko.png",
        },
        {
          name: "Beeceptor",
          url: "https://beeceptor.com/",
          logo: "https://assets.pechacks.org/sponsors/45_gajtz0.png",
        },
        {
          name: "Interview Buddy",
          url: "https://interviewbuddy.net/",
          logo: "https://assets.pechacks.org/sponsors/1_ebyhzk.png",
        },
        {
          name: ".XYZ",
          url: "https://gen.xyz/",
          logo: "https://assets.pechacks.org/sponsors/3_bhtjr3.png",
        },
        {
          name: "Microsoft Learn",
          url: "https://learn.microsoft.com/en-us/",
          logo: "https://assets.pechacks.org/sponsors/microsoft%20learn.png",
        },
        {
          name: "Verbwire",
          url: "https://www.verbwire.com/",
          logo: "https://assets.pechacks.org/sponsors/verbwire.png",
        },
        {
          name: "MongoDB",
          url: "https://www.mongodb.com/",
          logo: "https://assets.pechacks.org/sponsors/MongoDB.png",
        },
        {
          name: "Auth0",
          url: "https://auth0.com/",
          logo: "https://assets.pechacks.org/sponsors/Auth0.png",
        },
        {
          name: "Cloudflare",
          url: "https://www.cloudflare.com/",
          logo: "https://assets.pechacks.org/sponsors/Cloudflare.png",
        },
        {
          name: "Databricks",
          url: "https://www.databricks.com/",
          logo: "https://assets.pechacks.org/sponsors/databricks.png",
        },
        {
          name: "Midnight",
          url: "https://midnight.io/",
          logo: "https://assets.pechacks.org/sponsors/midnight.png",
        },
      ],
    },
    {
      title: "COMMUNITY PARTNERS",
      sponsors: [
        {
          name: "SWOC",
          url: "https://www.socialwinterofcode.com/",
          logo: "https://assets.pechacks.org/sponsors/41_spvd92.png",
        },
        {
          name: "GDG SNS",
          url: "https://www.linkedin.com/company/gdgoncampus-snscollegeofengineering/",
          logo: "https://assets.pechacks.org/sponsors/66_icnnvi.png",
        },
        {
          name: "Avishkaar",
          url: "https://avishkaar2024.adityatekkali.edu.in/",
          logo: "https://assets.pechacks.org/sponsors/43_artcxa.png",
        },
        {
          name: "GDG JIT",
          url: "https://gdg.community.dev/gdg-on-campus-jansons-institute-of-technology-coimbatore-india/",
          logo: "https://assets.pechacks.org/sponsors/67_ydqnop.png",
        },
        {
          name: "Hacksist",
          url: "https://www.linkedin.com/company/hack-club-sist/",
          logo: "https://assets.pechacks.org/sponsors/21_twwofk.png",
        },
        {
          name: "Blockseblock",
          url: "https://blockseblock.com/",
          logo: "https://assets.pechacks.org/sponsors/48_cagyug.png",
        },
        {
          name: "Chennai React",
          url: "https://www.linkedin.com/company/chennaireact/",
          logo: "https://assets.pechacks.org/sponsors/49_wfgqbe.png",
        },
        {
          name: "Newbie",
          url: "https://www.linkedin.com/company/newbiev6/",
          logo: "https://assets.pechacks.org/sponsors/50_orq3vi.png",
        },
        {
          name: "GDG GEC Palakkad",
          url: "https://gdg.community.dev/gdg-on-campus-government-engineering-college-palakkad-india/",
          logo: "https://assets.pechacks.org/sponsors/20_hil656.png",
        },
        {
          name: "Intellexa REC",
          url: "https://www.linkedin.com/company/intellexa-rec/",
          logo: "https://assets.pechacks.org/sponsors/52_fcneyn.png",
        },
        {
          name: "GDG Kalasalingam",
          url: "https://gdg.community.dev/gdg-on-campus-kalasalingam-academy-of-research-education-krishnankoil-india/",
          logo: "https://assets.pechacks.org/sponsors/53_ghnbbs.png",
        },
        {
          name: "CISC",
          url: "https://crescent.education/student-affairs/crescent-innovation-and-startup-club/",
          logo: "https://assets.pechacks.org/sponsors/54_r6i9d8.png",
        },
        {
          name: "Builders Qoneqt",
          url: "https://lu.ma/k9lnt71x",
          logo: "https://assets.pechacks.org/sponsors/55_zu963p.png",
        },
        {
          name: "GDG KG College",
          url: "https://gdg.community.dev/gdg-on-campus-kg-college-of-arts-science-coimbatore-india/",
          logo: "https://assets.pechacks.org/sponsors/56_cbv6vm.png",
        },
        {
          name: "Student Developer Cell",
          url: "#",
          logo: "https://assets.pechacks.org/sponsors/57_m9lc4v.png",
        },
        {
          name: "AI Club MKCE",
          url: "https://aiclub24.web.app/",
          logo: "https://assets.pechacks.org/sponsors/58_iko0qq.png",
        },
        {
          name: "GDG VIT Chennai",
          url: "https://gdg.community.dev/gdg-on-campus-vellore-institute-of-technology-chennai-india/",
          logo: "https://assets.pechacks.org/sponsors/59_mcwhz8.png",
        },
        {
          name: "GDG ADGIPS",
          url: "https://gdg.community.dev/gdg-on-campus-dr-akhilesh-das-gupta-institute-of-professional-studies-delhi-india/",
          logo: "https://assets.pechacks.org/sponsors/GDG%20ADGIPS.png",
        },
        {
          name: "CS Club IIITDM",
          url: "https://www.instagram.com/cs.club.iiitdm",
          logo: "https://assets.pechacks.org/sponsors/60_hpoprw.png",
        },
        {
          name: "Event Hub",
          url: "https://www.whatsapp.com/channel/0029VajqSxIChq6M1DxI4t2X",
          logo: "https://assets.pechacks.org/sponsors/61_wvwjgi.png",
        },
        {
          name: "Algozenith",
          url: "https://www.linkedin.com/company/maharana-pratap-engineering-college/",
          logo: "https://assets.pechacks.org/sponsors/62_egcsnd.png",
        },
        {
          name: "SSN Coding Club",
          url: "https://www.linkedin.com/company/ssn-coding-club/",
          logo: "https://assets.pechacks.org/sponsors/63_knfqc5.png",
        },
        {
          name: "Connect Verse",
          url: "https://connectverse.co.uk/#",
          logo: "https://assets.pechacks.org/sponsors/65_ing6pq.png",
        },
        {
          name: "Hack Hustle",
          url: "https://hackhustle.techsociety.saveetha.in/",
          logo: "https://assets.pechacks.org/sponsors/hackhustle_g4dddf.png",
        },
        {
          name: "GDG PEC",
          url: "https://gdg.community.dev/gdg-on-campus-panimalar-engineering-college-chennai-india/",
          logo: "https://assets.pechacks.org/sponsors/GDG%20PEC.png",
        },
        {
          name: "CNCF",
          url: "https://www.linkedin.com/company/cncf-madurai/",
          logo: "https://assets.pechacks.org/sponsors/cncf.png",
        },
        {
          name: "GDG SIMATS",
          url: "https://gdg.community.dev/gdg-on-campus-saveetha-school-of-engineering-thandalam-india/",
          logo: "https://assets.pechacks.org/sponsors/GDG%20SIMATS.png",
        },
        {
          name: "Namespace",
          url: "https://www.namespacecomm.in/",
          logo: "https://assets.pechacks.org/sponsors/namespace.png",
        },
        {
          name: "GDG PIT",
          url: "https://gdg.community.dev/gdg-on-campus-panimalar-institute-of-technology-chennai-india/",
          logo: "https://assets.pechacks.org/sponsors/GDG%20PIT.png",
        },
        {
          name: "ACE",
          url: "https://vips.edu/vsit/committees/ACE",
          logo: "https://assets.pechacks.org/sponsors/ACE.png",
        },
        {
          name: "Devshouse",
          url: "https://www.devshouse.tech/",
          logo: "https://assets.pechacks.org/sponsors/devhouse.png",
        },
        {
          name: "GDG KSRIET",
          url: "https://gdg.community.dev/gdg-on-campus-ksr-institute-for-engineering-technology-namakkal-india/",
          logo: "https://assets.pechacks.org/sponsors/gdg%20ksriet.png",
        },
        {
          name: "GDG ABES",
          url: "https://gdg.community.dev/gdg-on-campus-abes-engineering-college-ghaziabad-india/",
          logo: "https://assets.pechacks.org/sponsors/gdg%20abes.png",
        },
        {
          name: "Coding Club SVCE",
          url: "https://www.instagram.com/codingclub_svcolleges",
          logo: "https://assets.pechacks.org/sponsors/coding%20club%20svce.png",
        },
        {
          name: "GDG SVCE",
          url: "https://gdg.community.dev/gdg-on-campus-sri-venkateswara-college-of-engineering-tirupati-india/",
          logo: "https://assets.pechacks.org/sponsors/gdg%20svce.png",
        },
        {
          name: "THE CHEESE CAKE",
          url: "https://www.thecheesecake.xyz/",
          logo: "https://assets.pechacks.org/sponsors/cheesecake.png",
        },
      ],
    },
    {
      title: "MEDIA PARTNER",
      sponsors: [
        {
          name: "The Snippet App",
          url: "https://www.instagram.com/the_snippet_app",
          logo: "https://assets.pechacks.org/sponsors/64_q9ygns.png",
        },
      ],
    },
  ];

  return (
    <section
      id="sponsors"
      className="relative overflow-hidden py-16 bg-transparent text-white"
    >
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-8xl font-bold gradient-text mb-2">
            PARTNERS
          </h1>
        </div>

        {/* Sponsors Grid */}
        <div className="space-y-16">
          {sponsorCategories.map((category, index) => (
            <div key={index} className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-300">
                {category.title}
              </h3>
              <div
                className={`flex flex-wrap justify-center gap-8 ${
                  category.title === "TITLE SPONSOR" ? "max-w-2xl mx-auto" : ""
                }`}
              >
                {category.sponsors.map((sponsor, idx) => (
                  <a
                    key={idx}
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-transform duration-300 hover:scale-105 ${
                      category.title === "TITLE SPONSOR"
                        ? "w-full"
                        : "w-40 md:w-48"
                    }`}
                  >
                    <div className="bg-white bg-opacity-10 rounded-lg p-4 h-full flex items-center justify-center">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className={`object-contain ${
                          category.title === "TITLE SPONSOR" ? "h-32" : "h-24"
                        }`}
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
