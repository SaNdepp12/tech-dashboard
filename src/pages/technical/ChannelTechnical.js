import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { KPICard } from "../../components/KPICard";
import { ChartContainer } from "../../components/ChartContainer";
import { DataTable } from "../../components/DataTable";
import { Smartphone, Monitor, Users, Zap, AlertTriangle, CheckCircle } from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
const channelPerformanceData = [
    { metric: "Response Time", Web: 320, Mobile: 245, RM: 380 },
    { metric: "Error Rate", Web: 2.1, Mobile: 1.4, RM: 3.2 },
    { metric: "Success Rate", Web: 97.9, Mobile: 98.6, RM: 96.8 },
    { metric: "Session Duration", Web: 450, Mobile: 380, RM: 520 },
    { metric: "API Calls/User", Web: 28, Mobile: 32, RM: 42 },
];
const trafficDistributionData = [
    { time: "00:00", web: 234, mobile: 456, rm: 89 },
    { time: "04:00", web: 189, mobile: 378, rm: 67 },
    { time: "08:00", web: 567, mobile: 823, rm: 145 },
    { time: "12:00", web: 689, mobile: 1024, rm: 189 },
    { time: "16:00", web: 634, mobile: 945, rm: 178 },
    { time: "20:00", web: 445, mobile: 678, rm: 123 },
];
const channelReliabilityData = [
    { channel: "Web Desktop", uptime: 99.8, avgLatency: 320, errors: 234, throughput: 1245 },
    { channel: "Web Mobile", uptime: 99.7, avgLatency: 345, errors: 267, throughput: 1089 },
    { channel: "Mobile iOS", uptime: 99.9, avgLatency: 245, errors: 123, throughput: 2345 },
    { channel: "Mobile Android", uptime: 99.8, avgLatency: 268, errors: 156, throughput: 2567 },
    { channel: "RM Portal", uptime: 99.6, avgLatency: 380, errors: 289, throughput: 678 },
];
const deviceBreakdownData = [
    { device: "iOS", requests: 12456, errors: 123, avgTime: "245ms" },
    { device: "Android", requests: 15234, errors: 156, avgTime: "268ms" },
    { device: "Desktop", requests: 8934, errors: 234, avgTime: "320ms" },
    { device: "Tablet", requests: 2345, errors: 67, avgTime: "298ms" },
    { device: "RM Desktop", requests: 4567, errors: 289, avgTime: "380ms" },
];
export function ChannelTechnical() {
    const columns = [
        { header: "Channel", accessor: "channel" },
        { header: "Uptime %", accessor: "uptime", render: (value) => _jsxs("span", { className: value >= 99.8 ? "text-green-600 font-semibold" : "text-orange-600", children: [value, "%"] }) },
        { header: "Avg Latency", accessor: "avgLatency", render: (value) => `${value}ms` },
        { header: "Total Errors", accessor: "errors", render: (value) => _jsx("span", { className: "text-red-600", children: value }) },
        { header: "Throughput (req/min)", accessor: "throughput", render: (value) => value.toLocaleString() },
    ];
    const deviceColumns = [
        { header: "Device Type", accessor: "device" },
        { header: "Total Requests", accessor: "requests", render: (value) => value.toLocaleString() },
        { header: "Errors", accessor: "errors" },
        { header: "Avg Response Time", accessor: "avgTime" },
        {
            header: "Error Rate",
            accessor: "errors",
            render: (_, row) => {
                const rate = ((row.errors / row.requests) * 100).toFixed(2);
                return _jsxs("span", { className: parseFloat(rate) > 1 ? "text-red-600" : "text-green-600", children: [rate, "%"] });
            }
        },
    ];
    return (_jsxs("div", { className: "p-8", children: [_jsxs("div", { className: "mb-6 pb-4 border-b-2 border-[#004C8F]", children: [_jsx("h2", { className: "text-gray-900 font-semibold text-xl", children: "Channel Performance - Technical View" }), _jsx("p", { className: "text-gray-500 text-sm mt-1", children: "Infrastructure and performance metrics across channels" })] }), _jsxs("div", { className: "grid grid-cols-6 gap-4 mb-6", children: [_jsx(KPICard, { title: "Web Uptime", value: "99.8%", icon: Monitor, variant: "success" }), _jsx(KPICard, { title: "Mobile Uptime", value: "99.9%", icon: Smartphone, variant: "success" }), _jsx(KPICard, { title: "RM Uptime", value: "99.6%", icon: Users, trend: { value: "0.1% improvement", isPositive: true } }), _jsx(KPICard, { title: "Fastest Channel", value: "Mobile", subtitle: "245ms avg", icon: Zap, variant: "success" }), _jsx(KPICard, { title: "Most Errors", value: "RM Portal", subtitle: "289 errors", icon: AlertTriangle, variant: "danger" }), _jsx(KPICard, { title: "Best Reliability", value: "Mobile iOS", subtitle: "99.9% uptime", icon: CheckCircle, variant: "success" })] }), _jsxs("div", { className: "grid grid-cols-2 gap-6 mb-6", children: [_jsx(ChartContainer, { title: "Channel Performance Comparison", subtitle: "Multi-metric analysis across channels", children: _jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(RadarChart, { data: channelPerformanceData, children: [_jsx(PolarGrid, { stroke: "#e5e7eb" }), _jsx(PolarAngleAxis, { dataKey: "metric", tick: { fill: '#6b7280', fontSize: 11 } }), _jsx(PolarRadiusAxis, { tick: { fill: '#6b7280', fontSize: 10 } }), _jsx(Radar, { name: "Web", dataKey: "Web", stroke: "#004C8F", fill: "#004C8F", fillOpacity: 0.3 }), _jsx(Radar, { name: "Mobile", dataKey: "Mobile", stroke: "#10b981", fill: "#10b981", fillOpacity: 0.3 }), _jsx(Radar, { name: "RM", dataKey: "RM", stroke: "#f59e0b", fill: "#f59e0b", fillOpacity: 0.3 }), _jsx(Legend, {})] }) }) }), _jsx(ChartContainer, { title: "Traffic Distribution (24h)", subtitle: "Request volume by channel", children: _jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(LineChart, { data: trafficDistributionData, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#e5e7eb" }), _jsx(XAxis, { dataKey: "time", tick: { fill: '#6b7280', fontSize: 12 } }), _jsx(YAxis, { tick: { fill: '#6b7280', fontSize: 12 }, label: { value: 'Requests', angle: -90, position: 'insideLeft', fill: '#6b7280', fontSize: 12 } }), _jsx(Tooltip, {}), _jsx(Legend, {}), _jsx(Line, { type: "monotone", dataKey: "web", stroke: "#004C8F", strokeWidth: 2, name: "Web", dot: { r: 3 } }), _jsx(Line, { type: "monotone", dataKey: "mobile", stroke: "#10b981", strokeWidth: 2, name: "Mobile", dot: { r: 3 } }), _jsx(Line, { type: "monotone", dataKey: "rm", stroke: "#f59e0b", strokeWidth: 2, name: "RM", dot: { r: 3 } })] }) }) })] }), _jsx("div", { className: "mb-6", children: _jsx(ChartContainer, { title: "Request Volume by Device Type", subtitle: "Total API calls from each device category", children: _jsx(ResponsiveContainer, { width: "100%", height: 280, children: _jsxs(BarChart, { data: deviceBreakdownData, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#e5e7eb" }), _jsx(XAxis, { dataKey: "device", tick: { fill: '#6b7280', fontSize: 12 } }), _jsx(YAxis, { tick: { fill: '#6b7280', fontSize: 12 } }), _jsx(Tooltip, {}), _jsx(Bar, { dataKey: "requests", fill: "#004C8F", radius: [4, 4, 0, 0] })] }) }) }) }), _jsx("div", { className: "mb-6", children: _jsx(ChartContainer, { title: "Channel Reliability Metrics", subtitle: "Uptime, latency, and error rates by channel", children: _jsx(DataTable, { columns: columns, data: channelReliabilityData }) }) }), _jsx(ChartContainer, { title: "Device Type Performance", subtitle: "Detailed breakdown by device category", children: _jsx(DataTable, { columns: deviceColumns, data: deviceBreakdownData }) })] }));
}
