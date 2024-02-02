import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { useEffect, useState } from 'react';
// import { PageTransition } from 'next-page-transitions';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  // const [display, setDisplay] = useState('none');

  // useEffect(() => {
  //   setDisplay('none');
  //   setTimeout(() => {
  //     setDisplay('block');
  //   }, 300);
  // }, []);

  return (
    <Provider store={store}>
      {/* <PageTransition timeout={700} classNames="page-transition"> */}
      {/* <div style={{ display: display }}> */}
        <Component {...pageProps} />
      {/* </div> */}
      {/* </PageTransition> */}
    </Provider>
  )
}

export default MyApp;