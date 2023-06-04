import CustomCursor from '../components/cursor.js'
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import Item_home from '../components/item_home.js'
import Sctracker from '../components/sctracker.js'
import Item_introduce from '../components/item_introduce.js'
import React from "react";

export default function Home() {
  React.useEffect(() => {
    import("lottie-interactive/dist/lottie-interactive.js");
  });
  return (
    <div>
      <Sctracker />
      <CustomCursor />
      <Header />
      <Item_home />
      <Item_introduce />
      {/* <div className="lottie_intro">
          <lottie-interactive lottie-interactive path="/data/introduce_ani.json" interaction="hover"></lottie-interactive>
      </div> */}
      <Footer />
    </div>
  )
}

