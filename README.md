# Modal-Npm-component 


## Prerequisites for install

- You need [Node](https://nodejs.org/en/) to run the npm install

- Recommended text editor: [Visual Studio Code](https://code.visualstudio.com)


## Why use this modal

This modal allows the user to be informed that they have completed a form for example


They can open and close it

## How to use it

### Installation

```console
npm i alexlemars_75-npm-modal
```

### Import the componant

```js
import { Modal } from 'alexlemars_75-npm-modal';
```

### Use the component

If you use useState hook you can do like this :

```js
import { Modal } from 'alexlemars_75_modal' 

export default function App() {

  const [visible,setVisible] = useState(false)

  const open = (e)=>{
    e.preventDefault()
    setVisible(true)
  }
  const close = (e)=>{
    e.preventDefault()
    setVisible(false)
  }
  return (
    <div>
        <main className='home-page'>
            <button onClick={open}>To make visible<button/>
            <Modal message="Your message !"  className={visible ? 'modalVisible' : 'modalNotVisible'}  handleNotVisible={close}/>       
        </main>
    </div>
  )
}
```







| props                     | type          | description                           |                    
| ------------------------- | ------------- | ------------------------------------- |
| message                   | string        |  To edit your message                 | 
| className                 | string        |  To customize the modal               |
| handleNotVisible          | function      |   function on click to close the modal|



## Auteur
* [Boucher Alexis](https://github.com/Alexlemars)#boucher_alexis_14_16052022__npm-modal
