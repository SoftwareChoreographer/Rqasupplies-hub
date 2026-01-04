import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
const Index = () => {
  return (
    <>
      <Helmet>
        <title>RQA Supplies | Mining Machinery Parts & Safety Equipment | South Africa</title>
        <meta 
          name="description" 
          content="RQA Supplies provides quality machinery parts and safety equipment for the South African mining sector. Gear pumps, track adjusters, grader blades, safety belts, and machinery cameras." 
        />
        <meta name="keywords" content="mining equipment, gear pumps, track adjusters, grader blades, safety belt systems, machinery cameras, South Africa, heavy machinery parts" />
        <link rel="canonical" href="https://rqasupplies.co.za" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Products />
          <WhyChooseUs />
          <Industries />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
