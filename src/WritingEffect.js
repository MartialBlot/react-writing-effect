import React, {useMemo, useState, useEffect} from 'react'

export const WritingEffect = ({
                                  text,
                                  speed,
                                  effect,
                                  delayPerWord,
                                  simulateRandomTyping,
                                  ...props
                              }) => {
    const [textRender, setTextRender] = useState([])

    const textFormat = useMemo(() => {
        if (!text) return []
        return text.split('')
    }, [text])

    useEffect(() => {
        if (!textFormat.length) return
        ;(async () => {
            for (let i = 0; i < textFormat.length; i++) {
                await wait(simulateRandomTyping ?
                    getRandomDelay([100, 250]) :
                    (speed || 100))
                setTextRender(e => [
                    ...e,
                    textFormat[i]
                ])
                if (effect === 'perWord' && textFormat[i] === ' ') {
                    await wait(simulateRandomTyping ?
                        getRandomDelay([200, 400]) :
                        (delayPerWord || 250))
                }
            }
        })()
    }, [textFormat])

    return <p {...props}>
        {textRender}
    </p>
}

const wait = async (ms) => {
    return new Promise(r => {
        setTimeout(r, ms)
    })
}

const getRandomDelay = (inputRange) => {
    return Math.floor(Math.random() * inputRange[1]) + inputRange[0]
}
