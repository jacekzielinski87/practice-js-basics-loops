const randomNumber = Math.round(Math.random() * 20);
console.log(randomNumber);

if (randomNumber > 5){
    for(let i=5;i <= randomNumber;i++){
        console.log (i);
    }
    console.log ('wieksze');
}
else {
    console.log ('wylosowana liczba jest zbyt mała,aby użyć pętli')
};


