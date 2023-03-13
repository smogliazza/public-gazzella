/**
 * Styles
 */

/**
 * Scripts
 */
import './../assets/js/active';

/**
 * Component resources
 */

import Head from './_partials/header';
import Foot from './_partials/foot';
import TopDiscountCards from './_partials/topDiscountCards';

import SideBar from './navigation/sideBar';

import Index from './pages/homepage/index';


function App() {
  return (
    <div className="App">
      <SideBar></SideBar>
      <div id="wrapper">
        <Head></Head>
        <TopDiscountCards></TopDiscountCards>
        <Index></Index>
        <Foot></Foot>
      </div>
    </div>
  );
}

export default App;
