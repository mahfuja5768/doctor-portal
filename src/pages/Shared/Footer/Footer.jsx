import img from '../../../assets/images/footer.png'

const Footer = () => {
  return (
    <div className="mt-20 p-5 "
    style={{
        background:`url(${img})`
       }}
    >
     <div>
     <footer className="footer p-10  text-black ">
        <div>
          <span className="footer-title text-2xl">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title text-2xl">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title text-2xl">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
        <div className="text-center font-semibold">
          <p><small>Copyright 2022 All Rights Reserved</small></p>
        </div>
     </div>
    </div>
  );
};

export default Footer;
