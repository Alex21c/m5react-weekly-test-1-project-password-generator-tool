import {useState, useEffect} from 'react';





export default function PasswordGenerator(){
  // let setStatePasswordLength = ()=>{
  //   console.log('hi')
  // }
  

  
  // Setting initial App states
    let [stateGeneratedPassword, setStateGeneratedPassword] = useState('Yours generated password will be shown here!');
    // console.log(stateGeneratedPassword)
    let [statePasswordLength, updateStatePasswordLength] = useState(8); //initial value is 8
    let [stateCheckBoxesPasswordIncludes, setStateCheckBoxesPasswordIncludes] = useState({
      uppercase: true,
      lowercase: true,
      numbers: true,
      symbols: true
    });
    let [stateErrorMessage, updateStateErrorMessage] = useState({
      className : 'displayNone',
      errorMsg : '',
      isThereAnyError: false
    });
    let [stateSuccessMessage, updateStateSuccessMessage] = useState({
      className : 'displayNone',
      successMsg : '',      
    });
    
    
  // hook to handle asynchrous operation of react, so that capture the updated value
  useEffect(()=>{
      // validation perform
      if(statePasswordLength <= 0){
        updateStateErrorMessage(previousState => (
          {
            className : previousState.className.replace('displayNone', ''),
            errorMsg : 'Make sure yours password length range from 1 to Infinity!',
            isThereAnyError: true
          }
        ));
        updateStateSuccessMessage(previousState =>(
          {
            className : previousState.className.replace('displayNone', '') + ' displayNone',
            successMsg : ''
            }
          )
        );                   
      }else{
        // all good
          updateStateErrorMessage(
            {
              className : 'displayNone',
              errorMsg : '',
              isThereAnyError: false
            }
          );      
          updateStateSuccessMessage(previousState =>(
            {
              className : previousState.className.replace('displayNone', '') + ' displayNone',
              successMsg : ''
              }
            )
          );  
      }    
  }, [statePasswordLength]);

  // helper funcitons
  async function copyPwdToClipboard(text) {
    try {
      if(stateGeneratedPassword.length>0 && stateGeneratedPassword !=='Yours generated password will be shown here!'){
        await navigator.clipboard.writeText(stateGeneratedPassword); 
        // console.log(`i'm here`);
        updateStateSuccessMessage(previousState =>(
          {
            className : previousState.className.replace('displayNone', ''),
            successMsg : 'Yours newly generated password has been Successfully copied to yours clipboard!'
            }
          )
        );  

      }else{
        updateStateErrorMessage(previousState => (
          {
            className : previousState.className.replace('displayNone', ''),
            errorMsg : 'No password has been generted yet, generate the password then i will copy it to yours computer clipboard!',
            
          }
        ));
        updateStateSuccessMessage(previousState =>(
          {
            className : previousState.className.replace('displayNone', '') + ' displayNone',
            successMsg : ''
            }
          )
        );  

      }
    } catch (error) {
      console.error(error.message);
    }
  }


    let userUpdatedPasswordLength = (event)=>{
      updateStatePasswordLength(Number(event.target.value));

      
      // console.log('yours new value is : ', event.target.value);
    }


    let generatePassword =()=>{
      // checking if atleast one checkbox is checked?
        if(stateCheckBoxesPasswordIncludes.uppercase === false &&
          stateCheckBoxesPasswordIncludes.lowercase === false &&
          stateCheckBoxesPasswordIncludes.numbers === false &&
          stateCheckBoxesPasswordIncludes.symbols === false ){
            updateStateErrorMessage(previousState => (
              {
                className : previousState.className.replace('displayNone', ''),
                errorMsg : 'Please select any one or all of the checkboxs (UPPERCASE, lowercase, Numbers, Symbols) otherwise yours generated password is blank!',
                isThereAnyError: true
              }
            )
          );
            
          updateStateSuccessMessage(previousState =>(
            {
              className : previousState.className.replace('displayNone', '') + ' displayNone',
              successMsg : ''
              }
            )
          );  
            return;
          }
          
      // all validation is good
        if(stateErrorMessage.isThereAnyError){
          console.log('there is still error dude !');
          // let us check 
          // if all of the checkboxes are unchecked then just return
          
          if(stateCheckBoxesPasswordIncludes.uppercase === false &&
            stateCheckBoxesPasswordIncludes.lowercase === false &&
            stateCheckBoxesPasswordIncludes.numbers === false &&
            stateCheckBoxesPasswordIncludes.symbols === false ){
              return;
            }
        }
      // okay now processing
        updateStateErrorMessage(
          {
            className : 'displayNone',
            errorMsg : '',
            isThereAnyError: false
          }
        );
        updateStateSuccessMessage(previousState =>(
          {
            className : previousState.className.replace('displayNone', '') + ' displayNone',
            successMsg : ''
            }
          )
        );   
      // password generation begins
          // how much is the length of password as required by user?
          // console.log(`generating password of length ${statePasswordLength}`);

        // Passwod Logic is
        // Setting metadata
        let passwordMetadata ={
          upperCaseLetters : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
          lowerCaseLetters : ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
          numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          symbols: ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', '\\', '|', ';', ':', "'", '"', ',', '<', '.', '>', '/', '?']
        };

        let generatedPassword = [];
        let currentPasswordLength =0;
        while(currentPasswordLength < statePasswordLength){
          // first choose randomly among UPPERCASE, lowecase, Numbers and Symbols        
          let passwordShouldContains = [];
            if(stateCheckBoxesPasswordIncludes.uppercase){
              passwordShouldContains.push('upperCaseLetters');
            }
            if(stateCheckBoxesPasswordIncludes.lowercase){
              passwordShouldContains.push('lowerCaseLetters');
            }
            if(stateCheckBoxesPasswordIncludes.numbers){
              passwordShouldContains.push('numbers');
            }
            
            if(stateCheckBoxesPasswordIncludes.symbols){
              passwordShouldContains.push('symbols');
            }
  
          // choosing randomly among pasword choices 
            let randomPwdIncludeCategory = passwordShouldContains[(Math.floor(Math.random() * passwordShouldContains.length))];
          // now choosing random letter or symbol
            let selectedLettersOrSymbols = passwordMetadata[randomPwdIncludeCategory];
            let pwdLetter = selectedLettersOrSymbols[Math.floor(Math.random()*selectedLettersOrSymbols.length)];
            generatedPassword.push(pwdLetter);
            ++currentPasswordLength;
        }
        // console.log(generatedPassword);
        setStateGeneratedPassword(generatedPassword.join(''));



      
    };

    let checkBoxClicked = (event)=>{
      if(event.target.name.toLowerCase() === 'uppercase'){
        setStateCheckBoxesPasswordIncludes(previousState => (
            {
              ...previousState,
              uppercase: !previousState.uppercase
            }
          )
        )        
      }else if(event.target.name.toLowerCase() === 'lowercase'){
        setStateCheckBoxesPasswordIncludes(previousState => (
            {
              ...previousState,
              lowercase: !previousState.lowercase
            }
          )
        )        
      }else if(event.target.name.toLowerCase() === 'numbers'){
        setStateCheckBoxesPasswordIncludes(previousState => (
            {
              ...previousState,
              numbers: !previousState.numbers
            }
          )
        )        
      }else if(event.target.name.toLowerCase() === 'symbols'){
        setStateCheckBoxesPasswordIncludes(previousState => (
            {
              ...previousState,
              symbols: !previousState.symbols
            }
          )
        )        
      }
      // console.log(stateCheckBoxesPasswordIncludes);
    }


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
        <input id='generatedPassword' className="text-slate-900 transition focus:outline focus:outline-2 focus:outline-yellow-500 p-[.5rem]  w-[90%]  rounded-md"  type="text" value={stateGeneratedPassword} readOnly/>
        <i title="Copy Yours Password" className="cursor-pointer fa-sharp fa-solid fa-copy text-[3rem] text-yellow-300 hover:text-yellow-500 transition " onClick={copyPwdToClipboard}></i>
        
      </div>
      <div className="wrapperSelectPasswordLength flex gap-[1rem] items-center">
        <label htmlFor="inputNumPasswordLength">Select Password Length (1 to Infinity)</label>
        <input className="text-slate-900 w-[10rem] transition focus:outline focus:outline-2 focus:outline-yellow-500 p-[.5rem]  rounded-md" type="number" id="inputNumPasswordLength"  defaultValue='8' min="1" onChange={userUpdatedPasswordLength}  />
      </div>

      <fieldset className="select-none flex flex-col gap-[.8rem]" id='passwordIncludes'>
        <div>
          <legend className="font-semibold ">Yours Password Includes:</legend>
        </div>
        <div className="flex flex-col gap-[.5rem] pl-[1rem]">
          <div className="flex gap-[.5rem] items-center">
            <input name="UPPERCASE" className="h-[2rem] w-[2rem]  appearance-none checked:bg-yellow-300 bg-slate-50" type="checkbox"  id='UPPERCASE'  defaultChecked onChange={checkBoxClicked}   />
            <label htmlFor="UPPERCASE">UPPERCASE</label>
          </div>
          <div className="flex gap-[.5rem] items-center">
            <input  name="lowercase" className="h-[2rem] w-[2rem] appearance-none checked:bg-yellow-300 bg-slate-50" type="checkbox"  id='lowercase' defaultChecked onChange={checkBoxClicked}  />
            <label htmlFor="lowercase">lowercase</label>
          </div>
          <div className="flex gap-[.5rem] items-center">
            <input   name="Numbers" className="h-[2rem] w-[2rem] appearance-none checked:bg-yellow-300 bg-slate-50" type="checkbox"  id='numbers' defaultChecked  onChange={checkBoxClicked} />
            <label htmlFor="numbers">Numbers</label>
          </div>
          <div className="flex gap-[.5rem] items-center">
            <input  name="Symbols" className="h-[2rem] w-[2rem] appearance-none checked:bg-yellow-300 bg-slate-50" type="checkbox"  id='symbols' defaultChecked  onChange={checkBoxClicked} />
            <label htmlFor="symbols">Symbols</label>
          </div>
        </div>

      </fieldset>
        <div className={`text-green-300 ${stateSuccessMessage.className}`} >
          <span className='font-semibold text-[1.5rem]'>Success : </span>
          <span>{stateSuccessMessage.successMsg}</span>
        </div>        
        <div className={`text-red-300 ${stateErrorMessage.className}`} >
          <span className='font-semibold text-[1.5rem]'>ERROR: </span>
          <span>{stateErrorMessage.errorMsg}</span>
        </div>     
        <button id='btnGeneratePassword'  onClick={generatePassword} className="wrapperGeneratePassword mt-[1rem] flex gap-[1rem] items-center justify-center outline outline-2 outline-amber-50 bg-yellow-300 hover:bg-yellow-500 transition cursor-pointer p-[1rem] rounded-md hover:text-slate-50 text-slate-900">
          <i className="fa-sharp fa-solid fa-flask"></i>
          <span>Generate Password</span>          
        </button>
      
    </div>
  );
}