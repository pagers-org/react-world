import { type Component, For, JSXElement, Show, splitProps } from 'solid-js';
import { SkeletonContainer } from '@/components/skeletons/skeleton.css';
import { useSkeletonTheme } from './skeleton-theme';
import { styleOptionsToCSS } from './skeleton-utils';
import type { SkeletonProps } from './skeleton.types';

const defaultEnableAnimation = true;

const Skeleton: Component<SkeletonProps> = (props) => {
  const [local, others] = splitProps(props, [
    'count',
    'wrapper',
    'class',
    'containerClassName',
    'circle',
    'style',
  ]);

  const contextStyleOptions = useSkeletonTheme();
  const propsStyleOptions = others;

  Object.entries(others).forEach(([key, value]) => {
    if (value === undefined) {
      delete propsStyleOptions[key as keyof typeof propsStyleOptions];
    }
  });

  const styleOptions = {
    ...contextStyleOptions,
    ...propsStyleOptions,
    circle: local.circle,
  };

  const style = {
    ...local.style,
    ...styleOptionsToCSS(styleOptions),
  };

  const className = `${SkeletonContainer} ${local.class || ''}`.trim();

  const inline = styleOptions.inline ?? false;

  const elements: JSXElement[] = [];
  const count = local.count ?? 1;
  const countCeiling = Math.ceil(local.count ?? 1);

  for (let i = 0; i < countCeiling; i++) {
    const thisStyle = { ...style };

    if (countCeiling > count && i === countCeiling - 1) {
      const width = thisStyle.width ?? '100%';

      const fractionalPart = count % 1;

      const fractionalWidth =
        typeof width === 'number' ? width : `calc(${width} * ${fractionalPart})`;

      thisStyle.width = fractionalWidth;
    }

    const skeletonSpan = (
      <span class={className} style={thisStyle}>
        &zwnj;
      </span>
    );

    if (inline) {
      elements.push(skeletonSpan);
      continue;
    }

    elements.push(
      <>
        {skeletonSpan} <br />
      </>,
    );
  }

  const Wrapper = local.wrapper;

  return (
    <span
      class={local.containerClassName}
      aria-live="polite"
      aria-busy={styleOptions.enableAnimation ?? defaultEnableAnimation}
    >
      <Show when={Wrapper !== undefined} fallback={elements}>
        <For each={elements}>
          {(element) => (Wrapper !== undefined ? <Wrapper>{element}</Wrapper> : null)}
        </For>
      </Show>
    </span>
  );
};

export default Skeleton;

export { Skeleton };
