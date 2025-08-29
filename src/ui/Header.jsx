import Navbar from "./Navbar";

function Header() {
  return (
    <header>
      {/* Announcement Bar */}
      <div className="mx-auto flex items-center justify-center bg-black h-12 gap-2 px-2">
        <p className="text-text text-center text-sm leading-snug">
          Summer Sales For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <button className="text-primary font-semibold underline hover:text-primary/80 cursor-pointer">
          Shop Now
        </button>
      </div>

      <Navbar />
    </header>
  );
}

export default Header;
