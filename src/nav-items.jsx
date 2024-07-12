import { Home, LayoutGrid, CreditCard, MessageSquare } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Features",
    to: "/features",
    icon: <LayoutGrid className="h-4 w-4" />,
    page: <div>Features Page</div>,
  },
  {
    title: "Pricing",
    to: "/pricing",
    icon: <CreditCard className="h-4 w-4" />,
    page: <div>Pricing Page</div>,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <MessageSquare className="h-4 w-4" />,
    page: <div>Contact Page</div>,
  },
];