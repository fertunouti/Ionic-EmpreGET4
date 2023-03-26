import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TelaInicialPrestadorPage } from './tela-inicial-prestador.page';

describe('TelaInicialPrestadorPage', () => {
  let component: TelaInicialPrestadorPage;
  let fixture: ComponentFixture<TelaInicialPrestadorPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaInicialPrestadorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TelaInicialPrestadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
