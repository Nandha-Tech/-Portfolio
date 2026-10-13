import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { me, exp, edu, projects, filters, stack, skillStack, services } from './data.js';

/* ─── animation preset ──────────────────────────────────── */
const rise = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55 },
};
const Head = ({ t, s }) => (
  <motion.div className="head" {...rise}>
    <h2>{t}</h2>
    <p>{s}</p>
  </motion.div>
);

/* ─── SVG Icons ─────────────────────────────────────────── */
const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.548l8.073-6.055C21.692 2.28 24 3.434 24 5.457z" />
  </svg>
);
const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);
const SunIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);
const MoonIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
);
const RobotIcon = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="2.5" r="1.5" fill="currentColor" />
    <line x1="12" y1="4" x2="12" y2="7" />
    <rect x="4" y="7" width="16" height="13" rx="4" />
    <circle cx="9" cy="12" r="1.5" fill="currentColor" />
    <circle cx="15" cy="12" r="1.5" fill="currentColor" />
    <path d="M9 16h6" />
    <line x1="2" y1="12" x2="4" y2="12" strokeWidth="2.5" />
    <line x1="20" y1="12" x2="22" y2="12" strokeWidth="2.5" />
  </svg>
);

/* ─── navbar nav data & helpers ─────────────────────────── */
const NAV = [
  { id: 'home', l: 'Home' }, { id: 'experience', l: 'Experience' },
  { id: 'projects', l: 'Projects' }, { id: 'skills', l: 'Skills' },
  { id: 'services', l: 'Services' }, { id: 'contact', l: 'Contact' },
];

// Meaningful WhatsApp message
const WA_TEXT = encodeURIComponent(
  "Hello Nandhakumar!,I saw Your Portfolio"
);
const WHATSAPP_URL = `https://wa.me/${me.phone.replace(/\D/g, '')}?text=${WA_TEXT}`;

