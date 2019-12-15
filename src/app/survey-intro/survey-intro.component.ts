import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-survey-intro',
    templateUrl: './survey-intro.component.html',
    styleUrls: ['./survey-intro.component.scss']
})
export class SurveyIntroComponent implements OnInit {
    
    public privacyAccepted: boolean = false;
	public localizedContacts = {
		default: {
			name: "Simone Caiello",
			email: "simone.caiello@unimib.it"
		},
		"de-ch": {
			name: "Timo Ohnmacht",
			email: "timo.ohnmacht@hslu.ch"
		},
		"sl": {
			name: "Simoneja Caiello",
			email: "simone.caiello@unimib.it"
		}
	};
	
	public policyShown = false;

    @Output() privacyAcceptance = new EventEmitter<boolean>();

    constructor(public translate: TranslateService) { }

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

	public getContact(){
		let contact = this.localizedContacts.default;
		if (this.translate.currentLang in this.localizedContacts){
			contact = this.localizedContacts[this.translate.currentLang];
		}
		
		return contact;
	}

}
