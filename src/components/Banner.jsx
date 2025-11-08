// import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1569292567777-e5d61a759322?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1167",
  "https://plus.unsplash.com/premium_photo-1664474839979-69a9cbd16032?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1171",
  "https://plus.unsplash.com/premium_photo-1663115421938-4b41781a12cb?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170",
  "https://plus.unsplash.com/premium_photo-1683140681865-9f901073f2a2?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170",
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrent((current - 1 + images.length) % images.length);
  const nextSlide = () => setCurrent((current + 1) % images.length);

  return (
    <section className="relative w-full mt-10">
      <div className="relative max-w-7xl mx-auto overflow-hidden rounded-2xl shadow-2xl">
        {/* Slider */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, i) => (
            <div key={i} className="w-full shrink-0 relative">
              <img
                src={src}
                alt={`Banner ${i}`}
                className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] object-cover brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 md:p-3 rounded-full z-20"
        >
          {/* <ChevronLeft className="w-5 md:w-6 h-5 md:h-6" /> */}
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 md:p-3 rounded-full z-20"
        >
          {/* <ChevronRight className="w-5 md:w-6 h-5 md:h-6" /> */}
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 w-2 md:h-2 md:w-2 rounded-full transition-all ${
                current === i ? "bg-white w-4 md:w-5" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Banner Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6 lg:px-20 z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Join Social Events Near You
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 max-w-2xl">
            Create, join, and track community-driven social service events in
            your area.
          </p>
          <button className="btn bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-full px-6 py-3 shadow-lg hover:scale-105 transition-transform">
            Explore Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
