import { TranslateLoader } from "@ngx-translate/core";
import { Observable } from 'rxjs';

import * as en from '../../../i18n/en';

export class JsonTranslationLoader implements TranslateLoader {
    
    public getTranslation(lang: string): Observable<any> {
        return Observable.create(observer => {
            if (lang === 'de') {
//              observer.next(de);
            } else if (lang === 'fr') {
//              observer.next(fr);
            } else if (lang === 'it') {
//              observer.next(it);
            } else if (lang === 'sl') {
//                observer.next(sl);
            } else {
                observer.next(en.data);
            }
            observer.complete();
        });
    }
    
}
