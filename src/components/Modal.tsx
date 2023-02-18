import React from 'react';

interface ModalProps {
  children: React.ReactNode,
  onClose: () => void
}

const Modal = ({children, onClose}: ModalProps) => {
  return (
    <>
      <div
        className='fixed bg-black/50 top-0 left-0 right-0 bottom-0'
        onClick={onClose}
      />
      <div className='w-[80%] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2'>
        {children}
      </div>
    </>
  );
};

export default Modal;