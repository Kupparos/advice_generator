const rollMax = 8;

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

export const roll = (el: HTMLElement): void => {
  const xTurn: number = 4 + getRandomInt(rollMax);
  const yTurn: number = 4 + getRandomInt(rollMax);

  const delay: number = Math.max(xTurn, yTurn) * 250;

  let angleX: number = 90 * xTurn;
  let angleY: number = 90 * yTurn;
  // balancing the results
  if (angleX % 180) {
    getRandomInt(3) > 1 && (angleX += 90);
  }

  if (el) {
    el.style.transform =
      "rotateX(" + angleX + "deg) rotateY(" + angleY + "deg)";
    el.style.transitionDuration = delay + "ms";
  }
};
