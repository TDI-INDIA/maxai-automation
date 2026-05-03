import SEO from '../utils/SEO';
import { generatePageSchema } from '../utils/schemaGenerator';

const Contact = () => {
  const schema = generatePageSchema(
    'Contact Us',
    'Get in touch with MaxAI Automation team. We are here to help with your automation needs.',
    '2026-01-01',
    'TDI-INDIA Team'
  );

  return (
    <>
      <SEO
        title="Contact"
        description="Contact MaxAI Automation for inquiries, support, and collaboration opportunities. Reach out to our team."
        canonical="/#/contact"
        keywords="contact maxai, support, inquiries"
        schema={schema}
      />

      <section className="contact-container">
        <h1>Contact Us</h1>
        
        <div className="contact-content">
          <p>Have questions about our automation solutions? Get in touch with our team.</p>
          
          <div className="contact-methods">
            <div className="method">
              <h3>Email</h3>
              <p><a href="mailto:info@maxai.automation">info@maxai.automation</a></p>
            </div>

            <div className="method">
              <h3>GitHub</h3>
              <p><a href="https://github.com/TDI-INDIA/maxai-automation" target="_blank" rel="noopener noreferrer">TDI-INDIA/maxai-automation</a></p>
            </div>

            <div className="method">
              <h3>Response Time</h3>
              <p>We aim to respond within 24 hours</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}> 
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" required></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;