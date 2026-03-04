//import styles from 'styles.module.css';
import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import type { TaskModel } from '../../models/TaskModel';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';
import { Tips } from '../Tips';

export function MainForm() {
   const { state, dispatch } = useTaskContext();
   const taskNameInput = useRef<HTMLInputElement>(null);

   const nextCycle = getNextCycle(state.currentCycle);
   const nextCycleType = getNextCycleType(nextCycle);

   function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();

      if (taskNameInput.current === null) return;

      const taskName = taskNameInput.current.value.trim();

      if (!taskName) {
         alert('Escreva a tarefa');
         return;
      }

      const newTask: TaskModel = {
         id: Date.now().toString(),
         name: taskName,
         startDate: Date.now(),
         completeDate: null,
         interruptDate: null,
         duration: state.config[nextCycleType],
         type: nextCycleType,
      };

      dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });

      const worker = new Worker(
         new URL('../../workers/timerWorker.js', import.meta.url),
      );

      worker.postMessage('oi');
   }

   function handleInterruptTask() {
      dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
   }

   return (
      <form onSubmit={handleSubmit} className='form' action=''>
         <div className='formRow'>
            <DefaultInput
               id='meuInput'
               type='text'
               labelText='chama'
               placeholder='Digite algo'
               ref={taskNameInput}
               disabled={!!state.activeTask}
            />
         </div>

         <Tips state={state} />

         {state.currentCycle > 0 && (
            <div className='formRow'>
               <Cycles />
            </div>
         )}

         <div className='formRow'>
            {!state.activeTask && (
               <DefaultButton
                  aria-label='Iniciar nova tarefa'
                  title='Iniciar nova tarefa'
                  type='submit'
               >
                  <PlayCircleIcon />
               </DefaultButton>
            )}

            {!!state.activeTask && (
               <DefaultButton
                  aria-label='Parar tarefa'
                  title='Parar tarefa'
                  type='button'
                  color='red'
                  onClick={handleInterruptTask}
               >
                  <StopCircleIcon />
               </DefaultButton>
            )}
         </div>
      </form>
   );
}
