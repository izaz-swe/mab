export function toCelsius(farenhiet){
    return ((5/9)*(farenhiet-32));
}

export function toFarenhiet(celsius){
    return ((9*celsius/5)+32);
}


export function convert(temperature,convertTo){
    const input = parseFloat(temperature);
    if (Number.isNaN(input))return '';
    const output = convertTo(input);
    const rounded = Math.round(output*1000)/1000;
    return rounded;
}