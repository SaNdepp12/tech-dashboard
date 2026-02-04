import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function KPICard({ title, value, subtitle, trend, icon: Icon, variant = "default" }) {
    const variantStyles = {
        default: "border-gray-200",
        success: "border-green-200 bg-green-50",
        danger: "border-red-200 bg-red-50"
    };
    const valueColor = {
        default: "text-gray-900",
        success: "text-green-700",
        danger: "text-red-700"
    };
    const iconBg = {
        default: "bg-[#004C8F]",
        success: "bg-green-600",
        danger: "bg-[#ED1C24]"
    };
    return (_jsx("div", { className: `bg-white border ${variantStyles[variant]} rounded-lg p-5 shadow-sm`, children: _jsxs("div", { className: "flex items-start justify-between", children: [_jsxs("div", { className: "flex-1", children: [_jsx("p", { className: "text-sm text-gray-600 mb-2", children: title }), _jsx("p", { className: `text-2xl font-semibold ${valueColor[variant]}`, children: value }), subtitle && (_jsx("p", { className: "text-xs text-gray-500 mt-1", children: subtitle })), trend && (_jsxs("p", { className: `text-xs mt-2 ${trend.isPositive ? "text-green-600" : "text-red-600"}`, children: [trend.isPositive ? "↑" : "↓", " ", trend.value] }))] }), Icon && (_jsx("div", { className: `w-10 h-10 rounded-lg ${iconBg[variant]} flex items-center justify-center`, children: _jsx(Icon, { className: "w-5 h-5 text-white" }) }))] }) }));
}
