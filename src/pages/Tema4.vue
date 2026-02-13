<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>4</span></div>
        <h1>Integración de IoT en procesos productivos</h1>
      </div>
      <div class="row bg6 align-items-center">
        <div class="px-lg-5 px-4">
          <div class="row justify-content-center mb-4">
            <div class="col-lg-4 my-lg-0 my-3 j1">
              <p class="mb-0">
                La integración de IoT en los procesos productivos permite
                mejorar la eficiencia, precisión y sostenibilidad de las
                operaciones industriales y agroindustriales. Al incorporar
                tecnologías de IoT, como sensores, actuadores y plataformas de
                comunicación, los procesos productivos pueden monitorizarse y
                controlarse en tiempo real, lo cual facilita la toma de
                decisiones basada en datos y reduce la necesidad de intervención
                humana. La integración adecuada de IoT en los procesos
                productivos requiere una comprensión profunda de los componentes
                del sistema, la arquitectura y los protocolos de comunicación,
                así como de las herramientas y técnicas necesarias para asegurar
                una conectividad confiable y continua.
              </p>
            </div>
            <div class="col-lg-4 my-lg-0 my-3 j1">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/52.png"
                alt=""
              />
            </div>
            <div class="col-lg-4 my-lg-0 my-3">
              <div class="bg2 p-3 brad h-100 j1">
                <p class="mb-0">
                  En este capítulo, se exploran las etapas clave para la
                  integración de IoT en sistemas productivos, desde la selección
                  y configuración de los sensores y actuadores hasta la
                  implementación de sistemas de monitoreo y control remoto.
                  También se analizan los desafíos y mejores prácticas para
                  asegurar una integración eficiente que optimice el rendimiento
                  del sistema y garantice la interoperabilidad entre
                  dispositivos.
                </p>
              </div>
            </div>
          </div>
          <Separador> </Separador>
          <div
            id="t_4_1"
            class="titulo-segundo color-acento-contenido"
            data-aos="zoom-in-left"
          >
            <h2>4.1 Configuración y puesta a punto de sensores y actuadores</h2>
          </div>
          <div class="row justify-content-center mb-4">
            <div class="col-lg-7 my-lg-0 my-3 j1">
              <p>
                La configuración y puesta a punto de sensores y actuadores es un
                paso esencial en la integración de IoT, ya que estos
                dispositivos capturan datos críticos de variables como
                temperatura, humedad, presión y nivel, o ejecutan acciones
                específicas en función de los datos recibidos. La selección de
                los sensores y actuadores adecuados dependerá de las variables a
                monitorizar y de los requisitos del proceso productivo. En este
                sentido, es importante considerar factores como la precisión, el
                rango de medición, la resistencia ambiental y el consumo
                energético.
              </p>
              <div class="bg1 p-4 brad">
                <p class="mb-0">
                  Una vez seleccionados, los sensores deben configurarse
                  correctamente para garantizar mediciones precisas y transmitir
                  datos en el formato adecuado. En general, la configuración de
                  sensores incluye la calibración y el ajuste de umbrales, como
                  puntos de alarma, que permiten alertar al sistema cuando se
                  detectan desviaciones críticas en las variables de control.
                  Los actuadores, por su parte, requieren una configuración de
                  sus parámetros operativos, como la velocidad, el rango de
                  movimiento o el tiempo de respuesta, para asegurar una
                  respuesta adecuada a las condiciones detectadas por los
                  sensores.
                </p>
              </div>
            </div>
            <div class="col-lg-5 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/53.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div
        id="t_4_2"
        class="titulo-segundo color-acento-contenido"
        data-aos="zoom-in-left"
      >
        <h2>4.2 Configuración de <i>gateways</i> y envío de datos a la nube</h2>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-5 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/54.png" alt="" />
        </div>
        <div class="col-lg-7 my-lg-0 my-3 j1">
          <p>
            Una vez que los sensores y actuadores están configurados, se
            requiere de una infraestructura de comunicación que permita
            transmitir los datos hacia una plataforma centralizada en la nube.
            Aquí es donde entran en juego los <em>gateways</em> IoT, que actúan
            como intermediarios entre los dispositivos de campo y la red de
            comunicación. Los <em>gateways</em> recogen los datos de los
            sensores y los envían a través de un protocolo de comunicación hacia
            la nube, donde se procesan y almacenan para su análisis.
          </p>
          <div class="bg1-br p-4 brad">
            <p class="mb-0">
              En la configuración de un <em>gateway</em> IoT, es crucial elegir
              un protocolo de comunicación que sea adecuado para el tipo de
              sistema y entorno operativo. Los protocolos de comunicación más
              comunes incluyen LoRaWAN, MQTT y ZigBee, los cuales permiten
              transmitir datos en redes de baja potencia y largo alcance. Una
              vez que los datos están en la nube, pueden visualizarse y
              gestionarse a través de plataformas IoT como ThingSpeak, AWS IoT o
              Azure IoT Hub, que ofrecen herramientas para el análisis de datos,
              la creación de paneles de control y la configuración de alertas
              automáticas en tiempo real.
            </p>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div
        id="t_4_3"
        class="titulo-segundo color-acento-contenido"
        data-aos="zoom-in-left"
      >
        <h2>4.3 Monitoreo y control de sistemas en tiempo real</h2>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-4 my-lg-0 my-3">
          <p class="mb-0">
            Una de las principales ventajas de la integración de IoT en procesos
            productivos es la capacidad de monitorear y controlar el sistema en
            tiempo real. El monitoreo en tiempo real permite observar el estado
            de las variables de proceso y detectar cualquier anomalía de
            inmediato, lo que facilita la toma de decisiones rápidas y basadas
            en datos. Las plataformas IoT permiten visualizar los datos
            recopilados en tiempo real mediante gráficos y dashboards
            personalizados, lo que brinda una visión clara de las operaciones y
            ayuda a identificar patrones y tendencias.
          </p>
        </div>
        <div class="col-lg-4 my-lg-0 my-3 j1">
          <img class="img-a img-t" src="@/assets/curso/temas/55.png" alt="" />
        </div>
        <div class="col-lg-4 my-lg-0 my-3">
          <div class="bgs p-3 brad h-100 j1">
            <p class="mb-0">
              El control en tiempo real, por otro lado, permite ajustar los
              parámetros de los actuadores automáticamente para mantener las
              variables dentro de los rangos deseados. Este control puede
              llevarse a cabo mediante algoritmos de control predefinidos o
              mediante inteligencia artificial, que ajusta las respuestas del
              sistema de manera dinámica en función de las condiciones
              cambiantes del entorno. Por ejemplo, en una operación de riego
              automatizado, el sistema puede ajustar la cantidad de agua en
              función de la humedad del suelo y la temperatura ambiente,
              asegurando un uso eficiente del recurso.
            </p>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div
        id="t_4_4"
        class="titulo-segundo color-acento-contenido"
        data-aos="zoom-in-left"
      >
        <h2>
          4.4 Desafíos y mejores prácticas para la integración de IoT en
          procesos productivos
        </h2>
      </div>
      <p>
        La integración de IoT en sistemas productivos plantea ciertos desafíos
        que deben considerarse para asegurar una implementación exitosa:
      </p>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-8 my-lg-0 my-3">
          <AccordionRED tipo="a" clase-tarjeta="tarjeta bg7">
            <div titulo="Interoperabilidad entre dispositivos">
              En un sistema IoT, es común que existan dispositivos de distintos
              fabricantes y tecnologías. Asegurar que todos los dispositivos
              puedan comunicarse y trabajar en conjunto es un desafío
              importante. Las mejores prácticas recomiendan optar por estándares
              abiertos y protocolos de comunicación compatibles para asegurar la
              interoperabilidad.
            </div>
            <div titulo="Seguridad de datos">
              La transmisión y almacenamiento de datos en la nube implica
              riesgos de seguridad que pueden comprometer la integridad del
              sistema. La encriptación de datos, la autenticación de
              dispositivos y el monitoreo de amenazas son prácticas esenciales
              para proteger la infraestructura IoT de posibles ataques.
            </div>
            <div titulo="Escalabilidad del sistema">
              A medida que el sistema productivo crece, es probable que se
              necesite añadir nuevos sensores y actuadores. Implementar una
              infraestructura escalable que permita integrar nuevos dispositivos
              sin interrupciones ni modificaciones costosas es clave para
              asegurar que el sistema pueda adaptarse a las necesidades futuras.
            </div>
            <div titulo="Gestión de energía">
              En entornos remotos o de difícil acceso, muchos dispositivos IoT
              funcionan con baterías de larga duración. Implementar protocolos
              de comunicación de bajo consumo y optimizar la configuración de
              los sensores para reducir la transmisión de datos son prácticas
              importantes para prolongar la vida útil de los dispositivos en el
              campo.
            </div>
            <div titulo="Mantenimiento y soporte técnico">
              Aunque la mayoría de los sistemas IoT están diseñados para operar
              de manera autónoma, es importante contar con planes de
              mantenimiento y soporte técnico. La calibración periódica de los
              sensores y la actualización del firmware de los dispositivos son
              medidas que ayudan a mantener el sistema operativo y asegurar la
              precisión de los datos.
            </div>
          </AccordionRED>
        </div>
        <div class="col-lg-4 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/56.png" alt="" />
        </div>
      </div>
      <Separador> </Separador>
      <div
        id="t_4_5"
        class="titulo-segundo color-acento-contenido"
        data-aos="zoom-in-left"
      >
        <h2>4.5 Aplicación de IoT en procesos productivos</h2>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-5 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/57.png" alt="" />
        </div>
        <div class="col-lg-7 my-lg-0 my-3 j1">
          <p>
            La aplicación de IoT en procesos productivos ha revolucionado la
            manera en que las industrias gestionan y optimizan sus operaciones.
            IoT permite conectar dispositivos, sensores y sistemas de control,
            transformando los datos recolectados en información útil para la
            toma de decisiones. En entornos productivos, como la agricultura de
            precisión, la manufactura y la gestión de infraestructura, IoT
            permite monitorear y controlar variables críticas en tiempo real, lo
            cual mejora la eficiencia, reduce costos y minimiza el impacto
            ambiental.
          </p>
          <div class="bg1-br p-4 brad">
            <p class="mb-0">
              La capacidad de recopilar datos en tiempo real permite a los
              operadores no solo identificar y corregir anomalías de inmediato,
              sino también optimizar recursos y prever fallas en los equipos
              mediante mantenimiento predictivo. En sectores como la
              agricultura, por ejemplo, los sensores IoT ofrecen una visión
              detallada de las condiciones del suelo y el clima, lo que permite
              a los agricultores ajustar prácticas de riego y fertilización para
              maximizar la producción y minimizar el desperdicio de recursos. En
              la industria manufacturera, el monitoreo constante de las máquinas
              permite reducir los tiempos de inactividad y prolongar la vida
              útil de los equipos, lo cual es fundamental para la rentabilidad
              operativa.
            </p>
          </div>
        </div>
      </div>
      <div class="row bg10 align-items-center">
        <div class="col-lg-12 col-12 px-lg-5 px-4">
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-12">
              <div class="bgw brad p-5 my-5">
                <CarouselRED tipo="b">
                  <div class="row justify-content-center">
                    <div class="col-lg-6 my-2">
                      <h5 class="mb-4">Agricultura de precisión</h5>
                      <p>
                        En la agricultura de precisión, IoT permite gestionar
                        los recursos de manera eficiente al monitorear el suelo
                        y las condiciones climáticas en tiempo real. Sensores de
                        humedad, temperatura y nutrientes se instalan en el
                        campo y se conectan a una plataforma IoT que permite al
                        agricultor optimizar el riego, la fertilización y otras
                        labores. De esta forma, se logra una mayor productividad
                        y sostenibilidad del cultivo.
                      </p>
                    </div>
                    <div class="col-lg-5 my-2">
                      <img
                        class="img-a img-t"
                        src="@/assets/curso/temas/58.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-lg-6 my-2">
                      <h5 class="mb-4">Industria manufacturera</h5>
                      <p>
                        En la manufactura, IoT permite supervisar el estado de
                        las máquinas y realizar un mantenimiento predictivo.
                        Sensores de vibración y temperatura pueden detectar
                        posibles fallos en los equipos y alertar al sistema
                        antes de que ocurra una avería. Este tipo de monitoreo
                        reduce los tiempos de inactividad y extiende la vida
                        útil de los activos, lo cual resulta en un ahorro
                        significativo de costos y recursos.
                      </p>
                    </div>
                    <div class="col-lg-5 my-2">
                      <img
                        class="img-a img-t"
                        src="@/assets/curso/temas/59.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-lg-6 my-2">
                      <h5 class="mb-4">Gestión de infraestructura y energía</h5>
                      <p>
                        IoT también se aplica en la gestión de infraestructuras,
                        como edificios inteligentes, donde los sensores de luz,
                        temperatura y ocupación ayudan a gestionar el uso de
                        energía de manera eficiente. Por ejemplo, los sensores
                        pueden ajustar automáticamente el sistema de
                        calefacción, ventilación y aire acondicionado (HVAC) en
                        función de la ocupación del edificio, lo que permite
                        reducir el consumo de energía y mejorar el confort de
                        los ocupantes.
                      </p>
                    </div>
                    <div class="col-lg-5 my-2">
                      <img
                        class="img-a img-t"
                        src="@/assets/curso/temas/60.png"
                        alt=""
                      />
                    </div>
                  </div>
                </CarouselRED>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div
        id="t_4_6"
        class="titulo-segundo color-acento-contenido"
        data-aos="zoom-in-left"
      >
        <h2>4.6 Ventajas de la integración de IoT en procesos productivos</h2>
      </div>
      <p>
        La integración de IoT en los procesos productivos ofrece diversas
        ventajas que impactan positivamente en la eficiencia, sostenibilidad y
        rentabilidad de las operaciones:
      </p>
      <div class="row justify-content-center mb-4 bgs p-4">
        <div class="col-lg-3 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/61.png" alt="" />
        </div>
        <div class="col-lg-9 my-lg-0 my-3">
          <ul class="lista-ul fa-ul">
            <li>
              <i class="fas fa-check-circle color1"></i
              ><span
                ><b>Optimización de recursos:</b> el monitoreo en tiempo real
                permite ajustar los recursos de manera precisa, optimizando el
                uso de agua, energía y otros insumos, lo que reduce costos y
                minimiza el impacto ambiental.</span
              >
            </li>
            <li>
              <i class="fas fa-check-circle color1"></i
              ><span
                ><b>Mantenimiento predictivo:</b> la capacidad de detectar
                fallos potenciales en los equipos permite realizar un
                mantenimiento preventivo, reduciendo el tiempo de inactividad y
                prolongando la vida útil de los activos.</span
              >
            </li>
            <li>
              <i class="fas fa-check-circle color1"></i
              ><span
                ><b>Toma de decisiones basada en datos:</b> la recopilación y
                análisis de datos en tiempo real permite a los operadores tomar
                decisiones informadas y mejorar continuamente el proceso.</span
              >
            </li>
            <li>
              <i class="fas fa-check-circle color1"></i
              ><span
                ><b>Automatización de procesos:</b> al permitir un control
                automático de variables, IoT facilita la automatización de
                tareas, lo cual reduce la dependencia de intervención humana y
                mejora la precisión y consistencia del proceso.</span
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="titulo-sexto color-acento-contenido">
            <h5>Figura 4.</h5>
            <span>Resumen integración de IoT en procesos productivos.</span>
          </div>
          <div class="bgfig p-4 mb-1">
            <img
              class="img-a img-t"
              src="@/assets/curso/temas/62.svg"
              alt="El diagrama presenta un mapa conceptual que se divide en cuatro secciones principales: los beneficios de la integración (que incluye mejora de eficiencia y sostenibilidad), los componentes clave (sensores, actuadores y plataformas de comunicación), las etapas clave para la integración (desde la selección de sensores hasta la toma de decisiones), y los desafíos y mejores prácticas (incluyendo aspectos técnicos, de conectividad y seguridad)."
            />
          </div>
          <figcaption>Fuente: OIT, 2024.</figcaption>
        </div>
      </div>
      <p class="mt-5">
        Este capítulo proporciona una guía completa para la integración de IoT
        en procesos productivos, desde la configuración de dispositivos hasta el
        monitoreo y control en tiempo real. Estas habilidades permitirán a los
        estudiantes aplicar IoT en diversos sectores, optimizando recursos y
        mejorando la eficiencia operativa de los sistemas en los que trabajen.
      </p>
      <p>
        Se recomiendan los siguientes recursos de acceso libre para complementar
      </p>
      <div class="row justify-content-center">
        <div class="col-lg-4 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/30.png" alt="" />
        </div>
        <div class="col-lg-4 my-3">
          <a
            class="anexo mb-3"
            href="https://revistascientificas.cuc.edu.co/CESTA/article/view/3978/4013"
            target="_blank"
          >
            <div class="anexo__icono">
              <img src="@/assets/curso/temas/icono-link.svg" />
            </div>
            <div class="anexo__texto">
              <p>
                <b>Enlace web.</b> Artículo técnico - "La integración de las TIC
                en la producción Agrícola”
              </p>
            </div></a
          ><a
            class="anexo mb-3"
            href="https://www.youtube.com/watch?v=qVhRbyPsh7Q"
            target="_blank"
          >
            <div class="anexo__icono">
              <img src="@/assets/curso/temas/icono-link.svg" />
            </div>
            <div class="anexo__texto">
              <p>
                <b>Enlace web.</b> Video educativo- “Supervisión automática de
                maquinaria: Mantenimiento predictivo y eficiencia energética"
              </p>
            </div></a
          >
        </div>
        <div class="col-lg-4 my-3">
          <a
            class="anexo mb-3"
            href="https://openaccess.uoc.edu/server/api/core/bitstreams/5942ab0a-6557-4dc3-b345-78e2f5a29244/content"
            target="_blank"
          >
            <div class="anexo__icono">
              <img src="@/assets/curso/temas/icono-link.svg" />
            </div>
            <div class="anexo__texto">
              <p>
                <b>Enlace web.</b> Manual técnico- "Análisis de sistemas IoT en
                entorno agrícola"
              </p>
            </div></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema4',
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
