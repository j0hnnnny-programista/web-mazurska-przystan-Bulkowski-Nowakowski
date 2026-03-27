import { useState, type FormEvent } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [boat, setBoat] = useState('kajak')
  const [hours, setHours] = useState(1)
  const [kapok, setKapok] = useState(false)
  const [instructor, setInstructor] = useState(false)
  const [payment, setPayment] = useState('')
  const [regulamin, setRegulamin] = useState(false)

  const calculatePrice = () => {
    const boatPrices: { [key: string]: number } = {
      kajak: 20,
      waterbike: 35,
      omega: 150,
    }
    let total = boatPrices[boat] * hours
    if (kapok) {
      total += 5
    }
    if (instructor) {
      total += 50 * hours
    }
    return total
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Dziękujemy za rezerwację!')
    window.location.reload()
  }

  return (
      <>
        <h1>Wybierz swój rejs</h1>
        <main>
          <div id={'form'}>
            <h2>Formularz</h2>
            <form onSubmit={handleSubmit}>
              <label>Imie:<br/> <input type={'text'} name={'name'} value={name} onChange={(e) => setName(e.target.value)}/></label><br/>
              <label>
                Wybierz typ łodzi:<br/>
                <select name={'boat'} id='boat' value={boat} onChange={(e) => setBoat(e.target.value)}>
                  <option value={'kajak'}>Kajak(20zł/h)</option>
                  <option value={'waterbike'}>Rower wodny(35zł/h)</option>
                  <option id={'omega1'} value={'omega'}>Omega(150zł/h)</option>
                </select>
                {boat === 'omega' && <p>⚠️ Wymagany patent żeglarski!</p>}
              </label>
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
              <label><h5>Zapoznałem się z regulaminem <input type={'checkbox'} name={'regulamin'} value={'regulamin'} checked={regulamin} onChange={(e) => setRegulamin(e.target.checked)}/></h5></label>
              <button type={'submit'} disabled={!name || !regulamin}>Rezerwuję</button>
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
            <h4>Cena końcowa</h4>
            <p id={'price'}>{calculatePrice()} zł</p>
          </div>
        </main>
      </>
  )
}

export default App