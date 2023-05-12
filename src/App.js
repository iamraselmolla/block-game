import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';

function App() {
  const blockDivRef = useRef(null)
  let marginTop = 0
  let marginLeft = 0
  function moveBlock(direction) {
    if (direction === "top") {

      if (marginTop > 0) {
        marginTop -= 50
        blockDivRef.current.style.marginTop = marginTop + "px"
        blockDivRef.current.style.marginRight = "-" + marginLeft + "px"

      } 
    }
    if (direction === "bottom") {
      if (marginTop < 450) {
        marginTop += 50
        blockDivRef.current.style.marginTop = marginTop + "px"
        blockDivRef.current.style.marginLeft = marginLeft + "px"
      } else {
        return
      }
    }
    if (direction === "left") {
      if (marginLeft > 0) {
        marginLeft -= 50
        blockDivRef.current.style.marginTop = marginTop + "px"
        blockDivRef.current.style.marginLeft = marginLeft + "px"
      } 
    }
    if (direction === "right") {
      if (marginLeft < 450) {
        marginLeft += 50
        blockDivRef.current.style.marginTop = marginTop + "px"
        blockDivRef.current.style.marginLeft = marginLeft + "px"
      }
    }
  }
  return (
    <div className="App">
      <div className="main_container">
        <button onClick={() => moveBlock("top")} className="moveBtn">
          Up
        </button>
        <div className="main_Block_conatainer">
          <button onClick={() => moveBlock("left")} className="insideBtn">
            Left
          </button>
          <div className="block_container">
            <div ref={blockDivRef} className="block">
              hello
            </div>
          </div>
          <div onClick={() => moveBlock("right")} className="insideBtn">
            Right
          </div>

        </div>
        <button onClick={() => moveBlock("bottom")} className="moveBtn">
          Bottom
        </button>
      </div>
    </div>
  );
}

export default App;
