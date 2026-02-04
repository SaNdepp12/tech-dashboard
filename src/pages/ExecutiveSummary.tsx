import { KPICard } from "../components/KPICard";
import { ChartContainer } from "../components/ChartContainer";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Clock, Users, CheckCircle, TrendingDown, Wifi, AlertTriangle } from "lucide-react";

const funnelData = [
  { stage: "Started", count: 10000, percentage: 100 },
  { stage: "Details", count: 8500, percentage: 85 },
  { stage: "KYC", count: 7200, percentage: 72 },
  { stage: "Verification", count: 6800, percentage: 68 },
  { stage: "Completed", count: 6500, percentage: 65 },
];

export function ExecutiveSummary() {
  return (
    <div className="p-8">
      <div className="mb-6 pb-4 border-b-2 border-[#004C8F]">
        <h2 className="text-gray-900 font-semibold text-xl">Executive Summary</h2>
        <p className="text-gray-500 text-sm mt-1">Overview of digital onboarding performance</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-6 gap-4 mb-6">
        <KPICard
          title="Avg Completion Time"
          value="4.2 days"
          icon={Clock}
          trend={{ value: "12% vs last month", isPositive: true }}
        />
        <KPICard
          title="Total Users Started"
          value="10,000"
          icon={Users}
        />
        <KPICard
          title="Total Users Completed"
          value="6,500"
          icon={CheckCircle}
          variant="success"
        />
        <KPICard
          title="Drop-Off Rate"
          value="35%"
          icon={TrendingDown}
          variant="danger"
        />
        <KPICard
          title="Best Performing Channel"
          value="Mobile"
          subtitle="72% conversion"
          icon={Wifi}
          variant="success"
        />
        <KPICard
          title="Worst Performing Stage"
          value="KYC"
          subtitle="15% drop-off"
          icon={AlertTriangle}
          variant="danger"
        />
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Funnel Visualization */}
        <div className="col-span-2">
          <ChartContainer title="Onboarding Funnel" subtitle="User progression through stages">
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={funnelData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis type="number" tick={{ fill: '#6b7280', fontSize: 12 }} />
                <YAxis type="category" dataKey="stage" tick={{ fill: '#6b7280', fontSize: 12 }} width={100} />
                <Tooltip />
                <Bar dataKey="count" fill="#004C8F" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-5 gap-2">
              {funnelData.map((item, index) => (
                <div key={index} className="text-center">
                  <p className="text-xs text-gray-600">{item.stage}</p>
                  <p className="text-sm font-semibold text-gray-900">{item.percentage}%</p>
                </div>
              ))}
            </div>
          </ChartContainer>
        </div>

        {/* Insights Panel */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-gray-900 font-semibold mb-4">Key Insights</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2"></span>
              <p className="text-sm text-gray-700">Mobile channel shows 72% conversion rate, outperforming web by 15%</p>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24] mt-2"></span>
              <p className="text-sm text-gray-700">KYC stage has highest drop-off at 15%, indicating friction in document verification</p>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#004C8F] mt-2"></span>
              <p className="text-sm text-gray-700">Average completion time improved by 12% compared to last month</p>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></span>
              <p className="text-sm text-gray-700">35% overall drop-off rate requires immediate attention to UX improvements</p>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2"></span>
              <p className="text-sm text-gray-700">65% completion rate indicates strong product-market fit</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}