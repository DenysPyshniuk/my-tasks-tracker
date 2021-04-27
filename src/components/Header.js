import PropTypes from "prop-types";

const Header = ({ title, name }) => {
  return (
    <header style={headingStyle}>
      <h1>
        {title} from {name}
      </h1>
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
const headingStyle = {
  color: "green",
  backgroundColor: "black",
};

export default Header;
