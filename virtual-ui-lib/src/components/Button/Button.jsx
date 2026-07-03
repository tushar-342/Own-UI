import React from "react";

export const Button = ({ 
  text = "Click me", 
  bg = "#6366f1", 
  color = "#ffffff", 
  size = "md", 
  rounded = "10px", 
  disabled = false, 
  loading = false, 
  onClick = () => {},
  shadow = true
}) => {
  const sizes = {
    sm: { padding: "8px 16px", fontSize: "13px" },
    md: { padding: "12px 24px", fontSize: "15px" },
    lg: { padding: "16px 32px", fontSize: "17px" }
  };
  
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      style={{
        background: bg,
        color: color,
        padding: sizes[size].padding,
        borderRadius: rounded,
        border: "none",
        cursor: disabled ? "not-allowed" : "pointer",
        fontWeight: "600",
        fontSize: sizes[size].fontSize,
        fontFamily: "system-ui, sans-serif",
        boxShadow: shadow ? "0 4px 14px " + alpha(bg, 0.4) : "none",
        opacity: disabled ? 0.7 : 1,
        transition: "all 0.2s ease",
        position: "relative",
        overflow: "hidden",
        transform: "translateY(0)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px"
      }}
      onMouseDown={(e) => {
        if (!disabled && !loading) {
          e.currentTarget.style.transform = "translateY(2px)";
        }
      }}
      onMouseUp={(e) => {
        if (!disabled && !loading) {
          e.currentTarget.style.transform = "translateY(0)";
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled && !loading) {
          e.currentTarget.style.transform = "translateY(0)";
        }
      }}
    >
      {loading ? (
        <>
          <span style={{ 
            width: "14px", 
            height: "14px", 
            border: "2px solid rgba(255,255,255,0.3)", 
            borderTopColor: "#fff", 
            borderRadius: "50%", 
            animation: "spin 1s linear infinite",
            display: "inline-block"
          }} />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </>
      ) : null}
      {loading ? "Processing..." : text}
    </button>
  );
};