import React, {useEffect, useState} from "react";
import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://famous-quotes4.p.rapidapi.com/random',
    params: {category: 'all', count: '100'},
    headers: {
      'X-RapidAPI-Key': '197e579ef5mshc28836411801682p13825ajsnda2858b3c2e9',
      'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
    }
  };



   
  const Quote = () => {
    const [Quotiti, setQuotiti]= useState([])
    const [Num, setNum]= useState(0)
    useEffect(() => {

       

  axios.request(options).then(function (response) {


    setQuotiti(response.data)
console.log(response.data.text);
  }).catch(function (error) {
    console.error(error);
  });



    }, [])
    function next() {
      setNum(Num + 1);
    }
  
    return (
        <div className=" overflow-hidden sm:w-full">
          <header className="flex xl:w-[1446px] xl:h-[72px] sm:w-fit font-serif font-extrabold py-[12px] px-[16px] content-center ">
        <a href="s" className="text-2xl	 flex my-auto">
                Get wise or get fucked
                </a>
          </header>
          <div className="xl:w-[1446px] xl:h-[669px] xl:pt-[136px] xl:pl-[40px]  xl:pb-[128px] sm:pb-0 overflow-y-scroll">
                   <p className="text-7xl  font-serif">{Quotiti[Num] &&  Quotiti[Num].text}</p>
   
          <div>
                 <p className="text-base pt-[16px]">{Quotiti[Num] && Quotiti[Num].author}</p>
          </div>
          </div>
       <div className="grid xl:grid-cols-3 sm:grid-cols-1">
       <div className="grid   xl:h-[250px] h-[100px] bg-green-300 hover:bg-green-600 font-serif  justify-center	 content-center	">
       <button className="text-2xl" onClick={next}>Give it another chance you dotard</button>  
        </div>
       
        <div className="grid   xl:h-[250px] h-[100px] bg-green-300 hover:bg-green-600 font-serif  justify-center	 content-center	">
          <button className="text-2xl" onClick={next}>Give my all your knownledge you jolly boy</button>
        </div>   <div className="grid   xl:h-[250px] h-[100px] bg-green-300 hover:bg-green-600 font-serif  justify-center	 content-center	">
          <button className="text-2xl" onClick={next}>Wanna stand out in public ? <br></br>Say you made that up.</button>
        </div>
   

       </div>
        </div>
    );
}

export default Quote