import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FaturaPage } from './fatura.page';

describe('FaturaPage', () => {
  let component: FaturaPage;
  let fixture: ComponentFixture<FaturaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaturaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FaturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
