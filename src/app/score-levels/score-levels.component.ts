import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-score-levels',
	templateUrl: './score-levels.component.html',
	styleUrls: ['./score-levels.component.scss']
})
export class ScoreLevelsComponent implements OnInit {
	
	@Input() public score: number;

	constructor() { }

	ngOnInit() {
	}

}
