import {
  HOST_URL,
  META_SITE_DESCRIPTION,
  META_SITE_TITLE,
  TWITTER_HANDLE,
} from "./lib/constants";

const title = META_SITE_TITLE;
const description = META_SITE_DESCRIPTION;
const twitterHandle = TWITTER_HANDLE;
const hostURL = HOST_URL;

const SEO = {
  title,
  description,
  canonical: hostURL,
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: hostURL,
    title,
    description,
    images: [
      {
        url: `https://raw.githubusercontent.com/michaelDpierce/michael_pierce_dev/master/public/static/images/og.jpg`,
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: twitterHandle,
    site: twitterHandle,
    cardType: "summary_large_image",
  },
};

export default SEO;
