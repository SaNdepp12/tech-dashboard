import { createBrowserRouter } from "react-router";
import { LayoutTechnical } from "./components/LayoutTechnical";
import { ErrorCodeAnalysis } from "./pages/technical/ErrorCodeAnalysis";
import { TimeSpentDistribution } from "./pages/technical/TimeSpentDistribution";
import { APIErrorPage } from "./pages/technical/APIErrorPage";
import { ChannelTechnical } from "./pages/technical/ChannelTechnical";
import { ServerError } from "./pages/technical/ServerError";
import { TechnicalOverview } from "./pages/technical/TechnicalOverview";
export const router = createBrowserRouter([
    {
        path: "/",
        Component: LayoutTechnical,
        children: [
            { index: true, Component: TechnicalOverview },
            { path: "error-codes", Component: ErrorCodeAnalysis },
            { path: "time-distribution", Component: TimeSpentDistribution },
            { path: "api-errors", Component: APIErrorPage },
            { path: "channel-tech", Component: ChannelTechnical },
            { path: "server-errors", Component: ServerError },
        ],
    },
]);
