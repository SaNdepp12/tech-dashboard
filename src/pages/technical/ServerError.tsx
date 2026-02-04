import { KPICard } from "../../components/KPICard";
import { ChartContainer } from "../../components/ChartContainer";
import { DataTable } from "../../components/DataTable";
import { FilterBar } from "../../components/FilterBar";
import { useState } from "react";
import { Server, AlertOctagon, XOctagon, Activity, Database, Cloud } from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell } from "recharts";

const serverErrorTrendData = [
  { time: "00:00", status500: 8, status502: 3, status503: 5, status504: 2 },
  { time: "04:00", status500: 11, status502: 5, status503: 7, status504: 3 },
  { time: "08:00", status500: 23, status502: 12, status503: 15, status504: 8 },
  { time: "12:00", status500: 28, status502: 15, status503: 18, status504: 11 },
  { time: "16:00", status500: 31, status502: 18, status503: 21, status504: 13 },
  { time: "20:00", status500: 19, status502: 9, status503: 12, status504: 7 },
];

const errorByServiceData = [
  { service: "Auth Service", count: 156, color: "#ED1C24" },
  { service: "KYC Service", count: 289, color: "#f59e0b" },
  { service: "Database Layer", count: 234, color: "#8b5cf6" },
  { service: "Payment Gateway", count: 123, color: "#004C8F" },
  { service: "Document Storage", count: 178, color: "#6366f1" },
  { service: "Cache Layer", count: 89, color: "#ec4899" },
];

const serverHealthData = [
  { server: "app-server-01", status: "Healthy", cpu: 45, memory: 62, errors: 12, uptime: 99.9 },
  { server: "app-server-02", status: "Healthy", cpu: 52, memory: 68, errors: 8, uptime: 99.9 },
  { server: "app-server-03", status: "Warning", cpu: 78, memory: 84, errors: 45, uptime: 99.3 },
  { server: "app-server-04", status: "Healthy", cpu: 48, memory: 65, errors: 15, uptime: 99.8 },
  { server: "app-server-05", status: "Critical", cpu: 92, memory: 95, errors: 89, uptime: 98.1 },
];

const errorDetailsData = [
  { errorType: "500 Internal Server Error", count: 512, service: "KYC Service", lastOccurred: "2 mins ago", avgResolution: "15 mins" },
  { errorType: "502 Bad Gateway", count: 234, service: "Payment Gateway", lastOccurred: "5 mins ago", avgResolution: "8 mins" },
  { errorType: "503 Service Unavailable", count: 389, service: "Auth Service", lastOccurred: "1 min ago", avgResolution: "12 mins" },
  { errorType: "504 Gateway Timeout", count: 178, service: "Database Layer", lastOccurred: "8 mins ago", avgResolution: "25 mins" },
  { errorType: "Connection Pool Exhausted", count: 145, service: "Database Layer", lastOccurred: "3 mins ago", avgResolution: "18 mins" },
];

const databaseErrorData = [
  { time: "00:00", queryTimeout: 5, deadlock: 2, connectionFailed: 3 },
  { time: "04:00", queryTimeout: 7, deadlock: 3, connectionFailed: 4 },
  { time: "08:00", queryTimeout: 15, deadlock: 8, connectionFailed: 12 },
  { time: "12:00", queryTimeout: 18, deadlock: 11, connectionFailed: 15 },
  { time: "16:00", queryTimeout: 21, deadlock: 13, connectionFailed: 18 },
  { time: "20:00", queryTimeout: 12, deadlock: 7, connectionFailed: 9 },
];

