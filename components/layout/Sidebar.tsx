"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation, NavItem, NavSection } from "@/lib/navigation";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${open ? "rotate-90" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
    </svg>
  );
}

function NavLeafItem({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  return (
    <Link
      href={item.href ?? "#"}
      className={`flex items-center px-3 py-1.5 rounded-md text-sm transition-colors duration-150 ${
        isActive
          ? "bg-indigo-500/15 text-indigo-400 font-medium"
          : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
      }`}
    >
      {item.label}
    </Link>
  );
}

function NavGroupItem({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const isChildActive = item.children?.some((c) => pathname === c.href);
  const [open, setOpen] = useState(isChildActive ?? false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-1.5 rounded-md text-sm text-gray-400 hover:text-gray-200 hover:bg-white/5 transition-colors duration-150"
      >
        <span>{item.label}</span>
        <ChevronIcon open={open} />
      </button>
      {open && (
        <div className="ml-3 mt-0.5 pl-3 border-l border-white/10 space-y-0.5">
          {item.children?.map((child) => (
            <NavLeafItem key={child.label} item={child} />
          ))}
        </div>
      )}
    </div>
  );
}

function NavSectionBlock({ section }: { section: NavSection }) {
  return (
    <div className="mb-6">
      <p className="px-3 mb-1.5 text-xs font-semibold uppercase tracking-wider text-gray-500">
        {section.title}
      </p>
      <div className="space-y-0.5">
        {section.items.map((item) =>
          item.children ? (
            <NavGroupItem key={item.label} item={item} />
          ) : (
            <NavLeafItem key={item.label} item={item} />
          )
        )}
      </div>
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-[#0f1117] border-r border-white/8 flex flex-col z-30 overflow-hidden">
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-5 border-b border-white/8 shrink-0">
        <div className="w-7 h-7 rounded-lg bg-indigo-500 flex items-center justify-center shrink-0">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10-10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zm0 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-white leading-none">Design System</p>
          <p className="text-xs text-gray-500 mt-0.5">Mobile</p>
        </div>
      </div>

      {/* Search */}
      <div className="px-4 py-3 border-b border-white/8 shrink-0">
        <div className="flex items-center gap-2 bg-white/6 border border-white/10 rounded-lg px-3 py-2 cursor-pointer hover:bg-white/8 transition-colors">
          <SearchIcon />
          <span className="text-sm text-gray-500 flex-1">Search...</span>
          <kbd className="text-xs text-gray-600 bg-white/6 px-1.5 py-0.5 rounded font-mono">⌘K</kbd>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
        {navigation.map((section) => (
          <NavSectionBlock key={section.title} section={section} />
        ))}
      </nav>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-white/8 shrink-0">
        <p className="text-xs text-gray-600">v1.0.0</p>
      </div>
    </aside>
  );
}
