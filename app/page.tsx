const projects = [
  {
    name: "StudyStack",
    status: "wip" as const,
    statusLabel: "IN PROGRESS",
    desc: "A minimal flashcard app for students who hate flashcard apps. Fast, keyboard-first, spaced repetition baked in.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    link: "#",
    linkLabel: "Coming soon ↗",
  },
  {
    name: "PromptPal",
    status: "live" as const,
    statusLabel: "LIVE",
    desc: "A tiny AI helper that rewrites your messy prompts into clean, specific ones. Built in a weekend, still useful every day.",
    tags: ["React", "Vite", "OpenAI", "Vercel"],
    link: "#",
    linkLabel: "Visit site ↗",
  },
  {
    name: "This website",
    status: "live" as const,
    statusLabel: "LIVE",
    desc: "Built with Next.js and a lot of love. A little slice of the internet that's entirely mine.",
    tags: ["Next.js", "TypeScript", "CSS"],
    link: "#",
    linkLabel: "You're on it ↗",
  },
  {
    name: "??? (secret)",
    status: "wip" as const,
    statusLabel: "NEXT UP",
    desc: "Something I'm cooking with a friend. Too early to talk about, but it involves math, AI, and a lot of coffee.",
    tags: ["Stealth"],
    link: "#",
    linkLabel: "Stay tuned ↗",
  },
];

const timeline = [
  { date: "MAR 2024", title: "First line of code", body: "A Python script that printed jokes. It wasn't funny. I was hooked." },
  { date: "AUG 2024", title: "First website", body: "Plain HTML + CSS. Ugly, static, and completely mine." },
  { date: "FEB 2025", title: "Discovered React", body: "The first time the browser felt like a real canvas." },
  { date: "NOW",      title: "Building & shipping", body: "Focused on small, useful tools that solve real problems." },
];

const tools = [
  "TypeScript","JavaScript","Python","React","Next.js","Tailwind","Node.js",
  "Supabase","PostgreSQL","HTML","CSS","Git","Vercel","Figma",
];

export default function Home() {
  return (
    <>
      <nav>
        <div className="nav-inner">
          <div className="brand">abdul<span className="dot">.</span></div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#journey">Journey</a>
            <a href="#projects">Projects</a>
            <a href="#now">Now</a>
            <a href="#toolkit">Toolkit</a>
            <a href="mailto:hello@abdul.dev">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero" id="about">
          <div>
            <div className="eyebrow">// portfolio — v1</div>
            <h1>hey, i&apos;m <span className="name">Abdul.</span></h1>
            <p className="hero-sub text-light">
              I&apos;m a young developer teaching myself to build real things on the internet —
              one broken build at a time.
            </p>
            <div className="cta">
              <a className="btn primary" href="#projects">See my projects →</a>
              <a className="btn" href="mailto:hello@abdul.dev">Get in touch</a>
            </div>
          </div>
          <div className="stats">
            <div className="stat"><div className="n">13</div><div className="l">Age</div></div>
            <div className="stat"><div className="n">3</div><div className="l">Projects shipped</div></div>
            <div className="stat"><div className="n">&apos;24</div><div className="l">Coding since</div></div>
            <div className="stat"><div className="n">CA</div><div className="l">Based in</div></div>
          </div>
        </section>

        <section id="story">
          <div className="eyebrow">01 — the story</div>
          <h2>It started with curiosity.</h2>
          <p>
            I&apos;ve always been the kid who takes things apart to see how they work.
            When my friend <a href="https://aradrsk.com" style={{ color: "var(--accent-2)" }}>Arad</a>{" "}
            showed me what he was building, something clicked — you don&apos;t need permission to
            make software, you just need time and a laptop. So I started.
          </p>
          <p>
            Since then I&apos;ve been learning in public — shipping small projects, breaking them,
            rewriting them, and slowly figuring out how the internet is actually glued together.
          </p>
          <div className="facts">
            <div className="fact"><b>First language</b>Python → JavaScript</div>
            <div className="fact"><b>Learning style</b>Self-taught, project-first</div>
            <div className="fact"><b>Currently into</b>Web apps &amp; tiny AI tools</div>
            <div className="fact"><b>Why I build</b>Because shipping &gt; dreaming</div>
          </div>
        </section>

        <section id="journey">
          <div className="eyebrow">02 — the journey</div>
          <h2>A short timeline.</h2>
          <div className="timeline">
            {timeline.map((t) => (
              <div className="t-item" key={t.date}>
                <div className="t-date">{t.date}</div>
                <div className="t-title">{t.title}</div>
                <div className="t-body">{t.body}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects">
          <div className="eyebrow">03 — projects</div>
          <h2>Things I&apos;ve built.</h2>
          <div className="projects">
            {projects.map((p) => (
              <article className="card" key={p.name}>
                <div className={`badge ${p.status === "wip" ? "wip" : ""}`}>
                  <span className="dot"></span>{p.statusLabel}
                </div>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <div className="tags">
                  {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
                <a className="link" href={p.link}>{p.linkLabel}</a>
              </article>
            ))}
          </div>
        </section>

        <section id="now">
          <div className="eyebrow">04 — now</div>
          <h2>What I&apos;m up to.</h2>
          <ul className="now-list">
            <li>Leveling up my TypeScript and learning how databases <em>actually</em> work under the hood.</li>
            <li>Shipping StudyStack&apos;s first public beta before the end of the school year.</li>
            <li>Reading every essay on <span className="mono">paulgraham.com</span> like it&apos;s homework.</li>
            <li>Sharing progress publicly — because accountability beats motivation.</li>
          </ul>
        </section>

        <section id="toolkit">
          <div className="eyebrow">05 — toolkit</div>
          <h2>What I build with.</h2>
          <div className="tools">
            {tools.map((t) => <div className="tool" key={t}>{t}</div>)}
          </div>
        </section>
      </main>

      <footer>
        <div>© 2026 abdul · built with next.js</div>
        <div>made with <span className="heart">♥</span> &amp; a lot of stack overflow</div>
        <div>
          <a href="mailto:hello@abdul.dev">email</a> ·{" "}
          <a href="https://github.com/">github</a> ·{" "}
          <a href="https://aradrsk.com">arad&apos;s site</a>
        </div>
      </footer>
    </>
  );
}