// Universal smart email opener (opens Gmail compose in browser, with mailto fallback)
const openEmail = (e) => {
  if (e && e.preventDefault) e.preventDefault();
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(me.email)}&su=${encodeURIComponent('Portfolio Inquiry - Hello Nandhakumar')}`;
  const win = window.open(gmailUrl, '_blank');
  if (!win || win.closed || typeof win.closed === 'undefined') {
    window.location.href = `mailto:${me.email}?subject=${encodeURIComponent('Portfolio Inquiry - Hello Nandhakumar')}`;
  }
};

/* ─── Navbar ─────────────────────────────────────────────── */
function Navbar({ theme, setTheme, onChat }) {
  const [act, setAct] = useState('home'), [open, setOpen] = useState(false), [sc, setSc] = useState(false);
  useEffect(() => {
    const f = () => {
      setSc(window.scrollY > 40);
      for (const n of [...NAV].reverse()) {
        const e = document.getElementById(n.id);
        if (e && e.getBoundingClientRect().top < 160) { setAct(n.id); break; }
      }
    };
    f(); window.addEventListener('scroll', f);
    return () => window.removeEventListener('scroll', f);
  }, []);
  return (
    <header className={'nav' + (sc ? ' sc' : '')}>
      <a href="#home" className="logo">nandha<b>.dev</b></a>
      <nav className={open ? 'open' : ''}>
        {NAV.map((n) => (
          <a key={n.id} href={'#' + n.id} onClick={() => setOpen(false)} className={act === n.id ? 'on' : ''}>{n.l}</a>
        ))}
      </nav>
      <div className="nav-actions">
        <div className="nav-icons">
          <a href={me.socials[0].u} target="_blank" rel="noreferrer" className="nav-icon-btn gh-btn" title="GitHub"><GithubIcon /></a>
          <a href={me.socials[1].u} target="_blank" rel="noreferrer" className="nav-icon-btn li-btn" title="LinkedIn"><LinkedinIcon /></a>
          <a href={`mailto:${me.email}`} onClick={openEmail} className="nav-icon-btn mail-btn" title="Send Email"><MailIcon /></a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="nav-icon-btn wa-btn" title="Chat on WhatsApp"><WhatsAppIcon /></a>
          <button className="nav-icon-btn theme-btn" title="Toggle theme" onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
        <a className="btn sm" href={me.cv} download="Nandha_Kumar_MERN_Stack_Developer_Resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
        <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
      </div>
    </header>
  );
}

/* ─── Typer ─────────────────────────────────────────────── */
function Typer({ words }) {
  const [i, setI] = useState(0), [t, setT] = useState(''), [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i % words.length];
    const id = setTimeout(() => {
      if (!del) { setT(w.slice(0, t.length + 1)); if (t.length + 1 === w.length) setTimeout(() => setDel(true), 1100); }
      else { setT(w.slice(0, t.length - 1)); if (t.length - 1 === 0) { setDel(false); setI(i + 1); } }
    }, del ? 40 : 90);
    return () => clearTimeout(id);
  }, [t, del, i, words]);
  return <span className="typed">{t}<u>|</u></span>;
}

/* ─── Home ───────────────────────────────────────────────── */
function Home() {
  return (
    <section id="home" className="hero">
      <div className="wrap hero-in">
        <div className="hero-txt">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="hi">Hello, I'm</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}>{me.name}</motion.h1>
          <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}><Typer words={me.roles} /></motion.h3>
          <motion.p className="lead" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>{me.intro}</motion.p>
          <motion.div className="row" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            <a className="btn" href="#projects">View my work</a>
            <a className="btn ghost" href="#contact">Contact me</a>
          </motion.div>
          <div className="row soc">{me.socials.map((s) => <a key={s.n} href={s.u} target="_blank" rel="noreferrer">{s.n}</a>)}</div>
          <div className="stats">{me.stats.map(([n, l]) => <div key={l}><b>{n}</b><span>{l}</span></div>)}</div>
        </div>
        <motion.div className="photo" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
          <div className="ring" />
          <img src={me.photo} alt={me.name} />
          <motion.span className="float f1" animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 4 }}>React</motion.span>
          <motion.span className="float f2" animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 5 }}>Node.js</motion.span>
          <motion.span className="float f3" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4.5 }}>MongoDB</motion.span>
        </motion.div>
      </div>
      <div className="marquee"><div>{[...stack, ...stack].map(([n, src], i) => <img key={i} src={src} alt={n} title={n} />)}</div></div>
    </section>
  );
}

/* ─── Experience ─────────────────────────────────────────── */
function Experience() {
  return (
    <section id="experience" className="sec">
      <div className="wrap">
        <Head t="Experience & Education" s="Where I've worked and studied" />
        <div className="tl">
          {exp.map((e, i) => (
            <motion.article key={e.role + e.org} className="tl-item"
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="dot" />
              <div className="card">
                <div className="exp-head">
                  <small>{e.when} · {e.len}</small>
                  {e.when.includes('Present') && <span className="exp-present-badge">● Present</span>}
                </div>
                <h3>{e.role}</h3>
                <h4>{e.org} · {e.type}</h4>
                <em>{e.where}</em>
                <p>{e.text}</p>
                <div className="tags">{e.tags.map((t) => <span key={t}>{t}</span>)}</div>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="edu">
          {edu.map(([s, d, y], i) => (
            <motion.div key={i} className="card" {...rise} transition={{ delay: i * 0.1, duration: 0.5 }}>
              <h4>{s}</h4><p>{d}</p><small>{y}</small>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Projects ───────────────────────────────────────────── */
function Projects() {
  const PAGE_SIZE = 9;
  // Initialize filter from URL param on first render
  const getInitialFilter = () => {
    const param = new URLSearchParams(window.location.search).get('filter');
    const validKeys = filters.map(([k]) => k);
    return validKeys.includes(param) ? param : 'all';
  };
  const [f, setF] = useState(getInitialFilter);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Sync URL param whenever filter changes
  const handleFilter = (key) => {
    setF(key);
    setVisibleCount(PAGE_SIZE);
    const url = new URL(window.location.href);
    if (key === 'all') {
      url.searchParams.delete('filter');
    } else {
      url.searchParams.set('filter', key);
    }
    window.history.pushState({}, '', url.toString());
  };

  // Also listen for browser back/forward navigation
  useEffect(() => {
    const onPop = () => {
      const param = new URLSearchParams(window.location.search).get('filter');
      const validKeys = filters.map(([k]) => k);
      setF(validKeys.includes(param) ? param : 'all');
      setVisibleCount(PAGE_SIZE);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const list = projects.filter((p) => f === 'all' || p.c === f);
  const visibleList = list.slice(0, visibleCount);
  const hasMore = visibleCount < list.length;

  return (
    <section id="projects" className="sec alt">
      <div className="wrap">
        <Head t="Projects" s="Things I've built and shipped" />
        <div className="tabs">
          {filters.map(([k, l]) => (
            <button key={k} className={f === k ? 'on' : ''} onClick={() => handleFilter(k)}>{l}</button>
          ))}
        </div>
        <motion.div layout className="grid p-grid">
          <AnimatePresence mode="popLayout">
            {visibleList.map((p) => (
              <motion.article layout key={p.t} className="proj"
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.35 }}>
                <div className="shot">
                  <img src={p.img} alt={p.t} loading="lazy" />
                  <div className="over">
                    {p.live && <a href={p.live} target="_blank" rel="noreferrer">Live demo</a>}
                    {p.src && <a href={p.src} target="_blank" rel="noreferrer">Source code</a>}
                    {!p.live && !p.src && <span>Coming soon</span>}
                  </div>
                </div>
                <div className="body">
                  <h3>{p.t}</h3><p>{p.d}</p>
                  <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
        {hasMore && (
          <motion.div
            className="show-more-wrap"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="btn ghost show-more-btn"
              onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
            >
              <span>Show More</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

/* ─── Skills ─ MY STACK layout ───────────────────────────── */
function Skills() {
  return (
    <section id="skills" className="sec">
      <div className="wrap">
        <div className="stack-label">
          <span className="stack-star">✦</span>
          <span>MY STACK</span>
        </div>
        <div className="mystack">
          {skillStack.map((group, gi) => (
            <motion.div key={group.cat} className="stack-row"
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: gi * 0.08, duration: 0.5 }}>
              <div className="stack-cat">{group.cat}</div>
              <div className="stack-items">
                {group.items.map((item, ii) => (
                  <motion.div key={item.name} className="stack-item"
                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: gi * 0.08 + ii * 0.04 }}
                    whileHover={{ scale: 1.08, y: -4 }}>
                    <img src={item.icon} alt={item.name} className="stack-icon"
                      onError={(e) => { e.target.style.opacity = 0.3; }} />
                    <span>{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Services ───────────────────────────────────────────── */
function Services() {
  return (
    <section id="services" className="sec alt">
      <div className="wrap">
        <Head t="Services" s="How I can help your team or product" />
        <div className="grid v-grid">
          {services.map(([t, d], i) => (
            <motion.div key={t} className="svc" {...rise} transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}>
              <h3>{t}</h3><p>{d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─ EmailJS ──────────────────────────────────── */
const EMAILJS_SERVICE = 'service_0gcsdvx';
const EMAILJS_TEMPLATE = 'template_o8aqmmh';
const EMAILJS_PUBLIC = 'dbF0YiNda1N7v0T49'; // replace if needed; auto-inits below

function Contact() {
  const formRef = useRef(null);
  const [v, setV] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'ok' | 'err'
  const on = (k) => (e) => setV({ ...v, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        { from_name: v.name, from_email: v.email, subject: v.subject, message: v.message },
        EMAILJS_PUBLIC
      );
      setStatus('ok');
      setV({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('err');
    }
  };

  const contactCards = [
    {
      label: 'Email',
      value: me.email,
      href: 'mailto:' + me.email,
      onClick: openEmail,
      color: '#EA4335',
      icon: <MailIcon />,
    },
    {
      label: 'Phone / WhatsApp',
      value: me.phone,
      href: WHATSAPP_URL,
      color: '#25D366',
      icon: <WhatsAppIcon />,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/nandhakumaroffl',
      href: me.socials[1].u,
      color: '#0077B5',
      icon: <LinkedinIcon />,
    },
    {
      label: 'GitHub',
      value: 'github.com/nandha-tech',
      href: me.socials[0].u,
      color: '#181717',
      icon: <GithubIcon />,
    },
  ];
  return (
    <section id="contact" className="sec">
      <div className="wrap">
        <Head t="Get in touch" s="Have a role or project in mind? Send me a message." />
        <div className="c-grid">
          <div className="c-info">
            {contactCards.map((card, i) => (
              <motion.a key={card.label} href={card.href} onClick={card.onClick} className="c-card"
                target={card.onClick ? undefined : '_blank'} rel="noreferrer"
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ '--brand': card.color }}>
                <div className="c-icon" style={{ background: card.color }}>{card.icon}</div>
                <div className="c-text">
                  <small>{card.label}</small>
                  <span>{card.value}</span>
                </div>
              </motion.a>
            ))}
          </div>
          <motion.form ref={formRef} className="card form" onSubmit={submit}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <input required placeholder="Your name" value={v.name} onChange={on('name')} />
            <input required type="email" placeholder="Your email" value={v.email} onChange={on('email')} />
            <input required placeholder="Subject" value={v.subject} onChange={on('subject')} />
            <textarea required rows="5" placeholder="Your message" value={v.message} onChange={on('message')} />
            <button className="btn" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? '⏳ Sending…' : 'Send message'}
            </button>
            {status === 'ok' && <p className="ok">✅ Message sent! I'll get back to you soon.</p>}
            {status === 'err' && <p className="err">❌ Something went wrong. Please try again or email me directly.</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

/* ─── AI Chatbot with Portfolio Knowledge ─────────────────── */
const AI_SYSTEM_PROMPT = `You are the friendly, intelligent AI Portfolio Assistant for Nandha Kumar (Nandhakumar T), an accomplished Full Stack Developer.
Analyze questions and answer warmly, accurately, and concisely based on Nandha's portfolio details.

