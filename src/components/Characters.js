
export default function Characters(props) {
  const { characters, setCharacters } = props;
  const resetChars = ()=> setCharacters(null);
  return (
    <div>
      <h2>Personajes</h2>
      <span className="back-home" onClick={() => resetChars()}>Volver al inicio</span>

   
        {characters?.map((character, index) => (
                  <div className="character-container" key={index}>
     <div>
            <img src={character.image} alt={character.name} />
            </div>
            <div>
         
            <h3>{character.name}</h3>
            <h6>
      
                {character.status === "Alive"? (
                          <>
                <span className="alive">Vivo</span>
                </>
            ):(
                <>
                <span className="dead">Muerto</span>
                </>
                )}
                </h6>
                <p class = "text-grey"><span>Episodios:</span>
                        <span>{character.episode.length}</span>
                </p>
          <p class = "text-grey"><span>Especie:</span>
                        <span>{character.species}</span>
                </p>
            </div>

          </div>
          
        ))}
  
            <span className="back-home" onClick={() => resetChars()}>Volver al inicio</span>
    </div>
  );
}
