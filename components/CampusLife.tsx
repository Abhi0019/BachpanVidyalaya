export default function CampusLife() {
  return (
    <section
      id="campus-life"
      className="relative py-24 bg-linear-to-b from-[#f7fbff] to-[#e6f2ff] overflow-hidden"
    >
      {/* Floating Shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#FFD9C0]/40 rounded-full filter blur-3xl animate-float-slow"></div>
      <div className="absolute top-1/3 -right-16 w-56 h-56 bg-[#A0E7FF]/30 rounded-full filter blur-2xl animate-float-slower"></div>
      <div className="absolute bottom-10 left-1/4 w-48 h-48 bg-[#FFEEAA]/20 rounded-full filter blur-2xl animate-float-slow"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#06304A] mb-4">
            Campus Life at Bachpan Vidyalay
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl">
            A joyful, safe, and nurturing environment where every child learns, plays, and explores their passions.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              img: "/images/3.jpeg",
              title: "Sports & Fitness",
              desc: "Kids enjoy cricket, football, yoga, and fun relays, learning teamwork, coordination, and fitness habits early on.",
              icon: "/images/cricket.png",
            },
            {
              img: "/images/4.jpeg",
              title: "Creative Arts",
              desc: "Children explore painting, music, dance, and drama, enhancing creativity, confidence, and expression in a fun environment.",
              icon: "/images/art.png",
            },
            {
              img: "/images/3.jpeg",
              title: "STEM & Science",
              desc: "Hands-on experiments, coding, and discovery-based learning spark curiosity and critical thinking in young minds.",
              icon: "/images/flask.png",
            },
            {
              img: "/images/3.jpeg",
              title: "Outdoor Exploration",
              desc: "Nature walks, gardening, and playground adventures help children connect with the environment and develop curiosity.",
              icon: "/images/beach.png",
            },
            {
              img: "/images/3.jpeg",
              title: "Reading & Literacy",
              desc: "Storytime, interactive reading, and language games cultivate literacy skills and a lifelong love for books.",
              icon: "/images/book.png",
            },
            {
              img: "/images/3.jpeg",
              title: "Music & Performance",
              desc: "Singing, rhythm, and performance activities help children build confidence, coordination, and joy in creative expression.",
              icon: "/images/guitar.png",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500 overflow-hidden"
            >
              <img src={item.img} alt={item.title} className="w-full h-72 object-cover object-center rounded-t-3xl" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[#FFD86F]/20 flex items-center justify-center shadow-md">
                    <img src={item.icon} alt={item.title} className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#06304A]">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
