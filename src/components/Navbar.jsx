import navLinks from "../data/navLinks.js";
import socialLinks from "../data/socialLinks.js";
import Container from "./layout/Container.jsx";

function Navbar({ className = "", ...props }) {
  return (
    <header className="sticky top-0 z-50 bg-ivory/80 backdrop-blur-md">
      <Container>
        <nav
          className={`flex justify-between items-center py-4 ${className}`}
          {...props}
        >
          <a href="#" className="hover:text-olive-700 ease-in duration-300">
            Robb.Dev
          </a>

          <div className="flex gap-14">
            {navLinks.map((link) => {
              return (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-5">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a key={link.label} href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer">
                  <Icon size={20}/>
                </a>
              );
            })}
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
