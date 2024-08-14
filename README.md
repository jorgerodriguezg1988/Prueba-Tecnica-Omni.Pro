# Prueba-Tecnica-Omni.Pro
Prueba Técnica como aspirante al cargo de QA Engineer en Omni.Pro.

El objetivo de las pruebas en la página de Best Buy Canada es garantizar la funcionalidad y la usabilidad en diversos escenarios de usuario. Estas pruebas abarcan la simulación de procesos clave como el registro de usuario, la navegación a través de menús desplegables, y la búsqueda de productos. Se verifica la capacidad de interactuar con elementos móviles y la correcta visualización de información en diferentes resoluciones de pantalla. Además, se asegura que las funcionalidades, como la suscripción a boletines y la adición de productos al carrito, funcionen correctamente tanto en escritorio como en dispositivos móviles. Estas pruebas también incluyen la validación de la integración de componentes como el buscador y los filtros de productos.


1.	Historia de usuario: US-Desk-001 : SignUp
TC-001: Ingresar a la página web: Abrir la página web de registro.
TC-002: Aceptar Cookies: Aceptar las cookies que aparecen en la página.
TC-003: Click botón Account: Hacer clic en el botón de cuenta para iniciar el proceso de registro.
TC-004: Click en creación de nueva cuenta: Hacer clic en el enlace para crear una nueva cuenta.
TC-005: Diligenciamiento de formulario: Completar el formulario de registro con datos generados aleatoriamente.
TC-006: Suscripción a boletín vía email: Marcar la casilla para suscribirse al boletín de noticias.
TC-007: Click en Create Account: Hacer clic en el botón para crear una cuenta. Nota: Este paso puede requerir intervención manual debido a un captcha.
TC-008: Bienvenida: Verificar que se muestra un mensaje de bienvenida después de registrar la cuenta.

2.	Historia de usuario: US- Desk -002 : Simulación de compra de un celular
TC-001: Página principal y aceptar Cookies: Abrir la página principal de la tienda. Aceptar las cookies que aparecen en la página.
TC-002: Menú Cellphones: Hacer clic en el menú de celulares. Verificar que se muestra un enlace a la categoría de iPhones.
TC-003: Unlocked Phones On Sale: Hacer clic en el enlace de "Unlocked Phones On Sale". Verificar que se muestra el título "Unlocked Phones On Sale".
TC-004: iPhone: Hacer clic en la opción de iPhone en la navegación. Verificar que se muestra el título "Unlocked Phones On Sale".
TC-005: Get Shipped Checkbox: Marcar la casilla para opciones de envío.
TC-006: Seleccionar Celular: Hacer clic en el celular específico en la lista de productos. Verificar que el botón de añadir al carrito está visible.
TC-007: Click en carrito de compra: Hacer clic en el carrito de compra. Nota: El carrito de compras está restringido para pruebas de automatización.

3.	Historia de usuario: US- Desk -003 : Funcionamiento del buscador
TC-001: Página principal y aceptar Cookies: Abrir la página principal del sitio. Aceptar las cookies que aparecen en la página.
TC-002: Escribir en buscador y confirmar menú desplegable: Escribir "laptop" en el campo de búsqueda. Confirmar que aparece un enlace con el texto "laptop" en el menú desplegable.
TC-003: Click en botón de búsqueda (lupa): Hacer clic en el botón de búsqueda (ícono de lupa). Verificar que el título de la página de resultados de búsqueda es visible.
TC-004: Filtro: Laptop Windows: Hacer clic en el filtro de "Laptop Windows". Verificar que el filtro aplicado muestra "Windows" en el breadcrumb o en los resultados.

4.	Historia de usuario: US-Mobile-004 : SignUp
TC-001: Ingresar a la página web: Abrir la página web de registro.
TC-002: Aceptar Cookies: Aceptar las cookies que aparecen en la página. Verificar que el ícono de cuenta es visible.
TC-003: Click botón Account: Hacer clic en el ícono de cuenta. Verificar que el campo de correo electrónico de inicio de sesión es visible.
TC-004: Click en creación de nueva cuenta: Hacer clic en el enlace para crear una nueva cuenta. Verificar que el título de la página de creación de cuenta es visible.
TC-005: Diligenciamiento de formulario: Completar el formulario de registro con datos generados aleatoriamente: nombre, apellido, correo electrónico y contraseña.
TC-006: Suscripción a boletín vía email: Marcar la casilla para suscribirse al boletín de noticias.
TC-007: Click en Create Account: Hacer clic en el botón para crear una cuenta. Esperar 45 segundos para permitir intervención manual en caso de un captcha.
TC-008: Bienvenida: Verificar que el mensaje de bienvenida con el texto 'Welcome' se muestra después del registro de la cuenta.

5.	Historia de usuario: US-Mobile-005 : Navegación por menú desplegable
TC-001: Página principal y aceptar Cookies: Abrir la página web. Aceptar las cookies que aparecen en la página. Verificar que el ícono de cuenta es visible.
TC-002: Menú Cellphones: Hacer clic en el ícono del menú desplegable. Hacer clic en el enlace de "Cellphones". Verificar que el enlace de "Cellphones" es visible.
TC-003: Unlocked Phones On Sale: Hacer clic en el ícono del menú desplegable. Hacer clic en el enlace de "Unlocked Phones On Sale".

6.	Historia de usuario: US-Mobile-006 : Funcionamiento del buscador
TC-001: Página principal y aceptar Cookies: Abrir la página web. Aceptar las cookies que aparecen en la página. Verificar que el ícono de cuenta es visible.
TC-002: Escribir en buscador y confirmar menú desplegable: Escribir "laptop" en el campo de búsqueda. Verificar que el menú desplegable muestra un enlace relacionado con la búsqueda de "laptop".
TC-003: Click en botón de búsqueda (lupa): Hacer clic en el botón de búsqueda (ícono de lupa). Verificar que el elemento con la clase x-crumb es visible.
TC-004: Seleccionar primer elemento: Hacer clic en la sección del filtro. Verificar que el primer elemento en el contenedor de resultados es visible.
TC-005: Clic en Carrito de compras: Hacer clic en el primer elemento del contenedor de resultados. Esperar 5 segundos.

