USE [master]
GO
/****** Object:  Database [ProyectoFinal-Inmigracion]    Script Date: 27/11/2023 11:59:16 ******/
CREATE DATABASE [ProyectoFinal-Inmigracion]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'ProyectoFinal-Inmigracion', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\ProyectoFinal-Inmigracion.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'ProyectoFinal-Inmigracion_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\ProyectoFinal-Inmigracion_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [ProyectoFinal-Inmigracion] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ProyectoFinal-Inmigracion].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ProyectoFinal-Inmigracion] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [ProyectoFinal-Inmigracion] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [ProyectoFinal-Inmigracion] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [ProyectoFinal-Inmigracion] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [ProyectoFinal-Inmigracion] SET ARITHABORT OFF 
GO
ALTER DATABASE [ProyectoFinal-Inmigracion] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [ProyectoFinal-Inmigracion] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [ProyectoFinal-Inmigracion] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [ProyectoFinal-Inmigracion] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [ProyectoFinal-Inmigracion] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [ProyectoFinal-Inmigracion] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [ProyectoFinal-Inmigracion] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [ProyectoFinal-Inmigracion] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [ProyectoFinal-Inmigracion] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [ProyectoFinal-Inmigracion] SET  DISABLE_BROKER 
GO
ALTER DATABASE [ProyectoFinal-Inmigracion] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [ProyectoFinal-Inmigracion] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [ProyectoFinal-Inmigracion] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [ProyectoFinal-Inmigracion] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [ProyectoFinal-Inmigracion] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [ProyectoFinal-Inmigracion] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [ProyectoFinal-Inmigracion] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [ProyectoFinal-Inmigracion] SET RECOVERY FULL 
GO
ALTER DATABASE [ProyectoFinal-Inmigracion] SET  MULTI_USER 
GO
ALTER DATABASE [ProyectoFinal-Inmigracion] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [ProyectoFinal-Inmigracion] SET DB_CHAINING OFF 
GO
ALTER DATABASE [ProyectoFinal-Inmigracion] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [ProyectoFinal-Inmigracion] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [ProyectoFinal-Inmigracion] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'ProyectoFinal-Inmigracion', N'ON'
GO
ALTER DATABASE [ProyectoFinal-Inmigracion] SET QUERY_STORE = OFF
GO
USE [ProyectoFinal-Inmigracion]
GO
/****** Object:  User [Inmigr]    Script Date: 27/11/2023 11:59:16 ******/
CREATE USER [Inmigr] FOR LOGIN [Inmigr] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  User [alumno]    Script Date: 27/11/2023 11:59:16 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [Inmigr]
GO
/****** Object:  Table [dbo].[Abogado]    Script Date: 27/11/2023 11:59:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Abogado](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[Apellido] [varchar](50) NOT NULL,
	[Telefono] [int] NOT NULL,
 CONSTRAINT [PK_Abogado] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Alquiler]    Script Date: 27/11/2023 11:59:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Alquiler](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[IdUsuario] [int] NOT NULL,
	[IdVivienda] [int] NOT NULL,
	[FechaInicio] [date] NOT NULL,
	[FechaFin] [date] NOT NULL,
 CONSTRAINT [PK_Alquiler] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 27/11/2023 11:59:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuario](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[Apellido] [varchar](50) NOT NULL,
	[Telefono] [int] NOT NULL,
	[Mail] [varchar](50) NOT NULL,
	[Contraseña] [varchar](50) NOT NULL,
	[Nacionalidad] [varchar](50) NOT NULL,
	[Ciudad] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Usuario] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Vivienda]    Script Date: 27/11/2023 11:59:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Vivienda](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[IdUsuario] [int] NOT NULL,
	[Direccion] [varchar](50) NOT NULL,
	[Barrio] [varchar](50) NOT NULL,
	[TipoVivienda] [varchar](50) NOT NULL,
	[MetrosCuadradosTotales] [float] NOT NULL,
	[MetrosCuadradosCubierta] [float] NOT NULL,
	[Luminosidad] [varchar](50) NOT NULL,
	[Baños] [int] NOT NULL,
	[Cocheras] [int] NOT NULL,
	[Ambientes] [int] NOT NULL,
	[Descripcion] [varchar](50) NOT NULL,
	[Imagen] [varchar](50) NULL,
 CONSTRAINT [PK_Vivienda] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Alquiler]  WITH CHECK ADD  CONSTRAINT [FK_Alquiler_Usuario] FOREIGN KEY([IdUsuario])
REFERENCES [dbo].[Usuario] ([Id])
GO
ALTER TABLE [dbo].[Alquiler] CHECK CONSTRAINT [FK_Alquiler_Usuario]
GO
ALTER TABLE [dbo].[Alquiler]  WITH CHECK ADD  CONSTRAINT [FK_Alquiler_Vivienda] FOREIGN KEY([IdVivienda])
REFERENCES [dbo].[Vivienda] ([Id])
GO
ALTER TABLE [dbo].[Alquiler] CHECK CONSTRAINT [FK_Alquiler_Vivienda]
GO
ALTER TABLE [dbo].[Vivienda]  WITH CHECK ADD  CONSTRAINT [FK_Vivienda_Usuario] FOREIGN KEY([IdUsuario])
REFERENCES [dbo].[Usuario] ([Id])
GO
ALTER TABLE [dbo].[Vivienda] CHECK CONSTRAINT [FK_Vivienda_Usuario]
GO
USE [master]
GO
ALTER DATABASE [ProyectoFinal-Inmigracion] SET  READ_WRITE 
GO
