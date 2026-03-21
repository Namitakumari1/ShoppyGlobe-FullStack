import { Link } from "react-router-dom";

// Import CSS for NotFound page
import "./NotFound.css";

function NotFound() {

  return (
    <div className="notfound-page">

      {/* Error Code */}
      <h1 className="error-code"> 
         404 
      </h1>

      {/* Error Message */}
      <h2 className="error-message">
        Page Not Found
      </h2>

      {/* Navigation back to Home */}
      <Link to="/">
        <button className="home-btn">
          Go to Home
        </button>
      </Link>

    </div>
  );
}

export default NotFound;