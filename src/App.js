import FlashcardList from './components/FlashcardList';
import './App.css'

function App() {
  return (
    <FlashcardList flashcards={SAMPLE_CARDS} />
  );
}

const SAMPLE_CARDS = [
  {
    id: 1,
    question: 'Can You show me?',
    answer: 'Voce pode me mostrar?',
    options: ['']//opção para implementar dicas
  },
  {
    id: 2,
    question: 'Can you throw that away for me?',
    answer: 'Você pode jagar isso fora pra mim?',
    options: ['']
  },
  {
    id: 3,
    question: 'Do you believe that?',
    answer: 'Você acredita nisso?',
    options: ['']
  },
  {
    id: 4,
    question: 'Can you throw Do you have a pencil?',
    answer: 'Você tem um lápis?',
    options: [''] 
  },
  {
    id: 5,
    question: 'Am I pronouncing it correctly?',
    answer: 'E estou pronunciando corretamente?',
    options: ['']
  }



]

export default App;
