export default function Card({ title, children, footer }) {
  return (
    <div className="card">
      {title ? <div className="card-header">{title}</div> : null}
      <div className="card-body">{children}</div>
      {footer}
    </div>
  );
}
