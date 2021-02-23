import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChamadoPage } from './chamado.page';

describe('ChamadoPage', () => {
  let component: ChamadoPage;
  let fixture: ComponentFixture<ChamadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChamadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
