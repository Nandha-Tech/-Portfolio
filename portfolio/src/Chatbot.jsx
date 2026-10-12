import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { me, exp, projects, skills, services } from './data.js';

const answer = (q) => {
  q = q.toLowerCase();
  const has = (...w) => w.some((x) => q.includes(x));
  if (has('hi', 'hello', 'hey')) return "Hi! I'm Nandha's assistant. Ask me about his skills, projects, experience or how to contact him.";
  if (has('skill', 'tech', 'stack')) return skills.map(([t, i]) => `${t}: ${i.join(', ')}`).join('\n');
  if (has('project', 'built', 'work')) return 'Recent projects: ' + projects.slice(0, 6).map((p) => p.t).join(', ') + '. See the Projects section for demos.';
  if (has('experience', 'intern', 'job')) return exp.map((e) => `${e.role} at ${e.org} (${e.when})`).join('\n');
  if (has('service', 'hire', 'offer')) return 'Services: ' + services.map((s) => s[0]).join(', ') + '.';
  if (has('contact', 'email', 'phone', 'reach')) return `Email: ${me.email}\nPhone: ${me.phone}`;
  if (has('cv', 'resume')) return 'Use the Download CV button in the navbar.';
  if (has('educat', 'college', 'study')) return 'B.E. Computer Science Engineering, P.E.T Engineering College (2021-2025), CGPA 8.5.';
  return "I can help with skills, projects, experience, services or contact details. Try one of those.";
};
const quick = ['Skills', 'Projects', 'Experience', 'Contact'];

export default function Chatbot({ open: extOpen, setOpen: extSetOpen }) {
  const [intOpen, setIntOpen] = useState(false);
  const open = extOpen !== undefined ? extOpen : intOpen;
  const setOpen = extSetOpen !== undefined ? extSetOpen : setIntOpen;
  const [typing, setTyping] = useState(false), [text, setText] = useState('');
  const [msgs, setMsgs] = useState([{ b: true, t: "Hi! I'm Nandha's assistant. What would you like to know?" }]);
  const end = useRef(null);
  useEffect(() => { end.current?.scrollIntoView({ behavior: 'smooth' }); }, [msgs, typing, open]);
  const send = (t) => {
    if (!t.trim()) return;
    setMsgs((m) => [...m, { t }]); setText(''); setTyping(true);
    setTimeout(() => { setMsgs((m) => [...m, { b: true, t: answer(t) }]); setTyping(false); }, 700);
  };
  return (
    <>
      <motion.button className="fab" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setOpen(!open)} aria-label="Chat">{open ? '✕' : '💬'}</motion.button>
      <AnimatePresence>
        {open && (
          <motion.div className="chat" initial={{ opacity: 0, y: 30, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 30, scale: 0.9 }}>
            <div className="chat-h">Ask about Nandha</div>
            <div className="chat-b">
              {msgs.map((m, i) => <div key={i} className={'msg ' + (m.b ? 'bot' : 'me')}>{m.t}</div>)}
              {typing && <div className="msg bot dots"><i /><i /><i /></div>}
              <div ref={end} />
            </div>
            <div className="quick">{quick.map((q) => <button key={q} onClick={() => send(q)}>{q}</button>)}</div>
            <form onSubmit={(e) => { e.preventDefault(); send(text); }}>
              <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type a question..." />
              <button>Send</button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
