import './modal.css'

export default function Modal({message,handleNotVisible,className}) {


  return (
    <div>
        <div  className={className}>
        <div className='modal-Container'>
        <div className='modal'>
        <p data-testid="message">{message}</p>
        <button data-testid="button-close"  onClick={handleNotVisible}>X</button>
        </div>
        </div>
        </div>

    </div>
  )
}
