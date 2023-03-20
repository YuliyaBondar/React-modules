import React from 'react';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';

import './about-page.css';

export default function AboutPage() {
  return (
    <>
      <Header title={'About us'} />
      <main className="main">
        <div className="about-page">
          <h2 id="h2_developer">Developer: Yuliya Bondar</h2>
          <div>
            <p>
              <span className="f-bold" id="github">
                My GitHub:
              </span>{' '}
              <Link to={`https://github.com/YuliyaBondar`}>yuliyabondar</Link>
            </p>
            <p>
              <span className="f-bold">Email:</span> yuliabondar98@gmail.com
            </p>
            <p>
              <span className="f-bold">Discord:</span> @yuliyabondar#8061
            </p>
            <p>
              <span className="f-bold">Telegram:</span>{' '}
              <Link to={`https://t.me/yuliyabondar98`}>yuliyabondar</Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
