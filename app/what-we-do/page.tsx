import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./what-we-do.css";

const disciplines = [
  ["01–02", "Define the foundation", "Brand Identity / UI/UX Design", "A clear identity. A useful experience."],
  ["03–04", "Build to be found", "Web Development / SEO & Content", "A stronger platform. A path to discovery."],
  ["05–07", "Connect and activate", "Social Media / Promotional Content / Performance Ads", "Consistent communication. Intentional reach."],
];

const services = [
  ["Brand Identity", "Define who you are.", "Before a website or campaign takes shape, your brand needs a clear point of view. We translate your purpose, audience and positioning into a consistent identity that travels across every digital touchpoint.", "Logo systems / visual language / brand guidelines"],
  ["UI/UX Design", "Make the next step feel natural.", "We connect business priorities with the user experience people actually use: your product, clear journeys and considered interfaces that work with your content from the first read to the next move and beyond.", "User journeys / information architecture / wireframes"],
  ["SEO & Content", "Be useful. Be discoverable.", "Visibility starts with understanding what your audience is looking for. We connect search intent, technical foundations and helpful content so your website can earn the right questions, not just more visits.", "Search research / content planning / technical on-page SEO"],
  ["Social Media", "Show up with a clear point of view.", "A connected presence needs a consistent voice. We turn your brand priorities into thoughtful content for the channels your audience uses, without losing the message, visual language or momentum.", "Channel direction / content calendars / ongoing refinement"],
  ["Promotional Content", "One message. The right expression.", "Turn a launch, offer or business priority into a clear creative direction. We develop campaign concepts and content that carry the same message across your ads, social channels and landing pages.", "Campaign concepts / key visuals / motion & video"],
  ["Performance Ads", "A goal before a media plan.", "We align audience, creative and destination before a campaign goes live. With agreed objectives and measurement in place, we test, review and refine the report that happened and what to improve next.", "Audience & channel planning / ad creative / reporting"],
];

const foundationServices = [
  {
    number: "01",
    name: "Brand Identity",
    title: "Define who you are.",
    copy: "Before a website or campaign takes shape, your brand needs a clear point of view. We translate your purpose, audience and positioning into a consistent identity that can travel across every digital touchpoint.",
    output: ["Visual identity & logo system", "Typography, colour & brand guidelines"],
  },
  {
    number: "02",
    name: "UI/UX Design",
    title: "Make the next step feel natural.",
    copy: "We connect business priorities with the way people actually use your product. Clear journeys and considered interfaces help visitors understand your offer, find what they need and move forward with confidence.",
    output: ["User journeys & information architecture", "Wireframes, interfaces & prototypes"],
  },
];

const contentServices = [
  {
    number: "04",
    name: "SEO & Content",
    title: "Be useful. Be discoverable.",
    copy: "Visibility starts with understanding what your audience is looking for. We connect search intent, technical foundations and helpful content so your website can answer the right questions, not simply attract more visits.",
    output: ["Search research & content planning", "Technical & on-page SEO", "Useful content & performance reporting"],
    note: "Search insight informs the website and campaign direction.",
  },
  {
    number: "05",
    name: "Social Media",
    title: "Show up with a clear point of view.",
    copy: "A connected presence needs a consistent voice. We turn your brand's priorities into thoughtful content for the channels your audience uses, keeping the message, visual language and next step aligned with your wider digital presence.",
    output: ["Channel direction & content calendars", "On-brand visuals & copy", "Content review & ongoing refinement"],
    note: "Social content connects people back to your broader story.",
  },
];

const campaignServices = [
  {
    number: "06",
    name: "Promotional Content",
    title: "One message. The right expressions.",
    copy: "Turn a launch, offer or business priority into a clear creative direction. We develop campaign concepts and content that carry the same message across your ads, social channels and landing pages.",
    output: ["Campaign concepts & key visuals", "Channel-ready assets & video direction"],
  },
  {
    number: "07",
    name: "Performance Ads",
    title: "A goal before a media plan.",
    copy: "We align audience, creative and destination before a campaign goes live. With agreed objectives and measurement in place, we test, review and refine, then report what happened and what to do next.",
    output: ["Audience & channel planning", "Ad creative, testing & optimisation", "Transparent performance reporting"],
  },
];

