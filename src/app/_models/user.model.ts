export class User {
    Name: string;
    Surname: string;
    TaskList: Array<TaskItem>
}

export class TaskItem {
    TaskDate: Date;
    TaskName: string;
    IsCompleted: boolean;
}