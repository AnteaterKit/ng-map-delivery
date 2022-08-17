import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';

/**
 * Token for the config of the YaMapsAPILoaderConfigLiteral. Please provide an object of type {@link
  * YaMapsAPILoaderConfigLiteral}.
  */
 export const LAZY_MAPS_API_CONFIG = new InjectionToken<YaMapsAPILoaderConfigLiteral>('angular-ya-maps MAPS_API_CONFIG');

/**
 * Configuration for the {@link LazyMapsAPILoader}.
 */
export interface YaMapsAPILoaderConfigLiteral {
  /**
   * API Key.
   */
  apiKey?: string;
}

@Injectable()
export class YaMapsAPILoader {
    private _scriptLoadingPromise!: Promise<void>;
    private config: YaMapsAPILoaderConfigLiteral;

    constructor(@Optional() @Inject(LAZY_MAPS_API_CONFIG) config: any = null) {
        this.config = config;
    }

    public load(): Promise<void> {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = false;
        script.defer = true;
        script.id = 'YaScript';
        const callbackName = `angular2YAMapsAPILoader`;
        script.src = `https://api-maps.yandex.ru/2.1/?apikey=${this.config.apiKey}&lang=ru_RU`;
        // tslint:disable-next-line:ban-types
        this._scriptLoadingPromise = new Promise<void>((resolve: Function, reject: Function) => {
            script.onload = () => { resolve(); };
            script.onerror = (error) => { reject(); };
        });
        document.body.appendChild(script);
        return this._scriptLoadingPromise;
    }

}