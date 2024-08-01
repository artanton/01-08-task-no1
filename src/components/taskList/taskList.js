import { useSelector } from 'react-redux';
import { TaskItem } from '../taskItem/taskItem';
import { TasksList } from './taskListStyled';

import {selectTask} from '../../redux/selectors';

export const TaskList = () => {
  const Tasks = useSelector(selectTask);

  return (
    <TasksList>
      {Tasks.map(task => {
        return (
          <li key={task.id}>
            <TaskItem task={task} />
          </li>
        );
      })}
    </TasksList>
  );
};
