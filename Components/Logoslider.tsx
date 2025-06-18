"use client";

import Logo1 from "./Logo1";
import Logo2 from "./Logo2";

export default function TextSliderSection() {
  return (
    <section className="bg-black text-white py-8 overflow-hidden">
      <div className="flex items-center whitespace-nowrap">
        {[...Array(2)].map((_, idx) => (
          <div
            key={idx}
            className="inline-block animate-marquee flex items-center space-x-4"
          >
            <span className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider flex items-center space-x-4">
              <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32 4.5L34.6234 22.7094L46 8.25129L39.1672 25.3328L56.2487 18.5L41.7906 29.8766L60 32.5L41.7906 35.1234L56.2487 46.5L39.1672 39.6672L46 56.7487L34.6234 42.2906L32 60.5L29.3766 42.2906L18 56.7487L24.8328 39.6672L7.75129 46.5L22.2094 35.1234L4 32.5L22.2094 29.8766L7.75129 18.5L24.8328 25.3328L18 8.25129L29.3766 22.7094L32 4.5Z" fill="#CBCBCB"/>
</svg>

              <Logo2  />
            <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32 4.5L34.6234 22.7094L46 8.25129L39.1672 25.3328L56.2487 18.5L41.7906 29.8766L60 32.5L41.7906 35.1234L56.2487 46.5L39.1672 39.6672L46 56.7487L34.6234 42.2906L32 60.5L29.3766 42.2906L18 56.7487L24.8328 39.6672L7.75129 46.5L22.2094 35.1234L4 32.5L22.2094 29.8766L7.75129 18.5L24.8328 25.3328L18 8.25129L29.3766 22.7094L32 4.5Z" fill="#CBCBCB"/>
</svg>

              <Logo1  />
              <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32 4.5L34.6234 22.7094L46 8.25129L39.1672 25.3328L56.2487 18.5L41.7906 29.8766L60 32.5L41.7906 35.1234L56.2487 46.5L39.1672 39.6672L46 56.7487L34.6234 42.2906L32 60.5L29.3766 42.2906L18 56.7487L24.8328 39.6672L7.75129 46.5L22.2094 35.1234L4 32.5L22.2094 29.8766L7.75129 18.5L24.8328 25.3328L18 8.25129L29.3766 22.7094L32 4.5Z" fill="#CBCBCB"/>
</svg>

              <Logo2  />
              <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32 4.5L34.6234 22.7094L46 8.25129L39.1672 25.3328L56.2487 18.5L41.7906 29.8766L60 32.5L41.7906 35.1234L56.2487 46.5L39.1672 39.6672L46 56.7487L34.6234 42.2906L32 60.5L29.3766 42.2906L18 56.7487L24.8328 39.6672L7.75129 46.5L22.2094 35.1234L4 32.5L22.2094 29.8766L7.75129 18.5L24.8328 25.3328L18 8.25129L29.3766 22.7094L32 4.5Z" fill="#CBCBCB"/>
</svg>

              <Logo1  />
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 15s;
          }
        }
      `}</style>
    </section>
  );
}
