import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            fontSize: "13px",
          },
          success: {
            style: { borderLeft: "4px solid #FF8600" },
          },
          error: {
            style: { borderLeft: "4px solid #EF4444" },
          },
        }}
      />
    </>
  );
}

export default App;
