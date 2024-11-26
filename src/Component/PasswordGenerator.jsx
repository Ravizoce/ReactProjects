import React, { useCallback, useEffect, useRef, useState } from "react";

function PasswordGenerator() {
    let [length, setLength] = useState(8);
    let [number, setNumber] = useState(true);
    let [character, setCharacter] = useState(true);
    let [password, setPassword] = useState("");
    let passwordRef = useRef("");

    const generator = () => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if (number) str += "1234567890";

        if (character) str += "!@#$%^&*_-:;<>,.?/|";

        for (let index = 1; index < length; index++) {
            let char = Math.floor(Math.random() * str.length + 1)
            // console.log(char);
            pass += str.charAt(char);
        }
        // console.log(length);
        setPassword(pass);
    }

    const passwordGenerator = useCallback(generator,
        [length,setLength, number, setNumber, character, setCharacter]);

    useEffect(() => {
        passwordGenerator();
    }, [length, setCharacter, setNumber, passwordGenerator]);


    const passwordCopy = useCallback(()=>{
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password);
    },[password])
    return (
        <>
            <div className="flex flex-col justify-center bg-teal-600 max-w-md px-5 py-5 my-10 rounded-xl">
                <h1 className="text-center text-xl p-1 pb-3">Password Generator</h1>
                <div className="flex mb-2">
                    <input className="px-3 py-1 outline-none w-full rounded-l-lg " type="text" value={password} placeholder="password" ref={passwordRef} readOnly />
                    <button
                        className="rounded-none bg-blue-600 rounded-r-lg px-2 py-1 shrink-0 active:bg-blue-700 cursor-pointer"
                        onClick={passwordCopy}>
                        Copy
                    </button>
                </div>
                <div className="flex justify-center gap-4">
                    <div className="flex justify-center align-middle gap-1">
                        <input className="cursor-pointer" type="range" value={length} onChange={(e) => { setLength(e.target.value) }} min={6} max={56} /><span>({length})</span>
                    </div>
                    <div className="flex justify-center align-middle gap-1">
                        <input type="checkbox" defaultChecked={number} onChange={() => { setNumber((prev) => !prev) }} /> <span className="flex align-middle">Number</span>
                    </div>
                    <div className="flex justify-center align-middle gap-1">
                        <input type="checkbox" defaultChecked={character} onChange={() => setCharacter((prev) => !prev)} /> <span className="flex align-middle">Character</span>
                    </div>

                </div>
            </div>

        </>
    )
}

export default PasswordGenerator;
