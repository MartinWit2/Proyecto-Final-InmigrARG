import config from '../dbconfig.js'
import sql from 'mssql';

class ViviendaServices {
    static getAll = async () => {
        let returnEntity = null;
        console.log('Estoy en: ViviendaServices.GetAll');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .query('SELECT * FROM Vivienda');
            returnEntity = result.recordsets[0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
    static getById = async (id) => {
        {
            let returnEntity = null;
            //console.log(`Estoy en: ViviendaServices.GetById ${id}`);
            try {
                let pool = await sql.connect(config);
                let result = await pool.request()
                    .input('pId', sql.Int, id)
                    .query('SELECT * FROM Vivienda WHERE id = @pId');
                returnEntity = result.recordsets[0][0];
            } catch (error) {
                console.log(error);
            }
            return returnEntity;

        }
    }

    static insert = async(Vivienda) =>{
        console.log("entro a la funcion");
            let rowsAffected = 0;
            console.log('Estoy en: ViviendaServices.insert(Vivienda)');
            try{
                console.log("direccion: " + Vivienda);
                let pool = await sql.connect(config);
                let result = await pool.request()
                    .input('pDireccion',Vivienda.Direccion)
                    .input('pIdUsuario',1/*vivienda.IdUsuario*/)
                    .input('pBarrio',Vivienda.Barrio)
                    .input('pTipoVivienda',Vivienda.TipoVivienda)
                    .input('pMetrosCuadradosTotales',Vivienda.MetrosCuadradosTotales)
                    .input('pMetrosCuadradosCubierta',Vivienda.MetrosCuadradosCubierta)
                    .input('pLuminosidad',Vivienda.Luminosidad)
                    .input('pBaños',Vivienda.Baños)
                    .input('pCocheras',Vivienda.Cocheras)
                    .input('pAmbientes',Vivienda.Ambientes)
                    .input('pDescripcion',Vivienda.Descripcion)
                    .input('pImagen',Vivienda.Imagen)
                    .query('INSERT INTO Vivienda (IdUsuario,Direccion, Barrio, TipoVivienda , MetrosCuadradosTotales, MetrosCuadradosCubierta, Luminosidad, Baños, Cocheras, Ambientes, Descripcion, Imagen) VALUES (@pIdUsuario,@pDireccion, @pBarrio, @pTipoVivienda, @pMetrosCuadradosTotales, @pMetrosCuadradosCubierta, @pLuminosidad, @pBaños, @pCocheras, @pAmbientes, @pDescripcion, @pImagen)');
                rowsAffected = result.rowsAffected;
                console.log("query");
                console.log(rowsAffected);
            } catch (error) {                
                console.log(error)
                console.log("error");
                console.log();

            }
            return rowsAffected;
            } 
    
    static update = async (id, Vivienda) => {
        let rowsAffected = 0;
        //const Vivienda ={Id,Direccion,Barrio,TipoVivienda,MetrosCuadradosTotales,MetrosCuadradosCubierta,Luminosidad,Baños,Cocheras,Ambientes,Descripcion,Imagen} ;
           
            console.log('Estoy en: ViviendaServices.update(Vivienda)');
            try{
                let pool = await sql.connect(config);
                let result = await pool.request()
                .input('pId',id)
                .input('pIdUsuario',Vivienda.IdUsuario)
                .input('pDireccion',Vivienda.Direccion)
                .input('pBarrio',Vivienda.Barrio)
                .input('pTipoVivienda',Vivienda.TipoVivienda)
                .input('pMetrosCuadradosTotales',Vivienda.MetrosCuadradosTotales)
                .input('pMetrosCuadradosCubierta',Vivienda.MetrosCuadradosCubierta)
                .input('pLuminosidad',Vivienda.Luminosidad)
                .input('pBaños',Vivienda.Baños)
                .input('pCocheras',Vivienda.Cocheras)
                .input('pAmbientes',Vivienda.Ambientes)
                .input('pDescripcion',Vivienda.Descripcion)
                .input('pImagen',Vivienda.Imagen)

                    .query('UPDATE Vivienda SET IdUsuario=@pIdUsuario, Direccion = @pDireccion , Barrio= @pBarrio, TipoVivienda = @pTipoVivienda,MetrosCuadradosTotales=@pMetrosCuadradosTotales,MetrosCuadradosCubierta=@pMetrosCuadradosCubierta,Luminosidad=@pLuminosidad,Baños=@pBaños,Cocheras=@pCocheras,Ambientes=@pAmbientes, Descripcion = @pDescripcion,Imagen=@pImagen WHERE id = @pId;');
                rowsAffected = result.rowsAffected;
            } catch (error) {
                console.log(error)
            }
            return rowsAffected;
            }
        
            static deleteById = async (id) => {
            let rowsAffected = 0;
            console.log('Estoy en: ViviendaServices.deleteById(id)');
            try {
                let pool = await sql.connect(config);
                let result = await pool.request()
                    .input('pId', sql.Int, id)
                    .query('DELETE FROM Vivienda WHERE id = @pId');
                rowsAffected = result.rowsAffected;
            } catch (error) {
                console.log(error)
            }
            return rowsAffected;

        }


    }
    export default ViviendaServices;
