import 'bootstrap/dist/js/bootstrap.bundle';
import { useEffect, useState } from 'react';

export function GlobalMessage({ type, title, message, onDismiss }) {
  const [show, setShow] = useState('hide');

  useEffect(() => {
    setShow((message && 'show') || 'hide');
  }, [message]);

  const styles = {
    error: {
      bg: 'bg-danger',
      text: 'text-white',
    },
  };

  function hideToast() {
    setShow('hide');
    onDismiss();
  }

  return (
    <div
      className={`toast-container position-fixed top-0 end-0 p-3 fade ${show}`}
    >
      <div
        className={`toast fade ${styles[type].bg} ${styles[type].text} ${show}`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header">
          <strong className="me-auto">{title}</strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
            onClick={hideToast}
          ></button>
        </div>
        <div className="toast-body">{message}</div>
      </div>
    </div>
  );
}
