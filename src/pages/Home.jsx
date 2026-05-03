import SEO from '../utils/SEO';
import { generateOrganizationSchema } from '../utils/schemaGenerator';

const Home = () => {
  const schema = generateOrganizationSchema();

  return (
    <>
      <SEO
        title="Home"
        description="MaxAI Automation - Advanced AI automation solutions for enterprise automation. Expert-backed, experience-driven, authoritative automation platform."
        canonical="/#/"
        keywords="AI automation, machine learning, automation solutions, enterprise automation"
        author="TDI-INDIA"
        schema={schema}
      />

      <section className="hero">
        <h1>MaxAI Automation</h1>
        <p className="subtitle">
          Expert-driven AI Automation Solutions Backed by Years of Experience
        </p>
        
        <div className="trust-signals">
          <div className="signal">
            <h3>Expertise</h3>
            <p>Built by AI and automation specialists with 10+ years of experience</p>
          </div>
          <div className="signal">
            <h3>Experience</h3>
            <p>Deployed across 50+ enterprise organizations worldwide</p>
          </div>
          <div className="signal">
            <h3>Authoritativeness</h3>
            <p>Open-source, GitHub-verified, community-driven development</p>
          </div>
          <div className="signal">
            <h3>Trustworthiness</h3>
            <p>Transparent codebase, regular security audits, GDPR compliant</p>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose MaxAI?</h2>
        <ul>
          <li>Advanced ML algorithms</li>
          <li>Enterprise-grade reliability</li>
          <li>24/7 expert support</li>
          <li>Seamless integration</li>
        </ul>
      </section>
    </>
  );
};

export default Home;