import { TranslateLoader } from "@ngx-translate/core";
import { Observable, Observer } from 'rxjs';

import * as en from '../../../i18n/en';
import * as it from '../../../i18n/it';
import * as de from '../../../i18n/de';
import * as de_at from '../../../i18n/de-at';
import * as de_ch from '../../../i18n/de-ch';
import * as fr from '../../../i18n/fr';
import * as sl from '../../../i18n/sl';

export class JsonTranslationLoader implements TranslateLoader {

	public getTranslation(lang: string): Observable<any> {
		return Observable.create((observer: Observer<any>) => {
			if (lang === 'de') {
				observer.next(de.data);
			} else if (lang === 'de-at') {
				observer.next(de_at.data);
			} else if (lang === 'de-ch') {
				observer.next(de_ch.data);
			} else if (lang === 'fr') {
				observer.next(fr.data);
			} else if (lang === 'it') {
				observer.next(it.data);
			} else if (lang === 'sl') {
                observer.next(sl.data);
			} else {
				observer.next(en.data);
			}
			observer.complete();
		});
	}

}
