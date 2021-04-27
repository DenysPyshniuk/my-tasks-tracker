import PropTypes from "prop-types";

const Header = ({ title, name }) => {
  return (
    <header className="header">
      <h1>
        {title} from {name}
      </h1>
      <button className="btn">Add</button>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
  name: "Denys",
};

Header.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
};

// CSS styling
// const headingStyle = {
//   color: "green",
//   backgroundColor: "black",
// };

export default Header;
