import SEO from '../utils/SEO';
import { generatePageSchema } from '../utils/schemaGenerator';

const Services = () => {
  const schema = generatePageSchema(
    'Services',
    'MaxAI Automation services - process automation, ML integration, custom solutions.',
    '2026-01-01',
    'TDI-INDIA Team'
  );

  return (
    <>
      <SEO
        title="Services"
        description="Explore our comprehensive automation services: Process Automation, ML Integration, Custom Solutions, and Enterprise Support."
        canonical="/#/services"
        keywords="automation services, process automation, machine learning integration"
        schema={schema}
      />

      <section className="services-container">
        <h1>Our Services</h1>
        
        <div className="service-grid">
          <div className="service-card">
            <h2>Process Automation</h2>
            <p>Streamline your business processes with intelligent automation solutions. Reduce manual work, improve efficiency, and enhance accuracy.</p>
          </div>

          <div className="service-card">
            <h2>ML Integration</h2>
            <p>Integrate machine learning capabilities into your existing systems. Leverage AI for predictive analytics and intelligent decision-making.</p>
          </div>

          <div className="service-card">
            <h2>Custom Solutions</h2>
            <p>Get tailored automation solutions designed specifically for your business needs and industry requirements.</p>
          </div>

          <div className="service-card">
            <h2>Enterprise Support</h2>
            <p>Round-the-clock support, maintenance, and optimization for your automation infrastructure with SLA guarantees.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;