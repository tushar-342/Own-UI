import React, { useState } from "react";

export const GroceryCard = ({
  image = "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80",
  title = "Organic Apples",
  price = 3.99,
  currency = "$",
  unit = "lb",
  discount = 0,
  rating = 4.5,
  stock = "In Stock",
  accent = "#059669",
  bg = "#0f172a",
  onAddToCart = () => {}
}) => {
  const [quantity, setQuantity] = useState(1);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return (
    <div style={{
      background: bg,
      borderRadius: "16px",
      overflow: "hidden",
      width: "280px",
      border: "1px solid rgba(255,255,255,0.08)",
      fontFamily: "system-ui,sans-serif",
      boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
    }}>
      <div style={{ position: "relative", width: "100%", height: "160px" }}>
        <img src={image} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        {discount > 0 && (
          <div style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            padding: "4px 8px",
            borderRadius: "20px",
            background: "#e11d48",
            fontSize: "11px",
            fontWeight: "700",
            color: "#fff"
          }}>-{discount}%</div>
        )}
      </div>
      <div style={{ padding: "16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#fff", margin: 0 }}>{title}</h3>
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>{rating}</span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
          <span style={{ fontSize: "20px", fontWeight: "800", color: accent }}>{currency}{price.toFixed(2)}</span>
          {discount > 0 && (
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", textDecoration: "line-through" }}>{currency}{(price / (1 - discount/100)).toFixed(2)}</span>
          )}
          <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>/ {unit}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: stock === "In Stock" ? "#10b981" : "#ef4444" }} />
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>{stock}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <button 
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "6px",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.05)",
                color: "#fff",
                fontSize: "14px",
                fontWeight: "700",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >-</button>
            <span style={{ fontSize: "14px", color: "#fff", minWidth: "20px", textAlign: "center" }}>{quantity}</span>
            <button 
              onClick={() => setQuantity(q => q + 1)}
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "6px",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.05)",
                color: "#fff",
                fontSize: "14px",
                fontWeight: "700",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >+</button>
          </div>
        </div>
        <button 
          onClick={() => onAddToCart({ title, price, quantity })}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "10px",
            border: "none",
            background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.7) + ")",
            color: "#fff",
            fontSize: "14px",
            fontWeight: "700",
            cursor: "pointer",
            fontFamily: "inherit",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px"
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
          Add to Cart
        </button>
      </div>
    </div>
  );
};