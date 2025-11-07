export const metadata = {
  title: "Design System",
  description: "Minimal design system built with Next.js",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <div className="app-shell">
          <header className="app-header">
            <div className="container">
              <a className="brand" href="/">DS</a>
              <nav className="nav">
                <a href="/" className="nav-link">Docs</a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="nav-link">GitHub</a>
              </nav>
            </div>
          </header>
          <main className="container">
            {children}
          </main>
          <footer className="app-footer">
            <div className="container">? {new Date().getFullYear()} DS ? Built with Next.js</div>
          </footer>
        </div>
      </body>
    </html>
  );
}
