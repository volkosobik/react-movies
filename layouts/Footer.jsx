import React from "react";

function Footer() {
  return (
    <footer className="page-footer green darken-1">
      <div className="container">
        <div className="footer-copyright">
          <div className="container">
            © {new Date().getFullYear()} All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
