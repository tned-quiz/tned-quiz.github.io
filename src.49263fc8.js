parcelRequire = (function(e, r, n, t) {
  var i = "function" == typeof parcelRequire && parcelRequire,
    o = "function" == typeof require && require;
  function u(n, t) {
    if (!r[n]) {
      if (!e[n]) {
        var f = "function" == typeof parcelRequire && parcelRequire;
        if (!t && f) return f(n, !0);
        if (i) return i(n, !0);
        if (o && "string" == typeof n) return o(n);
        var c = new Error("Cannot find module '" + n + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      p.resolve = function(r) {
        return e[n][1][r] || r;
      };
      var l = (r[n] = new u.Module(n));
      e[n][0].call(l.exports, p, l, l.exports, this);
    }
    return r[n].exports;
    function p(e) {
      return u(p.resolve(e));
    }
  }
  (u.isParcelRequire = !0),
    (u.Module = function(e) {
      (this.id = e), (this.bundle = u), (this.exports = {});
    }),
    (u.modules = e),
    (u.cache = r),
    (u.parent = i),
    (u.register = function(r, n) {
      e[r] = [
        function(e, r) {
          r.exports = n;
        },
        {}
      ];
    });
  for (var f = 0; f < n.length; f++) u(n[f]);
  if (n.length) {
    var c = u(n[n.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = c)
      : "function" == typeof define && define.amd
        ? define(function() {
            return c;
          })
        : t && (this[t] = c);
  }
  return u;
})(
  {
    60: [
      function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 });
        var e = {
          gameplays: [
            {
              id: "qru",
              type: [
                { name: "radio", default: !0, libelle: "Question Vrai - Faux" },
                { name: "img_btn", libelle: "Selectionner l'image" }
              ],
              instruction: "Sélectionner la bonne réponse"
            },
            {
              id: "qrm",
              type: [
                {
                  name: "checkbox",
                  default: !0,
                  libelle: "Question à choix multiple"
                },
                { name: "img_btn", libelle: "Selectionner les images" }
              ],
              instruction: "Sélectionner la ou les bonnes réponses"
            },
            {
              id: "txt_tr",
              type: [
                { name: "select", default: !0, libelle: "Text à trou" },
                { name: "d&d", libelle: "Drag and Drop" }
              ],
              instruction: "Trouver les mots manquants"
            },
            {
              id: "curseur",
              type: [{ name: "range", default: !0, libelle: "Slider" }],
              instruction: "Déplacer le curseur"
            },
            {
              id: "ord_lst",
              type: [
                { name: "d&d", default: !0, libelle: "Remettre dans l'ordre" }
              ],
              instruction: "Maintenir cliqué l'élément et déplacer"
            },
            {
              id: "assoc",
              type: [{ libelle: "Association" }],
              instruction: "Relier entre eux"
            }
          ],
          categorie: ["connaissances", "compréhension", "comportement"],
          questions: [
            {
              id: 1,
              gameplay: "qrm",
              categorie: "compréhension",
              intitules: "La voiture jaune est bien placée pour :",
              assets: { type: "img", src: "Question1.jpg" },
              reponses: [
                { label: "prendre la première sortie", value: !0 },
                { label: "prendre la troisième sortie", value: !1 },
                { label: "aller tout droit", value: !0 },
                { label: "aller à Lyon", value: !0 }
              ]
            },
            {
              id: 2,
              gameplay: "qru",
              categorie: "compréhension",
              intitules:
                "La voiture jaune est-elle bien placée pour tourner à gauche ?",
              assets: { type: "img", src: "Question2.jpg" },
              reponses: [
                { label: "non", value: !0 },
                { label: "oui", value: !1 }
              ]
            },
            {
              id: 3,
              gameplay: "qru",
              categorie: "compréhension",
              intitules:
                "On est le 17 du mois, peut-on stationner du côté de la rue où le numéro des maison est impair ?",
              assets: { type: "img", src: "Question3.png" },
              reponses: [
                { label: "faux", value: !0 },
                { label: "vrai", value: !1 }
              ]
            },
            {
              id: 4,
              gameplay: "curseur",
              categorie: "connaissance",
              intitules:
                "Combien de points peut-on perdre sur son permis de conduire si on stationne ou on circule sur la bande d'arrêt d’urgence ?",
              reponses: { true: 3, min: 0, max: 12, step: 1 },
              additionalText: " point(s)"
            },
            {
              id: 5,
              gameplay: "curseur",
              categorie: "connaissance",
              intitules:
                "Combien de points risque t-on de perdre sur son permis lorsque l’on se gare à contresens de la circulation ? ",
              reponses: { true: 0, min: 0, max: 12, step: 1 },
              additionalText: " point(s)"
            },
            {
              id: 6,
              gameplay: "qrm",
              categorie: "compréhension",
              intitules: "Que doit faire le conducteur de la voiture jaune ?",
              assets: { type: "img", src: "Question6.jpg" },
              reponses: [
                { label: "mettre le pied face au frein", value: !0 },
                { label: "observer attentivement la voiture bleue", value: !0 },
                { label: "maintenir son allure", value: !1 },
                { label: "etablir un contact visuel", value: !0 }
              ]
            },
            {
              id: 9,
              gameplay: "qrm",
              type: "img_btn",
              categorie: "connaissance",
              intitules:
                "Quels usagers n’ont pas le droit de circuler sur une voie rapide ?",
              assets: { type: "dossier", src: "Question9/" },
              reponses: [
                { img: "interdit velo", src: "interditVelo@3x.png", value: !0 },
                { img: "interdit bus", src: "interditBus@3x.png", value: !1 },
                {
                  img: "interdit marchandises",
                  src: "interditMarchandises@3x.png",
                  value: !1
                },
                { img: "interdit moto", src: "interditMoto@3x.png", value: !1 },
                {
                  img: "interdit tracteur",
                  src: "interditTracteur@3x.png",
                  value: !0
                },
                {
                  img: "interdit mobylette",
                  src: "interditMobylette@3x.png",
                  value: !0
                },
                {
                  img: "interdit pieton",
                  src: "interditPieton@3x.png",
                  value: !0
                },
                { img: "interdit 12t", src: "interdit12t@3x.png", value: !1 },
                {
                  img: "interdit caravane",
                  src: "interditCaravane@3x.png",
                  value: !1
                }
              ]
            },
            {
              id: 10,
              gameplay: "qrm",
              type: "img_btn",
              categorie: "connaissance",
              intitules:
                "Quels panneaux peut on rencontrer dans une zone de stationnement payant ?",
              assets: { type: "dossier", src: "Question10/" },
              reponses: [
                {
                  img: "arrêt/stationnement interdit",
                  src: "ASinterdit@3x.png",
                  value: !1
                },
                {
                  img: "arrêt/stationnement interdit sauf..",
                  src: "ASinterditSauf@3x.png",
                  value: !0
                },
                {
                  img: "stationnement interdit",
                  src: "Sinterdit@3x.png",
                  value: !1
                },
                {
                  img: "zone stationnement interdit",
                  src: "SinterditZone@3x.png",
                  value: !1
                },
                {
                  img: "fin zone stationnement interdit",
                  src: "SinterditZoneFin@3x.png",
                  value: !1
                },
                {
                  img: "zone stationnement limité par disque",
                  src: "SlimitéDisqueZone@3x.png",
                  value: !1
                },
                {
                  img: "fin zone stationnement limité par disque",
                  src: "SlimitéDisqueZoneFin@3x.png",
                  value: !1
                },
                {
                  img: "zone stationnement payant",
                  src: "SpayantZone@3x.png",
                  value: !0
                },
                {
                  img: "fin zone stationnement payant",
                  src: "SpayantZoneFin@3x.png",
                  value: !0
                }
              ]
            },
            {
              id: 11,
              gameplay: "qru",
              categorie: "connaissance",
              name: "Questions type code",
              intitules: [
                "En terme de sécurité routière, l’éco-conduite a-t-elle des effets positifs ?",
                "En terme de confort pour le conducteur et les passagers ?"
              ],
              assets: { type: "img", src: "Question11.png" },
              reponses: [
                [{ label: "Oui", value: !0 }, { label: "Non", value: !1 }],
                [{ label: "Oui", value: !0 }, { label: "Non", value: !1 }]
              ]
            },
            {
              id: 12,
              gameplay: "qrm",
              categorie: "compréhension",
              name: "Question type code",
              intitules: "Sur cette route, je peux circuler à",
              assets: { type: "img", src: "Question12.png" },
              reponses: [
                { label: "90 km/h", value: !0 },
                { label: "100 km/h", value: !0 },
                { label: "110 km/h", value: !0 },
                { label: "130 km/h", value: !1 }
              ]
            },
            {
              id: 13,
              gameplay: "txt_tr",
              categorie: "connaissance",
              intitules: "A quoi servent les voies réservées ?",
              assets: { type: "img", src: "Question13.jpg" },
              reponses: [
                {
                  label: [
                    "Elles servent à délimiter l’espace de chaque ",
                    " de la route;"
                  ],
                  options: ["usager", "partie"],
                  correct: "0"
                },
                {
                  label: ["et ainsi mieux ", " ."],
                  options: ["cohabiter", "circuler"],
                  correct: "0"
                },
                {
                  label: [
                    "Il est donc important que chacun ",
                    "l’espace des autres."
                  ],
                  options: ["ignore", "observe", "respecte"],
                  correct: "2"
                }
              ]
            },
            {
              id: 14,
              gameplay: "txt_tr",
              categorie: "connaissance",
              intitules: "Quels sont les avantages du covoiturage ? ",
              reponses: [
                {
                  label: [
                    "Le covoiturage ",
                    " le nombre de véhicules  en circulation"
                  ],
                  options: ["augmente", "diminue"],
                  correct: "1"
                },
                {
                  label: ["et par conséquent réduit les rejets de ", ", "],
                  options: ["H2O", "CO2", "SO2"],
                  correct: "1"
                },
                {
                  label: "le risque d’accident et les nuisances ",
                  options: ["sonores", "visuelles"],
                  correct: "0"
                }
              ]
            },
            {
              id: 15,
              gameplay: "qrm",
              categorie: "compréhension",
              intitules:
                "Quelle erreur commet le conducteur de la voiture jaune ?",
              assets: {
                type: "video",
                src: "Question15.mp4",
                alt: "vidéo croisement / obstacle sur la chaussée"
              },
              reponses: [
                { label: "il oublie de mettre son clignotant", value: !1 },
                {
                  label: "il ne respecte pas les règles de priorité",
                  value: !0
                },
                { label: "il roule trop vite", value: !1 },
                { label: "il circule à contresens", value: !1 }
              ]
            },
            {
              id: 16,
              gameplay: "qrm",
              categorie: "compréhension",
              intitules: "Cette manoeuvre est:",
              assets: {
                type: "video",
                src: "Question16.mp4",
                alt: "Vidéo créneau stationnement à contresens"
              },
              reponses: [
                { label: "autorisée", value: !1 },
                { label: "interdite", value: !0 },
                { label: "passible d’une amende de 35€", value: !0 },
                { label: "passible d’une amende de 135€", value: !1 }
              ]
            },
            {
              id: 17,
              gameplay: "qrm",
              type: "img_btn",
              categorie: "connaissance",
              intitules:
                "Quels panneaux peut on rencontrer sur un rétrécissement de chaussée ?",
              assets: { type: "dossier", src: "Question17/" },
              reponses: [
                {
                  img: "interdit velo",
                  src: "cedezLePassage@3x.png",
                  value: !1
                },
                {
                  img: "interdit bus",
                  src: "circulation2sens@3x.png",
                  value: !1
                },
                {
                  img: "interdit marchandises",
                  src: "depassement2-1@3x.png",
                  value: !1
                },
                {
                  img: "interdit moto",
                  src: "obligationToutDroit@3x.png",
                  value: !1
                },
                {
                  img: "interdit tracteur",
                  src: "prioritaireProchaine@3x.png",
                  value: !1
                },
                {
                  img: "interdit mobylette",
                  src: "prioriteAutre@3x.png",
                  value: !0
                },
                {
                  img: "interdit pieton",
                  src: "prioriteMoi@3x.png",
                  value: !0
                },
                {
                  img: "interdit 12t",
                  src: "retrecissementDroite@3x.png",
                  value: !0
                },
                {
                  img: "interdit caravane",
                  src: "sensUnique@3x.png",
                  value: !1
                }
              ]
            },
            {
              id: 18,
              gameplay: "qrm",
              type: "img_btn",
              categorie: "connaissance",
              intitules:
                "Quels panneaux peut-on rencontrer aux abords d’un rond point à deux voies ?",
              assets: { type: "dossier", src: "Question18/" },
              reponses: [
                { img: "interdit velo", src: "30@3x.png", value: !1 },
                { img: "interdit bus", src: "ASinterdit@3x.png", value: !1 },
                {
                  img: "interdit marchandises",
                  src: "cedezLePassage@3x.png",
                  value: !0
                },
                { img: "interdit moto", src: "directionOBL@3x.png", value: !0 },
                {
                  img: "interdit tracteur",
                  src: "DIRgrandeVille@3x.png",
                  value: !0
                },
                {
                  img: "interdit mobylette",
                  src: "interditDemitour@3x.png",
                  value: !1
                },
                {
                  img: "interdit pieton",
                  src: "interditDepassement@3x.png",
                  value: !1
                },
                {
                  img: "interdit 12t",
                  src: "obligationDroite@3x.png",
                  value: !0
                },
                {
                  img: "interdit caravane",
                  src: "virageGauche@3x.png",
                  value: !1
                }
              ]
            },
            {
              id: 19,
              gameplay: "curseur",
              categorie: "connaissance",
              intitules:
                "Combien de points peut-on perdre pour un défaut de clignotant lorsqu'on sort d’un rond point ?",
              reponses: { true: 3, min: 0, max: 12, step: 1 },
              additionalText: " point(s)"
            },
            {
              id: 20,
              gameplay: "curseur",
              categorie: "connaissance",
              intitules:
                "Combien de points perd on sur son permis lorsqu’on grille un feu rouge ?",
              reponses: { true: 4, min: 0, max: 12, step: 1 },
              additionalText: " point(s)"
            },
            {
              id: 21,
              gameplay: "curseur",
              categorie: "connaissance",
              intitules:
                "Quel est l'espérance de vie d’un piéton sur la bande d'arrêt d’urgence ?",
              reponses: { true: 20, min: 5, max: 60, step: 5 },
              additionalText: " minutes"
            },
            {
              id: 22,
              gameplay: "curseur",
              categorie: "connaissance",
              intitules:
                "Sur voie rapide, à quelle distances sont situées les bornes d’appel les unes des autres ?",
              reponses: { true: 2, min: 0, max: 20, step: 1 },
              additionalText: " kilomètres"
            },
            {
              id: 23,
              gameplay: "qru",
              categorie: "compréhension",
              intitules: "Que signifie ce panneau ?",
              assets: { type: "img", src: "Question23.png" },
              reponses: [
                {
                  label:
                    "le stationnement est interdit dans la rue du 16 au 31",
                  value: !1
                },
                {
                  label:
                    "le stationnement est interdit du 16 au 31 du côté où il est implanté",
                  value: !0
                },
                {
                  label:
                    "le stationnement est autorisé dans la rue du 16 au 31",
                  value: !1
                },
                {
                  label:
                    "le stationnement  est autorisé du 16 au 31 du côté où il est implanté",
                  value: !1
                }
              ]
            },
            {
              id: 24,
              gameplay: "qrm",
              categorie: "compréhension",
              intitules:
                "Sur voie rapide, quels sont les paramètres à respecter avant de s’engager dans le trafic ?",
              reponses: [
                { label: "observer son angle mort gauche", value: !0 },
                { label: "adapter sa vitesse au trafic", value: !0 },
                { label: "conserver une vitesse soutenue", value: !1 },
                { label: "s’engager le plus tôt possible", value: !1 }
              ]
            },
            {
              id: 25,
              gameplay: "qru",
              categorie: "compréhension",
              intitules:
                "Le dépassement de tous véhicules est interdit aux abord d’une priorité à droite ?",
              assets: { type: "img", src: "Question25.png" },
              reponses: [
                { label: "Vrai", value: !1 },
                { label: "Faux", value: !0 }
              ]
            },
            {
              id: 26,
              gameplay: "qru",
              categorie: "compréhension",
              intitules:
                "La voiture jaune est bien placée pour aller tout droit.",
              assets: { type: "img", src: "Question26.jpg" },
              reponses: [
                { label: "Vrai", value: !0 },
                { label: "Faux", value: !1 }
              ]
            },
            {
              id: 27,
              gameplay: "qru",
              categorie: "compréhension",
              intitules:
                "Le sas à vélo permet aux cyclistes de franchir les feux rouge sans s’arrêter.",
              assets: { type: "img", src: "Question27.jpg" },
              reponses: [
                { label: "Vrai", value: !1 },
                { label: "Faux", value: !0 }
              ]
            },
            {
              id: 28,
              gameplay: "qrm",
              categorie: "compréhension",
              intitules: "Le feu est en panne,",
              assets: { type: "img", src: "Question28.jpg" },
              reponses: [
                { label: "la voiture jaune est prioritaire", value: !1 },
                { label: "La voiture rouge est prioritaire", value: !0 },
                { label: "La voiture jaune doit s’arrêter", value: !0 },
                { label: "La voiture rouge doit s’arrêter", value: !1 }
              ]
            },
            {
              id: 29,
              gameplay: "qrm",
              categorie: "connaissance",
              intitules: "La consommation d’alcool entraîne :",
              assets: { type: "img", src: "Question29.png" },
              reponses: [
                { label: "une diminution du temps de réaction", value: !1 },
                { label: "une augmentation du temps de réaction", value: !0 },
                { label: "un rétrécissement du champs visuel", value: !0 },
                { label: "une perturbation des gestes", value: !0 }
              ]
            },
            {
              id: 30,
              gameplay: "qrm",
              categorie: "connaissance",
              intitules: "La consommation de carburant dépend :",
              reponses: [
                { label: "des caractéristiques du véhicules", value: !0 },
                { label: "du style de conduite", value: !0 },
                { label: "du chargement du véhicule", value: !0 },
                { label: "aucun des trois", value: !1 }
              ]
            },
            {
              id: 31,
              gameplay: "qru",
              categorie: "connaissance",
              intitules:
                "Combien de temps faut-il à l’organisme pour éliminer totalement une bière de 25cl consommée ?",
              assets: { type: "img", src: "Question31.png" },
              reponses: [
                { label: "environ 15 minutes", value: !1 },
                { label: "environ 30 minutes", value: !1 },
                { label: "environ 45 minutes", value: !1 },
                { label: "environ 1 heure", value: !0 }
              ]
            },
            {
              id: 32,
              gameplay: "qrm",
              categorie: "compréhension",
              intitules: "Quelle voiture est en infraction ?",
              assets: { type: "img", src: "Question32.jpg" },
              reponses: [
                { label: "la voiture jaune", value: !1 },
                { label: "la voiture rouge", value: !1 },
                { label: "la voiture bleue", value: !1 },
                { label: "aucune", value: !0 }
              ]
            },
            {
              id: 33,
              gameplay: "qrm",
              categorie: "compréhension",
              intitules: "Pour aller à Lille, il faut :",
              assets: { type: "img", src: "Question33.png" },
              reponses: [
                { label: "se placer à droite avant le rond-point", value: !0 },
                { label: "se placer à gauche avant le rond-point", value: !1 },
                {
                  label: "se placer sur la voie extérieure de l’anneau",
                  value: !0
                },
                {
                  label: "se placer sur la voie intérieure de l’anneau",
                  value: !1
                },
                {
                  label:
                    "activer son clignotant droit en entrant dans le rond-point",
                  value: !1
                },
                {
                  label:
                    "activer son clignotant droit en sortant du rond-point",
                  value: !0
                }
              ]
            },
            {
              id: 34,
              gameplay: "qrm",
              categorie: "compréhension",
              intitules: "Le conducteur de la voiture jaune :",
              assets: { type: "video", src: "Question34.mp4" },
              reponses: [
                { label: "s’insère trop tôt", value: !0 },
                { label: "commet une infraction", value: !0 },
                {
                  label: "aurait dû utiliser davantage la voie d’accélération",
                  value: !0
                },
                { label: "oublie de mettre son clignotant", value: !1 },
                { label: "coupe la ligne blanche continue", value: !0 },
                {
                  label: "s’insère dans le trafic avec une vitesse adaptée",
                  value: !1
                }
              ]
            },
            {
              id: 35,
              gameplay: "qrm",
              categorie: "compréhension",
              intitules: "A cette intersection :",
              assets: { type: "video", src: "Question35.mp4" },
              reponses: [
                {
                  label:
                    "c’est la règle de la priorité à droite qui s’applique",
                  value: !0
                },
                { label: "la voiture jaune est prioritaire", value: !1 },
                { label: "la voiture bleue est prioritaire", value: !0 },
                {
                  label: "la voiture jaune doit s’arrêter avant l’intersection",
                  value: !0
                },
                {
                  label: "la voiture bleue doit s’arrêter avant l’intersection",
                  value: !1
                }
              ]
            },
            {
              id: 36,
              gameplay: "qrm",
              categorie: "compréhension",
              intitules: "Le conducteur de la voiture jaune",
              assets: { type: "video", src: "Question36.mp4" },
              reponses: [
                { label: "est bien placé", value: !1 },
                { label: "est mal placé", value: !0 },
                { label: "aurait dû serrer à droite", value: !0 },
                { label: "gêne la voiture marron", value: !0 },
                { label: "dépasse la ligne de stop", value: !1 },
                { label: "veut aller à droite", value: !0 }
              ]
            },
            {
              id: 37,
              gameplay: "qru",
              categorie: "compréhension",
              intitules: "Les distances de sécurité sont-elles respectées ?",
              assets: { type: "video", src: "Question37.mp4" },
              reponses: [
                { label: "Oui", value: !1 },
                { label: "Non", value: !0 }
              ]
            },
            {
              id: 38,
              gameplay: "txt_tr",
              categorie: "compréhension",
              intitules:
                "Quelle influence la vitesse a-t-elle sur le champs de vision d’un conducteur ?",
              assets: { type: "img", src: "Question38.png" },
              reponses: [
                {
                  label: [
                    "Plus on roule vite , plus le champs de vision du conducteur ",
                    "."
                  ],
                  options: ["augmente", "rétrécit", "est nette", "s’assombrit"],
                  correct: "1"
                },
                {
                  label: [
                    "Dès qu’on détecte une situation dangereuse il faut donc ",
                    " pour  "
                  ],
                  options: ["accélérer", "rétrograder", "ralentir"],
                  correct: "2 "
                },
                {
                  label: ["avoir le temps ", "et de réagir."],
                  options: [
                    "d’observer",
                    "de contrôler",
                    "de freiner",
                    "de s’arrêter"
                  ],
                  correct: "1"
                }
              ]
            },
            {
              id: 39,
              gameplay: "txt_tr",
              categorie: "compréhension",
              intitules:
                "Pourquoi faut-il faire attention dans cette situation ?",
              assets: { type: "img", src: "Question39.jpg" },
              reponses: [
                {
                  label: [
                    "Les piétons sur le trottoir et à l’arrêt de bus vont chercher à traverser la route. On reste ",
                    "et on garde"
                  ],
                  options: ["vigilant", "serein", "actif"],
                  correct: "0"
                },
                {
                  label: [" le pied devant ", " pour"],
                  options: ["l’accélérateur", "le frein", "l’embrayage"],
                  correct: "1"
                },
                {
                  label: [" ", "toutes les situations."],
                  options: ["appréhender", "anticiper", "détecter"],
                  correct: "1"
                }
              ]
            },
            {
              id: 40,
              gameplay: "qru",
              categorie: "comportement",
              intitules: "Ce camion est-il en infraction ?",
              assets: { type: "img", src: "Question40.jpg" },
              reponses: [
                { label: "Oui", value: !0 },
                { label: "Non", value: !1 }
              ]
            },
            {
              id: 41,
              gameplay: "qru",
              categorie: "comportement",
              intitules:
                "Vous arrive-t-il de vous énerver au volant ? Quelle circonstance est la plus favorable au déclenchement de cet énervement ?",
              assets: { type: "img", src: "Question41.png" },
              reponses: [
                {
                  label:
                    "Le comportement d’un autre ou d’autres conducteur(s) qui me gêne",
                  value: !1
                },
                {
                  label:
                    "Le fait d’être en retard pour votre prochain rendez-vous",
                  value: !0
                },
                {
                  label:
                    "Le comportement d’autres personnes à bord de votre véhicule",
                  value: !0
                },
                {
                  label:
                    "Le temps que vous avez l’impression de perdre en voiture",
                  value: !0
                },
                {
                  label: "Pour des raisons liées à autre chose que la route",
                  value: !0
                },
                { label: "La qualité de la signalisation", value: !1 }
              ]
            },
            {
              id: 42,
              gameplay: "qru",
              categorie: "comportement",
              intitules:
                "Connaissez-vous personnellement des conducteurs qui ‘glissent’ parfois les Stops (qui ne s’y arrêtent pas) ?",
              assets: { type: "img", src: "Question42.jpg" },
              reponses: [
                {
                  label:
                    "Oui, c’est le cas de la plupart des personnes dont je connais la conduite",
                  value: !1
                },
                {
                  label: "Oui, certaines de mes connaissances le font souvent",
                  value: !1
                },
                {
                  label:
                    "Oui, je connais au moins une personne qui le fait occasionnellement",
                  value: !0
                },
                { label: "Non, je n’en connais aucun", value: !0 },
                { label: "Je ne me suis jamais posé la question", value: !1 }
              ]
            },
            {
              id: 43,
              gameplay: "qru",
              categorie: "comportement",
              intitules: "Vous arrive-t-il de faire du vélo ?",
              assets: { type: "img", src: "Question43.png" },
              reponses: [
                {
                  label: "Oui, je me déplace principalement en vélo",
                  value: !0
                },
                { label: "Oui, plusieurs fois par semaine", value: !0 },
                {
                  label: "Oui, occasionnellement, moins d’un fois par semaine",
                  value: !0
                },
                { label: "Oui, mais rarement", value: !1 },
                { label: "Non, pas depuis plus d’un an", value: !1 }
              ]
            },
            {
              id: 44,
              gameplay: "qru",
              categorie: "comportement",
              intitules:
                "Trouvez-vous que les sanctions, en cas d’infraction routière, sont ?",
              reponses: [
                {
                  label: "Trop faibles, et donc pas assez dissuasives",
                  value: !0
                },
                {
                  label: "Équilibrées, et donc relativement efficaces",
                  value: !0
                },
                {
                  label: "Trop importantes, et donc souvent injustes",
                  value: !1
                },
                { label: "Exorbitantes, mais inefficaces", value: !1 },
                {
                  label:
                    "Sans rapport avec les infractions, servent à rapporter de l’argent à l’Etat",
                  value: !1
                }
              ]
            },
            {
              id: 45,
              gameplay: "qru",
              categorie: "comportement",
              intitules:
                "Quelles circonstances vous amènent à dépasser la limite de vitesse ?",
              assets: { type: "img", src: "Question45.png" },
              reponses: [
                {
                  label:
                    "Quand il n’y a personne d’autre sur la route, et donc pas de danger",
                  value: !1
                },
                {
                  label:
                    "Quand je suis pressé, mais sans excéder quelques Km/h (moins de 15%)",
                  value: !1
                },
                {
                  label: "Souvent, les limitations sont vraiment trop basses",
                  value: !1
                },
                {
                  label: "Jamais, en tout cas j’essaye de les respecter",
                  value: !0
                },
                {
                  label:
                    "Rarement, essentiellement les 30Km/h, car c’est vraiment trop lent",
                  value: !0
                }
              ]
            },
            {
              id: 46,
              gameplay: "qru",
              categorie: "comportement",
              intitules:
                "Quelle est la première phrase qui vous vient à l’esprit sur les vélos en ville ?",
              assets: { type: "img", src: "Question46.jpg" },
              reponses: [
                {
                  label:
                    "J’y fais très attention, parce que c’est un moyen de transport que j’utilise beaucoup",
                  value: !0
                },
                {
                  label: "Ils me font peur, on ne les voit pas arriver",
                  value: !0
                },
                {
                  label:
                    "C’est difficile de cohabiter car, souvent, ils ne respectent pas le code de la route",
                  value: !1
                },
                {
                  label:
                    "Ils devraient être interdits ou bien limités sur des rues assez larges pour les accueillir",
                  value: !1
                }
              ]
            },
            {
              id: 47,
              gameplay: "qru",
              categorie: "comportement",
              intitules:
                "Pourquoi n’utilisez-vous pas le vélo pour vous rendre à votre travail ?",
              assets: { type: "img", src: "Question47.png" },
              reponses: [
                {
                  label: "Mais si, je l’utilise, et même tous les jours !",
                  value: !0
                },
                {
                  label:
                    "Mon lieu de travail est trop éloigné, et je ne peux pas me changer en arrivant",
                  value: !1
                },
                {
                  label: "Je pourrais, mais je trouve ça trop dangereux",
                  value: !1
                },
                {
                  label:
                    "J’y vais en moto (scooter) et c’est bien plus efficace et rapide",
                  value: !1
                },
                {
                  label: "Je prends les transports en commun en priorité",
                  value: !0
                },
                {
                  label: "Tiens, c’est une idée… Je pourrais essayer",
                  value: !0
                }
              ]
            },
            {
              id: 48,
              gameplay: "qru",
              categorie: "comportement",
              intitules:
                "Quelle incivilité constatez-vous le plus souvent chez les autres conducteurs ?",
              reponses: [
                { label: "L’utilisation du téléphone au volant", value: !0 },
                {
                  label:
                    "L’oubli du clignotant (ou son utilisation à contre-emploi)",
                  value: !0
                },
                {
                  label: "Le non-respect des distances de sécurité",
                  value: !0
                },
                {
                  label:
                    "L’ignorance des priorités (notamment les Stop ‘glissés’)",
                  value: !0
                },
                { label: "Le dépassement des vitesses autorisées", value: !0 }
              ]
            },
            {
              id: 49,
              gameplay: "qru",
              categorie: "comportement",
              intitules:
                "Vous êtes fatigué(e) mais vous devez prendre le volant pour des raisons professionnelles, que faites-vous ?",
              reponses: [
                {
                  label:
                    "Je vais être particulièrement vigilent(e) et prudent(e)",
                  value: !1
                },
                {
                  label:
                    "J’ai l’habitude de rouler en étant fatigué(e) j’ouvre la fenêtre et je mets la radio",
                  value: !1
                },
                {
                  label:
                    "Je prévois de m’arrêter souvent, dès les premiers signes d’endormissement",
                  value: !1
                },
                {
                  label:
                    "Je renonce à prendre le volant, tant pis pour mon rendez-vous",
                  value: !0
                }
              ]
            },
            {
              id: 50,
              gameplay: "qru",
              categorie: "comportement",
              intitules: "Avez-vous déjà eu peur au volant ?",
              reponses: [
                {
                  label: "Oui, assez souvent, je n’aime pas trop conduire",
                  value: !1
                },
                {
                  label: "Rarement, et dans des circonstances exceptionnelles",
                  value: !1
                },
                {
                  label:
                    "Parfois, surtout à cause du comportement des autres automobilistes",
                  value: !1
                },
                {
                  label:
                    "Jamais, je sais que je conduis bien et que je maîtrise mon véhicule",
                  value: !1
                },
                {
                  label:
                    "Je me méfie autant de moi que des autres tout en restant serein(e)",
                  value: !0
                }
              ]
            },
            {
              id: 51,
              gameplay: "qru",
              categorie: "comportement",
              intitules:
                "Quel type de route vous sentez-vous le plus en sécurité ?",
              reponses: [
                {
                  label:
                    "Les voies rapides, car la vitesse reste limitée (110) et la sécurité maximum",
                  value: !0
                },
                {
                  label:
                    "Sur autoroute, ce sont les trajets qui me semblent les plus sûrs",
                  value: !0
                },
                {
                  label:
                    "Les petites routes de campagne, on y roule plus tranquillement",
                  value: !1
                },
                {
                  label:
                    "Les trajets que j’emprunte habituellement, car je les connais parfaitement",
                  value: !1
                }
              ]
            },
            {
              id: 52,
              gameplay: "qru",
              categorie: "culture",
              intitules:
                "En quelle année, le portable au volant a-t-il été considéré comme une infraction ?",
              reponses: [
                { label: "31 mars 1999", value: !1 },
                { label: "31 mars 2001", value: !1 },
                { label: "31 mars 2003", value: !0 },
                { label: "31 mars 2005", value: !1 }
              ]
            },
            {
              id: 53,
              gameplay: "qru",
              categorie: "culture",
              intitules:
                "A partir de quel taux d’alcool dans le sang un conducteur est en délit ?",
              assets: { type: "img", src: "Question53.png" },
              reponses: [
                { label: "0,2 g/l de sang", value: !1 },
                { label: "0,5 g/l de sang", value: !1 },
                { label: "0,6 g/l de sang", value: !1 },
                { label: "0,8 g/l de sang", value: !0 }
              ]
            },
            {
              id: 54,
              gameplay: "qru",
              categorie: "culture",
              intitules:
                "A partir de quel taux d’alcoolémie peut-on recevoir une contravention ?",
              assets: { type: "img", src: "Question54.png" },
              reponses: [
                { label: "0,2 g/l de sang", value: !1 },
                { label: "0,5 g/l de sang", value: !0 },
                { label: "0,6 g/l de sang", value: !1 },
                { label: "0,8 g/l de sang", value: !1 }
              ]
            },
            {
              id: 55,
              gameplay: "qru",
              categorie: "culture",
              intitules:
                "En quelle année est-il devenu obligatoire d’avoir un éthylotest dans sa voiture ?",
              assets: { type: "img", src: "Question55.jpg" },
              reponses: [
                { label: "2002", value: !1 },
                { label: "2006", value: !1 },
                { label: "2010", value: !1 },
                { label: "2012", value: !0 }
              ]
            },
            {
              id: 56,
              gameplay: "qru",
              categorie: "culture",
              intitules:
                "A quelle date, la vitesse sur route sans séparateur central est-elle passé de 90 km/h à 80 km/h.",
              assets: { type: "img", src: "Question56.png" },
              reponses: [
                { label: "1 juin 2018", value: !1 },
                { label: "10 juin 2018", value: !1 },
                { label: "21 juin 2018", value: !1 },
                { label: "1 juillet 2018", value: !0 }
              ]
            },
            {
              id: 57,
              gameplay: "qru",
              categorie: "culture",
              intitules:
                "En 2017, combien de personnes ont perdu la vie sur nos routes Françaises ?",
              assets: { type: "img", src: "Question57.png" },
              reponses: [
                { label: "3 196", value: !1 },
                { label: "3 684", value: !0 },
                { label: "4 326", value: !1 },
                { label: "5 897", value: !1 }
              ]
            },
            {
              id: 58,
              gameplay: "qru",
              categorie: "culture",
              intitules:
                "En quelle année, le non port de la ceinture de sécurité est-il devenu une infraction au code de la route ?",
              assets: { type: "img", src: "Question59.png" },
              reponses: [
                { label: "1994", value: !1 },
                { label: "1998", value: !1 },
                { label: "2002", value: !0 },
                { label: "2006", value: !1 }
              ]
            },
            {
              id: 59,
              gameplay: "qru",
              categorie: "culture",
              intitules:
                "En quelle année la loi Badinter (protection des cyclistes et piétons) a-t-elle été mise en place ?",
              assets: { type: "img", src: "Question59.png" },
              reponses: [
                { label: "1985", value: !0 },
                { label: "1988", value: !1 },
                { label: "1990", value: !1 },
                { label: "1995", value: !1 }
              ]
            },
            {
              id: 60,
              gameplay: "qru",
              categorie: "culture",
              intitules:
                "En quelle année le permis a point est-il entrée en vigueur en France ?",
              assets: { type: "img", src: "Question60.jpg" },
              reponses: [
                { label: "1982", value: !1 },
                { label: "1986", value: !1 },
                { label: "1992", value: !0 },
                { label: "1996", value: !1 }
              ]
            },
            {
              id: 61,
              gameplay: "qru",
              categorie: "culture",
              intitules:
                "Le coût global de l’insécurité routière en france est estimé à :",
              assets: { type: "img", src: "Question61.jpg" },
              reponses: [
                { label: "20 milliards d’euros", value: !1 },
                { label: "28 milliards d’euros", value: !1 },
                { label: "30 milliards d’euros", value: !1 },
                { label: "38 milliards d’euros", value: !0 }
              ]
            },
            {
              id: 62,
              gameplay: "qru",
              categorie: "culture",
              intitules:
                "Une enfant de moins de 10 ans doit toujours être placé à l’arrière du véhicule ?",
              reponses: [
                { label: "Vrai", value: !1 },
                { label: "Faux", value: !0 }
              ]
            }
          ]
        };
        exports.demoCorpus = e;
      },
      {}
    ],
    57: [
      function(require, module, exports) {
        "use strict";
        function r(r) {
          if (Array.isArray(r)) {
            for (var e = 0, n = Array(r.length); e < r.length; e++) n[e] = r[e];
            return n;
          }
          return Array.from(r);
        }
        function e(e) {
          for (var n = [].concat(r(e)), t = n.length - 1; t > 0; t--) {
            var o = Math.floor(Math.random() * (t + 1)),
              c = [n[o], n[t]];
            (n[t] = c[0]), (n[o] = c[1]);
          }
          return n;
        }
        function n(r, e) {
          return r
            .filter(function(r) {
              return r.categorie === e;
            })
            .map(function(r) {
              return r.id;
            });
        }
        function t(t) {
          var o = n(t, "compréhension"),
            c = n(t, "connaissance"),
            a = n(t, "comportement"),
            i = n(t, "culture");
          return e(
            [].concat(
              r(e(o).slice(0, 2)),
              r(e(c).slice(0, 3)),
              r(e(a).slice(0, 3)),
              r(e(i).slice(0, 2))
            )
          );
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.qCorpusAleat = t);
      },
      {}
    ],
    73: [
      function(require, module, exports) {
        "use strict";
        function e(e, t, n, i, s) {
          n.getElementsByClassName("title")[0].innerHTML =
            "Question " + i + " / " + s;
          var r = n.getElementsByClassName("gameplay")[0],
            l = e.type
              ? t.type.findIndex(function(t) {
                  return t.name === e.type;
                })
              : t.type.findIndex(function(e) {
                  return e.default;
                });
          (r.innerHTML = t.type[l].libelle),
            (n.getElementsByClassName("instruct")[0].innerHTML = t.instruction);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.headBoxQuiz = e);
      },
      {}
    ],
    74: [
      function(require, module, exports) {
        "use strict";
        function e(e, t) {
          var n = document.createElement("div");
          n.className = "intitules";
          var r = document.createElement("p");
          return (r.innerHTML = null != t ? e[t] : e), n.appendChild(r), n;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.intituleQuiz = e);
      },
      {}
    ],
    75: [
      function(require, module, exports) {
        "use strict";
        function e(e, s, t) {
          if (!t) {
            var r = document.createElement("div");
            r.className = "assets";
            var n = e.assets.type,
              a = s + n + "/",
              c = document.createElement(n);
            if (
              ("img" == n &&
                ((c.alt = e.intitules), (c.src = a + e.assets.src)),
              "video" == n)
            ) {
              c.controls = !0;
              var i = document.createElement("source");
              (i.src = a + e.assets.src),
                (i.type = "video/mp4"),
                (c.innerHTML =
                  "Video non pris en charge...<br/>" + e.assets.alt),
                c.insertBefore(i, c.childNodes[c.childNodes.length - 1]);
            }
            return r.appendChild(c), r;
          }
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.assetQuiz = e);
      },
      {}
    ],
    58: [
      function(require, module, exports) {
        "use strict";
        function r(r, e) {
          for (
            var o = r[0].style.border, t = r[0].style.backgroundColor, l = 0;
            l < r.length;
            l++
          )
            (r[l].style.border = o), (r[l].style.backgroundColor = t);
          for (var a = 0; a < r.length; a++)
            r[a].addEventListener("click", function(l) {
              if ("qru" === e) {
                window.testContext.setAnswer(l.target.value);
                for (var a = 0; a < r.length; a++)
                  (r[a].style.border = o), (r[a].style.backgroundColor = t);
                (l.target.style.border = ".1rem solid var(--primary-color)"),
                  (l.target.style.backgroundColor =
                    ".1rem solid var(--primary-color)");
              }
              "qrm" === e &&
                (window.testContext.pushAnswer(l.target.value),
                "var(--primary-color)" === l.target.style.backgroundColor
                  ? ((l.target.style.border = o),
                    (l.target.style.backgroundColor = t))
                  : ((l.target.style.border =
                      ".1rem solid var(--primary-color)"),
                    (l.target.style.backgroundColor = "var(--primary-color)")));
            });
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.imgCheck = r);
      },
      {}
    ],
    59: [
      function(require, module, exports) {
        "use strict";
        function e(e, r) {
          for (
            var o = e.getElementsByTagName("input"),
              t = e.getElementsByTagName("label")[0],
              l = t.getElementsByClassName("checkmark")[0],
              a = t.style.backgroundColor,
              s = t.style.border,
              n = l.style.backgroundColor,
              c = l.style.border,
              y = 0;
            y < o.length;
            y++
          )
            o[y].addEventListener("click", function(o) {
              if (
                ((t = o.target.parentNode),
                (l = t.getElementsByClassName("checkmark")[0]),
                "qru" === r)
              ) {
                window.testContext.setAnswer(o.target.value);
                for (
                  var y = e.getElementsByTagName("label"),
                    d = e.getElementsByClassName("checkmark"),
                    g = 0;
                  g < y.length;
                  g++
                )
                  (y[g].style.backgroundColor = a),
                    (y[g].style.border = s),
                    (d[g].style.backgroundColor = n),
                    (d[g].style.border = c);
                (t.style.backgroundColor = "var(--primary-color)"),
                  (l.style.backgroundColor = "var(--main-ft-color)"),
                  (l.style.borderColor = "var(--main-ft-color)");
              }
              "qrm" === r &&
                (window.testContext.pushAnswer(o.target.value),
                "var(--primary-color)" == t.style.backgroundColor
                  ? ((t.style.backgroundColor = a),
                    (l.style.backgroundColor = n),
                    (l.style.border = c))
                  : ((t.style.backgroundColor = "var(--primary-color)"),
                    (l.style.backgroundColor = "var(--main-ft-color)"),
                    (l.style.borderColor = "var(--main-ft-color)")));
            });
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.labelCheck = e);
      },
      {}
    ],
    60: [
      function(require, module, exports) {
        "use strict";
        function e(e, r, o) {
          for (
            var l = e.getElementsByTagName("input"),
              t = e.getElementsByTagName("label")[0],
              a = t.getElementsByClassName("checkmark")[0],
              s = t.style.backgroundColor,
              n = (t.style.border, a.style.backgroundColor),
              c = a.style.border,
              y = 0;
            y < l.length;
            y++
          )
            l[y].addEventListener("click", function(l) {
              var t = l.target.parentNode,
                a = t.getElementsByClassName("checkmark")[0];
              if ("qru" === r) {
                var y, m;
                if (
                  (window.testContext.setAnswer(l.target.value), null !== o)
                ) {
                  var g = e.parentNode.getElementsByClassName("reponses")[o];
                  (y = g.getElementsByTagName("label")),
                    (m = g.getElementsByClassName("checkmark"));
                } else
                  (y = e.getElementsByTagName("label")),
                    (m = e.getElementsByClassName("checkmark"));
                for (var d = 0; d < y.length; d++)
                  (y[d].style.backgroundColor = s),
                    (m[d].style.backgroundColor = n),
                    (m[d].style.border = c);
                (t.style.backgroundColor = "var(--primary-color)"),
                  (a.style.backgroundColor = "var(--main-ft-color)"),
                  (a.style.borderColor = "var(--main-ft-color)");
              }
              "qrm" === r &&
                (window.testContext.pushAnswer(l.target.value),
                "var(--primary-color)" == t.style.backgroundColor
                  ? ((t.style.backgroundColor = s),
                    (a.style.backgroundColor = n),
                    (a.style.border = c))
                  : ((t.style.backgroundColor = "var(--primary-color)"),
                    (a.style.backgroundColor = "var(--main-ft-color)"),
                    (a.style.borderColor = "var(--main-ft-color)")));
            });
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.labelCheckTypeC = e);
      },
      {}
    ],
    51: [
      function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.repQr = void 0);
        var e = require("../../viewStyle/imgCheck"),
          l = require("../../viewStyle/labelCheck"),
          a = require("../../viewStyle/labelCheckTypeC");
        function r(r, s, t, n, i, m) {
          for (var p in ((s = null !== i ? s + "." + i : s),
          null !== i ? r.reponses[i] : r.reponses)) {
            var c = document.createElement("input");
            c.setAttribute("type", n),
              (c.name = "qrm" == r.gameplay ? s + "[]" : s),
              (c.value =
                (null !== i ? i : "@") +
                "." +
                p +
                "." +
                (null !== i ? r.reponses[i][p].value : r.reponses[p].value)),
              (c.id = s + "_rep" + p);
            var u = document.createElement("label");
            if (((u.htmlFor = c.id), r.type && "img_btn" === r.type)) {
              u.className = "labelImgBox";
              var o = r.reponses[p],
                g = t + r.assets.src;
              c.className = "rad_img";
              var v = document.createElement("img");
              (v.className = "img_btn"),
                (v.src = g + o.src),
                (v.alt = o.img),
                (v.height = "114"),
                (v.width = "114"),
                (v.value =
                  (null !== i ? i : "@") +
                  "." +
                  p +
                  "." +
                  (null !== i ? r.reponses[i][p].value : r.reponses[p].value)),
                u.appendChild(v);
            } else {
              u.className = "labelBox";
              var d = document.createElement("span");
              d.className = "checkmark";
              var h = (null !== i ? r.reponses[i] : r.reponses)[p].label;
              (h = h.substr(0, 1).toUpperCase() + h.substr(1, h.length)),
                (u.innerHTML = h),
                u.insertBefore(d, u.firstChild);
            }
            u.insertBefore(c, u.firstChild), m.appendChild(u);
          }
          "img_btn" === r.type
            ? ((m.className += " clickImg_rep"),
              (0, e.imgCheck)(m.getElementsByTagName("img"), r.gameplay))
            : null === i
              ? (0, l.labelCheck)(m, r.gameplay)
              : (0, a.labelCheckTypeC)(m, r.gameplay, i);
        }
        exports.repQr = r;
      },
      {
        "../../viewStyle/imgCheck": 58,
        "../../viewStyle/labelCheck": 59,
        "../../viewStyle/labelCheckTypeC": 60
      }
    ],
    55: [
      function(require, module, exports) {
        "use strict";
        function e(e, t, n) {
          (t.textContent = e.value + n),
            window.testContext.setAnswer("@._." + e.value),
            (e.oninput = function() {
              (t.textContent = e.value + n),
                window.testContext.setAnswer("@._." + e.value);
            });
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.cursorValue = e);
      },
      {}
    ],
    49: [
      function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.repCurseur = void 0);
        var e = require("../../viewStyle/cursorValue");
        function r(r, t, s, n) {
          var a = document.createElement("input"),
            p = document.createElement("br"),
            u = document.createElement("span");
          (u.className = "crs_count"),
            a.setAttribute("type", s),
            (a.id = t),
            (a.name = t),
            (a.defaultValue = r.reponses.min),
            (a.min = r.reponses.min),
            (a.max = r.reponses.max),
            (a.step = r.reponses.step),
            n.appendChild(a),
            n.appendChild(p),
            n.appendChild(u),
            (0, e.cursorValue)(a, u, r.additionalText || "");
        }
        exports.repCurseur = r;
      },
      { "../../viewStyle/cursorValue": 55 }
    ],
    56: [
      function(require, module, exports) {
        "use strict";
        function e(e, t, r, a) {
          var n, o, d;
          for (n = 0; n < e.length; n++)
            e[n].addEventListener("dragstart", function(e) {
              e.dataTransfer.setData("text/plain", e.target.id);
            });
          r.addEventListener("dragstart", function(e) {
            e.target.innerText,
              (d = e.target),
              console.log(d),
              (e.target.style.opacity = 0.4),
              (e.target.parentNode.style.background =
                "var(--secondary-db-color)");
          }),
            r.addEventListener(
              "dragend",
              function(e) {
                (e.target.parentNode.style.background = "var(--main-bg-color)"),
                  (e.target.style.opacity = 1);
              },
              !1
            ),
            r.addEventListener(
              "dragover",
              function(e) {
                e.preventDefault();
              },
              !1
            ),
            r.addEventListener(
              "dragenter",
              function(e) {
                var t;
                1 == e.target.nodeType &&
                e.target.classList.contains("dropzone")
                  ? ((e.target.style.background = "var(--primary-op-color)"),
                    (t = e.target))
                  : 3 == e.target.nodeType &&
                    e.target.parentNode.classList.contains("dropzone") &&
                    ((e.target.parentNode.parentNode.style.background =
                      "var(--primary-op-color)"),
                    (t = e.target.parentNode)),
                  t && ((o = t.innerText), console.log("dataDrop : " + o));
              },
              !1
            ),
            r.addEventListener(
              "dragleave",
              function(e) {
                1 == e.target.nodeType &&
                e.target.classList.contains("dropzone")
                  ? (e.target.style.background = "")
                  : 3 == e.target.nodeType &&
                    e.target.parentNode.classList.contains("dropzone") &&
                    (e.target.parentNode.parentNode.style.background = "");
              },
              !1
            ),
            r.addEventListener(
              "drop",
              function(e) {
                var t;
                if (
                  (e.preventDefault(),
                  1 == e.target.nodeType &&
                  e.target.classList.contains("dropzone")
                    ? ((t = e.target),
                      (e.target.style.background = ""),
                      (e.target.parentNode.style.background = ""))
                    : 3 == e.target.nodeType &&
                      e.target.parentNode.classList.contains("dropzone") &&
                      ((t = e.target.parentNode),
                      (e.target.parentNode.parentNode.style.background = "")),
                  t)
                ) {
                  for (
                    var a = e.dataTransfer.getData("text"),
                      n = r.getElementsByClassName("draggable_span"),
                      o = t.innerHTML,
                      d = 0;
                    d < n.length;
                    d++
                  ) {
                    if (n[d].getAttribute("id") == t.getAttribute("id")) {
                      console.log("drop : " + d);
                      var s = d;
                    }
                    if (n[d].getAttribute("id") == a) {
                      console.log("drag : " + d);
                      var g = d;
                    }
                  }
                  (a = document.getElementById(a).innerHTML),
                    console.log(a),
                    (t.innerHTML = a);
                  for (d = 1; d <= Math.abs(g - s); d++)
                    s > g
                      ? ((a = n[s - d].innerHTML), (n[s - d].innerHTML = o))
                      : ((a = n[d + s].innerHTML), (n[d + s].innerHTML = o)),
                      (o = a);
                }
              },
              !1
            );
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.dragDropOrdLst = e);
      },
      {}
    ],
    50: [
      function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.repOrdLst = void 0);
        var e = require("../../viewStyle/dragDropOrdLst");
        function r(r, a) {
          var t = [],
            s = document.createElement("ol");
          for (var d in r.reponses) {
            var p = document.createElement("li"),
              n = document.createElement("div");
            n.className = "droparea";
            var l = document.createElement("span");
            (l.className = "draggable_span dropzone"),
              (l.id = "drag" + d),
              l.setAttribute("draggable", !0);
            var o = r.reponses[d].label;
            (o = o.substr(0, 1).toUpperCase() + o.substr(1, o.length)),
              (l.innerHTML = o),
              t.push(o),
              n.appendChild(l),
              p.appendChild(n),
              s.appendChild(p);
          }
          a.appendChild(s),
            (0, e.dragDropOrdLst)(
              a.getElementsByClassName("draggable_span"),
              r.gamplay,
              a,
              t
            );
        }
        exports.repOrdLst = r;
      },
      { "../../viewStyle/dragDropOrdLst": 56 }
    ],
    51: [
      function(require, module, exports) {
        "use strict";
        function e(e, t, n, r) {
          if (e.type && "d&d" === e.type) "text";
          else
            for (var a in e.reponses) {
              var l = document.createElement("select"),
                d = e.reponses[a];
              for (var o in ((l.onchange = function(e) {
                window.testContext.setAnswer(e.target.value);
              }),
              (l.id = t + "_rep" + a),
              (l.name = t + "_rep" + a),
              d.options)) {
                var s = document.createElement("option");
                (s.text = d.options[o]), (s.value = a + "._." + o), l.add(s);
              }
              (l.selectedIndex = -1), l.setAttribute("required", !0);
              var i = document.createElement("div");
              (i.className = "custom_select"), i.appendChild(l);
              var p = document.createElement("label");
              Array.isArray(d.label)
                ? ((p.innerHTML = d.label[0]),
                  p.appendChild(i),
                  p.insertAdjacentText("beforeend", d.label[1]))
                : ((p.innerHTML = d.label), p.appendChild(i)),
                r.appendChild(p);
            }
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.repTxtTr = e);
      },
      {}
    ],
    49: [
      function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.reponsesQuiz = void 0);
        var e = require("./repGameplay/repQr"),
          r = require("./repGameplay/repCurseur"),
          a = require("./repGameplay/repOrdLst"),
          p = require("./repGameplay/repTxtTr");
        function s(s, t, u) {
          var c,
            i = s.gameplay + s.id,
            l = document.createElement("div");
          switch (
            ((l.className = "reponses"),
            (l.className += " " + s.gameplay + "_rep"),
            s.gameplay)
          ) {
            case "qru":
            case "qrm":
              (c = "qrm" == s.gameplay ? "checkbox" : "radio"),
                (0, e.repQr)(s, i, t, c, u, l);
              break;
            case "curseur":
              (c = "range"), (0, r.repCurseur)(s, i, c, l);
              break;
            case "ord_lst":
              (0, a.repOrdLst)(s, l);
              break;
            case "txt_tr":
              (0, p.repTxtTr)(s, i, c, l);
          }
          return l;
        }
        exports.reponsesQuiz = s;
      },
      {
        "./repGameplay/repQr": 51,
        "./repGameplay/repCurseur": 49,
        "./repGameplay/repOrdLst": 50,
        "./repGameplay/repTxtTr": 51
      }
    ],
    36: [
      function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.loadQ = void 0);
        var e = require("./components/headBoxQuiz"),
          s = require("./components/intituleQuiz"),
          t = require("./components/assetQuiz"),
          i = require("./components/reponsesQuiz");
        function a(a, n, o, r, l) {
          var p = o.getElementsByClassName("head_box_quiz")[0],
            u = o.getElementsByClassName("content_box_quiz")[0],
            d = "./assets/",
            c = d + "img/";
          function m(e) {
            var n = (0, s.intituleQuiz)(a.intitules, e);
            if (
              (u.classList.contains("no_asset") &&
                u.classList.remove("no_asset"),
              a.assets && "dossier" != a.assets.type)
            )
              var o = (0, t.assetQuiz)(a, d, e);
            else u.className += " no_asset";
            var r = (0, i.reponsesQuiz)(a, c, e);
            Array.isArray(a.intitules)
              ? (o && u.appendChild(o), u.appendChild(n), u.appendChild(r))
              : (u.appendChild(n), o && u.appendChild(o), u.appendChild(r));
          }
          (0, e.headBoxQuiz)(a, n, p, r, l),
            Array.isArray(a.intitules)
              ? (u.classList.contains("typeCode") ||
                  u.classList.add("typeCode"),
                a.intitules.map(function(e, s) {
                  return m(s);
                }))
              : (m(null),
                u.classList.contains("typeCode") &&
                  u.classList.remove("typeCode"));
        }
        exports.loadQ = a;
      },
      {
        "./components/headBoxQuiz": 73,
        "./components/intituleQuiz": 74,
        "./components/assetQuiz": 75,
        "./components/reponsesQuiz": 49
      }
    ],
    61: [
      function(require, module, exports) {
        "use strict";
        function t(t) {
          return t < 10 && (t = "0" + t), t;
        }
        function e(e) {
          var n = 180,
            r = setInterval(function() {
              n -= 1;
              var o = Math.trunc(n / 60);
              (e.innerHTML = t(o) + " : " + t(n % 60)),
                0 === n &&
                  ((window.testContext.timeEnded = !0), clearInterval(r));
            }, 1e3);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.startCountdown = e);
      },
      {}
    ],
    59: [
      function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.loadResult = void 0),
          (exports.sendResultsToBackend = d);
        var e = require("./components/startTimer");
        function t(e) {
          return [
            "Votre résultat vous déçoit probablement un peu. C’est le moment de vous inscrire à une formation, et de réviser les bases. Votre connaissance du Code comporte des lacunes importantes. Vous n’avez pas toujours une bonne compréhension de la Route. Votre comportement est perfectible. Et la culture mobilité n’est pas votre priorité. Et si vous preniez les transports en commun ?",
            "C’est un résultat… passable. Essayez de vous impliquer plus, et de mieux vous insérer dans l’écosystème de la route. Révisez votre connaissance du Code. Cherchez à mieux comprendre ce qui se passe sur la Route. Pensez aux autres pour améliorer votre comportement. Et pourquoi ne pas s’intéresser aux nouvelles mobilités ?",
            "Pas mal ! Le Code à encore quelques secrets pour vous, mais vous avez déjà une relativement bonne compréhension des spécificités et des dangers de la Route. Votre attitude est positive, vous reste a devenir encore plus attentif aux autres et respectueux des règles. La culture de la route ne vous mobilise pas, mais vous avez une bonne mémoire. Et si vous essayiez de vous améliorer ?",
            "Bravo ! Vous êtes au dessus de la moyenne en ce qui concerne votre connaissance du Code. Vous avez une bonne compréhension du fonctionnement de la Route. A cela s’ajoute un comportement responsable, et une culture des mobilités assez pointue. Vous avez tout pour être un bon conducteur. Pourquoi ne pas viser la perfection ?",
            "Sidérant. connaissance parfaite du Code, excellente compréhension de l’écosystème de la Route dans toutes ses composantes, et comportement exemplaire ! De surcroît, rien dans la culture de la Route ne vous échappe. Nous n’avons (presque) plus rien à vous apprendre. Vous ne voulez pas devenir Moniteur ?"
          ][Math.trunc(e / 20)];
        }
        var n = [
          { r: "255", g: "84", b: "56" },
          { r: "255", g: "131", b: "0" },
          { r: "237", g: "197", b: "11" },
          { r: "143", g: "204", b: "41" },
          { r: "41", g: "204", b: "97" }
        ];
        function r(e) {
          var t = Math.trunc(e / 20) - 1;
          return t < 0 ? 0 : t;
        }
        function s(e, t) {
          return (
            t || (t = 1),
            "rgba(" + e.r + ", " + e.g + ", " + e.b + ", " + t + ")"
          );
        }
        function o(e) {
          var t = n[r(e)];
          return { backgroundColor: s(t, 0.5), borderColor: s(t) };
        }
        function a(e) {
          var t = window.testContext,
            n = t.questions,
            r = t.generatedCorpus;
          return n
            .filter(function(e) {
              return r.includes(e.id);
            })
            .filter(function(t) {
              return t.categorie === e;
            }).length;
        }
        function u(e) {
          return Math.round(10 * e) / 10;
        }
        function c() {
          for (
            var e = window.testContext,
              t = e.questions,
              n = e.generatedCorpus,
              r = e.userAnswers,
              s = { comprehension: 0, knowledge: 0, behavior: 0, culture: 0 },
              o = function(e) {
                var o = r[e];
                if (0 === o.length) return "continue";
                var a = t.find(function(t) {
                  return t.id === n[e];
                });
                if (
                  ("txt_tr" === a.gameplay
                    ? (o = o.map(function(e, t) {
                        return (e === a.reponses[t].correct).toString();
                      }))
                    : "curseur" === a.gameplay &&
                      (o = o.map(function(e) {
                        return (parseInt(e) === a.reponses.true).toString();
                      })),
                  !o
                    .map(function(e) {
                      return "string" != typeof e ? e.value : e;
                    })
                    .some(function(e) {
                      return "false" === e;
                    }))
                )
                  switch (a.categorie) {
                    case "compréhension":
                      s.comprehension += 1;
                      break;
                    case "connaissance":
                      s.knowledge += 1;
                      break;
                    case "comportement":
                      s.behavior += 1;
                      break;
                    case "culture":
                      s.culture += 1;
                  }
              },
              c = 0;
            c < r.length;
            c++
          )
            o(c);
          var i = s.comprehension,
            l = s.knowledge,
            d = s.behavior,
            p = s.culture;
          return {
            overallSuccessRate: 100 * u((i + l + d + p) / n.length),
            comprehensionSuccessRate: 100 * u(i / a("compréhension")),
            knowledgeSuccessRate: 100 * u(l / a("connaissance")),
            behaviorSuccessRate: 100 * u(d / a("comportement")),
            cultureSuccessRate: 100 * u(p / a("culture"))
          };
        }
        function i(a) {
          var u = c(),
            i = u.overallSuccessRate,
            d = u.comprehensionSuccessRate,
            p = u.knowledgeSuccessRate,
            m = u.behaviorSuccessRate,
            v = u.cultureSuccessRate;
          clearInterval(e.timer), l(a);
          var h = document.createElement("h1");
          h.innerHTML = "Résultats";
          var b = document.createElement("div");
          (b.className = "result_header"), b.appendChild(h);
          var f = document.createElement("h1");
          (f.innerHTML = i + "%"), (f.style.color = s(n[r(i)]));
          var g = document.createElement("h2");
          g.innerHTML = "de bonnes réponses";
          var C = document.createElement("div");
          (C.className = "result_percentage-container"),
            C.appendChild(f),
            C.appendChild(g);
          var R = document.createElement("canvas"),
            S = document.createElement("div");
          (S.className = "result_diag"), S.appendChild(R);
          var w = document.createElement("div");
          (w.className = "result_body"), w.appendChild(C), w.appendChild(S);
          var x = R.getContext("2d"),
            y = (new Chart(x, {
              type: "radar",
              label: "",
              data: {
                labels: [
                  "Connaissances: " + p + "%",
                  "Compréhension: " + d + "%",
                  "Comportement: " + m + "%",
                  "Culture: " + v + "%"
                ],
                datasets: [
                  Object.assign(
                    {},
                    { data: [p, d, m, v], pointRadius: 0 },
                    o(i)
                  )
                ]
              },
              options: {
                scale: {
                  ticks: { min: 0, max: 100, maxTicksLimit: 5, display: !1 },
                  angleLines: { color: "black" },
                  pointLabels: { fontSize: 16, fontColor: "black" }
                },
                legend: { display: !1 },
                gridLines: { color: "" }
              }
            }),
            document.createElement("p"));
          y.innerHTML = t(i);
          var E = document.createElement("button");
          (E.innerHTML = "retour au site"),
            E.addEventListener("click", function() {
              location.replace("http://easy-driver-test.webflow.io/");
            });
          var k = document.createElement("div");
          (k.className = "result_footer"),
            k.appendChild(y),
            k.appendChild(E),
            (a.className = "result_page"),
            a.appendChild(b),
            a.appendChild(w),
            a.appendChild(k);
        }
        function l(e) {
          for (; e.hasChildNodes(); ) e.removeChild(e.firstChild);
        }
        function d() {
          var e = window.testContext,
            t = e.userEmail,
            n = e.userAnswers,
            r = e.generatedCorpus,
            s = c(),
            o = s.overallSuccessRate,
            a = s.comprehensionSuccessRate,
            u = s.knowledgeSuccessRate,
            i = s.behaviorSuccessRate,
            l = s.cultureSuccessRate,
            d = JSON.stringify({
              email: t,
              userAnswers: n,
              generatedCorpus: r,
              overallSuccessRate: o,
              comprehensionSuccessRate: a,
              knowledgeSuccessRate: u,
              behaviorSuccessRate: i,
              cultureSuccessRate: l
            });
          fetch("https://edt.steerity.fr/add-score", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: d
          }).catch(function(e) {
            return console.log("error", e);
          });
        }
        exports.loadResult = i;
      },
      { "./components/startTimer": 61 }
    ],
    28: [
      function(require, module, exports) {
        "use strict";
        var e = (function() {
            return function(e, n) {
              if (Array.isArray(e)) return e;
              if (Symbol.iterator in Object(e))
                return (function(e, n) {
                  var r = [],
                    t = !0,
                    i = !1,
                    s = void 0;
                  try {
                    for (
                      var o, u = e[Symbol.iterator]();
                      !(t = (o = u.next()).done) &&
                      (r.push(o.value), !n || r.length !== n);
                      t = !0
                    );
                  } catch (e) {
                    (i = !0), (s = e);
                  } finally {
                    try {
                      !t && u.return && u.return();
                    } finally {
                      if (i) throw s;
                    }
                  }
                  return r;
                })(e, n);
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            };
          })(),
          n = require("./fixtures/q_demo_export"),
          r = require("./qCorpusAleat"),
          t = require("./loadQ"),
          i = require("./loadResult"),
          s = require("./components/startTimer");
        function o(e) {
          if (Array.isArray(e)) {
            for (var n = 0, r = Array(e.length); n < e.length; n++) r[n] = e[n];
            return r;
          }
          return Array.from(e);
        }
        function u(e) {
          var n = RegExp("[?&]" + e + "=([^&]*)").exec(window.location.search);
          return n && decodeURIComponent(n[1].replace(/\+/g, " "));
        }
        function d() {
          return window.testContext;
        }
        window.testContext = {
          userEmail: u("email") || "noemail@steerity.com",
          timeEnded: !1,
          questions: null,
          generatedCorpus: null,
          currentSlideIndex: 0,
          userAnswers: [],
          currentClickedAnswers: [],
          setAnswer: function(n) {
            var r = d(),
              t = n.split("."),
              i = e(t, 3),
              s = i[0],
              o = (i[1], i[2]);
            "@" !== s
              ? (r.currentClickedAnswers[parseInt(s)] = o)
              : (r.currentClickedAnswers = [o]);
          },
          pushAnswer: function(n) {
            var r = d(),
              t = n.split("."),
              i = e(t, 3),
              s = i[0],
              u = i[1],
              l = i[2],
              a = r.currentClickedAnswers.findIndex(function(e) {
                return e.id === u;
              });
            -1 !== a
              ? (r.currentClickedAnswers = [].concat(
                  o(r.currentClickedAnswers.slice(0, a)),
                  o(r.currentClickedAnswers.slice(a + 1))
                ))
              : r.currentClickedAnswers.push({ key: s, id: u, value: l });
          },
          validateClickedAnswers: function() {
            var e = d();
            e.userAnswers.push(e.currentClickedAnswers),
              (e.currentClickedAnswers = []);
          }
        };
        var l = document.getElementsByClassName("main_quiz")[0],
          a = l.getElementsByClassName("content_box_quiz")[0],
          c = l.getElementsByTagName("input")[0],
          f = document.getElementById("timer").getElementsByTagName("p")[0];
        function w(e) {
          var n = e.questions,
            s = e.gameplays,
            o = (s.map(function(e) {
              return e.id;
            }),
            (0, r.qCorpusAleat)(n));
          (window.testContext.generatedCorpus = o),
            (window.testContext.questions = n);
          for (
            var u = 0,
              d = n.find(function(e) {
                return e.id === o[u];
              }),
              f = s.find(function(e) {
                return e.id === d.gameplay;
              });
            a.hasChildNodes();

          )
            a.removeChild(a.firstChild);
          (0, t.loadQ)(d, f, l, u + 1, o.length),
            (c.onclick = function() {
              for (
                u++,
                  window.testContext.validateClickedAnswers(),
                  window.testContext.currentSlideIndex++;
                a.hasChildNodes();

              )
                a.removeChild(a.firstChild);
              u == o.length || window.testContext.timeEnded
                ? ((0, i.loadResult)(l), (0, i.sendResultsToBackend)())
                : ((d = n.find(function(e) {
                    return e.id === o[u];
                  })),
                  (f = s.find(function(e) {
                    return e.id === d.gameplay;
                  })),
                  (0, t.loadQ)(d, f, l, u + 1, o.length));
            });
        }
        (0, s.startCountdown)(f), w(n.demoCorpus);
      },
      {
        "./fixtures/q_demo_export": 60,
        "./qCorpusAleat": 57,
        "./loadQ": 36,
        "./loadResult": 59,
        "./components/startTimer": 61
      }
    ]
  },
  {},
  [28],
  null
);
//# sourceMappingURL=src.49263fc8.map
