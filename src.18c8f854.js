// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({60:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var demoCorpus = {
  gameplays: [{
    id: "qru",
    type: [{
      name: "radio",
      default: true,
      libelle: "Question Vrai - Faux"
    }, { name: "img_btn", libelle: "Selectionner l'image" }],
    instruction: "Sélectionner la bonne réponse"
  }, {
    id: "qrm",
    type: [{
      name: "checkbox",
      default: true,
      libelle: "Question à choix multiple"
    }, { name: "img_btn", libelle: "Selectionner les images" }],
    instruction: "Sélectionner la ou les bonnes réponses"
  }, {
    id: "txt_tr",
    type: [{ name: "select", default: true, libelle: "Text à trou" }, { name: "d&d", libelle: "Drag and Drop" }],
    instruction: "Trouver les mots manquants"
  }, {
    id: "curseur",
    type: [{ name: "range", default: true, libelle: "Slider" }],
    instruction: "Déplacer le curseur"
  }, {
    id: "ord_lst",
    type: [{ name: "d&d", default: true, libelle: "Remettre dans l'ordre" }],
    instruction: "Maintenir cliqué l'élément et déplacer"
  }, {
    id: "assoc",
    type: [{ libelle: "Association" }],
    instruction: "Relier entre eux"
  }],
  categorie: ["connaissances", "compréhension", "comportement"],
  questions: [{
    id: 1,
    gameplay: "qrm",
    categorie: "compréhension",
    intitules: "La voiture jaune est bien placée pour :",
    assets: {
      type: "img",
      src: "Question1.jpg"
    },
    reponses: [{ label: "prendre la première sortie", value: true }, { label: "prendre la troisième sortie", value: false }, { label: "aller tout droit", value: true }, { label: "aller à Lyon", value: true }]
  }, {
    id: 2,
    gameplay: "qru",
    categorie: "compréhension",
    intitules: "La voiture jaune est-elle bien placée pour tourner à gauche ?",
    assets: {
      type: "img",
      src: "Question2.jpg"
    },
    reponses: [{ label: "non", value: true }, { label: "oui", value: false }]
  }, {
    id: 3,
    gameplay: "qru",
    categorie: "compréhension",
    intitules: "On est le 17 du mois, peut-on stationner du côté de la rue où le numéro des maison est impair ?",
    assets: {
      type: "img",
      src: "Question3.png"
    },
    reponses: [{ label: "faux", value: true }, { label: "vrai", value: false }]
  }, {
    id: 4,
    gameplay: "curseur",
    categorie: "connaissance",
    intitules: "Combien de points peut-on perdre sur son permis de conduire si on stationne ou on circule sur la bande d'arrêt d’urgence ?",
    reponses: {
      true: 3,
      min: 0,
      max: 12,
      step: 1
    },
    additionalText: " point(s)"
  }, {
    id: 5,
    gameplay: "curseur",
    categorie: "connaissance",
    intitules: "Combien de points risque t-on de perdre sur son permis lorsque l’on se gare à contresens de la circulation ? ",
    reponses: {
      true: 0,
      min: 0,
      max: 12,
      step: 1
    },
    additionalText: " point(s)"
  }, {
    id: 6,
    gameplay: "qrm",
    categorie: "compréhension",
    intitules: "Que doit faire le conducteur de la voiture jaune ?",
    assets: {
      type: "img",
      src: "Question6.jpg"
    },
    reponses: [{ label: "mettre le pied face au frein", value: true }, {
      label: "observer attentivement la voiture bleue",
      value: true
    }, { label: "maintenir son allure", value: false }, { label: "etablir un contact visuel", value: true }]
  },
  // {
  //     id: 7,
  //     gameplay: 'ord_lst',
  //     categorie: 'connaissance',
  //     intitules:
  //         'Que faut-il faire avant d’engager un dépassement sur voie rapide ?',
  //     reponses: [
  //         { label: 'observer dans son rétroviseur intérieur', value: 1 },
  //         {
  //             label: 'observer dans son rétroviseur extérieur gauche',
  //             value: 2
  //         },
  //         { label: 'observer dans son angle mort gauche', value: 3 },
  //         { label: 'activer son clignotant', value: 4 },
  //         { label: 'passer sur la voie de gauche', value: 5 },
  //         { label: 'maintenir une allure soutenue', value: 6 },
  //         {
  //             label:
  //                 'voir le véhicule doublé en entier dans son rétroviseur intérieur',
  //             value: 7
  //         },
  //         { label: 'se rabattre à droite sans coup de volant', value: 8 }
  //     ]
  // },
  // {
  //     id: 8,
  //     gameplay: 'ord_lst',
  //     categorie: 'compréhension',
  //     intitules:
  //         'Comment le conducteur de la voiture orange doit-il se comporter dans cette situation ?',
  //     assets: {
  //         type: 'img',
  //         src: 'Question8.jpg'
  //     },
  //     reponses: [
  //         { label: 'observer dans son rétroviseur intérieur', value: 1 },
  //         {
  //             label: 'observer dans son rétroviseur extérieur droit',
  //             value: 2
  //         },
  //         { label: 'observer son angle mort droit', value: 3 },
  //         { label: 'mettre son clignotant', value: 4 },
  //         {
  //             label: "s'arrêter pour laisser passer le cycliste",
  //             value: 5
  //         },
  //         { label: 'tourner une fois le cycliste passé', value: 6 }
  //     ]
  // },
  {
    id: 9,
    gameplay: "qrm",
    type: "img_btn",
    categorie: "connaissance",
    intitules: "Quels usagers n’ont pas le droit de circuler sur une voie rapide ?",
    assets: {
      type: "dossier",
      src: "Question9/"
    },
    reponses: [{
      img: "interdit velo",
      src: "interditVelo@3x.png",
      value: true
    }, {
      img: "interdit bus",
      src: "interditBus@3x.png",
      value: false
    }, {
      img: "interdit marchandises",
      src: "interditMarchandises@3x.png",
      value: false
    }, {
      img: "interdit moto",
      src: "interditMoto@3x.png",
      value: false
    }, {
      img: "interdit tracteur",
      src: "interditTracteur@3x.png",
      value: true
    }, {
      img: "interdit mobylette",
      src: "interditMobylette@3x.png",
      value: true
    }, {
      img: "interdit pieton",
      src: "interditPieton@3x.png",
      value: true
    }, {
      img: "interdit 12t",
      src: "interdit12t@3x.png",
      value: false
    }, {
      img: "interdit caravane",
      src: "interditCaravane@3x.png",
      value: false
    }]
  }, {
    id: 10,
    gameplay: "qrm",
    type: "img_btn",
    categorie: "connaissance",
    intitules: "Quels panneaux peut on rencontrer dans une zone de stationnement payant ?",
    assets: {
      type: "dossier",
      src: "Question10/"
    },
    reponses: [{
      img: "arrêt/stationnement interdit",
      src: "ASinterdit@3x.png",
      value: false
    }, {
      img: "arrêt/stationnement interdit sauf..",
      src: "ASinterditSauf@3x.png",
      value: true
    }, {
      img: "stationnement interdit",
      src: "Sinterdit@3x.png",
      value: false
    }, {
      img: "zone stationnement interdit",
      src: "SinterditZone@3x.png",
      value: false
    }, {
      img: "fin zone stationnement interdit",
      src: "SinterditZoneFin@3x.png",
      value: false
    }, {
      img: "zone stationnement limité par disque",
      src: "SlimitéDisqueZone@3x.png",
      value: false
    }, {
      img: "fin zone stationnement limité par disque",
      src: "SlimitéDisqueZoneFin@3x.png",
      value: false
    }, {
      img: "zone stationnement payant",
      src: "SpayantZone@3x.png",
      value: true
    }, {
      img: "fin zone stationnement payant",
      src: "SpayantZoneFin@3x.png",
      value: true
    }]
  }, {
    id: 11,
    gameplay: "qru",
    categorie: "connaissance",
    name: "Questions type code",
    intitules: ["En terme de sécurité routière, l’éco-conduite a-t-elle des effets positifs ?", "En terme de confort pour le conducteur et les passagers ?"],
    assets: {
      type: "img",
      src: "Question11.png"
    },
    reponses: [[{ label: "Oui", value: true }, { label: "Non", value: false }], [{ label: "Oui", value: true }, { label: "Non", value: false }]]
  }, {
    id: 12,
    gameplay: "qrm",
    categorie: "compréhension",
    name: "Question type code",
    intitules: "Sur cette route, je peux circuler à",
    assets: {
      type: "img",
      src: "Question12.png"
    },
    reponses: [{ label: "90 km/h", value: true }, { label: "100 km/h", value: true }, { label: "110 km/h", value: true }, { label: "130 km/h", value: false }]
  }, {
    id: 13,
    gameplay: "txt_tr",
    categorie: "connaissance",
    intitules: "A quoi servent les voies réservées ?",
    assets: {
      type: "img",
      src: "Question13.jpg"
    },
    reponses: [{
      label: ["Elles servent à délimiter l’espace de chaque ", " de la route;"],
      options: ["usager", "partie"],
      correct: "0"
    }, {
      label: ["et ainsi mieux ", " ."],
      options: ["cohabiter", "circuler"],
      correct: "0"
    }, {
      label: ["Il est donc important que chacun ", "l’espace des autres."],
      options: ["ignore", "observe", "respecte"],
      correct: "2"
    }]
  }, {
    id: 14,
    gameplay: "txt_tr",
    categorie: "connaissance",
    intitules: "Quels sont les avantages du covoiturage ? ",
    reponses: [{
      label: ["Le covoiturage ", " le nombre de véhicules  en circulation"],
      options: ["augmente", "diminue"],
      correct: "1"
    }, {
      label: ["et par conséquent réduit les rejets de ", ", "],
      options: ["H2O", "CO2", "SO2"],
      correct: "1"
    }, {
      label: "le risque d’accident et les nuisances ",
      options: ["sonores", "visuelles"],
      correct: "0"
    }]
  }, {
    id: 15,
    gameplay: "qrm",
    categorie: "compréhension",
    intitules: "Quelle erreur commet le conducteur de la voiture jaune ?",
    assets: {
      type: "video",
      src: "Question15.mp4",
      alt: "vidéo croisement / obstacle sur la chaussée"
    },
    reponses: [{ label: "il oublie de mettre son clignotant", value: false }, {
      label: "il ne respecte pas les règles de priorité",
      value: true
    }, { label: "il roule trop vite", value: false }, { label: "il circule à contresens", value: false }]
  }, {
    id: 16,
    gameplay: "qrm",
    categorie: "compréhension",
    intitules: "Cette manoeuvre est:",
    assets: {
      type: "video",
      src: "Question16.mp4",
      alt: "Vidéo créneau stationnement à contresens"
    },
    reponses: [{ label: "autorisée", value: false }, { label: "interdite", value: true }, { label: "passible d’une amende de 35€", value: true }, { label: "passible d’une amende de 135€", value: false }]
  },
  ///////////////////////////////////////////////////////////
  {
    id: 17,
    gameplay: "qrm",
    type: "img_btn",
    categorie: "connaissance",
    intitules: "Quels panneaux peut on rencontrer sur un rétrécissement de chaussée ?",
    assets: {
      type: "dossier",
      src: "Question17/"
    },
    reponses: [{
      img: "interdit velo",
      src: "cedezLePassage@3x.png",
      value: false
    }, {
      img: "interdit bus",
      src: "circulation2sens@3x.png",
      value: false
    }, {
      img: "interdit marchandises",
      src: "depassement2-1@3x.png",
      value: false
    }, {
      img: "interdit moto",
      src: "obligationToutDroit@3x.png",
      value: false
    }, {
      img: "interdit tracteur",
      src: "prioritaireProchaine@3x.png",
      value: false
    }, {
      img: "interdit mobylette",
      src: "prioriteAutre@3x.png",
      value: true
    }, {
      img: "interdit pieton",
      src: "prioriteMoi@3x.png",
      value: true
    }, {
      img: "interdit 12t",
      src: "retrecissementDroite@3x.png",
      value: true
    }, {
      img: "interdit caravane",
      src: "sensUnique@3x.png",
      value: false
    }]
  }, {
    id: 18,
    gameplay: "qrm",
    type: "img_btn",
    categorie: "connaissance",
    intitules: "Quels panneaux peut-on rencontrer aux abords d’un rond point à deux voies ?",
    assets: {
      type: "dossier",
      src: "Question18/"
    },
    reponses: [{
      img: "interdit velo",
      src: "30@3x.png",
      value: false
    }, {
      img: "interdit bus",
      src: "ASinterdit@3x.png",
      value: false
    }, {
      img: "interdit marchandises",
      src: "cedezLePassage@3x.png",
      value: true
    }, {
      img: "interdit moto",
      src: "directionOBL@3x.png",
      value: true
    }, {
      img: "interdit tracteur",
      src: "DIRgrandeVille@3x.png",
      value: true
    }, {
      img: "interdit mobylette",
      src: "interditDemitour@3x.png",
      value: false
    }, {
      img: "interdit pieton",
      src: "interditDepassement@3x.png",
      value: false
    }, {
      img: "interdit 12t",
      src: "obligationDroite@3x.png",
      value: true
    }, {
      img: "interdit caravane",
      src: "virageGauche@3x.png",
      value: false
    }]
  }, {
    id: 19,
    gameplay: "curseur",
    categorie: "connaissance",
    intitules: "Combien de points peut-on perdre pour un défaut de clignotant lorsqu'on sort d’un rond point ?",
    reponses: {
      true: 3,
      min: 0,
      max: 12,
      step: 1
    },
    additionalText: " point(s)"
  }, {
    id: 20,
    gameplay: "curseur",
    categorie: "connaissance",
    intitules: "Combien de points perd on sur son permis lorsqu’on grille un feu rouge ?",
    reponses: {
      true: 4,
      min: 0,
      max: 12,
      step: 1
    },
    additionalText: " point(s)"
  }, {
    id: 21,
    gameplay: "curseur",
    categorie: "connaissance",
    intitules: "Quel est l'espérance de vie d’un piéton sur la bande d'arrêt d’urgence ?",
    reponses: {
      true: 20,
      min: 5,
      max: 60,
      step: 5
    },
    additionalText: " minutes"
  }, {
    id: 22,
    gameplay: "curseur",
    categorie: "connaissance",
    intitules: "Sur voie rapide, à quelle distances sont situées les bornes d’appel les unes des autres ?",
    reponses: {
      true: 2,
      min: 0,
      max: 20,
      step: 1
    },
    additionalText: " kilomètres"
  }, {
    id: 23,
    gameplay: "qru",
    categorie: "compréhension",
    intitules: "Que signifie ce panneau ?",
    assets: {
      type: "img",
      src: "Question23.png"
    },
    reponses: [{
      label: "le stationnement est interdit dans la rue du 16 au 31",
      value: false
    }, {
      label: "le stationnement est interdit du 16 au 31 du côté où il est implanté",
      value: true
    }, {
      label: "le stationnement est autorisé dans la rue du 16 au 31",
      value: false
    }, {
      label: "le stationnement  est autorisé du 16 au 31 du côté où il est implanté",
      value: false
    }]
  }, {
    id: 24,
    gameplay: "qrm",
    categorie: "compréhension",
    intitules: "Sur voie rapide, quels sont les paramètres à respecter avant de s’engager dans le trafic ?",
    // assets: {
    //     type: 'img',
    //     src: 'Question1.jpg'
    // },
    reponses: [{ label: "observer son angle mort gauche", value: true }, { label: "adapter sa vitesse au trafic", value: true }, { label: "conserver une vitesse soutenue", value: false }, { label: "s’engager le plus tôt possible", value: false }]
  }, {
    id: 25,
    gameplay: "qru",
    categorie: "compréhension",
    intitules: "Le dépassement de tous véhicules est interdit aux abord d’une priorité à droite ?",
    assets: {
      type: "img",
      src: "Question25.png"
    },
    reponses: [{ label: "Vrai", value: false }, { label: "Faux", value: true }]
  }, {
    id: 26,
    gameplay: "qru",
    categorie: "compréhension",
    intitules: "La voiture jaune est bien placée pour aller tout droit.",
    assets: {
      type: "img",
      src: "Question26.jpg"
    },
    reponses: [{ label: "Vrai", value: true }, { label: "Faux", value: false }]
  }, {
    id: 27,
    gameplay: "qru",
    categorie: "compréhension",
    intitules: "Le sas à vélo permet aux cyclistes de franchir les feux rouge sans s’arrêter.",
    assets: {
      type: "img",
      src: "Question27.jpg"
    },
    reponses: [{ label: "Vrai", value: false }, { label: "Faux", value: true }]
  }, {
    id: 28,
    gameplay: "qrm",
    categorie: "compréhension",
    intitules: "Le feu est en panne,",
    assets: {
      type: "img",
      src: "Question28.jpg"
    },
    reponses: [{ label: "la voiture jaune est prioritaire", value: false }, { label: "La voiture rouge est prioritaire", value: true }, { label: "La voiture jaune doit s’arrêter", value: true }, { label: "La voiture rouge doit s’arrêter", value: false }]
  }, {
    id: 29,
    gameplay: "qrm",
    categorie: "connaissance",
    intitules: "La consommation d’alcool entraîne :",
    assets: {
      type: "img",
      src: "Question29.png"
    },
    reponses: [{ label: "une diminution du temps de réaction", value: false }, { label: "une augmentation du temps de réaction", value: true }, { label: "un rétrécissement du champs visuel", value: true }, { label: "une perturbation des gestes", value: true }]
  }, {
    id: 30,
    gameplay: "qrm",
    categorie: "connaissance",
    intitules: "La consommation de carburant dépend :",
    // assets: {
    //     type: 'img',
    //     src: 'Question1.jpg'
    // },
    reponses: [{ label: "des caractéristiques du véhicules", value: true }, { label: "du style de conduite", value: true }, { label: "du chargement du véhicule", value: true }, { label: "aucun des trois", value: false }]
  }, {
    id: 31,
    gameplay: "qru",
    categorie: "connaissance",
    intitules: "Combien de temps faut-il à l’organisme pour éliminer totalement une bière de 25cl consommée ?",
    assets: {
      type: "img",
      src: "Question31.png"
    },
    reponses: [{ label: "environ 15 minutes", value: false }, { label: "environ 30 minutes", value: false }, { label: "environ 45 minutes", value: false }, { label: "environ 1 heure", value: true }]
  }, {
    id: 32,
    gameplay: "qrm",
    categorie: "compréhension",
    intitules: "Quelle voiture est en infraction ?",
    assets: {
      type: "img",
      src: "Question32.jpg"
    },
    reponses: [{ label: "la voiture jaune", value: false }, { label: "la voiture rouge", value: false }, { label: "la voiture bleue", value: false }, { label: "aucune", value: true }]
  }, {
    id: 33,
    gameplay: "qrm",
    categorie: "compréhension",
    intitules: "Pour aller à Lille, il faut :",
    assets: {
      type: "img",
      src: "Question33.png"
    },
    reponses: [{
      label: "se placer à droite avant le rond-point",
      value: true
    }, {
      label: "se placer à gauche avant le rond-point",
      value: false
    }, {
      label: "se placer sur la voie extérieure de l’anneau",
      value: true
    }, {
      label: "se placer sur la voie intérieure de l’anneau",
      value: false
    }, {
      label: "activer son clignotant droit en entrant dans le rond-point",
      value: false
    }, {
      label: "activer son clignotant droit en sortant du rond-point",
      value: true
    }]
  }, {
    id: 34,
    gameplay: "qrm",
    categorie: "compréhension",
    intitules: "Le conducteur de la voiture jaune :",
    assets: {
      type: "video",
      src: "Question34.mp4"
    },
    reponses: [{ label: "s’insère trop tôt", value: true }, {
      label: "commet une infraction",
      value: true
    }, {
      label: "aurait dû utiliser davantage la voie d’accélération",
      value: true
    }, { label: "oublie de mettre son clignotant", value: false }, { label: "coupe la ligne blanche continue", value: true }, {
      label: "s’insère dans le trafic avec une vitesse adaptée",
      value: false
    }]
  }, {
    id: 35,
    gameplay: "qrm",
    categorie: "compréhension",
    intitules: "A cette intersection :",
    assets: {
      type: "video",
      src: "Question35.mp4"
    },
    reponses: [{
      label: "c’est la règle de la priorité à droite qui s’applique",
      value: true
    }, {
      label: "la voiture jaune est prioritaire",
      value: false
    }, {
      label: "la voiture bleue est prioritaire",
      value: true
    }, {
      label: "la voiture jaune doit s’arrêter avant l’intersection",
      value: true
    }, {
      label: "la voiture bleue doit s’arrêter avant l’intersection",
      value: false
    }]
  }, {
    id: 36,
    gameplay: "qrm",
    categorie: "compréhension",
    intitules: "Le conducteur de la voiture jaune",
    assets: {
      type: "video",
      src: "Question36.mp4"
    },
    reponses: [{ label: "est bien placé", value: false }, { label: "est mal placé", value: true }, { label: "aurait dû serrer à droite", value: true }, { label: "gêne la voiture marron", value: true }, { label: "dépasse la ligne de stop", value: false }, { label: "veut aller à droite", value: true }]
  }, {
    id: 37,
    gameplay: "qru",
    categorie: "compréhension",
    intitules: "Les distances de sécurité sont-elles respectées ?",
    assets: {
      type: "video",
      src: "Question37.mp4"
    },
    reponses: [{ label: "Oui", value: false }, { label: "Non", value: true }]
  }, {
    id: 38,
    gameplay: "txt_tr",
    categorie: "compréhension",
    intitules: "Quelle influence la vitesse a-t-elle sur le champs de vision d’un conducteur ?",
    assets: {
      type: "img",
      src: "Question38.png"
    },
    reponses: [{
      label: ["Plus on roule vite , plus le champs de vision du conducteur ", "."],
      options: ["augmente", "rétrécit", "est nette", "s’assombrit"],
      correct: "1"
    }, {
      label: ["Dès qu’on détecte une situation dangereuse il faut donc ", " pour  "],
      options: ["accélérer", "rétrograder", "ralentir"],
      correct: "2 "
    }, {
      label: ["avoir le temps ", "et de réagir."],
      options: ["d’observer", "de contrôler", "de freiner", "de s’arrêter"],
      correct: "1"
    }]
  }, {
    id: 39,
    gameplay: "txt_tr",
    categorie: "compréhension",
    intitules: "Pourquoi faut-il faire attention dans cette situation ?",
    assets: {
      type: "img",
      src: "Question39.jpg"
    },
    reponses: [{
      label: ["Les piétons sur le trottoir et à l’arrêt de bus vont chercher à traverser la route. On reste ", "et on garde"],
      options: ["vigilant", "serein", "actif"],
      correct: "0"
    }, {
      label: [" le pied devant ", " pour"],
      options: ["l’accélérateur", "le frein", "l’embrayage"],
      correct: "1"
    }, {
      label: [" ", "toutes les situations."],
      options: ["appréhender", "anticiper", "détecter"],
      correct: "1"
    }]
  }, {
    id: 40,
    gameplay: "qru",
    categorie: "comportement",
    intitules: "Ce camion est-il en infraction ?",
    assets: {
      type: "img",
      src: "Question40.jpg"
    },
    reponses: [{ label: "Oui", value: true }, { label: "Non", value: false }]
  }, {
    id: 41,
    gameplay: "qru",
    categorie: "comportement",
    intitules: "Vous arrive-t-il de vous énerver au volant ? Quelle circonstance est la plus favorable au déclenchement de cet énervement ?",
    assets: {
      type: "img",
      src: "Question41.png"
    },
    reponses: [{
      label: "Le comportement d’un autre ou d’autres conducteur(s) qui me gêne",
      value: false
    }, {
      label: "Le fait d’être en retard pour votre prochain rendez-vous",
      value: true
    }, {
      label: "Le comportement d’autres personnes à bord de votre véhicule",
      value: true
    }, {
      label: "Le temps que vous avez l’impression de perdre en voiture",
      value: true
    }, {
      label: "Pour des raisons liées à autre chose que la route",
      value: true
    }, { label: "La qualité de la signalisation", value: false }]
  }, {
    id: 42,
    gameplay: "qru",
    categorie: "comportement",
    intitules: "Connaissez-vous personnellement des conducteurs qui ‘glissent’ parfois les Stops (qui ne s’y arrêtent pas) ?",
    assets: {
      type: "img",
      src: "Question42.jpg"
    },
    reponses: [{
      label: "Oui, c’est le cas de la plupart des personnes dont je connais la conduite",
      value: false
    }, {
      label: "Oui, certaines de mes connaissances le font souvent",
      value: false
    }, {
      label: "Oui, je connais au moins une personne qui le fait occasionnellement",
      value: true
    }, { label: "Non, je n’en connais aucun", value: true }, { label: "Je ne me suis jamais posé la question", value: false }]
  }, {
    id: 43,
    gameplay: "qru",
    categorie: "comportement",
    intitules: "Vous arrive-t-il de faire du vélo ?",
    assets: {
      type: "img",
      src: "Question43.png"
    },
    reponses: [{
      label: "Oui, je me déplace principalement en vélo",
      value: true
    }, {
      label: "Oui, plusieurs fois par semaine",
      value: true
    }, {
      label: "Oui, occasionnellement, moins d’un fois par semaine",
      value: true
    }, { label: "Oui, mais rarement", value: false }, { label: "Non, pas depuis plus d’un an", value: false }]
  }, {
    id: 44,
    gameplay: "qru",
    categorie: "comportement",
    intitules: "Trouvez-vous que les sanctions, en cas d’infraction routière, sont ?",
    // assets: {
    //     type: 'video',
    //     src: 'Question36.mp4'
    // },
    reponses: [{
      label: "Trop faibles, et donc pas assez dissuasives",
      value: true
    }, {
      label: "Équilibrées, et donc relativement efficaces",
      value: true
    }, {
      label: "Trop importantes, et donc souvent injustes",
      value: false
    }, { label: "Exorbitantes, mais inefficaces", value: false }, {
      label: "Sans rapport avec les infractions, servent à rapporter de l’argent à l’Etat",
      value: false
    }]
  }, {
    id: 45,
    gameplay: "qru",
    categorie: "comportement",
    intitules: "Quelles circonstances vous amènent à dépasser la limite de vitesse ?",
    assets: {
      type: "img",
      src: "Question45.png"
    },
    reponses: [{
      label: "Quand il n’y a personne d’autre sur la route, et donc pas de danger",
      value: false
    }, {
      label: "Quand je suis pressé, mais sans excéder quelques Km/h (moins de 15%)",
      value: false
    }, {
      label: "Souvent, les limitations sont vraiment trop basses",
      value: false
    }, {
      label: "Jamais, en tout cas j’essaye de les respecter",
      value: true
    }, {
      label: "Rarement, essentiellement les 30Km/h, car c’est vraiment trop lent",
      value: true
    }]
  }, {
    id: 46,
    gameplay: "qru",
    categorie: "comportement",
    intitules: "Quelle est la première phrase qui vous vient à l’esprit sur les vélos en ville ?",
    assets: {
      type: "img",
      src: "Question46.jpg"
    },
    reponses: [{
      label: "J’y fais très attention, parce que c’est un moyen de transport que j’utilise beaucoup",
      value: true
    }, {
      label: "Ils me font peur, on ne les voit pas arriver",
      value: true
    }, {
      label: "C’est difficile de cohabiter car, souvent, ils ne respectent pas le code de la route",
      value: false
    }, {
      label: "Ils devraient être interdits ou bien limités sur des rues assez larges pour les accueillir",
      value: false
    }]
  }, {
    id: 47,
    gameplay: "qru",
    categorie: "comportement",
    intitules: "Pourquoi n’utilisez-vous pas le vélo pour vous rendre à votre travail ?",
    assets: {
      type: "img",
      src: "Question47.png"
    },
    reponses: [{
      label: "Mais si, je l’utilise, et même tous les jours !",
      value: true
    }, {
      label: "Mon lieu de travail est trop éloigné, et je ne peux pas me changer en arrivant",
      value: false
    }, {
      label: "Je pourrais, mais je trouve ça trop dangereux",
      value: false
    }, {
      label: "J’y vais en moto (scooter) et c’est bien plus efficace et rapide",
      value: false
    }, {
      label: "Je prends les transports en commun en priorité",
      value: true
    }, {
      label: "Tiens, c’est une idée… Je pourrais essayer",
      value: true
    }]
  }, {
    id: 48,
    gameplay: "qru",
    categorie: "comportement",
    intitules: "Quelle incivilité constatez-vous le plus souvent chez les autres conducteurs ?",
    // assets: {
    //     type: 'video',
    //     src: 'Question36.mp4'
    // },
    reponses: [{
      label: "L’utilisation du téléphone au volant",
      value: true
    }, {
      label: "L’oubli du clignotant (ou son utilisation à contre-emploi)",
      value: true
    }, {
      label: "Le non-respect des distances de sécurité",
      value: true
    }, {
      label: "L’ignorance des priorités (notamment les Stop ‘glissés’)",
      value: true
    }, {
      label: "Le dépassement des vitesses autorisées",
      value: true
    }]
  }, {
    id: 49,
    gameplay: "qru",
    categorie: "comportement",
    intitules: "Vous êtes fatigué(e) mais vous devez prendre le volant pour des raisons professionnelles, que faites-vous ?",
    // assets: {
    //     type: 'video',
    //     src: 'Question36.mp4'
    // },
    reponses: [{
      label: "Je vais être particulièrement vigilent(e) et prudent(e)",
      value: false
    }, {
      label: "J’ai l’habitude de rouler en étant fatigué(e) j’ouvre la fenêtre et je mets la radio",
      value: false
    }, {
      label: "Je prévois de m’arrêter souvent, dès les premiers signes d’endormissement",
      value: false
    }, {
      label: "Je renonce à prendre le volant, tant pis pour mon rendez-vous",
      value: true
    }]
  }, {
    id: 50,
    gameplay: "qru",
    categorie: "comportement",
    intitules: "Avez-vous déjà eu peur au volant ?",
    // assets: {
    //     type: 'video',
    //     src: 'Question36.mp4'
    // },
    reponses: [{
      label: "Oui, assez souvent, je n’aime pas trop conduire",
      value: false
    }, {
      label: "Rarement, et dans des circonstances exceptionnelles",
      value: false
    }, {
      label: "Parfois, surtout à cause du comportement des autres automobilistes",
      value: false
    }, {
      label: "Jamais, je sais que je conduis bien et que je maîtrise mon véhicule",
      value: false
    }, {
      label: "Je me méfie autant de moi que des autres tout en restant serein(e)",
      value: true
    }]
  }, {
    id: 51,
    gameplay: "qru",
    categorie: "comportement",
    intitules: "Quel type de route vous sentez-vous le plus en sécurité ?",
    // assets: {
    //     type: 'video',
    //     src: 'Question36.mp4'
    // },
    reponses: [{
      label: "Les voies rapides, car la vitesse reste limitée (110) et la sécurité maximum",
      value: true
    }, {
      label: "Sur autoroute, ce sont les trajets qui me semblent les plus sûrs",
      value: true
    }, {
      label: "Les petites routes de campagne, on y roule plus tranquillement",
      value: false
    }, {
      label: "Les trajets que j’emprunte habituellement, car je les connais parfaitement",
      value: false
    }]
  }, {
    id: 52,
    gameplay: "qru",
    categorie: "culture",
    intitules: "En quelle année, le portable au volant a-t-il été considéré comme une infraction ?",
    // assets: {
    //     type: 'img',
    //     src: 'Question52.png'
    // },
    reponses: [{ label: "31 mars 1999", value: false }, { label: "31 mars 2001", value: false }, { label: "31 mars 2003", value: true }, { label: "31 mars 2005", value: false }]
  }, {
    id: 53,
    gameplay: "qru",
    categorie: "culture",
    intitules: "A partir de quel taux d’alcool dans le sang un conducteur est en délit ?",
    assets: {
      type: "img",
      src: "Question53.png"
    },
    reponses: [{ label: "0,2 g/l de sang", value: false }, { label: "0,5 g/l de sang", value: false }, { label: "0,6 g/l de sang", value: false }, { label: "0,8 g/l de sang", value: true }]
  }, {
    id: 54,
    gameplay: "qru",
    categorie: "culture",
    intitules: "A partir de quel taux d’alcoolémie peut-on recevoir une contravention ?",
    assets: {
      type: "img",
      src: "Question54.png"
    },
    reponses: [{ label: "0,2 g/l de sang", value: false }, { label: "0,5 g/l de sang", value: true }, { label: "0,6 g/l de sang", value: false }, { label: "0,8 g/l de sang", value: false }]
  }, {
    id: 55,
    gameplay: "qru",
    categorie: "culture",
    intitules: "En quelle année est-il devenu obligatoire d’avoir un éthylotest dans sa voiture ?",
    assets: {
      type: "img",
      src: "Question55.jpg"
    },
    reponses: [{ label: "2002", value: false }, { label: "2006", value: false }, { label: "2010", value: false }, { label: "2012", value: true }]
  }, {
    id: 56,
    gameplay: "qru",
    categorie: "culture",
    intitules: "A quelle date, la vitesse sur route sans séparateur central est-elle passé de 90 km/h à 80 km/h.",
    assets: {
      type: "img",
      src: "Question56.png"
    },
    reponses: [{ label: "1 juin 2018", value: false }, { label: "10 juin 2018", value: false }, { label: "21 juin 2018", value: false }, { label: "1 juillet 2018", value: true }]
  }, {
    id: 57,
    gameplay: "qru",
    categorie: "culture",
    intitules: "En 2017, combien de personnes ont perdu la vie sur nos routes Françaises ?",
    assets: {
      type: "img",
      src: "Question57.png"
    },
    reponses: [{ label: "3 196", value: false }, { label: "3 684", value: true }, { label: "4 326", value: false }, { label: "5 897", value: false }]
  }, {
    id: 58,
    gameplay: "qru",
    categorie: "culture",
    intitules: "En quelle année, le non port de la ceinture de sécurité est-il devenu une infraction au code de la route ?",
    assets: {
      type: "img",
      src: "Question59.png"
    },
    reponses: [{ label: "1994", value: false }, { label: "1998", value: false }, { label: "2002", value: true }, { label: "2006", value: false }]
  }, {
    id: 59,
    gameplay: "qru",
    categorie: "culture",
    intitules: "En quelle année la loi Badinter (protection des cyclistes et piétons) a-t-elle été mise en place ?",
    assets: {
      type: "img",
      src: "Question59.png"
    },
    reponses: [{ label: "1985", value: true }, { label: "1988", value: false }, { label: "1990", value: false }, { label: "1995", value: false }]
  }, {
    id: 60,
    gameplay: "qru",
    categorie: "culture",
    intitules: "En quelle année le permis a point est-il entrée en vigueur en France ?",
    assets: {
      type: "img",
      src: "Question60.jpg"
    },
    reponses: [{ label: "1982", value: false }, { label: "1986", value: false }, { label: "1992", value: true }, { label: "1996", value: false }]
  }, {
    id: 61,
    gameplay: "qru",
    categorie: "culture",
    intitules: "Le coût global de l’insécurité routière en france est estimé à :",
    assets: {
      type: "img",
      src: "Question61.jpg"
    },
    reponses: [{ label: "20 milliards d’euros", value: false }, { label: "28 milliards d’euros", value: false }, { label: "30 milliards d’euros", value: false }, { label: "38 milliards d’euros", value: true }]
  }, {
    id: 62,
    gameplay: "qru",
    categorie: "culture",
    intitules: "Une enfant de moins de 10 ans doit toujours être placé à l’arrière du véhicule ?",
    // assets: {
    //     type: 'img',
    //     src: 'Question2.jpg'
    // },
    reponses: [{ label: "Vrai", value: false }, { label: "Faux", value: true }]
  }]
};

