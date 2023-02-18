import {PixelRatio, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export function responsive(i: number) {
  let j = i;
  if (height != 896) {
    let h = parseFloat(parseFloat(`${i / 896}`).toFixed(4));
    j = PixelRatio.roundToNearestPixel(height * h);
  }
  return j;
}

export const HEIGHT = height;
export const WIDTH = width;
