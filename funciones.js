const guardarContacto = (db, contacto) =>{
    db.setItem(contacto.id,JSON.stringify(contacto))
    window.location.href = './'
}
 
const cargarContacto = (db,parentNode) =>{
    let claves = Object.keys(db);

    for(clave of claves){
        let contacto = JSON.parse(db.getItem(clave));
        crearContacto(parentNode,contacto,db)
    }
}


const crearContacto = (parentNode,contacto,db) =>{

    let divContacto = document.createElement('div');
    let nombreContacto = document.createElement('h3');
    let numeroContacto = document.createElement('h3');
    let direccionContacto = document.createElement('h3');
    let iconoBorrar = document.createElement('span');

    nombreContacto.innerHTML = contacto.nombre;
    numeroContacto.innerHTML = contacto.numero;
    direccionContacto.innerHTML = contacto.direccion;
    iconoBorrar.innerHTML = 'delete_forever'

    divContacto.classList.add('contacto');
    iconoBorrar.classList.add('material-symbols-outlined','icono');

    iconoBorrar.onclick = () =>{
        db.removeItem(contacto.id);
        window.location.href ='./'
    }
    
    divContacto.appendChild(nombreContacto);
    divContacto.appendChild(numeroContacto);
    divContacto.appendChild(direccionContacto);
    divContacto.appendChild(iconoBorrar);
    
    parentNode.appendChild(divContacto);

    

}