import config from '../dbconfig.js'
import sql from 'mssql';

class UsuarioServices{

    static tryLogin = async (usuario) => {
        {
            console.log("FLECHAAA", usuario);
            let returnEntity = null;
            //console.log(`Estoy en: UsuarioServices.GetById ${id}`);
            try {
                let pool = await sql.connect(config);
                let result = await pool.request()
                    .input('pMail', usuario.email)
                    .input('pPass', usuario.password)
                    .query('SELECT * FROM Usuario WHERE Mail = @pMail AND Contraseña = @pPass');
                returnEntity = result.recordsets[0][0];
            } catch (error) {
                console.log(error);
            }
            console.log("encontro mail", JSON.stringify(returnEntity))
            return returnEntity;

        }
    }


    static getById = async (Mail, Contraseña) => {
        {
            let returnEntity = null;
            //console.log(`Estoy en: UsuarioServices.GetById ${id}`);
            try {
                let pool = await sql.connect(config);
                let result = await pool.request()
                    .input('pMail', Mail)
                    .query('SELECT * FROM Usuario WHERE Mail = @pMail');
                returnEntity = result.recordsets[0][0];
            } catch (error) {
                console.log(error);
            }
            console.log("encontro mail", JSON.stringify(returnEntity))
            return returnEntity;

        }
    }

    static create = async (nombre, apellido, email, contraseña, numero, pais, ciudad) => {
        let success = false;
        console.log("llega al create");

        console.log("Nombre: ", nombre);
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('Nombre', sql.VarChar, nombre)
                .input('Apellido', sql.VarChar, apellido)
                .input('Mail', sql.VarChar, email)
                .input('Contraseña', sql.VarChar, contraseña)
                .input('Telefono', sql.VarChar, numero)
                .input('Nacionalidad', sql.VarChar, pais)
                .input('Ciudad', sql.VarChar, ciudad)
                .query('INSERT INTO Usuario (Nombre, Apellido,Telefono, Mail, Contraseña,Nacionalidad, Ciudad) VALUES (@Nombre, @Apellido,@Telefono,@Mail, @Contraseña,@Nacionalidad, @Ciudad)');
    
            if (result.rowsAffected[0] === 1) {
                success = true;
            }
        } catch (error) {
            console.log(error);
        }
    
        return success;
    }
    




}
export default UsuarioServices;