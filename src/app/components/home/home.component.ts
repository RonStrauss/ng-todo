import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	standalone: true,
	imports: [InputComponent, TodoListComponent],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.ShadowDom,
})
export class HomeComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
