import React from "react";

const Header = ({ cartCount, togglePopup }) => {
  return (
    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <a className="navbar-brand" href="index.html">
            <span> Pizza House </span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className=""> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item active">
                <a className="nav-link" href="index.html">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="menu.html">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="book.html">
                  Book Table
                </a>
              </li>
            </ul>
            <div className="user_option">
              <a href="" className="user_link">
                <i className="fa fa-user" aria-hidden="true"></i>
              </a>
              <div className="cart_link" onClick={togglePopup}>
                <div>
                  <i
                    className="fa fa-shopping-cart"
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>
                <span className="number-item">
                  {cartCount > 0 ? cartCount : 0}
                </span>{" "}
                {/* Display total cart count */}
              </div>
              <form className="form-inline">
                <button
                  className="btn my-2 my-sm-0 nav_search-btn"
                  type="submit"
                >
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
              <a href="" className="order_online">
                {" "}
                Order Online{" "}
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
