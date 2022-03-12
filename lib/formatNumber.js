// =============================================================================
// Copyright © 2022 Michael Pierce. All rights reserved.
// =============================================================================

export default function format(num) {
  if (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
}
