import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOMetaTags = props => {
  return (
    <Helmet>
      <title>{props.title || ''}</title>
      <meta name="description" content={props.description || ''} />
      <meta name="keywords" content={props.keywords || ''} />

      <meta name="og:title" content={props.title || ''} />
      <meta name="og:site_name" content={props.ogSiteName || ''} />
      <meta name="og:description" content={props.description || ''} />
      <meta name="og:image" content={props.image || ''} />
      <meta name="og:url" content={window.location.href || ''} />

      <meta name="twitter:title" content={props.title || ''} />
      <meta name="twitter:description" content={props.description || ''} />
      <meta name="twitter:image" content={props.image || ''} />
      <link rel="canonical" href={props.url || ''} />
    </Helmet>
  );
};

export default SEOMetaTags;
