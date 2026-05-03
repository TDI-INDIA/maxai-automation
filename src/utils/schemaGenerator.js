export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'MaxAI Automation',
  url: 'https://TDI-INDIA.github.io/maxai-automation',
  logo: 'https://TDI-INDIA.github.io/maxai-automation/logo.png',
  description: 'Advanced AI automation solutions',
  sameAs: [
    'https://github.com/TDI-INDIA/maxai-automation',
  ],
  author: {
    '@type': 'Organization',
    name: 'TDI-INDIA',
    url: 'https://github.com/TDI-INDIA'
  }
});

export const generatePageSchema = (title, description, datePublished, author) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: title,
  description: description,
  url: typeof window !== 'undefined' ? window.location.href : '',
  datePublished: datePublished,
  dateModified: new Date().toISOString().split('T')[0],
  author: {
    '@type': 'Person',
    name: author || 'TDI-INDIA Team'
  },
  publisher: {
    '@type': 'Organization',
    name: 'MaxAI Automation',
    logo: {
      '@type': 'ImageObject',
      url: 'https://TDI-INDIA.github.io/maxai-automation/logo.png'
    }
  }
});

export const generateArticleSchema = (title, description, image, datePublished, author) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: title,
  description: description,
  image: image,
  datePublished: datePublished,
  dateModified: new Date().toISOString().split('T')[0],
  author: {
    '@type': 'Person',
    name: author,
    url: 'https://github.com/TDI-INDIA'
  },
  publisher: {
    '@type': 'Organization',
    name: 'MaxAI Automation'
  }
});

export const generateProductSchema = (name, description, price, rating, reviewCount) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: name,
  description: description,
  brand: {
    '@type': 'Brand',
    name: 'MaxAI Automation'
  },
  offers: {
    '@type': 'Offer',
    price: price || '0',
    priceCurrency: 'USD'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: rating || '5',
    reviewCount: reviewCount || '1'
  }
});