exports.demoCorpus = demoCorpus;
},{}],57:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function shuffle(a) {
    var cpy = [].concat(_toConsumableArray(a));

    for (var i = cpy.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var _ref = [cpy[j], cpy[i]];
        cpy[i] = _ref[0];
        cpy[j] = _ref[1];
    }
    return cpy;
}

function getIdsByCategory(questions, category) {
    return questions.filter(function (q) {
        return q.categorie === category;
    }).map(function (q) {
        return q.id;
    });
}

function qCorpusAleat(questions) {
    var comprehensionQuestionIds = getIdsByCategory(questions, 'compréhension');
    var knowledgeQuestionIds = getIdsByCategory(questions, 'connaissance');
    var behaviorQuestionIds = getIdsByCategory(questions, 'comportement');
    var cultureQuestionIds = getIdsByCategory(questions, 'culture');

    return shuffle([].concat(_toConsumableArray(shuffle(comprehensionQuestionIds).slice(0, 2)), _toConsumableArray(shuffle(knowledgeQuestionIds).slice(0, 3)), _toConsumableArray(shuffle(behaviorQuestionIds).slice(0, 3)), _toConsumableArray(shuffle(cultureQuestionIds).slice(0, 2))));

    // return [
    //     ...comprehensionQuestionIds,
    //     ...knowledgeQuestionIds,
    //     ...behaviorQuestionIds
    // ];
}

