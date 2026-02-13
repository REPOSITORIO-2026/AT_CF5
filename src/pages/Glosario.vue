<template>
  <div class="curso-main-container glosario">
    <BannerInterno icono="fas fa-atlas" titulo="Glosario"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div
        v-for="letra in orderedData"
        :key="'letra-' + letra.letra"
        class="glosario__letra-item mb-2"
      >
        <div class="glosario__letra-item__letra me-4">
          <div class="glosario__letra-item__letra__icono">
            <span>{{ letra.letra }}</span>
          </div>
        </div>
        <div class="glosario__letra-item__texto">
          <p
            v-for="termino in letra.terminos"
            :key="termino.termino"
            class="mb-3"
          >
            <strong><i class="lista-ul__vineta"></i></strong
            ><strong v-html="termino.terminoHtml || termino.termino"> </strong
            ><strong>: </strong><span v-html="termino.significado"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import plantillaMixins from '@/js/plantillaMixins'
export default {
  name: 'Glosario',
  mixins: [plantillaMixins],
  data() {
    return {
      glosarioData: [
        {
          termino: 'Actuador',
          significado:
            'Dispositivo que recibe señales de control y realiza una acción física, como abrir una válvula o activar un motor, en función de los datos recibidos de un sistema IoT',
        },
        {
          termino: 'AWS IoT',
          significado:
            'Plataforma de Amazon Web Services para gestionar y analizar dispositivos IoT a escala industrial, con capacidades avanzadas de machine learning e inteligencia artificial.',
        },
        {
          termino: 'Big data',
          significado:
            'Conjunto de datos masivos generados por dispositivos IoT, que requieren procesamiento avanzado y análisis para extraer información valiosa.',
        },
        {
          termino: 'Calibración de sensores',
          significado:
            'Proceso de ajuste de los sensores para que sus mediciones sean precisas y confiables, crucial en sistemas IoT para garantizar la calidad de los datos.',
        },
        {
          termino: 'Eficiencia energética',
          significado:
            'Optimización del consumo de energía en dispositivos IoT, fundamental para extender la vida útil de dispositivos alimentados por batería en entornos remotos.',
        },
        {
          termino: 'Gemelos digitales',
          significado:
            'Representación digital de un dispositivo o sistema físico, que permite simular su comportamiento en tiempo real, facilitando el monitoreo y análisis sin interferir en el sistema real.',
        },
        {
          termino: 'Inteligencia Artificial (IA)',
          significado:
            'Técnica que utiliza datos IoT para anticipar fallos en equipos, permitiendo realizar mantenimiento antes de que ocurra una avería, mejorando la eficiencia operativa',
        },
        {
          termino: 'Internet de las Cosas (IoT)',
          significado:
            'Conjunto de dispositivos físicos conectados a Internet, que recopilan, comparten y analizan datos para automatizar procesos y facilitar la toma de decisiones en tiempo real.',
        },
        {
          termino: 'LoRaWAN',
          significado:
            'Protocolo de comunicación de largo alcance y bajo consumo de energía, ideal para conectar dispositivos IoT en áreas extensas, como campos agrícolas.',
        },
        {
          termino: 'Mantenimiento predictivo',
          significado:
            'Tipo de red en la cual cada dispositivo IoT se conecta con otros dispositivos cercanos, ampliando la cobertura y aumentando la fiabilidad de la comunicación, típico en ZigBee.',
        },
        {
          termino: 'Microcontrolador (MCU)',
          significado:
            'Circuito integrado que funciona como el cerebro de un sistema IoT, procesando los datos de los sensores y transmitiéndolos a plataformas en la nube. Ejemplos: ESP32, ESP8266.',
        },
        {
          termino: 'MQTT',
          significado:
            'Protocolo ligero de mensajería que facilita la comunicación entre dispositivos IoT y plataformas en la nube mediante un modelo de publicación/suscripción.',
        },
        {
          termino: 'Plataforma en la nube',
          significado:
            'Entorno digital en línea donde se almacenan, procesan y visualizan los datos de los dispositivos IoT, permitiendo el acceso y gestión remota del sistema.',
        },
        {
          termino: 'Protocolo de comunicación',
          significado:
            'Conjunto de reglas que permiten la transmisión de datos entre dispositivos IoT y plataformas en la nube, asegurando una comunicación efectiva y segura.',
        },
        {
          termino: 'Sensor',
          significado:
            'Dispositivo que detecta y mide variables físicas como temperatura, humedad, presión, y las convierte en datos digitales para su procesamiento y análisis en sistemas IoT.',
        },
        {
          termino: 'Simulador IoT',
          significado:
            'Herramienta virtual para probar y configurar sistemas IoT sin necesidad de <i>Hardware</i> físico, útil para verificar configuraciones y programación de sensores y actuadores.',
        },
        {
          termino: 'Thingspeak',
          significado:
            'Plataforma en la nube popular para proyectos IoT pequeños, que permite almacenar y visualizar datos de sensores en tiempo real, y configurar alertas automáticas.',
        },
        {
          termino: 'Visualización de datos',
          significado:
            'Presentación gráfica de los datos de IoT en tiempo real, facilitando el análisis y la toma de decisiones, común en plataformas como ThingSpeak y Google Cloud IoT.',
        },
      ],
    }
  },
  computed: {
    orderedData() {
      const newGlosarioData = [...this.glosarioData]
      newGlosarioData.forEach(element => {
        element.significado =
          element.significado.charAt(0).toLowerCase() +
          element.significado.slice(1)
      })

      const sortedData = [...newGlosarioData].reduce((r, e) => {
        const letra = this.quitarAcentos(e.termino.toLowerCase())[0]
        if (!r[letra]) r[letra] = { letra, terminos: [e] }
        else r[letra].terminos.push(e)
        return r
      }, {})

      const soloLetras = Object.keys(sortedData).sort()
      const newSortedData = []

      soloLetras.forEach(element => {
        const letraObj = sortedData[element]
        let terminos = letraObj.terminos

        if (terminos.length > 1) {
          const terminosOrdenados = []
          const soloTerminos = letraObj.terminos
            .map(termObj => termObj.termino)
            .sort((a, b) => {
              const an = this.quitarAcentos(a).toLowerCase()
              const bn = this.quitarAcentos(b).toLowerCase()
              if (an < bn) return -1
              if (bn < an) return 1
              return 0
            })
          soloTerminos.forEach(term => {
            terminosOrdenados.push(
              terminos.find(termino => termino.termino === term),
            )
          })
          terminos = terminosOrdenados
        }
        newSortedData.push({
          letra: letraObj.letra.toUpperCase(),
          terminos: terminos,
        })
      })
      return newSortedData
    },
  },
}
</script>

<style lang="sass">
.glosario
  &__letra-item
    display: flex
    &__texto
      padding-top: 5px
    &__letra
      &__icono
        width: 32px
        height: 32px
        position: relative
        line-height: 1em
        border-radius: 50%
        background-color: $color-sistema-d

        span
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%,-50%)
          font-size: 1.1em
          font-weight: $base-black-font-weight
</style>
