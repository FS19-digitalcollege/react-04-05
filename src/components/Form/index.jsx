import { useRef, useState } from "react";

const Form = () => {
    const nome = useRef('');
    const [email, setEmail] = useState('');
    console.log("Nome: ", nome.current);
    console.log("Email: ", email);
    return (
        <>
            <form>
                <label htmlFor="nome">Nome: ({nome.current})</label>
                <input
                    type="text"
                    id="nome"
                    placeholder="Digite seu nome"
                    onChange={(e) => {
                        nome.current = e.target.value;
                    }}
                    value={nome.current}
                />
                <br />
                <label htmlFor="email">Email: ({email})</label>
                <input
                    type="email"
                    id="email"
                    placeholder="email@email.com"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    value={email}
                />
                <button onClick={(e) => {
                    e.preventDefault()
                    nome.current = '';
                    setEmail('')
                }}>reset</button>
            </form>
        </>
    );
}

export default Form;