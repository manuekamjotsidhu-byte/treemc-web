"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function NotFound() {
  const [sec, setSec] = useState(3);

  useEffect(() => {
    const t = setInterval(() => {
      setSec((s) => {
        if (s <= 1) {
          window.location.replace("/");
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#0b0f17", color: "#fff", padding: 24, textAlign: "center", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 460, width: "100%", padding: "40px 28px", borderRadius: 20, background: "#111622", border: "1px solid rgba(255,255,255,.12)" }}>
        <div style={{ fontSize: "4rem", fontWeight: 800, lineHeight: 1, marginBottom: 12, color: "#a3e635" }}>404</div>
        <h1 style={{ fontSize: "1.5rem", margin: "0 0 10px" }}>Page Not Found</h1>
        <p style={{ opacity: 0.8, margin: "0 0 22px", lineHeight: 1.5 }}>
          The page you requested does not exist. Redirecting you to the TreeMC homepage in {sec}s…
        </p>
        <Link href="/" style={{ display: "inline-block", background: "#a3e635", color: "#090d16", fontWeight: 700, padding: "10px 20px", borderRadius: 10, textDecoration: "none" }}>
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