const process = [
  ["01", "Idea Planning", "Understand the real challenge, your audience and what success should look like.", "A shared brief"],
  ["02", "Pitching", "Agree the approach, priorities, scope and delivery plan before the work begins.", "A clear direction"],
  ["03", "Design", "Explore ideas, shape the experience and review the details with you.", "An intentional design"],
  ["04", "Development", "Build the agreed solution, connect the tools and document the decisions.", "A working solution"],
  ["05", "Review", "Test usability, performance and quality. Gather feedback and refine together.", "A reviewed release"],
  ["06", "Launch", "Go live with a clear handover and agreed next steps for learning and improvement.", "A confident next step"],
];

function DeliveryManifest() {
  const items = ["Responsive interfaces", "CMS & useful integrations", "Search-ready foundations", "Usability & performance review", "Documentation & handover"];
  return <aside className="wwdManifest" aria-label="Web development delivery manifest"><header><span>schrif / delivery-manifest</span><b>[ ]</b></header><div className="wwdManifest__body"><p>$ build website --with-intent</p><ol>{items.map((item) => <li key={item}>{item}</li>)}</ol></div><footer><strong>→ A platform your business can build on.</strong><small>Scope follows your needs. Not a template.</small></footer></aside>;
}

export default function WhatWeDoPage() {
  return <main id="top"><Navbar />
    <section className="wwdHero"><div className="wwdShell"><div className="wwdHero__top"><span>schrif / what we do</span><b>● BUILT WITH INTENT.</b></div><h1>Imagine it.<em>Make it matter_</em></h1><div className="wwdHero__copy"><p><b>PLAYFUL THINKING.</b><br />Creative thinking. Disciplined execution.</p><p>We build purposeful digital experiences. Web development, technology and search-driven marketing, connected around what your business needs next.</p><p><b>ONE CONNECTED PARTNER.</b><br />For small, focused steps and growing brands in motion.</p></div><Link href="/connect" className="btn btn--lime">Let&apos;s talk about your project <span>↗</span></Link></div></section>

    <section className="wwdIntro"><div className="wwdShell"><p className="wwdKicker">01 / THE BIGGER PICTURE</p><div className="wwdHeading"><h2>Different disciplines.<br />Not disconnected efforts.</h2><p>A website, a search strategy and a campaign should not pull in different directions. We bring the right skills together around one business goal.</p></div><div className="wwdDisciplineGrid">{disciplines.map(([number, title, label, copy]) => <article key={number}><span>{number}</span><i aria-hidden="true">↗</i><h3>{title}</h3><small>{label}</small><p>{copy}</p></article>)}</div></div></section>

    <section className="wwdSection wwdFoundation"><div className="wwdShell"><div className="wwdFoundation__status"><p className="wwdKicker">02 / FOUNDATION</p><span>$ define --before-build</span></div><div className="wwdHeading"><h2>Clarity first.<br />Everything else follows.</h2><p>Identity and experience are the foundation, not separate finishing touches.</p></div><div className="wwdFoundationRows">{foundationServices.map((service) => <article key={service.name}><div><span>DISCIPLINE / {service.number}</span><h3>{service.name}</h3></div><div><h4>{service.title}</h4><p>{service.copy}</p></div><div><span>OUTPUT /</span><ul>{service.output.map((item) => <li key={item}>{item}</li>)}</ul></div></article>)}</div></div></section>

    <section className="wwdWeb"><div className="wwdShell"><div className="wwdWeb__status"><p className="wwdKicker">03 / DIGITAL PRESENCE</p><span>$ build --for-purpose</span></div><div className="wwdWebCard"><div><span>DISCIPLINE / 03</span><h2>Not just online.<br />Built to work.</h2><h3>Web Development</h3><p>Your website should do more than look the part. We build responsive, usable websites that connect your brand to real business needs, with a considered front end and dependable technology behind it.</p><small>From landing pages to content-managed websites and connected tools, we scope the right solution, test the details and make handover clear.</small></div><DeliveryManifest /></div></div></section>

    <section className="wwdSection wwdContent"><div className="wwdShell"><div className="wwdContent__status"><p className="wwdKicker">04 / CONTENT &amp; CONNECTION</p><span>$ connect --with-relevance</span></div><div className="wwdHeading"><h2>Less noise. More relevance.</h2><p>Help people find you, understand you and stay connected. With purpose at every touchpoint.</p></div><div className="wwdContentGrid">{contentServices.map((service) => <article key={service.name}><header><h3>{service.name}</h3><span>/{service.number}</span></header><h4>{service.title}</h4><p>{service.copy}</p><div><span>OUTPUT /</span><ul>{service.output.map((item) => <li key={item}>{item}</li>)}</ul></div><small>{service.note}</small></article>)}</div></div></section>

    <section className="wwdSection wwdCampaign"><div className="wwdShell"><div className="wwdCampaign__status"><p className="wwdKicker">05 / CAMPAIGN &amp; ACTIVATION</p><span>$ activate --with-a-goal</span></div><div className="wwdHeading"><h2>Make the message clear.<br />Make the next move count.</h2><p>Creative and media work better together. We connect the message to the audience, the destination and the business objective.</p></div><div className="wwdCampaignRows">{campaignServices.map((service) => <article key={service.name}><div><span>DISCIPLINE / {service.number}</span><h3>{service.name}</h3></div><div><h4>{service.title}</h4><p>{service.copy}</p></div><div><span>OUTPUT /</span><ul>{service.output.map((item) => <li key={item}>{item}</li>)}</ul></div></article>)}</div></div></section>

    <section className="wwdConnect"><div className="wwdShell"><div className="wwdConnect__grid"><div><p className="wwdKicker">06 / CONNECTED BY INTENT</p><h2>The pieces change.<br />The intent stays.</h2><p>A new brand may need a website. An established business may need better search visibility or a more useful digital platform. We connect the right disciplines around the problem, not a fixed bundle.</p></div><dl><dt>$ align --around-your-business</dt><dd><b>INPUT</b>Your challenge, audience and priorities</dd><dd><b>APPROACH</b>Strategy + technology + marketing</dd><dd><b>OUTPUT</b>One coordinated digital direction</dd></dl></div><div className="wwdConnect__closing"><strong>Creative thinking. Disciplined execution. Every decision made with intent.</strong><span aria-hidden="true">[→]</span></div></div></section>

    <section className="wwdWorkflow"><div className="wwdShell"><p className="wwdKicker">07 / THE WORKFLOW</p><div className="wwdHeading"><h2>Your input. Our craft.<br />One clear process.</h2><p>No black boxes. We work with you through clear expectations, honest communication and decisions you can follow.</p></div><div className="wwdProcess"><div className="wwdProcess__head"><span>STAGE /</span><span>WHAT HAPPENS /</span><span>WHAT WE ALIGN ON /</span></div>{process.map(([number, stage, happens, outcome]) => <article key={number}><b>{number}</b><h3>{stage}</h3><p>{happens}</p><small>{outcome}</small></article>)}</div><div className="wwdFootnote"><span>↻ FEEDBACK CONNECTS EVERY STAGE.</span><span>Clear conversations keep the work moving.</span></div></div></section>

    <section className="wwdFinal"><div className="wwdShell"><div className="wwdFinal__top"><p className="wwdKicker">08 / HUMAN INPUT</p><span>GOOD WORK STARTS WITH A CONVERSATION.</span></div><div className="wwdFinal__grid"><div><h2>Your next move.<br />Let&apos;s give it intent.</h2><p className="wwdQuestion">› &nbsp; What are you working towards? <i /></p></div><div><p className="wwdFinal__copy">An idea, a challenge or a half-written brief is enough. Tell us where you are and where you want to go. We&apos;ll help find the right starting point.</p><Link className="btn btn--lime" href="/connect">Let&apos;s talk about your project <span>↗</span></Link></div></div><div className="wwdFinal__foot"><span>BRING YOUR CONTEXT. WE&apos;LL ASK THE RIGHT QUESTIONS.</span><span>Real people. Thoughtful questions. A clear next step.</span></div></div></section>
    <Footer />
  </main>;
}