About Nandha:
- Full Name: Nandha Kumar (Nandhakumar T)
- Role: Full Stack Developer / React Developer / UI & UX Enthusiast
- Location: Tirunelveli, Tamil Nadu, India
- Intro: Builds seamless digital experiences that combine functionality with aesthetic appeal. Computer Science graduate, React-first, skilled across frontend, backend, and databases.
- Contact:
  • Email: ${me.email}
  • Phone / WhatsApp: ${me.phone}
  • GitHub: https://github.com/nandha-tech
  • LinkedIn: https://www.linkedin.com/in/nandhakumaroffl
  • Resume / CV: Downloadable via the "Download CV" button in the portfolio header

Skills & Tech Stack:
- Frontend: HTML5, CSS3, JavaScript (ES6+), React, Redux, Angular, TypeScript, Tailwind CSS, Material UI, Vue.js
- Backend: Node.js, Express, Python, Django, FastAPI, REST APIs
- Database: MongoDB, PostgreSQL, MySQL, Firebase
- Tools: Git, GitHub, VS Code, Postman, Figma, Linux

Work Experience:
1. Software Engineer at QuikOne (Jan 2026 – Present · 1 yr · Full-time · Chennai, Tamil Nadu)
   - Building responsive and scalable web applications using React.js, Next.js, JavaScript, HTML, and CSS.
   - Creating dynamic user interfaces and integrating RESTful APIs.
   - Tech: React.js, Next.js, JavaScript, HTML, CSS, REST APIs.
