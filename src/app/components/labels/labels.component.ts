import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.css']
})
export class LabelsComponent implements OnInit {

  labels: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  addLabel(input) {
    input.value = input.value.trim();

    this.labels.forEach( label => input.value.toLowerCase() === label.toLowerCase() ? input.value = '' : input.value )
    if (input.value !== '') {
      this.labels.push(input.value);
      input.value = '';
    }
  }

  removeLabel(index: number) {
  	this.labels.splice(index, 1);
  }

}
