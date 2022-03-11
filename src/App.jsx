import Header from './components/Header';
import Weather from './components/Weather';

function App() {
  // Skapa states för allt dynamiskt
  // Popluera med anropen här
  // Passa ner till komponenterna

  return (
    <div className='h-screen w-full flex justify-center items-center text-left'>
      <div className='w-full sm:max-w-[448px] sm:max-h-[448px] rounded-lg border-gray-light border-2 p-8'>
        <Header />
        <Weather />
      </div>
    </div>
  );
}

export default App;
