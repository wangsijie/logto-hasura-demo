import { LogtoProvider } from "@logto/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Callback from "./Callback";
import Home from "./Home";

const config = {
  endpoint: "http://localhost:3001",
  appId: "rEClQ1YwOKhkFh6kqJk8U",
  resources: ["https://hasura.api"],
  // Uo9MUTK8
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/callback",
    element: <Callback />,
  },
]);

const App = () => (
  <LogtoProvider config={config}>
    <RouterProvider router={router} />
  </LogtoProvider>
);

export default App;
