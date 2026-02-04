import { Outlet, NavLink } from "react-router";
import { LayoutDashboard, Clock, TrendingUp, Wifi, AlertTriangle, UserX, Calendar } from "lucide-react";

export function Layout() {
  const navItems = [
    { path: "/", label: "Executive Summary", icon: LayoutDashboard },
    { path: "/average-time", label: "Average Time", icon: Clock },
    { path: "/funnel", label: "Onboarding Funnel", icon: TrendingUp },
    { path: "/channels", label: "Channel Performance", icon: Wifi },
    { path: "/bottlenecks", label: "Bottleneck Analysis", icon: AlertTriangle },
    { path: "/friction", label: "Friction Indicators", icon: UserX },
    { path: "/trends", label: "Trends Over Time", icon: Calendar },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-[#004C8F] flex flex-col">
        <div className="p-6 border-b border-[#003666]">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-[#ED1C24] rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <h1 className="font-semibold text-white">HDFC Bank</h1>
          </div>
          <p className="text-sm text-blue-200">Digital Onboarding Analytics</p>
        </div>
        
        <nav className="flex-1 p-4 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-colors ${
                    isActive
                      ? "bg-[#ED1C24] text-white"
                      : "text-blue-100 hover:bg-[#003666]"
                  }`
                }
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
        
        <div className="p-4 border-t border-[#003666]">
          <p className="text-xs text-blue-200">© 2026 HDFC Bank Ltd.</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}