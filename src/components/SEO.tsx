import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

export default function SEO({ 
  title, 
  description, 
  image = 'https://danliu.one/og-image.png', // Default image
  url = 'https://danliu.one',
  type = 'website'
}: SEOProps) {
  const fullTitle = `${title} | Dan Liu`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      
      {/* Additional SEO */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
}