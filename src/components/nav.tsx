import Link from "next/link";

export function Nav() {
  return (
    <header className="navWrap">
      <nav className="nav">
        <Link className="brand" href="/">
          <span className="brandMark" aria-hidden>≋</span>
          <span>Shimpilot Compatibility Lab</span>
        </Link>
        <div className="navLinks">
          <Link href="/stripe">Stripe</Link>
          <Link href="/openai">OpenAI</Link>
          <Link href="/supabase">Supabase</Link>
          <Link href="/architecture">Architecture</Link>
          <a href="https://shimpilot.com" target="_blank" rel="noreferrer">Shimpilot ↗</a>
        </div>
      </nav>
    </header>
  );
}
