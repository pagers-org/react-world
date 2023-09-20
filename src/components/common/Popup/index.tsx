import useOutsideClick from '@/src/hooks/useOutsideClick';

import * as styles from './popup.css';

interface Props {
  title: string;
  closeText?: string;
  confirmText?: string;
  onClickClosePopup: () => void;
  onClickConfirmPopup: () => void;
}

export default function Popup({
  title,
  closeText = '취소',
  confirmText = '진행',
  onClickClosePopup,
  onClickConfirmPopup,
}: Props) {
  const modalRef = useOutsideClick(onClickClosePopup);

  return (
    <div className={styles.container}>
      <div ref={modalRef} className={styles.modal}>
        <div className={styles.text}>{title}</div>
        <div className={styles.buttonWrapper}>
          <button
            onClick={onClickClosePopup}
            className={styles.button}
            type="button"
          >
            {closeText}
          </button>
          <button
            onClick={onClickConfirmPopup}
            className={styles.button}
            type="button"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
