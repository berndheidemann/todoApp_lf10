import { TodoCategory } from './todo-category';
export class TodoEntry {

    done = false;
    id: number;

    constructor(public label?: string, public category?: TodoCategory, public dueDate?: Date, public priority?: number) {
    }
}
