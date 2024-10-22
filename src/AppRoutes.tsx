import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Layout from "./layout/Layout";
import Live from "./components/Live";
import TimeLine from "./components/TimeLine";
import History from "./components/History";
import Alert from "./components/Alert";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/auth" element={<Login />} />
          <Route path="/" element={<Navigate to="/auth" />} />
          <Route
            path="/dashboard"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />
          <Route
            path="/livefeed"
            element={
              <Layout>
                <Live />
              </Layout>
            }
          />
          <Route
            path="/history"
            element={
              <Layout>
                <History />
              </Layout>
            }
          />
          <Route
            path="/timeline"
            element={
              <Layout>
                <TimeLine />
              </Layout>
            }
          />

          <Route
            path="/Alert"
            element={
              <Layout>
                <Alert />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
