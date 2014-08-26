# MarkDoc (concept)
Esta es una prueba de concepto para crear un sistema de documentación de código JavaScript basada en Markdown, que permite al desarrollador decidir la composición final del documento o documentos.

MarkDoc no está vinculado direcamente al código, de forma que puedes escribir documentación en cualquier parte del fichero y decidir dónde debería incrustarse a través de las directivas `@md_page` y `@md_section`. De esta forma, MarkDoc no es un parser que simplemente muestra una lista de clases y métodos, sino que es una herramienta para ayudar a generar documentación completa para cualquier proyecto en JavaScript

##Features
- Cualquier texto puede ser formateado con Markdown
- Documentación de cualquier parte del código en cualquier posición
- Control de generación de la salida (ficheros, secciones y subsecciones)
- Integración con grunt
