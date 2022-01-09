import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './reset.css';
import './index.css';
import { store } from './state/store';
import Home from './pages/Home';
import Stats from './pages/Stats';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="stats" element={<Stats />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
