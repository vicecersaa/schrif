import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const services = [
  ["foundation", "solutions/01 • foundation", "Shape how people see you.", "A distinct identity. An intuitive experience.", [["brand.init()", "Brand Identity", "Make your business feel unmistakably yours.", "✦"], ["experience.design()", "UI/UX Design", "Clear journeys. Thoughtful interfaces. Less friction.", "▣"]]],
  ["presence", "solutions/02 • digital presence", "Give your business a home.", "From considered design to a live experience.", [["web.build()", "Web Development", "Your brand, brought to life online. Responsive by design. Built to work.", "</>"]]],
  ["connection", "solutions/03 • content & connection", "Be found. Be worth following.", "Turn up the signal. Make real connections.", [["content.discover()", "SEO & Content", "Help the right people find what you do.", "◉"], ["social.connect()", "Social Media", "A consistent voice. A reason to connect.", "✦"]]],
  ["activation", "solutions/04 • campaign & activation", "Put your next move in motion.", "Creative that communicates. Campaigns with direction.", [["campaign.create()", "Promotional Content", "Make your launch impossible to scroll past.", "▶"], ["ads.activate()", "Performance Ads", "Reach with intent. Test, learn and refine.", "⌁"]]],
] as const;

const workflow = [["01", "Idea Planning", "Find the real challenge.", "●"], ["02", "Pitching", "Agree on a direction.", "↗"], ["03", "Design", "Make the idea tangible.", "▦"], ["04", "Development", "Build what works.", "</>"], ["05", "Review", "Refine every detail.", "•"], ["06", "Launch", "Make your next move.", "↗"]] as const;

function ServiceArt({ mark, index }: { mark: string; index: number }) {
  if (index === 0) {
    return <div className="solutionArt solutionArt--brand">
      <span className="brandArt__grid" />
      <div className="brandArt__board"><span className="brandArt__label">SCHRIF / IDENTITY SYSTEM</span><span className="brandArt__orbit" /><span className="brandArt__cross brandArt__cross--horizontal" /><span className="brandArt__cross brandArt__cross--vertical" /><span className="brandArt__star" /><small>FORM_01</small></div>
      <div className="brandArt__type"><b>Aa</b><span /><small>BUILT TO BE YOU.</small></div>
      <div className="brandArt__swatches"><i /><i /><i /></div>
      <p>A DISTINCTIVE START.</p>
    </div>;
  }
  if (index === 2) {
    return <div className="solutionArt solutionArt--web">
      <span className="webArt__grid" />
      <div className="webArt__code"><small>schrif / build-preview</small><strong>&lt;intent&gt;<br />&nbsp;&nbsp;&lt;design /&gt;<br />&nbsp;&nbsp;&lt;build responsive<br />&nbsp;&nbsp;&lt;launch /&gt;<br />&lt;/intent&gt;</strong><b>▣&nbsp; READY TO LAUNCH</b></div>
      <div className="webArt__preview"><span /><small>LIVE PREVIEW</small><h4>Ideas.<br />Now online.</h4><i>✱</i><em /><b /><strong /></div>
      <span className="webArt__cursor" />
    </div>;
  }
  if (index === 4) {
    return <div className="solutionArt solutionArt--seo">
      <span className="seoArt__grid" />
      <div className="seoArt__radar"><i /><i /><i /><b /><em /><small>DISCOVERABILITY</small></div>
      <div className="seoArt__panel"><small>YOUR NEXT DISCOVERY_</small><i>↗</i><b /><b /><b /><b /><em /></div>
    </div>;
  }
  if (index === 5) {
    return <div className="solutionArt solutionArt--social">
      <span className="socialArt__grid" /><span className="socialArt__orbit" />
      <div className="socialArt__hello">hello_</div><div className="socialArt__poster"><small>● SCHRIF / SOCIAL</small><b>MAKE<br />SOME<br />SIGNAL.</b><i>♡　↗　✦</i></div><span className="socialArt__star">✱</span><div className="socialArt__talk">let&apos;s talk.</div>
    </div>;
  }
  if (index === 6) {
    return <div className="solutionArt solutionArt--campaign"><span className="campaignArt__grid" /><div className="campaignArt__poster"><small>CAMPAIGN / CREATE</small><b>NEXT<br />IS<br />NOW.</b><i>IMAGINE. CREATE.</i></div><div className="campaignArt__clapper"><span /><b>▶</b><small>CONTENT / IN MOTION</small></div><em>✱</em><p>ONE IDEA. MANY FORMATS.</p></div>;
  }
  if (index === 7) {
    return <div className="solutionArt solutionArt--ads"><span className="adsArt__grid" /><div className="adsArt__rings"><i /><i /><i /><b /></div><div className="adsArt__note"><b>TEST → LEARN</b><small>REFINE → REPEAT</small></div><span className="adsArt__path" /><span className="adsArt__cursor" /><p>INTENT, NOT GUESSWORK.</p></div>;
  }
  return <div className={`solutionArt solutionArt--${index}`}><span className="artOrbit" /><span className="artPanel">{mark}</span><span className="artCursor" /><span className="artLime" /><span className="artLine" /></div>;
}

