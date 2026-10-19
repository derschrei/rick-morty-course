
import { HttpService } from './HttpService';

export class CharactersService {


  constructor(baseUrl) {
    // Inicializamos el cliente HTTP con la URL que nos pasen
    this.http = new HttpService(baseUrl); 
  }

  // Métodos específicos del negocio
  async obtenerTodos() {
    var results = await this.http.get('character'); 
    return results.results; // Devolvemos solo la lista de personajes
  } 

}
    