export function ServerError() {
  const [timeRange, setTimeRange] = useState("Last 24 Hours");
  const [serverGroup, setServerGroup] = useState("All Servers");
  const [severity, setSeverity] = useState("All Severities");

  const filters = [
    { label: "Time Range", options: ["Last Hour", "Last 24 Hours", "Last 7 Days"], value: timeRange, onChange: setTimeRange },
    { label: "Server Group", options: ["All Servers", "App Servers", "Database Servers", "Cache Servers"], value: serverGroup, onChange: setServerGroup },
    { label: "Severity", options: ["All Severities", "Critical", "High", "Medium", "Low"], value: severity, onChange: setSeverity },
  ];

  const serverColumns = [
    { header: "Server", accessor: "server", render: (value: string) => <code className="text-xs bg-gray-100 px-2 py-1 rounded">{value}</code> },
    { 
      header: "Status", 
      accessor: "status",
      render: (value: string) => {
        const colors: Record<string, string> = {
          Healthy: "bg-green-100 text-green-700",
          Warning: "bg-amber-100 text-amber-700",
          Critical: "bg-red-100 text-red-700"
        };
        return <span className={`px-2 py-1 rounded text-xs ${colors[value]}`}>{value}</span>;
      }
    },
    { header: "CPU %", accessor: "cpu", render: (value: number) => <span className={value > 80 ? "text-red-600 font-semibold" : ""}>{value}%</span> },
    { header: "Memory %", accessor: "memory", render: (value: number) => <span className={value > 85 ? "text-red-600 font-semibold" : ""}>{value}%</span> },
    { header: "Errors (24h)", accessor: "errors", render: (value: number) => <span className="text-red-600">{value}</span> },
    { header: "Uptime %", accessor: "uptime", render: (value: number) => <span className={value < 99.5 ? "text-red-600" : "text-green-600"}>{value}%</span> },
  ];

  const errorColumns = [
    { header: "Error Type", accessor: "errorType" },
    { header: "Count", accessor: "count", render: (value: number) => <span className="text-red-600 font-semibold">{value}</span> },
    { header: "Service", accessor: "service" },
    { header: "Last Occurred", accessor: "lastOccurred" },
    { header: "Avg Resolution", accessor: "avgResolution" },
  ];

  return (
    <div className="p-8">
      <div className="mb-6 pb-4 border-b-2 border-[#004C8F]">
        <h2 className="text-gray-900 font-semibold text-xl">Server Error Analysis</h2>
        <p className="text-gray-500 text-sm mt-1">Infrastructure failures and system-level error monitoring</p>
      </div>

      {/* Filters */}
      <FilterBar filters={filters} />

      {/* KPI Cards */}
      <div className="grid grid-cols-6 gap-4 mb-6">
        <KPICard
          title="Total 5xx Errors"
          value="801"
          icon={Server}
          variant="danger"
          trend={{ value: "18% decrease", isPositive: true }}
        />
        <KPICard
          title="Critical Servers"
          value="1"
          icon={AlertOctagon}
          variant="danger"
          subtitle="app-server-05"
        />
        <KPICard
          title="Database Errors"
          value="234"
          icon={Database}
          subtitle="Connection & timeout"
        />
        <KPICard
          title="Service Unavailable"
          value="389"
          icon={XOctagon}
          variant="danger"
          subtitle="503 errors"
        />
        <KPICard
          title="Avg Server CPU"
          value="63%"
          icon={Activity}
          trend={{ value: "5% increase", isPositive: false }}
        />
        <KPICard
          title="Cache Hit Rate"
          value="94.2%"
          icon={Cloud}
          variant="success"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <ChartContainer title="Server Error Trend (24h)" subtitle="5xx errors by status code">
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={serverErrorTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="time" tick={{ fill: '#6b7280', fontSize: 12 }} />
              <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="status500" stroke="#dc2626" strokeWidth={2} name="500" dot={{ r: 3 }} />
              <Line type="monotone" dataKey="status502" stroke="#f59e0b" strokeWidth={2} name="502" dot={{ r: 3 }} />
              <Line type="monotone" dataKey="status503" stroke="#8b5cf6" strokeWidth={2} name="503" dot={{ r: 3 }} />
              <Line type="monotone" dataKey="status504" stroke="#6366f1" strokeWidth={2} name="504" dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>

        <ChartContainer title="Errors by Service" subtitle="Distribution of server errors across microservices">
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={errorByServiceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={90}
                dataKey="count"
              >
                {errorByServiceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>

      {/* Database Errors */}
      <div className="mb-6">
        <ChartContainer title="Database Error Analysis" subtitle="Query timeouts, deadlocks, and connection failures">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={databaseErrorData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="time" tick={{ fill: '#6b7280', fontSize: 12 }} />
              <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="queryTimeout" fill="#ED1C24" name="Query Timeout" />
              <Bar dataKey="deadlock" fill="#f59e0b" name="Deadlock" />
              <Bar dataKey="connectionFailed" fill="#8b5cf6" name="Connection Failed" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>

      {/* Server Health Table */}
      <div className="mb-6">
        <ChartContainer title="Server Health Status" subtitle="Real-time monitoring of all application servers">
          <DataTable columns={serverColumns} data={serverHealthData} />
        </ChartContainer>
      </div>

      {/* Error Details Table */}
      <ChartContainer title="Server Error Details" subtitle="Most recent server errors and resolution times">
        <DataTable columns={errorColumns} data={errorDetailsData} />
      </ChartContainer>
    </div>
  );
}
