import { useState } from "react";
import { KPICard } from "../components/KPICard";
import { ChartContainer } from "../components/ChartContainer";
import { DataTable } from "../components/DataTable";
import { FilterBar } from "../components/FilterBar";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, TrendingDown, Clock } from "lucide-react";

const channelComparisonData = [
  { channel: "Web", completionRate: 57 },
  { channel: "Mobile", completionRate: 72 },
  { channel: "RM Assisted", completionRate: 68 },
];

const performanceData = [
  { channel: "Web", started: 4200, completed: 2394, dropOff: 43, avgTime: "5.1 days", conversion: "57%" },
  { channel: "Mobile", started: 4500, completed: 3240, dropOff: 28, avgTime: "3.8 days", conversion: "72%" },
  { channel: "RM Assisted", started: 1300, completed: 884, dropOff: 32, avgTime: "4.5 days", conversion: "68%" },
];

export function ChannelPerformance() {
  const [dateRange, setDateRange] = useState("Last 30 Days");
  const [channel, setChannel] = useState("All Channels");
  const [device, setDevice] = useState("All Devices");

  const filters = [
    { label: "Date Range", options: ["Last 7 Days", "Last 30 Days", "Last 90 Days"], value: dateRange, onChange: setDateRange },
    { label: "Channel", options: ["All Channels", "Web", "Mobile", "RM Assisted"], value: channel, onChange: setChannel },
    { label: "Device", options: ["All Devices", "Desktop", "Mobile", "Tablet"], value: device, onChange: setDevice },
  ];

  const columns = [
    { header: "Channel", accessor: "channel" },
    { header: "Started", accessor: "started", render: (value: number) => value.toLocaleString() },
    { header: "Completed", accessor: "completed", render: (value: number) => value.toLocaleString() },
    { header: "Drop-off %", accessor: "dropOff", render: (value: number) => <span className="text-red-600">{value}%</span> },
    { header: "Avg Time", accessor: "avgTime" },
    { header: "Conversion", accessor: "conversion", render: (value: string) => <span className="font-semibold">{value}</span> },
  ];

  return (
    <div className="p-8">
      <div className="mb-6 pb-4 border-b-2 border-[#004C8F]">
        <h2 className="text-gray-900 font-semibold text-xl">Channel Performance</h2>
        <p className="text-gray-500 text-sm mt-1">Comparison of onboarding performance across channels</p>
      </div>

      {/* Filters */}
      <FilterBar filters={filters} />

      {/* KPI Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <KPICard
          title="Best Channel by Conversion"
          value="Mobile"
          subtitle="72% completion rate"
          icon={TrendingUp}
          variant="success"
        />
        <KPICard
          title="Worst Channel by Drop-Off"
          value="Web"
          subtitle="43% drop-off rate"
          icon={TrendingDown}
          variant="danger"
        />
        <KPICard
          title="Fastest Average Time"
          value="Mobile"
          subtitle="3.8 days average"
          icon={Clock}
          variant="success"
        />
      </div>

      {/* Chart */}
      <div className="mb-6">
        <ChartContainer title="Completion Rate by Channel" subtitle="Percentage of users who completed onboarding">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={channelComparisonData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="channel" tick={{ fill: '#6b7280', fontSize: 12 }} />
              <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} label={{ value: 'Completion %', angle: -90, position: 'insideLeft', fill: '#6b7280', fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="completionRate" fill="#004C8F" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>

      {/* Table */}
      <ChartContainer title="Detailed Channel Comparison" subtitle="Comprehensive metrics for each channel">
        <DataTable columns={columns} data={performanceData} />
      </ChartContainer>
    </div>
  );
}