import logo from '/logo.png';
import './index.css';
import { Link } from 'react-router';

const stNavLink: string = 'nav-link px-2 font-semibold';

function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="nav gap-[2vw]">
          <li>
            <Link className={stNavLink} to="/about">
              협회소개
            </Link>
          </li>
          <li>
            <Link className={stNavLink} to="/consulting">
              청년심리상담
            </Link>
          </li>
          <li>
            <Link className={stNavLink} to="/instructor">
              강사소개
            </Link>
          </li>
          <li>
            <Link className={stNavLink} to="/notice">
              공지사항
            </Link>
          </li>
          <li>
            <Link className={stNavLink} to="/contact">
              문의
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
