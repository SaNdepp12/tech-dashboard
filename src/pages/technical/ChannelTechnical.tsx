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
    { header: "Uptime %", accessor: "uptime", render: (value: number) => <span className={value >= 99.8 ? "text-green-600 font-semibold" : "text-orange-600"}>{value}%</span> },
    { header: "Avg Latency", accessor: "avgLatency", render: (value: number) => `${value}ms` },
    { header: "Total Errors", accessor: "errors", render: (value: number) => <span className="text-red-600">{value}</span> },
    { header: "Throughput (req/min)", accessor: "throughput", render: (value: number) => value.toLocaleString() },
  ];

  const deviceColumns = [
    { header: "Device Type", accessor: "device" },
    { header: "Total Requests", accessor: "requests", render: (value: number) => value.toLocaleString() },
    { header: "Errors", accessor: "errors" },
    { header: "Avg Response Time", accessor: "avgTime" },
    { 
      header: "Error Rate", 
      accessor: "errors",
      render: (_: any, row: any) => {
        const rate = ((row.errors / row.requests) * 100).toFixed(2);
        return <span className={parseFloat(rate) > 1 ? "text-red-600" : "text-green-600"}>{rate}%</span>;
      }
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-6 pb-4 border-b-2 border-[#004C8F]">
        <h2 className="text-gray-900 font-semibold text-xl">Channel Performance - Technical View</h2>
        <p className="text-gray-500 text-sm mt-1">Infrastructure and performance metrics across channels</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-6 gap-4 mb-6">
        <KPICard
          title="Web Uptime"
          value="99.8%"
          icon={Monitor}
          variant="success"
        />
        <KPICard
          title="Mobile Uptime"
          value="99.9%"
          icon={Smartphone}
          variant="success"
        />
        <KPICard
          title="RM Uptime"
          value="99.6%"
          icon={Users}
          trend={{ value: "0.1% improvement", isPositive: true }}
        />
        <KPICard
          title="Fastest Channel"
          value="Mobile"
          subtitle="245ms avg"
          icon={Zap}
          variant="success"
        />
        <KPICard
          title="Most Errors"
          value="RM Portal"
          subtitle="289 errors"
          icon={AlertTriangle}
          variant="danger"
        />
        <KPICard
          title="Best Reliability"
          value="Mobile iOS"
          subtitle="99.9% uptime"
          icon={CheckCircle}
          variant="success"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <ChartContainer title="Channel Performance Comparison" subtitle="Multi-metric analysis across channels">
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={channelPerformanceData}>
              <PolarGrid stroke="#e5e7eb" />
              <PolarAngleAxis dataKey="metric" tick={{ fill: '#6b7280', fontSize: 11 }} />
              <PolarRadiusAxis tick={{ fill: '#6b7280', fontSize: 10 }} />
              <Radar name="Web" dataKey="Web" stroke="#004C8F" fill="#004C8F" fillOpacity={0.3} />
              <Radar name="Mobile" dataKey="Mobile" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
              <Radar name="RM" dataKey="RM" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.3} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </ChartContainer>

        <ChartContainer title="Traffic Distribution (24h)" subtitle="Request volume by channel">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trafficDistributionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="time" tick={{ fill: '#6b7280', fontSize: 12 }} />
              <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} label={{ value: 'Requests', angle: -90, position: 'insideLeft', fill: '#6b7280', fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="web" stroke="#004C8F" strokeWidth={2} name="Web" dot={{ r: 3 }} />
              <Line type="monotone" dataKey="mobile" stroke="#10b981" strokeWidth={2} name="Mobile" dot={{ r: 3 }} />
              <Line type="monotone" dataKey="rm" stroke="#f59e0b" strokeWidth={2} name="RM" dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>

      {/* Device Breakdown */}
      <div className="mb-6">
        <ChartContainer title="Request Volume by Device Type" subtitle="Total API calls from each device category">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={deviceBreakdownData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="device" tick={{ fill: '#6b7280', fontSize: 12 }} />
              <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="requests" fill="#004C8F" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>

      {/* Tables */}
      <div className="mb-6">
        <ChartContainer title="Channel Reliability Metrics" subtitle="Uptime, latency, and error rates by channel">
          <DataTable columns={columns} data={channelReliabilityData} />
        </ChartContainer>
      </div>

      <ChartContainer title="Device Type Performance" subtitle="Detailed breakdown by device category">
        <DataTable columns={deviceColumns} data={deviceBreakdownData} />
      </ChartContainer>
    </div>
  );
}
