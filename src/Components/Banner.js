import React, {useState, useEffect, useCallback} from 'react'

const backgroundImg = {
    backgroundImage: `linear-gradient(
		rgba(0, 0, 88, 0.8),
		rgba(51, 204, 153, 0.8)), url(${process.env.PUBLIC_URL}/assets/code.jpg)`}

function Banner() {
    //"Design", "Develop",
    const [typeWord, setTypedWord] = useState('')
    const [allWordsTyped, setAllWordsTyped] = useState(false)

    const words = ["Create Awesomeness"]

    const typeWords = useCallback(() => {
        for (let word of words) {
            let letters = word.split("")

            for (let letter of letters) {
                console.log("letter:", letter, "State:", typeWord)
                if(typeWord === '' || typeWord.length < letters.length){
                    setTimeout(() => setTypedWord(prevTypeWord => prevTypeWord.concat(letter)), 2000)
                }
            }
            setAllWordsTyped(true)
        }
    },[typeWord, words])

    useEffect(() => {
            if(typeWord === '' && allWordsTyped === false){
                typeWords()
            }   
        },[typeWord, allWordsTyped, typeWords])

    return (
        <div className="banner-img" style={backgroundImg}>
            <div className="banner-img__typing-container">
                <p className="typing">{typeWord}<span className="typing__cursor"></span></p>
            </div>
        </div>
    )
}

export default Banner