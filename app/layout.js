"use client";

import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import EmployeeList from "@/components/EmployeeList";

import { QueryClientProvider, QueryClient } from "react-query";

// create a client
const queryClient = new QueryClient();

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-6xl mx-auto p-4">
          {/* <AuthProvider> */}
            <QueryClientProvider client={queryClient}>
              <Header />
              {children}
              <EmployeeList />
            </QueryClientProvider>
          {/* </AuthProvider> */}
        </div>
      </body>
    </html>
  );
}
