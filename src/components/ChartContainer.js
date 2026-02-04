import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function ChartContainer({ title, subtitle, children, actions }) {
    return (_jsxs("div", { className: "bg-white border border-gray-200 rounded-lg p-6 shadow-sm", children: [_jsxs("div", { className: "flex items-start justify-between mb-6", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-gray-900 font-semibold", children: title }), subtitle && _jsx("p", { className: "text-sm text-gray-500 mt-1", children: subtitle })] }), actions && _jsx("div", { children: actions })] }), _jsx("div", { children: children })] }));
}
