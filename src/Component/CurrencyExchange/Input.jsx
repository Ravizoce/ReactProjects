import React, { useId } from "react";

function Input({
    label = "From",
    amount,
    amountChange,
    currencies = [],
    currencyChange,
    selectCurrency = "npr",
    amountDisable = false,
    currencyDisable = false,
}) {

    const AmountInputId = useId();
    return (
        <>
            <div className="container bg-gray-700 p-5 self-center flex flex-col justify-center items-center rounded-lg">
                <div className="heading flex w-full mb-3 justify-between">
                    <div htmlFor={AmountInputId}>{label}</div>
                    <div>Currency Type</div>
                </div>
                <div className="input flex w-full justify-between">
                    <div className="Amount w-full mr-20">
                        <input id={AmountInputId} className="p-2 w-full rounded-md" type="Number" disabled={amountDisable} value={amount} onChange={(e) => amountChange && amountChange(Number(e.target.value))} />
                    </div>
                    <div className="CurrencyType">
                        <select className="p-2 rounded-md cursor-pointer " name="curencyr" id="currency" disabled={currencyDisable} value={selectCurrency} onChange={(e) => currencyChange && currencyChange(e.target.value)}>
                            {currencies.map((currency) => (
                                <option value={currency} key={currency}>
                                    {currency}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Input;
