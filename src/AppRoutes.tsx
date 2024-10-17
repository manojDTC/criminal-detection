import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Layout from "./layout/Layout";

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
            path="/project"
            // element={
            //   <VisionStudioLayout>
            //     <ProjectImagesProvider>
            //       <VisionStudioModal />
            //       <Project />
            //     </ProjectImagesProvider>
            //   </VisionStudioLayout>
            // }
          />
          <Route
            path="/upload/:id"
            // element={
            //   <VisionStudioLayout>
            //     <ProjectImagesProvider>
            //       <TrainProvider>
            //         <VisionStudioModal />
            //         <UploadPage />
            //       </TrainProvider>
            //     </ProjectImagesProvider>
            //   </VisionStudioLayout>
            // }
          />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
