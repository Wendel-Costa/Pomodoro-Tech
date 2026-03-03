import type { TaskStateModel } from '../../models/TaskStateModel';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

type TipsProps = {
   state: TaskStateModel;
};

export function Tips({ state }: TipsProps) {
   const tipsForWhenActiveTask = {
      workTime: <span>Foque por {state.config.workTime}min</span>,
      shortBreakTime: (
         <span>Descanse por {state.config.shortBreakTime}min</span>
      ),
      longBreakTime: <span>Período de descanso longo</span>,
   };

   const tipsForNoActiveTask = {
      workTime: <span>Próximo ciclo é de {state.config.workTime}min</span>,
      shortBreakTime: (
         <span>
            Próximo ciclo é descanso de {state.config.shortBreakTime}min
         </span>
      ),
      longBreakTime: <span>Próximo ciclo é de descanço longo</span>,
   };

   const nextCycle = getNextCycle(state.currentCycle);
   const nextCycleType = getNextCycleType(nextCycle);
   return (
      <div className='formRow'>
         {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
         {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
      </div>
   );
}
