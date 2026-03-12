import './App.css'

function App() {
    return (
        <>
            <form>
                <h1>Wybierz swój rejs</h1>
                <label>Imie:<br/> <input type={'text'} name={'name'}/></label><br/>
                <label>
                    Wybierz typ łodzi:<br/>
                    <select name={"boat"} id='boat'>
                        <option value={'kajak'}>Kajak(20zł/h)</option>
                        <option value={'waterbike'}>Rower wodny(35zł/h)</option>
                        <option value={'omega'}>Omega(150zł/h)</option>
                    </select>
                </label>
                <br/>
                <label>Godziny <br/> <input type={'range'} name={'hours'}/></label>
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



            </form>
        </>
    )
}

export default App
