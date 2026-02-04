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
  const getBarColor = (value: number) => {
    if (value >= 1.5) return "#dc2626";
    if (value >= 1.0) return "#f59e0b";
    return "#10b981";
  };

  return (
    <div className="p-8">
      <div className="mb-6 pb-4 border-b-2 border-[#004C8F]">
        <h2 className="text-gray-900 font-semibold text-xl">Time Bottleneck Analysis</h2>
        <p className="text-gray-500 text-sm mt-1">Identifying stages where users spend the most time</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <KPICard
          title="Longest Stage"
          value="KYC Upload"
          subtitle="1.8 days average"
          icon={AlertTriangle}
          variant="danger"
        />
        <KPICard
          title="Average Stage Time"
          value="1.1 days"
          subtitle="Across all stages"
          icon={Clock}
        />
        <KPICard
          title="Users Exceeding SLA"
          value="2,800"
          subtitle="28% of total users"
          icon={UserX}
          variant="danger"
        />
      </div>

      {/* Average Time per Stage */}
      <div className="mb-6">
        <ChartContainer title="Average Time Spent per Stage" subtitle="Days spent at each onboarding stage">
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={stageTimeData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="stage" tick={{ fill: '#6b7280', fontSize: 12 }} />
              <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} label={{ value: 'Days', angle: -90, position: 'insideLeft', fill: '#6b7280', fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="avgTime" radius={[4, 4, 0, 0]}>
                {stageTimeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getBarColor(entry.avgTime)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>

      {/* Time Intensity Heatmap */}
      <ChartContainer title="Stage vs Time Intensity Distribution" subtitle="Percentage of users by time spent (Low: <1 day, Medium: 1-2 days, High: >2 days)">
        <div className="space-y-4">
          {heatmapData.map((item, index) => (
            <div key={index}>
              <p className="text-sm text-gray-700 mb-2">{item.stage}</p>
              <div className="flex h-10 rounded overflow-hidden">
                <div
                  className="bg-green-500 flex items-center justify-center text-white text-xs font-medium"
                  style={{ width: `${item.low}%` }}
                >
                  {item.low}%
                </div>
                <div
                  className="bg-amber-500 flex items-center justify-center text-white text-xs font-medium"
                  style={{ width: `${item.medium}%` }}
                >
                  {item.medium}%
                </div>
                <div
                  className="bg-[#ED1C24] flex items-center justify-center text-white text-xs font-medium"
                  style={{ width: `${item.high}%` }}
                >
                  {item.high}%
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span className="text-xs text-gray-600">Low (&lt;1 day)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-amber-500 rounded"></div>
            <span className="text-xs text-gray-600">Medium (1-2 days)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#ED1C24] rounded"></div>
            <span className="text-xs text-gray-600">High (&gt;2 days)</span>
          </div>
        </div>
      </ChartContainer>
    </div>
  );
}