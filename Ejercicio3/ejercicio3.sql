
create database ejercicio3



CREATE TABLE users (
    id INT PRIMARY KEY IDENTITY(1,1),
    username NVARCHAR(50) NOT NULL,
    email NVARCHAR(100) UNIQUE NOT NULL,
    status NVARCHAR(20) NOT NULL CHECK (status IN ('active', 'inactive', 'suspended', 'pending')),
    last_login DATETIME,
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE(),
    first_name NVARCHAR(50),
    last_name NVARCHAR(50),
    phone NVARCHAR(20),
    address NVARCHAR(200)
);



--  datos de prueba 
INSERT INTO users (username, email, status, last_login, first_name, last_name, phone, address)
VALUES
('john', 'john@example.com', 'active', '2023-05-15 10:30:00', 'John', 'Alvarado', '0932390101', 'Guayaquil'),
('johana', 'johana@example.com', 'active', '2023-05-20 14:45:00', 'Johana', 'Mejía', '0932390102', 'Quito'),
('roberto', 'roberto@example.com', 'inactive', '2023-04-10 09:15:00', 'Roberto', 'Perez', '0932390103', 'Guayaquil'),
('alicia', 'alicia@example.com', 'active', '2023-05-18 16:20:00', 'Alicia', 'Campoverde', '0932390104', 'Guayaquil'),
('miguel', 'miguel@example.com', 'suspended', '2023-03-22 11:00:00', 'Miguel', 'Barzola', '0932390105', 'Quito'),
('sara', 'sara@example.com', 'active', '2023-05-22 08:45:00', 'Sara', 'Vera', '0932390106', 'Manta'),
('david', 'david@example.com', 'pending', '2023-05-01 13:30:00', 'David', 'Mendoza', '0932390107', 'Manta'),
('emily', 'emily@example.com', 'active', '2023-05-21 17:10:00', 'Emily', 'Aviles', '0932390108', 'Guayaquil'),
('tomas', 'tomas@example.com', 'inactive', '2023-02-28 10:00:00', 'Tomas', 'Lozada', '0932390109', 'Quito'),
('liz', 'liz@example.com', 'active', '2023-05-19 09:30:00', 'Liz', 'Garcia', '0932390110', 'Manta');



-- consulta sql
SELECT * FROM users WHERE status = 'active' ORDER BY last_login DESC;




-- explicación

/*
 
 Para llegar a una consulta un poco más optimizada, tenia conocimientos de la existencia de vistas e indices.
 Las he usado antes.
 Investigué un poco mas y en como combinarlas para mi respuesta
 
 */


-- vista
CREATE VIEW vw_active_users WITH SCHEMABINDING AS
SELECT 
	id,
	username,
	email,
	status,
	last_login,
	created_at,
	updated_at,
	first_name,
	last_name,
	phone,
	address
FROM dbo.users 
WHERE status = 'active';

-- Indice clustered en la vista 
CREATE UNIQUE CLUSTERED INDEX idx_cl_vw_active_users ON vw_active_users(id);

-- Indice no-clustered para el ordenamiento de last_login
CREATE INDEX idx_nc_active_users_login ON vw_active_users(last_login DESC);

-- Consulta optimizada final
SELECT 
    id,
    username,
    email,
    last_login,
    first_name,
    last_name
FROM vw_active_users WITH (NOEXPAND)
ORDER BY last_login DESC;

/*
 
 Primero creé una vista con schemabinding(se asocia a la tabla, es decir, esta no puede ser modificada en cuanto su estructura)
 y que filtra a los usuarios activos
 
 Despues creé un index clustered en la vista creada. Este organiza, ordena los registros por id. Solo puede haber un indice de este tipo por tabla.
 Y optimiza las busquedas directas por id. Es como crear llave primaria en la vista.Se conoce como vista materializada
 
 Despues creé un index no-clustered en la vista creada. Este realiza el ordenamiento pero sin reorganizar los datos. 
 Este filtra por last_login DESC. Crea una estructura separada con una copia ordenada de last_login (DESC)
 
 Por ultimo en la consulta final uno puedo optimizar mejor consultando solo los campos necesarios. Uso noexpand para usar
 la vista materializada en lugar de explandirla. Y el ordenamiento por last_login DESC es mas rapido gracias al indice
 creado para el ordenamiento.
 
 */


















