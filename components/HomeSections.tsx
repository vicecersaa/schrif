"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const work = [
  ["retail", "Retail", "LAYOUT · CATALOG · NAVIGATION"],
  ["digital", "Fintech", "LAYOUT · PRODUCT · HIERARCHY"],
  ["hospitality", "Hospitality", "LAYOUT · SERVICES · CONTENT"],
  ["learning", "EdTech", "LAYOUT · LEARNING · CONTENT"],
  ["product", "Hardware", "LAYOUT · PRODUCT · BRAND"],
  ["commerce", "Electronics", "LAYOUT · COMMERCE · PRODUCTS"],
];
const services = [["Web Development", "Full-stack sites, from brand to launch."], ["SEO & Content", "Rankings, content strategy & growth."], ["Social Media", "Scroll-stopping creatives at scale."], ["Promotional Content", "Ads, promos & campaign assets."], ["Brand Identity", "Logo, palette & visual language."], ["UI/UX Design", "Interfaces built to feel like Schrif."], ["Performance Ads", "Paid media creative that drives ROAS."]];
const faqs = [["What services does Schrif offer?", "Web Development, SEO & Content, Social Media, Promotional Content, Brand Identity, UI/UX Design and Performance Ads."], ["How do you structure a package?", "Discovery clarifies direction. Build shapes and delivers the solution. Scale supports your next stage. We define the right scope together."], ["Do you offer custom scope-based work?", "Yes. Start with your goals and challenges; the proposal brings the recommended services, deliverables and project scope together."], ["How does a project begin?", "We begin with Idea Planning, then Pitching: understand the problem, agree on the direction, and shape a clear plan before design and execution."]];

function Label({ children, number }: { children: React.ReactNode; number: string }) { return <p className="homeLabel"><span>{number}</span>{children}</p>; }

function TypeSnippet({ children }: { children: string }) {
  const [typed, setTyped] = useState("");
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setTyped(children); return; }
    let stopped = false; let timer: ReturnType<typeof setTimeout>; let position = 0;
    const tick = () => {
      position += 1;
      setTyped(children.slice(0, position));
      if (position > children.length) timer = setTimeout(() => { position = 0; setTyped(""); tick(); }, 1400);
      else timer = setTimeout(() => !stopped && tick(), 10);
    };
    timer = setTimeout(tick, 320);
    return () => { stopped = true; clearTimeout(timer); };
  }, [children]);
  return <pre aria-label="Animated service terminal">{typed}<i aria-hidden="true">_</i></pre>;
}

