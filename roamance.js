let text = "Ever since I left the city, you, you, you You and me we just don't get along";

let wordPairs = generateWordPairs(text);
console.log(wordPairs);
/* ->
{ ever: [ 'since' ],
  since: [ 'i' ],
  i: [ 'left' ],
  left: [ 'the' ],
  the: [ 'city' ],
  city: [ 'you' ],
  you: [ 'you', 'you', 'you', 'and' ],
  and: [ 'me' ],
  me: [ 'we' ],
  we: [ 'just' ],
  just: [ 'dont' ],
  dont: [ 'get' ],
  get: [ 'along' ] }
  */
  function writeLine(chain, length) {
    let line = "";
    let currentWord = getRandomWord(chain);
  
    for (let i = 0; i < length; i++) {
      line += currentWord + " ";
  
      const nextWords = chain[currentWord];
  
      if (!nextWords || nextWords.length === 0) {
        currentWord = getRandomWord(chain);
      } else {
        currentWord = nextWords[Math.floor(Math.random() * nextWords.length)];
      }
    }
  }