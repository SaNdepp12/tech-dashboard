import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { ExecutiveSummary } from "./pages/ExecutiveSummary";
import { AverageTime } from "./pages/AverageTime";
import { OnboardingFunnel } from "./pages/OnboardingFunnel";
import { ChannelPerformance } from "./pages/ChannelPerformance";
import { BottleneckAnalysis } from "./pages/BottleneckAnalysis";
import { FrictionIndicators } from "./pages/FrictionIndicators";
import { TrendsOverTime } from "./pages/TrendsOverTime";
export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            { index: true, Component: ExecutiveSummary },
            { path: "average-time", Component: AverageTime },
            { path: "funnel", Component: OnboardingFunnel },
            { path: "channels", Component: ChannelPerformance },
            { path: "bottlenecks", Component: BottleneckAnalysis },
            { path: "friction", Component: FrictionIndicators },
            { path: "trends", Component: TrendsOverTime },
        ],
    },
]);
