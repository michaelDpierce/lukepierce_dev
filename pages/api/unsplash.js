// =============================================================================
// Copyright © 2020 Michael Pierce. All rights reserved.
// =============================================================================

import Unsplash, { toJson } from "unsplash-js";

import { UNSPLASH_USER } from "@/lib/constants";

let unsplash;

const unsplashUser = UNSPLASH_USER;

export default async (_, res) => {
  if (!unsplash) {
    unsplash = new Unsplash({
      accessKey: process.env.UNSPLASH_ACCESS_KEY,
    });
  }

  const userStats = await unsplash.users.statistics(unsplashUser);
  const { downloads, views } = await toJson(userStats);

  return res.status(200).json({
    downloads: downloads.total,
    views: views.total,
  });
};
