import BlogSection from "@/Components/Blog-section";
import ExperienceSection from "@/Components/Experiance";
import ExpertiseSection from "@/Components/Expirtise";
import FAQSection from "@/Components/Faqsection";
import Home from "@/Components/Home";
import TextSliderSection from "@/Components/Logoslider";
import TestimonialsSwiperSection from "@/Components/Whattheysay";
import WorksSection from "@/Components/Worksection";


export default function App() {
  return (
    <section className="m-auto bg-[#000]">
      <div className="max-w-7xl m-auto">

        <Home />
        <ExpertiseSection />
        <WorksSection />
        <ExperienceSection />
        <BlogSection />
        <TestimonialsSwiperSection />
        <FAQSection />
        <TextSliderSection />
      </div>
    </section>
  );
}
