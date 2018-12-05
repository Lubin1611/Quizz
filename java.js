var arrQuestions = [
    {
        "intitule": "Question 1",
        "question": "Quel est le pokemon préféré de Sacha ?",
        "reponse1": "Grotasdemorv",
        "reponse2": "pikachu",
        "reponse3": "Dracaufeu",
        "reponse4": "Chépo",
        "bonnereponse": "reponse2"

    },
    {
        "intitule": "Question 2",
        "question": "Comme s'apelle ta formation ?",
        "reponse1": "la croisière s'amuse",
        "reponse2": "Uptofourmies",
        "reponse3": "Simon academy",
        "reponse4": "Les bidasses en vadrouille",
        "bonnereponse": "reponse2"
    },
    {
        "intitule": "Question 3",
        "question": "Comment s'apelle le pote de sacha dans pokemon ?",
        "reponse1": "Kaled",
        "reponse2": "Pierre",
        "reponse3": "Cyriak",
        "reponse4": "Baboulinet",
        "bonnereponse": "reponse2"
    },
    {
        "intitule": "Question 4",
        "question": "Combien as tu de doigts ?",
        "reponse1": "deux",
        "reponse2": "trois",
        "reponse3": "cing",
        "reponse4": "avec les orteils aussi ? 42",
        "bonnereponse": "reponse3"
    },
    {
        "intitule": "Question 5",
        "question": "Sur quelle planète nous vivons ?",
        "reponse1": "La terre",
        "reponse2": "Venus",
        "reponse3": "Bisounours",
        "reponse4": "Planète a sec",
        "bonnereponse": "reponse1"
    },
    {
        "intitule": "Question 6",
        "question": "En quelle année seront nous l'annee prochaine ?",
        "reponse1": "2090",
        "reponse2": "2019",
        "reponse3": "1977",
        "reponse4": "50 av. JC",
        "bonnereponse": "reponse2"
    },
    {
        "intitule": "Question 7",
        "question": "Qu'est ce qui a été cassé ce matin ?",
        "reponse1": "Une table",
        "reponse2": "Une vitre",
        "reponse3": "Un ordi",
        "reponse4": "Une tasse",
        "bonnereponse": "reponse2"
    },
    {
        "intitule": "Question 8",
        "question": "Quelle est la masse du trou noir de notre galaxie ? (En soleils)",
        "reponse1": "10",
        "reponse2": "10.000",
        "reponse3": "100.000",
        "reponse4": "4,2 millions",
        "bonnereponse": "reponse4"
    },
    {
        "intitule": "Question 9",
        "question": "Combien avons-nous de cheveux ? (En moyenne)",
        "reponse1": "10 milliards",
        "reponse2": "entre 10.000 et 15 000",
        "reponse3": "entre 100.000 et 150 000",
        "reponse4": "4,2 millions",
        "bonnereponse": "reponse4"
    },
    {
        "intitule": "Question 10",
        "question": "0 + 0 = ?",
        "reponse1": "10",
        "reponse2": "0",
        "reponse3": "captcha reussi",
        "reponse4": "4,2 millions",
        "bonnereponse": "reponse3"
    }
];



$("#questions").html(arrQuestions[0].intitule + " " + arrQuestions[0].question);

$("#reponse1").html(arrQuestions[0].reponse1);
$("#reponse2").html(arrQuestions[0].reponse2);
$("#reponse3").html(arrQuestions[0].reponse3);
$("#reponse4").html(arrQuestions[0].reponse4);




var index = 0;

$("#reponse1, #reponse2, #reponse3, #reponse4").on("click", function () {


    //for (var i = 0; i < arrQuestions.length; i++) {


       // if (index == i) {

            //i++;

            //verification de la réponse
            console.log(this.id);

            if (this.id == arrQuestions[index].bonnereponse) {

                alert("bonne reponse !");

            }

            // Passage a la question suivante
            index++;

            $("#questions").html(arrQuestions[index].intitule + " " + arrQuestions[index].question);

            $("#reponse1").html(arrQuestions[index].reponse1);
            $("#reponse2").html(arrQuestions[index].reponse2);
            $("#reponse3").html(arrQuestions[index].reponse3);
            $("#reponse4").html(arrQuestions[index].reponse4);


        //}

    //}


});

console.log($("#reponse2").text());










/*var $coucou = document.getElementById("coucou");

$("#reponse1").hover(function () {

    $("#bidon").focus();

    console.log("#reponse1");
});
*/
