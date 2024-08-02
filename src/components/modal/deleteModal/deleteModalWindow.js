import { useDispatch } from 'react-redux';
import { deleteTask } from '../../../redux/operators';
import { ModalButton, ModalContent, ModalOverlay } from './modalStyledWindow';
import { useEffect } from 'react';

export const DeleteConfirmationModal = ({ taskId, onClose }) => {
    const dispatch = useDispatch();
  
    const handleDelete = () => {
      dispatch(deleteTask(taskId));
      onClose();
    };

    const closeModalOnBackdrop = e => {
      if (e.target === e.currentTarget) {
          onClose();
      }
    };

    useEffect(() => {
      const closeModalOnEsc = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', closeModalOnEsc);
  
      return () => {
        window.removeEventListener('keydown', closeModalOnEsc);
      };
    }, [onClose]);
  
    return (
      <ModalOverlay onClick={closeModalOnBackdrop}>
        <ModalContent>
          <p>Are you sure you want to delete this task?</p>
          <div>
            <ModalButton onClick={handleDelete}>Yes</ModalButton>
            <ModalButton onClick={onClose}>No</ModalButton>
          </div>
        </ModalContent>
      </ModalOverlay>
    );
  };