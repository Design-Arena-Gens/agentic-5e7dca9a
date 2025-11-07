"use client";
import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Card from "../components/Card";
import Badge from "../components/Badge";
import Modal from "../components/Modal";
import ThemeSwitcher from "../components/ThemeSwitcher";

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <section className="section">
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <h1>Design System</h1>
          <ThemeSwitcher />
        </div>
        <p className="lead">
          Minimal, dependency-free UI primitives to build fast. Copy and adapt as needed.
        </p>
        <div className="panel">
          <div className="grid">
            <div style={{ gridColumn: "span 6" }}>
              <h3>Buttons</h3>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <Button>Primary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="outline">Outline</Button>
                <Button size="sm">Small</Button>
                <Button size="lg">Large</Button>
                <Button onClick={() => setOpen(true)}>Open Modal</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>
            <div style={{ gridColumn: "span 6" }}>
              <h3>Inputs</h3>
              <div style={{ display: "grid", gap: 8 }}>
                <Input placeholder="Your name" />
                <Input placeholder="Email" type="email" />
                <Input placeholder="Search?" aria-label="Search" />
              </div>
            </div>
            <div style={{ gridColumn: "span 6" }}>
              <h3>Badges</h3>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <Badge>Neutral</Badge>
                <Badge tone="success">Success</Badge>
                <Badge tone="warn">Warning</Badge>
                <Badge tone="danger">Danger</Badge>
              </div>
            </div>
            <div style={{ gridColumn: "span 6" }}>
              <h3>Cards</h3>
              <Card title="Card Title" footer={<div style={{ padding: 16 }}><Button variant="ghost">Action</Button></div>}>
                Cards group related content and actions. Use them for dashboards and lists.
              </Card>
            </div>
            <div style={{ gridColumn: "span 12" }}>
              <h3>Tokens</h3>
              <table className="table">
                <thead>
                  <tr><th>Token</th><th>Value</th></tr>
                </thead>
                <tbody>
                  {[
                    ["--bg", "Background"],
                    ["--panel", "Surface"],
                    ["--text", "Foreground"],
                    ["--muted", "Muted"],
                    ["--primary", "Primary"],
                    ["--border", "Border"],
                  ].map(([token, label]) => (
                    <tr key={token}>
                      <td><code>{token}</code></td>
                      <td><span className="badge" style={{ background: `var(${token})` }}>{label}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h3>Keyboard & Accessibility</h3>
        <div className="panel">
          <p>All controls are keyboard-focusable and provide visible focus rings.</p>
          <p>Close modal with <span className="kbd">Esc</span>.</p>
        </div>
      </section>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Example Modal"
        footer={
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
            <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </div>
        }
      >
        This is a small modal example. Click outside or press Esc to close.
      </Modal>
    </div>
  );
}
