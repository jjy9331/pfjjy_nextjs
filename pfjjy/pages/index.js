import React, { useEffect, useState, useLayoutEffect, useCallback } from 'react';
import CustomCursor from '../components/cursor.js';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import Item_home from '../components/item_home.js';
import Sctracker from '../components/sctracker.js';
import Item_introduce from '../components/item_introduce.js';
import Item_portfolio from '@/components/item_portfolio.js';
import Item_contact from '@/components/item_contact.js';
import Loading from '@/components/loading.js';
import GebisconModal from '../pages/gebiscon.js';
import ZerolabModal from '../pages/zerolab.js';


export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  const handleImagesLoaded = useCallback(() => {
    setIsLoading(false); // 이미지 로딩 완료
  }, []);

  useEffect(() => {
    // isLoading이 변경될 때마다 handleImagesLoaded 함수를 재설정
    if (isLoading) {
      handleImagesLoaded();
    }
  }, [isLoading, handleImagesLoaded]);

  // modal popup

  const [isModalOpen, setIsModalOpen] = useState({ port1: false, port2: false, port3: false, port4: false, port5: false });

  const handlePortClick = (port) => {
    setIsModalOpen((prev) => ({ ...prev, [port]: true }));
    document.body.style.overflow = 'hidden';
    const ppElements = document.querySelectorAll('.port_pop'); // 멀티 모달 팝업창 구현
    ppElements.forEach((el) => {
      el.style.display = 'block';
    });
  };

  const handleCloseClick = (port) => {
    setIsModalOpen((prev) => ({ ...prev, [port]: false }));
    document.body.style.overflow = 'auto';
    const ppElements = document.querySelectorAll('.port_pop'); 
    ppElements.forEach((el) => {
      el.style.display = 'none';
    });
  };

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
        <Item_portfolio onPortClick={handlePortClick} />
        {<GebisconModal onClose={() => handleCloseClick('port1')} isVisible={isModalOpen.port1} />}
        {<ZerolabModal onClose={() => handleCloseClick('port2')} isVisible={isModalOpen.port2} />}
        <Item_contact />
        <Footer />
      </div>
    );
  }
}

