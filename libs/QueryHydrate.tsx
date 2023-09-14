'use client';

import { Hydrate as RQHydrate, HydrateProps } from '@tanstack/react-query';

export default function QueryHydrate(props: HydrateProps) {
  return <RQHydrate {...props} />;
}
