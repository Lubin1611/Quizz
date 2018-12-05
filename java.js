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
        "intitule": "Question 2",
        "question": "Comme s'apelle ta formation ?",
        "reponse1": "la croisière s'amuse",
        "reponse2": "Uptofourmies",
        "reponse3": "Simon academy",
        "reponse4": "Les bidasses en vadrouille",
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
        "intitule": "Question 2",
        "question": "Comme s'apelle ta formation ?",
        "reponse1": "la croisière s'amuse",
        "reponse2": "Uptofourmies",
        "reponse3": "Simon academy",
        "reponse4": "Les bidasses en vadrouille",
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
];


$("#questions").html(arrQuestions[0].intitule + " " + arrQuestions[0].question);

$("#reponse1").html(arrQuestions[0].reponse1);
$("#reponse2").html(arrQuestions[0].reponse2);
$("#reponse3").html(arrQuestions[0].reponse3);
$("#reponse4").html(arrQuestions[0].reponse4);



var index = 0;

$("#reponse1, #reponse2, #reponse3, #reponse4").on("click", function () {


    if (index == 0) {

        i = 1;

        $("#questions").html(arrQuestions[i].intitule + " " + arrQuestions[i].question);

        $("#reponse1").html(arrQuestions[i].reponse1);
        $("#reponse2").html(arrQuestions[i].reponse2);
        $("#reponse3").html(arrQuestions[i].reponse3);
        $("#reponse4").html(arrQuestions[i].reponse4);

    }

});

/*var $coucou = document.getElementById("coucou");

$("#reponse1").hover(function () {

    $("#bidon").focus();

    console.log("#reponse1");
});
*/
