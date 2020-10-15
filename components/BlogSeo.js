// =============================================================================
// Copyright © 2020 Michael Pierce. All rights reserved.
// =============================================================================

import { ArticleJsonLd, NextSeo } from "next-seo";
import { FULL_NAME, HOST_URL } from "@/lib/constants";

const BlogSeo = ({ title, summary, publishedAt, url, image }) => {
  const date = new Date(publishedAt).toISOString();

  const featuredImage = {
    url: `${HOST_URL}${image}`,
    title: title,
    alt: title,
  };

  return (
    <>
      <NextSeo
        title={`${title} – ${FULL_NAME}`}
        description={summary}
        canonical={url}
        openGraph={{
          type: "article",
          article: {
            publishedTime: date,
          },
          url,
          title,
          description: summary,
          images: [featuredImage],
        }}
      />
      <ArticleJsonLd
        authorName={FULL_NAME}
        dateModified={date}
        datePublished={date}
        description={summary}
        images={[featuredImage]}
        publisherLogo="/static/favicons/android-chrome-192x192.png"
        publisherName={FULL_NAME}
        title={title}
        url={url}
      />
    </>
  );
};

export default BlogSeo;
