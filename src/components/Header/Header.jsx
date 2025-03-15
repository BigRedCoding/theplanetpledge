import "./Header.css";
import HeaderImage from "../../assets/header_image.svg";

function Header({ setOpenModal }) {
  const handleOpenModal = () => {
    setOpenModal("pledge-modal");
  };

  return (
    <div className="header">
      <div className="header__container">
        <img
          src={HeaderImage}
          alt="Make the Pledge logo"
          className="header__logo"
        />
        <nav className="nav">
          <ul className="nav__links">
            <li className="nav__elements">
              <button className="nav-button">
                <a className="nav__link" href="#quiz">
                  Energy Saver Quiz
                </a>
              </button>
            </li>
            <li className="nav__elements">
              <button className="nav-button">
                <a className="nav__link" href="#resources">
                  Resources
                </a>
              </button>
            </li>
            <li className="nav__elements">
              <button
                className="nav-button nav-button__pledge"
                onClick={handleOpenModal}
              >
                Take the Pledge
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
