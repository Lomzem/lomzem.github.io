import { ChevronDown, GithubIcon } from "lucide-react";

export default function TopNav() {
  return (
    <nav className="flex justify-center items-center py-2 text-4xl bg-accent">
      <div className="flex relative flex-col items-center">
        <a href="https://github.com/Lomzem" className="peer">
          <GithubIcon className="text-foreground" size={55} />
        </a>
        <ChevronDown className="absolute opacity-0 transition-all animate-bounce delay-50 top-15 z-1 peer-hover:opacity-100" />
        <span className="absolute top-20 p-2 text-2xl whitespace-nowrap rounded-lg opacity-0 transition-all delay-50 bg-overlay peer-hover:text-accent peer-hover:opacity-100">
          Check out my GitHub!
        </span>
      </div>
    </nav>
  );
}
