import { KPICard } from "../components/KPICard";
import { ChartContainer } from "../components/ChartContainer";
import { DataTable } from "../components/DataTable";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Clock, Timer, AlertCircle } from "lucide-react";

const trendData = [
  { date: "Week 1", time: 5.2 },
  { date: "Week 2", time: 4.8 },
  { date: "Week 3", time: 4.5 },
  { date: "Week 4", time: 4.2 },
];

const channelData = [
  { channel: "Web", avgTime: 5.1 },
  { channel: "Mobile", avgTime: 3.8 },
  { channel: "RM Assisted", avgTime: 4.5 },
];

const stageData = [
  { stage: "Started", avgTime: "0.5 hrs", sla: "1 hr", status: "On Time" },
  { stage: "Details Entry", avgTime: "1.2 days", sla: "1 day", status: "Breach" },
  { stage: "KYC Upload", avgTime: "1.8 days", sla: "2 days", status: "On Time" },
  { stage: "Verification", avgTime: "1.5 days", sla: "1 day", status: "Breach" },
  { stage: "Completed", avgTime: "0.3 days", sla: "0.5 days", status: "On Time" },
];

export function AverageTime() {
  const columns = [
    { header: "Stage", accessor: "stage" },
    { header: "Average Time", accessor: "avgTime" },
    { header: "SLA Target", accessor: "sla" },
    {
      header: "Status",
      accessor: "status",
      render: (value: string) => (
        <span className={`px-2 py-1 rounded text-xs ${value === "On Time" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
          {value}
        </span>
      ),
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-6 pb-4 border-b-2 border-[#004C8F]">
        <h2 className="text-gray-900 font-semibold text-xl">Average Time to Complete Process</h2>
        <p className="text-gray-500 text-sm mt-1">Analysis of time metrics across the onboarding journey</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <KPICard
          title="Average Completion Time"
          value="4.2 days"
          icon={Clock}
          trend={{ value: "12% improvement", isPositive: true }}
          variant="success"
        />
        <KPICard
          title="Median Time"
          value="3.8 days"
          icon={Timer}
          subtitle="50th percentile"
        />
        <KPICard
          title="SLA Breach Percentage"
          value="28%"
          icon={AlertCircle}
          variant="danger"
          trend={{ value: "5% vs last month", isPositive: false }}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <ChartContainer title="Completion Time Trend" subtitle="Average time over last 4 weeks">
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="date" tick={{ fill: '#6b7280', fontSize: 12 }} />
              <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} label={{ value: 'Days', angle: -90, position: 'insideLeft', fill: '#6b7280', fontSize: 12 }} />
              <Tooltip />
              <Line type="monotone" dataKey="time" stroke="#004C8F" strokeWidth={2} dot={{ fill: '#004C8F', r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>

        <ChartContainer title="Average Time by Channel" subtitle="Comparison across different channels">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={channelData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="channel" tick={{ fill: '#6b7280', fontSize: 12 }} />
              <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} label={{ value: 'Days', angle: -90, position: 'insideLeft', fill: '#6b7280', fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="avgTime" fill="#004C8F" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>

      {/* Table */}
      <ChartContainer title="Stage-wise Average Time & SLA Status" subtitle="Detailed breakdown by onboarding stage">
        <DataTable columns={columns} data={stageData} />
      </ChartContainer>
    </div>
  );
}