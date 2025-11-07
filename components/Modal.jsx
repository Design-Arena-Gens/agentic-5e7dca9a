"use client";
import { useEffect } from "react";

export default function Modal({ open, onClose, title, children, footer }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {title ? <h3 style={{ marginTop: 0 }}>{title}</h3> : null}
        <div>{children}</div>
        {footer ? <div style={{ marginTop: 16 }}>{footer}</div> : null}
      </div>
    </div>
  );
}
