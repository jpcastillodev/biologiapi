import { tablaPeptidos } from './data'
const ARNm = (ADN = "") => {
    const data = [...ADN.toUpperCase()]
    const bases_complementarias = { A: "U", U: "A", T: "A", G: "C", C: "G" }
    for (const base of data) {
        if (!Object.keys(bases_complementarias).includes(base)) {
            throw new Error(`"${base}" no es un valor aceptado`)
        }
    }
    return data.map(base => bases_complementarias[base]).join("")
}
const ARNt = codon => {
    const anti_bases = { G: "C", C: "G", A: "U", U: "A" }
    const partes = []
    for (let k = 0; k < codon.length; k += 3) {
        const triplete = codon.slice(k, k + 3)
        const anti_codon = [...triplete].map(base => anti_bases[base])
        partes.push(anti_codon.join(""))
    }
    return partes.join("-")
}
const findCodon = (input = "") => {
    let arn_mensajero = input.replace(/-/g, '')
    const starter = "AUG"
    const enders = ["UGA", "UAA", "UAG"]
    let codon;
    for (let k = 0; k < arn_mensajero.length; k++) {
        if (arn_mensajero.slice(k, k + 3) === starter) {
            codon = arn_mensajero.slice(k, arn_mensajero.length)
            break;
        }
    }
    for (let k = 3; k < arn_mensajero.length; k++) {
        if (enders.includes(codon.slice(k, k + 3))) {
            codon = codon.slice(0, k + 3)
        }
    }

    return codon
}

const findPeptidos = (input = "") => {
    const arnm = []
    for (let k = 0; k < input.length; k += 3) {
        arnm.push(input.slice(k, k + 3))
    }
    const result = []
    const codon = arnm.map(v => [...v])
    for (const dimensions of codon) {
        const [x, y, z] = dimensions
        const peptido = (x && y && z) ? tablaPeptidos[x][y][z] : "Pnd"
        result.push(peptido)
    }
    return result.join("-")
}
const ADN2ARN = ADN => {
    const arnm = ARNm(ADN)
    if (!arnm.length) {
        throw new Error("La cadena esta vacia")
    }
    const codon = findCodon(arnm)
    return ARNt(codon)
}
const allAboutIt = (adn = "") => {
    if (!adn.length) {
        throw new Error("La cadena esta vacia")
    }
    const arnm = ARNm(adn)
    const codon = findCodon(arnm)
    const arnt = ARNt(codon).replace(/-/g,'')
    const peptidos = findPeptidos(codon)
    return {
        "ADN original": adn,
        "ARN mensaje": arnm, 
        "ARN transmisor":arnt, 
        "Codon": codon, 
        "Peptidos": peptidos
        
    }
}

export {
    ARNm,
    ARNt,
    findCodon,
    findPeptidos,
    ADN2ARN,
    allAboutIt
}
