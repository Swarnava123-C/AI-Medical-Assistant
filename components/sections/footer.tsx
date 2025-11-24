import { Icons } from "@/components/icons";
import { siteConfig } from "@/lib/config";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 border-t">
      <div className="mx-auto px-5 py-8 max-w-6xl">
        <div className="flex md:flex-row flex-col justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Link
              href="/"
              title={siteConfig.name}
              className="flex items-center space-x-2"
            >
              <Icons.logo className="w-auto h-[30px]" />
              <span className="font-bold text-xl">{siteConfig.name}</span>
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <Link
              href="https://x.com/SWARNAVAMA53967"
              aria-label="Twitter"
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
            >
              <FaTwitter size={20} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/swarnava-malakar-9b0344327/"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
            >
              <FaLinkedin size={20} />
            </Link>

            <Link
              href="https://github.com/Swarnava123-C"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
            >
              <FaGithub size={20} />
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center">
          <span className="text-muted-foreground text-sm">
            Copyright © {new Date().getFullYear()}{" "}
            <Link href="/" className="hover:text-primary transition-colors">
              {siteConfig.name}
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

