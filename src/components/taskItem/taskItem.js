import React, { useState } from 'react';

import { VscTrash } from 'react-icons/vsc';
import { formatToString } from 'components/helper';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { DeleteConfirmationModal } from 'components/modal/modalWindow';
import { DeleteButton, TaskRow } from './taskItemStyled';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const TaskItem = ({ task }) => {
  const { id, text, date } = task;
  const [showModal, setShowModal] = useState(false);

  const formattedDate = formatToString(date);

  const toggleModal = () => setShowModal(!showModal);

  function CSSGrid() {
    return (
      <TaskRow>
        <Box sx={{ width: 1}}>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box gridColumn="span 1">
              <Item>{id}</Item>
            </Box>
            <Box gridColumn="span 8">
              <Item>{text}</Item>
            </Box>
            <Box gridColumn="span 2">
              <Item>{formattedDate}</Item>
            </Box>
            <Box gridColumn="span 1">
               <Item>
                <DeleteButton onClick={toggleModal}>
                  <VscTrash style={{ height: '18px' }} />
                </DeleteButton>
                {showModal && (
                  <DeleteConfirmationModal taskId={id} onClose={toggleModal} />
                )}
              </Item>
            </Box>
          </Box>
        </Box>
      </TaskRow>
    );
  }

  return <CSSGrid />;
};
