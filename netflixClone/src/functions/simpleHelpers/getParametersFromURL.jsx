export default function getParametersFromURL(url) {
  // Buscar el índice del fragmento
  var fragmentIndex = url.indexOf("#");

  // Verificar si hay un fragmento en la URL
  if (fragmentIndex !== -1) {
      // Obtener el fragmento de la URL
      var fragment = url.substring(fragmentIndex + 1);

      // Dividir el fragmento en pares clave=valor
      var fragmentParams = fragment.split("&");

      // Crear un objeto para almacenar los parámetros
      var parametros = {};
      for (var i = 0; i < fragmentParams.length; i++) {
          var param = fragmentParams[i].split("=");
          parametros[param[0]] = param[1];
      }

      return parametros;
  } else {
      // Si no hay fragmento, devolver un objeto vacío
      return {};
  }
}

