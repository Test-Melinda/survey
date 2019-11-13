import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-privacy-policy',
	templateUrl: './privacy-policy.component.html',
	styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

	@Output() privacyAcceptance = new EventEmitter<boolean>();

	constructor(public translate: TranslateService) {
	}

	ngOnInit() {
	}

	public accept(){
		this.privacyAcceptance.emit(true);
	}

}
