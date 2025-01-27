import Navbar from "../components/NavBar";
import { AboutUs } from "./AboutUs";
import { ContactUs } from "./ContactUs";

function Home() {
  return (
    <div className="bg-gradient-to-b from-emerald-50 to-teal-50">
      <Navbar />
      <main className="scroll-smooth">
        <AboutUs />
        <ContactUs />
      </main>
    </div>
  );
}

export default Home;