2. React Developer (Internship) at SMACK Technologies Inc. (Apr 2025 – Oct 2025, 6 months · Hybrid, Tirunelveli)
   - Built and maintained responsive web applications using HTML, CSS, JavaScript, React, and Python (Django).
   - Designed PostgreSQL databases and integrated REST APIs.
   - Built eCommerce platforms, student management systems, and chatbot applications.
   - Tech: React.js, HTML, Material-UI, Redux, Vue.js, TypeScript.

Education:
- B.E. in Computer Science & Engineering from P.E.T Engineering College (2021 – 2025) · CGPA: 8.5
- 12th Standard (Computer Science) from National Matric Hr Sec School (2021) · 76%
- 10th Standard from National Matric Hr Sec School (2019) · 70%

Projects (9 completed):
1. Email Customizer: Drag & drop email builder with live preview, export to HTML/MJML (React, MJML, Tailwind). Live: https://email-customizer-9m8u.vercel.app/
2. Human Card: Digital identity card to store, preview, and share personal data with themes, PDF export, cloud sync (React, Material UI, Firebase, FastAPI). Live: https://human-card-1.onrender.com/
3. Chatbot AI: Context-aware conversational assistant with multi-turn chat and knowledge ingestion (React, FastAPI, OpenAI, Material UI).
4. AI Career Finder: ML-powered career recommender analyzing skills and interests (React, Flask, ML, OpenAI API). Live: https://ai-career-path-finder-f0tz8b0y9-nandhakumars-projects-9d088f9f.vercel.app/
5. E-Commerce Website: Full shopping cart, authentication, and Stripe payments (React, Node.js, MongoDB, Stripe). Live: https://shop-sea-gold.vercel.app/
6. MERN Food Order App: Auth, menu management, cart, order history, admin panel, real-time WebSocket status (MongoDB, Express, React, Node.js).
7. Resume Builder: Create resumes from templates and export to PDF (React, Firebase, PDF). Live: https://resume-builder-584w.vercel.app/
8. Student Management System: Full CRUD student records on REST API with Axios (React, REST API, Axios, Material UI). Live: https://student-mangement-system-crud.vercel.app/
9. Portfolio Website: Modern responsive portfolio with smooth animations (HTML5, CSS3, JavaScript, GSAP).

