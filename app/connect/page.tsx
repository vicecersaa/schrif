"use client";

import { FormEvent, useState } from "react";
import Footer from "@/components/Footer";
import ConnectTerminal from "@/components/ConnectTerminal";
import Navbar from "@/components/Navbar";

const services = ["Web Development", "IT Solutions", "SEO", "Digital Marketing", "Not sure yet — let’s work it out"];
const answers = [
  ["Do I need a complete brief to get in touch?", "Not at all. Start with your business, what is not working and what you would like to change. We will help turn that into a clear direction."],
  ["Can you work with our existing website or system?", "Yes. Share what you are using and where it falls short. We will explore what can be improved, connected or rebuilt around your goals."],
  ["Can we start with just one service?", "Absolutely. Start with the need that matters most. We can connect other disciplines when they make sense."],
  ["How are scope, budget and timing decided?", "We discuss your priorities and constraints first, then agree on an approach, deliverables and timeline."],
];

export default function ConnectPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [sent, setSent] = useState(false);
  const toggle = (service: string) => setSelected((current) => current.includes(service) ? current.filter((item) => item !== service) : [...current, service]);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); };
  return <main id="top"><Navbar />
    <section className="connectHero"><div className="connectShell connectHero__grid">
      <div><p className="eyebrow animate-line">schrif / connect</p><h1 className="connectTitle"><span className="animate-line" style={{"--delay":".04s"} as React.CSSProperties}>Bring your ideas.</span><span className="is-lime animate-line" style={{"--delay":".18s"} as React.CSSProperties}>Start a discussion.</span></h1><p className="connectLead animate-line" style={{"--delay":".33s"} as React.CSSProperties}>A new website. A smarter system. A clearer path to growth. Tell us what’s on your mind — we’ll find the right starting point together.</p><div className="connectActions animate-line" style={{"--delay":".48s"} as React.CSSProperties}><a href="#project" className="btn btn--lime">Tell us about your project <span>↗</span></a><a href="mailto:hello@schrif.com" className="btn btn--outline">Email us directly <span>↗</span></a></div><p className="terminalNote animate-line" style={{"--delay":".60s"} as React.CSSProperties}>// No perfect brief required. Just a little intent.</p></div>
      <div className="connectTerminalWrap animate-line" style={{"--delay":".16s"} as React.CSSProperties}>
        <p className="connectTerminalMeta"><span>•</span> Good work starts with a conversation</p>
        <ConnectTerminal />
      </div>
    </div></section>
    <section id="project" className="connectSection"><div className="connectShell"><div className="sectionLabel"><span>01 / Tell us what’s next</span><span>A little context goes a long way</span></div><div className="projectGrid"><aside><h2>Start with the problem. We’ll connect the dots.</h2><p>Whether you’re starting something new or making what you have work harder, we’d like to understand your business before talking deliverables.</p><div className="direct"><b>Prefer a direct hello?</b><a href="mailto:hello@schrif.com">hello@schrif.com</a><p>Project inquiries, questions or a thoughtful introduction — our inbox is a good place to start.</p></div><ul><li>Where your business is today</li><li>What you’re trying to change</li><li>Any links, timing or constraints</li></ul></aside>
      <form className="projectForm" onSubmit={submit}><div className="formTitle"><h2>{sent ? "Inquiry received." : "Tell us about your project"}</h2><span>* Required</span></div>{sent ? <p className="success">Thanks. We’ll get back to you soon.</p> : <><div className="twoCols"><label>Your name *<input required placeholder="What should we call you?" /></label><label>Email address *<input required type="email" placeholder="you@company.com" /></label><label>Company / brand *<input required placeholder="Your business name" /></label><label>Website (optional)<input placeholder="https://yourwebsite.com" /></label></div><fieldset><legend>What can we help with? *</legend><small>Choose all that fit. It’s okay if you’re still figuring it out.</small><div className="serviceGrid">{services.map((service) => <label key={service} className={selected.includes(service) ? "service is-selected" : "service"}><input type="checkbox" checked={selected.includes(service)} onChange={() => toggle(service)} />{service}</label>)}</div></fieldset><label>What would you like to build or improve? *<textarea required placeholder="Tell us about your business, the challenge you’re facing and what a better outcome would look like." /></label><div className="twoCols"><label>Ideal timing (optional)<input placeholder="A target date, or still exploring" /></label><label>Budget context (optional)<input placeholder="A range, or let’s discuss" /></label></div><label className="consent"><input required type="checkbox" /> I agree to be contacted by Schrif about this inquiry. *</label><div className="formSubmit"><small>Your details help us understand your project.</small><button className="btn btn--lime">Send inquiry <span>↗</span></button></div></>}</form>
    </div></div></section>
    <section className="connectSection"><div className="connectShell"><div className="sectionLabel"><span>02 / What happens next</span></div><div className="workflowHeading"><h2>A conversation. Then a clear direction.</h2><p>Thoughtful collaboration starts before the work does. Here’s how we get from hello to a shared understanding.</p></div><div className="steps">{[["01 / Understand","We listen first.","We review your context, explore your goals and ask the questions that matter."],["02 / Connect","We find the right fit.","Together, we identify where web, IT, SEO or digital marketing can help."],["03 / Align","We shape the next step.","If we’re a good fit, we outline the scope, approach and timing."]].map(([tag,title,body])=><article key={tag}><b>{tag}</b><h3>{title}</h3><p>{body}</p></article>)}</div><p className="clarity">// Clarity before commitment. Intent in every detail.</p></div></section>
    <section className="connectSection faq"><div className="connectShell faqGrid"><aside><p className="eyebrow">03 / Before you say hello</p><h2>A little clarity, before we connect.</h2><p>A few things you might be wondering. Something else on your mind? Just ask.</p><a href="mailto:hello@schrif.com">hello@schrif.com</a></aside><div>{answers.map(([question,answer])=><details key={question}><summary>{question}<span>↳</span></summary><p>{answer}</p></details>)}</div></div></section>
    <section className="connectSection"><div className="connectShell finalCta"><div><p className="eyebrow">04 / Your next move</p><h2>Let’s build with intent.</h2><p>Big ambition or a small first step. We’re here to help you move forward with clarity.</p></div><div><div className="ctaInput">I have an idea. Let’s make it real. _</div><a href="#project" className="btn btn--lime">Talk to Schrif <span>↗</span></a></div></div></section>
    <Footer />
  </main>;
}
