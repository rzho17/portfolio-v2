import { Link } from "react-router";

// displays simple not found page when an invalid project is entered
const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Looks like this page is still in the works..</h1>
      <p>Why not head back to the home and try again!</p>

      <Link to={"/"}>Home</Link>
    </div>
  );
};

export default NotFound;
