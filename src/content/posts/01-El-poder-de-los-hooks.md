---
title: "El poder de los Custom Hooks"
publishedAt: 2023-09-10
description: "En alguna oportunidad necesite realizar muchas peticiones a un servidor de forma sencilla, lo que me llevo a construir un hook para eso."
slug: "El-poder-de-los-hooks"
isPublish: true
---

## Motivo

Me encontraba trabajando en un proyecto que utilizaba **AWS Amplify**, Amplify provee una libreria para realizar peticiones de forma sencilla, esta tiene el metodo API, que permite comunicar los diferentes endpoints que existen en el backend.

Al tener la necesidad de realizar muchas llamadas al backend y no querer repetir el codigo tantas veces, quise aprovechar el poder de los Customs Hooks y decidi crear mi propio Hook para realizar peticiones. Ademas de que no queria una solución como **React Query** o **Redux RTQ**. Este hook cumple con todas las necesidades principales a la hora de realizar una comunicación al backend.

> El codigo provee todos los comentarios necesarios para entender su funcionamiento.

```jsx

import { useState, useEffect } from 'react';
import { API } from 'aws-amplify';

/**
 * Hook personalizado para realizar solicitudes a una API.
 *
 * @param {Object} options - Opciones para configurar el hook y la solicitud.
 * @param {string} options.path - Ruta de la API a la que se realizará la solicitud.
 * @param {Object} [options.body] - Cuerpo de la solicitud (para métodos POST/PUT/PATCH).
 * @param {string} [options.method='GET'] - Método HTTP de la solicitud (GET/POST/PUT/PATCH/DELETE).
 * @param {string} [options.apiName='apiname'] - Nombre de la API a la que se realizará la solicitud.
 * @param {Object} [options.headers={}] - Encabezados de la solicitud.
 * @param {boolean} [options.useAuth=true] - Indica si se debe incluir el token de autenticación en los encabezados de la solicitud.
 * @param {boolean} [options.autoFetch=true] - Indica si se debe realizar automáticamente la solicitud al montar el componente.
 * @param {function} [options.transformData] - Función para transformar los datos recibidos de la API antes de actualizar el estado del hook.
 * @param {function} [options.validate] - Función para validar los datos antes de realizar la solicitud. Si devuelve `false`, no se realizará la solicitud.
 * @param {function} [options.onSuccess] - Función que se ejecutará después de una solicitud exitosa.
 * @param {boolean} [options.shouldFetch=true] - Indica si se debe realizar la solicitud o no.
 *
 * @returns {Object} Objeto con los siguientes valores:
 *  - data: Datos recibidos de la API.
 *  - error: Error ocurrido durante la solicitud.
 *  - loading: Indica si la solicitud está en curso o no.
 *  - fetchData: Función para realizar manualmente una solicitud a la API. Acepta dos argumentos: newPath (para actualizar la ruta de la API) y newBody (para actualizar el cuerpo de la solicitud).
 */
const useFetchData = ({
  path,
  body,
  method = 'GET',
  apiName = 'apiname',
  headers = {},
  useAuth = true,
  autoFetch = true,
  transformData = (data) => data,
  validate = () => true,
  onSuccess = () => {},
  shouldFetch = true,
}) => {
  // Estado para almacenar los datos recibidos de la API
  const [data, setData] = useState(null);
  // Estado para almacenar el error ocurrido durante la solicitud
  const [error, setError] = useState(null);
  // Estado para indicar si la solicitud está en curso o no
  const [loading, setLoading] = useState(false);
  // Estado para almacenar la ruta actual de la API
  const [currentPath, setCurrentPath] = useState(String(path));
  // Estado para almacenar el cuerpo actual de la solicitud
  const [currentBody, setCurrentBody] = useState(body);

  // Si path es null, no se realiza ninguna acción
  if (path === null) return;

  /**
   * Función para realizar manualmente una solicitud a la API.
   *
   * @param {string} [newPath] - Nueva ruta de la API a utilizar en lugar de currentPath.
   * @param {Object} [newBody] - Nuevo cuerpo de la solicitud a utilizar en lugar de currentBody.
   */
  const fetchData = async (newPath, newBody) => {
    // Si shouldFetch es false, no se realiza ninguna acción
    if (!shouldFetch) return;
    // Se indica que la solicitud está en curso
    setLoading(true);
    // Se valida los datos antes de realizar la solicitud
    if (!validate()) {
      setError(new Error('Validation failed'));
      setLoading(false);
      return;
    }
    try {
      // Se actualiza currentPath y currentBody con los nuevos valores (si se proporcionaron)
      setCurrentPath(newPath || currentPath);
      setCurrentBody(newBody || currentBody);

      // Se construye el objeto de configuración para la solicitud
      const apiConfig = {
        headers: {
          ...headers,
        },
        body: newBody || currentBody,
      };
      // Si useAuth es true, se agrega el token de autenticación a los encabezados
      if (useAuth) {
        apiConfig.headers.Authorization = `Bearer ${localStorage.getItem(
          'token'
        )}`;
      }
      // Se realiza la solicitud a la API
      const response = await API[method.toLowerCase()](
        apiName,
        newPath || path,
        apiConfig
      );
      // Se actualiza el estado con los datos recibidos (transformados)
      setData(transformData(response));
      // Se ejecuta la función onSuccess
      onSuccess(response);
    } catch (err) {
      // Si ocurre un error, se actualiza el estado con el error
      setError(err);
    } finally {
      // Se indica que la solicitud ha finalizado
      setLoading(false);
    }
  };

  // Si autoFetch y shouldFetch son true, se realiza automáticamente una solicitud al montar el componente
  useEffect(() => {
    if (autoFetch && shouldFetch) {
      fetchData();
    }
  }, [autoFetch]);

  // Se retorna el estado y la función fetchData
  return { data, error, loading, fetchData };
};

export default useFetchData;
```

Asi que puedes modificar el hook tanto como te parezca y ajuste a las necesidades. :)

[GIST del código](https://gist.github.com/Gonzlezjg/d527f4291310af578dd48f60eb1a8a47)
