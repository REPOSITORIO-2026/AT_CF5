<template lang="pug">
<div class="curso-main-container pb-3">
  <BannerInterno icono="fas fa-sitemap" titulo="Síntesis"></BannerInterno>
  <div class="container tarjeta tarjeta--blanca p-4 p-md-5">
    <div class="row justify-content-center mb-4">  
      <div class="col-lg-8 my-lg-0 my-3">
        <div class="row justify-content-center align-items-center bg2 p-4 brad mb-4">
          <div class="col-lg-auto"><img class="img-a img-t" src="@/assets/curso/temas/1.png" alt=""/></div>
          <div class="col pt-lg-0 pt-md-4">
            <p class="mb-0">En este componente, exploramos el impacto y las aplicaciones del Internet de las Cosas (IoT) en la optimización y automatización de procesos productivos. A lo largo del componente, el estudiante adquiere conocimientos clave sobre los principales elementos que componen un sistema IoT en entornos industriales, permitiéndole comprender cómo estos contribuyen a mejorar la eficiencia y reducir los costos operativos.</p>
          </div>
        </div>
        <p>El componente comienza con el estudio de los sensores y actuadores, dispositivos esenciales que permiten captar variables críticas (como temperatura, presión y humedad) y ejecutar respuestas automáticas en los procesos. Seguidamente, se profundiza en el uso de microcontroladores, dispositivos que procesan la información captada por los sensores y permiten la conexión del sistema IoT a la red, facilitando la comunicación y la transmisión de datos en tiempo real.</p>
        <div class="row justify-content-center align-items-center mb-4">
          <div class="col-lg-auto"><img class="img-a img-t" src="@/assets/curso/temas/2.png" alt=""/></div>
          <div class="col pt-lg-0 pt-md-4">
            <div class="bg1 b-dash p-3 brad">
              <p class="mb-0">El siguiente tema fundamental aborda los protocolos de comunicación. En esta sección, el estudiante aprende sobre protocolos como LoRaWAN, MQTT y ZigBee, que garantizan la transferencia eficiente y segura de datos entre los dispositivos y la nube, adaptándose a las distintas necesidades de los entornos productivos.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 my-lg-0 my-3"><img class="img-a img-t" src="@/assets/curso/temas/3.png" alt=""/></div>
    </div>
    <p class="mb-5">Finalmente, se aborda el uso de plataformas en la nube, como ThingSpeak, AWS IoT y Google Cloud IoT, que permiten almacenar, analizar y visualizar los datos en tiempo real. Estas plataformas ofrecen herramientas para configurar alertas y monitorear el estado del sistema de manera remota, facilitando la toma de decisiones basada en datos y la implementación de mantenimiento predictivo.</p>
    <div class="row justify-content-center mb-4">
      <div class="col-lg-4 my-lg-0 my-3"><img class="img-a img-t" src="@/assets/curso/temas/4.png" alt=""/></div>
      <div class="col-lg-8 my-lg-0 my-3">
        <p>Al finalizar el componente, el estudiante habrá desarrollado una comprensión integral del funcionamiento de los sistemas IoT en la gestión de procesos productivos. Este conocimiento le permitirá identificar y aplicar soluciones de IoT para mejorar la productividad y responder a los desafíos de automatización en diversos sectores industriales.</p>
        <div class="row justify-content-center align-items-center mb-4">
          <div class="col pt-lg-0 pt-md-4">
            <div class="bg3 p-3 brad">
              <p class="mb-0">Este diagrama conceptual sintetiza los temas clave del componente, enfocado en la aplicación del Internet de las Cosas (IoT) para optimizar procesos productivos en entornos automatizados, especialmente en la agroindustria. El núcleo del diagrama es el IoT, del cual se derivan elementos fundamentales: sensores y actuadores, tecnologías de comunicación, plataformas en la nube y control de variables.</p>
            </div>
          </div>
          <div class="col-lg-auto"><img class="img-a img-t" src="@/assets/curso/temas/5.png" alt=""/></div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center align-items-center mb-5">
      <div class="col-lg-auto"><img class="img-a img-t" src="@/assets/curso/temas/6.png" alt=""/></div>
      <div class="col pt-lg-0 pt-md-4">
        <p>Cada rama se desglosa en subtemas como LoRaWAN, MQTT, ThingSpeak, configuración de gateways, y la integración práctica en sistemas reales. Este mapa ayuda a los estudiantes a visualizar cómo los conceptos y tecnologías se interrelacionan para habilitar una gestión eficiente y sostenible.</p>
        <p class="mb-0">Se invita al aprendiz a explorar este esquema como una referencia visual complementaria, que facilita el entendimiento de la complejidad y la aplicabilidad del IoT en procesos automatizados, promoviendo una comprensión integral del tema.  </p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-10 mb-5 bgs p-4 brad">
        <figure><img src="@/assets/curso/temas/sintesis.svg" alt="La Síntesis muestra un mapa conceptual centrado en “Implementación de IoT en la gestión de procesos productivos automatizados”, que se divide en 6 ramas principales. Incluye temas como el Internet de las Cosas (IoT) en la modernización, gestión de variables críticas (humedad, temperatura, pH), beneficios de la automatización, componente formativo sobre IoT, aprendizaje de configuración y actividades prácticas. Cada rama principal se expande en subtemas que detallan aspectos específicos como recolección de datos, monitoreo remoto y protocolos de comunicación."/></figure>
        <figcaption class='mt-5'> Fuente. OIT, 2024.</figcaption>
      </div>
      <div class="col-auto"><a class="anexo mb-5" :href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank">
          <div class="anexo__icono"><img src="@/assets/bullets/icono-pdf.svg"/></div>
          <div class="anexo__texto">
            <p>Anexo. Síntesis</p>
          </div></a></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Sintesis',
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
