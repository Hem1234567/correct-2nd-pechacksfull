import React from "react";

const EventGlimpse = () => {
  // Photo data
  const photos = [
    {
      front:
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop",
      back: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop",
      title: "Opening Ceremony",
      backTitle: "Behind the Scenes",
      size: "large",
    },
    {
      front:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop",
      back: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop",
      title: "Tech Innovation",
      backTitle: "Code Workshop",
      size: "medium",
    },
    {
      front:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop",
      back: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop",
      title: "Final Presentations",
      backTitle: "Digital Matrix",
      size: "small",
    },
    {
      front:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=400&fit=crop",
      back: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=400&fit=crop",
      title: "Code Development",
      backTitle: "Team Collaboration",
      size: "tall",
    },
    {
      front:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop",
      back: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop",
      title: "Networking Hub",
      backTitle: "Innovation Lab",
      size: "medium",
    },
    {
      front:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=400&fit=crop",
      back: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=400&fit=crop",
      title: "Coding Marathon",
      backTitle: "Debug Sessions",
      size: "small",
    },
    {
      front:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=400&fit=crop",
      back: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop",
      title: "AI Workshop",
      backTitle: "Machine Learning",
      size: "small",
    },
    {
      front:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop",
      back: "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=400&h=400&fit=crop",
      title: "Database Design",
      backTitle: "System Architecture",
      size: "wide",
    },
    {
      front:
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=400&fit=crop",
      back: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=400&fit=crop",
      title: "Frontend Magic",
      backTitle: "UI/UX Design",
      size: "small",
    },
    {
      front:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop",
      back: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=400&h=400&fit=crop",
      title: "Team Building",
      backTitle: "Collaboration",
      size: "tall",
    },
    {
      front:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop",
      back: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400&h=400&fit=crop",
      title: "Innovation Fair",
      backTitle: "Tech Showcase",
      size: "medium",
    },
    {
      front:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop",
      back: "https://images.unsplash.com/photo-1515378791036-0648a814c963?w=400&h=400&fit=crop",
      title: "Awards Night",
      backTitle: "Victory Moment",
      size: "small",
    },
  ];

  const getSizeClasses = (size) => {
    switch (size) {
      case "large":
        return "col-span-2 row-span-2";
      case "medium":
        return "col-span-1 row-span-1";
      case "wide":
        return "col-span-2 row-span-1";
      case "tall":
        return "col-span-1 row-span-2";
      case "small":
      default:
        return "col-span-1 row-span-1";
    }
  };

  return (
    <section className="relative h-screen bg-transparent overflow-hidden flex flex-col">
      <div className="relative z-10 flex flex-col h-full w-full px-8 py-8">
        <div className="flex-shrink-0 mb-8">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 gradient-text">
            EVENT GLIMPSES
          </h2>
        </div>

        <div className="flex-1 grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 grid-rows-5 gap-4 overflow-hidden mx-15">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer overflow-hidden rounded-lg ${getSizeClasses(
                photo.size
              )} transform transition-all duration-300 hover:z-20`}
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-black rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 transition-all duration-700 ease-out group-hover:scale-110 group-hover:-translate-x-full group-hover:opacity-0 group-hover:rotate-2">
                    <img
                      src={photo.front}
                      alt={photo.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="text-cyan-400 font-bold text-sm truncate drop-shadow-lg">
                          {photo.title}
                        </h3>
                        <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent rounded-full mt-1 transition-all duration-300 group-hover:w-full"></div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 transition-all duration-700 ease-out translate-x-full opacity-0 scale-95 rotate-[-2deg] group-hover:translate-x-0 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0">
                    <img
                      src={photo.back}
                      alt={photo.backTitle}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="text-pink-400 font-bold text-sm truncate drop-shadow-lg">
                          {photo.backTitle}
                        </h3>
                        <div className="w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mt-1 transition-all duration-700 delay-300 group-hover:w-full"></div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-3 right-3 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                  <div
                    className="absolute top-6 right-6 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="absolute top-2 right-8 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-700"
                    style={{ animationDelay: "0.4s" }}
                  ></div>

                  <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-pink-400 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 transform scale-0 group-hover:scale-100"></div>
                </div>
              </div>

              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_40px_rgba(0,217,255,0.4)] group-hover:shadow-[0_0_60px_rgba(236,72,153,0.6)]"></div>
            </div>
          ))}
        </div>

        <div className="flex-shrink-0 mt-6 text-center">
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Experience the energy and innovation through these captured moments
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventGlimpse;