exports.qCorpusAleat = qCorpusAleat;
},{}],78:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function headBoxQuiz(q, qGp, headQuiz, rangQ, nbreQ) {

  // TITLE - Question N°
  var title = headQuiz.getElementsByClassName('title')[0];
  title.innerHTML = "Question " + rangQ + " / " + nbreQ;

  //GAMEPLAY
  var leadGp = headQuiz.getElementsByClassName('gameplay')[0];
  //si q.type leadGameplay = libelle name type correspondant sinon libelle default
  var typeX = !q.type ? qGp.type.findIndex(function (e) {
    return e.default;
  }) : qGp.type.findIndex(function (e) {
    return e.name === q.type;
  });
  leadGp.innerHTML = qGp.type[typeX].libelle;

  //INSTRUCTION
  var instruct = headQuiz.getElementsByClassName('instruct')[0];
  instruct.innerHTML = qGp.instruction;
}

exports.headBoxQuiz = headBoxQuiz;
},{}],79:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function intituleQuiz(intitule, key) {
  var intituleDiv = document.createElement('div');
  intituleDiv.className = "intitules";
  var para = document.createElement('p');
  para.innerHTML = key != null ? intitule[key] : intitule;
  intituleDiv.appendChild(para);

  return intituleDiv;
}

exports.intituleQuiz = intituleQuiz;
},{}],80:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function assetQuiz(q, url, key) {
    if (key) {
        //temp
        return;
    } else {
        var divAsset = document.createElement('div');
        divAsset.className = 'assets';
        var asseType = q.assets.type;
        //url de l'asset
        var urlAsset = url + asseType + '/';
        var asset = document.createElement(asseType);
        //si img
        if (asseType == 'img') {
            asset.alt = q.intitules;
            asset.src = urlAsset + q.assets.src;
        }
        //si video...
        if (asseType == 'video') {
            asset.controls = true;
            var source = document.createElement('source');
            source.src = urlAsset + q.assets.src;
            source.type = 'video/mp4';
            asset.innerHTML = 'Video non pris en charge...' + '<br/>' + q.assets.alt;
            asset.insertBefore(source, asset.childNodes[asset.childNodes.length - 1]);
        }
        //assign asset
        divAsset.appendChild(asset);

        return divAsset;
    }
}

