<template>
  <div class="curso-main-container introduccion">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero">
          <span><i class="fas fa-info"></i></span>
        </div>
        <h1>Introducción</h1>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-9 my-lg-0 my-3">
          <p>
            El Internet de las Cosas (IoT) se ha convertido en una herramienta
            esencial para la modernización y automatización de procesos
            productivos en sectores como la agricultura, la industria y la
            agroindustria. Esta tecnología permite conectar dispositivos y
            sensores para recolectar datos en tiempo real, facilitando el
            monitoreo y control remoto de sistemas. A través de la
            implementación de IoT, se pueden gestionar variables como la
            temperatura, humedad, pH y otros factores críticos que impactan la
            productividad y eficiencia de un proceso productivo.
          </p>
          <div class="row justify-content-center align-items-center mb-4">
            <div class="col-lg-auto">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/7.png"
                alt=""
              />
            </div>
            <div class="col pt-lg-0 pt-md-4">
              <div class="bg4 p-3 brad">
                <p class="mb-0">
                  La automatización basada en IoT permite optimizar recursos,
                  reducir costos y mejorar la sostenibilidad de las operaciones
                  al tomar decisiones fundamentadas en datos precisos y en
                  tiempo real. Este componente formativo está diseñado para
                  proporcionar a los estudiantes una comprensión integral de IoT
                  aplicada a la gestión de procesos automatizados, con un
                  enfoque particular en el monitoreo y control de variables
                  clave en entornos productivos como la agroindustria y el
                  sector agrícola. Además, se les introducirá a las tecnologías
                  de comunicación de largo alcance, como LoRaWAN, esenciales
                  para operar en zonas rurales y remotas.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/8.png" alt="" />
        </div>
      </div>
      <div class="row justify-content-center align-items-center mb-4">
        <div class="col-lg-auto">
          <img class="img-a img-t" src="@/assets/curso/temas/9.png" alt="" />
        </div>
        <div class="col pt-lg-0 pt-md-4">
          <p class="mb-0">
            A través de este componente se aprenderá a configurar y poner a
            punto sistemas de IoT, desde la instalación de sensores hasta la
            integración con plataformas en la nube que permiten visualizar y
            gestionar los datos. A través de actividades prácticas y el uso de
            protocolos de comunicación como MQTT y LoRa, los aprendices se
            familiarizarán con herramientas de recolección y análisis de datos
            que son cruciales en el contexto actual.
          </p>
        </div>
      </div>
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-12">
          <figure>
            <div class="video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/9t6ysH6SA1I?si=RhEQjzdTG12QHI17"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="allowfullscreen"
              ></iframe>
            </div>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
