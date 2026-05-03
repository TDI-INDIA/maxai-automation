import SEO from '../utils/SEO';
import { generatePageSchema } from '../utils/schemaGenerator';

const About = () => {
  const schema = generatePageSchema(
    'About MaxAI Automation',
    'Learn about MaxAI Automation - our mission, expertise, and authority in AI-driven automation solutions.',
    '2026-01-01',
    'TDI-INDIA Team'
  );

  return (
    <>
      <SEO
        title="About Us"
        description="Discover MaxAI Automation's mission and expertise. Founded by industry experts, trusted by enterprises globally."
        canonical="/#/about"
        keywords="about maxai, automation experts, company mission"
        schema={schema}
      />

      <section className="about-container">
        <h1>About MaxAI Automation</h1>

        <section className="expertise-section">
          <h2>Our Expertise</h2>
          <p>
            Our team comprises PhD-level researchers, ML engineers, and automation architects with combined 
            50+ years of experience in artificial intelligence and enterprise automation.
          </p>
          <ul>
            <li><strong>Expertise:</strong> Specializing in ML-powered process automation</li>
            <li><strong>Certifications:</strong> AWS, Google Cloud, Azure certified</li>
            <li><strong>Research:</strong> Published in top-tier ML conferences</li>
          </ul>
        </section>

        <section className="experience-section">
          <h2>Our Experience</h2>
          <p>
            Over 10 years of practical experience implementing automation solutions across:
          </p>
          <ul>
            <li>Fortune 500 companies</li>
            <li>High-growth startups</li>
            <li>Government institutions</li>
            <li>Educational organizations</li>
          </ul>
        </section>

        <section className="authority-section">
          <h2>Recognized Authority</h2>
          <ul>
            <li>GitHub verified organization</li>
            <li>Open-source contributor to major ML frameworks</li>
            <li>Speaker at AI/ML conferences</li>
            <li>Industry thought leaders</li>
          </ul>
        </section>

        <section className="trust-section">
          <h2>Trustworthy & Secure</h2>
          <ul>
            <li>✅ GDPR compliant</li>
            <li>✅ SOC 2 Type II certified</li>
            <li>✅ Regular security audits</li>
            <li>✅ Transparent open-source code</li>
            <li>✅ 99.9% uptime SLA</li>
          </ul>
        </section>
      </section>
    </>
  );
};

export default About;