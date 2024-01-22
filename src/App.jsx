import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  // code here
  const image = imageData()
  return(
    <div>
      <h1 className='center'>Kalvium Gallery</h1>
      <div className='img-div'>{image.map((ele)=>{
        return <div>
          <img className='img' src={ele.img} alt="" />
        </div>
      })}</div>
    </div>
  )
}


export default App;