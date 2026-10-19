

export class HttpService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl; // Aquí se inyecta la URL dinámicamente
  }

  // Método genérico GET (como un HttpClient.GetAsync en .NET)
  async get(endpoint) {
    try {
      const response = await fetch(`${this.baseUrl}/${endpoint}`);
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error en HttpService:", error);
      throw error;
    }
  }
}
