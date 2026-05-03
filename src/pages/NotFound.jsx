import SEO from '../utils/SEO';

const NotFound = () => {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for could not be found."
        keywords="404, not found"
      />

      <section className="not-found-container">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for doesn't exist.</p>
        <Link to="/" className="btn">Go Home</Link>
      </section>
    </>
  );
};

export default NotFound;