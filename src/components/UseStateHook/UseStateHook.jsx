import styles from "./UseStateHook.module.css"

function UseStateHook () {
   const [nome, setNome] = useState('Clique em mudar.');

   const atualizarNome = () => {

    setNome('Ana');

   }


   const atualizarIdade = () => {

   }

   const verificarEstado = () => {
    
   }
    

   return 

   <div>
        <p>Nome: {nome}</p>
        <button onClick={atualizarNome}>Mudar</button>

   </div>
   
}

export default UseStateHook