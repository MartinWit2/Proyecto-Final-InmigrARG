import 'dotenv/config';

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    options: {
        trustServerCertificate: true,
        trustedConnection: true
    }
}

export default config;

/*USE [master]
GO
CREATE LOGIN [proyectoUser] WITH PASSWORD=N'proyecto', DEFAULT_DATABASE=[ProyectoFinal-Inmigracion], CHECK_EXPIRATION=OFF,
CHECK_POLICY=OFF
GO

USE [ProyectoFinal-Inmigracion]
GO
CREATE USER [proyectoUser] FOR LOGIN [proyectoUser]
GO
USE [ProyectoFinal-Inmigracion]
GO
ALTER ROLE [db_owner] ADD MEMBER [proyectoUser]
GO*/