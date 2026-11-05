import Link from "next/link";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import styles from "./pricing.module.css";

const services = [
  { name: "Web Development", tag: "BUILD YOUR PRESENCE", prompt: "DISCUSS YOUR WEBSITE", detail: "Responsive websites & CMS", points: ["Website structure & UI", "CMS & integrations", "Testing & handover", "Scope agreed together"], note: "Start with your goals" },
  { name: "IT Solutions", tag: "SYSTEMS, CONNECTED", prompt: "DISCUSS YOUR SYSTEMS", detail: "IT solutions", points: ["Integrations & infrastructure", "Technical support & problem solving", "Review your current setup", "Scope agreed together"], note: "No obligation. We discuss scope first." },
  { name: "SEO & Content", tag: "PROPOSAL-LED", prompt: "DISCUSS YOUR VISIBILITY", detail: "SEO & content", points: ["Search & content strategy", "On-page structure & optimization", "Website copy & editorial planning", "Scope agreed together"], note: "No obligation. We discuss scope first." },
  { name: "Digital Marketing", tag: "CAMPAIGNS, ACTIVATED", prompt: "DISCUSS YOUR AUDIENCE", detail: "Digital marketing", points: ["Social media & content direction", "Campaign concepts & creative", "Performance ads & measurement", "Scope agreed together"], note: "No obligation. We discuss scope first." },
];

const faqs = [
  ["How does the consultation work?", "We start with your context, goals and current challenge. The first conversation helps us identify the most useful direction before a proposal is created."],
  ["What happens after the consultation?", "We summarise the agreed direction, recommend the relevant service area and prepare a scope when the project is ready to move forward."],
  ["Is there a proposal after the call?", "Yes. A project proposal follows once there is enough context to define the work, deliverables and next steps clearly."],
  ["What service areas do you cover?", "Web development, IT solutions, SEO and content, plus digital marketing that connects the wider experience."],
  ["How do you agree scope and deliverables?", "Everything is documented in the project proposal before work begins, including responsibilities, deliverables and timeline."],
];

export default function PricingPage() {
  return <main id="top"><Navbar />
    <section className={styles.hero}><div className={styles.shell}>
      <div className={styles.heroMeta}><span>schrif / consultation</span><span>● CONSULTATION / READY</span></div>
      <p className={styles.label}>01 / CONSULTATION SERVICES</p>
      <h1>Services for every<br />business.</h1>
      <p className={styles.lead}>Explore four primary service areas, then start with a discovery call. We agree scope, deliverables and a proposal before work begins.</p>
      <p className={styles.assurance}>◉ &nbsp; Scope first. Proposal next.</p>
      <div className={styles.serviceList}>{services.map((service, index) => <article className={`${styles.service} ${index === 2 ? styles.featured : ""}`} key={service.name}>
        <div className={styles.serviceName}><h2>{service.name}</h2><span>{service.tag}</span></div>
        <div className={styles.serviceNumber}><b>{String(index + 1).padStart(2, "0")}</b><div><small>{service.prompt}</small><p>{service.detail}</p></div></div>
        <ul>{service.points.map((point) => <li key={point}>✓ {point}</li>)}</ul>
        <div className={styles.serviceAction}><Link href="/connect" className={index === 2 ? "btn btn--lime" : "btn btn--outline"}>{index === 0 ? "Discuss your project" : "Book a consultation"}</Link><small>{service.note}</small></div>
      </article>)}</div>
      <div className={styles.promises}><span>✓ Discovery call included</span><span>✓ Scope agreed before work</span><span>✓ Proposal after consultation</span><span>✓ No obligation</span></div>
    </div></section>
    <section className={styles.areas}><div className={styles.shell}>
      <p className={styles.label}>02 / SERVICE AREAS</p><div className={styles.sectionHead}><h2>Four service areas. One consultation-first approach.</h2><p>A clear scope leaves room for creative thinking. Every service area combines strategy, technology and marketing to help growing businesses build a stronger digital presence.</p></div>
      <div className={styles.areaGrid}>{services.map((service, index) => <article key={service.name}><span>{["▱", "↯", "⌁", "◇"][index]}</span><div><h3>{service.name}</h3><p>{["Purposeful, responsive websites built around your business goals.", "Practical integrations, infrastructure and technical support for your business.", "Search strategy and useful content that help people find and understand your offer.", "Connected social content, creative campaigns and performance ads."][index]}</p></div></article>)}</div>
      <div className={styles.bar}><b>// consultation-first</b><span>Not sure where to start? Let&apos;s talk.</span></div>
    </div></section>
    <section className={styles.faq}><div className={styles.shell}><p className={styles.label}>03 / CONSULTATION FAQ</p><div className={styles.sectionHead}><h2>Consultation FAQ</h2><p>Choose with a shared understanding. Here is how consultation, scope and proposals work.</p></div><div className={styles.faqTerminal}><span>$ schrif --list-faq --topic consultation</span><b>● 5 ENTRIES FOUND</b></div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>⌄</span></summary><p>{answer}</p></details>)}<p className={styles.faqNote}>// A shared understanding makes room for better work.</p></div></section>
    <section className={styles.cta}><div className={`${styles.shell} ${styles.ctaCard}`}><div><p className={styles.label}>04 / YOUR NEXT MOVE</p><h2>Ready to discuss<br /><em>your project?</em></h2><p>Give your ideas room to play. Start with a consultation and align scope, deliverables and next steps before a proposal.</p><Link href="/connect" className="btn btn--lime">Book a consultation</Link></div><dl><div><dt>INPUT</dt><dd>Your idea. A direction worth exploring.</dd></div><div><dt>PLAN</dt><dd>A service area aligned to your goals.</dd></div><div><dt>OUTPUT</dt><dd>A proposal with scope, deliverables and next steps.</dd></div></dl></div></section>
    <Footer />
  </main>;
}
