import Link from "next/link";

const highlights = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 0 1-4-4V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12a4 4 0 0 1-4 4zm0 0h12a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 0 1 2.828 0l2.829 2.829a2 2 0 0 1 0 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "Foundation",
    description: "Color, typography, spacing, elevation and motion tokens that form the backbone of our visual language.",
    href: "/foundation/colors",
    linkLabel: "Explore Foundation →",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6zm10 0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V6zM4 16a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2zm10 0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2z" />
      </svg>
    ),
    title: "Components",
    description: "A library of reusable, accessible mobile components — from buttons and inputs to bottom sheets and dialogs.",
    href: "/components/button",
    linkLabel: "Browse Components →",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m0 10a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m0 10V7m0 10a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2" />
      </svg>
    ),
    title: "Patterns",
    description: "Proven UX patterns for common mobile scenarios like empty states, errors, forms and onboarding flows.",
    href: "/patterns/empty-states",
    linkLabel: "View Patterns →",
  },
];

const stats = [
  { value: "7", label: "Foundation tokens" },
  { value: "20+", label: "Components" },
  { value: "4", label: "UX Patterns" },
];

export default function HomePage() {
  return (
    <div className="py-4">
      {/* Hero */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 text-xs font-medium px-3 py-1 rounded-full mb-5 border border-indigo-100">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
          v1.0.0 — In development
        </div>
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
          Mobile Design System
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
          A comprehensive set of design guidelines, components, and tokens for building consistent,
          accessible mobile experiences.
        </p>
        <div className="flex items-center gap-3 mt-6">
          <Link
            href="/get-started/introduction"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
          >
            Get Started
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            href="/foundation/colors"
            className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
          >
            Browse Foundation
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-8 mb-12 pb-12 border-b border-gray-100">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl font-bold text-gray-900 tracking-tight">{stat.value}</p>
            <p className="text-sm text-gray-400 mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Highlights */}
      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-5">
          What&apos;s inside
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-gray-200 hover:shadow-sm p-6 transition-all duration-200"
            >
              <div className="w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-600 mb-4 group-hover:border-indigo-200 group-hover:text-indigo-600 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{item.description}</p>
              <Link
                href={item.href}
                className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                {item.linkLabel}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
