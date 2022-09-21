import { contacto } from '../../models/contacto.class';
import ContactoComponent from '../ComponenteB';

const ContactoListaComponent = () => {
    const defaultContacto = new contacto(
        "Pedro",
        "Rodriguez",
        "pedroR1990@gmail.com",
        false
    );
    
    return ( 
        <>
            <div><h1>Tu Contacto:</h1></div>
            <ContactoComponent contacto={defaultContacto}></ContactoComponent>
        </>
     );
}
 
export default ContactoListaComponent;