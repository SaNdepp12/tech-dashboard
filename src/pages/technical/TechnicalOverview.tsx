import { KPICard } from "../../components/KPICard";
import { ChartContainer } from "../../components/ChartContainer";
import { AlertCircle, Activity, TrendingUp, TrendingDown, Zap, Server } from "lucide-react";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const systemHealthData = [
  { time: "00:00", uptime: 99.9, errorRate: 0.1, responseTime: 245 },
  { time: "04:00", uptime: 99.8, errorRate: 0.2, responseTime: 268 },
  { time: "08:00", uptime: 99.7, errorRate: 0.3, responseTime: 312 },
  { time: "12:00", uptime: 99.9, errorRate: 0.1, responseTime: 289 },
  { time: "16:00", uptime: 99.8, errorRate: 0.2, responseTime: 305 },
  { time: "20:00", uptime: 99.9, errorRate: 0.1, responseTime: 256 },
];

const requestVolumeData = [
  { time: "00:00", requests: 1200, success: 1188, failed: 12 },
  { time: "04:00", requests: 850, success: 835, failed: 15 },
  { time: "08:00", requests: 2800, success: 2756, failed: 44 },
  { time: "12:00", requests: 3500, success: 3465, failed: 35 },
  { time: "16:00", requests: 3200, success: 3168, failed: 32 },
  { time: "20:00", requests: 2100, success: 2079, failed: 21 },
];

export function TechnicalOverview() {
  return (
    <div className="p-8">
      <div className="mb-6 pb-4 border-b-2 border-[#004C8F]">
        <h2 className="text-gray-900 font-semibold text-xl">Technical Overview</h2>
        <p className="text-gray-500 text-sm mt-1">Real-time system performance and health metrics</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-6 gap-4 mb-6">
        <KPICard
          title="System Uptime"
          value="99.8%"
          icon={Activity}
          trend={{ value: "0.2% from last week", isPositive: true }}
          variant="success"
        />
        <KPICard
          title="Avg Response Time"
          value="279ms"
          icon={Zap}
          subtitle="p95: 450ms"
        />
        <KPICard
          title="Total Errors (24h)"
          value="159"
          icon={AlertCircle}
          variant="danger"
          trend={{ value: "12% decrease", isPositive: true }}
        />
        <KPICard
          title="API Success Rate"
          value="98.9%"
          icon={TrendingUp}
          variant="success"
        />
        <KPICard
          title="Active Sessions"
          value="8,432"
          icon={Server}
          subtitle="Peak: 12,500"
        />
        <KPICard
          title="Error Rate"
          value="0.15%"
          icon={TrendingDown}
          variant="success"
          trend={{ value: "0.05% improvement", isPositive: true }}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <ChartContainer title="System Uptime & Error Rate" subtitle="Last 24 hours monitoring">
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={systemHealthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="time" tick={{ fill: '#6b7280', fontSize: 12 }} />
              <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="uptime" stroke="#10b981" strokeWidth={2} name="Uptime %" dot={{ fill: '#10b981', r: 3 }} />
              <Line type="monotone" dataKey="errorRate" stroke="#ED1C24" strokeWidth={2} name="Error Rate %" dot={{ fill: '#ED1C24', r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>

        <ChartContainer title="Average Response Time" subtitle="Latency across all endpoints">
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={systemHealthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="time" tick={{ fill: '#6b7280', fontSize: 12 }} />
              <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} label={{ value: 'ms', angle: -90, position: 'insideLeft', fill: '#6b7280', fontSize: 12 }} />
              <Tooltip />
              <Area type="monotone" dataKey="responseTime" stroke="#004C8F" fill="#004C8F" fillOpacity={0.3} strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>

      {/* Request Volume */}
      <ChartContainer title="API Request Volume" subtitle="Successful vs failed requests over 24 hours">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={requestVolumeData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="time" tick={{ fill: '#6b7280', fontSize: 12 }} />
            <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} label={{ value: 'Requests', angle: -90, position: 'insideLeft', fill: '#6b7280', fontSize: 12 }} />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="success" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.7} name="Success" />
            <Area type="monotone" dataKey="failed" stackId="1" stroke="#ED1C24" fill="#ED1C24" fillOpacity={0.7} name="Failed" />
          </AreaChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
}
