import Subscripe from "./Subscripe";
import Support from "./Support";
import Account from "./Account";
import QuickLinks from "./QuickLinks";
import DownloadApp from "./DownloadApp";
import Copyright from "./CopyRight";

function Footer() {
  return (
    <footer className="bg-text2 text-text py-10 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <Subscripe />
        <Support />
        <Account />
        <QuickLinks />
        <DownloadApp />
      </div>
      <Copyright />
    </footer>
  );
}

export default Footer;
