export default function Navbar() {
  return (
    <nav className="fixed flex items-center justify-end w-full h-20 px-6 font-bold bg-white lg:px-16 nav-shadow">
      <svg
        className="h-5 lg:hidden"
        viewBox="0 0 72 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 48H72V40H0V48ZM0 28H72V20H0V28ZM0 0V8H72V0H0Z"
          fill="black"
        />
      </svg>

      <div className="hidden space-x-6 text-lg lg:block font-hnd-light">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
};

