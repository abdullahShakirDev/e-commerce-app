import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
function DownloadApp() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Download App</h3>
      <p className="text-text1/70 text-sm mb-4">
        Save $3 with App New User Only
      </p>
      <div className="flex items-center gap-3 mb-4">
        <img src="/qr-code.png" alt="QR Code" className="w-20 h-20" />
        <div className="flex flex-col gap-2">
          <img src="/google-play.png" alt="Google Play" className="h-10" />
          <img src="/app-store.png" alt="App Store" className="h-10" />
        </div>
      </div>

      <div className="flex gap-6 ">
        <Link to="#">
          <FaFacebookF size={20} />
        </Link>
        <Link to="#">
          <FaTwitter size={20} />
        </Link>
        <Link to="#">
          <FaInstagram size={20} />
        </Link>
        <Link to="#">
          <FaLinkedinIn size={20} />
        </Link>
      </div>
    </div>
  );
}

export default DownloadApp;