Services Offered:
1. Web Development (React, modern CSS, responsive UI)
2. Full Stack Applications (MERN stack or React + Python/Django/FastAPI)
3. UI/UX Design (Figma to clean responsive code)
4. API Integration & Development (RESTful APIs, webhooks, payments)
5. Chatbots & AI Features (OpenAI integrations, FastAPI backends)
6. Admin Dashboards & CRUD Tools

Guidelines for Answers:
- Be helpful, polite, and concise. Use bullet points or emojis for readability.
- If asked about general topics or programming questions, give an intelligent answer and relate back to Nandha's stack if appropriate.
- For hiring or freelance inquiries, encourage reaching out via Email (${me.email}) or WhatsApp (${me.phone}).`;

const KB = {
  greet: ['hi', 'hello', 'hey', 'good morning', 'good evening', 'good afternoon', "what's up", 'howdy'],
  name: ['your name', 'who are you', 'who is nandha', 'about nandha', 'introduce'],
  skill: ['skill', 'tech', 'stack', 'know', 'language', 'framework', 'tool', 'what can'],
  project: ['project', 'built', 'work', 'portfolio', 'app', 'website', 'application'],
  exp: ['experience', 'intern', 'job', 'work', 'company', 'employed', 'role'],
  edu: ['education', 'college', 'degree', 'study', 'university', 'cgpa', 'gpa', 'academic'],
  contact: ['contact', 'email', 'phone', 'reach', 'hire', 'connect', 'whatsapp'],
  service: ['service', 'offer', 'provide', 'help', 'freelance'],
  social: ['github', 'linkedin', 'instagram', 'social', 'link'],
  cv: ['cv', 'resume', 'download'],
};

function smartFallbackAnswer(q) {
  q = q.toLowerCase().trim();
  if (KB.greet.some(w => q.includes(w)))
    return `👋 Hi there! I'm Nandha's AI assistant. I can tell you all about:\n• Skills & Tech Stack\n• Projects he's built\n• Work Experience & Internships\n• Education & Background\n• Services & Contact options\n\nWhat would you like to know?`;
  if (KB.name.some(w => q.includes(w)))
    return `👨‍💻 Nandha Kumar is a Full Stack Developer from Tirunelveli, Tamil Nadu.\n\nHe specializes in React, Node.js, Python & Django. He has a B.E. in Computer Science from P.E.T Engineering College (CGPA 8.5) and has completed 2 internships.\n\nHe's built 9+ production-grade projects.`;
  if (KB.skill.some(w => q.includes(w)))
    return `🛠️ Nandha's Tech Stack:\n\n⚡ Frontend: HTML5, CSS3, JavaScript, React, Redux, Angular, TypeScript, Tailwind CSS, Material UI, Vue.js\n\n🔧 Backend: Node.js, Express, Python, Django, FastAPI, REST APIs\n\n🗄️ Database: MongoDB, PostgreSQL, MySQL, Firebase\n\n🛠️ Tools: Git, GitHub, VS Code, Postman, Figma, Linux`;
  if (KB.project.some(w => q.includes(w)))
    return `🚀 Featured Projects:\n\n1. Email Customizer — Drag & drop email builder (React, MJML)\n2. Human Card — Digital identity card (React, Firebase)\n3. Chatbot AI — Context-aware assistant (React, FastAPI, OpenAI)\n4. AI Career Finder — ML-powered career recommender (React, Flask)\n5. E-Commerce Website — Full cart + payment (MERN + Stripe)\n6. Resume Builder — PDF export from templates (React, Firebase)\n7. Student Management System — CRUD with REST API\n8. MERN Food Order App — Real-time orders via WebSockets\n\nExplore the Projects section to try the live demos! 🎯`;
  if (KB.exp.some(w => q.includes(w)))
    return `💼 Work Experience:\n\n1. Software Engineer — QuikOne (Full-time)\n   Jan 2026 – Present · 1 yr · Chennai · On-site\n   Building responsive and scalable web apps with React.js, Next.js, JavaScript, HTML, CSS, and REST APIs.\n\n2. React Developer — SMACK Technologies Inc. (Internship)\n   Apr 2025 – Oct 2025 (6 mos) · Hybrid\n   Built React/Django apps, PostgreSQL DBs, and REST APIs.`;
  if (KB.edu.some(w => q.includes(w)))
    return `🎓 Education:\n\n• B.E. Computer Science Engineering\n  P.E.T Engineering College (2021–2025) | CGPA: 8.5\n\n• 12th Standard (Computer Science)\n  National Matric Hr Sec School (2021) | 76%\n\n• 10th Standard\n  National Matric Hr Sec School (2019) | 70%`;
  if (KB.contact.some(w => q.includes(w)))
    return `📬 Contact Nandha:\n\n📧 Email: ${me.email}\n📱 Phone/WhatsApp: ${me.phone}\n💬 WhatsApp: Click the WhatsApp icon in the navbar or contact section!\n\nYou can also submit the message form on this page. ✅`;
  if (KB.service.some(w => q.includes(w)))
    return `🧩 Services Offered:\n\n1. Web Development — React, HTML, CSS, JS\n2. Full Stack Apps — MERN / React + Django/FastAPI\n3. UI/UX Design — Figma to polished interfaces\n4. API Integration — REST APIs, payments, cloud sync\n5. Chatbots & AI Features — FastAPI + OpenAI backends\n6. Dashboards & Tools — Admin panels, CRUD systems`;
  if (KB.social.some(w => q.includes(w)))
    return `🔗 Social Links:\n\n• GitHub: github.com/nandha-tech\n• LinkedIn: linkedin.com/in/nandhakumaroffl\n• Instagram: instagram.com/nandhakumaroffl`;
  if (KB.cv.some(w => q.includes(w)))
    return `📄 Click the "Download Resume" button in the top navbar to download Nandha's resume!`;

  return `🤖 I'm here to help with information about Nandha Kumar's skills, projects, experience, education, or contact details. Feel free to ask any specific question!`;
}

