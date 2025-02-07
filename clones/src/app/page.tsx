import Footer from "../components/Footer";

import Spotify from "@/pages/spotify";
import Facebook from "@/pages/facebook";
import Amazon from "@/pages/amazon";

export default function Home() {
  return (
    <div>
      <main>
        <Amazon />
        <Spotify />
        <Facebook />
      </main>
      <Footer />
    </div>
  );
}
