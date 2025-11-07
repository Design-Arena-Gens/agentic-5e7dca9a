"use client";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const classes = ["btn", variant, size, className].join(" ").trim();
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
