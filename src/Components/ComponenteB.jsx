import { contacto } from "../models/contacto.class";
import PropTypes from "prop-types";


const ContactoComponent = ({ contacto }) => {
    return ( 
        <div>
            <h2>Nombre: {contacto.nombre}</h2>
            <h3>Apellido: {contacto.apellido}</h3>
            <h4>Email: {contacto.email}</h4>
            <h5>Estado: {contacto.conectado ? 'Contacto En Linea' : 'Contacto No Disponible'}</h5>
        </div>
     );
}

ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(contacto),
};
 
export default ContactoComponent;