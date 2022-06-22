import {render , screen , cleanup, fireEvent} from '@testing-library/react'
import  renderer  from 'react-test-renderer'
import Modal from '../components/modal';
import '@testing-library/jest-dom/extend-expect'


afterEach(()=>{
    cleanup();
})



test("should render message Modal component" , ()=>{
    render(<Modal message="Message"/>)
    const modalElement = screen.getByTestId("message")
    expect(modalElement).toBeInTheDocument()
    expect(modalElement).toHaveTextContent("Message")
})
test("should render not message Modal component" , ()=>{
    render(<Modal message=""/>)
    const modalElement = screen.getByTestId("message")
    expect(modalElement).toBeInTheDocument()
    expect(modalElement).not.toHaveTextContent("Message")
})

test("should call onclick for close modal" , ()=>{
    const clickOfTheButtonClose = jest.fn()
    render(<Modal  handleNotVisible={clickOfTheButtonClose} />)
    fireEvent.click(screen.getByTestId('button-close'))
    expect(clickOfTheButtonClose).toHaveBeenCalled()
})

test('matches snapshot',()=>{
    const clickOfTheButtonClose = jest.fn()
    const tree = renderer.create(<Modal handleNotVisible={clickOfTheButtonClose} message="Exemple message Modal" />).toJSON
    expect(tree).toMatchSnapshot()
})


