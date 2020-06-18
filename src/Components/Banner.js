import React, {useState, useEffect, useCallback, useRef} from 'react'

const backgroundImg = {
    backgroundImage: `linear-gradient(
		rgba(0, 0, 88, 0.8),
		rgba(51, 204, 153, 0.8)), url(${process.env.PUBLIC_URL}/assets/code.jpg)`}

function Banner() {
    const [wordsTyped, setWordsTyped] = useState(0)

    const words = ["Design.", "Develop.","Create Awesomeness."]
    const typeRef = useRef();
    const prevWordRef = useRef();

    useEffect(() => {
        prevWordRef.current = wordsTyped;
    });

    const prevWordTyped = prevWordRef.current;

    const deleteWord = useCallback((word, i) => {
        if (i !== -1) {
            typeRef.current.innerHTML = word.slice(0, i)
            i--
            setTimeout(() => deleteWord(word, i), 300)
        } else {
            if(wordsTyped === words.length - 1){
                setWordsTyped(0)
            }else{
                let typed = wordsTyped
                typed++
                setWordsTyped(typed)
            }   
        }
    }, [wordsTyped, words])

    const typeWord = useCallback((word, i) => {
        if(i < word.length){
            typeRef.current.innerHTML += word.charAt(i)
            i++
            setTimeout(() => typeWord(word, i), 100)
        }else{
            if(wordsTyped === words.length){
                setWordsTyped(words.length)
            }

            if(wordsTyped === 2){
                setTimeout(() => deleteWord(word, i - 1), 4000)
            }else{
                setTimeout(() => deleteWord(word, i - 1), 2000)
            } 
        }
    },[words, wordsTyped, deleteWord])

    useEffect(() => {
        if(wordsTyped !== prevWordTyped){
            let wordIndex = wordsTyped === 3 ? 0 : wordsTyped
           setTimeout(() => typeWord(words[wordIndex], 0), 400)
        }
    }, [wordsTyped, words, typeWord, prevWordTyped])


    return (
        <div className="banner-img" style={backgroundImg}>
            <div className="banner-img__typing-container">
                <p className="typing"><p ref={typeRef}></p><span className="typing__cursor"></span></p>
            </div>
        </div>
    )
}

export default Banner