async function askAI(userMsg, history = []) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8500);

    const apiMessages = [
      { role: 'system', content: AI_SYSTEM_PROMPT },
      ...history.slice(-4).map(m => ({
        role: m.bot ? 'assistant' : 'user',
        content: m.t,
      })),
      { role: 'user', content: userMsg },
    ];

    const res = await fetch('https://text.pollinations.ai/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: apiMessages,
        model: 'openai',
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      const text = await res.text();
      if (text && text.trim().length > 0) {
        return text.trim();
      }
    }
  } catch (err) {
    console.warn('AI fetch fallback:', err);
  }
  return smartFallbackAnswer(userMsg);
}

const QUICK_REPLIES = ['Skills', 'Projects', 'Experience', 'Education', 'Contact', 'Services'];

function Chatbot({ open, setOpen }) {
  const [typing, setTyping] = useState(false);
  const [text, setText] = useState('');
  const [msgs, setMsgs] = useState([
    { bot: true, t: "👋 Hi! I'm Nandha's AI assistant 🤖\n\nAsk me anything about Nandha — his skills, projects, experience, or how to contact him!" }
  ]);
  const endRef = useRef(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [msgs, typing, open]);

  const send = async (input) => {
    const msg = (input || text).trim();
    if (!msg || typing) return;
    setText('');
    const newMsgs = [...msgs, { bot: false, t: msg }];
    setMsgs(newMsgs);
    setTyping(true);

    try {
      const aiReply = await askAI(msg, newMsgs);
      setMsgs(m => [...m, { bot: true, t: aiReply }]);
    } catch {
      setMsgs(m => [...m, { bot: true, t: smartFallbackAnswer(msg) }]);
    } finally {
      setTyping(false);
    }
  };

  return (
    <>
      {/* FAB — bot icon with live indicator */}
      <motion.button className="fab" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.92 }}
        onClick={() => setOpen(o => !o)} aria-label="Chat with AI">
        <AnimatePresence mode="wait" initial={false}>
          {open
            ? <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }} style={{ fontSize: 22, lineHeight: 1, display: 'flex' }}>✕</motion.span>
            : <motion.span key="bot" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }} style={{ display: 'flex', position: 'relative' }}>
              <RobotIcon size={28} />
              <span className="fab-online-dot" />
            </motion.span>
          }
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div className="chat"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}>
            <div className="chat-h">
              <div className="chat-h-info">
                <div className="chat-h-avatar">
                  <RobotIcon size={20} />
                  <span className="online-dot" />
                </div>
                <div className="chat-h-title">
                  <b>Nandha's AI Assistant</b>
                  <small>Online · Powered by AI</small>
                </div>
              </div>
              <button className="chat-close-btn" onClick={() => setOpen(false)} aria-label="Close chat">✕</button>
            </div>
            <div className="chat-b">
              {msgs.map((m, i) => (
                <div key={i} className={'msg-row ' + (m.bot ? 'bot' : 'me')}>
                  {m.bot && (
                    <div className="bot-avatar" title="AI Assistant">
                      <RobotIcon size={16} />
                    </div>
                  )}
                  <div className={'msg ' + (m.bot ? 'bot' : 'me')}>{m.t}</div>
                </div>
              ))}
              {typing && (
                <div className="msg-row bot">
                  <div className="bot-avatar">
                    <RobotIcon size={16} />
                  </div>
                  <div className="msg bot dots"><i /><i /><i /></div>
                </div>
              )}
              <div ref={endRef} />
            </div>
            <div className="quick">
              {QUICK_REPLIES.map(q => (
                <button key={q} disabled={typing} onClick={() => send(q)}>{q}</button>
              ))}
            </div>
            <form onSubmit={(e) => { e.preventDefault(); send(); }}>
              <input
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Ask anything about Nandha…"
                disabled={typing}
                autoFocus
              />
              <button type="submit" disabled={typing || !text.trim()}>➤</button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ─── App Root ───────────────────────────────────────────── */
export default function App() {
  const [theme, setTheme] = useState('dark');
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} onChat={() => setChatOpen(o => !o)} />
      <Home />
      <Experience />
      <Projects />
      <Skills />
      <Services />
      <Contact />
      <footer>
        <div className="wrap">© {new Date().getFullYear()} {me.name}. All rights reserved.</div>
      </footer>
      <Chatbot open={chatOpen} setOpen={setChatOpen} />
    </>
  );
}
