export type Works = {
  title: string;
  techs: string[];
  description: string;
  challenge?: string;
  workTime: string;
};
  
const works: Works[] = [
  {
      title: "Programador FullStack, *WAU*",
      techs: ["*AWS, Amplify, EventBridge, Cognito, RDS, Lambda, S3, CloudFront*", "*Typescript*", "*Nodejs*", "*MYSQL*", "*React*"],
      description: 'Desde la planificación hasta los evolutivos, estuve involucrado en el desarrollo de una aplicación que ponía a disposición API para el consumo de entidades bancarias. Me encargué de solucionar y adaptar los requerimientos del cliente conforme avanzaba el proyecto. Básicamente, realicé el análisis de datos para métricas en el dashboard, así como la creación de proformas y cálculos en el sistema de facturación. Además de crear pantallas a nivel de frontend.',
      challenge: 'El mayor reto que afronte en este proyecto fue la creación de proformas a nivel de S3 y Lambda, debido a que los datos se cargaban desde distintas fuentes, encontré la solución utilizando Lambdas y Cloudwatch Events.',  
      workTime: '1 año 5 meses',
  },
  {
      title: "Programador FullStack, *Livevip*",
      techs: ["*AWS, S3*", "*Typescript*", "*Nodejs*", "*Firebase*", "*Nextjs*", "*Google Cloud VMs*"],
      description: `Me encargué de realizar una API rest para entregar y guardar datos en una base de datos Firebase, cree una solución para pagar con tarjetas de créditos utilizando *Stripe* y varios servicios bancarios de Venezuela, como: Mercantil pago móvil-vuelto y banco de Venezuela, Binance pay y más, además cree un servicio para notificar pagos por medio de SMS *WhatsApp* mediante la API de *Twillio*.`,
      challenge: `El mayor reto que afronte en este proyecto en paralelo al backend, realizaba una configuración de una VMs en Google Cloud para un eventlistener de la blockchain y escribir en una base de datos los resultados, persistencia de conexión utilizando PM2, subida de archivos en S3 con diferentes formatos.`,  
      workTime: '1 año 1 mes',
  },
  {
      title: "Programador FrontEnd, *Veflat SAS*",
      techs: ["*React*", "*Javascript*", "*GIT*", "*Nodejs*"],
      description: `Mi primera relación laboral como empleado, aquí aplique mis conocimientos en React utilizando clases, posteriormente utilizando componentes funcionales, me encargue de desarrollar una aplicación donde se realizan retos de estructura de datos y algoritmos en diferentes lenguajes de programación.`,
      challenge: `El mayor reto que afronte fue realizar un editor de código y compilar en diferentes lenguajes para dar resultados y retroalimentación al usuario, en ese caso utilice Mónaco-editor.`,  
      workTime: '5 meses',
  },
  {
      title: "Programador FullStack, *Independiente*",
      techs: ["*Typescript*", "*Nodejs*", "*Firebase*", "*Nextjs*", "*React*"],
      description: `Cuando inicie mi camino como programador el mayor reto fue encontrar clientes y abrirme paso en el mundo laboral, desarrollar mis habilidades y conocimientos adquiridos, tanto en la Universidad como autodidacta. Encontré clientes para los cuales me dedique a realizar proyectos independientes, desde lading pages, hasta sistemas para gestionar la logística de una clínica oftalmológica, este último fue el proyecto que mayor reto y desempeño me dio. En el siguiente post de LinkedIn muestro un poco sobre el proyecto <a href="https://www.linkedin.com/feed/update/urn:li:activity:7005698003734863872/" class="text-blue-500" target="_blank">linkedin</a>`,
      workTime: '2 años',     
  },
];
  
export default works;
  