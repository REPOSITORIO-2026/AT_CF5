export default {
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de IoT en la gestión de procesos productivos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptos básicos de IoT',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Arquitectura de un sistema IoT',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Sensores y actuadores en IoT',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Aplicaciones en la agroindustria y agricultura',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Ventajas de IoT en la gestión de procesos productivos',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Control de variables en procesos productivos automatizados',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Importancia del monitoreo de variables en procesos productivos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Principales variables de control en procesos productivos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Herramientas para el monitoreo de variables en tiempo real',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Ventajas del control de variables en sistemas automatizados',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestión de bases de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Protocolos de comunicación IoT',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Comparación de protocolos de comunicación: alcances y limitaciones',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Aplicación de tecnologías de comunicación en procesos productivos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Ventajas de una conectividad eficiente en sistemas IoT',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Integración de IoT en procesos productivos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Configuración y puesta a punto de sensores y actuadores',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Configuración de <i>gateways</i> y envío de datos a la nube',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Monitoreo y control de sistemas en tiempo real',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo:
              'Desafíos y mejores prácticas para la integración de IoT en procesos productivos',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Aplicación de IoT en procesos productivos',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Ventajas de la integración de IoT en procesos productivos',
            hash: 't_4_6',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Plataformas en la nube para la gestión de datos IoT',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              'Introducción a ThingSpeak y otras plataformas de gestión de datos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Creación de un canal para visualización de datos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo:
              'Configuración de alertas y notificaciones basadas en variables críticas',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Ventajas de utilizar plataformas en la nube para IoT',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo:
              'Aplicación de plataformas en la nube en procesos productivos',
            hash: 't_5_5',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Implementación práctica de un sistema IoT básico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Materiales y componentes necesarios',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Configuración de <i>hardware</i> y <i>software</i>',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Programación del microcontrolador y envío de datos',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Visualización y análisis de los datos en la nube',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Implementación de un sistema de alertas básico',
            hash: 't_6_5',
          },
          {
            numero: '6.6',
            titulo: 'Evaluación del sistema IoT y mejores prácticas',
            hash: 't_6_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/232100_CF05_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  global: {
    Name:
      'Implementación de IoT en la gestión de procesos productivos automatizados',
    Description:
      'Este componente formativo introduce el uso del IoT en procesos productivos automatizados para agroindustria y agricultura. Cubre tecnologías clave para recopilar, monitorear y analizar datos en tiempo real mediante sensores IoT, configurando sistemas, integrando LoRaWAN y aplicando protocolos de comunicación en la nube. Combina teoría y práctica para mejorar la eficiencia y la sostenibilidad en estos entornos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
    ],
  },
}
