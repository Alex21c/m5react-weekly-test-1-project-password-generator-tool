import {useState} from 'react';





export default function PasswordGenerator(){
  let generatePassword = ()=>{
    console.log('hi')
  }
  
  
  // Setting initial App states
    let [passwordLength, setPasswordLength] = useState(8); //initial value is 8
    let [checkBoxesPasswordIncludes, setCheckBoxesPasswordIncludes] = useState({
      uppercase: true,
      lowercase: true,
      numbers: true,
      symbols: true
    });
    

  // Setting metadata
    let passwordMetadata ={
      upperCaseLetter : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      lowerCaseLetter : ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      symbols: ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', '\\', '|', ';', ':', "'", '"', ',', '<', '.', '>', '/', '?']

  };
  // fetching elements
  // let inputGeneratedPassword = document.querySelector('input#generatedPassword');
  // let passwordLength = Number(document.querySelector('input#inputNumPasswordLength').value);


  // Validating
    // are all the checkboxes false?  
    // console.log(checkBoxesPasswordIncludes);
      // console.log(checkBoxesPasswordIncludes.every(checkbox=>checkbox.checked===false));
    

      
  return (
    <div id='wrapperPasswordGeneratorApp' className="border-2 border-slate-200 p-[2rem] w-[50rem] mt-[1rem] m-auto rounded-md flex flex-col gap-[1rem] text-[1.2rem] text-slate-200">
      <h1 className="text-center font-semibold text-[3rem] text-slate-50">Password Generator App</h1>
      <div className="flex gap-[1rem] items-center">
        <input id='generatedPassword' className="text-slate-900 transition focus:outline focus:outline-2 focus:outline-yellow-500 p-[.5rem]  w-[90%]  rounded-md"  type="text" placeholder="Yours generated password will be shown here" />
        <i title="Copy Yours Password" className="cursor-pointer fa-sharp fa-solid fa-copy text-[3rem] text-yellow-300 hover:text-yellow-500 transition "></i>
        
      </div>
      <div className="wrapperSelectPasswordLength flex gap-[1rem] items-center">
        <label htmlFor="inputNumPasswordLength">Select Password Length (1 to Infinity)</label>
        <input className="text-slate-900 w-[10rem] transition focus:outline focus:outline-2 focus:outline-yellow-500 p-[.5rem]  rounded-md" type="number" id="inputNumPasswordLength"  defaultValue='8' min="1"/>
      </div>

      <fieldset className="select-none flex flex-col gap-[.8rem]" id='passwordIncludes'>
        <div>
          <legend className="font-semibold ">Yours Password Includes:</legend>
        </div>
        <div className="flex flex-col gap-[.5rem] pl-[1rem]">
          <div className="flex gap-[.5rem] items-center">
            <input name="UPPERCASE" className="h-[2rem] w-[2rem]  appearance-none checked:bg-yellow-300 bg-slate-50" type="checkbox"  id='UPPERCASE'  defaultChecked  />
            <label htmlFor="UPPERCASE">UPPERCASE</label>
          </div>
          <div className="flex gap-[.5rem] items-center">
            <input  name="lowercase" className="h-[2rem] w-[2rem] appearance-none checked:bg-yellow-300 bg-slate-50" type="checkbox"  id='lowercase' defaultChecked  />
            <label htmlFor="lowercase">lowercase</label>
          </div>
          <div className="flex gap-[.5rem] items-center">
            <input   name="Numbers" className="h-[2rem] w-[2rem] appearance-none checked:bg-yellow-300 bg-slate-50" type="checkbox"  id='numbers' defaultChecked  />
            <label htmlFor="numbers">Numbers</label>
          </div>
          <div className="flex gap-[.5rem] items-center">
            <input  name="Symbols" className="h-[2rem] w-[2rem] appearance-none checked:bg-yellow-300 bg-slate-50" type="checkbox"  id='symbols' defaultChecked  />
            <label htmlFor="symbols">Symbols</label>
          </div>
        </div>

      </fieldset>
              
        <button id='btnGeneratePassword' onClick={generatePassword} className="wrapperGeneratePassword mt-[1rem] flex gap-[1rem] items-center justify-center outline outline-2 outline-amber-50 bg-yellow-300 hover:bg-yellow-500 transition cursor-pointer p-[1rem] rounded-md hover:text-slate-50 text-slate-900">
          <i className="fa-sharp fa-solid fa-flask"></i>
          <span>Generate Password</span>          
        </button>
      
    </div>
  );
}