import { Component, OnInit } from '@angular/core';
import { DatepickerOptions } from 'ng2-datepicker';
import * as enLocale from 'date-fns/locale/en';
import * as ruLocale from 'date-fns/locale/ru';

@Component({
  selector: 'app-datepicker-bar',
  templateUrl: './datepicker-bar.component.html',
  styleUrls: ['./datepicker-bar.component.css']
})

export class DatepickerBarComponent implements OnInit {


  date: Date = new Date();
  options: DatepickerOptions = {
	  minYear: 1970,
	  maxYear: 2030,
	  displayFormat: 'MMM D[,] YYYY',
	  barTitleFormat: 'MMMM YYYY',
	  firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
	  locale: ruLocale
	};


  messageData(): void {
  	console.dir(this.date)
  }

  constructor() { }

  ngOnInit() {
  }

}
