import { createContext } from 'solid-js';
import type { SkeletonStyleProps } from './skeleton.types';

const SkeletonThemeContext = createContext<SkeletonStyleProps>();

export default SkeletonThemeContext;
export { SkeletonThemeContext };
