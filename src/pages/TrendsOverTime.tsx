import { useState } from "react";
import { ChartContainer } from "../components/ChartContainer";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const dailyData = [
  { date: "Mon", started: 340, completed: 210, dropOff: 38, avgTime: 4.2 },
  { date: "Tue", started: 380, completed: 245, dropOff: 36, avgTime: 4.1 },
  { date: "Wed", started: 420, completed: 280, dropOff: 33, avgTime: 4.0 },
  { date: "Thu", started: 390, completed: 265, dropOff: 32, avgTime: 3.9 },
  { date: "Fri", started: 450, completed: 305, dropOff: 32, avgTime: 3.8 },
  { date: "Sat", started: 280, completed: 185, dropOff: 34, avgTime: 4.0 },
  { date: "Sun", started: 240, completed: 160, dropOff: 33, avgTime: 4.1 },
];

const weeklyData = [
  { date: "Week 1", started: 2100, completed: 1350, dropOff: 36, avgTime: 4.5 },
  { date: "Week 2", started: 2300, completed: 1520, dropOff: 34, avgTime: 4.3 },
  { date: "Week 3", started: 2450, completed: 1650, dropOff: 33, avgTime: 4.1 },
  { date: "Week 4", started: 2600, completed: 1780, dropOff: 32, avgTime: 3.9 },
];

const monthlyData = [
  { date: "Jan", started: 8500, completed: 5525, dropOff: 35, avgTime: 4.8 },
  { date: "Feb", started: 9200, completed: 6256, dropOff: 32, avgTime: 4.5 },
  { date: "Mar", started: 9800, completed: 6664, dropOff: 32, avgTime: 4.2 },
  { date: "Apr", started: 10000, completed: 6800, dropOff: 32, avgTime: 4.0 },
];

const yearlyData = [
  { date: "2022", started: 95000, completed: 57000, dropOff: 40, avgTime: 5.5 },
  { date: "2023", started: 105000, completed: 68250, dropOff: 35, avgTime: 4.8 },
  { date: "2024", started: 115000, completed: 78200, dropOff: 32, avgTime: 4.2 },
];

export function TrendsOverTime() {
  const [period, setPeriod] = useState("Daily");

  const dataMap: Record<string, typeof dailyData> = {
    Daily: dailyData,
    Weekly: weeklyData,
    Monthly: monthlyData,
    Yearly: yearlyData,
  };

  const currentData = dataMap[period];

  return (
    <div className="p-8">
      <div className="mb-6 pb-4 border-b-2 border-[#004C8F]">
        <h2 className="text-gray-900 font-semibold text-xl">Trends Over Time</h2>
        <p className="text-gray-500 text-sm mt-1">Historical analysis of onboarding metrics</p>
      </div>

      {/* Toggle Filters */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 mr-2">View:</span>
          {["Daily", "Weekly", "Monthly", "Yearly"].map((option) => (
            <button
              key={option}
              onClick={() => setPeriod(option)}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                period === option
                  ? "bg-[#004C8F] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Started vs Completed */}
      <div className="mb-6">
        <ChartContainer title="Started vs Completed Journeys" subtitle={`${period} comparison of user activity`}>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={currentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="date" tick={{ fill: '#6b7280', fontSize: 12 }} />
              <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="started" stroke="#004C8F" strokeWidth={2} name="Started" dot={{ fill: '#004C8F', r: 4 }} />
              <Line type="monotone" dataKey="completed" stroke="#10b981" strokeWidth={2} name="Completed" dot={{ fill: '#10b981', r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>

      {/* Drop-off Trend */}
      <div className="mb-6">
        <ChartContainer title="Drop-off Rate Trend" subtitle={`${period} drop-off percentage`}>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={currentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="date" tick={{ fill: '#6b7280', fontSize: 12 }} />
              <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} label={{ value: 'Drop-off %', angle: -90, position: 'insideLeft', fill: '#6b7280', fontSize: 12 }} />
              <Tooltip />
              <Line type="monotone" dataKey="dropOff" stroke="#ED1C24" strokeWidth={2} name="Drop-off %" dot={{ fill: '#ED1C24', r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>

      {/* Average Completion Time Trend */}
      <ChartContainer title="Average Completion Time Trend" subtitle={`${period} average time to complete onboarding`}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={currentData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="date" tick={{ fill: '#6b7280', fontSize: 12 }} />
            <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} label={{ value: 'Days', angle: -90, position: 'insideLeft', fill: '#6b7280', fontSize: 12 }} />
            <Tooltip />
            <Line type="monotone" dataKey="avgTime" stroke="#f59e0b" strokeWidth={2} name="Avg Time (days)" dot={{ fill: '#f59e0b', r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
}