import * as types from 'actions/WindowActions';
import { isMobile, isTablet, isDesktop } from 'services/window';

const initialWidth = window.innerWidth;

const initialState = {
  _timestamp: Date.now(),
  width: initialWidth,
  isMobile: isMobile(initialWidth),
  isTablet: isTablet(initialWidth),
  isDesktop: isDesktop(initialWidth),
};

function config(state = initialState, action) {

  if (action.type === types.WINDOW_SET_WIDTH) {
    return {
      ...state,
      _timestamp: Date.now(),
      width: action.width,
    };
  }

  if (action.type === types.WINDOW_SET_TYPE) {
    return {
      ...state,
      _timestamp: Date.now(),
      isMobile: action.isMobile,
      isTablet: action.isTablet,
      isDesktop: action.isDesktop,
    };
  }

  return state;
}

export default config;
