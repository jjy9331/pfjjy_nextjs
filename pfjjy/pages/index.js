import React, { useEffect, useState } from 'react';

import CustomCursor from '../components/cursor.js'
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import Item_home from '../components/item_home.js'
import Sctracker from '../components/sctracker.js'
import Item_introduce from '../components/item_introduce.js'
import Item_portfolio from '@/components/item_portfolio.js'
import Item_contact from '@/components/item_contact.js'
import Loading from '@/components/loading.js';




export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate some delay to show the loading page (optional)
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000); // Adjust the duration as needed
  // }, []);

  const handleImagesLoaded = () => {
    setIsLoading(false); // 이미지 로딩이 완료되었으므로 로딩 상태 변경
  };

  // Show the loading page while loading is true
  if (isLoading) {
    console.log("image loaded3");
    return <Loading onImagesLoaded={handleImagesLoaded} />;
    
  }

  return (
    <div>
      <Sctracker />
      <CustomCursor />
      <Header />
      <Item_home />
      <Item_introduce />
      <Item_portfolio />
      <Item_contact />
      <Footer />
    </div>
  )
}

