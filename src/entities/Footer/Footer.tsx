// "use client";

import "./Footer.css";

export const Footer = () => {
    const date = new Date();

    return (
        <footer className="footer">
      <p className="footer__text">&#169; {date.getFullYear()}</p>
        </footer>
    );
};
