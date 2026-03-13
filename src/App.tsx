import './App.css'

function App() {
    return (
        <>
            <h1>Wybierz swój Rejs</h1>
        <main>

            <div id={'form'}>
                <h2>Formularz</h2>
            <form>
                <label>Imie:<br/> <input type={'text'} name={'name'}/></label><br/>
                <label>
                    Wybierz typ łodzi:<br/>
                    <select name={"boat"} id='boat'>
                        <option value={'kajak'} id={'kajak'}>Kajak(20zł/h)</option>
                        <option value={'waterbike'} id={'waterbike'}>Rower wodny(35zł/h)</option>
                        <option value={'omega'} id={'omega'}>Omega(150zł/h)</option>
                    </select>
                </label>
                <br/>
                <label><p>Godziny</p><input type={'range'} name={'hours'}/></label>
                <h2>Extras</h2>
                <label>Kapok dla dziecka (5zł)<input type={'checkbox'} name={'kapok'}/>
                    <br/>
                    Opieka instruktora(50zł/h)<input type={'checkbox'} name={'instructor'}/>
                </label>
                <h2>Payment</h2>
                <label>
                    Karta <input type={'radio'} name={'payment'} value={'card'}/><br/>
                    BLIK <input type={'radio'} name={'payment'} value={'blik'}/><br/>
                </label>

                <label><h5>Zapoznałem się z regulaminem <input type={'checkbox'} value={'regulamin'}/></h5></label>

                <button type={'submit'}>Wyślij</button>
            </form>
            </div>
            <div id={'answer'}>
            <h2>
                Twój Rejs
            </h2>
                <h5>Twoje imię:</h5>
                <p id={'yourname'}></p>
                <h5>Twoja łódź</h5>
                <p id={'yourboat'}></p>
                <h5>Ilość godzin</h5>
                <p id={'amounthours'}></p>
                <h5>Kapok dla dziecka</h5>
                <p id={'czykapok'}></p>
                <h5>Opieka instruktora</h5>
                <p id={'opieka instuktora'}></p>
                <h5>Metoda płatności</h5>
                <p id={'metoda'}></p>
                <h4>Cena końcowa</h4>
                <p id={'price'}></p>

            </div>
        </main>
            </>

    )
}

export default App
