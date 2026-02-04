import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("div", { className: "flex h-screen bg-gray-50", children: [_jsxs("aside", { className: "w-64 bg-[#004C8F] flex flex-col", children: [_jsxs("div", { className: "p-6 border-b border-[#003666]", children: [_jsxs("div", { className: "flex items-center gap-2 mb-2", children: [_jsx("div", { className: "w-8 h-8 bg-[#ED1C24] rounded flex items-center justify-center", children: _jsx("span", { className: "text-white font-bold text-sm", children: "H" }) }), _jsx("h1", { className: "font-semibold text-white", children: "HDFC Bank" })] }), _jsx("p", { className: "text-sm text-blue-200", children: "Digital Onboarding Analytics" })] }), _jsx("nav", { className: "flex-1 p-4 overflow-y-auto", children: navItems.map((item) => {
                            const Icon = item.icon;
                            return (_jsxs(NavLink, { to: item.path, end: item.path === "/", className: ({ isActive }) => `flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-colors ${isActive
                                    ? "bg-[#ED1C24] text-white"
                                    : "text-blue-100 hover:bg-[#003666]"}`, children: [_jsx(Icon, { className: "w-5 h-5" }), _jsx("span", { className: "text-sm", children: item.label })] }, item.path));
                        }) }), _jsx("div", { className: "p-4 border-t border-[#003666]", children: _jsx("p", { className: "text-xs text-blue-200", children: "\u00A9 2026 HDFC Bank Ltd." }) })] }), _jsx("main", { className: "flex-1 overflow-y-auto", children: _jsx(Outlet, {}) })] }));
}
