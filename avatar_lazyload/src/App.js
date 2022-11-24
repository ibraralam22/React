import './App.css';
import LazyImage from './components/LazyImage';
import placeholderImage from './placeholder.png';
const dataLists = require('./data/dicebearApi.json');

function App() {
  return (
    <>
      <div className='main-div'>
        {dataLists.map((item) => (
          <div>
            <LazyImage
              placeholderSrc={placeholderImage}
              key={item.id}
              src={item.imgUrl}
              placeholderStyle={{ width: '100%' }}
              Style={{ width: '100%' }}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;