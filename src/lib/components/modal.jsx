import './modal.css'

export default function Modal({message,handleNotVisible,className}) {


  return (
    <div>
        <div  className={className}>
        <div className='modal-Container'>
        <div className='modal'>
        <p>{message}</p>
        <button onClick={handleNotVisible}>X</button>
        </div>
        </div>
        </div>

    </div>
  )
}
