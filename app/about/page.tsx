import Link from "next/link";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import styles from "./about.module.css";

const phases = [
  ["PHASE 01", "Curiosity.", "A question without an answer."],
  ["PHASE 02", "Listen.", "Understand the business."],
  ["PHASE 03", "Connect the dots.", "Agree the direction."],
  ["PHASE 04", "Design & build.", "Bring the idea together."],
  ["PHASE 05", "Review & refine.", "Prepare the next step."],
  ["NOW", "Still curious.", "Still becoming."],
];

const team = [
  ["David", "PROGRAMMER", "PROGRAMMING · DEVELOPMENT · TECHNICAL PROBLEM SOLVING"],
  ["Filip", "UI/UX · DESIGN", "UI/UX · VISUAL DESIGN · INTERFACE DESIGN"],
  ["Jasper", "GENERAL AFFAIR · SALES", "SALES · CRM · OPERATIONS · CLIENT RELATIONS · STRATEGY"],
  ["Patrick", "SALES", "SALES · PARTNERSHIPS · OUTREACH · BUSINESS DEVELOPMENT"],
];

const process = [
  ["01", "Discovery", "Listen. Understand.", "Written spec. Success criteria. Risk register. We ask better questions first.", "✓ SPEC SIGNED"],
  ["02", "Architecture", "Plan. Design. Align.", "Schema, pipelines, infra diagram, auth model. Design system foundation.", "✓ ARCH SIGNED"],
  ["03", "Build", "Make. Ship. Demo.", "Review progress together. Refine the work through agreed milestones and feedback.", "✓ MILESTONE REVIEW"],
  ["04", "Harden", "Test. Secure. Refine.", "Load, security, observability. Full bug bash before production.", "✓ PROD-READY"],
  ["05", "Launch", "Ship. Monitor. Hand over.", "Migrate, monitor, handover documentation. Support on standby.", "✓ LIVE"],
];

const services = [
  ["01", "Web Development", "Custom websites and web applications, from concept to deployment. Fast, purposeful, production-ready.", "Project / Retainer"],
  ["02", "IT Solutions", "Practical technology that works reliably. Bug fixes, integrations, infrastructure and team augmentation.", "Month / FTE"],
  ["03", "SEO & Digital Growth", "People-first content and search strategy. Rankings that hold because the foundations are solid.", "Monthly"],
  ["04", "Digital Marketing", "Connected social, promotional content and performance ads. Coordinated around one business goal.", "Project / Retainer"],
];

function PixelPerson({ index }: { index: number }) {
  return <div className={`${styles.person} ${styles[`person${index + 1}`]}`} aria-hidden="true">
    <i className={styles.hair} /><i className={styles.head} /><i className={styles.body} /><i className={styles.armLeft} /><i className={styles.armRight} /><i className={styles.legLeft} /><i className={styles.legRight} />
  </div>;
}

export default function AboutPage() {
  return <main id="top"><Navbar />
    <section className={styles.hero}>
      <div className={styles.shell}>
        <div className={styles.heroMeta}><span>§ STUDIO — FOUNDED IN CURIOSITY</span><span>● ACCEPTING NEW WORK</span></div>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <h1>Different minds.<strong>Shared intent.</strong>Built together.</h1>
            <p>SCHRIF connects web, IT, SEO and digital marketing into one purposeful direction. Get to know the people and the process behind the work.</p>
            <ol>{["Intent before execution.", "Connected disciplines, shared goals.", "Clear scopes. Shared expectations.", "Review together, refine with purpose."].map((item, index) => <li key={item}><b>0{index + 1}</b>{item}</li>)}</ol>
          </div>
          <div className={styles.aboutTerminal}>
            <div className={styles.termTop}><span>root@schrif:~$ whoami</span><i>● ● ●</i></div>
            <div className={styles.wordmark} aria-label="Schrif"><span>S</span><span>C</span><span>H</span><span>R</span><span>I</span><span>F</span></div>
            <p>&gt; Studio of purposeful makers.<br />&gt; Web · IT · SEO · Digital Marketing<br />&gt; Connected by design. Built with intent.<br />&gt; [STATUS]: Accepting new work <b>_</b></p>
          </div>
        </div>
      </div>
    </section>

    <section className={styles.section}>
      <div className={styles.shell}>
        <p className={styles.command}>$ schrif --timeline --studio</p>
        <p className={styles.kicker}>01 / THE STORY SO FAR</p>
        <h2>From first idea to next chapter.</h2>
        <div className={styles.timeline}>{phases.map(([phase, title, body], index) => <article key={phase} className={index ? "" : styles.current}><span>{index === 0 ? "●" : "●"}</span><b>{phase}</b><h3>{title}</h3><p>{body}</p></article>)}</div>
      </div>
    </section>

    <section className={styles.section}>
      <div className={styles.shell}>
        <p className={styles.command}>$ schrif --team --humans</p>
        <p className={styles.kicker}>02 / THE PEOPLE BEHIND THE WORK</p>
        <div className={styles.splitHeading}><h2>Meet the people who build the next move.</h2><p>A lean team of specialists. Everyone owns their craft. Direct access, no intermediaries. Senior contributors working on problems worth solving.</p></div>
        <div className={styles.teamGrid}>{team.map(([name, role, skills], index) => <article key={name}><div className={styles.personFrame}><PixelPerson index={index} /></div><h3>{name}</h3><b>{role}</b><p>{skills}</p></article>)}</div>
      </div>
    </section>

    <section className={styles.section}>
      <div className={styles.shell}>
        <p className={styles.command}>$ schrif --process --studio</p>
        <p className={styles.kicker}>03 / HOW WE WORK</p>
        <h2>A structured approach to purposeful work.</h2>
        <div className={styles.processTable}><div className={styles.tableHead}><span>PHASE</span><span>STAGE</span><span>WHAT HAPPENS</span><span>OUTCOME</span></div>{process.map(([number, stage, note, details, outcome]) => <article key={number}><b>{number}</b><div><h3>{stage}</h3><small>{note}</small></div><p>{details}</p><em>{outcome}</em></article>)}</div>
      </div>
    </section>

    <section className={styles.section}>
      <div className={styles.shell}>
        <p className={styles.command}>$ schrif --services --studio</p>
        <p className={styles.kicker}>04 / THE SERVICES</p>
        <h2>Each services. One connected approach.</h2>
        <div className={styles.serviceTable}>{services.map(([number, title, description, type]) => <article key={number}><b>{number}</b><h3>{title}</h3><p>{description}</p><small>{type}</small></article>)}</div>
      </div>
    </section>

    <section className={styles.finalSection}><div className={styles.shell}><div className={styles.finalCard}><div><p className={styles.kicker}>STORY / CONTINUED WITH YOU</p><h2>The next chapter <strong>starts with a question.</strong></h2><p>Tell us what you want to change. We’ll find the right starting point together.</p></div><div><form action="/connect" className={styles.finalForm}><label className={styles.finalPrompt}><span aria-hidden="true">→</span><input name="message" type="text" placeholder="I have an idea. Let&apos;s make it real." autoComplete="off" /></label><div className={styles.finalActions}><button type="submit" className="btn btn--lime">Start a conversation</button><Link href="/solutions" className="btn btn--outline">Explore solutions</Link></div></form><small>NO FINISHED BRIEF NEEDED. JUST A STARTING POINT.</small></div></div></div></section>
    <Footer />
  </main>;
}
