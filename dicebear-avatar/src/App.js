import { useState } from 'react';

const sprites = [
  'male',
  'female',
  'human',
  'identicon',
  'initials',
  'bottts',
  'avataaars',
  'jdenticon',
  'gridy',
  'micah',
];

function App() {
  const [imgURL, setImgURL] = useState('');
  const [inputVal, setInputVal] = useState('');
  const [selectedSprite, setSelectedSprite] = useState(sprites[0]);

  const handleInputChange = (e) => {
    setInputVal(() => {
      if (e.target.value.length > 0) {
        setImgURL(
          `https://avatars.dicebear.com/api/${selectedSprite}/${e.target.value}.svg`
        );
      }
      return e.target.value;
    });
  };

  const handleSpriteChange = (e) => {
    setSelectedSprite(() => {
      if (e.target.value.length > 0) {
        setImgURL(
          `https://avatars.dicebear.com/api/${e.target.value}/${inputVal}.svg`
        );
      }
      return e.target.value;
    });
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          {imgURL && (
            <div
              className='card border-info shadow-lg mt-5 mx-auto'
              style={{ width: '10rem' }}
            >
              <img src={imgURL} alt='dicebar' style={{ height: '10rem' }} />
            </div>
          )}
        </div>
        <div className='col-12'>
          <div
            className='card shadow py-3 px-2 d-flex justify-content-center align-items-center mx-auto mt-3'
            style={{ width: '20rem' }}
          >
            <p className='h6'>Select your sprite and type anything!</p>
            <input
              className='form-control'
              value={inputVal}
              onChange={handleInputChange}
              placeholder='Type Anything!'
            />
            <select onChange={handleSpriteChange} className='form-select'>
              {sprites.map((sprite, index) => (
                <option value={sprite} key={index}>
                  {sprite}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

