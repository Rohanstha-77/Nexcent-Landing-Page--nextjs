import Image from "next/image";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Clients from "./components/Clients";
import Community from "./components/Community";
import SectionV from "./components/SectionV";
import Help from "./components/Help";
import Customers from "./components/Customers";
import MarketingSection from "./components/MarketingSection";
import Demo from "./components/Demo";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <>
      <NavBar/>
      <HeroSection/>
      <Clients/>
      <Community/>
      <SectionV src="/assets/rafiki.svg" heading="The unseen of spending three years at Pixelgrade" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."/>
      <Help/>
      <SectionV src="/assets/pana.svg" heading="How to design your site footer like we did" paragraph="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."/>
      <Customers/>
      <MarketingSection/>
      <Demo/>
      <Footer/>
   </>
  );
}
