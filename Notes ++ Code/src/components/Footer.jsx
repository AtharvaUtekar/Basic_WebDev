import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-responsive">
      <p>Copyright ⓒ {year} Atharva Utekar</p>
    </footer>
  );
}

export default Footer;
