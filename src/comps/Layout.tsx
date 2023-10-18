import { FC, Fragment, PropsWithChildren } from 'react';
import { Outlet, ScrollRestoration, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import logoSrc from '../assets/avatar.png';
import { ReactComponent as EMailIcon } from '../assets/mail.svg';
import { ReactComponent as TranslateIcon } from '../assets/translate.svg';
import { ReactComponent as TranslateCNIcon } from '../assets/translate-cn.svg';
import { Footer } from './Footer';

export const Wrapper = styled.div`
  max-width: 48rem;
  min-height: inherit;
  margin: 0 auto;
  padding: 4rem 2rem 5rem 2rem;
  @media (max-width: 590px) {
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (max-width: 960px) {
    padding-top: 2rem;
  }
  h1, h2 {
    font-weight: 900;
  }
  h1 {
    font-weight: 900;
    letter-spacing: -.05em;
    font-size: 2.8em;
    @media (max-width: 590px) {
      line-height: 1.05em;
      margin-bottom: 0rem;
      padding-left: 0.25rem;
      padding-right: 0.25rem;
    }
    @media (max-width: 960px) {
      margin-bottom: 0rem;
      margin-top: 0rem;
    }
  }
  > * {
    margin-top: 0.75em;
    margin-bottom: 0.75em;
    font-size: 1.25rem;
    line-height: 1.8;
  }
`;

const Header = styled.header`
  backdrop-filter: blur(0.4rem);
  margin: 0 auto;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Logo = styled.img`
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 0.725rem;
`;

const HeaderMain = styled.main`
  max-width: 72rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.675rem;
  @media (max-width: 590px) {
    padding: 0.75rem;
  }
  > * {
    display: flex;
  }
`;

export const Content = styled.main`
  max-width: 72rem;
  margin: 0 auto;
  min-height: calc(100vh - 5.75rem);
`;

const Nav = styled.nav`
  user-select: none;
  display: flex;
  gap: 1rem;
  a {
    cursor: pointer;
    &.active {
      color: var(--color-fg-default);
    }
  }
  > * {
    display: flex;
    align-items: center;
  }
  > div {
    cursor: pointer;
    font-size: 1.1em;
    color: var(--color-fg-muted);
    transition: color 0.2s ease-in-out;
    &:hover {
      color: var(--color-fg-default);
    }
  }
`;

export const Component: FC<PropsWithChildren> = () => {
  const { t, i18n } = useTranslation();
  return (
    <Fragment>
      <Header>
        <HeaderMain>
          <NavLink to="/">
            <Logo src={logoSrc} alt="Wang Chujiang(王楚江) 小弟调调™" />
          </NavLink>
          <Nav>
            <NavLink to="/projects">{t('menu.projects')}</NavLink>
            <NavLink to="/sponsor">{t('menu.sponsor')}</NavLink>
            <NavLink to="/about">{t('menu.about')}</NavLink>
            <NavLink to="/contact">
              <EMailIcon />
            </NavLink>
            <div onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'cn' : 'en')}>
              {i18n.language === 'en' && <TranslateIcon />}
              {i18n.language === 'cn' && <TranslateCNIcon />}
            </div>
          </Nav>
        </HeaderMain>
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer />
      <ScrollRestoration />
    </Fragment>
  );
};