export default function SolutionsPage() {
  return <main id="top"><Navbar />
    <section className="solutionsHero"><div className="solutionsShell solutionsHero__grid"><div><p className="solutionsCode">schrif / solutions</p><h1>Your next move.<em>Built with intent.</em>Executed right.</h1><p className="solutionsLead">Strategy, design and execution. Connected to make your next move matter.</p><div className="solutionsActions"><Link href="/connect" className="btn btn--lime">Start a project <span>↗</span></Link><a href="#foundation" className="btn solutionsGhost">Explore solutions <span>↗</span></a></div><p className="solutionsTiny">One challenge. The right connections.</p></div><div className="solutionHeroArt"><p>● CREATIVE ENGINE / READY</p><div className="heroOrbit" /><div className="heroCube"><small>INPUT / YOUR NEXT MOVE</small><b>idea_</b><i>✦</i><strong>OUTPUT / BUILT RIGHT<br /><span>Make it real. ↗</span></strong></div><div className="heroKey">STRATEGY<br />+ DESIGN<br />+ EXECUTION</div></div></div></section>
    <section className="solutionsIntro"><div className="solutionsShell"><div><span>ONE CHALLENGE. THE RIGHT CONNECTIONS.</span><span>STRATEGY　✦　 DESIGN　✦　 EXECUTION</span></div></div></section>
    {services.map(([id, label, title, lead, cards], sectionIndex) => <section id={id} className="solutionsBlock" key={id}><div className="solutionsShell"><div className="solutionsRule"><span>/{label}</span></div><div className="solutionsHeading"><h2>{title}</h2><p>{lead}</p></div><div className={`solutionCardGrid solutionCardGrid--${cards.length}`}>{cards.map(([code, name, description, mark], index) => <article className={`solutionCard solutionCard--${sectionIndex}-${index}`} key={name}><header><span>{code}</span><b>↗</b></header><ServiceArt mark={mark} index={sectionIndex * 2 + index} /><footer><h3>{name}</h3><p>{description}</p><small>{name === "Brand Identity" ? "Logo / Visual language / Guidelines" : name === "UI/UX Design" ? "User flows / Wireframes / Prototypes" : name === "Web Development" ? "Websites / Landing pages / CMS" : name === "SEO & Content" ? "Search / Content / On-page SEO" : name === "Social Media" ? "Content / Social visuals / Copy" : name === "Promotional Content" ? "Campaigns / Key visuals / Video" : "Audience planning / Ad creative / Optimisation"}</small></footer></article>)}</div>{id === "activation" && <p className="solutionFootnote">// CONFIGURED TOGETHER. NOT FIXED BUNDLES.</p>}</div></section>)}
    <section className="solutionsWorkflow"><div className="solutionsShell"><div className="solutionsRule"><span>05 / the workflow</span></div><div className="solutionsHeading"><h2>From first idea to what’s next.</h2><p>One connected process. With you at every point.</p></div><div className="workflowRail">{workflow.map(([number, title, copy, icon]) => <article key={number}><span>{number}</span><i>{icon}</i><h3>{title}</h3><p>{copy}</p></article>)}</div><p className="solutionFootnote">◉ FEEDBACK CONNECTS EVERY STAGE.</p></div></section>
    <section className="solutionsCta"><div className="solutionsShell"><div><p className="solutionsCode">06 / HUMAN INPUT. INTENTIONAL OUTPUT.</p><h2>Not sure where to start?<em>Start with the problem.</em></h2><p>Bring your idea. We&apos;ll find the right starting point together.</p><Link href="/connect" className="btn solutionDarkButton">Book a consultation　↗</Link></div><div className="ctaSketch"><span>schrif / build</span><b>&lt;/&gt;</b><i>✦</i><small>Let&apos;s build together.</small></div></div></section>
    <Footer />
  </main>;
}
