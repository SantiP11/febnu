
/**
* Utilice este archivo para definir funciones y bloques personalizados.
* Lea más en https://makecode.microbit.org/blocks/custom
*/


enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace Ubit {

    /**
    * This is a block to reproduce a certain text through audio
    */
    //% block="Reproducir $steps por audio"
    export function move(steps: string) {

    }

    /**
     * This is a block to enable/disable symbol reading
     */
    //% block= "Reproducir iconos $yes"
    //% yes.shadow="toggleOnOff"
    export function icon(yes: boolean){

    }
}
