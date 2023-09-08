import { match } from 'ts-pattern';

export const getItemIndex = (index: number, array: any[]) => {
  // prettier-ignore
  const itemIndex = match({ index, array })
        .returnType<'firstItem' | 'lastItem' | 'otherItem'>()
        .with({ index: 0 }, () => 'firstItem')
        .when(({ array, index }) => array.length - 1 === index, () => 'lastItem')
        .otherwise(() => 'otherItem');

  return itemIndex;
};
