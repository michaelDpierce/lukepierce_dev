// =============================================================================
// Copyright © 2022 Michael Pierce. All rights reserved.
// =============================================================================

import { UNSPLASH_USER } from "@/lib/constants";

export default async (_, res) => {
  const response = await fetch(`https://api.unsplash.com/users/${UNSPLASH_USER}/statistics?client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
  const { downloads, views } = await  response.json()

  return res.status(200).json({
    downloads: downloads.total,
    views: views.total,
  });
};
