import { KPICard } from "../components/KPICard";
import { ChartContainer } from "../components/ChartContainer";
import { DataTable } from "../components/DataTable";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { FileText, RotateCcw, ShieldAlert, Timer } from "lucide-react";

const frictionDistribution = [
  { name: "Long Forms", value: 1200, color: "#ED1C24" },
  { name: "Repeated Attempts", value: 950, color: "#f59e0b" },
  { name: "Permission Issues", value: 680, color: "#8b5cf6" },
  { name: "Session Timeouts", value: 420, color: "#004C8F" },
];

const frictionTableData = [
  { type: "Long Forms", affectedUsers: 1200, dropOffRate: "34%", avgAttempts: "2.3" },
  { type: "Repeated Attempts", affectedUsers: 950, dropOffRate: "28%", avgAttempts: "3.1" },
  { type: "Permission Issues", affectedUsers: 680, dropOffRate: "45%", avgAttempts: "1.8" },
  { type: "Session Timeouts", affectedUsers: 420, dropOffRate: "52%", avgAttempts: "1.2" },
];

const stackedData = [
  { stage: "Personal Details", longForms: 400, repeatedAttempts: 200, permissions: 150, timeouts: 100 },
  { stage: "KYC Upload", longForms: 500, repeatedAttempts: 450, permissions: 300, timeouts: 180 },
  { stage: "Verification", longForms: 300, repeatedAttempts: 300, permissions: 230, timeouts: 140 },
];

export function FrictionIndicators() {
  const columns = [
    { header: "Friction Type", accessor: "type" },
    { header: "Affected Users", accessor: "affectedUsers", render: (value: number) => value.toLocaleString() },
    { header: "Drop-off Rate", accessor: "dropOffRate", render: (value: string) => <span className="text-red-600 font-semibold">{value}</span> },
    { header: "Avg Attempts", accessor: "avgAttempts" },
  ];

  return (
    <div className="p-8">
      <div className="mb-6 pb-4 border-b-2 border-[#004C8F]">
        <h2 className="text-gray-900 font-semibold text-xl">Customer Friction Indicators</h2>
        <p className="text-gray-500 text-sm mt-1">Analysis of pain points causing user drop-offs</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <KPICard
          title="Long Forms"
          value="1,200"
          subtitle="Users affected"
          icon={FileText}
          variant="danger"
        />
        <KPICard
          title="Repeated Attempts"
          value="950"
          subtitle="Users affected"
          icon={RotateCcw}
          variant="danger"
        />
        <KPICard
          title="Permission Issues"
          value="680"
          subtitle="Users affected"
          icon={ShieldAlert}
          variant="danger"
        />
        <KPICard
          title="Session Timeouts"
          value="420"
          subtitle="Users affected"
          icon={Timer}
          variant="danger"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <ChartContainer title="Friction Reason Distribution" subtitle="Breakdown of customer friction points">
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={frictionDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                dataKey="value"
              >
                {frictionDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>

        <ChartContainer title="Friction by Stage" subtitle="Stacked view of friction types across stages">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={stackedData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="stage" tick={{ fill: '#6b7280', fontSize: 12 }} />
              <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="longForms" stackId="a" fill="#ED1C24" name="Long Forms" />
              <Bar dataKey="repeatedAttempts" stackId="a" fill="#f59e0b" name="Repeated Attempts" />
              <Bar dataKey="permissions" stackId="a" fill="#8b5cf6" name="Permissions" />
              <Bar dataKey="timeouts" stackId="a" fill="#004C8F" name="Timeouts" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>

      {/* Table */}
      <ChartContainer title="Detailed Friction Analysis" subtitle="Impact metrics for each friction type">
        <DataTable columns={columns} data={frictionTableData} />
      </ChartContainer>
    </div>
  );
}