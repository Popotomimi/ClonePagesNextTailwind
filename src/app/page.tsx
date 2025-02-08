import Footer from "../components/Footer";

import Spotify from "@/pages/spotify";
import Facebook from "@/pages/facebook";
import Amazon from "@/pages/amazon";
import Separator from "@/components/Separator";

export default function Home() {
  return (
    <div>
      <main>
        <Amazon />
        <Separator />
        <Spotify />
        <Separator />
        <Facebook />
      </main>
      <Footer />
    </div>
  );
}
