/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TransportEditComponent } from './transport-edit.component';

describe('TransportEditComponent', () => {
  let component: TransportEditComponent;
  let fixture: ComponentFixture<TransportEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
