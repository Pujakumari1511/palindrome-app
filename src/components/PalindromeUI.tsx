import { useState } from "react";
import './palindrome.css'

export const PalindromeUI = () => {

    const [inputValue, setInputValue] = useState<string> ('');
    const [isPalindrome, setIsPalindrome] = useState<boolean> (false);
    const [inputText, setInputText] = useState<string | null>();
    
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setInputValue(value);
        
    }

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setInputText(inputValue)
        const word: string = inputValue.toLowerCase();
        setInputValue("") 
        for(let i: number = 0; i < Math.floor(word.length / 2); i++){
            if(word.charAt(i) !== word.charAt(word.length -1 -i)){
                setIsPalindrome(false)
                return
            }  
            setIsPalindrome(true)
        }
    }

    return ( 
        <div>
            <h1>Palindrome Checker</h1>
            <form className={"palindrome-container"} onSubmit={handleSubmit} >
                <input name="inputValue" type="text" value={inputValue} onChange={handleChange} required/>
                <div>
                    <button type="submit">Check Palindrome</button>
                </div>   
            </form> 
            <div className={"validate-palindrom-text"}>
                {inputText &&  
                <p>{`${inputText} is ${isPalindrome ? '' : 'not'} palindrome`}</p>}
            </div>
    </div>

    )
}