export enum TaskActionTypes {
   START_TASK = 'START_TASK',
   INTERRUPT_TASK = 'INTERRUPT_TASK',
}

export type TaskActionModel = {
   type: TaskActionTypes.START_TASK;
   payload: 'teste';
};
