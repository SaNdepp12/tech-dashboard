import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { KPICard } from "../components/KPICard";
import { ChartContainer } from "../components/ChartContainer";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { AlertTriangle, Clock, UserX } from "lucide-react";
const stageTimeData = [
    { stage: "Started", avgTime: 0.02 },
    { stage: "Personal Details", avgTime: 1.2 },
    { stage: "KYC Upload", avgTime: 1.8 },
    { stage: "Verification", avgTime: 1.5 },
    { stage: "Account Setup", avgTime: 0.8 },
];
const heatmapData = [
    { stage: "Personal Details", low: 25, medium: 45, high: 30 },
    { stage: "KYC Upload", low: 15, medium: 35, high: 50 },
    { stage: "Verification", low: 20, medium: 40, high: 40 },
    { stage: "Account Setup", low: 35, medium: 50, high: 15 },
];
export function BottleneckAnalysis() {
    const getBarColor = (value) => {
        if (value >= 1.5)
            return "#dc2626";
        if (value >= 1.0)
            return "#f59e0b";
        return "#10b981";
    };
    return (_jsxs("div", { className: "p-8", children: [_jsxs("div", { className: "mb-6 pb-4 border-b-2 border-[#004C8F]", children: [_jsx("h2", { className: "text-gray-900 font-semibold text-xl", children: "Time Bottleneck Analysis" }), _jsx("p", { className: "text-gray-500 text-sm mt-1", children: "Identifying stages where users spend the most time" })] }), _jsxs("div", { className: "grid grid-cols-3 gap-4 mb-6", children: [_jsx(KPICard, { title: "Longest Stage", value: "KYC Upload", subtitle: "1.8 days average", icon: AlertTriangle, variant: "danger" }), _jsx(KPICard, { title: "Average Stage Time", value: "1.1 days", subtitle: "Across all stages", icon: Clock }), _jsx(KPICard, { title: "Users Exceeding SLA", value: "2,800", subtitle: "28% of total users", icon: UserX, variant: "danger" })] }), _jsx("div", { className: "mb-6", children: _jsx(ChartContainer, { title: "Average Time Spent per Stage", subtitle: "Days spent at each onboarding stage", children: _jsx(ResponsiveContainer, { width: "100%", height: 320, children: _jsxs(BarChart, { data: stageTimeData, layout: "horizontal", children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#e5e7eb" }), _jsx(XAxis, { dataKey: "stage", tick: { fill: '#6b7280', fontSize: 12 } }), _jsx(YAxis, { tick: { fill: '#6b7280', fontSize: 12 }, label: { value: 'Days', angle: -90, position: 'insideLeft', fill: '#6b7280', fontSize: 12 } }), _jsx(Tooltip, {}), _jsx(Bar, { dataKey: "avgTime", radius: [4, 4, 0, 0], children: stageTimeData.map((entry, index) => (_jsx(Cell, { fill: getBarColor(entry.avgTime) }, `cell-${index}`))) })] }) }) }) }), _jsxs(ChartContainer, { title: "Stage vs Time Intensity Distribution", subtitle: "Percentage of users by time spent (Low: <1 day, Medium: 1-2 days, High: >2 days)", children: [_jsx("div", { className: "space-y-4", children: heatmapData.map((item, index) => (_jsxs("div", { children: [_jsx("p", { className: "text-sm text-gray-700 mb-2", children: item.stage }), _jsxs("div", { className: "flex h-10 rounded overflow-hidden", children: [_jsxs("div", { className: "bg-green-500 flex items-center justify-center text-white text-xs font-medium", style: { width: `${item.low}%` }, children: [item.low, "%"] }), _jsxs("div", { className: "bg-amber-500 flex items-center justify-center text-white text-xs font-medium", style: { width: `${item.medium}%` }, children: [item.medium, "%"] }), _jsxs("div", { className: "bg-[#ED1C24] flex items-center justify-center text-white text-xs font-medium", style: { width: `${item.high}%` }, children: [item.high, "%"] })] })] }, index))) }), _jsxs("div", { className: "mt-6 flex items-center justify-center gap-6", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-4 h-4 bg-green-500 rounded" }), _jsx("span", { className: "text-xs text-gray-600", children: "Low (<1 day)" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-4 h-4 bg-amber-500 rounded" }), _jsx("span", { className: "text-xs text-gray-600", children: "Medium (1-2 days)" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-4 h-4 bg-[#ED1C24] rounded" }), _jsx("span", { className: "text-xs text-gray-600", children: "High (>2 days)" })] })] })] })] }));
}
