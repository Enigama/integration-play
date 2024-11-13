/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
    base: "./",
    plugins: [react()],
    server: { port: 3000, hmr: true, open: true },
    preview: { port: 9000, strictPort: true, open: true },
    test: {
        environment: "jsdom",
        setupFiles: "./setup-vitest.ts",
        coverage: {
            // TODO: Add coverage thresholds in real project
            // thresholds: { statements: 80, branches: 80, functions: 80, lines: 80 },
            enabled: true,
            exclude: [
                "src/**/index.tsx",
                "src/**/index.ts",
                "version.js",
                "setup-vitest.ts",
                "**/*.cjs",
                "**/*.mjs",
            ],
            reporter: ["lcov", "text"],
        },
        // reporters: ["default", ["vitest-sonar-reporter", { outputFile: "coverage/sonar.xml" }]],
    },
});

