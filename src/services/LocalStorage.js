const USUARIO = 'USUARIO-BD3';

export function setUsuario(user){
    localStorage.setItem(USUARIO,user);
}

export function getUsuario(){
    return localStorage.getItem(USUARIO);
}