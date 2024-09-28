import { useState} from "react"
import quiz from "./quiz.json"
function QuizBox(){
    const [data,setData]=useState(quiz)
    const [counter,setCounter]=useState(0)
    const [selected,setSelected]=useState(null)
    const [marks,setMarks]=useState(0)
    const selectedOption=false

    function handleCounter(){
        setCounter(counter+1)
        setSelected(null)
    }
    function check(id){
        setSelected(id)
        if(data[counter].options[id].correct){
            setMarks(marks+1)
        }
        
    }
    // console.log(data[counter].options[selected].correct===true)
    return(
        <>
        <div className="w-[100vw] h-[100vh] flex justify-center items-center ">
            <div className="w-[60%] h-[70%]  bg-[#393F6E] rounded-lg">
                <h1 className="text-gray-400 font-bold p-4 mt-5 text-center">Country Quiz</h1>
                <div className="flex justify-center gap-2">
        {
            Array(10).fill(0).map((_,i)=>{
                return <button key={i+1} onClick={handleCounter} className=" bg-[#343964] text-white rounded-full w-10 h-10 flex items-center justify-center" >
                {i + 1}
              </button>
                          })
        }           
</div>
<div className="w-[100%]  flex justify-center mt-7 text-white  text-xl">
    <h1 className="w-[40%] text-center">{data[counter].question}</h1>
   
    
</div>
<div className="p-5 m-5 ml-3 mr-3 mt-5 mb-10">
    <div className="grid lg:grid-cols-2 gap-10 justify-center w-full">
        {
            data[counter].options.map((val,i)=>{
                return !selected ? ( <button key={i+1} onClick={()=>check(i)} className="p-3  text-white w-[80%] rounded-lg bg-[#343964] ">{val.text}</button>):( data[counter].options[selected].correct ?  <button key={selected} onClick={()=>check(i)} className="p-3  text-green-700 w-[80%] rounded-lg bg-[#343964] ">{val.text}<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="20" rx="10" fill="#E2E4F3"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5ZM14.1016 8.14018C14.4551 7.71591 14.3978 7.08534 13.9735 6.73178C13.5492 6.37821 12.9187 6.43554 12.5651 6.85982L9.80049 10.1774C9.45377 10.5934 9.25886 10.8238 9.10324 10.9653L9.0973 10.9707L9.09089 10.9659C8.92309 10.839 8.70812 10.6272 8.32516 10.2443L7.37377 9.29289C6.98325 8.90237 6.35008 8.90237 5.95956 9.29289C5.56904 9.68342 5.56904 10.3166 5.95956 10.7071L6.91095 11.6585L6.95178 11.6993C7.27827 12.026 7.59236 12.3402 7.8846 12.5611C8.21197 12.8087 8.64069 13.0415 9.1901 13.0165C9.73951 12.9916 10.1454 12.721 10.449 12.4448C10.72 12.1983 11.0044 11.8569 11.3 11.5021L11.3369 11.4577L14.1016 8.14018Z" fill="#3E9FFF"/>
                </svg>
                </button>:<button key={i} onClick={()=>check(i)} className="p-3  text-red-700 w-[80%] rounded-lg bg-[#343964] ">{val.text}</button>)  
            })
        }    
    </div>
</div>


        </div>
        </div>
        </>
    )
}
export default QuizBox