export function isMobile(width) {
  return width < 580;
}

export function isTablet(width) {
  return width >= 580 && width < 920;
}

export function isDesktop(width) {
  return width >= 580;
}
