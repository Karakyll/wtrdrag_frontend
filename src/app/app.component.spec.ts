import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AboutComponent } from './components/about/about.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
      ],
      imports: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateCustomLoader
          }
        })
      ],    
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  /*
  it(`should have as title 'Way in the race'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Way in the race');
  }));
  */
  /*
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
  */
});

export class TranslateCustomLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    if (lang=="ru"){
      let ru = readJSON('assets/i18n/ru.json');
      return Observable.of(ru);
    }
    let en = readJSON('assets/i18n/en.json');
    return Observable.of(en);
  }
}

var readJSON = function (url) {
  
  url =  url;

  var xhr = new XMLHttpRequest();
  var json = null;

  xhr.open("GET", url, false);

  xhr.onload = function (e) {
    if (xhr.status === 200) {
      json = JSON.parse(xhr.responseText);
    }

    else {
      console.error('readJSON', url, xhr.statusText);
    }
  };

  xhr.onerror = function (e) {
    console.error('readJSON', url, xhr.statusText);
  };

  xhr.send(null);
  return json;
};

try {
  if (exports) {
    exports.readJSON = readJSON;
  }
}

catch (error) {
  //exports not available so not loaded by require
}
