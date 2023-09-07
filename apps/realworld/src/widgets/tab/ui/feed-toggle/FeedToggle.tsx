'use client';

import { Tabs } from '@packages/ui';
import React, { useState } from 'react';
import { getTabValues } from '../../api/get-tab-value';
import { TabValues } from '../..';

interface FeedToggleProps {}

const FeedToggle = ({}: FeedToggleProps) => {
  const tabValues = getTabValues();
  const [tabValue, setTabValue] = useState<(typeof tabValues)[number]>(tabValues[0]);
  return (
    <Tabs selectedValue={tabValue} onChange={test => setTabValue(test as (typeof TabValues)[number])}>
      {tabValues.map(value => (
        <Tabs.InlineTab key={value} label={value} value={value} />
      ))}
    </Tabs>
  );
};

export default FeedToggle;
