import { LucideIcon } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  icon?: LucideIcon;
  variant?: "default" | "success" | "danger";
}

export function KPICard({ title, value, subtitle, trend, icon: Icon, variant = "default" }: KPICardProps) {
  const variantStyles = {
    default: "border-gray-200",
    success: "border-green-200 bg-green-50",
    danger: "border-red-200 bg-red-50"
  };

  const valueColor = {
    default: "text-gray-900",
    success: "text-green-700",
    danger: "text-red-700"
  };

  const iconBg = {
    default: "bg-[#004C8F]",
    success: "bg-green-600",
    danger: "bg-[#ED1C24]"
  };

  return (
    <div className={`bg-white border ${variantStyles[variant]} rounded-lg p-5 shadow-sm`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-2">{title}</p>
          <p className={`text-2xl font-semibold ${valueColor[variant]}`}>{value}</p>
          {subtitle && (
            <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
          )}
          {trend && (
            <p className={`text-xs mt-2 ${trend.isPositive ? "text-green-600" : "text-red-600"}`}>
              {trend.isPositive ? "↑" : "↓"} {trend.value}
            </p>
          )}
        </div>
        {Icon && (
          <div className={`w-10 h-10 rounded-lg ${iconBg[variant]} flex items-center justify-center`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
        )}
      </div>
    </div>
  );
}