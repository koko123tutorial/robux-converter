const robux = (value) => {
    let inputRobux = document.getElementById("robux")
    let outputRupiah = document.getElementById("rupiah")
    inputRobux.value = value

    const fixedPrice = 188
    let robux = value * fixedPrice
    console.log('robux bernilai = ', robux)
    
    let price = String(robux).split("").reverse()
    console.log('original price => ', price)
    
    for(let i = 0; i < price.length; i++){
        if((i + 1) % 3 == 0 && i !== price.length -1){
            price[i] = `.${price[i]}`
        }
    }
    console.log('converter price => ', price)
    const totalPrice = price.reverse().join("");
    console.log('total price => ', totalPrice);

    if(inputRobux !== ""){
        outputRupiah.value = `Rp. ${totalPrice}`
    }else {
        outputRupiah.value = ""
    }
}