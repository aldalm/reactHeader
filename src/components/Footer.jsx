import React from "react";

function Footer() {
  const CurrentDate = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright © {CurrentDate}</p>
    </footer>
  );
}

export default Footer;
