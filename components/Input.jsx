"use client";

export default function Input({ className = "", ...props }) {
  return <input className={["input", className].join(" ").trim()} {...props} />;
}
