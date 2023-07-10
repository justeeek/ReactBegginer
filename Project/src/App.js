import React from 'react';
import './index.scss';

const Modal = ({open, setOpen}) =>(
  <div className={`overlay animated ${open ? 'show' : ''}`}>
        <div className="modal">
          <svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
        </div>
      </div>
)


function App() {
  const [open, setOpen] = React.useState(false);

  // неанимированный вариант рендера окна (вариант 1) (рендер модального окна единым компонентом)
 /* return (
    <div className="App">
      <button onClick={() => setOpen(true)} className="open-modal-btn">✨ Открыть окно</button>
      {open && <Modal open = {open} setOpen={setOpen} />}
    </div>
  ) */

  // неамированный рендер окна (вариант 2) (когда модальное окно рендерится сразу)
  /*return (
    <div className="App">
      <button onClick={() => setOpen(true)} className="open-modal-btn">✨ Открыть окно</button>
      { open && (
         <div className="overlay">
        <div className="modal">
          <svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
        </div>
      </div> 
      )}
    </div>
  ); */


  // анимированное окно (вариант 1) (рендер единым компонентом)
        return (
          <div className="App">
            <button onClick={() => setOpen(true)} className="open-modal-btn">✨ Открыть окно</button>
            <Modal open = {open} setOpen={setOpen} />
          </div>
        )


  // анимированное окно (вариант 2) (рендер окна сразу)
 /* return (
    <div className="App">
      <button onClick={() => setOpen(true)} className="open-modal-btn">✨ Открыть окно</button>
      <div className={`overlay animated ${open ? 'show' : ''}`}>
        <div className="modal">
          <svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
        </div>
      </div> 
    </div>
  ); */
}

export default App;
