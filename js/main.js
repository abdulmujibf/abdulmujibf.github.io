// Selector
let yourName = prompt(`Siapa Nama Kamu?`)
let tempPoint = prompt(`Note: Harus Angka dari 1 - 1000`, `Masukkan Koin Mu`)
let displayPoint = document.getElementById(`current-point`)
let displayName = document.getElementById(`your-name`)
let gachaButton = document.getElementById(`button`)
let prize1 = document.getElementById(`prize-1`)
let prize2 = document.getElementById(`prize-2`)
let prize3 = document.getElementById(`prize-3`)
let prize4 = document.getElementById(`prize-4`)
let ticket = document.getElementById(`your-ticket`)
let zonk = document.getElementById(`zonk`)

//Tampungan
let currentPoint = Number(tempPoint)
let temp = ''
let warning = 0
let ticketPoint = 0

// Proses dari Varieble Your Name
if(yourName === ''){
    displayName.innerText = `HI! UNKNOWN PEOPLE`
}
else{
    displayName.innerText = `HI! ${yourName.toUpperCase()}`
}

while(isNaN(currentPoint) || typeof currentPoint === 'string'){ // Untuk Menghandle apakah variable numPoint String / tidak
    if(warning < 5){
        tempPoint = prompt('Maaf Anda Harus Memasukkan Angka!')
    }else if(warning > 5){
        tempPoint = prompt('Ampun dah bandel Banget!, udah 5 Kali dibilangin Harus Angka')
    }
    warning++
    let num = '1234567890'
    for(let i = 0; i < tempPoint.length; i++){
        for(let j = num.length-1; j >=0 ; j--){
            if(num[j] === tempPoint[i]){
                temp+= tempPoint[i]
            }
        }
    }
    if(temp){
        currentPoint = Number(temp)
        break
    }
}
if(currentPoint > 1000 || currentPoint === 0 || isNaN(currentPoint)){ // Untuk Menghandle Apakah angkanya lebih dari seribu
    while(currentPoint > 1000  || currentPoint <= 0 || isNaN(currentPoint)){
        tempPoint = prompt(`Angka Harus Dibawah 1000 dan diatas 0`)
        currentPoint = Number(tempPoint)
        while(isNaN(currentPoint) || typeof currentPoint === 'string'){ // Untuk Menghandle Apakah Angka yang di masukkan string, lagi atau tidak
            if(warning < 5){
                tempPoint = prompt('Maaf Anda Harus Memasukkan angka')
            }else if(warning > 5){
                tempPoint = prompt('Ampun dah bandel Banget!, udah 5 Kali dibilangin Harus Angka')
            }
            warning++
            let num = '1234567890'
            for(let i = 0; i < tempPoint.length; i++){
                for(let j = num.length-1; j >=0 ; j--){
                    if(num[j] === tempPoint[i]){
                        temp+= tempPoint[i]
                    }
                }
            }
            if(temp){
                currentPoint = Number(temp)
                break
            }
        }
        if(currentPoint < 1000 && currentPoint !== '' && currentPoint !== 0 && isNaN(currentPoint)){
            break
        }
    }
}
//Tampilan awal Ticket dan point sebelum Nge-Gacha
displayPoint.innerText = `Your Point: ${currentPoint}`
ticket.innerText = `Your Ticket: ${ticketPoint}`

//Start Gacha
function startGacha(){
    if(currentPoint < 10){
        return alert(`Kamu Harus Top Up / Pulang minta uang sama mama buat beli point`)
    }
    currentPoint -= 10
    displayPoint.innerText = `Your Point: ${currentPoint}` // Tampilan Point saat udah Gacha
    let random = Math.round(Math.random()*20)
    switch(random){
        case 1:
            prize4.style.display = 'Block' // Untuk Menampilkan Ticket yang Didapat
            ticketPoint += 10
            break
        case 7:
            prize3.style.display = 'Block'
            ticketPoint += 20
            break
        case 13:
            prize2.style.display = 'Block'
            ticketPoint += 30
            break
        case 19:
            prize1.style.display = 'Block'
            ticketPoint += 40
            break
        default:
            zonk.style.display = 'Block'
            break
    }
    ticket.innerText = `Your Ticket: ${ticketPoint}` // Tampilan ticket saat Udah Gacha
}

//Untuk Menghilangkan Tampilan Ticket saat dapat
function reset() {
    prize1.style.display = 'none'
    prize2.style.display = 'none'
    prize3.style.display = 'none'
    prize4.style.display = 'none'
    zonk.style.display = 'none'
}

//Top Up Point dan Mengurangi ticket
function up10(){
    if(ticketPoint < 10){
        return alert(`Ticket Kamu Kurang`)
    }else{
        ticketPoint -= 10
        currentPoint += 10
        displayPoint.innerText = `Your Point: ${currentPoint}`
        ticket.innerText = `Your Ticket: ${ticketPoint}` 
    }

}

function up20(){
    if(ticketPoint < 20){
        return alert(`Ticket Kamu Kurang`)
    }else{
        ticketPoint -= 20
        currentPoint += 20
        displayPoint.innerText = `Your Point: ${currentPoint}`
        ticket.innerText = `Your Ticket: ${ticketPoint}` 
    }

}

function up30(){
    if(ticketPoint < 30){
        return alert(`Ticket Kamu Kurang`)
    }else{
        ticketPoint -= 30
        currentPoint += 30
        displayPoint.innerText = `Your Point: ${currentPoint}`
        ticket.innerText = `Your Ticket: ${ticketPoint}` 
    }

}

function up40(){
    if(ticketPoint < 40){
        return alert(`Ticket Kamu Kurang`)
    }else{
        ticketPoint -= 40
        currentPoint += 40
        displayPoint.innerText = `Your Point: ${currentPoint}`
        ticket.innerText = `Your Ticket: ${ticketPoint}` 
    }

}
