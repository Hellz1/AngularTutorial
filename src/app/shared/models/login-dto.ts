export class LoginDTO{
    correoUsuario: string;
    password: string;
    tokenAccess: string;

    constructor(correo: string = "", password: string=""){
        this.correoUsuario = correo;
        this.password = password;
    }

    concatenarCorreoPassword(): string{
        return this.correoUsuario + this.password;
    }
}
