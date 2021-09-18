import React, { memo } from 'react';
import Modal from '../../../components/Modal';
import { useForm } from 'react-hook-form';

const EditExpenseModal = ({ closeModal, editFn, data = {} }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (dataInput) => {
    const { description, amount } = dataInput;
    if (!description || !amount) {
      return;
    }
    editFn({ description, amount });
    closeModal();
  };

  return (
    <Modal
      show
      handleShow={closeModal}
      modalTitle='You are adding a new expense'
    >
      <form onSubmit={handleSubmit(onSubmit)} className='modalForm'>
        <div className='form-group'>
          <div className='row align-items-center'>
            <div className='col-sm-2'>
              Description <span style={{ color: 'red' }}>*</span>
            </div>
            <div className='col-sm-10'>
              <div className='input-wrapper'>
                <input
                  type='text'
                  placeholder='Please enter a description of the expense'
                  className='form-control'
                  name='description'
                  defaultValue={data.description || ''}
                  {...register('description', {
                    required: 'Please input the description of the expense',
                  })}
                />
              </div>
            </div>
          </div>
          {errors.description && (
            <p className='text-danger'>{errors.description.message}</p>
          )}
        </div>

        <div className='form-group'>
          <div className='row align-items-center'>
            <div className='col-sm-2'>
              Amount <span style={{ color: 'red' }}>*</span>
            </div>
            <div className='col-sm-10'>
              <div className='input-wrapper'>
                <input
                  type='number'
                  placeholder='Please enter the amount of expense'
                  className='form-control'
                  name='amount'
                  defaultValue={data.amount || ''}
                  {...register('amount', {
                    required: "Please input the expense's amount",
                  })}
                />
              </div>
            </div>
          </div>
          {errors.amount && (
            <p className='text-danger'>{errors.amount.message}</p>
          )}
        </div>

        <div className='modal-footer'>
          <button className='btn-link btn' onClick={() => closeModal()}>
            Close
          </button>
          <button className='bg-primary btn' type='submit'>
            Save!
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default memo(EditExpenseModal);
