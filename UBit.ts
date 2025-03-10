
/**
* Utilice este archivo para definir funciones y bloques personalizados.
* Lea más en https://makecode.microbit.org/blocks/custom
*/


enum Sensor {
    Temperatura,
    Luz,
    Sonido,
    Aceleracion,
    Brujula,
    Rotacion,
    Tiempo,
    Fuerza_Magnetica
}

/**
 * Custom blocks
 */
//% weight=100 color=#c845da icon="\uf29a"
namespace UBit {

    /**
    * This is a block to reproduce a certain text through audio
    */
    //% block="Reproducir $text por audio"
    export function RepText(text: string) {

    }

    /**
    * This is a block to reproduce a certain text through audio
    */
    //% block="Reproducir $num por audio"
    export function RepNum(num: number) {

    }

    /**
    * This is a block to reproduce a certain text through audio
    */
    //% block="Habilitar iconos $yes"
    //% yes.shadow="toggleOnOff"
    export function Icon(yes: boolean) {

    }

    /**
    * This is a block to reproduce a certain text through audio
    */
    //% block="Utilizar el sonsor de  $yes por el canal $int"
    export function ActSen(yes: Sensor, int: number) {

    }

    /**
    * This is a block to reproduce a certain text through audio
    */
    //% block="Utilizar todos los sensores externos en el canal $int"
    export function ActAllSenExt(int: number) {

    }

    /**
    * This is a block to reproduce a certain text through audio
    */
    //% block="Enviar datos de sensores por el canal $int"
    export function SendAllSenInt(int: number) {

    }

}
