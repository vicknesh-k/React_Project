
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {year} Vicknesh K. All rights reserved.</p>

      <div className="footer-links">
        <a
          href="https://github.com/vicknesh-k"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/vicknesh-k"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </footer>
  );
};

export default Footer;
