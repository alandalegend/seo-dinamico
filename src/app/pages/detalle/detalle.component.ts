import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html', 
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit{

  // ulrimg="http://webdiputados/{titujloentrada}.png";
  urlimagen ='https://rickandmortyapi.com/api/character/avatar/'
  objetoPersonajes = [
    {
      id: "1",
      name: "Rick Sanchez",
    },
    {
        id: "1",
        name: "Rick Sanchez", 
    },
    {
        id: "2",
        name: "Morty Smith", 
    },
    {
        id: "3",
        name: "Summer Smith", 
    },
    {
        id: "4",
        name: "Beth Smith", 
    },
    {
        id: "5",
        name: "Jerry Smith", 
    },
    {
        id: "6",
        name: "Abadango Cluster Princess", 
    },
    {
        id: "7",
        name: "Abradolf Lincler", 
    },
    {
        id: "8",
        name: "Adjudicator Rick", 
    },
    {
        id: "9",
        name: "Agency Director", 
    },
    {
        id: "10",
        name: "Alan Rails", 
    },
    {
        id: "11",
        name: "Albert Einstein", 
    },
    {
        id: "12",
        name: "Alexander", 
    },
    {
        id: "13",
        name: "Alien Googah",
    },
    {
        id: "14",
        name: "Alien Morty", 
    },
    {
        id: "15",
        name: "Alien Rick",
    },
    {
        id: "16",
        name: "Amish Cyborg", 
    },
    {
        id: "17",
        name: "Annie", 
    },
    {
        id: "18",
        name: "Antenna Morty", 
    },
    {
        id: "19",
        name: "Antenna Rick", 
    },
    {
        id: "20",
        name: "Ants in my Eyes Johnson", 
    }
]

  constructor(
    private httpService: HttpClient,
    private url: ActivatedRoute,
    private meta: Meta,
    private title: Title,
    
    @Inject(DOCUMENT) private doc: any, 
    ){
      
      this.url.queryParams.subscribe(async (e: any) =>{ 
        this.id =  e.id;       
         
        
        this.meta.addTag({name: 'robots', content:'noindex'}) 
        const linkElement = this.doc.head.querySelector(`link[rel='canonical']`)
        || this.doc.head.appendChild(this.doc.createElement('link'));
        
        if (linkElement) {
          linkElement.setAttribute('rel', 'canonical');
          linkElement.setAttribute('href', this.doc.URL.split('?')[0]);
        } 
      });
      
    } 
    result: any =[]
    id: string = '';
    ngOnInit(): void {
      this.setSeo('nombre.replace'+this.id,'https://rickandmortyapi.com/api/character/avatar/'+this.id+'.jpeg')  
    this.getInfoPersonaje();
  }
  
  ngOnDestroy(): void {
    this.meta.removeTag( 'name="robots"' )
  }

  setSeo(title: any ='Sin titulo', image: any  ){
    this.title.setTitle( title +' | SEO dinamico') 
          this.meta.updateTag({ property: 'og:title', content: title +' | SeoDinamico' }); 
          this.meta.updateTag({ property: 'description', content: image }); 
          this.meta.updateTag({ property: 'og:image', content: image});
  }
  
  async getInfoPersonaje(){ 
  await this.httpService.get('https://rickandmortyapi.com/api/character/'+this.id).subscribe((result: any)=>{
    this.result = result;    
        })
    }
}
