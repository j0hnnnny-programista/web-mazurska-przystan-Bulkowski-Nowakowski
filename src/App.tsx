import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState<string>('')
  const [boat, setBoat] = useState<string>('kajak')
  const [hours, setHours] = useState<number>(1)
  const [kapok, setKapok] = useState<boolean>(false)
  const [instructor, setInstructor] = useState<boolean>(false)
  const [payment, setPayment] = useState<string>('')
  const [regulamin, setRegulamin] = useState<boolean>(false)

  const calculatePrice = (): number => {
    const boatPrices: { [key: string]: number } = {
      kajak: 20,
      waterbike: 35,
      omega: 150,
    }
    let total: number = boatPrices[boat] * hours
    if (kapok) total += 5
    if (instructor) total += 50 * hours
    return total
  }
  return (
      <>
        <h1>Wybierz swój rejs</h1>
        <main>
          <div id={'form'}>
            <h2>Formularz</h2>
            <form>
              <label>Imie:<br/> <input type={'text'} name={'name'} value={name} onChange={(e) => setName(e.target.value)}/></label><br/>
              <label>
                Wybierz typ łodzi:<br/>
                <select name={'boat'} id='boat' value={boat} onChange={(e) => setBoat(e.target.value)}>
                  <option value={'kajak'}>Kajak(20zł/h)</option>
                  <option value={'waterbike'}>Rower wodny(35zł/h)</option>
                  <option value={'omega'}>Omega(150zł/h)</option>
                </select>
              </label>
              {boat === 'omega' && <p>⚠️ Wymagany patent żeglarski!</p>}
              <br/>
              <label>Godziny: {hours} <br/> <input type={'range'} name={'hours'} min={1} max={8} step={1} value={hours} onChange={(e) => setHours(Number(e.target.value))}/></label>
              <h2>Extras</h2>
              <label>Kapok dla dziecka (5zł)<input type={'checkbox'} name={'kapok'} checked={kapok} onChange={(e) => setKapok(e.target.checked)}/>
                <br/>
                Opieka instruktora(50zł/h)<input type={'checkbox'} name={'instructor'} checked={instructor} onChange={(e) => setInstructor(e.target.checked)}/>
              </label>
              <h2>Payment</h2>
              <label>
                Karta <input type={'radio'} name={'payment'} value={'card'} checked={payment === 'card'} onChange={(e) => setPayment(e.target.value)}/><br/>
                BLIK <input type={'radio'} name={'payment'} value={'blik'} checked={payment === 'blik'} onChange={(e) => setPayment(e.target.value)}/><br/>
              </label>
              <label><h5>Zapoznałem się z regulaminem <input type={'checkbox'} name={'regulamin'} checked={regulamin} onChange={(e) => setRegulamin(e.target.checked)}/></h5></label>
              <button type={'submit'}>Wyślij</button>
            </form>
          </div>
          <div id={'answer'}>
            <h2>Twój rejs</h2>
            <h5>Twoje imię:</h5>
            <p id={'yourname'}>{name || '-'}</p>
            <h5>Twoja łódź</h5>
            <p id={'yourboat'}>{boat}</p>
            <h5>Ilość godzin</h5>
            <p id={'amounthours'}>{hours}</p>
            <h5>Kapok dla dziecka</h5>
            <p id={'czykapok'}>{kapok ? 'Tak' : 'Nie'}</p>
            <h5>Opieka instruktora</h5>
            <p id={'opieka instuktora'}>{instructor ? 'Tak' : 'Nie'}</p>
            <h5>Metoda płatności</h5>
            <p id={'metoda'}>{payment || '-'}</p>
            <h4>Cena końcowa</h4>
            <p id={'price'}>{calculatePrice()} zł</p>
          </div>
        </main>
      </>
  )
}

export default App
