export const animations = {
  focusAnimation: 'focus-animation',
  focusAnimationWhite: 'focus-animation-white',
  focusAnimationBorder: 'focus-animation-border',
  activeAnimation: 'active-animation',
  activeAnimationLight: 'active-animation-light',
};

const checkAttrName = 'data-ui-set-animation-removed';

const getAnimationNames = (element: HTMLElement): string[] =>
  element.style.animationName
    .trim()
    .split(/\s*,\s*/)
    .filter((x) => x.length > 0);

const waitAnimationFrames = (count: number): Promise<void> =>
  new Promise((resolve) => {
    let c = count;

    const wait = (): void => {
      if (c === 0) {
        resolve();
      } else {
        c -= 1;
        window.requestAnimationFrame(wait);
      }
    };

    window.requestAnimationFrame(wait);
  });

export const addAnimation = (
  element: HTMLElement | null,
  animation: string,
): void => {
  if (element === null) return;

  const names = getAnimationNames(element);
  const index = names.indexOf(animation);

  if (index >= 0) return;

  names.push(animation);
  // eslint-disable-next-line no-param-reassign
  element.style.animationName = names.join(',');
};

export const removeAnimation = (
  element: HTMLElement | null,
  animation: string,
): void => {
  if (element === null) return;

  const names = getAnimationNames(element);
  const index = names.indexOf(animation);

  if (index < 0) return;

  names.splice(index, 1);
  // eslint-disable-next-line no-param-reassign
  element.style.animationName = names.join(',');
};

export const removeAllAnimations = (element: HTMLElement | null): void => {
  if (element === null) return;

  // eslint-disable-next-line no-param-reassign
  element.style.animationName = '';
  element.setAttribute(checkAttrName, '1');
};

export const startAnimation = async (
  element: HTMLElement | null,
  animation: string,
  avoidOverwrite = false,
): Promise<void> => {
  if (element === null) return;

  if (avoidOverwrite) {
    if (getAnimationNames(element).indexOf(animation) >= 0) return;
  }

  removeAnimation(element, animation);
  element.removeAttribute(checkAttrName);
  await waitAnimationFrames(2);

  if (!element.hasAttribute(checkAttrName)) {
    addAnimation(element, animation);
  }
};