export default function HomeSections() {
  const prompts = [
    "Hello Schrif, I want to make a website for my business",
    "I need a clear website that helps my business grow",
    "Help me turn an idea into a useful digital experience",
  ];
  const [prompt, setPrompt] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPrompt(prompts[0]);
      return;
    }
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;
    let phrase = 0;
    let position = 0;
    let deleting = false;
    const tick = () => {
      const text = prompts[phrase];
      position += deleting ? -1 : 1;
      setPrompt(text.slice(0, Math.max(0, position)));
      let wait = deleting ? 18 : 28;
      if (!deleting && position === text.length) { deleting = true; wait = 1500; }
      else if (deleting && position === 0) { deleting = false; phrase = (phrase + 1) % prompts.length; wait = 350; }
      timer = setTimeout(() => !cancelled && tick(), wait);
    };
    timer = setTimeout(tick, 350);
    return () => { cancelled = true; clearTimeout(timer); };
  }, []);
  return <>
    <section id="solutions" className="homeSection homeIntro"><div className="homeShell"><div className="homeIntroLead"><div><Label number="02 /">DIGITAL, DESIGNED WITH PURPOSE</Label><h2>Clear content. Useful experiences.</h2><p>Growing a business online takes more than a good-looking website. SCHRIF brings web development, IT, SEO, and digital marketing together—so every part works toward the same business goals.</p></div><Link href="/connect" className="btn btn--outline">Explore our approach</Link></div><div className="intentCard"><div className="intentMenu">{[["Intent", "Every decision serves a purpose and contributes to a meaningful outcome."],["Clarity", "Remove unnecessary complexity. Make every next step easy to understand."],["Usability", "Prioritize usability, performance, and quality in every digital experience."],["Connection", "Bring strategy, technology, and marketing together in one coordinated approach."],["Precision", "Test, review, and refine before delivery. Details make the difference."]].map(([title,copy],index)=><article className={index===0?"is-selected":""} key={title}><i>{index+1}</i><div><b>{title}</b><p>{copy}</p></div></article>)}</div><figure><img src="/intent-coffee.png" alt="Coffee and a hand-drawn fox on a canvas bag"/><figcaption>BUILT WITH INTENT.</figcaption></figure><div className="intentDetail"><p>01 / ONE INTEGRATED PARTNER</p><h3>Connected by design.<br />Built for growth.</h3><span>Practical foundations that can scale with you. SCHRIF connects your digital touchpoints with clear intent and dependable execution.</span><ul><li>Purposeful decisions</li><li>Structured execution</li><li>Business-focused outcomes</li></ul><div><small>Web Development</small><small>IT Solutions</small><small>SEO</small><small>Digital Marketing</small></div><Link href="/connect" className="btn btn--lime">Talk to SCHRIF <b>→</b></Link></div></div></div></section>

    <section id="work" className="homeSection workSection"><div className="homeShell"><div className="homeHeading"><div><Label number="03 /">IDEAS IN WAITING</Label><h2>Website ideas. Empty slots for now.</h2></div><a className="btn btn--outline" href="/connect">Share your idea</a></div><div className="workGrid">{work.map(([terminal, type, tags], index) => <article className="workCard" key={terminal}><div className="workTerminal"><span>schrif@work:~/{terminal}</span><i>SLOT #{index + 1}</i></div><div className="workPreview"><span>◆</span><b>EMPTY SLOT</b></div><p className="cardKicker">{type}</p><h3>Slot 0{index + 1}</h3><p>Placeholder for a future {terminal} website idea.</p><small>{tags}</small><em>◆ EMPTY SLOT</em></article>)}</div></div></section>

    <section className="homeSection homeCommand"><div className="homeShell"><Label number="04 /">FROM INPUT TO OUTPUT</Label><div className="homeCommand__heading"><h2>Type it. Discuss Together.</h2><p>Input your command, let's discuss the problem together. Each service will best suit with what your company needs.</p></div><div className="commandStudio"><div className="commandPanel"><p className="commandPanel__label"><b>?</b> PROMPT</p><div className="commandTyped" aria-label="Animated project prompt">{prompt}<i aria-hidden="true">_</i></div><div className="commandProgress"><i /><span>{done ? "Done" : "Ready"}</span></div><div className="commandChips"><button className="is-active">Website Development</button><button>SEO Organizing</button><button>Social Media</button><button>Application Development</button></div><p className="commandNote">Example prompts. Each result is that tool's real output, not a mockup.</p></div><figure className="commandVideo"><div className="commandVideo__frame"><img src="/command-dog.png" alt="Golden retriever on a skateboard in a neon city"/><button aria-label="Play preview" className="commandVideo__play">?</button><figcaption><b>?</b> MADE WITH TEXT TO VIDEO</figcaption></div><div className="commandVideo__footer"><span>REAL RESULT, STRAIGHT FROM THE TOOL</span><button className="btn btn--lime" onClick={() => setDone(true)}>Make this yourself</button></div></figure></div></div></section>

    <section className="homeSection"><div className="homeShell"><Label number="05 /">CONNECTED BY DESIGN</Label><div className="capabilityHeading"><h2>For every concept. We create the <em>Schrif.</em></h2><p>Web, IT, SEO and digital marketing. Four disciplines, working toward the same business goals.</p></div><div className="capabilityGrid">{[["web", "Web Development", "Fast, useful websites. Ready to grow.", `$ schrif --load web\n\n+---------------------+\n|   < / >   WEB       |\n|   [ ] [ ] [ ]       |\n+---------------------+`], ["it", "IT Solutions", "Practical technology. Less unnecessary complexity.", `$ schrif --load it\n\n   [ SYSTEM ]\n       |\n  +----+----+\n[ APP ]  [ DATA ]`], ["seo", "SEO", "People first. Search-ready.", `$ schrif --load seo\n\n    .-------.\n  /  FIND   \n |  + SEO   |\n  \  -----  /`], ["marketing", "Digital Marketing", "Connected efforts. A shared business goal.", `$ schrif --load marketing\n\n      /====|  ))\n[====<     |  )))\n      \====|  ))\n          ||`]].map(([path, title, body, art]) => <article key={path}><header>root@schrif:~/{path}</header><div className="capabilityBody"><TypeSnippet>{art}</TypeSnippet><div className="capabilityCopy"><h3>{title}</h3><p>{body}</p></div></div><small>[ready] Connected by design.</small></article>)}</div></div></section>

    <section className="homeSection homeApproach"><div className="homeShell"><div className="approachCopy"><Label number="06 /">ONE CONNECTED APPROACH</Label><h2>One partner. A shared<br />direction.</h2><p>SCHRIF connects strategy, technology, and marketing to help businesses build, reach, and grow with intent.</p><ol>{[["Understand the problem", "We ask better questions, identify your goals, and explore what a meaningful outcome looks like for your business."], ["Align on the direction", "We connect the right disciplines and agree clear expectations. Every decision stays tied to the problem worth solving."], ["Build, review, and refine", "We prioritize usability, performance, and quality. Thoughtful collaboration keeps the work moving in the right direction."]].map(([title, copy], i) => <li key={title}><b>0{i + 1}</b><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol><Link href="/connect" className="btn btn--lime">Share a problem <b>?</b></Link></div><figure className="approachVisual"><figcaption><b>?</b> SCHRIF / CONNECTED-BY-DESIGN</figcaption><img src="/connected-dashboard.png" alt="Schrif creative workspace dashboard" /></figure></div></section>

    <section className="homeSection servicesOverview"><div className="homeShell"><div className="homeHeading"><div><Label number="07 /">AGENCY SERVICES</Label><h2>Agency services, all in one place</h2></div><Link href="/connect" className="btn btn--outline">Explore all services</Link></div><div className="serviceCards">{services.map(([name, copy], index) => <article className={index === 0 ? "is-featured" : ""} key={name}><span>Agency</span><h3>{name}</h3><p>{copy}</p><a href="/connect">Explore <b>?</b></a></article>)}</div></div></section>

    <section id="use-cases" className="homeSection homeCases"><div className="homeShell"><div className="homeHeading"><div><Label number="08 /">BUILT AROUND YOUR WORK</Label><h2>The same studio, tuned to your work</h2></div><Link href="/connect" className="btn btn--outline">See every solution</Link></div><div className="caseGrid">{[["For Influencers", "Daily posts, headshots, and UGC without a content team"], ["For Ecommerce", "Product shots and video ads from one phone photo"], ["For Small Business", "A brand kit, flyers, and promo video on one plan"], ["For Agencies", "Run every client campaign on one subscription"]].map(([title, copy], i) => <article key={title}><div className={`caseImage caseImage--${i + 1}`} role="img" aria-label={title}></div><h3>{title}</h3><p>{copy}</p><a href="/connect">See the workflow</a></article>)}</div></div></section>

    <section id="models" className="homeSection packagesOverview"><div className="homeShell"><div className="homeHeading"><div><Label number="10 /">AGENCY PACKAGES</Label><h2>Services for all business type</h2><p>Scope and cost are defined together through a proposal — no fixed prices, no guesswork.</p></div><Link className="btn btn--outline packageExplore" href="/connect">Explore all services</Link></div><div className="packageGrid">{[["Web Design & Development", "Custom websites and web applications, from concept to deployment.", ["Custom frontend & backend development", "CMS integration (Strapi, WordPress, headless)", "Shopify & e-commerce builds", "Milestone reviews and a shared delivery plan", "Ongoing support & maintenance option"]], ["UI/UX & Brand Design", "Interfaces and identities built with clarity.", ["UI/UX design for web & app", "Brand identity", "Design system & component library", "User research & usability testing", "Pixel-perfect handoff to development"]], ["SEO & Digital Growth", "People-first content and search strategy.", ["Technical SEO audit", "Content strategy", "Keyword research", "Monthly reporting"]], ["IT & Website Support", "Practical website support, updates and integrations.", ["Hosting & uptime monitoring", "Bug fixes", "Third-party integrations", "Backups & infrastructure review"]]].map(([title, copy, bullets], i) => <article className={i === 0 ? "is-featured" : ""} key={title as string}><span>schrif@services:~/{["web-dev", "ui-brand", "seo-growth", "it-support"][i]}</span><h3>{title as string}</h3><p>{copy as string}</p><ul>{(bullets as string[]).map(b => <li key={b}>{b}</li>)}</ul><Link href="/connect">Request a proposal →</Link></article>)}</div></div></section>

    <section className="homeSection feedback"><div className="homeShell"><div className="feedbackHeading"><div><Label number="11 /">FEEDBACK FROM THE FIELD</Label><h2>What creators say about Schrif</h2><small><b>*</b> SAMPLE PREVIEW - NOT VERIFIED</small></div><Link href="/connect" className="btn btn--outline">Leave a review</Link></div><div className="feedbackPanel"><div className="feedbackPanel__bar"><i>o o o</i><span>schrif.ai/feedback</span><b>* LIVE</b></div><div className="feedbackPanel__screen"><div className="feedbackPanel__command">ROOT@SCHRIF:~$ FEEDBACK --ALL <span>SAMPLE PREVIEW</span></div><div className="feedbackReviews">{[["Schrif completely changed how I approach brand work. One prompt, one site, one identity - done. The electric-lime aesthetic feels intentional.", "A. Creator", "INFLUENCER - SAMPLE", "SAMPLE"], ["Every tool I needed was already here. Product shots, videos, the whole brand - delivered in one workspace. No switching.", "B. Studio", "ECOMMERCE - SAMPLE", "SAMPLE"], ["From logo to landing page in under an hour. Schrif's identity system actually holds together - colour, type, icons, motion. It feels coherent.", "C. Agency", "AGENCY - SAMPLE", "FEATURED - SAMPLE"], ["The AI output quality surprised me. Headshots, product photos, real estate videos - all from one subscription. Saves us real hours each week.", "D. Business", "SMALL BUSINESS - SAMPLE", "SAMPLE"]].map(([quote, name, role, badge], i) => <article className={i === 2 ? "is-featured" : ""} key={name}><div><strong>*****</strong><em>{badge}</em></div><p>&quot;{quote}&quot;</p><b>{name}</b><small>{role}</small></article>)}</div><div className="feedbackPanel__footer"><span>FEEDBACK.LOG - SCHRIF.AI - SAMPLE-PREVIEW ONLY</span><a className="btn btn--lime" href="/connect">Review us on Trustpilot -</a></div></div></div></div></section>

    <section className="homeSection homeFaq"><div className="homeShell"><div className="faqLead"><div><Label number="12 /">COMMON QUESTIONS</Label><p className="terminalText">root@schrif:~$ help --services</p><h2>Questions,<br />answered.</h2></div><p>Clear answers before the next move.<br />From the first idea to the final handover.</p></div><div className="faqList">{faqs.map(([question, answer], i) => <article key={question}><b>0{i + 1}</b><div><h3>{question}</h3><p>{answer}</p></div></article>)}</div></div></section>

    <section className="homeSection homeFinal"><div className="homeShell"><div><Label number="13 /">AWAITING YOUR INPUT_</Label><h2>Start with<br />a sentence.</h2><p>Type what you want to make. MagicShot opens the right tool with your prompt already in place.</p></div><form onSubmit={e => e.preventDefault()}><div><input placeholder="A dog skateboarding in nyc..." /><button className="btn btn--lime">Create <b>?</b></button></div><a href="#top">Or start creating without a prompt</a></form></div></section>
  </>;
}
