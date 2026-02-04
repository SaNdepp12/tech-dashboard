import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { KPICard } from "../components/KPICard";
import { ChartContainer } from "../components/ChartContainer";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Users, CheckCircle, UserX } from "lucide-react";
const funnelData = [
    { stage: "Started", users: 10000, percentage: 100, dropOff: 0 },
    { stage: "Personal Details", users: 8500, percentage: 85, dropOff: 15 },
    { stage: "KYC Upload", users: 7200, percentage: 72, dropOff: 15.3 },
    { stage: "Verification", users: 6800, percentage: 68, dropOff: 5.6 },
    { stage: "Completed", users: 6500, percentage: 65, dropOff: 4.4 },
];
const dropOffData = [
    { stage: "Started", dropOff: 0 },
    { stage: "Personal Details", dropOff: 15 },
    { stage: "KYC Upload", dropOff: 15.3 },
    { stage: "Verification", dropOff: 5.6 },
    { stage: "Completed", dropOff: 4.4 },
];
const COLORS = ['#10b981', '#004C8F', '#004C8F', '#004C8F', '#004C8F'];
export function OnboardingFunnel() {
    return (_jsxs("div", { className: "p-8", children: [_jsxs("div", { className: "mb-6 pb-4 border-b-2 border-[#004C8F]", children: [_jsx("h2", { className: "text-gray-900 font-semibold text-xl", children: "Overall Onboarding Funnel" }), _jsx("p", { className: "text-gray-500 text-sm mt-1", children: "Complete view of user progression through onboarding stages" })] }), _jsxs(ChartContainer, { title: "Onboarding Stage Progression", subtitle: "User count and conversion at each stage", children: [_jsx(ResponsiveContainer, { width: "100%", height: 350, children: _jsxs(BarChart, { data: funnelData, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#e5e7eb" }), _jsx(XAxis, { dataKey: "stage", tick: { fill: '#6b7280', fontSize: 12 } }), _jsx(YAxis, { tick: { fill: '#6b7280', fontSize: 12 }, label: { value: 'Users', angle: -90, position: 'insideLeft', fill: '#6b7280', fontSize: 12 } }), _jsx(Tooltip, {}), _jsx(Bar, { dataKey: "users", radius: [4, 4, 0, 0], children: funnelData.map((entry, index) => (_jsx(Cell, { fill: COLORS[index] }, `cell-${index}`))) })] }) }), _jsx("div", { className: "mt-6 grid grid-cols-5 gap-4", children: funnelData.map((item, index) => (_jsxs("div", { className: "text-center p-3 bg-gray-50 rounded", children: [_jsx("p", { className: "text-xs text-gray-600 mb-1", children: item.stage }), _jsx("p", { className: "text-lg font-semibold text-gray-900", children: item.users.toLocaleString() }), _jsxs("p", { className: "text-xs text-gray-500 mt-1", children: [item.percentage, "% of started"] })] }, index))) })] }), _jsxs("div", { className: "grid grid-cols-3 gap-4 my-6", children: [_jsx(KPICard, { title: "Total Started", value: "10,000", icon: Users, subtitle: "Unique users initiated onboarding" }), _jsx(KPICard, { title: "Total Completed", value: "6,500", icon: CheckCircle, variant: "success", subtitle: "65% completion rate" }), _jsx(KPICard, { title: "Total Drop-Off", value: "3,500", icon: UserX, variant: "danger", subtitle: "35% attrition rate" })] }), _jsx(ChartContainer, { title: "Drop-off Percentage by Stage", subtitle: "Identifying the biggest friction points", children: _jsx(ResponsiveContainer, { width: "100%", height: 280, children: _jsxs(BarChart, { data: dropOffData, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#e5e7eb" }), _jsx(XAxis, { dataKey: "stage", tick: { fill: '#6b7280', fontSize: 12 } }), _jsx(YAxis, { tick: { fill: '#6b7280', fontSize: 12 }, label: { value: 'Drop-off %', angle: -90, position: 'insideLeft', fill: '#6b7280', fontSize: 12 } }), _jsx(Tooltip, {}), _jsx(Bar, { dataKey: "dropOff", fill: "#ED1C24", radius: [4, 4, 0, 0] })] }) }) })] }));
}
