import { Component } from '@angular/core';
import tt  from '@tomtom-international/web-sdk-maps';
import { Geolocation, Position } from '@capacitor/geolocation';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  map: any;
  lat: number = -5.9381308
  lon: number = -35.2682346
  apikey: string = "1PDOTCf2WtVBoHBYXUMHHgY1qfxNjex4"
  center: any = new tt.LngLat(this.lon, this.lat)
  constructor( public Http: HttpClient) {
    this.obterlocalizacao
  }
  ngAfterViewInit(){
    this.map = tt.map({
      key: this.apikey, //TomTom, not Google Maps
      container: "map",
      center: new tt.LngLat(this.lon, this.lat),
      zoom: 14,
      });
      this.search("supermecado")
      
  }

  async obterlocalizacao(){
    const coordinates = await Geolocation.getCurrentPosition();
    this.lat = coordinates.coords.latitude;
    this.lon = coordinates.coords.longitude
    console.log(this.lon, this.lat)
  }
  async search(poi: string){
    this.obterlocalizacao();
    const res: any = 
    await this.Http.get(
      `https://api.tomtom.com/search/2/search/&{poi}.json?lat=${this.lat}&lon=${this.lon}&key=${this.apikey}`).toPromise();
      console.log(res.results);

      let marker = new tt.Marker().setLngLat(this.center).addTo(this.map);
      
  }
}
