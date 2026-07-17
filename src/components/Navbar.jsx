import Button from "./ui/Button.jsx";
import Container from "./layout/Container.jsx";

const navLinks = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Experience",
    href: "#experience",
  },
];

function Navbar({ className = "", ...props }) {
  return (
    <header className="sticky top-0 z-50 bg-ivory/80 backdrop-blur-md">
      <Container>
        <nav
          className={`flex justify-between items-center py-4 ${className}`}
          {...props}
        >
          <a href="#" >Robb.Dev</a>

          <div className= "flex gap-8">
            {navLinks.map((link) => {
              return (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              );
            })}
          </div>

          <Button variant="primary">Get in Touch</Button>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
