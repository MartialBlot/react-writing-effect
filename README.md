# React-writing-effect
    Package to simulate typing with several settings and the possibility to customize the rendered text element.

###To install :
    npm i react-writing-effect

### To use :

###### Import

    import {WritingEffect} from './WritingEffect'

###### Render element

    <WritingEffect
      text={*/your text/*}
      effect={*/rendering effect (linear or perWord)/*}
      simulateRandomTyping={*/random rendering effect/*}
      speed={*/the speed of the rendering/*}
      delayPerWord={*/delay between each word (effect perWord required)/*}
    />

###### Props

- text => your text, type: STRING
- effect => rendering effect, type: STRING (linear or perWord) 
- simulateRandomTyping => random rendering effect, type: BOOL   
- speed => the speed of the rendering, type: NUMBER 
- delayPerWord => delay between each word, type: NUMBER (effect perWord required)
