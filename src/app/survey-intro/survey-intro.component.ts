import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-survey-intro',
    templateUrl: './survey-intro.component.html',
    styleUrls: ['./survey-intro.component.scss']
})
export class SurveyIntroComponent implements OnInit {
    
    public privacyAccepted: boolean = false;

    @Output() privacyAcceptance = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit() {
    }
    
    public checkPrivacy(event: any){
        this.privacyAcceptance.emit(this.privacyAccepted);
    }

}
