import { HomeIcon, UserIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const { pathname } = useLocation();

  const navItems = [
    { name: "Home", icon: HomeIcon, path: "/" },
    { name: "About", icon: UserIcon, path: "/about" },
    { name: "Projects", icon: UserIcon, path: "/projects" },
    { name: "Contact", icon: EnvelopeIcon, path: "/contact" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-md border-t border-gray-200 md:hidden">
      <div className="flex justify-around px-4 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;

          return (
            <Link
              to={item.path}
              key={item.name}
              className={`flex flex-col items-center text-xs ${
                isActive ? "text-black" : "text-gray-400"
              }`}
            >
              <Icon className="h-6 w-6 mb-1" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
