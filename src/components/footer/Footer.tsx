import { FiGithub } from 'react-icons/fi';

import st from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={st.footer}>
      <div className={`${st.footer__container} ${st._container}`}>
        <h1> 2023 Fake Store, Inc. Все права защищены.</h1>

        <div className={st.icon_links}>
          <a href="https://github.com/EmilMustafin/Aston-fakeShop" target="_blank" rel="noreferrer">
            <FiGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
