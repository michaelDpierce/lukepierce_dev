// =============================================================================
// Copyright © 2020 Michael Pierce. All rights reserved.
// =============================================================================

import { TweenMax } from "gsap";

export class Dot {
  // Create a new dot:
  // * x, y: positon of each dot
  // * inHoverRaius:
  // * originalX, originalY: Storing the original value of x & y to restore when out of hover
  constructor(radius, x, y) {
    this.radius = radius;
    this.x = x;
    this.y = y;
    // this.hue = hue;
    this.inHoverRadius = false;
    this.originalX = x;
    this.originalY = y;
  }

  update = (
    ctx,
    dotSmall,
    lastX,
    lastY,
    hoverRadius,
    animationDuration,
    fillStyleActive,
    fillStyleInactive
  ) => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.closePath();

    // Style of the dot
    if (this.inHoverRadius) {
      ctx.fillStyle = fillStyleActive;
    } else {
      ctx.fillStyle = fillStyleInactive;
    }
    ctx.fill();

    // Check the mouses proximity
    this.checkProximity(dotSmall, lastX, lastY, hoverRadius, animationDuration);
  };

  // Proximity:
  // * Checks the distance between the dot's x & y and compares it to the hover radius and current mouse position
  // * Checks if lastX & lastY are true to get the coordinates
  // * Green sock powered animation on hover
  checkProximity = (dotSmall, lastX, lastY, hoverRadius, animationDuration) => {
    let dist = dotSmall;

    if (lastX & lastY) {
      let dX = this.originalX - lastX;
      let dY = this.originalY - lastY;
      dist = Math.sqrt(Math.pow(dX, 2) + Math.pow(dY, 2));
      if (dist <= hoverRadius) {
        this.inHoverRadius = true;
        TweenMax.to(this, animationDuration, {
          x: lastX,
        });
        TweenMax.to(this, animationDuration, {
          y: lastY,
        });
      } else {
        this.inHoverRadius = false;
        TweenMax.to(this, animationDuration, {
          x: this.originalX,
        });
        TweenMax.to(this, animationDuration, {
          y: this.originalY,
        });
      }
    } else {
      TweenMax.to(this, animationDuration, {
        x: this.originalX,
      });
      TweenMax.to(this, animationDuration, {
        y: this.originalY,
      });
      this.inHoverRadius = false;
    }
  };
}
