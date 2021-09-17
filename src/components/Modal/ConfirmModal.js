import Modal from './Modal';
const ConfirmModal = ({ title, closeModal, excute }) => {
  function handleConfirm() {
    excute();
  }
  return (
    <Modal show handleShow={closeModal} modalTitle={title}>
      <div className='modal-footer d-flex justify-content-center'>
        <button
          className=' bg-primary  btn'
          onClick={() => closeModal()}
          style={{ background: '#ffb33f !important', color: 'white' }}
        >
          No
        </button>
        <button
          className='btn-link  btn'
          style={{ color: 'red' }}
          onClick={() => handleConfirm()}
          type='submit'
        >
          Yes
        </button>
      </div>
    </Modal>
  );
};
export default ConfirmModal;
