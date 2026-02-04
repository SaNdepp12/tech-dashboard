import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { KPICard } from "../../components/KPICard";
import { ChartContainer } from "../../components/ChartContainer";
import { DataTable } from "../../components/DataTable";
import { Clock, Timer, Zap, TrendingUp } from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";
const stageTimeData = [
    { stage: "Initial Load", p50: 0.8, p75: 1.2, p95: 2.1, p99: 3.5 },
    { stage: "Authentication", p50: 1.5, p75: 2.3, p95: 4.2, p99: 6.8 },
    { stage: "Form Validation", p50: 0.5, p75: 0.9, p95: 1.8, p99: 3.2 },
    { stage: "Document Upload", p50: 3.2, p75: 5.1, p95: 8.9, p99: 15.2 },
    { stage: "KYC Processing", p50: 12.5, p75: 18.3, p95: 28.7, p99: 42.1 },
    { stage: "Verification", p50: 8.2, p75: 12.6, p95: 20.4, p99: 35.8 },
    { stage: "Account Creation", p50: 2.1, p75: 3.4, p95: 5.9, p99: 9.2 },
];
const latencyTrendData = [
    { time: "00:00", avg: 245, p95: 450, p99: 680 },
    { time: "04:00", avg: 268, p95: 489, p99: 712 },
    { time: "08:00", avg: 312, p95: 556, p99: 845 },
    { time: "12:00", avg: 289, p95: 523, p99: 778 },
    { time: "16:00", avg: 305, p95: 541, p99: 812 },
    { time: "20:00", avg: 256, p95: 467, p99: 695 },
];
const timeDistributionData = [
    { range: "<500ms", count: 8234, percentage: 68.5 },
    { range: "500ms-1s", count: 2145, percentage: 17.8 },
    { range: "1s-2s", count: 982, percentage: 8.2 },
    { range: "2s-5s", count: 445, percentage: 3.7 },
    { range: ">5s", count: 214, percentage: 1.8 },
];
const endpointPerformanceData = [
    { endpoint: "/api/auth/login", avgTime: "245ms", p95: "450ms", calls: "12,456", errorRate: "0.2%" },
    { endpoint: "/api/kyc/upload", avgTime: "3,250ms", p95: "5,890ms", calls: "8,234", errorRate: "1.2%" },
    { endpoint: "/api/user/validate", avgTime: "180ms", p95: "320ms", calls: "15,678", errorRate: "0.1%" },
    { endpoint: "/api/document/verify", avgTime: "8,450ms", p95: "15,230ms", calls: "7,892", errorRate: "2.3%" },
    { endpoint: "/api/account/create", avgTime: "1,890ms", p95: "3,450ms", calls: "6,234", errorRate: "0.8%" },
];
const COLORS = ['#10b981', '#22c55e', '#fbbf24', '#f59e0b', '#ED1C24'];
export function TimeSpentDistribution() {
    const columns = [
        { header: "Endpoint", accessor: "endpoint", render: (value) => _jsx("code", { className: "text-xs bg-gray-100 px-2 py-1 rounded", children: value }) },
        { header: "Avg Time", accessor: "avgTime" },
        { header: "P95", accessor: "p95" },
        { header: "Total Calls", accessor: "calls" },
        { header: "Error Rate", accessor: "errorRate", render: (value) => _jsx("span", { className: parseFloat(value) > 1 ? "text-red-600 font-semibold" : "text-green-600", children: value }) },
    ];
    return (_jsxs("div", { className: "p-8", children: [_jsxs("div", { className: "mb-6 pb-4 border-b-2 border-[#004C8F]", children: [_jsx("h2", { className: "text-gray-900 font-semibold text-xl", children: "Time Spent Distribution" }), _jsx("p", { className: "text-gray-500 text-sm mt-1", children: "Performance metrics and latency analysis across system components" })] }), _jsxs("div", { className: "grid grid-cols-4 gap-4 mb-6", children: [_jsx(KPICard, { title: "Average Response Time", value: "279ms", icon: Zap, variant: "success", trend: { value: "12ms improvement", isPositive: true } }), _jsx(KPICard, { title: "P95 Latency", value: "503ms", icon: Clock, subtitle: "95th percentile" }), _jsx(KPICard, { title: "P99 Latency", value: "763ms", icon: Timer, subtitle: "99th percentile" }), _jsx(KPICard, { title: "Requests < 500ms", value: "68.5%", icon: TrendingUp, variant: "success", subtitle: "Performance target met" })] }), _jsxs("div", { className: "grid grid-cols-2 gap-6 mb-6", children: [_jsx(ChartContainer, { title: "Response Time Distribution", subtitle: "Request count by latency buckets", children: _jsx(ResponsiveContainer, { width: "100%", height: 280, children: _jsxs(BarChart, { data: timeDistributionData, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#e5e7eb" }), _jsx(XAxis, { dataKey: "range", tick: { fill: '#6b7280', fontSize: 12 } }), _jsx(YAxis, { tick: { fill: '#6b7280', fontSize: 12 }, label: { value: 'Requests', angle: -90, position: 'insideLeft', fill: '#6b7280', fontSize: 12 } }), _jsx(Tooltip, {}), _jsx(Bar, { dataKey: "count", radius: [4, 4, 0, 0], children: timeDistributionData.map((entry, index) => (_jsx(Cell, { fill: COLORS[index] }, `cell-${index}`))) })] }) }) }), _jsx(ChartContainer, { title: "Latency Over Time (24h)", subtitle: "Average, P95, and P99 response times", children: _jsx(ResponsiveContainer, { width: "100%", height: 280, children: _jsxs(LineChart, { data: latencyTrendData, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#e5e7eb" }), _jsx(XAxis, { dataKey: "time", tick: { fill: '#6b7280', fontSize: 12 } }), _jsx(YAxis, { tick: { fill: '#6b7280', fontSize: 12 }, label: { value: 'ms', angle: -90, position: 'insideLeft', fill: '#6b7280', fontSize: 12 } }), _jsx(Tooltip, {}), _jsx(Legend, {}), _jsx(Line, { type: "monotone", dataKey: "avg", stroke: "#10b981", strokeWidth: 2, name: "Average", dot: { r: 3 } }), _jsx(Line, { type: "monotone", dataKey: "p95", stroke: "#f59e0b", strokeWidth: 2, name: "P95", dot: { r: 3 } }), _jsx(Line, { type: "monotone", dataKey: "p99", stroke: "#ED1C24", strokeWidth: 2, name: "P99", dot: { r: 3 } })] }) }) })] }), _jsx("div", { className: "mb-6", children: _jsx(ChartContainer, { title: "Stage-wise Time Distribution (seconds)", subtitle: "Performance percentiles across onboarding stages", children: _jsx(ResponsiveContainer, { width: "100%", height: 320, children: _jsxs(BarChart, { data: stageTimeData, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#e5e7eb" }), _jsx(XAxis, { dataKey: "stage", tick: { fill: '#6b7280', fontSize: 11 }, angle: -15, textAnchor: "end", height: 80 }), _jsx(YAxis, { tick: { fill: '#6b7280', fontSize: 12 }, label: { value: 'Seconds', angle: -90, position: 'insideLeft', fill: '#6b7280', fontSize: 12 } }), _jsx(Tooltip, {}), _jsx(Legend, {}), _jsx(Bar, { dataKey: "p50", fill: "#10b981", name: "P50 (Median)" }), _jsx(Bar, { dataKey: "p75", fill: "#22c55e", name: "P75" }), _jsx(Bar, { dataKey: "p95", fill: "#f59e0b", name: "P95" }), _jsx(Bar, { dataKey: "p99", fill: "#ED1C24", name: "P99" })] }) }) }) }), _jsx(ChartContainer, { title: "Endpoint Performance Analysis", subtitle: "Detailed metrics for key API endpoints", children: _jsx(DataTable, { columns: columns, data: endpointPerformanceData }) })] }));
}
