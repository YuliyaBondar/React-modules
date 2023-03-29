import { Link } from 'react-router-dom';

import './about-page.css';

export default function AboutPage() {
  return (
    <div className="about-page">
      <h2 data-testid="h2_developer">Developer: Yuliya Bondar</h2>
      <div>
        <p>
          <span className="f-bold" data-testid="github">
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
  );
}
