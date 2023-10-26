import config from '../dbconfig.js'
import sql from 'mssql';

class UsuarioServices{



    static getById = async (Mail) => {
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
    
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('Nombre', sql.NVarChar, nombre)
                .input('Apellido', sql.NVarChar, apellido)
                .input('Email', sql.NVarChar, email)
                .input('Contraseña', sql.NVarChar, contraseña)
                .input('Numero', sql.NVarChar, numero)
                .input('Nacionalidad', sql.NVarChar, pais)
                .input('Ciudad', sql.NVarChar, ciudad)
                .input('TipoUsuario',"Inmobilaria")
                .query('INSERT INTO Usuarios (Nombre, Apellido, Email, Contraseña, Numero, Nacionalidad, Ciudad,TipoUsuario) VALUES (@Nombre, @Apellido, @Email, @Contraseña, @Numero, @Nacionalidad, @Ciudad,"Inmobilaria")');
    
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