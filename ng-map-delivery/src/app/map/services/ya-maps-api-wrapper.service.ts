import { Injectable, NgZone } from '@angular/core';
import { YaMapsAPILoader } from './services/ya-maps-loader';

declare var ymaps: any;

@Injectable()
export class YaMapsAPIWrapperService {

  private _map: Promise<any>;
  private _mapResolver: any;

  constructor(private _loader: YaMapsAPILoader, private _zone: NgZone) {
    this._map = new Promise<any>((resolve) => {
      this._mapResolver = resolve;
    });
  }

  public createMap(el: HTMLElement, mapOptions: any): Promise<void> {
    const res = this._loader.load().then(() => {
        const create = () => setTimeout(() => {
            if (ymaps.Map) {
                const map = new ymaps.Map(el, mapOptions);
                this._mapResolver(map);
            } else {
                create();
            }
        }, 100);
        create();
    }).catch((e) => console.log(e));
    return res;
  }

}
