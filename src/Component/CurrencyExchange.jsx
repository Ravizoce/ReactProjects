import React, { useCallback, useEffect, useState } from "react";
import Input from "./CurrencyExchange/Input";
import useCurrencyInfo from "./Hook/useCurrencyInfo";

function CurrencyExchange() {
    const [amount, setAmount] = useState(2);
    const [currency, setcurrency] = useState();
    const [from, setFrom] = useState("npr");
    const [to, setTo] = useState("usd");
    const [result, setResult] = useState(3);

    const currencyInfo = useCurrencyInfo(from);

    const currenciesKeys = Object.keys(currencyInfo);


    const swap = () => {
        let temp1 = from; 
        setFrom(to);
        setTo(temp1);
    }

    const convert = useEffect(() => {
        setResult(amount * currencyInfo[to]);
      }, [amount,setAmount, currencyInfo,from, to ]);

    return (
        <>
            <form action="" onSubmit={(e) => { e.preventDefault(); convert() }}>
                <div className="w-screen h-screen flex flex-col justify-center items-center "
                    style={{ backgroundImage: 'url(https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className="bg-blue-300/30 px-10 py-5 w-fit rounded-lg flex flex-col align-middl items-center">
                        <div className="flex flex-col gap-4">
                            <Input label="From" amount={amount} amountChange={(amount) => setAmount(amount)} currencies={currenciesKeys} selectCurrency={from} currencyChange={(currency) => setFrom(currency)} />
                            <Input label="To" amount={result} amountChange={(result) => setResult(result)} currencies={currenciesKeys} selectCurrency={to} currencyChange={(currency) => setTo(currency)} amountDisable />
                        </div>
                        <button className="bg-blue-600 active:bg-blue-700 rounded-lg px-4 py-1 z-50 -translate-y-36 active:outline outline-1 cursor-pointer" type="button" onClick={swap}>Swap</button>
                        <button className="bg-blue-600 active:bg-blue-700 rounded-lg px-4 py-1 z-50 active:outline outline-1 cursor-pointer" type="submit" >Convert {from} to {to}</button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default CurrencyExchange;
