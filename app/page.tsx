const goals = [
  { label: "Write my first real program", done: false },
  { label: "Build a website from scratch", done: false },
  { label: "Ship something my friends actually use", done: false },
  { label: "Learn enough to help someone else learn", done: false },
];

const timeline = [
  { date: "DAY 0",  title: "This site",            body: "My friend Arad set this up for me. It's the first page on the internet with my name on it." },
  { date: "NEXT",   title: "Learn the basics",     body: "HTML, CSS, a little JavaScript. Enough to edit this page myself." },
  { date: "SOON",   title: "First real project",   body: "Something small. Something that works. Something that's mine." },
  { date: "LATER",  title: "???",                  body: "TBD. That's the fun part." },
];

const learning = [
  "HTML","CSS","JavaScript","How the internet works","How to Google things",
  "Patience","Breaking stuff on purpose",
];

export default function Home() {
  return (
    <>
      <nav>
        <div className="nav-inner">
          <div className="brand">abdul<span className="dot">.</span></div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#plan">Plan</a>
            <a href="#goals">Goals</a>
            <a href="#learning">Learning</a>
            <a href="mailto:hello@abdul.dev">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero" id="about">
          <div>
            <div className="eyebrow">// day one</div>
            <h1>hey, i&apos;m <span className="name">Abdul.</span></h1>
            <p className="hero-sub text-light">
              I haven&apos;t written a single line of code yet — but I&apos;m about to.
              This is where I&apos;ll keep track of everything I learn, build, and break along the way.
            </p>
            <div className="cta">
              <a className="btn primary" href="#plan">See the plan →</a>
              <a className="btn" href="mailto:hello@abdul.dev">Say hi</a>
            </div>
          </div>
          <div className="stats">
            <div className="stat"><div className="n">0</div><div className="l">Lines of code</div></div>
            <div className="stat"><div className="n">0</div><div className="l">Projects shipped</div></div>
            <div className="stat"><div className="n">∞</div><div className="l">Things to learn</div></div>
            <div className="stat"><div className="n">1</div><div className="l">Good friend helping</div></div>
          </div>
        </section>

        <section id="story">
          <div className="eyebrow">01 — the story</div>
          <h2>Starting from zero.</h2>
          <p>
            My friend <a href="https://aradrsk.com" style={{ color: "var(--accent-2)" }}>Arad</a>{" "}
            started building stuff on the internet, and watching him do it made me want to try too.
            I don&apos;t know what I&apos;m doing yet. That&apos;s the whole point.
          </p>
          <p>
            This site is going to grow with me. Right now it&apos;s mostly empty —
            soon it&apos;ll have real projects, real screw-ups, and hopefully a few things I&apos;m proud of.
          </p>
        </section>

        <section id="plan">
          <div className="eyebrow">02 — the plan</div>
          <h2>How I&apos;m going to learn.</h2>
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

        <section id="goals">
          <div className="eyebrow">03 — goals</div>
          <h2>What I want to do.</h2>
          <ul className="now-list">
            {goals.map((g) => (
              <li key={g.label}>
                <span style={{ color: g.done ? "var(--good)" : "var(--muted)" }}>
                  [{g.done ? "x" : " "}]
                </span>
                &nbsp;{g.label}
              </li>
            ))}
          </ul>
        </section>

        <section id="learning">
          <div className="eyebrow">04 — learning</div>
          <h2>On my list.</h2>
          <p>Nothing here is a skill yet. It&apos;s all stuff I&apos;m about to figure out.</p>
          <div className="tools">
            {learning.map((t) => <div className="tool" key={t}>{t}</div>)}
          </div>
        </section>
      </main>

      <footer>
        <div>© 2026 abdul · day one</div>
        <div>built by <a href="https://aradrsk.com">arad</a>, owned by me</div>
        <div>
          <a href="mailto:hello@abdul.dev">email</a> ·{" "}
          <a href="https://aradrsk.com">arad&apos;s site</a>
        </div>
      </footer>
    </>
  );
}
