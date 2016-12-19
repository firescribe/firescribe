import { isMobile, isTablet, isDesktop } from 'services/window';

export const WINDOW_SET_TYPE = 'WINDOW_SET_TYPE';
export const WINDOW_SET_WIDTH = 'WINDOW_SET_WIDTH';

/**
 * Sync config updates to redux
 * @returns {function(*)}
 */
export function updateWidth(width) {
  return (dispatch) => {
    dispatch({
      type: WINDOW_SET_WIDTH,
      width,
    });

    dispatch({
      type: WINDOW_SET_TYPE,
      isMobile: isMobile(width),
      isTablet: isTablet(width),
      isDesktop: isDesktop(width),
    });
  };
}