exports.assetQuiz = assetQuiz;
},{}],92:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function imgCheck(imgClic, qType) {
    //get default css border
    var imgBorder = imgClic[0].style.border;
    var imgBgColor = imgClic[0].style.backgroundColor;

    //init borderColor &bgColor
    for (var x = 0; x < imgClic.length; x++) {
        imgClic[x].style.border = imgBorder;
        imgClic[x].style.backgroundColor = imgBgColor;
    }

    //Toogle border suivant gameplay qru / qrm
    for (var i = 0; i < imgClic.length; i++) {
        imgClic[i].addEventListener('click', function (ev) {
            //Si QRU -> on toogle borders & bg
            if (qType === 'qru') {
                window.testContext.setAnswer(ev.target.value);
                for (var x = 0; x < imgClic.length; x++) {
                    imgClic[x].style.border = imgBorder;
                    imgClic[x].style.backgroundColor = imgBgColor;
                }
                //add border & bg select
                ev.target.style.border = '.1rem solid var(--primary-color)';
                ev.target.style.backgroundColor = '.1rem solid var(--primary-color)';
            }

            //Si QRM -> on retire border au click
            if (qType === 'qrm') {
                window.testContext.pushAnswer(ev.target.value);
                if (ev.target.style.backgroundColor === 'var(--primary-color)') {
                    ev.target.style.border = imgBorder;
                    ev.target.style.backgroundColor = imgBgColor;
                } else {
                    //add select
                    ev.target.style.border = '.1rem solid var(--primary-color)';
                    ev.target.style.backgroundColor = 'var(--primary-color)';
                }
            }
        });
    }
}

