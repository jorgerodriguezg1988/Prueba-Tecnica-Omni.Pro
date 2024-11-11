# Prueba Técnica Omni.Pro

## Prueba Técnica como aspirante al cargo de QA Engineer en Omni.Pro.

El objetivo de las pruebas en la página de Best Buy Canada (https://www.bestbuy.ca/en-ca) es garantizar la funcionalidad y la usabilidad en diversos escenarios de usuario. Estas pruebas abarcan la simulación de procesos clave como el registro de usuario, la navegación a través de menús desplegables, y la búsqueda de productos. Se verifica la capacidad de interactuar con elementos móviles y la correcta visualización de información en diferentes resoluciones de pantalla. Además, se asegura que las funcionalidades, como la suscripción a boletines y la adición de productos al carrito, funcionen correctamente tanto en escritorio como en dispositivos móviles. Estas pruebas también incluyen la validación de la integración de componentes como el buscador y los filtros de productos. El resultado de las pruebas se evidencia de manera dinámica por medio de la herramienta Allure, que proporciona informes detallados y visualizaciones interactivas de los resultados.

### Repositorio: 
https://github.com/jorgerodriguezg1988/Prueba-Tecnica-Omni.Pro
### Reporte Allure Entregable (Descargar y abrir):
https://github.com/jorgerodriguezg1988/Prueba-Tecnica-Omni.Pro/blob/main/Allure%20Report.html




## Tecnologías, Herramientas y Patrones de diseño utilizados

Este proyecto de pruebas técnicas se desarrolló utilizando las siguientes herramientas y tecnologías:

- **Cypress**: Herramienta de pruebas de integración y extremo a extremo para aplicaciones web.
- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **JavaScript**: Lenguaje de programación utilizado para escribir las pruebas y scripts.
- **VSCode**: Editor de código utilizado para el desarrollo.
- **GitHub**: Plataforma de alojamiento de código fuente y control de versiones que facilita la colaboración en proyectos de software.
- **Allure**: Herramienta de generación de informes que proporciona una vista detallada y dinámica de los resultados de las pruebas automatizadas.
- **Page Object Model (POM)**: Patrón de diseño utilizado para estructurar el código de prueba de manera eficiente y mantenible.

Estas herramientas y prácticas se emplearon para asegurar la cobertura, funcionalidad y mantenibilidad de las pruebas automatizadas.

## Pre-requisitos y Dependiencias
- **Editor de codigo fuente**: Cual sea de su preferencia.
- **NodeJS 20.16.2**: Se debe instalar desde su pagina oficina de acuerdo al sistema operativo del equipo donde se ejecutara el proyecto. (https://nodejs.org/en)
- **Cypress 13.13.2**: Se instala por medio del comando: 'npm install cypress'
- **JAVA_PATH**: Descargar JDK 22 desde su pagina oficial y configurar el JAVA_PATH para el funcionamiento de los reportes Allure.
- **Allure-commandline 2.30.0**: Se instala por medio del comando 'npm i allure-commandline'
- **@mmisty/cypress-allure-adapter 2.6.2**: Se instala por medio del comando 'npm i @mmisty/cypress-allure-adapter'
- **faker-js/faker 8.4.1**: Se instala por medio del comando 'npm i @faker-js/faker'

## Lista de Scripts Cypress para ejecucion secuencial:

NOTA: usando 'npm run (nombre del script negrita)' se ejecutará el comando cypress de manera abreviada o de lo contrario simplemente se pega en la consola de comandos el script completo que esta despues de los dos puntos:

- **`clear_report`**: `npx rimraf ./allure-report`  
  Este script elimina la carpeta `allure-report`, que contiene los reportes generados anteriormente por Allure. `rimraf` es una herramienta que permite eliminar directorios y sus contenidos de forma segura.

- **`clear_results`**: `npx rimraf ./allure-results`  
  Este script elimina la carpeta `allure-results`, donde se almacenan los resultados de las pruebas generados por Cypress en formato compatible con Allure. Es útil para limpiar los resultados de pruebas previas antes de ejecutar nuevas pruebas.

- **`run_test`**: `npx cypress run --headed --env allure=true`  
  Este script ejecuta las pruebas de Cypress en modo "headed", es decir, con una interfaz gráfica visible durante la ejecución. La opción `--env allure=true` habilita la generación de resultados en formato Allure, que se utilizan para la creación de reportes detallados.

- **`gen_report`**: `npx allure generate allure-results -o allure-report --clean`  
  Este script genera el reporte de Allure a partir de los resultados almacenados en la carpeta `allure-results`. El reporte se guarda en la carpeta `allure-report`, y la opción `--clean` asegura que cualquier reporte previo en la carpeta de destino sea eliminado antes de la generación del nuevo reporte.

- **`gen_report_onefile`**: `npx allure generate --single-file allure-results -o allure-report --clean`  
  Este script genera un reporte de Allure en un único archivo, en lugar de una estructura de múltiples archivos. La opción `--single-file` indica que el reporte debe ser consolidado en un solo archivo, lo cual puede facilitar la visualización y el manejo del reporte. Al igual que el script anterior, utiliza `--clean` para limpiar los reportes previos.

- **`open_report`**: `npx allure open`  
  Este script abre el reporte generado por Allure en el navegador predeterminado. Permite visualizar los resultados de las pruebas y los detalles de los reportes de manera interactiva.

- **`full_test`**: `npm run clear_report && npm run clear_results && npm run run_test && npm run gen_report && npm run open_report`  
  Este script ejecuta una secuencia completa de pruebas y generación de reportes.

  EJEMPLO (son el mismo comando):
  - npm run full_test
  - npm run clear_report && npm run clear_results && npm run run_test && npm run gen_report && npm run open_report
  
  

# Casos de prueba


## Responsive Desktop

## Historia de usuario: US-Desk-001 : SignUp

- **TC-001: Ingresar a la página web:** Abrir la página web de registro.
- **TC-002: Aceptar Cookies:** Aceptar las cookies que aparecen en la página.
- **TC-003: Click botón Account:** Hacer clic en el botón de cuenta para iniciar el proceso de registro.
- **TC-004: Click en creación de nueva cuenta:** Hacer clic en el enlace para crear una nueva cuenta.
- **TC-005: Diligenciamiento de formulario:** Completar el formulario de registro con datos generados aleatoriamente.
- **TC-006: Suscripción a boletín vía email:** Marcar la casilla para suscribirse al boletín de noticias.
- **TC-007: Click en Create Account:** Hacer clic en el botón para crear una cuenta. Nota: Este paso puede requerir intervención manual debido a un captcha.
- **TC-008: Bienvenida:** Verificar que se muestra un mensaje de bienvenida después de registrar la cuenta.

## Historia de usuario: US-Desk-002 : Simulación de compra de un celular

- **TC-001: Página principal y aceptar Cookies:** Abrir la página principal de la tienda. Aceptar las cookies que aparecen en la página.
- **TC-002: Menú Cellphones:** Hacer clic en el menú de celulares. Verificar que se muestra un enlace a la categoría de iPhones.
- **TC-003: Unlocked Phones On Sale:** Hacer clic en el enlace de "Unlocked Phones On Sale". Verificar que se muestra el título "Unlocked Phones On Sale".
- **TC-004: iPhone:** Hacer clic en la opción de iPhone en la navegación. Verificar que se muestra el título "Unlocked Phones On Sale".
- **TC-005: Get Shipped Checkbox:** Marcar la casilla para opciones de envío.
- **TC-006: Seleccionar Celular:** Hacer clic en el celular específico en la lista de productos. Verificar que el botón de añadir al carrito está visible.
- **TC-007: Click en carrito de compra:** Hacer clic en el carrito de compra. Nota: El carrito de compras está restringido para pruebas de automatización.

## Historia de usuario: US-Desk-003 : Funcionamiento del buscador

- **TC-001: Página principal y aceptar Cookies:** Abrir la página principal del sitio. Aceptar las cookies que aparecen en la página.
- **TC-002: Escribir en buscador y confirmar menú desplegable:** Escribir "laptop" en el campo de búsqueda. Confirmar que aparece un enlace con el texto "laptop" en el menú desplegable.
- **TC-003: Click en botón de búsqueda (lupa):** Hacer clic en el botón de búsqueda (ícono de lupa). Verificar que el título de la página de resultados de búsqueda es visible.
- **TC-004: Filtro: Laptop Windows:** Hacer clic en el filtro de "Laptop Windows". Verificar que el filtro aplicado muestra "Windows" en el breadcrumb o en los resultados.



## Responsive Mobile

## Historia de usuario: US-Mobile-004 : SignUp

- **TC-001: Ingresar a la página web:** Abrir la página web de registro.
- **TC-002: Aceptar Cookies:** Aceptar las cookies que aparecen en la página. Verificar que el ícono de cuenta es visible.
- **TC-003: Click botón Account:** Hacer clic en el ícono de cuenta. Verificar que el campo de correo electrónico de inicio de sesión es visible.
- **TC-004: Click en creación de nueva cuenta:** Hacer clic en el enlace para crear una nueva cuenta. Verificar que el título de la página de creación de cuenta es visible.
- **TC-005: Diligenciamiento de formulario:** Completar el formulario de registro con datos generados aleatoriamente: nombre, apellido, correo electrónico y contraseña.
- **TC-006: Suscripción a boletín vía email:** Marcar la casilla para suscribirse al boletín de noticias.
- **TC-007: Click en Create Account:** Hacer clic en el botón para crear una cuenta. Esperar 45 segundos para permitir intervención manual en caso de un captcha.
- **TC-008: Bienvenida:** Verificar que el mensaje de bienvenida con el texto 'Welcome' se muestra después del registro de la cuenta.

## Historia de usuario: US-Mobile-005 : Navegación por menú desplegable

- **TC-001: Página principal y aceptar Cookies:** Abrir la página web. Aceptar las cookies que aparecen en la página. Verificar que el ícono de cuenta es visible.
- **TC-002: Menú Cellphones:** Hacer clic en el ícono del menú desplegable. Hacer clic en el enlace de "Cellphones". Verificar que el enlace de "Cellphones" es visible.
- **TC-003: Unlocked Phones On Sale:** Hacer clic en el ícono del menú desplegable. Hacer clic en el enlace de "Unlocked Phones On Sale".

## Historia de usuario: US-Mobile-006 : Funcionamiento del buscador

- **TC-001: Página principal y aceptar Cookies:** Abrir la página web. Aceptar las cookies que aparecen en la página. Verificar que el ícono de cuenta es visible.
- **TC-002: Escribir en buscador y confirmar menú desplegable:** Escribir "laptop" en el campo de búsqueda. Verificar que el menú desplegable muestra un enlace relacionado con la búsqueda de "laptop".
- **TC-003: Click en botón de búsqueda (lupa):** Hacer clic en el botón de búsqueda (ícono de lupa). Verificar que el elemento con la clase x-crumb es visible.
- **TC-004: Seleccionar primer elemento:** Hacer clic en la sección del filtro. Verificar que el primer elemento en el contenedor de resultados es visible.
- **TC-005: Clic en Carrito de compras:** Hacer clic en el primer elemento del contenedor de resultados. Esperar 5 segundos.
