import Link from "next/link";

export default function Footer() {
  return <footer className="footer">
    <div className="footer__inner">
      <div className="footer__intro"><img src="/logo.png" alt="Schrif" width={150} height={32} /><p>Web development, IT, SEO and digital marketing for measurable growth.</p><span>root@schrif:~_</span></div>
      <div><h2>Services</h2><Link href="/#web">Web Development</Link><Link href="/#seo">SEO</Link><Link href="/#marketing">Digital Marketing</Link><Link href="/#it">IT Solutions</Link></div>
      <div><h2>More capabilities</h2><Link href="/#brand">Brand Identity</Link><Link href="/#ux">UI/UX Design</Link><Link href="/#ads">Performance Ads</Link></div>
      <div><h2>Explore Schrif</h2><Link href="/#image">Image</Link><Link href="/#video">Video</Link><Link href="/#photoshoot">Photoshoot</Link><Link href="/#editor">Photo Editor</Link></div>
      <div><h2>Next steps</h2><Link href="/#workflow">Our workflow</Link><Link href="/connect">Discovery / Build / Scale</Link><Link href="/connect">Start a project</Link></div>
    </div>
    <div className="footer__bottom"><span>© Schrif. All rights reserved.</span><span>Built with Intent.</span><a href="#top">Back to top ↑</a></div>
  </footer>;
}
