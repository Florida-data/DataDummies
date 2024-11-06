import axios from 'axios'
import { useEffect, useState } from 'react'
import { Button } from './Button'
import { useParams } from 'react-router-dom'

export function Activation() {
    const { uid, token } = useParams()
    const [text, setText] = useState('Activa Tu Cuenta')

    const activarCuenta = () => {
        axios.post("http://127.0.0.1:8000/auth/users/activation/", { uid, token }).
            then(response => {
                setText("Tu Cuenta Ha Sido Activada!")
            }).
            catch(response => {
                setText(response.toString())
            })
    }
    return (
        <>

            <section className='d-flex vh-100 justify-content-center align-items-center  flex-column activation_section'>
                {text === "Activa Tu Cuenta" ? (
                    <>
                        <h1 className='h1 text-light activation_text'>{text}</h1>

                        <Button class_button={'mt-5 text-dark activation_button'} text={"Activar"} functionClick={activarCuenta} />
                    </>
                ) : (
                    <>
                        <h1 className='h1 text-light activation_text'>{text} </h1>
                    </>
                )}


            </section>
        </>
    )
}