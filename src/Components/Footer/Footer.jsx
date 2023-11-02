import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__contact">
        <h3 className="heading__tertiary">Contact</h3>

        <form action="" className="form flex">
          <div className="form__group">
            <label htmlFor="name" className="form__label" required>
              Name
            </label>
            <input type="text" id="name" className="form__input" />
          </div>

          <div className="form__group">
            <label htmlFor="email" className="form__label" required>
              email
            </label>
            <input type="text" id="email" className="form__input" />
          </div>

          <div className="form__group">
            <label htmlFor="phone" className="form__label">
              phone <span>optional</span>
            </label>
            <input type="text" id="phone" className="form__input" />
          </div>

          <div className="form__group">
            <label htmlFor="Send message" className="form__label">
              Send message
            </label>
            <textarea
              type="text"
              id="message"
              className="form__input"
              rows=" 5"
            ></textarea>
          </div>

          <input type="submit" className="btn btn__footer" />
        </form>
      </div>

      <p>Milan Rokaya &copy;All rights reserved</p>
    </footer>
  );
}

export default Footer;
