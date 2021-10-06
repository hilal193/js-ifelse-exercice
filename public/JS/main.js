// 1
let tabPrenoms = ["hilal","ayhan","genchan","gweny","wassim","george","jon","hussein","heredia",];

let tabLength= tabPrenoms.length;
console.log(tabLength);

tabPrenoms.forEach(element => {
    // alert("bonjour : "+ element);
    console.log("bonjour : "+ element);
});

// 2

let aleatoire = Math.floor(Math.random() * 10);
alert(`reponse :p ${aleatoire}`);//réponse
let qstn= Number(prompt("entrer un nombre entre 1 & 10"));

if (aleatoire===qstn) {
    alert(`félicitations! vous avez trouvez le bon numéro : ${aleatoire}`);
}
else if (qstn=="") {
    alert("vous n'avez rien écri!,recommence")
}else if (aleatoire!=qstn) {
    alert("veuillez recommencer svp");
    qstn= Number(prompt("entrer un nombre entre 1 & 10"));
    if (aleatoire===qstn) {
        alert(`félicitations! vous avez trouvez le bon numéro : ${aleatoire}`);
    }else{
        alert("vous avez échoué")
    }
}else{
    alert("faute de frappe")
}


// 3


let qstn1= [];

qstn1.push(prompt("qui est le héros principal dans batman?"));
qstn1.push(prompt("qui est le héros principal dans superman?"));
qstn1.push(prompt("qui est le méchant principal dans le film broly"));

let rep1=["batman","superman","broly"];

console.log(rep1);
console.log(qstn1);
console.log(qstn1==rep1);

if (qstn1.includes("batman","superman","broly")) {
    alert("bravo avez trouvez toutes les réponse : "+ rep1+ " ce que vous avez introduit : "+qstn1);
}else if (qstn1.includes("batman","broly")) {
    alert("presque avez trouvez 2 réponse sur 3 : "+ rep1+ " ce que vous avez introduit : "+qstn1);
}else if (qstn1.includes("superman","broly")) {
    alert("presque avez trouvez 2 réponse sur 3 : "+ rep1+ " ce que vous avez introduit : "+qstn1);
}else if (qstn1.includes("superman","batman")) {
    alert("presque avez trouvez 2 réponse sur 3 : "+ rep1+ " ce que vous avez introduit : "+qstn1);
}else if (qstn1.includes("batman")) {
    alert("presque avez trouvez 1 réponse sur 3 : "+ rep1+ " ce que vous avez introduit : "+qstn1);
}else if (qstn1.includes("superman")) {
    alert("presque avez trouvez 1 réponse sur 3 : "+ rep1+ " ce que vous avez introduit : "+qstn1);
}else if (qstn1.includes("broly")) {
    alert("presque avez trouvez 1 réponse sur 3 : "+ rep1+ " ce que vous avez introduit : "+qstn1);
}else{
    alert("nul");
}