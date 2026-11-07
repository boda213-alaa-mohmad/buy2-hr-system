"use client";
import "./not-found.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="glow glow-one" />
      <div className="glow glow-two" />

      <div className="not-found-content">
        <span className="error-badge">
          <span className="status-dot" />
          ERROR 404 — PAGE NOT FOUND
        </span>

        <h1>404</h1>

        <h2>{"Oops! You've lost your way."}</h2>

        <p>
          {" The page you're looking for doesn't exist,"}
          <br />
          or it may have been moved to another location.
        </p>

        <div className="not-found-actions">
          <button className="back-btn" onClick={() => window.history.back()}>
            Go Back
          </button>
          <Link href="/dashboard" className="home-btn">
            Go to Home <span>→</span>
          </Link>
        </div>
        <span className="footer-text">LOST IN SPACE • 404</span>
      </div>
    </main>
  );
}
