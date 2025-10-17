import Navbar from "./components/navbar";
import Hero from "./components/hero/Hero";
import Video from "./components/video";
import Footer from "./components/footer";

export default function MainPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <Navbar />
      <div className="flex flex-col gap-y-8 mt-16 px-8">
        <Hero />

        {/* <Benefits data={benefitOne} /> */}
        {/* <Benefits imgPos="right" data={benefitTwo} /> */}
        {/* <SectionTitle
          pretitle="Watch a video"
          title="Learn how to fullfil your needs">
          This section is to highlight a promo or demo video of your product.
          Analysts says a landing page with video has 3% more conversion rate. So,
          don&apos;t forget to add one. Just like this.
    </SectionTitle>*/}

        <Video />
        {/* 
        <Testimonials /> */}
        {/* <SectionTitle id="about" pretitle="Hello, world!" title="Joaquim Pessôa Filho">
          
        </SectionTitle> */}
        {/* <Faq /> */}
        {/* <Cta /> */}
      </div>
      <Footer />
    </div>
  );
}
