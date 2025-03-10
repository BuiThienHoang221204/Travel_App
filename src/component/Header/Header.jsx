import React from 'react';
import { Link } from 'react-router-dom';
import configs from '../../config';
import './Header.css';
import { IoSearchSharp } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineTravelExplore } from "react-icons/md";

function Header() {
  return (
    <div className="header-container">
      <div className='header-left'>
        <div className="logo">
          <Link to={configs.home} className="nav-link">
            <MdOutlineTravelExplore className='logo-travel' />
            <span className="brand-name">Travel</span>
          </Link>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Tìm kiếm theo điểm đến, hoạt động"
            className="search-input"
          />
          <IoSearchSharp className='icon-search' />
        </div>
      </div>

      <nav className="nav-menu">
        <Link to={configs.home} className="nav-link">Home</Link>
        <div className='nav-item dropdown'>
          <Link to={configs.about} className="nav-link">About</Link>
          <div className='dropdown-menu'>
            <Link to={configs.about} className="dropdown-item">Vietnam</Link>
            <Link to={configs.about} className="dropdown-item">Thailand</Link>
            <Link to={configs.about} className="dropdown-item">Japan</Link>
          </div>
        </div>
        <Link to={configs.contact} className="nav-link">Contact</Link>
        <Link to={configs.login} className="nav-link bg-warning py-2 px-5 rounded-5">Login</Link>
        <FaCircleUser className='icon-user' />
      </nav>
    </div>
  );
}

export default Header;