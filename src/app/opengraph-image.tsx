import { ImageResponse } from "next/og";

export const alt = "RVSK Tax Services — Tax, Accounts & Compliance Support for Your Business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: "linear-gradient(135deg, #ffffff 0%, #f3faf4 55%, #eef0f9 100%)",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div
          style={{
            width: 76,
            height: 76,
            borderRadius: 20,
            background: "linear-gradient(135deg, #00AC1F, #333982)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 44,
            fontWeight: 800,
          }}
        >
          R
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 40, fontWeight: 800, color: "#333982" }}>RVSK</div>
          <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: 4, color: "#007F17" }}>TAX SERVICES</div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 68, fontWeight: 800, color: "#141a26", lineHeight: 1.08, maxWidth: 960 }}>
          Tax, Accounts &amp; Compliance Support for Your Business
        </div>
        <div style={{ marginTop: 28, fontSize: 28, color: "#4f5b6e" }}>GST · Payroll (EPF &amp; ESI) · Bookkeeping · Income Tax · Licences</div>
      </div>
      <div style={{ display: "flex", height: 10, borderRadius: 999, background: "linear-gradient(90deg, #00AC1F, #333982)" }} />
    </div>,
    size,
  );
}
