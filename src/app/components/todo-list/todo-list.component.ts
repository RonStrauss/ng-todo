import { ChangeDetectionStrategy, Component, HostBinding, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AsyncPipe, NgFor } from '@angular/common';
import { TodosService } from 'src/app/services/todos.service';

@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.scss'],
	standalone: true,
	imports: [TodoItemComponent, NgFor, AsyncPipe],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.ShadowDom,
})
export class TodoListComponent {
	_todo = inject(TodosService);
	constructor() {}

	@HostBinding('role') role = 'list';

	todos$ = this._todo.todos$;
}
