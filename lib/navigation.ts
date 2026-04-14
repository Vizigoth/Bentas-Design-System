export type NavItem = {
  label: string;
  href?: string;
  children?: NavItem[];
};

export type NavSection = {
  title: string;
  items: NavItem[];
};

export const navigation: NavSection[] = [
  {
    title: "Get Started",
    items: [
      { label: "Introduction", href: "/get-started/introduction" },
      { label: "What's New", href: "/get-started/whats-new" },
      { label: "Contributing", href: "/get-started/contributing" },
    ],
  },
  {
    title: "Foundation",
    items: [
      { label: "Colors", href: "/foundation/colors" },
      { label: "Typography", href: "/foundation/typography" },
      { label: "Spacing", href: "/foundation/spacing" },
      { label: "Border Radius", href: "/foundation/border-radius" },
      { label: "Elevation", href: "/foundation/elevation" },
      { label: "Iconography", href: "/foundation/iconography" },
      { label: "Motion", href: "/foundation/motion" },
    ],
  },
  {
    title: "Components",
    items: [
      {
        label: "Navigation",
        children: [
          { label: "Bottom Tab Bar", href: "/components/bottom-tab-bar" },
          { label: "Top App Bar", href: "/components/top-app-bar" },
          { label: "Navigation Drawer", href: "/components/navigation-drawer" },
        ],
      },
      {
        label: "Actions",
        children: [
          { label: "Button", href: "/components/button" },
          { label: "FAB", href: "/components/fab" },
          { label: "Icon Button", href: "/components/icon-button" },
        ],
      },
      {
        label: "Inputs",
        children: [
          { label: "Text Field", href: "/components/text-field" },
          { label: "Checkbox", href: "/components/checkbox" },
          { label: "Radio Button", href: "/components/radio-button" },
          { label: "Toggle", href: "/components/toggle" },
          { label: "Slider", href: "/components/slider" },
        ],
      },
      {
        label: "Feedback",
        children: [
          { label: "Alert", href: "/components/alert" },
          { label: "Snackbar", href: "/components/snackbar" },
          { label: "Progress", href: "/components/progress" },
          { label: "Skeleton", href: "/components/skeleton" },
        ],
      },
      {
        label: "Data Display",
        children: [
          { label: "Card", href: "/components/card" },
          { label: "List Item", href: "/components/list-item" },
          { label: "Avatar", href: "/components/avatar" },
          { label: "Badge", href: "/components/badge" },
          { label: "Chip", href: "/components/chip" },
        ],
      },
      {
        label: "Overlays",
        children: [
          { label: "Bottom Sheet", href: "/components/bottom-sheet" },
          { label: "Dialog", href: "/components/dialog" },
          { label: "Tooltip", href: "/components/tooltip" },
        ],
      },
    ],
  },
  {
    title: "Patterns",
    items: [
      { label: "Empty States", href: "/patterns/empty-states" },
      { label: "Error States", href: "/patterns/error-states" },
      { label: "Forms", href: "/patterns/forms" },
      { label: "Onboarding", href: "/patterns/onboarding" },
    ],
  },
];
