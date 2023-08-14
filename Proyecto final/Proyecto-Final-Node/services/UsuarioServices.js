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
            return returnEntity;

        }
    }

}
export default UsuarioServices;