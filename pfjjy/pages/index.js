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
  
  // useEffect(() => {
  //   console.log(dataValue); // dataValue의 현재 값을 콘솔에 출력
  //   window.onload = () => {
  //     window.scrollTo(0, dataValue);
  //   };
  // }, [dataValue]);


  // useEffect(() => {
  //   const handleRouteChange = () => {
  //     console.log(dataValue); // dataValue의 현재 값을 콘솔에 출력
  //     window.scrollTo(0, dataValue);
  //   };

  //   router.events.on('routeChangeComplete', handleRouteChange);

  //   // Clean up the subscription on unmount
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange);
  //   };
  // }, [dataValue, router.events]);

  // useLayoutEffect(() => {
  //   console.log(dataValue); // dataValue의 현재 값을 콘솔에 출력
  //   window.scrollTo(0, dataValue);
  // }, [dataValue]);

  // useEffect(() => {
  //   const handleImagesLoaded = () => {
  //     setIsLoading(false); // 이미지 로딩 완료
  //     setTimeout(() => {
  //       // console.log(dataValue); // dataValue의 현재 값을 콘솔에 출력
  //       window.scrollTo(0, dataValue); // 이미지 로딩이 완료된 후에만 스크롤 위치 조정
  //     }, 100); // Adjust the timeout value as needed
  //   };
    
  //   if (isLoading) {
  //     return <Loading onImagesLoaded={handleImagesLoaded} />;
  //   }
  // }, [isLoading, dataValue]);

  // useEffect(() => {
  //   // Simulate some delay to show the loading page (optional)
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000); // Adjust the duration as needed
  // }, []);

  // const handleImagesLoaded = () => {
  //   setIsLoading(false); // 이미지 로딩 완료
  //   setTimeout(() => {
  //     window.scrollTo(0, dataValue);
  //   }, 100); // Adjust the timeout value as needed
  // };

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