exports.imgCheck = imgCheck;
},{}],93:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function labelCheck(divRep, qType) {
    var inputClic = divRep.getElementsByTagName('input');

    //get default css style elmnt
    var label = divRep.getElementsByTagName('label')[0];
    var checkmark = label.getElementsByClassName('checkmark')[0];
    var lbBgColor = label.style.backgroundColor;
    var lbBorder = label.style.border;
    var chkmBgColor = checkmark.style.backgroundColor;
    var chkmBorder = checkmark.style.border;

    for (var i = 0; i < inputClic.length; i++) {
        inputClic[i].addEventListener('click', function (ev) {
            label = ev.target.parentNode;
            checkmark = label.getElementsByClassName('checkmark')[0];

            //Si QRU -> on toogle
            if (qType === 'qru') {
                window.testContext.setAnswer(ev.target.value);
                var labels = divRep.getElementsByTagName('label');
                var checkmarks = divRep.getElementsByClassName('checkmark');

                //Init default style
                for (var x = 0; x < labels.length; x++) {
                    labels[x].style.backgroundColor = lbBgColor;
                    labels[x].style.border = lbBorder;
                    checkmarks[x].style.backgroundColor = chkmBgColor;
                    checkmarks[x].style.border = chkmBorder;
                }
                //add bg select
                label.style.backgroundColor = 'var(--primary-color)';
                //label.style.border =
                checkmark.style.backgroundColor = 'var(--main-ft-color)';
                checkmark.style.borderColor = 'var(--main-ft-color)';
            }

            //Si QRM -> on rm active color au click
            if (qType === 'qrm') {
                window.testContext.pushAnswer(ev.target.value);
                if (label.style.backgroundColor == 'var(--primary-color)') {
                    label.style.backgroundColor = lbBgColor;
                    checkmark.style.backgroundColor = chkmBgColor;
                    checkmark.style.border = chkmBorder;
                } else {
                    //add bg select
                    label.style.backgroundColor = 'var(--primary-color)';
                    checkmark.style.backgroundColor = 'var(--main-ft-color)';
                    checkmark.style.borderColor = 'var(--main-ft-color)';
                }
            }
        });
    }
}

exports.labelCheck = labelCheck;
},{}],94:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function labelCheckTypeC(divRep, qType, key) {
    var inputClic = divRep.getElementsByTagName('input');

    //get default css style elmnt
    var label = divRep.getElementsByTagName('label')[0];
    var checkmark = label.getElementsByClassName('checkmark')[0];
    var lbBgColor = label.style.backgroundColor;
    var lbBorder = label.style.border;
    var chkmBgColor = checkmark.style.backgroundColor;
    var chkmBorder = checkmark.style.border;

    for (var i = 0; i < inputClic.length; i++) {
        inputClic[i].addEventListener('click', function (ev) {
            var label = ev.target.parentNode;
            var checkmark = label.getElementsByClassName('checkmark')[0];

            //Si QRU -> on toogle
            if (qType === 'qru') {
                window.testContext.setAnswer(ev.target.value);
                var labels;
                var checkmarks;

                //si typeCode...
                if (key !== null) {
                    var repKey = divRep.parentNode.getElementsByClassName('reponses')[key];
                    labels = repKey.getElementsByTagName('label');
                    checkmarks = repKey.getElementsByClassName('checkmark');
                } else {
                    labels = divRep.getElementsByTagName('label');
                    checkmarks = divRep.getElementsByClassName('checkmark');
                }

                //Init default style
                for (var x = 0; x < labels.length; x++) {
                    labels[x].style.backgroundColor = lbBgColor;
                    checkmarks[x].style.backgroundColor = chkmBgColor;
                    checkmarks[x].style.border = chkmBorder;
                }
                //add bg select
                label.style.backgroundColor = 'var(--primary-color)';
                checkmark.style.backgroundColor = 'var(--main-ft-color)';
                checkmark.style.borderColor = 'var(--main-ft-color)';
            }

            //Si QRM -> on rm active color au click
            if (qType === 'qrm') {
                window.testContext.pushAnswer(ev.target.value);

                if (label.style.backgroundColor == 'var(--primary-color)') {
                    label.style.backgroundColor = lbBgColor;
                    checkmark.style.backgroundColor = chkmBgColor;
                    checkmark.style.border = chkmBorder;
                } else {
                    //add bg select
                    label.style.backgroundColor = 'var(--primary-color)';
                    checkmark.style.backgroundColor = 'var(--main-ft-color)';
                    checkmark.style.borderColor = 'var(--main-ft-color)';
                }
            }
        });
    }
}

exports.labelCheckTypeC = labelCheckTypeC;
},{}],87:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.repQr = undefined;

var _imgCheck = require('../../viewStyle/imgCheck');

var _labelCheck = require('../../viewStyle/labelCheck');

var _labelCheckTypeC = require('../../viewStyle/labelCheckTypeC');

function repQr(q, qName, urlImg, inpuType, key, divRep) {
    //si TypeCode modif qName pour id input htmlFor
    qName = key !== null ? qName + '.' + key : qName;
    //si Q multiple...Type code
    for (var x in key !== null ? q.reponses[key] : q.reponses) {
        //INPUT setAttribute
        var input = document.createElement('input');
        input.setAttribute('type', inpuType);
        input.name = q.gameplay == 'qrm' ? qName + '[]' : qName;
        // input.value = qName + '_rep' + x;

        input.value = (key !== null ? key : '@') + '.' + x + '.' + (key !== null ? q.reponses[key][x].value : q.reponses[x].value);
        input.id = qName + '_rep' + x;

        //LABEL setAttribute
        var label = document.createElement('label');
        label.htmlFor = input.id;

        //si type IMG_BTN
        if (q.type && q.type === 'img_btn') {
            label.className = 'labelImgBox';

            var imgX = q.reponses[x];
            var imgSrc = urlImg + q.assets.src;

            //INPUT setAttribute
            input.className = 'rad_img';
            // input.value = imgX.img;

            //IMG setAttribute
            var img = document.createElement('img');
            img.className = 'img_btn';
            img.src = imgSrc + imgX.src;
            img.alt = imgX.img;
            img.height = '114';
            img.width = '114';
            img.value = (key !== null ? key : '@') + '.' + x + '.' + (key !== null ? q.reponses[key][x].value : q.reponses[x].value);

            //label NODES ImgBtn
            label.appendChild(img);
        } else {
            label.className = 'labelBox';

            //span attr ->rm input default style
            var span = document.createElement('span');
            span.className = 'checkmark';

            //label NODES QR
            var labelTxt = (key !== null ? q.reponses[key] : q.reponses)[x].label;
            labelTxt = labelTxt.substr(0, 1).toUpperCase() + labelTxt.substr(1, labelTxt.length);
            label.innerHTML = labelTxt;

            label.insertBefore(span, label.firstChild);
        }

        //label NODES
        label.insertBefore(input, label.firstChild);
        //div reponse Nodes
        divRep.appendChild(label);
    }

    var tagCheck;
    if (q.type === 'img_btn') {
        //style GRID divRep si q gameplay= imageClick -> type dossier
        divRep.className += ' clickImg_rep';

        //def anim imgCheck
        (0, _imgCheck.imgCheck)(divRep.getElementsByTagName('img'), q.gameplay);
    } else {
        if (key === null) {
            //def anim labelChecked
            (0, _labelCheck.labelCheck)(divRep, q.gameplay);
        } else {
            (0, _labelCheckTypeC.labelCheckTypeC)(divRep, q.gameplay, key);
        }
    }
}

