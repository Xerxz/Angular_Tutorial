import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task'
import {faTimes} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter<Task>();
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  // Called from html (click)=(onDelete(task)) function
  // EventEmitter sends output and calls parents onDeleteTask function in HTML (onDeleteTask)="deleteTask(task)"
  // Parents HTML calls the typescript function deleteTask(task) which tells the service class to make a delete request;
  // HTML -> .ts -> parent HTML -> parent .ts -> task.service deleteTask()
  onDelete(task: Task){
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task){
    this.onToggleReminder.emit(task);
  }
}
