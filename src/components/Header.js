import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, name }) => {
  return (
    <header className="header">
      <h1>
        {title} from {name}
      </h1>
      <Button color="green" text="Add" />
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
