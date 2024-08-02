import React, { useState } from 'react';

import { VscTrash } from 'react-icons/vsc';
import { formatToString } from 'components/helper';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { DeleteConfirmationModal } from 'components/modal/deleteModal/deleteModalWindow';
import { DeleteButton, EditButton, TaskRow } from './taskItemStyled';
import { EditTaskModal } from 'components/modal/editModal/editModal';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const TaskItem = ({ task }) => {
  const { id, text, date } = task;
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);

  const formattedDate = formatToString(date);

  const toggleDeleteModal = () => setShowModalDelete(!showModalDelete);
  const toggleEditModal = () => setShowModalEdit(!showModalEdit);

  function CSSGrid() {
    return (
      <TaskRow>
        <Box sx={{ width: 1 }}>
          <Box display="grid" gridTemplateColumns="repeat(11, 1fr)" gap={2}>
            <Box gridColumn="span 1">
              <Item>{id}</Item>
            </Box>

            <Box gridColumn="span 5">
              <Item>{text}</Item>
            </Box>
            <Box gridColumn="span 3">
              <Item>{formattedDate}</Item>
            </Box>
            <Box gridColumn="span 1">
              <Item>
                <EditButton onClick={toggleEditModal}>Edit</EditButton>
                {showModalEdit && (
                  <EditTaskModal
                    taskId={id}
                    initialText={text}
                    onClose={toggleEditModal}
                  />
                )}
              </Item>
            </Box>
            <Box gridColumn="span 1">
              <Item>
                <DeleteButton onClick={toggleDeleteModal}>
                  <VscTrash style={{ height: '14px' }} />
                </DeleteButton>
                {showModalDelete && (
                  <DeleteConfirmationModal
                    taskId={id}
                    onClose={toggleDeleteModal}
                  />
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
