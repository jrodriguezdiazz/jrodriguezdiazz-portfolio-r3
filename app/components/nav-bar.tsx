import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NavBar() {
  return <header
    className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex h-14 items-center">
      <div className="mr-4 hidden md:flex">
        <Link className="mr-6 flex items-center space-x-2" href="/#">
          <span className="hidden font-bold sm:inline-block">Jorge Rodríguez Díaz</span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="#about" className="transition-colors hover:text-foreground/80">
            About Me
          </Link>
          <Link href="#work-experience" className="transition-colors hover:text-foreground/80">
            Work Experience
          </Link>
          <Link href="#projects" className="transition-colors hover:text-foreground/80">
            Projects
          </Link>
          <Link href="#tech-stack" className="transition-colors hover:text-foreground/80">
            Tech Stack
          </Link>
          <Link href="#contact" className="transition-colors hover:text-foreground/80">
            Contact
          </Link>
        </nav>
      </div>
      <Button variant="outline" className="ml-auto">
        <Link
          target="_blank" href="https://drive.google.com/file/d/15HpCi03e9owKfG_lAFlZ4hfKb6sdzkOb/view?usp=sharing"
          className="transition-colors hover:text-foreground/80">
          Resume
        </Link>
      </Button>
      <ThemeToggle />
    </div>
  </header>;
}
