import Navbar from "components/global/Navbar";
import ContactInfo from "components/main/ContactInfo";
import Header from "components/main/Header";
import ProjectsSection from "components/main/ProjectsSection";
 
import styles from "./Main.module.css";

export default function Main() {
  return (
    <div className={styles.root}>
      <Navbar />
      <Header />
      <ProjectsSection />
      <ContactInfo />
    </div>
  );
}
