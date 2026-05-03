import { Helmet } from 'react-helmet-async';

export const SEO = ({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage,
  schema,
  author,
  keywords
}) => {
  const siteUrl = 'https://TDI-INDIA.github.io/maxai-automation';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullOgImage = ogImage ? `${siteUrl}${ogImage}` : `${siteUrl}/og-image.png`;

  return (
    <Helmet>
      <title>{title} | MaxAI Automation</title>
      <meta name="title" content={`${title} | MaxAI Automation`} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author || 'TDI-INDIA'} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={fullCanonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={`${title} | MaxAI Automation`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="MaxAI Automation" />
      <meta property="og:locale" content="en_US" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonical} />
      <meta property="twitter:title" content={`${title} | MaxAI Automation`} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullOgImage} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
      <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
    </Helmet>
  );
};

export default SEO;