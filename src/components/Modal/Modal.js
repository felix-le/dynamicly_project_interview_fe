import React, { useCallback, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import ModalStyles from './ModalStyle';

const Modal = ({ children, show, handleShow, className, modalTitle }) => {
  const classes = ModalStyles({});
  // portal modal-root element. always exist in index.html.
  // This el is used to append modal content in modal portal
  const portalEl = document.getElementById('modal-root');
  const modal = useRef(null);

  /**
   * Handle event when user keyup
   * @params e Event object when keyup
   * @returns void
   */
  const handleEventKeyup = useCallback(
    (e) => {
      const keys = [27];
      if (keys.includes(e.keyCode) && show) {
        e.preventDefault();
        handleShow(false);
        window.removeEventListener('keyup', handleEventKeyup, false);
      }
    },
    [handleShow, show]
  );

  /**
   * Handle event when user click out of portal element
   * If target of click is not in modal portal element, hide current modal.
   * @params e Event object when click
   * @returns void
   */
  const handleClickOutside = useCallback(
    (e) => {
      if (modal && modal.current && !modal.current.contains(e.target) && show) {
        e.preventDefault();
        handleShow(false);
        window.removeEventListener('click', handleClickOutside, false);
      }
    },
    [handleShow, show]
  );

  useEffect(() => {
    window.addEventListener('keyup', handleEventKeyup, false);
    document.addEventListener('click', handleClickOutside, false);

    return () => {
      window.removeEventListener('keyup', handleEventKeyup, false);
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, [handleEventKeyup, handleClickOutside]);

  return show
    ? ReactDOM.createPortal(
        <div className={classes.modalOverlay}>
          <div className={`${classes.modal} ${className}`} ref={modal}>
            <div className='modal_header_wrapper'>
              <h3 className='modal__title'>{modalTitle}</h3>
              <button
                className={classes.closeButton}
                onClick={() => handleShow(false)}
              >
                ×
              </button>
            </div>
            {children}
          </div>
        </div>,
        portalEl
      )
    : ReactDOM.createPortal('', portalEl);
};

export default React.memo(Modal);
