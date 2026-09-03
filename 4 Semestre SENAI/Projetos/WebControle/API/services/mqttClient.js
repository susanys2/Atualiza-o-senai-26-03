import mqtt from "mqtt";

// ========== CONFIGURAÇÕES DO BROKER ==========
const MQTT_BROKER_HOST = '1fc6157e6caf4d6b86e34770d9f83882.s1.eu.hivemq.cloud';
const MQTT_BROKER_PORT = 8883;
const MQTT_USERNAME = 'ricardodias';
const MQTT_PASSWORD = 'TesteSenai1';

// ========== TÓPICOS ==========
const TOPICO_STATUS = 'aula/29/status';
const TOPICO_ESTADO_LED = 'aula/29/estadoLed';
const TOPICO_NIVEL_BOIA = 'aula/36/nivelBoia';
const TOPICO_NIVEL_UMIDADE = 'aula/29/umidadeSolo';
const TOPICO_STATUS_CHUVA = 'aula/36/sensorChuva';


// ========== VARIÁVEIS GLOBAIS ==========
let mqttClient = null;          // Guarda a conexão MQTT
let conectado = false;       // Evita conectar 2 vezes ao mesmo tempo
const subscriptions = {};       // Guarda as funções de callback dos tópicos

const mqttOptions = {
    port: MQTT_BROKER_PORT,
    username: MQTT_USERNAME,
    password: MQTT_PASSWORD,
    protocol: 'mqtts',
    reconnectPeriod: 1000,
};

function conectarMqtt() {
    //Valida se está conectado
    if (mqttClient?.connected || conectado) {
        console.log(`MQTT já conectado`)
        return
    }

    console.log('MQTT tentando conectar...')
    mqttClient = mqtt.connect(`mqtts://${MQTT_BROKER_HOST}`, mqttOptions);

    conectado = true;

    //Quando conectado com sucesso
    mqttClient.on(`connect`, () => {
        console.log(`MQTT conectado`)

        //Inscreve em todos os topicos de uma vez
        const topicos = [
            TOPICO_STATUS,
            TOPICO_ESTADO_LED,
            TOPICO_NIVEL_BOIA,
            TOPICO_NIVEL_UMIDADE,
            TOPICO_STATUS_CHUVA
        ]

        mqttClient.subscribe(topicos, (error) => {
            if (!error) {
                console.log(`MQTT: Inscrito em ${topicos.length} topicos`)
            }
        })
    })

    //Quando receber uma mensagem alterada 
    mqttClient.on(`message`, (topic, message) => {
        //Se existe uma função cadastrada nesse topico, recebe a mensagem 
        if (subscriptions[topic]) {
            subscriptions[topic](message.toString())
        }
    })

    //Quando escutar um erro 
    mqttClient.on(`error`, (error) => {
        conectado = false
        console.error(`MQTT: Erro ->`, error.message)
    })

    //Quando escutar um erro 
    mqttClient.on(`close`, () => {
        conectado = false
        console.error(`MQTT: Conexão Fechada`)
    })

    //Quando escutar um erro 
    mqttClient.on(`close`, () => {
        conectado = false
        console.error(`MQTT: Conexão Fechada`)
    })

    //Quando ficar offline 
    mqttClient.on(`offline`, () => {
        console.error(`MQTT: Ficou Offline`)
    })
    mqttClient.on(`reconnect`, () => {
        console.error(`Tentando Conexão`)
    })

}

//Função de Escuta
function onMessage(topic, callback) {
    subscriptions[topic] = callback
}

//Função para públicar 
function publicar(topic, message) {
  //Retorna uma promessa para usar nas rotas 
  return new Promise((resolve, reject) => {
    if(!mqttClient || !mqttClient.connected){
        console.log('MQTT não está conectado!')
        reject(new Error('Cliente MQTT não está conectado!'))
        return; //encerra aqui se não estiver e volta para tentar a conexão novamente 
    }                                 //elemento para armazenar o servidor - retém a informação 
    mqttClient.publish(topic, message, {retain:true}, (eror) => {
        if(error){
            console.log('MQTT: ERRO AO PUBLICAR', error.message)
            reject(new Error('Erro ao publicar'))
        }else{
            console.log(`MQTT: Enviado ${topic}: ${message}`)
            resolve(); //deu certo 
        }
    }); //para publicar 
  })
}

conectarMqtt();

//Exportar as funções
export { publicar, onMessage, TOPICO_NIVEL_BOIA, TOPICO_ESTADO_LED, TOPICO_STATUS, TOPICO_NIVEL_UMIDADE, TOPICO_STATUS_CHUVA }
