import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("div", { className: "flex h-screen bg-gray-50", children: [_jsxs("aside", { className: "w-64 bg-[#004C8F] flex flex-col", children: [_jsxs("div", { className: "p-6 border-b border-[#003666]", children: [_jsxs("div", { className: "flex items-center gap-2 mb-2", children: [_jsx("div", { className: "w-8 h-8 bg-[#ED1C24] rounded flex items-center justify-center", children: _jsx(Code, { className: "w-5 h-5 text-white" }) }), _jsx("h1", { className: "font-semibold text-white", children: "HDFC Bank" })] }), _jsx("p", { className: "text-sm text-blue-200", children: "Technical Analytics Dashboard" })] }), _jsx("nav", { className: "flex-1 p-4 overflow-y-auto", children: navItems.map((item) => {
                            const Icon = item.icon;
                            return (_jsxs(NavLink, { to: item.path, end: item.path === "/", className: ({ isActive }) => `flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-colors ${isActive
                                    ? "bg-[#ED1C24] text-white"
                                    : "text-blue-100 hover:bg-[#003666]"}`, children: [_jsx(Icon, { className: "w-5 h-5" }), _jsx("span", { className: "text-sm", children: item.label })] }, item.path));
                        }) }), _jsxs("div", { className: "p-4 border-t border-[#003666]", children: [_jsxs("div", { className: "mb-2", children: [_jsxs("div", { className: "flex items-center justify-between text-xs text-blue-200 mb-1", children: [_jsx("span", { children: "System Health" }), _jsx("span", { className: "text-green-400", children: "99.8%" })] }), _jsx("div", { className: "w-full bg-[#003666] rounded-full h-1.5", children: _jsx("div", { className: "bg-green-400 h-1.5 rounded-full", style: { width: '99.8%' } }) })] }), _jsx("p", { className: "text-xs text-blue-200 mt-3", children: "\u00A9 2026 HDFC Bank Ltd." })] })] }), _jsx("main", { className: "flex-1 overflow-y-auto", children: _jsx(Outlet, {}) })] }));
}
