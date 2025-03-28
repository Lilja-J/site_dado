import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/", // Use "./" para builds locais
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});