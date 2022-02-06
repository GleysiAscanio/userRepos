# User Repos

En este proyecto queremos mostrar una aplicación web, capaz de visualizar y manipular data de un usuario con cuenta y token válidos en GitHub, para realizar diversas funciones.

## Definición de producto

Esta aplicación web va dirigida a usuarios con cuenta y token válidos en GitHub, dado que esta diseñada para realizar consultas de sus repositorios, en ella podrá visualizar información de hasta los últimos 10 repositorios realizados:

* Nombre.
* Descripción. 
* Favoritos.

## Historias de usuario

### H.U 1
"Como usuario quiero poder registrarme en la aplicación web."

#### Definición de terminado
*Crear una aplicación de una sola página donde un usuario pueda registrarse.
*Crear un campo para registrar el nombre de su usuario en Github.
*Crear un campo para registrar el token generado en Github.
*Guardar al usuario en un almacenamiento local.

### H.U 2
"Como usuario, quiero poder iniciar sesión después de registrarme en la aplicación"

#### Definición de terminado
*Crear un campo para ingresar el nombre de su usuario en Github.
*Crear un campo para ingresar el token generado en Github.
*En el inicio de sesión se valida las credenciales contra el almacenamiento local.

### H.U 3
"Como usuario, quiero enumerar todos los repositorios en mi usuario de Github".

#### Definición de terminado
*Una vez que hayan iniciado sesión, tienen una sección donde se enumeran sus últimos 10 repositorios.
*Se visualiza el nombre y la Descripción del repositorio. 

### H.U 4
"Como usuario, quiero buscar en todos mis repositorios y crear una lista de mis repositorios favoritos".

#### Definición de terminado
*Una vez que hayan iniciado sesión, tienen una sección donde se enumeran sus repositorios favoritos.
*Se visualiza el nombre del repositorio.
