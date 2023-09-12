import { Tag } from 'components/ui';

export const TagList = () => {
  const items = [
    { label: 'programming' },
    { label: 'javascript' },
    { label: 'emberjs' },
    { label: 'angularjs' },
    { label: 'react' },
    { label: 'mean' },
    { label: 'node' },
    { label: 'rails' },
  ];

  return (
    <div className="tag-list">
      {items.map((item) => (
        <Tag key={item.label}>{item.label}</Tag>
      ))}
    </div>
  );
};
