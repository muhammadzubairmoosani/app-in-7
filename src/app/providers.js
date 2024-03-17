"use client";

import { ThemeProvider } from "next-themes";

export const Providers = ({ children }) => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    {children}
  </ThemeProvider>
);
