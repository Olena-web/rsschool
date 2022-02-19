
import { IMAGE_URL, RED_COLOR, GREY_COLOR } from './constants.js'
export const getImageUrl = (bgNum, postfix) => `${IMAGE_URL}/${postfix}/${bgNum}full.jpg`;
export const getLinearGradient = (value) => `linear-gradient(to right, ${RED_COLOR} 0%, ${RED_COLOR} ${value}%, ${GREY_COLOR} ${value}%, ${GREY_COLOR} 100%)`;