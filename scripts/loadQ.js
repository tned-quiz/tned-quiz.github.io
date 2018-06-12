//Components Content box quiz
import {headBoxQuiz} from '../components/headBoxQuiz';
import {intituleQuiz} from '../components/intituleQuiz';
import {assetQuiz} from '../components/assetQuiz';
import {reponsesQuiz} from '../components/reponsesQuiz';

//Parcel import img
/*import url from '../assets/img/Question2.jpg';
import urlImg from '../assets/img/Question2.jpg';
console.log(url);*/

function loadQ(q, qGameplay, qBox, rangQ){
  /********* Recupération des elmts du DOM *********/
  // head_box_quiz elmts
  var headQuiz = qBox.getElementsByClassName('head_box_quiz')[0];
  // content quiz elmts
  var contentQuiz = qBox.getElementsByClassName('content_box_quiz')[0];

  /********* Def chemin url des src *********/
  var url = './assets/';
  var urlImg = url+'img/';

  console.log(q);

  //headBoxQuiz
  headBoxQuiz(q, qGameplay, headQuiz, rangQ);

  //Content Box Quiz
  //Si Q multiples => 1 template/gameplay - plusieurs contents
  //Q type code
  if(Array.isArray(q.intitules)){
    contentQuiz.className += " typeCode";
    //recup la clé des data multiples (en array)
    q.intitules.map((intitule, key) => getContentQ(key));
  }else{
    getContentQ(null);
  }

  function getContentQ(key){

    //INTITULE
    var intitule = intituleQuiz(q.intitules, key);

    //si ASSETS
    if(q.assets && q.assets.type != "dossier"){
      var asset = assetQuiz(q, url, key);
    }

    //REPONSES
    var reponse = reponsesQuiz(q, urlImg, key);

    if(Array.isArray(q.intitules)){//temp pour multi q type code...plusieurs content_box_quiz
      if(asset){
        contentQuiz.appendChild(asset);
        //asset.style.height = "200px";//temp
      }
      contentQuiz.appendChild(intitule);
      contentQuiz.appendChild(reponse);
    }else{
      contentQuiz.appendChild(intitule);
      if(asset){contentQuiz.appendChild(asset);}
        contentQuiz.appendChild(reponse);
    }

  }//endGetContentKey
}

export {loadQ};
