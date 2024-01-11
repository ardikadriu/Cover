import backgroundImage from "@/public/Background.png";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        width: "1440px",
        height: "1440px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}
