<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>3</span></div>
        <h1>Gestión de bases de datos</h1>
      </div>
      <div class="bg11 mb-4">
        <div class="row justify-content-center">
          <div class="col-lg-8 my-3 j1">
            <div class="p-4">
              <p class="mb-0">
                Las tecnologías de comunicación son el núcleo que permite que
                los sistemas IoT funcionen de manera efectiva, ya que facilitan
                la transmisión de datos desde los sensores hacia las plataformas
                de gestión y análisis de información. En la gestión de procesos
                productivos, la elección de la tecnología de comunicación
                adecuada es fundamental para asegurar la precisión,
                confiabilidad y eficiencia del sistema IoT, ya que cada tipo de
                red tiene distintas características en términos de alcance,
                velocidad de transmisión, consumo de energía y costos
                operativos.
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <img class="img-a img-t" src="@/assets/curso/temas/43.png" alt="" />
          </div>
        </div>
      </div>
      <div class="row justify-content-center align-items-center mb-4">
        <div class="col-lg-auto">
          <img class="img-a img-t" src="@/assets/curso/temas/44.png" alt="" />
        </div>
        <div class="col pt-lg-0 pt-md-4">
          <p class="mb-0">
            Este capítulo explora las principales tecnologías de comunicación
            utilizadas en IoT, detalla sus características y discute su
            aplicabilidad en diferentes entornos productivos. Se pone especial
            énfasis en los protocolos más relevantes, como LoRaWAN, MQTT y
            ZigBee, los cuales son ampliamente empleados en sistemas IoT para la
            industria y la agroindustria debido a su flexibilidad y eficiencia.
          </p>
        </div>
      </div>
      <Separador> </Separador>
      <div
        id="t_3_1"
        class="titulo-segundo color-acento-contenido"
        data-aos="zoom-in-left"
      >
        <h2>3.1 Protocolos de comunicación IoT</h2>
      </div>
      <p>
        Los protocolos de comunicación en IoT determinan cómo se envían y
        reciben los datos entre dispositivos. La elección de un protocolo
        adecuado depende de varios factores, como el tipo de datos, la distancia
        entre dispositivos, el consumo de energía y la infraestructura
        disponible. A continuación, se describen algunos de los protocolos más
        comunes en sistemas IoT para la gestión de procesos productivos:
      </p>
      <TabsC class="color-acento-contenido mb-5">
        <div class="py-3 py-md-4 bg11" titulo="LoRa y LoRaWAN">
          <div class="row justify-content-center py-4">
            <div class="col-lg-4 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/45.png"
                alt=""
              />
            </div>
            <div class="col-lg-7 my-lg-0 my-3">
              <h5>LoRaWAN (<i>Long Range Wide Area Network</i>)</h5>
              <p>
                Es un protocolo de comunicación diseñado para aplicaciones IoT
                de largo alcance y bajo consumo de energía. Utiliza modulación
                LoRa, que permite enviar datos a distancias extremadamente
                largas (hasta 15 km en entornos rurales) y operar con muy baja
                potencia, lo cual es ideal para dispositivos con baterías de
                larga duración. LoRaWAN es ampliamente utilizado en entornos
                donde los dispositivos están distribuidos en áreas extensas,
                como la agricultura, ya que permite monitorear variables de
                campo, como la humedad del suelo y la temperatura, en tiempo
                real sin necesidad de infraestructura costosa.
              </p>
              <p>Características principales:</p>
              <ul class="lista-ul fa-ul">
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    ><b>Rango de comunicación:</b> hasta 15 km en áreas rurales
                    y 5 km en entornos urbanos.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    ><b>Consumo de energía:</b> extremadamente bajo, lo que
                    permite que los dispositivos funcionen por años con una sola
                    batería.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    ><b>Aplicaciones típicas:</b> monitoreo de cultivos, gestión
                    de recursos hídricos, control de variables en áreas remotas.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="py-3 py-md-4 bg11" titulo="MQTT">
          <div class="row justify-content-center py-4">
            <div class="col-lg-4 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/46.png"
                alt=""
              />
            </div>
            <div class="col-lg-7 my-lg-0 my-3">
              <h5>MQTT</h5>
              <p>
                Es un protocolo ligero de mensajería diseñado específicamente
                para redes de baja ancho de banda y dispositivos de bajo
                consumo. MQTT emplea un modelo de comunicación de
                publicación/suscripción, en el cual los dispositivos publican
                datos a un servidor (<em>broker</em>) que los distribuye a los
                dispositivos que están suscritos a esos datos. Este modelo es
                altamente escalable y confiable, lo que lo hace adecuado para
                aplicaciones de IoT en entornos productivos donde se requiere
                una transmisión de datos eficiente y control de dispositivos en
                tiempo real.
              </p>
              <p>Características principales:</p>
              <ul class="lista-ul fa-ul">
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    >Bajo consumo de ancho de banda, adecuado para redes de
                    comunicación limitadas.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    >Escalabilidad y fiabilidad en el envío de mensajes.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    ><b>Aplicaciones típicas:</b> gestión de datos en
                    plataformas en la nube, automatización industrial, monitoreo
                    en tiempo real.</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="py-3 py-md-4 bg11" titulo="ZigBee">
          <div class="row justify-content-center py-4">
            <div class="col-lg-4 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/47.png"
                alt=""
              />
            </div>
            <div class="col-lg-7 my-lg-0 my-3">
              <h5>ZigBee</h5>
              <p>
                Es un protocolo de comunicación de corto alcance y bajo consumo
                de energía, diseñado para redes de sensores de IoT. Opéra en la
                banda de frecuencia de 2.4 GHz y permite la creación de redes de
                malla, en las cuales los dispositivos pueden comunicarse entre
                sí para extender el rango de cobertura. ZigBee es ideal para
                aplicaciones de IoT en entornos industriales y de edificios
                inteligentes, donde se requiere una comunicación confiable entre
                dispositivos a corta distancia, como sensores de temperatura,
                iluminación y actuadores de control de acceso.
              </p>
              <p>Características principales:</p>
              <ul class="lista-ul fa-ul">
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    ><b>Rango de comunicación:</b> de 10 a 100 metros en
                    interiores.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    >Bajo consumo de energía y alta confiabilidad en redes de
                    malla.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    ><b>Aplicaciones típicas:</b> automatización de edificios,
                    control de iluminación y sistemas de sensores en áreas
                    industriales.</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="py-3 py-md-4 bg11" titulo="Wi-Fi">
          <div class="row justify-content-center py-4">
            <div class="col-lg-4 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/48.png"
                alt=""
              />
            </div>
            <div class="col-lg-7 my-lg-0 my-3">
              <h5>Wi-Fi</h5>
              <p>
                Aunque el Wi-Fi es ampliamente utilizado en redes domésticas y
                comerciales, también se utiliza en aplicaciones de IoT donde el
                consumo de energía no es una limitación y se requiere una alta
                tasa de transferencia de datos. En procesos productivos, el
                Wi-Fi permite conectar dispositivos IoT a una red local o a
                Internet para gestionar grandes volúmenes de datos en tiempo
                real. No obstante, el Wi-Fi tiene un rango de cobertura más
                limitado y consume más energía, por lo que su uso en IoT está
                generalmente restringido a entornos donde hay disponibilidad de
                energía continua, como plantas industriales o sistemas de
                monitoreo en interiores.
              </p>
              <p>Características principales:</p>
              <ul class="lista-ul fa-ul">
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    ><b>Rango de comunicación:</b> hasta 100 metros en
                    interiores.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    ><b>Alta velocidad de transferencia de datos:</b> ideal para
                    aplicaciones que requieren gran ancho de banda.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    ><b>Aplicaciones típicas:</b> monitoreo en interiores,
                    transmisión de datos en tiempo real en procesos de
                    manufactura.</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </TabsC>
      <Separador> </Separador>
      <div
        id="t_3_2"
        class="titulo-segundo color-acento-contenido"
        data-aos="zoom-in-left"
      >
        <h2>
          3.2 Comparación de protocolos de comunicación: alcances y limitaciones
        </h2>
      </div>
      <p>
        La elección de un protocolo de comunicación adecuado para un sistema IoT
        depende de varios factores, tales como el alcance necesario, el consumo
        de energía, la cantidad de datos a transmitir y el entorno en el cual se
        despliega el sistema. A continuación, se presenta una comparación de los
        protocolos mencionados:
      </p>
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="titulo-sexto color-acento-contenido">
            <h5>Tabla 2.</h5>
            <span>Comparación de protocolos de comunicación</span>
          </div>
          <div class="tabla-a color-acento-botones mb-5">
            <table>
              <caption>
                Fuente: OIT, 2024.
              </caption>
              <thead>
                <tr>
                  <th>Protocolo</th>
                  <th>Alcance</th>
                  <th>Consumo de energía</th>
                  <th>Ancho de banda</th>
                  <th>Aplicaciones principales</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>LoRaWAN</td>
                  <td>Hasta 15 km</td>
                  <td>Muy bajo</td>
                  <td>Bajo</td>
                  <td>
                    Monitoreo en áreas rurales, agricultura, gestión de recursos
                  </td>
                </tr>
                <tr>
                  <td>MQTT</td>
                  <td>Variable</td>
                  <td>Bajo</td>
                  <td>Bajo</td>
                  <td>
                    Plataformas en la nube, automatización industrial, IoT
                    general
                  </td>
                </tr>
                <tr>
                  <td>ZigBee</td>
                  <td>10-100 metros</td>
                  <td>Muy bajo</td>
                  <td>Medio</td>
                  <td>
                    Automatización de edificios, redes de sensores locales
                  </td>
                </tr>
                <tr>
                  <td>Wi-Fi</td>
                  <td>Hasta 100 m</td>
                  <td>Alto</td>
                  <td>Alto</td>
                  <td>
                    Monitoreo en interiores, transmisión de grandes volúmenes de
                    datos
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <p>
        Cada protocolo tiene fortalezas y limitaciones que se deben considerar
        en función de los requerimientos específicos del sistema IoT. Por
        ejemplo, LoRaWAN es ideal para áreas rurales y dispositivos de bajo
        consumo energético, mientras que Wi-Fi es más adecuado para entornos
        donde se necesita transmitir grandes volúmenes de datos y la energía es
        accesible.
      </p>
      <Separador> </Separador>
      <div
        id="t_3_3"
        class="titulo-segundo color-acento-contenido"
        data-aos="zoom-in-left"
      >
        <h2>
          3.3 Aplicación de tecnologías de comunicación en procesos productivos
        </h2>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-8 my-lg-0 my-3">
          <p>
            La implementación de tecnologías de comunicación en IoT para
            procesos productivos permite mejorar la eficiencia y precisión en la
            gestión de variables clave. A continuación, se destacan algunas
            aplicaciones típicas de estas tecnologías en diferentes sectores
            productivos:
          </p>
          <AccordionRED tipo="a" clase-tarjeta="tarjeta bg7">
            <div titulo="Agricultura de precisión">
              En la agricultura, los sensores de humedad, temperatura y
              nutrientes se distribuyen en grandes extensiones de terreno y
              envían datos a través de LoRaWAN hacia una plataforma central.
              Esta tecnología permite a los agricultores recibir información en
              tiempo real y optimizar el riego y fertilización de los cultivos,
              reduciendo así el uso de recursos y aumentando la productividad de
              las tierras.
            </div>
            <div titulo="Automatización industrial">
              En entornos industriales, el uso de MQTT facilita la transmisión
              de datos entre sensores, actuadores y sistemas de control en
              tiempo real. Los datos sobre variables como temperatura y presión
              se transmiten a un sistema SCADA (supervisión, control y
              adquisición de datos) que permite a los operadores supervisar y
              ajustar el proceso sin intervención directa.
            </div>
            <div titulo="Monitoreo de infraestructura y energía">
              Las redes de sensores ZigBee se utilizan en edificios inteligentes
              para controlar la iluminación, la climatización y los sistemas de
              acceso, reduciendo el consumo de energía y mejorando el confort de
              los usuarios. ZigBee es ideal para estas aplicaciones por su
              capacidad para crear redes de malla que cubren edificios completos
              y su bajo consumo energético.
            </div>
          </AccordionRED>
        </div>
        <div class="col-lg-4 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/49.png" alt="" />
        </div>
      </div>
      <Separador> </Separador>
      <div
        id="t_3_4"
        class="titulo-segundo color-acento-contenido"
        data-aos="zoom-in-left"
      >
        <h2>3.4 Ventajas de una conectividad eficiente en sistemas IoT</h2>
      </div>
      <p>
        La implementación de tecnologías de comunicación eficientes en sistemas
        IoT ofrece diversas ventajas en la gestión de procesos productivos:
      </p>
      <div class="row justify-content-center mb-4 bg2 p-4">
        <div class="col-lg-3 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/50.png" alt="" />
        </div>
        <div class="col-lg-9 my-lg-0 my-3">
          <ul class="lista-ul fa-ul">
            <li>
              <i class="fas fa-check-circle color1"></i
              ><span
                ><b>Optimización del consumo energético:</b> protocolos como
                LoRaWAN y ZigBee permiten que los dispositivos funcionen con
                baterías durante años, lo cual es ideal para entornos sin acceso
                a energía continua.</span
              >
            </li>
            <li>
              <i class="fas fa-check-circle color1"></i
              ><span
                ><b>Escalabilidad:</b> las redes IoT pueden expandirse
                fácilmente al añadir nuevos dispositivos que se conectan al
                sistema sin necesidad de infraestructura adicional.</span
              >
            </li>
            <li>
              <i class="fas fa-check-circle color1"></i
              ><span
                ><b>Reducción de costos operativos:</b> una conectividad
                eficiente permite reducir la intervención manual y optimizar el
                uso de recursos, disminuyendo así los costos de operación.</span
              >
            </li>
            <li>
              <i class="fas fa-check-circle color1"></i
              ><span
                ><b>Toma de decisiones en tiempo real:</b> la disponibilidad de
                datos en tiempo real permite tomar decisiones informadas de
                manera inmediata, mejorando la eficiencia y adaptabilidad de los
                procesos productivos.</span
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="titulo-sexto color-acento-contenido">
            <h5>Figura 3.</h5>
            <span>Resumen tecnologías de comunicación utilizadas en IoT</span>
          </div>
          <div class="bgfig p-4 mb-1">
            <img
              class="img-a img-t"
              src="@/assets/curso/temas/51.svg"
              alt="El diagrama presenta un mapa conceptual que se divide en cinco secciones principales: la importancia de las tecnologías de comunicación (que facilitan la transmisión de datos y aseguran la precisión), la elección de la tecnología adecuada (considerando alcance, velocidad, consumo y costos), las principales tecnologías utilizadas (como LoRaWAN, MQTT y ZigBee), énfasis en los protocolos más relevantes, y el uso común de estas tecnologías en la industria y agroindustria."
            />
          </div>
          <figcaption>Fuente: OIT, 2024.</figcaption>
        </div>
      </div>
      <p class="mt-5">
        Se recomiendan los siguientes recursos de acceso libre para complementar
      </p>
      <div class="row justify-content-center">
        <div class="col-lg-4 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/30.png" alt="" />
        </div>
        <div class="col-lg-4 my-3">
          <a
            class="anexo mb-3"
            href="https://www.youtube.com/watch?v=TE5__LDPtaw&t=24s"
            target="_blank"
          >
            <div class="anexo__icono">
              <img src="@/assets/curso/temas/icono-link.svg" />
            </div>
            <div class="anexo__texto">
              <p><b>Enlace web.</b> Video “Qué es Lora y LoraWan?”</p>
            </div></a
          ><a
            class="anexo mb-3"
            href="https://dspace.ups.edu.ec/bitstream/123456789/19349/1/UPS-CT008847.pdf"
            target="_blank"
          >
            <div class="anexo__icono">
              <img src="@/assets/curso/temas/icono-link.svg" />
            </div>
            <div class="anexo__texto">
              <p>
                <b>Enlace web.</b> Lectura - “Desarrollo de un manual de
                prácticas para el uso de equipos Lora Wan en redes de sensores
                inalámbricos”.
              </p>
            </div></a
          >
        </div>
        <div class="col-lg-4 my-3">
          <a
            class="anexo mb-3"
            href="https://www.tme.eu/es/news/library-articles/page/53063/no-solo-wi-fi-estandares-de-comunicacion-inalambrica-en-iot/"
            target="_blank"
          >
            <div class="anexo__icono">
              <img src="@/assets/curso/temas/icono-link.svg" />
            </div>
            <div class="anexo__texto">
              <p>
                <b>Enlace web.</b> “No solo wi-fi, estandares de comunicación
                inalambrica en IoT”:
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
  name: 'Tema3',
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
