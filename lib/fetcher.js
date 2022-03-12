// =============================================================================
// Copyright © 2022 Michael Pierce. All rights reserved.
// =============================================================================

export default async function fetcher (...args) {
  const res = await fetch(...args);

  return res.json();
};
