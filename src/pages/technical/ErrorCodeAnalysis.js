import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { KPICard } from "../../components/KPICard";
import { ChartContainer } from "../../components/ChartContainer";
import { DataTable } from "../../components/DataTable";
import { AlertTriangle, XCircle, AlertOctagon, Info } from "lucide-react";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
const errorCodeData = [
    { code: "ERR_KYC_001", count: 1245, percentage: 32, description: "Invalid document format" },
    { code: "ERR_AUTH_002", count: 856, percentage: 22, description: "Authentication timeout" },
    { code: "ERR_VALID_003", count: 623, percentage: 16, description: "Missing required fields" },
    { code: "ERR_NET_004", count: 445, percentage: 11, description: "Network connection lost" },
    { code: "ERR_DB_005", count: 389, percentage: 10, description: "Database query timeout" },
    { code: "ERR_API_006", count: 234, percentage: 6, description: "External API failure" },
    { code: "OTHER", count: 108, percentage: 3, description: "Other errors" },
];
const errorTrendData = [
    { date: "Mon", critical: 45, high: 123, medium: 234, low: 89 },
    { date: "Tue", critical: 38, high: 145, medium: 256, low: 102 },
    { date: "Wed", critical: 52, high: 167, medium: 289, low: 95 },
    { date: "Thu", critical: 41, high: 134, medium: 267, low: 108 },
    { date: "Fri", critical: 35, high: 128, medium: 245, low: 97 },
    { date: "Sat", critical: 28, high: 98, medium: 178, low: 76 },
    { date: "Sun", critical: 22, high: 87, medium: 156, low: 68 },
];
const errorCategoryData = [
    { name: "Validation Errors", value: 1868, color: "#f59e0b" },
    { name: "Authentication", value: 856, color: "#ED1C24" },
    { name: "Network Issues", value: 445, color: "#8b5cf6" },
    { name: "Database Errors", value: 389, color: "#004C8F" },
    { name: "API Failures", value: 234, color: "#ef4444" },
    { name: "Other", value: 108, color: "#6b7280" },
];
const errorDetailsData = [
    { code: "ERR_KYC_001", occurrences: 1245, avgResolutionTime: "2.3 hrs", severity: "High", affected: "35%" },
    { code: "ERR_AUTH_002", occurrences: 856, avgResolutionTime: "0.5 hrs", severity: "Critical", affected: "24%" },
    { code: "ERR_VALID_003", occurrences: 623, avgResolutionTime: "1.2 hrs", severity: "Medium", affected: "18%" },
    { code: "ERR_NET_004", occurrences: 445, avgResolutionTime: "3.8 hrs", severity: "High", affected: "13%" },
    { code: "ERR_DB_005", occurrences: 389, avgResolutionTime: "4.5 hrs", severity: "Critical", affected: "11%" },
    { code: "ERR_API_006", occurrences: 234, avgResolutionTime: "2.1 hrs", severity: "High", affected: "7%" },
];
export function ErrorCodeAnalysis() {
    const columns = [
        { header: "Error Code", accessor: "code", render: (value) => _jsx("code", { className: "text-sm bg-gray-100 px-2 py-1 rounded", children: value }) },
        { header: "Occurrences", accessor: "occurrences", render: (value) => value.toLocaleString() },
        { header: "Avg Resolution Time", accessor: "avgResolutionTime" },
        {
            header: "Severity",
            accessor: "severity",
            render: (value) => {
                const colors = {
                    Critical: "bg-red-100 text-red-700",
                    High: "bg-orange-100 text-orange-700",
                    Medium: "bg-amber-100 text-amber-700",
                    Low: "bg-green-100 text-green-700"
                };
                return _jsx("span", { className: `px-2 py-1 rounded text-xs ${colors[value]}`, children: value });
            }
        },
        { header: "Users Affected", accessor: "affected" },
    ];
    return (_jsxs("div", { className: "p-8", children: [_jsxs("div", { className: "mb-6 pb-4 border-b-2 border-[#004C8F]", children: [_jsx("h2", { className: "text-gray-900 font-semibold text-xl", children: "Error Code Analysis" }), _jsx("p", { className: "text-gray-500 text-sm mt-1", children: "Comprehensive error tracking and categorization" })] }), _jsxs("div", { className: "grid grid-cols-4 gap-4 mb-6", children: [_jsx(KPICard, { title: "Total Errors (7 days)", value: "3,900", icon: AlertTriangle, variant: "danger", trend: { value: "8% decrease", isPositive: true } }), _jsx(KPICard, { title: "Critical Errors", value: "261", icon: XCircle, variant: "danger", subtitle: "6.7% of total" }), _jsx(KPICard, { title: "Most Common Error", value: "ERR_KYC_001", icon: AlertOctagon, subtitle: "1,245 occurrences" }), _jsx(KPICard, { title: "Avg Resolution Time", value: "2.4 hrs", icon: Info, trend: { value: "15% improvement", isPositive: true } })] }), _jsxs("div", { className: "grid grid-cols-2 gap-6 mb-6", children: [_jsx(ChartContainer, { title: "Error Distribution by Category", subtitle: "Breakdown of error types", children: _jsx(ResponsiveContainer, { width: "100%", height: 280, children: _jsxs(PieChart, { children: [_jsx(Pie, { data: errorCategoryData, cx: "50%", cy: "50%", labelLine: false, label: ({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`, outerRadius: 100, dataKey: "value", children: errorCategoryData.map((entry, index) => (_jsx(Cell, { fill: entry.color }, `cell-${index}`))) }), _jsx(Tooltip, {})] }) }) }), _jsx(ChartContainer, { title: "Error Trend by Severity", subtitle: "Daily error count over last 7 days", children: _jsx(ResponsiveContainer, { width: "100%", height: 280, children: _jsxs(BarChart, { data: errorTrendData, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#e5e7eb" }), _jsx(XAxis, { dataKey: "date", tick: { fill: '#6b7280', fontSize: 12 } }), _jsx(YAxis, { tick: { fill: '#6b7280', fontSize: 12 } }), _jsx(Tooltip, {}), _jsx(Legend, {}), _jsx(Bar, { dataKey: "critical", stackId: "a", fill: "#dc2626", name: "Critical" }), _jsx(Bar, { dataKey: "high", stackId: "a", fill: "#f59e0b", name: "High" }), _jsx(Bar, { dataKey: "medium", stackId: "a", fill: "#fbbf24", name: "Medium" }), _jsx(Bar, { dataKey: "low", stackId: "a", fill: "#10b981", name: "Low" })] }) }) })] }), _jsx("div", { className: "mb-6", children: _jsx(ChartContainer, { title: "Top Error Codes by Occurrence", subtitle: "Most frequent errors in the system", children: _jsx(ResponsiveContainer, { width: "100%", height: 280, children: _jsxs(BarChart, { data: errorCodeData, layout: "vertical", children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#e5e7eb" }), _jsx(XAxis, { type: "number", tick: { fill: '#6b7280', fontSize: 12 } }), _jsx(YAxis, { type: "category", dataKey: "code", tick: { fill: '#6b7280', fontSize: 12 }, width: 120 }), _jsx(Tooltip, {}), _jsx(Bar, { dataKey: "count", fill: "#004C8F", radius: [0, 4, 4, 0] })] }) }) }) }), _jsx(ChartContainer, { title: "Detailed Error Code Analysis", subtitle: "Complete breakdown with severity and impact", children: _jsx(DataTable, { columns: columns, data: errorDetailsData }) })] }));
}
