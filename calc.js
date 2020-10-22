let btnNumbers = document.querySelectorAll(".btnNumb");
let btnOperators = document.querySelectorAll(".btnOp");
let affichage = document.getElementById('input');
let btnClear = document.querySelector('.btnCE');
let nb="", nb1=0,nb2=0,oper,result;
let opChoisie = false;
let egalClique = false;


for(let i=0;i<btnNumbers.length;i++){

     
    btnNumbers[i].addEventListener('click',function(e){
        nb += e.target.textContent;


        !egalClique ? affichage.value +=e.target.textContent : null;

        if(occurenceInInput(nb,".") >= 1 && e.target.textContent == "."){
            console.log(nbvirgule);
             return;
        } 


        if(!opChoisie){
            nb1=Number(nb);
        }else{
            nb2=Number(nb);
        }
      
    })
}

btnOperators.forEach(op =>{

    
         op.addEventListener('click',function(e){

            if(opChoisie == false){
            opChoisie = true;
            oper=e.target.textContent;
            nb="";
            affichage.value += oper;
            }
        })
   
})


 function calculer () {
   
     switch (oper) {
     
       case '+' :
        resultat = nb1 + nb2 ;
        break;
     
       case '-' :
        resultat = nb1 - nb2 ;
        break;
     
       case '*' :
        resultat = nb1 * nb2 ;
        break;
     
       case '/' : {
        
         if ( nb2 !== 0) 
         resultat = nb1 / nb2 ;
         else
         resultat = Infinity ;
         }
        // result =(parseFloat(result)).toFixed(4);
         break;
    
         default : 
         return ;
       }

       if(occurenceInInput(affichage.value,"=") >=1){
            return;
       }
       affichage.value +=  " = "+resultat;
       egalClique = true;
    } 


    function occurenceInInput(champ,v){
        let nbdecaracteres = (champ.split(v)).length-1; 
         return nbdecaracteres;
    }

    function clearscreen(){
        affichage.value="";
        nb=""; 
        nb1=0;
        nb2=0;
        oper="";
        result="";
        opChoisie = false;
        egalClique = false;

    }