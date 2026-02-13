<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>2</span></div>
        <h1>Control de variables en procesos productivos automatizados</h1>
      </div>
      <div class="row bg6 align-items-center">
        <div class="px-lg-5 px-4">
          <div class="row justify-content-center mb-4">
            <div class="col-lg-3 my-lg-0 my-3 j1">
              <p class="mb-0">
                El control de variables en procesos productivos es una práctica
                esencial para garantizar que los sistemas funcionen dentro de
                los parámetros establecidos, asegurando así la eficiencia,
                calidad y sostenibilidad del proceso. En la industria moderna,
                la automatización ha permitido implementar sistemas de control
                avanzados que monitorean y ajustan continuamente variables
                críticas, minimizando la intervención humana y optimizando el
                rendimiento.
              </p>
            </div>
            <div class="col-lg-4 my-lg-0 my-3 j1">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/31.png"
                alt=""
              />
            </div>
            <div class="col-lg-5 my-lg-0 my-3">
              <div class="bg2 p-3 brad h-100 j1">
                <p class="mb-0">
                  En un entorno productivo, el término “variable” se refiere a
                  cualquier parámetro del proceso que deba mantenerse o
                  controlarse para alcanzar un rendimiento óptimo. Entre las
                  variables más comunes se encuentran la temperatura, la
                  humedad, el pH, la presión, el flujo, el nivel y la
                  conductividad, que impactan directamente en la calidad del
                  producto final y la eficiencia del proceso. En este capítulo
                  se profundiza en la importancia del control de variables en
                  sistemas automatizados, se analizan las principales variables
                  de control y se presentan herramientas para su monitoreo en
                  tiempo real.
                </p>
              </div>
            </div>
          </div>
          <Separador> </Separador>
          <div
            id="t_2_1"
            class="titulo-segundo color-acento-contenido"
            data-aos="zoom-in-left"
          >
            <h2>
              2.1 Importancia del monitoreo de variables en procesos productivos
            </h2>
          </div>
          <div class="row justify-content-center mb-4">
            <div class="col-lg-7 my-lg-0 my-3">
              <p>
                El monitoreo de variables es fundamental en los sistemas de
                producción porque permite mantener el proceso dentro de las
                condiciones ideales, evitando desajustes que puedan afectar la
                calidad, seguridad o eficiencia. La automatización en la gestión
                de variables no solo mejora el rendimiento del sistema, sino que
                también permite un uso más eficiente de los recursos. Por
                ejemplo, en la agricultura, el monitoreo constante de la humedad
                del suelo ayuda a reducir el consumo de agua al aplicar riego
                solo cuando es necesario, lo que no solo conserva el recurso
                sino que también optimiza el crecimiento del cultivo.
              </p>
              <div class="bg1 p-4 brad">
                <p class="mb-0">
                  El monitoreo en tiempo real permite detectar y responder de
                  inmediato a condiciones fuera de los parámetros establecidos,
                  minimizando las pérdidas y maximizando la producción. Esto es
                  particularmente relevante en sectores sensibles a las
                  condiciones ambientales, como la agroindustria y la
                  manufactura de alimentos, donde los cambios en temperatura o
                  humedad pueden afectar significativamente la calidad del
                  producto final. Además, en sistemas críticos, el monitoreo de
                  variables proporciona una base para realizar un mantenimiento
                  predictivo, anticipando posibles fallos y asegurando la
                  continuidad operativa.
                </p>
              </div>
            </div>
            <div class="col-lg-5 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/32.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div
        id="t_2_2"
        class="titulo-segundo color-acento-contenido"
        data-aos="zoom-in-left"
      >
        <h2>2.2 Principales variables de control en procesos productivos</h2>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-4 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/33.png" alt="" />
        </div>
        <div class="col-lg-8 my-lg-0 my-3">
          <p>
            El tipo de variables a monitorear y controlar depende del sector y
            del tipo de proceso productivo. A continuación, se presentan algunas
            de las variables más comunes y su relevancia en distintos contextos
            productivos:
          </p>
          <AccordionRED tipo="a" clase-tarjeta="tarjeta bg7">
            <div titulo="Temperatura">
              Es una de las variables más controladas en la industria, ya que
              afecta directamente la reacción química, la estabilidad de los
              materiales y la eficiencia de los equipos. En la agroindustria, la
              temperatura ambiental y del suelo influye en el crecimiento de los
              cultivos, y en la manufactura es clave para el correcto
              funcionamiento de máquinas y la conservación de productos
              perecederos.
            </div>
            <div titulo="Humedad">
              En la agricultura, la humedad del suelo determina cuándo y cuánto
              regar los cultivos, optimizando el consumo de agua. En sectores
              como la industria textil, una humedad controlada evita la
              acumulación de electricidad estática, protegiendo tanto el equipo
              como los productos.
            </div>
            <div titulo="pH">
              El pH es crucial en procesos donde la acidez o alcalinidad afecta
              la calidad del producto, como en el tratamiento de aguas o la
              producción de alimentos. En la agricultura, un nivel de pH
              adecuado en el suelo asegura la absorción correcta de nutrientes
              por las plantas.
            </div>
          </AccordionRED>
        </div>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-8 my-lg-0 my-3">
          <AccordionRED class="mb-4" tipo="a" clase-tarjeta="tarjeta bg7">
            <div titulo="Presión">
              En sistemas de fluidos, la presión adecuada garantiza un flujo
              constante, lo cual es esencial en la industria petroquímica y en
              el manejo de gases y líquidos en procesos de manufactura.
            </div>
            <div titulo="Conductividad">
              La conductividad del suelo en agricultura permite estimar la
              cantidad de sales y nutrientes disponibles para las plantas, lo
              que es útil para ajustar la fertilización y evitar la acumulación
              de sales que pueden dañar las raíces de los cultivos.
            </div>
            <div titulo="Flujo y nivel">
              Estas variables son clave en sistemas de transporte de líquidos y
              gases. Por ejemplo, en la producción de bebidas, es crucial
              mantener un flujo constante para garantizar que se cumplan los
              tiempos de llenado y evitar desperdicios.
            </div>
          </AccordionRED>
          <p>
            Cada una de estas variables afecta directamente el desempeño del
            proceso y, por lo tanto, deben ser monitoreadas y controladas con
            precisión. El uso de sensores adecuados permite una medición precisa
            y en tiempo real de estas variables, lo que facilita el ajuste
            oportuno y asegura la estabilidad del sistema.
          </p>
        </div>
        <div class="col-lg-4 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/34.png" alt="" />
        </div>
      </div>
      <Separador> </Separador>
      <div
        id="t_2_3"
        class="titulo-segundo color-acento-contenido"
        data-aos="zoom-in-left"
      >
        <h2>2.3 Herramientas para el monitoreo de variables en tiempo real</h2>
      </div>
      <p>
        El avance de la tecnología IoT ha facilitado la implementación de
        herramientas que permiten monitorear variables en tiempo real, lo que
        resulta esencial para el control automatizado de procesos. A
        continuación, se presentan algunas de las herramientas más utilizadas
        para el monitoreo y gestión de variables en procesos productivos:
      </p>
      <div class="row bg10 align-items-center">
        <div class="col-lg-12 col-12 px-lg-5 px-4">
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-12">
              <div class="bgw brad p-5 my-5">
                <CarouselRED tipo="b">
                  <div class="row justify-content-center">
                    <div class="col-lg-6 my-2">
                      <h5 class="mb-4">Sensores de campo</h5>
                      <p>
                        Los sensores son el primer eslabón en el monitoreo de
                        variables. Existen sensores específicos para cada tipo
                        de variable, como sensores de temperatura (ej.,
                        termopares y RTD), sensores de humedad (ej., capacitivos
                        y resistivos), y sensores de pH y conductividad para el
                        monitoreo del suelo en la agricultura. Estos
                        dispositivos están diseñados para funcionar en
                        condiciones de operación específicas y transmiten datos
                        en tiempo real a los sistemas de control.
                      </p>
                    </div>
                    <div class="col-lg-5 my-2">
                      <img
                        class="img-a img-t"
                        src="@/assets/curso/temas/36.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-lg-6 my-2">
                      <h5 class="mb-4">
                        Plataformas IoT para gestión de datos
                      </h5>
                      <p>
                        Las plataformas en la nube como ThingSpeak, AWS IoT y
                        Google Cloud IoT permiten recolectar, almacenar y
                        analizar datos de sensores de forma remota. Estas
                        plataformas no solo facilitan la visualización de datos
                        en tiempo real, sino que también permiten configurar
                        alertas y crear algoritmos de respuesta automática para
                        mantener las variables dentro de los parámetros
                        establecidos.
                      </p>
                    </div>
                    <div class="col-lg-5 my-2">
                      <img
                        class="img-a img-t"
                        src="@/assets/curso/temas/37.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-lg-6 my-2">
                      <h5 class="mb-4"><em>Gateways</em> IoT</h5>
                      <p>
                        Los <em>gateways</em> IoT conectan los sensores al
                        sistema de monitoreo central y permiten la transmisión
                        de datos mediante protocolos de comunicación como
                        LoRaWAN y MQTT. Estos dispositivos son fundamentales en
                        entornos donde los sensores están distribuidos en
                        grandes áreas, como en instalaciones industriales o
                        terrenos agrícolas extensos.
                      </p>
                    </div>
                    <div class="col-lg-5 my-2">
                      <img
                        class="img-a img-t"
                        src="@/assets/curso/temas/38.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-lg-6 my-2">
                      <h5 class="mb-4">
                        Sistemas SCADA (Supervisión, Control y Adquisición de
                        Datos)
                      </h5>
                      <p>
                        Los sistemas SCADA son ampliamente utilizados en la
                        industria para monitorear y controlar procesos en tiempo
                        real. Estos sistemas recopilan datos de los sensores,
                        los procesan y los muestran en interfaces de usuario
                        intuitivas, permitiendo a los operadores tomar
                        decisiones informadas o activar respuestas automáticas.
                      </p>
                    </div>
                    <div class="col-lg-5 my-2">
                      <img
                        class="img-a img-t"
                        src="@/assets/curso/temas/39.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-lg-6 my-2">
                      <h5 class="mb-4">
                        Simuladores y herramientas de simulación
                      </h5>
                      <p>
                        Para realizar pruebas de configuración y verificar el
                        funcionamiento de los sensores y actuadores, los
                        simuladores como Wokwi y Tinkercad permiten a los
                        estudiantes trabajar en un entorno seguro y sin
                        necesidad de equipos físicos. Esto es especialmente útil
                        en etapas de desarrollo y capacitación.
                      </p>
                    </div>
                    <div class="col-lg-5 my-2">
                      <img
                        class="img-a img-t"
                        src="@/assets/curso/temas/40.png"
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
        id="t_2_4"
        class="titulo-segundo color-acento-contenido"
        data-aos="zoom-in-left"
      >
        <h2>2.4 Ventajas del control de variables en sistemas automatizados</h2>
      </div>
      <p>
        El control automatizado de variables en los procesos productivos ofrece
        varias ventajas que impactan positivamente la operación y rentabilidad
        de los sistemas. A continuación, se destacan algunas de las principales
        ventajas:
      </p>
      <div class="row justify-content-center mb-4 bg1 p-4">
        <div class="col-lg-3 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/41.png" alt="" />
        </div>
        <div class="col-lg-9 my-lg-0 my-3">
          <ul class="lista-ul fa-ul">
            <li>
              <i class="fas fa-check-circle color1"></i
              ><span
                ><b>Mejora de la calidad:</b> al mantener las variables en
                rangos ideales, se asegura la uniformidad y calidad del producto
                final, lo que reduce el desperdicio y los costos de
                reproceso.</span
              >
            </li>
            <li>
              <i class="fas fa-check-circle color1"></i
              ><span
                ><b>Eficiencia en el uso de recursos:</b> el control preciso de
                variables permite optimizar el uso de recursos como agua,
                energía y materias primas, lo que se traduce en un menor costo
                operativo y un impacto ambiental reducido.</span
              >
            </li>
            <li>
              <i class="fas fa-check-circle color1"></i
              ><span
                ><b>Mantenimiento predictivo:</b> el monitoreo continuo facilita
                la identificación temprana de anomalías en el sistema, lo que
                permite realizar un mantenimiento preventivo antes de que ocurra
                una falla grave. Esto ayuda a evitar tiempos de inactividad
                inesperados y a extender la vida útil de los equipos.</span
              >
            </li>
            <li>
              <i class="fas fa-check-circle color1"></i
              ><span
                ><b>Reducción de costos:</b> un sistema bien controlado reduce
                los costos asociados con el desperdicio, la energía y los
                tiempos de inactividad. La inversión inicial en sensores y
                sistemas de monitoreo se recupera rápidamente a través de una
                mayor eficiencia operativa.</span
              >
            </li>
            <li>
              <i class="fas fa-check-circle color1"></i
              ><span
                ><b>Toma de decisiones basada en datos:</b> la información en
                tiempo real permite a los operadores y gerentes tomar decisiones
                informadas, optimizando los procesos y respondiendo rápidamente
                a cualquier desviación que pueda surgir.</span
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="titulo-sexto color-acento-contenido">
            <h5>Figura 2.</h5>
            <span
              >Resumen control de variables en procesos productivos
              automatizados</span
            >
          </div>
          <div class="bgfig p-4 mb-1">
            <img
              class="img-a img-t"
              src="@/assets/curso/temas/42.svg"
              alt="El diagrama presenta un mapa conceptual que se divide en 4 secciones principales: una introducción que aborda la importancia y beneficios del control de variables, las variables de control en procesos (incluyendo ejemplos como temperatura, humedad, pH, presión, flujo, nivel y conductividad), el impacto de estas variables en la calidad y eficiencia, herramientas para el monitoreo en tiempo real (incluyendo sensores y sistemas de adquisición de datos), y las conclusiones que abordan la importancia del control y recomendaciones de implementación."
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
            href="https://www.youtube.com/watch?v=LUi0HEXKnjo"
            target="_blank"
          >
            <div class="anexo__icono">
              <img src="@/assets/curso/temas/icono-link.svg" />
            </div>
            <div class="anexo__texto">
              <p><b>Enlace web.</b> Video “Términos de control de proceso”</p>
            </div></a
          ><a
            class="anexo mb-3"
            href="https://www.mathworks.com/help/thingspeak"
            target="_blank"
          >
            <div class="anexo__icono">
              <img src="@/assets/curso/temas/icono-link.svg" />
            </div>
            <div class="anexo__texto">
              <p>
                <b>Enlace web.</b> Tutorial “Getting Started with ThingSpeak for
                IoT Application”
              </p>
            </div></a
          >
        </div>
        <div class="col-lg-4 my-3">
          <a
            class="anexo mb-3"
            href="https://static.weg.net/medias/downloadcenter/hf4/h7d/WEG-sensores-industriales-50094674-es.pdf"
            target="_blank"
          >
            <div class="anexo__icono">
              <img src="@/assets/curso/temas/icono-link.svg" />
            </div>
            <div class="anexo__texto">
              <p><b>Enlace web.</b> “Manual de Sensores Industriales”</p>
            </div></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema2',
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
