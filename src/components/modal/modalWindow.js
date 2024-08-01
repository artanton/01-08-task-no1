import { useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/operators';
import { ModalButton, ModalContent, ModalOverlay } from './modalStyledWindow';

export const DeleteConfirmationModal = ({ taskId, onClose }) => {
    const dispatch = useDispatch();
  
    const handleDelete = () => {
      dispatch(deleteTask(taskId));
      onClose();
    };
  
    return (
      <ModalOverlay>
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