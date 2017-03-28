import { createElement } from 'cmmn';
import request from 'superagent';

import styles from './styles.scss';

const subscribeEmailURL = '/subscribe.php';

const MenuItem = ({ icon, href, children }) => (
  <a className={styles.sidebar.item} href={href}>
    {children}
    <span className={styles.sidebar.item.icon} style={"background-position-y: " + (-53.5*icon - 4) + "px"} />
  </a>
);

const NewsletterForm = () => (
  <div className={styles.sidebar.item.with('backface', 'no-hover')}>
    <form className={styles.newsletterForm}>
      <div className={styles.newsletterForm.status}></div>
      <input type="email" name="email" placeholder="Your Email" />
      <input type="submit" value="OK" />
      <button>X</button>
    </form>
  </div>
);

export default class Sidemenu {
  render({ top }) {
    this.top = top;
    return (
      <div className={styles.sidebar.with(this.top ? 'top' : '')}>
        <MenuItem href="*/book/" icon={0}>Book a Service</MenuItem>
        <MenuItem href="*/contact-us/" icon={1}>Contact Us</MenuItem>
        <MenuItem href="javascript:void(0);" icon={2}>Join the Mailing List</MenuItem>
        <NewsletterForm />
        <MenuItem href="*/parts/" icon={3}>Find a Part</MenuItem>
        <div className={styles.sidebar.item.with('no-hover')} href="#">
          <a className={styles.sidebar.item.socialLink.with('fb')} href="javascript:void(0);" target="_blank"><i className="fa fa-facebook" /></a>
          <a className={styles.sidebar.item.socialLink.with('twitter')} href="javascript:void(0);" target="_blank"><i className="fa fa-twitter" /></a>
          <span className={styles.sidebar.item.icon} style={"background-position-y: " + (-53.5*4 - 4) + "px"} />
        </div>
      </div>
    );
  }
  mount(node) {
    let mousein = false, formopen = false;
    node.addEventListener('mouseover', () => {
      mousein = true;
      node.className = styles.sidebar.with(this.top ? 'top' : '', 'visible');
    });
    node.addEventListener('mouseout', () => {
      mousein = false;
      if (formopen) return;
      node.className = styles.sidebar.with(this.top ? 'top' : '');
    });
    const newsletterBtn = node.querySelector('.' + styles.sidebar.item.toString().trim() + ':nth-child(3)');
    const newsletterForm = node.querySelector('.' + styles.sidebar.item.toString().trim() + ':nth-child(4)');
    const formStatus = node.querySelector('.' + styles.newsletterForm.status);
    newsletterBtn.addEventListener('click', () => {
      formopen = true;
      newsletterBtn.className = styles.sidebar.item.with('flipped');
      newsletterForm.className = styles.sidebar.item.with('flipped', 'backface', 'no-hover');
    });
    newsletterForm.querySelector('form').addEventListener('submit', (event) => {
      event.preventDefault();
      const address = newsletterForm.querySelector('form input[name="email"]').value;
      formStatus.className = styles.newsletterForm.status.with('visible');
      formStatus.innerHTML = 'Working...';
      request
        .post(subscribeEmailURL)
        .type('form')
        .send({ emailaddress: address })
        .end((err, res) => {
          if (err) {
            console.error(err);
            formStatus.innerHTML = 'An error occurred.';
          } else {
            formStatus.innerHTML = 'Thanks for subscribing!';
            newsletterForm.querySelector('form').reset();
          }
          setTimeout(closeForm, 1500);
        });
    });
    newsletterForm.querySelector('form button').addEventListener('click', (event) => {
      event.preventDefault();
      closeForm();
    });
    const closeForm = () => {
      formopen = false;
      formStatus.className = styles.newsletterForm.status
      newsletterBtn.className = styles.sidebar.item.with();
      newsletterForm.className = styles.sidebar.item.with('backface', 'no-hover');
      if (!mousein) node.className = styles.sidebar.with(this.top ? 'top' : '');
    };
  }
};
