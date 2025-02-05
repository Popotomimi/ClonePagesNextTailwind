import Spotify from "@/pages/Spotify";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Spotify />
      </main>
      <Footer />
    </div>
  );
}
