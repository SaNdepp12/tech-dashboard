import { jsx as _jsx } from "react/jsx-runtime";
import { RouterProvider } from 'react-router';
import { router } from './routes-technical';
function App() {
    return _jsx(RouterProvider, { router: router });
}
export default App;
