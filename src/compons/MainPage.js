import React from 'react';
import data from "./data";
import html2canvas from 'html2canvas';

function MainPage() {
    const [memeImg , setMemeImg ] = React.useState()
    
    const [meme , setmeme] = React.useState({
        topText: "",
        bottomText: ""
    })

function handelChange(event){
    const {name, value} = event.target
    setmeme(prevmeme => ({
        ...prevmeme,
        [name] : value
    }))
}
const handleDownload = () => {
    const imageElement = document.getElementById('imageWithText');

    html2canvas(imageElement).then((canvas) => {
      const memeImg = canvas.toDataURL('meme');

      // Create a link for the merged image
      const link = document.createElement('a');
      link.href = memeImg;
      link.download = 'meme'; // Filename for the downloaded image
      link.click();
    });
  };
  function getMemeImg(){
        const memesArray = data
        const randomNamber = Math.floor(Math.random() * memesArray.length) 
        setMemeImg(memesArray[randomNamber].url)
        
    }
    
    return (
    <div className="container">
        <div className="form">
            <div className="labels">
                <div className="label">
                    <label htmlFor="input1">Top text</label>
                    <input type="text" id="input1" placeholder="Type here" name='topText' value={meme.topText} onChange={handelChange} />
                </div>
                <div className="label">
                    <label htmlFor="input2">Bottom text</label>
                    <input type="text" id="input2" placeholder="Type here"  name='bottomText' value={meme.bottomText} onChange={handelChange}/>
                </div>
            </div>
            <button onClick={getMemeImg}>Get a new meme image 🖼</button>
            <button onClick={handleDownload}>download meme</button>
        </div>
        <div className='img-section' id='imageWithText'>
            <img src={memeImg} alt="" />
            <p className='top'>{meme.topText}</p>
            <p className='bottom'>{meme.bottomText}</p>
        </div>
    </div>
    );
  }
  
  export default MainPage;
  