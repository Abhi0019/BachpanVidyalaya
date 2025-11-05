export default function Programs() {
  return (
    <section id="academics" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#06304A] mb-16">
          Our Academic Programs
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Pre-Primary */}
          <ProgramCard
            icon={
              <svg className="w-12 h-12 text-[#FFAA33]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4z" />
                <path d="M6 20c0-3.31 2.69-6 6-6s6 2.69 6 6H6z" />
              </svg>
            }
            title="Pre-Primary"
            description="(LKG & UKG) – Play-based learning to build foundational skills in a fun, creative setting."
            gradient="from-[#FFEAA0] to-[#FFD86F]"
          />

          {/* Primary School */}
          <ProgramCard
            icon={
              <svg className="w-12 h-12 text-[#00C4B4]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 16c-1.1 0-2 .9-2 2h2v-2zm14 0c1.1 0 2 .9 2 2h-2v-2z" />
                <path d="M18 11V6c0-1.1-.9-2-2-2H8C6.9 4 6 4.9 6 6v5H2v9h1c0-1.1.9-2 2-2s2 .9 2 2h8c0-1.1.9-2 2-2s2 .9 2 2h1v-9h-4zM8 6h8v5H8V6z" />
              </svg>
            }
            title="Primary School"
            description="(Grades 1–5) – Building strong academic foundations with a focus on core subjects and exploration."
            gradient="from-[#A0FFE0] to-[#6FFFD8]"
          />

          {/* Middle School */}
          <ProgramCard
            icon={
              <svg className="w-12 h-12 text-[#3377FF]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2H6c-1.1 0-2 .9-2 2v16l8-3 8 3V4c0-1.1-.9-2-2-2z" />
              </svg>
            }
            title="Middle School"
            description="(Grades 6–8) – Preparing students for future challenges with critical thinking and in-depth learning."
            gradient="from-[#A0CFFF] to-[#6FBBFF]"
          />
        </div>
      </div>
    </section>
  );
}

interface ProgramCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  gradient: string;
}

function ProgramCard({ icon, title, description, gradient }: ProgramCardProps) {
  return (
    <article className="relative bg-white rounded-3xl p-10 shadow-xl transition-transform duration-500 hover:-translate-y-2 hover:scale-105">
      <div
        className={`absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center transition-transform duration-500 hover:rotate-6 hover:scale-110`}
      >
        {icon}
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-[#06304A] mt-16 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm md:text-base">{description}</p>
    </article>
  );
}
