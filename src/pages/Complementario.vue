<template>
  <div class="curso-main-container complementario">
    <BannerInterno
      icono="far fa-folder-open"
      titulo="Material complementario"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th colspan="3" scope="col">Tema</th>
              <th colspan="5" scope="col">Referencia APA del material</th>
              <th colspan="2" scope="col">Tipo</th>
              <th colspan="2" scope="col">Enlace</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in computedData"
              :key="'complementario-' + index"
            >
              <td
                class="text-start"
                colspan="3"
                scope="row"
                v-html="item.tema"
              ></td>
              <td
                class="text-start"
                colspan="5"
                scope="row"
                v-html="item.referencia"
              ></td>
              <td colspan="2" v-html="item.tipo"></td>
              <td colspan="2">
                <div class="complementario__enlaces">
                  <a
                    v-for="(link, linkIndex) of item.link"
                    :key="linkIndex"
                    class="complementario__btn"
                    :href="link"
                    target="_blank"
                    ><i class="fas fa-external-link-alt"></i
                  ></a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MaterialComplementario',
  computed: {
    complementarioData() {
      return [
        {
          tema: 'Configuración del microcontrolador ESP32',
          referencia:
            'Tarnowski, T. [@tomasztarnowski4434]. (n.d.). <em>Getting started with ESP32 - step-by-step tutorial.</em> [Video] Youtube.',
          tipo: 'Video tutorial',
          link: 'https://www.youtube.com/watch?v=tc3Qnf79Ny8',
        },
        {
          tema: 'Programación con Arduino IDE',
          referencia:
            'Ortiz Arciniega, J. L., Valencia Barahona, F. X., Bosmediano Cárdenas, C. P., Bastidas Jácome, A. D., Aguirre Chagna, V. H., & Jácome Ayala, P. J. (2025). ESP32: <em>Manual Básico para Estudiantes.</em> [Documento PDF]. Alumni Editora.',
          tipo: 'Documento en PDF',
          link: 'https://doi.org/10.70625/alumned/9',
        },
        {
          tema: 'Simulador para proyectos IoT',
          referencia:
            '<em>Wokwi - World’s most advanced ESP32 Simulator.</em> (n.d.). [Simulador Web]. Wokwi.com.',
          tipo: 'Simulador en línea',
          link: 'https://wokwi.com/',
        },
        {
          tema: 'AWS IoT en Aplicaciones Industriales',
          referencia:
            'Amazon Web Services. (2019). <em>How to Get Started with AWS IoT SiteWise - Intro (1/4).</em> [Video]. YouTube. ',
          tipo: 'Video',
          link:
            'https://www.youtube.com/watch?v=Q89oqK_nzFg&list=PLhr1KZpdzukf3Ohr9eTB3eQlawDT5tHGL',
        },
        {
          tema: 'Casos de Estudio en Agricultura y Manufactura',
          referencia: 'Agrosavia.co. (n.d.). [Documento PDF].',
          tipo: 'Documento de trabajo',
          link:
            'https://repository.agrosavia.co/bitstream/handle/20.500.12324/38661/Ver_Documento_38661.pdf?sequence=4&isAllowed=y.',
        },
      ]
    },
    computedData() {
      const data = this.complementarioData
      return data.map(item => {
        let nuevoLink = []
        if (item.link) {
          if (typeof item.link === 'string') {
            nuevoLink.push(item.link)
          } else {
            nuevoLink = item.link
          }
        } else if (item.descarga) {
          if (typeof item.descarga === 'string') {
            nuevoLink.push(this.obtenerLink(item.descarga))
          } else {
            item.descarga.forEach(link => {
              nuevoLink.push(this.obtenerLink(link))
            })
          }
        }
        return {
          ...item,
          link: nuevoLink,
        }
      })
    },
  },
}
</script>

<style lang="sass">
.complementario
  &__enlaces
    display: flex
    justify-content: center
    flex-wrap: wrap
    a
      margin: 0 5px
  &__btn
    font-size: 1.5em
    line-height: 1em
table
  width: calc(100% - 1px)
  min-width: 800px
  thead
    background-color: $color-sistema-e
    th
      border-color: $color-sistema-e
  th, td
    padding: 25px 20px
    text-align: center
</style>
