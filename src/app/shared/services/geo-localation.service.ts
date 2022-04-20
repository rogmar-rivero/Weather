import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root'})

export class GeoLocationService {

  public getPosition():Promise<any> {
    return new Promise((resolve,reject)=>{
      const options = {
        enableHighAccuracy: true,
        timeout:5000,
        maximunAge: 0
      }
      navigator.geolocation.getCurrentPosition(resolve,reject,options)

    })
  }

}