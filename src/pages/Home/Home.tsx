import Footer from "layouts/Footer/Footer";
import Navbar from "layouts/Navbar/Navbar";
import PageContainer from "layouts/PageContainer/PageContainer";
import Projects from "./components/Projects/Projects";
import Header from "./components/Header/Header";
import Contacts from "./components/Contacts/Contacts";
import Awards from "./components/Awards/Awards";
import About from "./components/About/About";
import Experience from "./components/Experiences/Experience";

export default function Home() {
  return (
    <PageContainer>
      <Navbar />
      <Header />
      <About/>
      <Projects />
      <Contacts />
      <Footer />
    </PageContainer>
  );
}
