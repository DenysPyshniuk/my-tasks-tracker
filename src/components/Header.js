import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, name }) => {
  const onClick = () => {
    console.log("Clicked");
  };
  return (
    <header className="header">
      <h1>
        {title} from {name}
      </h1>
      <Button color="green" text="Add" onClick={onClick} />
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
