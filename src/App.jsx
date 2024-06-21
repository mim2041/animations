import './App.css';

function App() {

  const name = 'Programming Hero';

  const nameArr = name.split('');

  return (
    <div className='main'>
      {/* <div className='box-1'></div>
      <div className="box-container-2">
        <div className='box-2'></div>
      </div> */}
      
      <button className='btn'>Hover me</button>
      <button className='btn2'>Rotate me</button>

      {/* <div className='box'></div> */}

      {/* <div className='container'>
        <div className='loading'>
          <div className='glass'></div>
          <div className='box3'></div>
        </div>
      </div> */}

      {/* <div className='cards-container'>
        <div className="card">
          <h1>Heading</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum architecto accusantium omnis. Expedita saepe dolorem voluptas esse similique repellendus eos aliquam ea. Quis suscipit similique nam, sequi dolor omnis consectetur sapiente nostrum dolores nesciunt eveniet harum error repudiandae exercitationem vitae, tempora dicta dolore magnam illo. Eaque atque ab veniam consequatur!</p>
        </div>
      </div> */}

      <div className='main1'>
        <div className='container1'>
          {
            nameArr.map((item, i) => (
              <span className='alphabet' key={i}
                style={{transitionDelay: `${i * 100}ms`}}
              >{item}</span>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default App;