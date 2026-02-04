import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { KPICard } from "../../components/KPICard";
import { ChartContainer } from "../../components/ChartContainer";
import { DataTable } from "../../components/DataTable";
import { FilterBar } from "../../components/FilterBar";
import { useState } from "react";
import { AlertCircle, XCircle, Clock } from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell } from "recharts";
const statusCodeData = [
    { code: "200 OK", count: 45678, percentage: 95.2 },
    { code: "400 Bad Request", count: 823, percentage: 1.7 },
    { code: "401 Unauthorized", count: 456, percentage: 0.9 },
    { code: "404 Not Found", count: 234, percentage: 0.5 },
    { code: "500 Internal Server", count: 512, percentage: 1.1 },
    { code: "503 Service Unavailable", count: 289, percentage: 0.6 },
];
const apiErrorTrendData = [
    { time: "00:00", status4xx: 12, status5xx: 8 },
    { time: "04:00", status4xx: 15, status5xx: 11 },
    { time: "08:00", status4xx: 34, status5xx: 23 },
    { time: "12:00", status4xx: 45, status5xx: 28 },
    { time: "16:00", status4xx: 38, status5xx: 31 },
    { time: "20:00", status4xx: 28, status5xx: 19 },
];
const errorsByServiceData = [
    { service: "Auth Service", errors: 456, color: "#ED1C24" },
    { service: "KYC Service", errors: 512, color: "#f59e0b" },
    { service: "Document Service", errors: 389, color: "#8b5cf6" },
    { service: "Payment Service", errors: 234, color: "#004C8F" },
    { service: "Notification Service", errors: 178, color: "#6366f1" },
];
const apiEndpointErrorsData = [
    { endpoint: "/api/auth/verify", errors: 234, avgTime: "2,450ms", errorRate: "3.2%", lastError: "2 mins ago" },
    { endpoint: "/api/kyc/process", errors: 512, avgTime: "8,920ms", errorRate: "6.8%", lastError: "5 mins ago" },
    { endpoint: "/api/document/scan", errors: 389, avgTime: "5,670ms", errorRate: "4.5%", lastError: "1 min ago" },
    { endpoint: "/api/payment/initialize", errors: 156, avgTime: "3,210ms", errorRate: "2.1%", lastError: "8 mins ago" },
    { endpoint: "/api/user/profile", errors: 89, avgTime: "890ms", errorRate: "0.9%", lastError: "12 mins ago" },
];
export function APIErrorPage() {
    const [timeRange, setTimeRange] = useState("Last 24 Hours");
    const [service, setService] = useState("All Services");
    const [errorType, setErrorType] = useState("All Errors");
    const filters = [
        { label: "Time Range", options: ["Last Hour", "Last 24 Hours", "Last 7 Days", "Last 30 Days"], value: timeRange, onChange: setTimeRange },
        { label: "Service", options: ["All Services", "Auth Service", "KYC Service", "Document Service", "Payment Service"], value: service, onChange: setService },
        { label: "Error Type", options: ["All Errors", "4xx Errors", "5xx Errors", "Timeout", "Connection"], value: errorType, onChange: setErrorType },
    ];
    const columns = [
        { header: "API Endpoint", accessor: "endpoint", render: (value) => _jsx("code", { className: "text-xs bg-gray-100 px-2 py-1 rounded", children: value }) },
        { header: "Total Errors", accessor: "errors", render: (value) => _jsx("span", { className: "text-red-600 font-semibold", children: value }) },
        { header: "Avg Response Time", accessor: "avgTime" },
        { header: "Error Rate", accessor: "errorRate", render: (value) => _jsx("span", { className: parseFloat(value) > 5 ? "text-red-600" : "text-orange-600", children: value }) },
        { header: "Last Error", accessor: "lastError" },
    ];
    return (_jsxs("div", { className: "p-8", children: [_jsxs("div", { className: "mb-6 pb-4 border-b-2 border-[#004C8F]", children: [_jsx("h2", { className: "text-gray-900 font-semibold text-xl", children: "API Error Analysis" }), _jsx("p", { className: "text-gray-500 text-sm mt-1", children: "Comprehensive API failure tracking and diagnostics" })] }), _jsx(FilterBar, { filters: filters }), _jsxs("div", { className: "grid grid-cols-4 gap-4 mb-6", children: [_jsx(KPICard, { title: "Total API Errors", value: "2,314", icon: AlertCircle, variant: "danger", trend: { value: "15% decrease", isPositive: true } }), _jsx(KPICard, { title: "4xx Client Errors", value: "1,513", icon: XCircle, subtitle: "65.4% of total" }), _jsx(KPICard, { title: "5xx Server Errors", value: "801", icon: XCircle, variant: "danger", subtitle: "34.6% of total" }), _jsx(KPICard, { title: "Avg Error Resolution", value: "18 mins", icon: Clock, trend: { value: "5 mins improvement", isPositive: true } })] }), _jsxs("div", { className: "grid grid-cols-2 gap-6 mb-6", children: [_jsx(ChartContainer, { title: "HTTP Status Code Distribution", subtitle: "Breakdown of response codes", children: _jsx(ResponsiveContainer, { width: "100%", height: 280, children: _jsxs(BarChart, { data: statusCodeData, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#e5e7eb" }), _jsx(XAxis, { dataKey: "code", tick: { fill: '#6b7280', fontSize: 11 }, angle: -15, textAnchor: "end", height: 80 }), _jsx(YAxis, { tick: { fill: '#6b7280', fontSize: 12 } }), _jsx(Tooltip, {}), _jsx(Bar, { dataKey: "count", radius: [4, 4, 0, 0], children: statusCodeData.map((entry, index) => (_jsx(Cell, { fill: entry.code.includes('200') ? '#10b981' : entry.code.includes('4') ? '#f59e0b' : '#ED1C24' }, `cell-${index}`))) })] }) }) }), _jsx(ChartContainer, { title: "API Error Trend (24h)", subtitle: "4xx and 5xx errors over time", children: _jsx(ResponsiveContainer, { width: "100%", height: 280, children: _jsxs(LineChart, { data: apiErrorTrendData, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#e5e7eb" }), _jsx(XAxis, { dataKey: "time", tick: { fill: '#6b7280', fontSize: 12 } }), _jsx(YAxis, { tick: { fill: '#6b7280', fontSize: 12 }, label: { value: 'Errors', angle: -90, position: 'insideLeft', fill: '#6b7280', fontSize: 12 } }), _jsx(Tooltip, {}), _jsx(Legend, {}), _jsx(Line, { type: "monotone", dataKey: "status4xx", stroke: "#f59e0b", strokeWidth: 2, name: "4xx Errors", dot: { fill: '#f59e0b', r: 4 } }), _jsx(Line, { type: "monotone", dataKey: "status5xx", stroke: "#ED1C24", strokeWidth: 2, name: "5xx Errors", dot: { fill: '#ED1C24', r: 4 } })] }) }) })] }), _jsxs("div", { className: "grid grid-cols-2 gap-6 mb-6", children: [_jsx(ChartContainer, { title: "Errors by Microservice", subtitle: "Error distribution across services", children: _jsx(ResponsiveContainer, { width: "100%", height: 280, children: _jsxs(PieChart, { children: [_jsx(Pie, { data: errorsByServiceData, cx: "50%", cy: "50%", labelLine: false, label: ({ name, value }) => `${name}: ${value}`, outerRadius: 100, dataKey: "errors", children: errorsByServiceData.map((entry, index) => (_jsx(Cell, { fill: entry.color }, `cell-${index}`))) }), _jsx(Tooltip, {})] }) }) }), _jsx(ChartContainer, { title: "Top Failing Endpoints", subtitle: "APIs with highest error counts", children: _jsx(ResponsiveContainer, { width: "100%", height: 280, children: _jsxs(BarChart, { data: apiEndpointErrorsData, layout: "vertical", children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#e5e7eb" }), _jsx(XAxis, { type: "number", tick: { fill: '#6b7280', fontSize: 12 } }), _jsx(YAxis, { type: "category", dataKey: "endpoint", tick: { fill: '#6b7280', fontSize: 10 }, width: 150 }), _jsx(Tooltip, {}), _jsx(Bar, { dataKey: "errors", fill: "#ED1C24", radius: [0, 4, 4, 0] })] }) }) })] }), _jsx(ChartContainer, { title: "API Endpoint Error Details", subtitle: "Comprehensive error metrics for each endpoint", children: _jsx(DataTable, { columns: columns, data: apiEndpointErrorsData }) })] }));
}
