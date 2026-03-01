import cover from "@/assets/images/membership/workshops/waiting.jpg";

const COLORS = { lilacBg: "#F6EDF9" };

const videoTestimonials = [
  {
    id: "video1",
    title: "Eu saí daqui outra pessoa.",
    src: "https://www.youtube.com/embed/u31qwQUeGuM",
  },
  {
    id: "video2",
    title: "O clima da equipe mudou em um dia.",
    src: "https://www.youtube.com/embed/u31qwQUeGuM",
  },
  {
    id: "video3",
    title: "Parecia um abraço coletivo.",
    src: "https://www.youtube.com/embed/u31qwQUeGuM",
  },
];

/**
 * Video testimonials section for the Corporate landing page.
 * Showcases the impact of corporate events on employees.
 */
export function Testimonials() {
  return (
    <section
      className="py-10 md:py-14"
      style={{ backgroundColor: COLORS.lilacBg }}
    >
      <div className="container mx-auto px-4">
        <img
          src={cover}
          alt="Networking Group"
          className="mx-auto h-28 w-full max-w-3xl rounded-xl object-cover"
          loading="lazy"
        />
        <header className="mx-auto max-w-3xl text-center mt-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Elas viveram o Bellas — e contam como foi.
          </h2>
          <p className="mt-2 opacity-90 text-gray-600">
            Mais que um evento, é um antes e depois que seu time não esquece.
          </p>
        </header>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {videoTestimonials.map((video) => (
            <article
              key={video.id}
              className="rounded-2xl overflow-hidden bg-white shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="aspect-video bg-black">
                <iframe
                  className="h-full w-full"
                  src={video.src}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4 text-sm font-medium text-gray-700">
                {video.title}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
