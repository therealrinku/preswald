import React from 'react';

import { Card } from '@/components/ui/card';
import { Tab } from '@/components/ui/tabs';

const TabWidget = ({ label, tabs = [] }) => {
  return (
    <Card className="mb-4 p-4 rounded-2xl shadow-md">
      <Tab label={label} tabs={tabs} />
    </Card>
  );
};

export default TabWidget;
