/* Main JavaScript file */
// global scope
/**
 * FileName : app.js
 * 
 * @author Joanne Jung
 * @date June 8, 2016
 * @version 1.0.0 : Initial commit
 * 
 * Student ID : 300432364
 * website : http://joannejung-assign2-updated-miniportfolio.azurewebsites.net
 * @description This file is the  main JavaScript file for the miniportfolio updated version
 */

//IIFE - Immediately Invoked Functiona Expression
(function(){
    "use strict";
    var paragraphElements = [];
    
    paragraphElements[0] = document.getElementById("paragraphOne");
    paragraphElements[1] = document.getElementById("paragraphTwo");
    paragraphElements[2] = document.getElementById("paragraphThree");
    paragraphElements[3]=document.getElementById("paragraphFour");
    paragraphElements[4]=document.getElementById("paragraphFive");
    
    // define your paragraphs array(most common way)
    var paragraphs = [];
    
    // data for my pages   
    //index
    paragraphs[0] = "<div class='indexFirstSentence'> Loves to meet new people, but kind of shy.</div> <br><div class='picture'> <img src=Assets/shyicon.png></div><br><br><br>";
    // proejct
    paragraphs[1] = "<br><div class='indexSecondSentence'>The first project is from last semester, COMP213 - Web Interface Design, <br> and it is the main homepage of my portfolio. <br>It contains all assignments and projects I did for last year, and also little about myself.<br><a href='http://studentweb.cencol.ca/hjung3/'>Portfolio - COMP213</a> </div>";
    paragraphs[3]="<div class='indexSecondSentence'>The second project is a web registration form I developed for a Tennis club, Thornhill Park Tennis Club.<br> <a href='http://studentweb.cencol.ca/hjung3/assignment4/assignment_4.html'>Web Form - Thornhill Park Tennis Club.</a></div>"
    paragraphs[4]="<div class='indexSecondSentence'>The third project of mine is a website for a realtor, Maria Guadagnolo, with some of her current listings.<br> <a href='http://studentweb.cencol.ca/hjung3/Project/homepage.html'>Homepage - Maria Guadagnolo</a></div>"
    //about me
    paragraphs[2] = "<div class='indexSecondSentence'> If you can't avoid it, Enjoy it! <br>Then you will be always happy </div>";
    
    
    
    // check to see if paragraph one exists
   var paragraphElementsLength=paragraphElements.length;
    for (var index = paragraphElementsLength; index >= 0; index--) {
        if(paragraphElements[index]) {
         paragraphElements[index].innerHTML = paragraphs[index];
        }
    }
    
})();