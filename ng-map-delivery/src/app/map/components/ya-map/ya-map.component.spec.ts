/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YaMapComponent } from './ya-map.component';

describe('YaMapComponent', () => {
  let component: YaMapComponent;
  let fixture: ComponentFixture<YaMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YaMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YaMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
