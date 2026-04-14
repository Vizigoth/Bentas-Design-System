"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { navigation } from "@/lib/navigation";

function buildBreadcrumb(pathname: string): { label: string; href: string }[] {
  const crumbs: { label: string; href: string }[] = [{ label: "Home", href: "/" }];

  for (const section of navigation) {
    for (const item of section.items) {
      if (item.href === pathname) {
        crumbs.push({ label: section.title, href: "#" });
        crumbs.push({ label: item.label, href: item.href });
        return crumbs;
      }
      if (item.children) {
        for (const child of item.children) {
          if (child.href === pathname) {
            crumbs.push({ label: section.title, href: "#" });
            crumbs.push({ label: item.label, href: "#" });
            crumbs.push({ label: child.label, href: child.href });
            return crumbs;
          }
        }
      }
    }
  }

  return crumbs;
}

function getPageTitle(pathname: string): string {
  if (pathname === "/") return "Welcome";

  for (const section of navigation) {
    for (const item of section.items) {
      if (item.href === pathname) return item.label;
      if (item.children) {
        for (const child of item.children) {
          if (child.href === pathname) return child.label;
        }
      }
    }
  }

  return "";
}

function GitHubIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ThemeToggleIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 0 1 8.646 3.646 9.003 9.003 0 0 0 12 21a9.003 9.003 0 0 0 8.354-5.646z" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const crumbs = buildBreadcrumb(pathname);
  const title = getPageTitle(pathname);

  return (
    <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      {/* Top bar */}
      <div className="flex items-center justify-between px-8 py-3">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm">
          {crumbs.map((crumb, i) => (
            <span key={crumb.href + i} className="flex items-center gap-1.5">
              {i > 0 && (
                <svg className="w-3 h-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              )}
              {i === crumbs.length - 1 ? (
                <span className="text-gray-800 font-medium">{crumb.label}</span>
              ) : (
                <Link href={crumb.href} className="text-gray-400 hover:text-gray-600 transition-colors">
                  {crumb.label}
                </Link>
              )}
            </span>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <button className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors">
            <ThemeToggleIcon />
          </button>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>

      {/* Page title (only shown on non-home pages) */}
      {title && pathname !== "/" && (
        <div className="px-8 pb-0">
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">{title}</h1>
        </div>
      )}
    </header>
  );
}
