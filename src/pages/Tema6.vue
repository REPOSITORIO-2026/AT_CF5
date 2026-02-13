<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>6</span></div>
        <h1>Implementación práctica de un sistema IoT básico</h1>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-4 my-lg-0 my-3">
          <p class="mb-0">
            La implementación de un sistema IoT básico permite a los estudiantes
            y profesionales familiarizarse con los componentes fundamentales de
            IoT y comprender cómo estos interactúan para crear soluciones de
            monitoreo y control en tiempo real. En este capítulo, se guía al
            lector en el diseño y configuración de un sistema básico de IoT para
            monitorear variables ambientales, como la temperatura y la humedad,
            a través de sensores conectados a una plataforma en la nube.
          </p>
        </div>
        <div class="col-lg-4 my-lg-0 my-3 j1">
          <img class="img-a img-t" src="@/assets/curso/temas/76.png" alt="" />
        </div>
        <div class="col-lg-4 my-lg-0 my-3">
          <div class="bgs p-3 brad h-100 j1">
            <p class="mb-0">
              El sistema IoT básico incluye los componentes esenciales de
              cualquier solución IoT: sensores, conectividad de red, una
              plataforma en la nube para almacenamiento y visualización de
              datos, y una interfaz para la configuración de alertas y
              notificaciones. Este capítulo detalla cada paso de la
              implementación, desde la selección de sensores y
              microcontroladores hasta la visualización de los datos en la nube,
              y proporciona una base práctica para realizar proyectos más
              complejos.
            </p>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div
        id="t_6_1"
        class="titulo-segundo color-acento-contenido"
        data-aos="zoom-in-left"
      >
        <h2>6.1 Materiales y componentes necesarios</h2>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-7 my-lg-0 my-3">
          <p>
            Para implementar un sistema IoT básico, se necesitan los siguientes
            componentes:
          </p>
          <AccordionRED tipo="a" clase-tarjeta="tarjeta bg7">
            <div titulo="Sensor de temperatura y humedad">
              Un sensor común para este tipo de proyectos es el DHT11 o DHT22,
              que mide tanto la temperatura como la humedad ambiental.
            </div>
            <div titulo="Microcontrolador o placa de desarrollo">
              La placa ESP32 o ESP8266 es ideal para proyectos IoT básicos
              debido a su capacidad de conexión Wi-Fi integrada y su
              compatibilidad con múltiples plataformas en la nube.
            </div>
            <div titulo="Plataforma en la nube">
              ThingSpeak es una opción recomendada para proyectos pequeños, ya
              que permite la visualización y almacenamiento de datos en tiempo
              real sin costo.
            </div>
            <div titulo="&lt;i&gt;Software&lt;/i&gt; de programación">
              Arduino IDE para programar el microcontrolador.
            </div>
            <div titulo="Conexión a internet">
              Para conectar el microcontrolador a la plataforma en la nube y
              transmitir los datos.
            </div>
          </AccordionRED>
        </div>
        <div class="col-lg-5 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/77.png" alt="" />
        </div>
      </div>
      <p>
        Estos materiales ofrecen una configuración económica y accesible,
        permitiendo a los estudiantes experimentar con la recopilación y
        visualización de datos sin necesidad de infraestructura costosa.
      </p>
      <Separador> </Separador>
      <div
        id="t_6_2"
        class="titulo-segundo color-acento-contenido"
        data-aos="zoom-in-left"
      >
        <h2>6.2 Configuración de <i>hardware</i> y <i>software</i></h2>
      </div>
      <p>
        El primer paso para implementar el sistema IoT es configurar el
        <em>Hardware</em>
        y conectar los componentes. A continuación, se describe el proceso de
        configuración:
      </p>
      <div class="row justify-content-center text-center mb-4">
        <div class="col-lg-4 my-3">
          <div class="bgw sha brad h-100 p-4">
            <img
              class="img-a img-t mb-4"
              src="@/assets/curso/temas/20.png"
              alt=""
            />
            <h5>Conectar el sensor al microcontrolador</h5>
            <p class="mb-0">
              Conecta el sensor DHT11 o DHT22 al microcontrolador ESP32 o
              ESP8266. En general, el sensor tiene tres pines: alimentación
              (VCC), tierra (GND) y salida de datos (DATA). El pin de datos se
              conecta a uno de los pines GPIO del microcontrolador para leer los
              datos de temperatura y humedad.
            </p>
          </div>
        </div>
        <div class="col-lg-4 my-3">
          <div class="bgw sha brad h-100 p-4">
            <img
              class="img-a img-t mb-4"
              src="@/assets/curso/temas/21.png"
              alt=""
            />
            <h5>Configurar el microcontrolador</h5>
            <p class="mb-0">
              Una vez que el sensor esté conectado, configura el
              microcontrolador para leer los datos del sensor y prepararlos para
              su transmisión a la nube. Para ello, es necesario programar el
              microcontrolador utilizando el <em>Software</em> Arduino IDE, que
              incluye bibliotecas para el sensor DHT y para conectarse a
              plataformas en la nube.
            </p>
          </div>
        </div>
        <div class="col-lg-4 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/78.png" alt="" />
        </div>
      </div>
      <Separador> </Separador>
      <div
        id="t_6_3"
        class="titulo-segundo color-acento-contenido"
        data-aos="zoom-in-left"
      >
        <h2>6.3 Programación del microcontrolador y envío de datos</h2>
      </div>
      <p>
        Una vez configurado el <em>hardware</em>, el siguiente paso es programar
        el microcontrolador para que lea los datos del sensor y los envíe a la
        plataforma en la nube. A continuación se detallan los pasos clave:
      </p>
      <TabsC class="color-acento-contenido mb-5">
        <div class="py-3 py-md-4 bg11" titulo="Escribir el código">
          <div class="row justify-content-center py-4">
            <div class="col-lg-4 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/45.png"
                alt=""
              />
            </div>
            <div class="col-lg-7 my-lg-0 my-3">
              <h5>Escribir el código</h5>
              <p>
                Utiliza Arduino IDE para escribir el código que permite al
                microcontrolador conectarse a la red Wi-Fi y enviar los datos a
                ThingSpeak. Asegúrate de incluir las bibliotecas necesarias,
                como la biblioteca para el sensor DHT y la biblioteca WiFi, para
                facilitar la conectividad y la lectura de datos.
              </p>
            </div>
          </div>
        </div>
        <div
          class="py-3 py-md-4 bg11"
          titulo="Subir el código al microcontrolador"
        >
          <div class="row justify-content-center py-4">
            <div class="col-lg-4 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/45.png"
                alt=""
              />
            </div>
            <div class="col-lg-7 my-lg-0 my-3">
              <h5>Subir el código al microcontrolador</h5>
              <p>
                Conecta el microcontrolador al ordenador y sube el código
                utilizando Arduino IDE. Una vez cargado, el microcontrolador
                comenzará a leer los datos del sensor y a enviarlos a la
                plataforma ThingSpeak.
              </p>
            </div>
          </div>
        </div>
        <div
          class="py-3 py-md-4 bg11"
          titulo="Configurar ThingSpeak para recibir los datos"
        >
          <div class="row justify-content-center py-4">
            <div class="col-lg-4 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/45.png"
                alt=""
              />
            </div>
            <div class="col-lg-7 my-lg-0 my-3">
              <h5>Configurar ThingSpeak para recibir los datos</h5>
              <p>
                Crea una cuenta en ThingSpeak y configura un canal para recibir
                los datos del microcontrolador. Cada canal en ThingSpeak tiene
                campos para diferentes tipos de datos, en este caso, uno para la
                temperatura y otro para la humedad. ThingSpeak genera una clave
                de API que se debe incluir en el código para autorizar el envío
                de datos desde el microcontrolador.
              </p>
            </div>
          </div>
        </div>
      </TabsC>
      <p>
        Este paso permite establecer una conexión entre el microcontrolador y la
        plataforma en la nube, asegurando que los datos se envíen correctamente
        y que puedan visualizarse en tiempo real.
      </p>
      <Separador> </Separador>
      <div
        id="t_6_4"
        class="titulo-segundo color-acento-contenido"
        data-aos="zoom-in-left"
      >
        <h2>6.4 Visualización y análisis de los datos en la nube</h2>
      </div>
      <div class="row justify-content-center align-items-center mb-4">
        <div class="col-lg-auto">
          <img class="img-a img-t" src="@/assets/curso/temas/20.png" alt="" />
        </div>
        <div class="col pt-lg-0 pt-md-4">
          <p class="mb-0">
            Después de configurar el microcontrolador y la plataforma
            ThingSpeak, los datos comenzarán a visualizarse en tiempo real en el
            dashboard de ThingSpeak. La plataforma permite generar gráficos y
            configurar paneles de control que muestran la evolución de la
            temperatura y humedad. Estos paneles ayudan a monitorear las
            condiciones ambientales de manera remota y ofrecen una base para
            analizar tendencias.
          </p>
        </div>
      </div>
      <div class="row justify-content-center text-center mb-4">
        <div class="col-lg-4 my-3">
          <div class="bgw sha brad h-100 p-4">
            <img
              class="img-a img-t mb-4"
              src="@/assets/curso/temas/20.png"
              alt=""
            />
            <h5>Configuración de gráficos</h5>
            <p class="mb-0">
              ThingSpeak permite crear gráficos de datos en tiempo real para
              cada campo configurado. Puedes ver cómo evolucionan la temperatura
              y la humedad a lo largo del tiempo, lo que facilita el análisis de
              patrones y variaciones.
            </p>
          </div>
        </div>
        <div class="col-lg-4 my-3">
          <div class="bgw sha brad h-100 p-4">
            <img
              class="img-a img-t mb-4"
              src="@/assets/curso/temas/21.png"
              alt=""
            />
            <h5>Configurar alertas y notificaciones</h5>
            <p class="mb-0">
              ThingSpeak ofrece la posibilidad de establecer alertas mediante
              aplicaciones externas, como MATLAB y servicios de mensajería, para
              que el sistema envíe notificaciones cuando se superen ciertos
              umbrales de temperatura o humedad.
            </p>
          </div>
        </div>
        <div class="col-lg-4 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/79.png" alt="" />
        </div>
      </div>
      <p>
        La visualización y análisis en la nube brindan al usuario la capacidad
        de monitorear variables de forma remota y actuar ante cualquier cambio
        significativo.
      </p>
      <Separador> </Separador>
      <div
        id="t_6_5"
        class="titulo-segundo color-acento-contenido"
        data-aos="zoom-in-left"
      >
        <h2>6.5 Implementación de un sistema de alertas básico</h2>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-7 my-lg-0 my-3">
          <p>
            Un sistema de IoT no solo se limita a la recopilación y
            visualización de datos, sino que también permite establecer un
            sistema de alertas que facilita la respuesta ante condiciones
            anormales. En este sistema IoT básico, se puede configurar una
            alerta para enviar una notificación cuando los niveles de
            temperatura o humedad superen los valores deseados.
          </p>
          <AccordionRED tipo="a" clase-tarjeta="tarjeta bg7">
            <div titulo="Definir umbrales de alerta">
              En el código del microcontrolador o en la plataforma ThingSpeak,
              establece los valores de temperatura y humedad que desencadenarán
              una alerta. Por ejemplo, si la temperatura excede los 30°C, el
              sistema puede enviar una notificación al usuario.
            </div>
            <div titulo="Configurar notificaciones">
              ThingSpeak permite integrar alertas mediante plataformas de
              comunicación como IFTTT (If This Then That), que envían correos
              electrónicos o mensajes de texto cuando se detecta una condición
              anormal. Esta funcionalidad es útil para procesos en los que se
              requiere un monitoreo continuo y la posibilidad de actuar ante
              cambios inmediatos en el entorno.
            </div>
          </AccordionRED>
        </div>
        <div class="col-lg-5 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/80.png" alt="" />
        </div>
      </div>
      <p>
        El sistema de alertas mejora la eficiencia del monitoreo, permitiendo a
        los usuarios tomar acciones rápidas y minimizar el impacto de
        condiciones desfavorables en el sistema.
      </p>
      <Separador> </Separador>
      <div
        id="t_6_6"
        class="titulo-segundo color-acento-contenido"
        data-aos="zoom-in-left"
      >
        <h2>6.6 Evaluación del sistema IoT y mejores prácticas</h2>
      </div>
      <div class="row justify-content-center mb-4 bgs p-4">
        <div class="col-lg-3 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/81.png" alt="" />
        </div>
        <div class="col-lg-9 my-lg-0 my-3">
          <p>
            Después de la implementación, es fundamental evaluar el rendimiento
            del sistema IoT y aplicar mejores prácticas para asegurar su
            eficiencia y durabilidad:
          </p>
          <ul class="lista-ul fa-ul">
            <li>
              <i class="fas fa-check-circle color1"></i
              ><span
                ><b>Monitorear la conectividad:</b> verifica que la conexión
                entre el microcontrolador y la plataforma en la nube sea
                estable. Esto puede implicar ajustes en la configuración de
                Wi-Fi o en la programación del microcontrolador.</span
              >
            </li>
            <li>
              <i class="fas fa-check-circle color1"></i
              ><span
                ><b>Calibración de sensores:</b> es importante calibrar
                periódicamente los sensores para garantizar la precisión de los
                datos. La calibración regular asegura que las lecturas de
                temperatura y humedad sean confiables y representativas.</span
              >
            </li>
            <li>
              <i class="fas fa-check-circle color1"></i
              ><span
                ><b>Optimizar el consumo de energía:</b> si el sistema IoT se
                utiliza en un entorno donde no hay acceso constante a la
                energía, se pueden aplicar técnicas de ahorro energético, como
                la reducción de la frecuencia de transmisión de datos o el uso
                de módulos de bajo consumo.</span
              >
            </li>
            <li>
              <i class="fas fa-check-circle color1"></i
              ><span
                ><b>Ampliar funcionalidades:</b> una vez implementado el sistema
                básico, se pueden agregar nuevas funcionalidades, como más
                sensores o capacidades de análisis predictivo, para obtener
                mayor control y precisión en el monitoreo.</span
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="titulo-sexto color-acento-contenido">
            <h5>Figura 6.</h5>
            <span
              >Resumen implementación práctica de un sistema básico IoT</span
            >
          </div>
          <div class="bgfig p-4 mb-1">
            <img
              class="img-a img-t"
              src="@/assets/curso/temas/82.svg"
              alt="El diagrama presenta un mapa conceptual que se divide en cinco secciones principales: una introducción que explica el propósito y la importancia de familiarizarse con los componentes IoT, el diseño y configuración del sistema (incluyendo monitoreo de variables y conectividad), los detalles de implementación paso a paso (desde la selección de sensores hasta la configuración de alertas), la base práctica para proyectos más complejos, y las conclusiones y recomendaciones para futuras implementaciones."
            />
          </div>
          <figcaption>Fuente: OIT, 2024.</figcaption>
        </div>
      </div>
      <div class="row justify-content-center mt-5">
        <div class="col-lg-4 my-3 j1">
          <img class="img-a img-t" src="@/assets/curso/temas/75.png" alt="" />
        </div>
        <div class="col-lg-8 my-3">
          <p>
            La implementación de un sistema IoT básico proporciona una
            experiencia práctica que permite comprender los componentes
            fundamentales de IoT y su aplicación en el monitoreo de variables
            ambientales. A través de la configuración de sensores, la
            programación del microcontrolador y la visualización de datos en la
            nube, los usuarios aprenden a construir un sistema de monitoreo
            remoto en tiempo real.
          </p>
          <p>
            Se recomiendan los siguientes recursos de acceso libre para
            complementar:
          </p>
          <div class="row justify-content-center">
            <div class="col-lg-6 my-3">
              <a
                class="anexo mb-3"
                href="https://www.youtube.com/watch?v=gbntchCgXSs"
                target="_blank"
              >
                <div class="anexo__icono">
                  <img src="@/assets/curso/temas/icono-link.svg" />
                </div>
                <div class="anexo__texto">
                  <p>
                    <b>Enlace web.</b> Video "ESP32 - Introducción y
                    aplicaciones - Guía completa"
                  </p>
                </div></a
              ><a class="anexo mb-3" href="https://wokwi.com/" target="_blank">
                <div class="anexo__icono">
                  <img src="@/assets/curso/temas/icono-link.svg" />
                </div>
                <div class="anexo__texto">
                  <p>
                    <b>Enlace web.</b> Simulador en línea "Wokwi IoT Simulator"
                  </p>
                </div></a
              >
            </div>
            <div class="col-lg-6 my-3">
              <a
                class="anexo mb-3"
                href="https://www.youtube.com/watch?v=M4mC9bPcVkI&t=64s"
                target="_blank"
              >
                <div class="anexo__icono">
                  <img src="@/assets/curso/temas/icono-link.svg" />
                </div>
                <div class="anexo__texto">
                  <p>
                    <b>Enlace web.</b> Video - ¿Cómo ahorrar energía eléctrica
                    usando IoT + IA?
                  </p>
                </div></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
