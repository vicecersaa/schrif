"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [customising, setCustomising] = useState(false);

  useEffect(() => {
    setVisible(localStorage.getItem("schrif-cookie-consent") === null);
  }, []);

  const save = (choice: "all" | "essential") => {
    localStorage.setItem("schrif-cookie-consent", choice);
    setVisible(false);
  };

  if (!visible) return null;

  return <aside className="cookieBanner" aria-label="Cookie preferences">
    <h2>We use cookies</h2>
    <p>Essential ones run the site. Optional analytics cookies from Google and Microsoft help us see what people make and improve the tools; they last up to 2 years.</p>
    <a href="#privacy">Read the privacy policy.</a>
    {customising && <label className="cookieBanner__choice"><input type="checkbox" defaultChecked /> Optional analytics cookies</label>}
    <div className="cookieBanner__actions">
      <button className="btn btn--lime" onClick={() => save("all")}>Accept all</button>
      <button className="cookieBanner__reject" onClick={() => save("essential")}>Reject optional</button>
      <button className="cookieBanner__customise" onClick={() => setCustomising((value) => !value)}>Customise</button>
    </div>
  </aside>;
}
