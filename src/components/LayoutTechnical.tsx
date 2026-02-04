import { Outlet, NavLink } from "react-router";
import { LayoutDashboard, AlertCircle, Clock, Cloud, Wifi, Server, Code } from "lucide-react";

export function LayoutTechnical() {
  const navItems = [
    { path: "/", label: "Technical Overview", icon: LayoutDashboard },
    { path: "/error-codes", label: "Error Code Analysis", icon: AlertCircle },
    { path: "/time-distribution", label: "Time Spent Distribution", icon: Clock },
    { path: "/api-errors", label: "API Error Analysis", icon: Cloud },
    { path: "/channel-tech", label: "Channel Performance", icon: Wifi },
    { path: "/server-errors", label: "Server Errors", icon: Server },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-[#004C8F] flex flex-col">
        <div className="p-6 border-b border-[#003666]">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-[#ED1C24] rounded flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <h1 className="font-semibold text-white">HDFC Bank</h1>
          </div>
          <p className="text-sm text-blue-200">Technical Analytics Dashboard</p>
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
          <div className="mb-2">
            <div className="flex items-center justify-between text-xs text-blue-200 mb-1">
              <span>System Health</span>
              <span className="text-green-400">99.8%</span>
            </div>
            <div className="w-full bg-[#003666] rounded-full h-1.5">
              <div className="bg-green-400 h-1.5 rounded-full" style={{ width: '99.8%' }}></div>
            </div>
          </div>
          <p className="text-xs text-blue-200 mt-3">© 2026 HDFC Bank Ltd.</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