exports.repQr = repQr;
},{"../../viewStyle/imgCheck":92,"../../viewStyle/labelCheck":93,"../../viewStyle/labelCheckTypeC":94}],91:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function cursorValue(curseur, count, additionalText) {
    /* add txt value for type range */
    count.textContent = curseur.value + additionalText;

    window.testContext.setAnswer('@._.' + curseur.value);
    curseur.oninput = function () {
        count.textContent = curseur.value + additionalText;
        window.testContext.setAnswer('@._.' + curseur.value);
    };
}

exports.cursorValue = cursorValue;
},{}],88:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.repCurseur = undefined;

var _cursorValue = require('../../viewStyle/cursorValue');

function repCurseur(q, qName, inpuType, divRep) {
    var input = document.createElement('input');
    var br = document.createElement('br');
    var span = document.createElement('span');
    span.className = 'crs_count';
    //input Attr
    input.setAttribute('type', inpuType);
    input.id = qName;
    input.name = qName;
    input.defaultValue = q.reponses.min;
    input.min = q.reponses.min;
    input.max = q.reponses.max;
    input.step = q.reponses.step;
    //div reponse Nodes
    divRep.appendChild(input);
    divRep.appendChild(br);
    divRep.appendChild(span);

    //add anim cursorValue
    (0, _cursorValue.cursorValue)(input, span, q.additionalText || '');
}

exports.repCurseur = repCurseur;
},{"../../viewStyle/cursorValue":91}],95:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function dragDropOrdLst(dragSpan, gameplay, divRep, dragTxts) {

  var i, dragged, dataDrop, dragZone;

  //start drag&drop
  for (i = 0; i < dragSpan.length; i++) {
    dragSpan[i].addEventListener("dragstart", function (event) {
      event.dataTransfer.setData("text/plain", event.target.id);
    });
  }

  /* Drag & drop function */

  /* events fired on the DRAGGABLE target */
  //add an style event when drag start & stop.. dragenter / dragleave
  divRep.addEventListener("dragstart", function (event) {
    // store a ref. on the dragged elem
    dragged = event.target.innerText;
    dragZone = event.target;
    console.log(dragZone);
    // empty droparea
    //event.target.innerText = "";
    event.target.style.opacity = .4;
    event.target.parentNode.style.background = "var(--secondary-db-color)";
  });

  divRep.addEventListener("dragend", function (event) {
    // reset background
    event.target.parentNode.style.background = "var(--main-bg-color)";
    //si non drop
    /*if(event.target.innerText == ""){
      event.target.innerText = dragged;
    }*/
    event.target.style.opacity = 1;
  }, false);

  /* events fired on the DROP targets */
  /*dragover => every time (a lot..) whent elmnt drag over valid draggable_span dropzone*/
  divRep.addEventListener("dragover", function (event) {
    // prevent default to allow drop
    event.preventDefault();
  }, false);

  /* dragenter => when elmnt drag over valid drop ONCE */
  divRep.addEventListener("dragenter", function (event) {
    var dropTarget;
    // highlight potential drop target when the draggable element enters it
    if (event.target.nodeType == 1 && event.target.classList.contains("dropzone")) {
      /*dataDrop = event.target.innerText;
      console.log("dataDrop : "+dataDrop);*/
      event.target.style.background = "var(--primary-op-color)";

      dropTarget = event.target;
    } else if (event.target.nodeType == 3 && event.target.parentNode.classList.contains("dropzone")) {
      //add same active style to draggable_span dropzone (parent)
      event.target.parentNode.parentNode.style.background = "var(--primary-op-color)";

      dropTarget = event.target.parentNode;
    }
    //Start move drag elmnt
    if (dropTarget) {
      dataDrop = dropTarget.innerText;
      console.log("dataDrop : " + dataDrop);
    }
  }, false);

  divRep.addEventListener("dragleave", function (event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.nodeType == 1 && event.target.classList.contains("dropzone")) {
      event.target.style.background = "";
    } else if (event.target.nodeType == 3 && event.target.parentNode.classList.contains("dropzone")) {
      event.target.parentNode.parentNode.style.background = "";
    }
  }, false);

  divRep.addEventListener("drop", function (event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();

    //get DropTarget
    var dropTarget;
    if (event.target.nodeType == 1 && event.target.classList.contains("dropzone")) {
      dropTarget = event.target;
      event.target.style.background = "";
      event.target.parentNode.style.background = "";
    } else if (event.target.nodeType == 3 && event.target.parentNode.classList.contains("dropzone")) {
      dropTarget = event.target.parentNode;
      event.target.parentNode.parentNode.style.background = "";
    }

    // move dragged elmt to the selected drop target
    if (dropTarget) {
      var data = event.dataTransfer.getData("text"); //id drag span
      var list_items = divRep.getElementsByClassName("draggable_span");
      var save_data = dropTarget.innerHTML;

      //recup position elmt drag & drop
      for (var i = 0; i < list_items.length; i++) {
        //select id elemt drop -> position puis switch items...
        if (list_items[i].getAttribute("id") == dropTarget.getAttribute("id")) {
          console.log("drop : " + i);
          var dp = i;
        }
        if (list_items[i].getAttribute("id") == data) {
          console.log("drag : " + i);
          var dg = i;
        }
      }

      data = document.getElementById(data).innerHTML;
      console.log(data);
      dropTarget.innerHTML = data;
      for (var i = 1; i <= Math.abs(dg - dp); i++) {
        //i contient nbre itération
        //suivant move top - down
        if (dp > dg) {
          data = list_items[dp - i].innerHTML;
          list_items[dp - i].innerHTML = save_data;
        } else {
          data = list_items[i + dp].innerHTML;
          list_items[i + dp].innerHTML = save_data;
        }
        save_data = data;
      }

      //event.target.value = divRep.getElementById(data).innerHTML;
    }
  }, false);
}

exports.dragDropOrdLst = dragDropOrdLst;
},{}],89:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repOrdLst = undefined;

var _dragDropOrdLst = require('../../viewStyle/dragDropOrdLst');

function repOrdLst(q, divRep) {
  var dragTxt = [];
  var ordListe = document.createElement('ol');
  for (var x in q.reponses) {
    var itemListe = document.createElement('li');
    var divDrop = document.createElement('div');
    divDrop.className = "droparea";
    //SPAN DRAGGABLE
    var spanDrag = document.createElement('span');
    spanDrag.className = "draggable_span dropzone";
    spanDrag.id = "drag" + x;
    spanDrag.setAttribute("draggable", true);
    //Add Nodes
    var spanTxt = q.reponses[x].label;
    spanTxt = spanTxt.substr(0, 1).toUpperCase() + spanTxt.substr(1, spanTxt.length);
    spanDrag.innerHTML = spanTxt;
    dragTxt.push(spanTxt);
    divDrop.appendChild(spanDrag);
    itemListe.appendChild(divDrop);
    ordListe.appendChild(itemListe);
  }
  divRep.appendChild(ordListe);
  //add annim style dragDrop
  (0, _dragDropOrdLst.dragDropOrdLst)(divRep.getElementsByClassName('draggable_span'), q.gamplay, divRep, dragTxt);
}

exports.repOrdLst = repOrdLst;
},{"../../viewStyle/dragDropOrdLst":95}],90:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*import {repDragDrop} from './repDragDrop';*/

function repTxtTr(q, qName, inpuType, divRep) {
    //si type Drag & drop
    if (q.type && q.type === 'd&d') {
        inpuType = 'text';
        /*repDragDrop(q, qName, inpuType, divRep);*/
    } else {
        //sinon SELECT
        for (var x in q.reponses) {
            var select = document.createElement('select');
            var qRepX = q.reponses[x];

            select.onchange = function (event) {
                window.testContext.setAnswer(event.target.value);
            };

            //SELECT
            select.id = qName + '_rep' + x;
            select.name = qName + '_rep' + x;
            for (var y in qRepX.options) {
                //OPTIONS
                var option = document.createElement('option');
                option.text = qRepX.options[y];
                option.value = x + '._.' + y;
                select.add(option);
            }
            select.selectedIndex = -1; //default select empty
            select.setAttribute('required', true);

            //DIVCUSTOM
            var divCustom = document.createElement('div');
            divCustom.className = 'custom_select';
            divCustom.appendChild(select);

            //LABEL
            var label = document.createElement('label');
            //label.htmlFor = select.id;
            //si label array (input au milieu)
            if (Array.isArray(qRepX.label)) {
                label.innerHTML = qRepX.label[0];
                label.appendChild(divCustom);
                label.insertAdjacentText('beforeend', qRepX.label[1]);
            } else {
                label.innerHTML = qRepX.label;
                label.appendChild(divCustom);
            }
            //DIVREP ADD NODES
            divRep.appendChild(label);
        }
    } //end toogle d&d select
}

exports.repTxtTr = repTxtTr;
},{}],81:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reponsesQuiz = undefined;

var _repQr = require('./repGameplay/repQr');

var _repCurseur = require('./repGameplay/repCurseur');

var _repOrdLst = require('./repGameplay/repOrdLst');

var _repTxtTr = require('./repGameplay/repTxtTr');

function reponsesQuiz(q, urlImg, key) {
  var qName = q.gameplay + q.id;

  var divRep = document.createElement('div');
  divRep.className = "reponses";
  //style class GAMEPLAY reponse
  divRep.className += " " + q.gameplay + "_rep";

  var inpuType;

  //suivant gameplay
  switch (q.gameplay) {
    // QRU QRM
    case 'qru':
    case 'qrm':
      inpuType = q.gameplay == 'qrm' ? "checkbox" : "radio";
      (0, _repQr.repQr)(q, qName, urlImg, inpuType, key, divRep);
      break;
    //CURSEUR
    case 'curseur':
      inpuType = 'range';
      (0, _repCurseur.repCurseur)(q, qName, inpuType, divRep);
      break;
    //ORD_LST
    case 'ord_lst':
      (0, _repOrdLst.repOrdLst)(q, divRep);
      break;

    //TXT_TR
    case 'txt_tr':
      (0, _repTxtTr.repTxtTr)(q, qName, inpuType, divRep);
      break;
  } //end switch

  return divRep;
}

