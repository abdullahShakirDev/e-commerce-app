import { Link } from "react-router-dom";

function QuickLinks() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Quick Link</h3>
      <ul className="space-y-2 text-text text-sm">
        <li>
          <Link to="#">Privacy Policy</Link>
        </li>
        <li>
          <Link to="#">Terms Of Use</Link>
        </li>
        <li>
          <Link to="#">FAQ</Link>
        </li>
        <li>
          <Link to="#">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default QuickLinks;
