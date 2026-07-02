import {
  Zap,
  Gauge,
  TrendingUp,
  Accessibility,
  Settings2,
  MonitorSmartphone,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  { id: "electric", icon: Zap },
  { id: "hydraulic", icon: Gauge },
  { id: "escalator", icon: TrendingUp },
  { id: "accessibility", icon: Accessibility },
  { id: "special", icon: Settings2 },
  { id: "monitoring", icon: MonitorSmartphone },
];
