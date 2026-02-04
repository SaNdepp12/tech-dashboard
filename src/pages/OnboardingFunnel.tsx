import { KPICard } from "../components/KPICard";
import { ChartContainer } from "../components/ChartContainer";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Users, CheckCircle, UserX } from "lucide-react";

const funnelData = [
  { stage: "Started", users: 10000, percentage: 100, dropOff: 0 },
  { stage: "Personal Details", users: 8500, percentage: 85, dropOff: 15 },
  { stage: "KYC Upload", users: 7200, percentage: 72, dropOff: 15.3 },
  { stage: "Verification", users: 6800, percentage: 68, dropOff: 5.6 },
  { stage: "Completed", users: 6500, percentage: 65, dropOff: 4.4 },
];

const dropOffData = [
  { stage: "Started", dropOff: 0 },
  { stage: "Personal Details", dropOff: 15 },
  { stage: "KYC Upload", dropOff: 15.3 },
  { stage: "Verification", dropOff: 5.6 },
  { stage: "Completed", dropOff: 4.4 },
];

const COLORS = ['#10b981', '#004C8F', '#004C8F', '#004C8F', '#004C8F'];

export function OnboardingFunnel() {
  return (
    <div className="p-8">
      <div className="mb-6 pb-4 border-b-2 border-[#004C8F]">
        <h2 className="text-gray-900 font-semibold text-xl">Overall Onboarding Funnel</h2>
        <p className="text-gray-500 text-sm mt-1">Complete view of user progression through onboarding stages</p>
      </div>

      {/* Full-width Funnel */}
      <ChartContainer title="Onboarding Stage Progression" subtitle="User count and conversion at each stage">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={funnelData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="stage" tick={{ fill: '#6b7280', fontSize: 12 }} />
            <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} label={{ value: 'Users', angle: -90, position: 'insideLeft', fill: '#6b7280', fontSize: 12 }} />
            <Tooltip />
            <Bar dataKey="users" radius={[4, 4, 0, 0]}>
              {funnelData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-6 grid grid-cols-5 gap-4">
          {funnelData.map((item, index) => (
            <div key={index} className="text-center p-3 bg-gray-50 rounded">
              <p className="text-xs text-gray-600 mb-1">{item.stage}</p>
              <p className="text-lg font-semibold text-gray-900">{item.users.toLocaleString()}</p>
              <p className="text-xs text-gray-500 mt-1">{item.percentage}% of started</p>
            </div>
          ))}
        </div>
      </ChartContainer>

      {/* KPI Cards */}
      <div className="grid grid-cols-3 gap-4 my-6">
        <KPICard
          title="Total Started"
          value="10,000"
          icon={Users}
          subtitle="Unique users initiated onboarding"
        />
        <KPICard
          title="Total Completed"
          value="6,500"
          icon={CheckCircle}
          variant="success"
          subtitle="65% completion rate"
        />
        <KPICard
          title="Total Drop-Off"
          value="3,500"
          icon={UserX}
          variant="danger"
          subtitle="35% attrition rate"
        />
      </div>

      {/* Drop-off by Stage */}
      <ChartContainer title="Drop-off Percentage by Stage" subtitle="Identifying the biggest friction points">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={dropOffData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="stage" tick={{ fill: '#6b7280', fontSize: 12 }} />
            <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} label={{ value: 'Drop-off %', angle: -90, position: 'insideLeft', fill: '#6b7280', fontSize: 12 }} />
            <Tooltip />
            <Bar dataKey="dropOff" fill="#ED1C24" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
}