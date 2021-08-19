// const main = document.getElementById('container');
const textBox= document.getElementById('boxHtml');
const imgBox = document.getElementById('boxImg')
const btnHtml = document.getElementById('toHtml')
const btnImg = document.getElementById('toImg')


const coin = {
    state: 0,
  
    flip: function () {
    return this.state = getRandom(0,1);
  },
  
    toString: function () {
        if(this.state === 0){
            return "Heads"
            
        }else{
            return "Tails"
        }
    },
  
    toHTML: function () {
    const image = document.createElement("img");
     if(this.state === 0){
        image.src = "./images/moeda1.png"
        image.alt = "cara"
    }else{
        image.src = "./images/moeda.png"
        image.alt = "coroa"
    }
    return image;
    },
  };

  function getRandom(min,max){
    
    // min = Math.ceil(min);
    // max = Math.floor(max);
    // return 
    return(Math.floor(Math.random() * (max - min + 1)) + min);
    
  }
  function display20Flips() {
    textBox.innerText=''
    const results = [];
    for(let i=0;i<20;i++){
      coin.flip()
      results.push(coin.toString())
      let paragh = document.createElement('p');
      paragh.innerText = coin.toString()
      textBox.appendChild(paragh)
    }    
    return results
  }
  
  function display20Images() {
    imgBox.innerText=''
    const results = [];
    for(let i=0;i<20;i++){
        coin.flip()
        results.push(coin.toString())
        imgBox.appendChild(coin.toHTML())
    }
    return results
  }
  btnHtml.addEventListener('click',display20Flips);
  btnImg.addEventListener('click',display20Images);