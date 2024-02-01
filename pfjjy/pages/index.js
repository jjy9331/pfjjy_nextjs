import React, { useEffect, useState, useLayoutEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
// import { useRouter } from 'next/router';

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

  // const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  const dataValue = useSelector(state => state.dataValue);

  const handleImagesLoaded = useCallback(() => {
    setIsLoading(false); // 이미지 로딩 완료
    setTimeout(() => {
      window.scrollTo(0, dataValue);
    }, 10); // Adjust the timeout value as needed
  }, [dataValue]);

  useEffect(() => {
    // isLoading이 변경될 때마다 handleImagesLoaded 함수를 재설정합니다.
    if (isLoading) {
      handleImagesLoaded();
    }
  }, [isLoading, dataValue, handleImagesLoaded]);

  // isLoading 상태에 따라 적절한 컴포넌트를 렌더링합니다.
  if (isLoading) {
    return <Loading onImagesLoaded={handleImagesLoaded} />;
  } else {
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
    );
  }
}

