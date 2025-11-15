import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Spacing from '../../components/Spacing';
import './index.css';
import { Outlet } from 'react-router';

function Layout() {
  return (
    <>
      <Header />

      <Spacing />

      <Outlet />

      <Spacing size={130} />

      <Footer />
    </>
  );
}

export default Layout;
