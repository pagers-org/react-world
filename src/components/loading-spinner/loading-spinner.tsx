type LoadingSpinnerProps = {
  size?: string;
};

export const LoadingSpinner = (props: LoadingSpinnerProps) => (
  <div
    class="spinner_d9Sa_wrapper"
    style={{ width: props.size || '24px', height: props.size || '24px' }}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" />
      <rect class="spinner_d9Sa spinner_qQQY" x="11" y="6" rx="1" width="2" height="7" />
      <rect class="spinner_d9Sa spinner_pote" x="11" y="11" rx="1" width="2" height="9" />
    </svg>
  </div>
);
