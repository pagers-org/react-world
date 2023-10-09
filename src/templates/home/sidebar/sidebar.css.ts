import { style } from '@vanilla-extract/css';

export const SidebarContainer = style([
  {
    position: 'sticky',
    top: '100px',
    padding: '10px',
    borderRadius: '20px',
    backgroundColor: '#e6efff',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  },
  'd-flex flex-column gap-2',
]);

export const SidebarHeadLine = style([
  {
    fontSize: '14px',
    color: '#37a1ff',
  },
  'fw-bold',
]);

export const SidebarTagList = style([
  {
    gap: '4px',
  },
  'd-flex flex-wrap',
]);

// 37a1ff 6db0ff 91bfff b0ceff cbdeff e6efff ffffff

export const SidebarTag = style([
  {
    padding: '4px',
    backgroundColor: '#b0ceff',
    color: '#ffffff',
    fontSize: '12px',
  },
  'text-decoration-none rounded',
]);
