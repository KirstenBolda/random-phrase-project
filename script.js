'use strict';

console.log('test 💪');

const randomWords = {
  subject: [
    'lion',
    'monarch',
    'goldfish',
    'galaxy',
    'moon',
    'candle',
    'umbrella',
    'truth',
    'destiny',
    'smile',
    'night',
    'flame',
  ],
  verb: [
    'ponders',
    'flutters',
    'tiptoes',
    'grins',
    'reigns',
    'drifts',
    'gleams',
    'wakes',
    'sings',
    'wanders',
  ],
  adjective: [
    'modest',
    'stark',
    'pretentious',
    'sincere',
    'spacious',
    'murky',
    'turbulent',
    'hesitant',
    'gaudy',
    'furtive',
    'feeble',
    'steadfast',
  ],
  randomSubject: function () {
    return this.subject[Math.floor(Math.random() * this.subject.length)];
  },
  randomPhrase: function () {
    return `The ${
      this.adjective[Math.floor(Math.random() * this.adjective.length)]
    } ${this.subject[Math.floor(Math.random() * this.subject.length)]} ${
      this.verb[Math.floor(Math.random() * this.verb.length)]
    }.`;
  },
};

const ready = 'Generate Phrase';
const phraseComplete = 'Your Phrase Is:';
const newPhrase = 'Another Phrase';

document.querySelector('.generate').addEventListener('click', function () {
  if ((document.querySelector('.generate').textContent = ready)) {
    let madeUpPhrase = randomWords.randomPhrase();
    document.querySelector('.generate').textContent = phraseComplete;
    document.querySelector('.output').textContent = madeUpPhrase;
    document.querySelector('.refresh').style.visibility = 'visible';
  }
});

document.querySelector('.refresh').addEventListener('click', function () {
  if ((document.querySelector('.refresh').textContent = newPhrase)) {
    document.querySelector('.refresh').style.visibility = 'hidden';
    document.querySelector('.generate').textContent = ready;
    document.querySelector('.output').textContent = '';
  }
});
