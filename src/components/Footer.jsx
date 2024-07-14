function Footer() {
  return (
    <div className="mt-10">
      <footer className="footer border-t-2 text-neutral-content p-10">
        <nav>
          <h6 className="footer-title">Products</h6>
          <a className="link link-hover">iOs App</a>
          <a className="link link-hover">Android App</a>
          <a className="link link-hover">Web App</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
