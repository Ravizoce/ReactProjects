import React, { useCallback, useState } from "react";

function PasswordGenerator() {
    let [length, setLength] = useState(8);
    let [number, setNumber] = useState(false);
    let [character, setCharacter] = useState(false);
    let [password, setPassword] = useState("");

    const generator = () => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if (number) str += "1234567890";

        if (character) str += "!@#$%^&*_-:;<>,.?/|";

        for (let index = 1; index < array.length; index++) {
            let char = Math.floor(Math.random() * str.length + 1)
            // console.log(char);
            pass = str.charAt(char);
        }
        setPassword(pass);

    }

    const passwordGenerator = useCallback(generator,
        [length, , setLength, number, setNumber, character, setCharacter]);

    return (
        <>
            {/* <h1 className="text-center">Password Generator</h1> */}

            <div className="flex flex-col justify-center bg-teal-600 max-w-md px-5 py-5 my-10 rounded-xl">
                <div>
                    <input className="px-3 py-1 outline-none " type="text" value={password} placeholder="password" readOnly />
                    <button className="rounded-none py-1 shrink-0">Copy</button>
                </div>
                <div className="flex justify-center gap-4">
                    <div className="flex justify-center align-middle gap-1">
                        <input className="cursor-pointer" type="range" min={6} max={56} value={length} /><span>({length})</span>
                    </div>
                    <div className="flex justify-center align-middle gap-1">
                        <input type="checkbox" /> <span className="flex align-middle">Number</span>
                    </div>
                    <div className="flex justify-center align-middle gap-1">
                        <input type="checkbox" /> <span className="flex align-middle">Character</span>
                    </div>

                </div>
            </div>

        </>
    )
}

export default PasswordGenerator;
