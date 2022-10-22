// =============================================================================
// Copyright © 2022 Michael Pierce. All rights reserved.
// =============================================================================

import { HOST_URL, META_SITE_DESCRIPTION, META_SITE_TITLE, TWITTER_HANDLE } from './lib/constants';

const title = META_SITE_TITLE;
const description = META_SITE_DESCRIPTION;
const twitterHandle = TWITTER_HANDLE;
const hostURL = HOST_URL;

const SEO = {
  title,
  description,
  canonical: hostURL,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: hostURL,
    title,
    description,
    images: [
      {
        url: `${hostURL}/static/images/og-1280x720.png`,
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: twitterHandle,
    site: twitterHandle,
    cardType: 'summary_large_image',
  },
};

export default SEO;
