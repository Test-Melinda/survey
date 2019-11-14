import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-survey-intro',
    templateUrl: './survey-intro.component.html',
    styleUrls: ['./survey-intro.component.scss']
})
export class SurveyIntroComponent implements OnInit {
    
    public privacyAccepted: boolean = false;
	public contactEmail = "simone.caiello@unimib.it";
	
	public policyShown = false;

    @Output() privacyAcceptance = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit() {
    }
    
    public checkPrivacy(){
        this.privacyAcceptance.emit(this.privacyAccepted);
    }

	public showPolicy(){
		this.policyShown = true;
	}
	
	public onPrivacyAcceptance(accepted: boolean){
        console.log('Privacy accepted', accepted);
        if (accepted){
            this.privacyAcceptance.emit(accepted);
        }
    }

}