exports.reponsesQuiz = reponsesQuiz;
},{"./repGameplay/repQr":87,"./repGameplay/repCurseur":88,"./repGameplay/repOrdLst":89,"./repGameplay/repTxtTr":90}],58:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadQ = undefined;

var _headBoxQuiz = require('./components/headBoxQuiz');

var _intituleQuiz = require('./components/intituleQuiz');

var _assetQuiz = require('./components/assetQuiz');

var _reponsesQuiz = require('./components/reponsesQuiz');

//Components Content box quiz
function loadQ(q, qGameplay, qBox, rangQ, nbreQ) {
    /********* Recupération des elmts du DOM *********/
    // head_box_quiz elmts
    var headQuiz = qBox.getElementsByClassName('head_box_quiz')[0];
    // content quiz elmts
    var contentQuiz = qBox.getElementsByClassName('content_box_quiz')[0];

    /********* Def chemin url des src *********/
    var url = './assets/';
    var urlImg = url + 'img/';

    //headBoxQuiz
    (0, _headBoxQuiz.headBoxQuiz)(q, qGameplay, headQuiz, rangQ, nbreQ);

    //Content Box Quiz
    //Si Q multiples => 1 template/gameplay - plusieurs contents
    //Q type code
    if (Array.isArray(q.intitules)) {
        if (!contentQuiz.classList.contains('typeCode')) {
            contentQuiz.classList.add('typeCode');
        }
        //recup la clé des data multiples (en array)
        q.intitules.map(function (intitule, key) {
            return getContentQ(key);
        });
    } else {
        getContentQ(null);
        if (contentQuiz.classList.contains('typeCode')) {
            contentQuiz.classList.remove('typeCode');
        }
    }

    function getContentQ(key) {
        //INTITULE
        var intitule = (0, _intituleQuiz.intituleQuiz)(q.intitules, key);

        //si ASSETS
        if (contentQuiz.classList.contains('no_asset')) {
            contentQuiz.classList.remove('no_asset');
        }
        if (q.assets && q.assets.type != 'dossier') {
            var asset = (0, _assetQuiz.assetQuiz)(q, url, key);
        } else {
            contentQuiz.className += ' no_asset';
        }

        //REPONSES
        var reponse = (0, _reponsesQuiz.reponsesQuiz)(q, urlImg, key);

        if (Array.isArray(q.intitules)) {
            //temp pour multi q type code...plusieurs content_box_quiz
            if (asset) {
                contentQuiz.appendChild(asset);
                //asset.style.height = "200px";//temp
            }
            contentQuiz.appendChild(intitule);
            contentQuiz.appendChild(reponse);
        } else {
            contentQuiz.appendChild(intitule);
            if (asset) {
                contentQuiz.appendChild(asset);
            }
            contentQuiz.appendChild(reponse);
        }
    } //endGetContentKey
}

exports.loadQ = loadQ;
},{"./components/headBoxQuiz":78,"./components/intituleQuiz":79,"./components/assetQuiz":80,"./components/reponsesQuiz":81}],61:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.startCountdown = startCountdown;
function appendZero(i) {
    if (i < 10) {
        i = '0' + i;
    } // add zero in front of numbers < 10
    return i;
}

function startCountdown(chrono) {
    var seconds = 3 * 60;

    var timer = setInterval(function () {
        seconds -= 1;
        var minutes = Math.trunc(seconds / 60);

        chrono.innerHTML = appendZero(minutes) + ' : ' + appendZero(seconds % 60);

        if (seconds === 0) {
            window.testContext.timeEnded = true;
            clearInterval(timer);
        }
    }, 1000);
}
},{}],59:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadResult = undefined;
exports.sendResultsToBackend = sendResultsToBackend;

var _startTimer = require("./components/startTimer");

function getSuccessText(successRate) {
  var texts = ["Votre résultat vous déçoit probablement un peu. C’est le moment de vous inscrire à une formation, et de réviser les bases. Votre connaissance du Code comporte des lacunes importantes. Vous n’avez pas toujours une bonne compréhension de la Route. Votre comportement est perfectible. Et la culture mobilité n’est pas votre priorité. Et si vous preniez les transports en commun ?", "C’est un résultat… passable. Essayez de vous impliquer plus, et de mieux vous insérer dans l’écosystème de la route. Révisez votre connaissance du Code. Cherchez à mieux comprendre ce qui se passe sur la Route. Pensez aux autres pour améliorer votre comportement. Et pourquoi ne pas s’intéresser aux nouvelles mobilités ?", "Pas mal ! Le Code à encore quelques secrets pour vous, mais vous avez déjà une relativement bonne compréhension des spécificités et des dangers de la Route. Votre attitude est positive, vous reste a devenir encore plus attentif aux autres et respectueux des règles. La culture de la route ne vous mobilise pas, mais vous avez une bonne mémoire. Et si vous essayiez de vous améliorer ?", "Bravo ! Vous êtes au dessus de la moyenne en ce qui concerne votre connaissance du Code. Vous avez une bonne compréhension du fonctionnement de la Route. A cela s’ajoute un comportement responsable, et une culture des mobilités assez pointue. Vous avez tout pour être un bon conducteur. Pourquoi ne pas viser la perfection ?", "Sidérant. connaissance parfaite du Code, excellente compréhension de l’écosystème de la Route dans toutes ses composantes, et comportement exemplaire ! De surcroît, rien dans la culture de la Route ne vous échappe. Nous n’avons (presque) plus rien à vous apprendre. Vous ne voulez pas devenir Moniteur ?"];

  return texts[Math.trunc(successRate / 20)];
}

var diagColors = [{ r: "255", g: "84", b: "56" }, { r: "255", g: "131", b: "0" }, { r: "237", g: "197", b: "11" }, { r: "143", g: "204", b: "41" }, { r: "41", g: "204", b: "97" }];

function getDiagColorClamp(successRate) {
  var index = Math.trunc(successRate / 20) - 1;

  if (index < 0) {
    return 0;
  }

  return index;
}

function toRgba(_ref, opacity) {
  var r = _ref.r,
      g = _ref.g,
      b = _ref.b;

  if (!opacity) {
    opacity = 1;
  }

  return "rgba(" + r + ", " + g + ", " + b + ", " + opacity + ")";
}

function getDiagColors(successRate) {
  var color = diagColors[getDiagColorClamp(successRate)];

  return {
    backgroundColor: toRgba(color, 0.5),
    borderColor: toRgba(color)
  };
}

function countQuestionTypeFor(type) {
  var ctx = window.testContext;
  var questions = ctx.questions,
      generatedCorpus = ctx.generatedCorpus;


  var selectedQuestions = questions.filter(function (q) {
    return generatedCorpus.includes(q.id);
  });

  return selectedQuestions.filter(function (q) {
    return q.categorie === type;
  }).length;
}

function roundOneDec(numb) {
  return Math.round(numb * 10) / 10;
}

function computeResult() {
  var ctx = window.testContext;
  var questions = ctx.questions,
      generatedCorpus = ctx.generatedCorpus,
      userAnswers = ctx.userAnswers;


  var rightAnswersCount = {
    comprehension: 0,
    knowledge: 0,
    behavior: 0,
    culture: 0
  };

  var _loop = function _loop(cnt) {
    var userAnswer = userAnswers[cnt];

    if (userAnswer.length === 0) {
      return "continue";
    }

    var question = questions.find(function (q) {
      return q.id === generatedCorpus[cnt];
    });

    if (question.gameplay === "txt_tr") {
      userAnswer = userAnswer.map(function (a, index) {
        return (a === question.reponses[index].correct).toString();
      });
    } else if (question.gameplay === "curseur") {
      userAnswer = userAnswer.map(function (a) {
        return (parseInt(a) === question.reponses.true).toString();
      });
    }

    var extractedValues = userAnswer.map(function (a) {
      return typeof a !== "string" ? a.value : a;
    });
    var isCorrect = !extractedValues.some(function (a) {
      return a === "false";
    });

    if (isCorrect) {
      switch (question.categorie) {
        case "compréhension":
          rightAnswersCount.comprehension += 1;
          break;
        case "connaissance":
          rightAnswersCount.knowledge += 1;
          break;
        case "comportement":
          rightAnswersCount.behavior += 1;
          break;
        case "culture":
          rightAnswersCount.culture += 1;
      }
    }
  };

  for (var cnt = 0; cnt < userAnswers.length; cnt++) {
    var _ret = _loop(cnt);

    if (_ret === "continue") continue;
  }

  var comprehension = rightAnswersCount.comprehension,
      knowledge = rightAnswersCount.knowledge,
      behavior = rightAnswersCount.behavior,
      culture = rightAnswersCount.culture;


  return {
    overallSuccessRate: roundOneDec((comprehension + knowledge + behavior + culture) / generatedCorpus.length) * 100,
    comprehensionSuccessRate: roundOneDec(comprehension / countQuestionTypeFor("compréhension")) * 100,
    knowledgeSuccessRate: roundOneDec(knowledge / countQuestionTypeFor("connaissance")) * 100,
    behaviorSuccessRate: roundOneDec(behavior / countQuestionTypeFor("comportement")) * 100,
    cultureSuccessRate: roundOneDec(culture / countQuestionTypeFor("culture")) * 100
  };
}

