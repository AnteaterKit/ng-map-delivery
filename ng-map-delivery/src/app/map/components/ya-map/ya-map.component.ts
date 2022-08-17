import {
  Component,
  ElementRef,
  EventEmitter,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  Input,
  Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { YaMapsAPIWrapperService } from '../../services/ya-maps-api-wrapper.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ya-map',
  providers: [
    YaMapsAPIWrapperService
  ],
  template: `
    <div class="map-container-inner" id="map" >
      <ng-content></ng-content>
    </div>
  `
})
// tslint:disable-next-line:component-class-suffix
export class YaMap implements OnInit, OnChanges {

  @Input() public longitude = 0;
  @Input() public latitude = 0;
  @Input() public zoom = 8;
  @Input() public mapType: any = 'yandex#map';

  public mapInit = false;

  private _observableSubscriptions: Subscription[] = [];

  constructor(private _elem: ElementRef, private _mapsWrapper: YaMapsAPIWrapperService) { }

  public ngOnInit() {
    const container = this._elem.nativeElement.querySelector('.map-container-inner');
    this._initMapInstance(container);
    this.mapInit = true;
  }

  public ngOnChanges(changes: SimpleChanges) {
  }

  private _initMapInstance(el: HTMLElement) {
    this._mapsWrapper.createMap(el, {
      center: [this.latitude, this.longitude], zoom: this.zoom, type: this.mapType
    });

  }

}
