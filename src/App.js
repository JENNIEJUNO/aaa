import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import HomeMenu from './Pages/Home/HomeMenu';
import TaxiMenu from './Pages/Taxi/TaxiMenu';
import TourismMenu from './Pages/Tourism/TourismMenu';
import WorkplaceMenu from './Pages/Workplace/WorkplaceMenu';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.kakaoAsyncInit = function() {
      if (window.Kakao) {
        window.Kakao.Channel.createChatButton({
          container: '#kakao-talk-channel-chat-button',
        });
      }
    };
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.3/kakao.channel.min.js';
    js.integrity = 'sha384-bWRMLTxQRntA4wEpVvfY/jIkkrpCzdbFJETnRNTm9kIF82L5UJfEsuhlcaqNQWiO';
    js.crossOrigin = 'anonymous';
    fjs.parentNode.insertBefore(js, fjs);
  })(document, 'script', 'kakao-js-sdk');
  }, [])
  return (
    <div>
      <div className='kakao'>
            <div
                id="kakao-talk-channel-chat-button"
                data-channel-public-id="_IxnHVn"
                data-title="consult"
                data-size="small"
                data-color="yellow"
                data-shape="pc"
                data-support-multiple-densities="true"
            ></div>
        </div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/HomeMenu" element={<HomeMenu />}/>
        <Route path="/TaxiMenu" element={<TaxiMenu />}/>
        <Route path="/TourismMenu" element={<TourismMenu />}/>
        <Route path="/WorkplaceMenu" element={<WorkplaceMenu />}/>
      </Routes>
    </div>
  );
}

export default App;
