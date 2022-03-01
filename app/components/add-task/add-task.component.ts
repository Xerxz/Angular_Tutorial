import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Task} from "../../Task";
import {UiService} from "../../services/ui.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  text!: string;
  day!: string;
  reminder: boolean = false;
  showAddTask!: boolean;
  subscription!: Subscription;

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter<Task>();

  constructor(private uiService: UiService) { }

  // Added subscription here aswell because we want this component to respond to the button click
  ngOnInit(): void {
    this.subscription = this.uiService.onToggle().subscribe(value => (this.showAddTask = value));
  }

  onSubmit() {
    if(!this.text){
      alert("pls add task");
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);

    this.text = "";
    this.day = "";
    this.reminder = false;

  }
}
