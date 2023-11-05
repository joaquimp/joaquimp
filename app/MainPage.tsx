import Navbar from './components/navbar';
import Hero from './components/hero/Hero';
import SectionTitle from './components/sectionTitle';

import { benefitOne, benefitTwo } from "./components/data";
import Video from "./components/video";
import Benefits from "./components/benefits";
import Footer from "./components/footer";
import Testimonials from "./components/testimonials";
import Cta from "./components/cta";
import Faq from "./components/faq";
import PopupWidget from "./components/popupWidget";

export default function MainPage() {
    return (
      <div className='max-w-4xl mx-auto'>
      <Navbar />
      <div className="flex flex-col gap-y-8 mt-16">
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
        <Footer />
        </div>
      </div>
    )
  }