function loadResult(pageResult) {
  var _computeResult = computeResult(),
      overallSuccessRate = _computeResult.overallSuccessRate,
      comprehensionSuccessRate = _computeResult.comprehensionSuccessRate,
      knowledgeSuccessRate = _computeResult.knowledgeSuccessRate,
      behaviorSuccessRate = _computeResult.behaviorSuccessRate,
      cultureSuccessRate = _computeResult.cultureSuccessRate;

  clearInterval(_startTimer.timer);
  removeAllChild(pageResult);

  var titleElem = document.createElement("h1");
  titleElem.innerHTML = "Résultats";
  var headerElem = document.createElement("div");
  headerElem.className = "result_header";
  headerElem.appendChild(titleElem);

  var percentageElem = document.createElement("h1");
  percentageElem.innerHTML = overallSuccessRate + "%";
  percentageElem.style.color = toRgba(diagColors[getDiagColorClamp(overallSuccessRate)]);
  var percentageTextElem = document.createElement("h2");
  percentageTextElem.innerHTML = "de bonnes réponses";
  var percentageContainerElem = document.createElement("div");
  percentageContainerElem.className = "result_percentage-container";
  percentageContainerElem.appendChild(percentageElem);
  percentageContainerElem.appendChild(percentageTextElem);

  var canvasElem = document.createElement("canvas");
  var canvasContainerElem = document.createElement("div");
  canvasContainerElem.className = "result_diag";
  canvasContainerElem.appendChild(canvasElem);

  var bodyElem = document.createElement("div");
  bodyElem.className = "result_body";
  bodyElem.appendChild(percentageContainerElem);
  bodyElem.appendChild(canvasContainerElem);

  var ctx = canvasElem.getContext("2d");
  var chart = new Chart(ctx, {
    type: "radar",
    label: "",
    data: {
      labels: ["Connaissances: " + knowledgeSuccessRate + "%", "Compréhension: " + comprehensionSuccessRate + "%", "Comportement: " + behaviorSuccessRate + "%", "Culture: " + cultureSuccessRate + "%"],
      datasets: [Object.assign({}, {
        data: [knowledgeSuccessRate, comprehensionSuccessRate, behaviorSuccessRate, cultureSuccessRate],
        pointRadius: 0
      }, getDiagColors(overallSuccessRate))]
    },
    options: {
      scale: {
        ticks: {
          min: 0,
          max: 100,
          maxTicksLimit: 5,
          display: false
        },
        angleLines: {
          color: "black"
        },
        pointLabels: {
          fontSize: 16,
          fontColor: "black"
        }
      },
      legend: {
        display: false
      },
      gridLines: {
        color: ""
      }
    }
  });

  var successTextElem = document.createElement("p");
  successTextElem.innerHTML = getSuccessText(overallSuccessRate);
  var backToLandingButtonElem = document.createElement("button");
  backToLandingButtonElem.innerHTML = "retour au site";
  backToLandingButtonElem.addEventListener("click", function () {
    location.replace("http://easy-driver-test.webflow.io/home");
  });
  var footerElem = document.createElement("div");
  footerElem.className = "result_footer";
  footerElem.appendChild(successTextElem);
  footerElem.appendChild(backToLandingButtonElem);

  pageResult.className = "result_page";
  pageResult.appendChild(headerElem);
  pageResult.appendChild(bodyElem);
  pageResult.appendChild(footerElem);
} //end loadResult

function removeAllChild(parentBox) {
  //empty content_box_quiz (tantque a enfant => suppr)
  while (parentBox.hasChildNodes()) {
    parentBox.removeChild(parentBox.firstChild);
  }
}

function sendResultsToBackend() {
  var _window$testContext = window.testContext,
      email = _window$testContext.userEmail,
      userAnswers = _window$testContext.userAnswers,
      generatedCorpus = _window$testContext.generatedCorpus;

  var _computeResult2 = computeResult(),
      overallSuccessRate = _computeResult2.overallSuccessRate,
      comprehensionSuccessRate = _computeResult2.comprehensionSuccessRate,
      knowledgeSuccessRate = _computeResult2.knowledgeSuccessRate,
      behaviorSuccessRate = _computeResult2.behaviorSuccessRate,
      cultureSuccessRate = _computeResult2.cultureSuccessRate;

  var body = JSON.stringify({
    email: email,
    userAnswers: userAnswers,
    generatedCorpus: generatedCorpus,
    overallSuccessRate: overallSuccessRate,
    comprehensionSuccessRate: comprehensionSuccessRate,
    knowledgeSuccessRate: knowledgeSuccessRate,
    behaviorSuccessRate: behaviorSuccessRate,
    cultureSuccessRate: cultureSuccessRate
  });

  var url = "https://edt.steerity.fr/add-score"; // 'http://localhost:3000/add-score';
  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: body
  }).catch(function (err) {
    return console.log("error", err);
  });
}

exports.loadResult = loadResult;
},{"./components/startTimer":61}],28:[function(require,module,exports) {
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _q_demo_export = require('./fixtures/q_demo_export');

var _qCorpusAleat = require('./qCorpusAleat');

var _loadQ = require('./loadQ');

var _loadResult = require('./loadResult');

var _startTimer = require('./components/startTimer');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } //getData demoCorpus

//CONTENT LOAD question

//CONTENT LOAD RESULTS


//TIMER


function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

function _getCtx() {
    return window.testContext;
}

window.testContext = {
    userEmail: getParameterByName('email') || 'noemail@steerity.com',
    timeEnded: false,

    questions: null,
    generatedCorpus: null,
    currentSlideIndex: 0,

    userAnswers: [],
    currentClickedAnswers: [],

    setAnswer: function setAnswer(data) {
        // Replace the current aswer by this new one (for qru, slider)
        var ctx = _getCtx();

        var _data$split = data.split('.'),
            _data$split2 = _slicedToArray(_data$split, 3),
            key = _data$split2[0],
            _ = _data$split2[1],
            value = _data$split2[2];

        if (key !== '@') {
            ctx.currentClickedAnswers[parseInt(key)] = value;
        } else {
            ctx.currentClickedAnswers = [value];
        }
    },

    pushAnswer: function pushAnswer(data) {
        // If answer is already in the array, remove it, else add it (for qrm)
        var ctx = _getCtx();

        var _data$split3 = data.split('.'),
            _data$split4 = _slicedToArray(_data$split3, 3),
            key = _data$split4[0],
            id = _data$split4[1],
            value = _data$split4[2];

        var index = ctx.currentClickedAnswers.findIndex(function (a) {
            return a.id === id;
        });

        if (index !== -1) {
            ctx.currentClickedAnswers = [].concat(_toConsumableArray(ctx.currentClickedAnswers.slice(0, index)), _toConsumableArray(ctx.currentClickedAnswers.slice(index + 1)));
        } else {
            ctx.currentClickedAnswers.push({ key: key, id: id, value: value });
        }
    },

    validateClickedAnswers: function validateClickedAnswers() {
        var ctx = _getCtx();

        ctx.userAnswers.push(ctx.currentClickedAnswers);
        ctx.currentClickedAnswers = [];
    }
};

/********* Recupération des elmts du DOM *********/
var qBox = document.getElementsByClassName('main_quiz')[0];
// content quiz elmts
var contentQuiz = qBox.getElementsByClassName('content_box_quiz')[0];
//input Valid => Add event load new question
var validInput = qBox.getElementsByTagName('input')[0];

/* TIMER */
var chrono = document.getElementById('timer').getElementsByTagName('p')[0];
(0, _startTimer.startCountdown)(chrono);

/********* Récupération des data JSON *********/
getCorpus(_q_demo_export.demoCorpus);

/********* Fct° JS de traitement des data *********/
function getCorpus(dataObj) {
    //recup object questions => corpus test
    var qObj = dataObj.questions;

    //recup object gameplay => intitulés suivant code gamplay
    var gameObj = dataObj.gameplays;

    //recup gameplays
    var gpId = gameObj.map(function (gp) {
        return gp.id;
    });

    //fct° return q -  array questions aleatoires du corpus
    // var qCorpus = qCorpusAleat(qObj.length).slice(0, 10);
    var qCorpus = (0, _qCorpusAleat.qCorpusAleat)(qObj);

    window.testContext.generatedCorpus = qCorpus;
    window.testContext.questions = qObj;

    //init Index & chrg 1ere Q
    var x = 0;

    //recup data question
    var q = qObj.find(function (q) {
        return q.id === qCorpus[x];
    });
    //q=qObj[6];

    //recup data gameplay correspondant
    var gp = gameObj.find(function (gp) {
        return gp.id === q.gameplay;
    });

    //empty content_box_quiz (tantque a enfant => suppr)
    while (contentQuiz.hasChildNodes()) {
        contentQuiz.removeChild(contentQuiz.firstChild);
    }

    (0, _loadQ.loadQ)(q, gp, qBox, x + 1, qCorpus.length);

    validInput.onclick = function () {
        //add control si rep..
        x++;

        window.testContext.validateClickedAnswers();
        window.testContext.currentSlideIndex++;

        //empty content_box_quiz (tantque a enfant => suppr)
        while (contentQuiz.hasChildNodes()) {
            contentQuiz.removeChild(contentQuiz.firstChild);
        }
        if (x == qCorpus.length || window.testContext.timeEnded) {
            (0, _loadResult.loadResult)(qBox);
            (0, _loadResult.sendResultsToBackend)();
        } else {
            q = qObj.find(function (q) {
                return q.id === qCorpus[x];
            });
            gp = gameObj.find(function (gp) {
                return gp.id === q.gameplay;
            });
            (0, _loadQ.loadQ)(q, gp, qBox, x + 1, qCorpus.length);
        }

        //tant que question & temps sinon endQuiz
        //(x==qCorpus.length) ? loadResult(qBox) : loadQ(q, gp, qBox, x+1, qObj.length);
    };
}
},{"./fixtures/q_demo_export":60,"./qCorpusAleat":57,"./loadQ":58,"./loadResult":59,"./components/startTimer":61}],38:[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '37031' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[38,28], null)
//# sourceMappingURL=/src.18c8f854.map