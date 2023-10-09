import { createSignal, splitProps, useContext } from 'solid-js';
import SkeletonThemeContext from './skeleton-theme.context';
import type { SkeletonThemeProps } from './skeleton.types';

const SkeletonTheme = (props: SkeletonThemeProps) => {
  const [_, others] = splitProps(props, ['children']);
  const [theme] = createSignal(others);

  console.log('SkeletonTheme', others);

  return (
    <SkeletonThemeContext.Provider value={theme()}>{props.children}</SkeletonThemeContext.Provider>
  );
};

export default SkeletonTheme;

const useSkeletonTheme = () => useContext(SkeletonThemeContext);

export { useSkeletonTheme, SkeletonTheme };
