"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

const BANNER_KEY = "katenet_banner_dismissed_v3";

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(BANNER_KEY);
    if (!dismissed) setVisible(true);
  }, []);

  const dismiss = () => {
    localStorage.setItem(BANNER_KEY, "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 64,
        left: 0,
        right: 0,
        zIndex: 99,
        background: "linear-gradient(90deg, #1a1040 0%, #0f1028 100%)",
        borderBottom: "1px solid rgba(139, 92, 246, 0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 36,
        gap: 0,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.6875rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#a78bfa",
            fontWeight: 600,
          }}
        >
          Katenet is live
        </span>
        <span style={{ color: "rgba(139,92,246,0.4)", fontSize: "0.625rem" }}>|</span>
        <span
          className="banner-desc"
          style={{
            fontFamily: "var(--font-sans, Inter, sans-serif)",
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.65)",
          }}
        >
          DPoS is now active.
        </span>
        <a
          href="https://github.com/quantachain/quanta/releases/tag/v3.0.0-alpha"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.6875rem",
            color: "#60a5fa",
            textDecoration: "none",
            borderBottom: "1px solid rgba(96,165,250,0.35)",
            paddingBottom: 1,
            whiteSpace: "nowrap",
          }}
        >
          Release Notes
        </a>

        <style>{`
          @media (max-width: 520px) {
            .banner-desc { display: none !important; }
          }
        `}</style>
      </div>

      <button
        onClick={dismiss}
        aria-label="Dismiss"
        style={{
          position: "absolute",
          right: 16,
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "rgba(255,255,255,0.3)",
          display: "flex",
          alignItems: "center",
          padding: 4,
          borderRadius: 4,
          transition: "color 0.15s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
      >
        <X size={12} />
      </button>
    </div>
  );
}
