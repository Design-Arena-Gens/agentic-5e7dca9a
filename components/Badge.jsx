export default function Badge({ children, tone = "" }) {
  const classes = ["badge", tone].join(" ").trim();
  return <span className={classes}>{children}</span>;
}
