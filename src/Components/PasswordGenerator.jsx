export default function PasswordGenerator(){
  return (
    <div>
      <h1>Password Generator App</h1>
      <div>
        <input type="text" placeholder="Yours generated password will be shown here" />
        <i className="fa-solid fa-copy"></i>
      </div>
      <div>
        <label htmlFor="inputNumPasswordLength">Select Password Length 1 to Infinity</label>
        <input type="number" name="inputNumPasswordLength"  value='8' />
      </div>

      <fieldset>
        <legend>Yours Password Includes:</legend>
        <div>
          <input type="checkbox" name="" id='UPPERCASE' checked  />
          <label htmlFor="UPPERCASE">UPPERCASE</label>
        </div>
        <div>
          <input type="checkbox" name="" id='lowercase' checked />
          <label htmlFor="lowercase">lowercase</label>
        </div>
        <div>
          <input type="checkbox" name="" id='numbers' checked />
          <label htmlFor="numbers">Numbers</label>
        </div>
        <div>
          <input type="checkbox" name="" id='symbols' checked />
          <label htmlFor="symbols">Symbols</label>
        </div>

      </fieldset>
      <div>
        <i className="fa-sharp fa-solid fa-flask"></i>
        <button>Generate Password</button>
      </div>
    </div>
  );
}