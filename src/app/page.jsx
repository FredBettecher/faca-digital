import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import AboutUs from "@/containers/about";
import Contact from "@/containers/contact";
import Home from "@/containers/home";
import Services from "@/containers/services";
import Works from "@/containers/works";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Works />
      <AboutUs />
      <Contact />
      <Footer />
    </>
  );
}
