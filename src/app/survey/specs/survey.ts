// Survey definition
export const surveyModel = {
 "pages": [
  {
   "name": "filtering",
   "elements": [
    {
     "type": "radiogroup",
     "name": "QF1",
     "title": {
      "default": "Please select your Country of residence",
      "de": "Bitte nennen Sie uns den Staat in dem Ihr Wohnort liegt.",
      "de-at": "Bitte nennen Sie uns den Staat in dem Ihr Wohnort liegt.",
      "de-ch": "Bitte nennen Sie uns den Staat in dem Ihr Wohnort liegt.",
      "fr": "Sélectionnez votre pays de résidence.",
      "sl": "Izberite državo stalnega prebivališča",
      "it": "Seleziona il tuo paese di residenza"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "at",
       "text": {
        "default": "Austria",
        "de": "Österreich",
        "fr": "Autriche",
        "sl": "Avstrija",
        "de-at": "Österreich",
        "de-ch": "Österreich"
       }
      },
      {
       "value": "fr",
       "text": {
        "default": "France",
        "de": "Frankreich",
        "sl": "Francija",
        "it": "Francia",
        "de-at": "Frankreich",
        "de-ch": "Frankreich"
       }
      },
      {
       "value": "de",
       "text": {
        "default": "Germany",
        "de": "Deutschland",
        "fr": "Allemagne",
        "sl": "Nemčija",
        "it": "Germania",
        "de-at": "Deutschland",
        "de-ch": "Deutschland"
       }
      },
      {
       "value": "it",
       "text": {
        "default": "Italy",
        "de": "Italien",
        "fr": "Italie",
        "sl": "Italija",
        "it": "Italia",
        "de-at": "Italien",
        "de-ch": "Italien"
       }
      },
      {
       "value": "li",
       "text": {
        "default": "Liechtenstein",
        "sl": "Lihtenštajn"
       }
      },
      {
       "value": "si",
       "text": {
        "default": "Slovenia",
        "de": "Slowenien",
        "fr": "Slovenie",
        "sl": "Slovenija",
        "de-at": "Slowenien",
        "de-ch": "Slowenien"
       }
      },
      {
       "value": "ch",
       "text": {
        "default": "Switzerland",
        "de": "Schweiz",
        "fr": "Suisse",
        "sl": "Švica",
        "it": "Svizzera",
        "de-at": "Schweiz",
        "de-ch": "Schweiz"
       }
      }
     ]
    },
    {
     "type": "dropdown",
     "name": "QF2FD",
     "visible": false,
     "visibleIf": "{QF1} = \"fr\"",
     "title": {
      "default": "Could you please precise in which Department do you live?",
      "fr": "Dans quel département vivez-vous?"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "A1",
       "text": "Ain"
      },
      {
       "value": "A2",
       "text": "Allier"
      },
      {
       "value": "A3",
       "text": "Ardèche"
      },
      {
       "value": "A4",
       "text": "Cantal"
      },
      {
       "value": "A5",
       "text": "Drȏme"
      },
      {
       "value": "A6",
       "text": "Isère"
      },
      {
       "value": "A7",
       "text": "Loire"
      },
      {
       "value": "A8",
       "text": "Haute-Loire"
      },
      {
       "value": "A9",
       "text": "Puy-de-Dȏme"
      },
      {
       "value": "A10",
       "text": "Rhȏne"
      },
      {
       "value": "A11",
       "text": "Métropole de Lyon"
      },
      {
       "value": "A12",
       "text": "Savoie"
      },
      {
       "value": "A13",
       "text": "Haute-Savoie"
      }
     ]
    },
    {
     "type": "dropdown",
     "name": "QF2AR",
     "visible": false,
     "visibleIf": "{QF1} = \"at\"",
     "title": {
      "default": "Could you please precise in which Region do you live?",
      "de": "Bitte nennen Sie uns das Bundesland, in dem Ihr Wohnort liegt.",
      "de-at": "Bitte nennen Sie uns das Bundesland, in dem Ihr Wohnort liegt.",
      "de-ch": "Bitte nennen Sie uns das Bundesland, in dem Ihr Wohnort liegt."
     },
     "isRequired": true,
     "choices": [
      {
       "value": "A1",
       "text": "Vorarlberg"
      },
      {
       "value": "A2",
       "text": {
        "default": "Tyrol",
        "de-at": "Tirol",
        "de-ch": "Tirol",
        "de": "Tirol"
       }
      },
      {
       "value": "A3",
       "text": "Salzburg"
      },
      {
       "value": "A4",
       "text": {
        "default": "Carinthia",
        "de-at": "Kärnten",
        "de-ch": "Kärnten",
        "de": "Kärnten"
       }
      },
      {
       "value": "A5",
       "text": {
        "default": "Styria",
        "de-at": "Steier­mark",
        "de-ch": "Steier­mark",
        "de": "Steier­mark"
       }
      },
      {
       "value": "A6",
       "text": {
        "default": "Upper Austria",
        "de-at": "Oberösterreich",
        "de-ch": "Oberösterreich",
        "de": "Oberösterreich"
       }
      },
      {
       "value": "A7",
       "text": {
        "default": "Lower Austria",
        "de-ch": "Niederösterreich",
        "de-at": "Niederösterreich",
        "de": "Niederösterreich"
       }
      },
      {
       "value": "A8",
       "text": "Wien"
      },
      {
       "value": "A9",
       "text": "Burgenland"
      }
     ]
    },
    {
     "type": "dropdown",
     "name": "QF2AR2",
     "visible": false,
     "visibleIf": "{QF2AR} = \"A2\"",
     "title": {
      "default": "In which municipality? (if \"other\" please specify your Postal Code)",
      "de": "In welchem Gemeinde liegt Ihr Wohnort?\n(Wenn \"andere\", Bitte nennen Sie uns die Postleitzahl Ihres Wohnortes)",
      "de-at": "In welchem Gemeinde liegt Ihr Wohnort?\n(Wenn \"andere\", Bitte nennen Sie uns die Postleitzahl Ihres Wohnortes)",
      "de-ch": "In welchem Gemeinde liegt Ihr Wohnort?\n(Wenn \"andere\", Bitte nennen Sie uns die Postleitzahl Ihres Wohnortes)"
     },
     "isRequired": true,
     "hasOther": true,
     "choices": [
      {
       "value": "A1",
       "text": "Zirl"
      }
     ],
     "otherText": {
      "default": "Other (postal code)",
      "de": "Andere (Postleitzahl)",
      "de-at": "Andere (Postleitzahl)",
      "de-ch": "Andere (Postleitzahl)"
     }
    },
    {
     "type": "dropdown",
     "name": "QF2FD10",
     "visible": false,
     "visibleIf": "{QF2FD} = \"A11\"",
     "title": {
      "default": "In which municipality?",
      "fr": "Dans quel commune vivez-vous?"
     },
     "choices": [
      {
       "value": "A1",
       "text": "Lyon"
      },
      {
       "value": "A2",
       "text": "Albigny-sur-Saône"
      },
      {
       "value": "A3",
       "text": "Bron"
      },
      {
       "value": "A4",
       "text": "Cailloux-sur-Fontaines"
      },
      {
       "value": "A5",
       "text": "Caluire-et-Cuire"
      },
      {
       "value": "A6",
       "text": "Caluire-et-Cuire"
      },
      {
       "value": "A7",
       "text": "Charbonnières-les-Bains"
      },
      {
       "value": "A8",
       "text": "Charly"
      },
      {
       "value": "A9",
       "text": "Chassieu"
      },
      {
       "value": "A10",
       "text": "Collonges-au-Mont-d'Or"
      },
      {
       "value": "A11",
       "text": "Corbas"
      },
      {
       "value": "A12",
       "text": "Couzon-au-Mont-d'Or"
      },
      {
       "value": "A13",
       "text": "Craponne"
      },
      {
       "value": "A14",
       "text": "Curis-au-Mont-d'Or"
      },
      {
       "value": "A15",
       "text": "Dardilly"
      },
      {
       "value": "A16",
       "text": "Décines-Charpieu"
      },
      {
       "value": "A17",
       "text": "Écully"
      },
      {
       "value": "A18",
       "text": "Feyzin"
      },
      {
       "value": "A19",
       "text": "Fleurieu-sur-Saône"
      },
      {
       "value": "A20",
       "text": "Fontaines-Saint-Martin"
      },
      {
       "value": "A21",
       "text": "Fontaines-sur-Saône"
      },
      {
       "value": "A22",
       "text": "Francheville"
      },
      {
       "value": "A23",
       "text": "Genay"
      },
      {
       "value": "A24",
       "text": "Givors"
      },
      {
       "value": "A25",
       "text": "Grigny"
      },
      {
       "value": "A26",
       "text": "Irigny"
      },
      {
       "value": "A27",
       "text": "Jonage"
      },
      {
       "value": "A28",
       "text": "Limonest"
      },
      {
       "value": "A29",
       "text": "Lissieu"
      },
      {
       "value": "A30",
       "text": "Marcy-l'Étoile"
      },
      {
       "value": "A31",
       "text": "Meyzieu"
      },
      {
       "value": "A32",
       "text": "Mions"
      },
      {
       "value": "A33",
       "text": "Montanay"
      },
      {
       "value": "A34",
       "text": "La Mulatière"
      },
      {
       "value": "A35",
       "text": "Neuville-sur-Saône"
      },
      {
       "value": "A36",
       "text": "Oullins"
      },
      {
       "value": "A37",
       "text": "Pierre-Bénite"
      },
      {
       "value": "A38",
       "text": "Poleymieux-au-Mont-d'Or"
      },
      {
       "value": "A39",
       "text": "Quincieux"
      },
      {
       "value": "A40",
       "text": "Rillieux-la-Pape"
      },
      {
       "value": "A41",
       "text": "Rochetaillée-sur-Saône"
      },
      {
       "value": "A42",
       "text": "Saint-Cyr-au-Mont-d'Or"
      },
      {
       "value": "A43",
       "text": "Saint-Didier-au-Mont-d'Or"
      },
      {
       "value": "A44",
       "text": "Sainte-Foy-lès-Lyon"
      },
      {
       "value": "A45",
       "text": "Saint-Fons"
      },
      {
       "value": "A46",
       "text": "Saint-Genis-Laval"
      },
      {
       "value": "A47",
       "text": "Saint-Genis-les-Ollières"
      },
      {
       "value": "A48",
       "text": "Saint-Germain-au-Mont-d'Or"
      },
      {
       "value": "A49",
       "text": "Saint-Priest"
      },
      {
       "value": "A50",
       "text": "Saint-Romain-au-Mont-d'Or"
      },
      {
       "value": "A51",
       "text": "Sathonay-Camp"
      },
      {
       "value": "A52",
       "text": "Sathonay-Village"
      },
      {
       "value": "A53",
       "text": "Solaize"
      },
      {
       "value": "A54",
       "text": "Tassin-la-Demi-Lune"
      },
      {
       "value": "A55",
       "text": "La Tour-de-Salvagny"
      },
      {
       "value": "A56",
       "text": "Vaulx-en-Velin"
      },
      {
       "value": "A57",
       "text": "Vénissieux"
      },
      {
       "value": "A58",
       "text": "Vernaison"
      },
      {
       "value": "A59",
       "text": "Villeurbanne"
      }
     ]
    },
    {
     "type": "dropdown",
     "name": "QF2FD13",
     "visible": false,
     "visibleIf": "{QF2FD} = \"A13\"",
     "title": {
      "default": "In which municipality?",
      "fr": "Dans quel commune vivez-vous?"
     },
     "choices": [
      {
       "value": "A1",
       "text": "Alby-sur-Chéran"
      },
      {
       "value": "A2",
       "text": "Allèves"
      },
      {
       "value": "A3",
       "text": "Annecy"
      },
      {
       "value": "A4",
       "text": "Argonay"
      },
      {
       "value": "A5",
       "text": "Bluffy"
      },
      {
       "value": "A6",
       "text": "Chainaz-les-Frasses"
      },
      {
       "value": "A7",
       "text": "Chapeiry"
      },
      {
       "value": "A8",
       "text": "Charvonnex"
      },
      {
       "value": "A9",
       "text": "Chavanod"
      },
      {
       "value": "A10",
       "text": "Cusy"
      },
      {
       "value": "A11",
       "text": "Duingt"
      },
      {
       "value": "A12",
       "text": "Entrevernes"
      },
      {
       "value": "A13",
       "text": "Épagny-Metz-Tessy"
      },
      {
       "value": "A14",
       "text": "Fillière"
      },
      {
       "value": "A15",
       "text": "Groisy"
      },
      {
       "value": "A16",
       "text": "Gruffy"
      },
      {
       "value": "A17",
       "text": "Héry-sur-Alby"
      },
      {
       "value": "A18",
       "text": "La Chapelle-Saint-Maurice"
      },
      {
       "value": "A19",
       "text": "Leschaux"
      },
      {
       "value": "A20",
       "text": "Menthon-Saint-Bernard"
      },
      {
       "value": "A21",
       "text": "Montagny-les-Lanches"
      },
      {
       "value": "A22",
       "text": "Mûres"
      },
      {
       "value": "A23",
       "text": "Nâves-Parmelan"
      },
      {
       "value": "A24",
       "text": "Poisy"
      },
      {
       "value": "A25",
       "text": "Quintal"
      },
      {
       "value": "A26",
       "text": "Saint-Eustache"
      },
      {
       "value": "A27",
       "text": "Saint-Félix"
      },
      {
       "value": "A28",
       "text": "Saint-Jorioz"
      },
      {
       "value": "A29",
       "text": "Saint-Sylvestre"
      },
      {
       "value": "A30",
       "text": "Sévrier"
      },
      {
       "value": "A31",
       "text": "Talloires-Montmin"
      },
      {
       "value": "A32",
       "text": "Veyrier-du-Lac"
      },
      {
       "value": "A33",
       "text": "Villaz"
      },
      {
       "value": "A34",
       "text": "Viuz-la-Chiésaz"
      }
     ]
    },
    {
     "type": "dropdown",
     "name": "QF2GB",
     "visible": false,
     "visibleIf": "{QF1} = \"de\"",
     "title": {
      "default": "Could you please precise in which Bundesland do you live?",
      "de": "Bitte nennen Sie uns das Bundesland, in dem Ihr Wohnort liegt."
     },
     "choices": [
      {
       "value": "A1",
       "text": "Baden-Württemberg"
      },
      {
       "value": "A2",
       "text": "Bayern"
      },
      {
       "value": "A3",
       "text": "Berlin"
      },
      {
       "value": "A4",
       "text": "Brandenburg"
      },
      {
       "value": "A5",
       "text": "Bremen"
      },
      {
       "value": "A6",
       "text": "Hamburg"
      },
      {
       "value": "A7",
       "text": "Hesse"
      },
      {
       "value": "A8",
       "text": "Niedersachsen"
      },
      {
       "value": "A9",
       "text": "Mecklenburg-Vorpommern"
      },
      {
       "value": "A10",
       "text": "Nordrhein-Westfalen"
      },
      {
       "value": "A11",
       "text": "Rheinland-Pfalz"
      },
      {
       "value": "A12",
       "text": "Saarland"
      },
      {
       "value": "A13",
       "text": "Sachsen"
      },
      {
       "value": "A14",
       "text": "Sachsen-Anhalt"
      },
      {
       "value": "A15",
       "text": "Schleswig-Holstein"
      },
      {
       "value": "A16",
       "text": "Thüringen"
      }
     ]
    },
    {
     "type": "dropdown",
     "name": "QF2GB2",
     "visible": false,
     "visibleIf": "{QF2GB} = \"A2\"",
     "title": {
      "default": "Could you precise in which Landkreis?",
      "de": "In welchem Landkreis liegt Ihr Wohnort?"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "1",
       "text": "Aichach-Friedberg"
      },
      {
       "value": "2",
       "text": "Altötting"
      },
      {
       "value": "3",
       "text": "Amberg-Sulzbach"
      },
      {
       "value": "4",
       "text": "Ansbach"
      },
      {
       "value": "5",
       "text": "Aschaffenburg"
      },
      {
       "value": "6",
       "text": "Augsburg"
      },
      {
       "value": "7",
       "text": "Bad Kissingen"
      },
      {
       "value": "8",
       "text": "Bad Tölz-Wolfratshausen"
      },
      {
       "value": "9",
       "text": "Bamberg"
      },
      {
       "value": "10",
       "text": "Bayreuth"
      },
      {
       "value": "11",
       "text": "Berchtesgadener Land"
      },
      {
       "value": "12",
       "text": "Cham"
      },
      {
       "value": "13",
       "text": "Coburg"
      },
      {
       "value": "14",
       "text": "Dachau"
      },
      {
       "value": "15",
       "text": "Deggendorf"
      },
      {
       "value": "16",
       "text": "Dillingen"
      },
      {
       "value": "17",
       "text": "Dingolfing-Landau"
      },
      {
       "value": "18",
       "text": "Donau-Ries"
      },
      {
       "value": "19",
       "text": "Ebersberg"
      },
      {
       "value": "20",
       "text": "Eichstätt"
      },
      {
       "value": "21",
       "text": "Erding"
      },
      {
       "value": "22",
       "text": "Erlangen-Höchstadt"
      },
      {
       "value": "23",
       "text": "Forchheim"
      },
      {
       "value": "24",
       "text": "Freising"
      },
      {
       "value": "25",
       "text": "Freyung-Grafenau"
      },
      {
       "value": "26",
       "text": "Fürstenfeldbruck"
      },
      {
       "value": "27",
       "text": "Fürth"
      },
      {
       "value": "28",
       "text": "Garmisch-Partenkirchen"
      },
      {
       "value": "29",
       "text": "Günzburg"
      },
      {
       "value": "30",
       "text": "Hassberge"
      },
      {
       "value": "31",
       "text": "Hof"
      },
      {
       "value": "32",
       "text": "Kelheim"
      },
      {
       "value": "33",
       "text": "Kitzingen"
      },
      {
       "value": "34",
       "text": "Kronach"
      },
      {
       "value": "35",
       "text": "Kulmbach"
      },
      {
       "value": "36",
       "text": "Landsberg"
      },
      {
       "value": "37",
       "text": "Landshut"
      },
      {
       "value": "38",
       "text": "Lichtenfels"
      },
      {
       "value": "39",
       "text": "Lindau"
      },
      {
       "value": "40",
       "text": "Main-Spessart"
      },
      {
       "value": "41",
       "text": "Miesbach"
      },
      {
       "value": "42",
       "text": "Miltenberg"
      },
      {
       "value": "43",
       "text": "Mühldorf"
      },
      {
       "value": "44",
       "text": "München (Landkreis)"
      },
      {
       "value": "45",
       "text": "Neuburg-Schrobenha"
      },
      {
       "value": "46",
       "text": "Neumarkt"
      },
      {
       "value": "47",
       "text": "Neustadt (Aisch)-B"
      },
      {
       "value": "48",
       "text": "Neustadt an der Wa"
      },
      {
       "value": "49",
       "text": "Neu-Ulm"
      },
      {
       "value": "50",
       "text": "Nürnberger Land"
      },
      {
       "value": "51",
       "text": "Oberallgäu"
      },
      {
       "value": "52",
       "text": "Ostallgäu"
      },
      {
       "value": "53",
       "text": "Passau"
      },
      {
       "value": "54",
       "text": "Pfaffenhofen"
      },
      {
       "value": "55",
       "text": "Regen"
      },
      {
       "value": "56",
       "text": "Regensburg"
      },
      {
       "value": "57",
       "text": "Rhön-Grabfeld"
      },
      {
       "value": "58",
       "text": "Rosenheim"
      },
      {
       "value": "59",
       "text": "Roth"
      },
      {
       "value": "60",
       "text": "Rottal-Inn"
      },
      {
       "value": "61",
       "text": "Schwandorf"
      },
      {
       "value": "62",
       "text": "Schweinfurt"
      },
      {
       "value": "63",
       "text": "Starnberg"
      },
      {
       "value": "64",
       "text": "Straubing-Bogen"
      },
      {
       "value": "65",
       "text": "Tirschenreuth"
      },
      {
       "value": "66",
       "text": "Traunstein"
      },
      {
       "value": "67",
       "text": "Unterallgäu"
      },
      {
       "value": "68",
       "text": "Weilheim-Schongau"
      },
      {
       "value": "69",
       "text": "Weissenburg-Gunzen"
      },
      {
       "value": "70",
       "text": "Wunsiedel"
      },
      {
       "value": "71",
       "text": "Würzburg"
      }
     ]
    },
    {
     "type": "dropdown",
     "name": "QF2GB2EB",
     "visible": false,
     "visibleIf": "{QF2GB2}} = \"19\"",
     "title": {
      "default": "In Landkreis Ebersberg, in which municipality do you live?",
      "de": "In welcher Kommune des Landkreises Ebersberg wohnen Sie?"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "1",
       "text": "Anzing"
      },
      {
       "value": "2",
       "text": "Aßling"
      },
      {
       "value": "3",
       "text": "Baiern"
      },
      {
       "value": "4",
       "text": "Bruck"
      },
      {
       "value": "5",
       "text": "Ebersberg"
      },
      {
       "value": "6",
       "text": "Egmating"
      },
      {
       "value": "7",
       "text": "Emmering"
      },
      {
       "value": "8",
       "text": "Forstinning"
      },
      {
       "value": "9",
       "text": "Frauenneuharting"
      },
      {
       "value": "10",
       "text": "Glonn"
      },
      {
       "value": "11",
       "text": "Grafing"
      },
      {
       "value": "12",
       "text": "Hohenlinden"
      },
      {
       "value": "13",
       "text": "Kirchseeon"
      },
      {
       "value": "14",
       "text": "Markt Schwaben"
      },
      {
       "value": "15",
       "text": "Moosach"
      },
      {
       "value": "16",
       "text": "Oberpframmern"
      },
      {
       "value": "17",
       "text": "Pliening"
      },
      {
       "value": "18",
       "text": "Poing"
      },
      {
       "value": "19",
       "text": "Steinhöring"
      },
      {
       "value": "20",
       "text": "Vaterstetten"
      },
      {
       "value": "21",
       "text": "Zorneding"
      }
     ]
    },
    {
     "type": "dropdown",
     "name": "QFSW1",
     "visible": false,
     "visibleIf": "{QF1} = \"ch\"",
     "title": {
      "default": "Could you please precise in which Canton do you live?",
      "de": "Bitte nennen Sie uns den Kanton, in dem Ihr Wohnort liegt.",
      "de-at": "Bitte nennen Sie uns den Kanton, in dem Ihr Wohnort liegt.",
      "de-ch": "Bitte nennen Sie uns den Kanton, in dem Ihr Wohnort liegt."
     },
     "isRequired": true,
     "choices": [
      {
       "value": "A1",
       "text": "Aargau"
      },
      {
       "value": "A2",
       "text": "Appenzell Ausserrhoden"
      },
      {
       "value": "A3",
       "text": "Appenzell Innerrhoden"
      },
      {
       "value": "A4",
       "text": "Basel-Landschaft"
      },
      {
       "value": "A5",
       "text": "Basel-Stadt"
      },
      {
       "value": "A6",
       "text": "Bern"
      },
      {
       "value": "A7",
       "text": "Freiburg"
      },
      {
       "value": "A8",
       "text": "Genf"
      },
      {
       "value": "A9",
       "text": "Glarus"
      },
      {
       "value": "A10",
       "text": "Graubünden"
      },
      {
       "value": "A11",
       "text": "Jura"
      },
      {
       "value": "A12",
       "text": "Luzern"
      },
      {
       "value": "A13",
       "text": "Neuenburg"
      },
      {
       "value": "A14",
       "text": "Nidwalden"
      },
      {
       "value": "A15",
       "text": "Obwalden"
      },
      {
       "value": "A16",
       "text": "Schaffhausen"
      },
      {
       "value": "A17",
       "text": "Schwyz"
      },
      {
       "value": "A18",
       "text": "Solothurn"
      },
      {
       "value": "A19",
       "text": "St. Gallen"
      },
      {
       "value": "A20",
       "text": "Tessin"
      },
      {
       "value": "A21",
       "text": "Thurgau"
      },
      {
       "value": "A22",
       "text": "Uri"
      },
      {
       "value": "A23",
       "text": "Waadt"
      },
      {
       "value": "A24",
       "text": "Wallis"
      },
      {
       "value": "A25",
       "text": "Zug"
      },
      {
       "value": "A26",
       "text": "Zürich"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "QF2IT",
     "visible": false,
     "visibleIf": "{QF1} = \"it\"",
     "title": {
      "default": "In which province do you live?",
      "it": "In quale provincia vivi?"
     },
     "choices": [
      {
       "value": "1",
       "text": "Provincia di Pordenone"
      },
      {
       "value": "2",
       "text": {
        "default": "Other",
        "it": "Altra provincia"
       }
      }
     ]
    },
    {
     "type": "dropdown",
     "name": "QF2ITUTI",
     "visible": false,
     "visibleIf": "{QF2IT} = \"1\"",
     "title": {
      "default": "In which municipality?",
      "it": "In quale comune?"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "1",
       "text": "Andreis"
      },
      {
       "value": "2",
       "text": "Arba"
      },
      {
       "value": "3",
       "text": "Aviano"
      },
      {
       "value": "4",
       "text": "Azzano Decimo"
      },
      {
       "value": "5",
       "text": "Barcis"
      },
      {
       "value": "6",
       "text": "Brugnera"
      },
      {
       "value": "7",
       "text": "Budoia"
      },
      {
       "value": "8",
       "text": "Caneva"
      },
      {
       "value": "9",
       "text": "Casarsa della Delizia"
      },
      {
       "value": "10",
       "text": "Castelnovo del Friuli"
      },
      {
       "value": "11",
       "text": "Cavasso Nuovo"
      },
      {
       "value": "12",
       "text": "Chions"
      },
      {
       "value": "13",
       "text": "Cimolais"
      },
      {
       "value": "14",
       "text": "Claut"
      },
      {
       "value": "15",
       "text": "Clauzetto"
      },
      {
       "value": "16",
       "text": "Cordenons"
      },
      {
       "value": "17",
       "text": "Cordovado"
      },
      {
       "value": "18",
       "text": "Erto e Casso"
      },
      {
       "value": "19",
       "text": "Fanna"
      },
      {
       "value": "20",
       "text": "Fiume Veneto"
      },
      {
       "value": "21",
       "text": "Fontanafredda"
      },
      {
       "value": "22",
       "text": "Frisanco"
      },
      {
       "value": "23",
       "text": "Maniago"
      },
      {
       "value": "24",
       "text": "Meduno"
      },
      {
       "value": "25",
       "text": "Montereale Valcellina"
      },
      {
       "value": "26",
       "text": "Morsano al Tagliamento"
      },
      {
       "value": "27",
       "text": "Pasiano di Pordenone"
      },
      {
       "value": "28",
       "text": "Pinzano al Tagliamento"
      },
      {
       "value": "29",
       "text": "Polcenigo"
      },
      {
       "value": "30",
       "text": "Porcia"
      },
      {
       "value": "31",
       "text": "Pordenone"
      },
      {
       "value": "32",
       "text": "Prata di Pordenone"
      },
      {
       "value": "33",
       "text": "Pravisdomini"
      },
      {
       "value": "34",
       "text": "Roveredo in Piano"
      },
      {
       "value": "35",
       "text": "Sacile"
      },
      {
       "value": "36",
       "text": "San Giorgio della Richinvelda"
      },
      {
       "value": "37",
       "text": "San Martino al Tagliamento"
      },
      {
       "value": "38",
       "text": "San Quirino"
      },
      {
       "value": "39",
       "text": "San Vito al Tagliamento"
      },
      {
       "value": "40",
       "text": "Sequals"
      },
      {
       "value": "41",
       "text": "Sesto al Reghena"
      },
      {
       "value": "42",
       "text": "Spilimbergo"
      },
      {
       "value": "43",
       "text": "Tramonti di Sopra"
      },
      {
       "value": "44",
       "text": "Tramonti di Sotto"
      },
      {
       "value": "45",
       "text": "Travesio"
      },
      {
       "value": "46",
       "text": "Vito d'Asio"
      },
      {
       "value": "47",
       "text": "Vivaro"
      },
      {
       "value": "48",
       "text": "Zoppola"
      },
      {
       "value": "49",
       "text": "Vajont"
      },
      {
       "value": "50",
       "text": "Valvasone Arzene"
      }
     ],
     "otherText": {
      "default": "Other (describe)",
      "it": "Altro (CAP)"
     }
    },
    {
     "type": "dropdown",
     "name": "QF2SL",
     "visible": false,
     "visibleIf": "{QF1} = \"si\"",
     "title": {
      "default": "Could you precise in which region do you live?",
      "sl": "Navedite prosim regijo, v kateri živite."
     },
     "choices": [
      {
       "value": "1",
       "text": "Gorenjska"
      },
      {
       "value": "2",
       "text": "Goriška"
      },
      {
       "value": "3",
       "text": "Jugovzhodna Slovenija"
      },
      {
       "value": "4",
       "text": "Koroška"
      },
      {
       "value": "5",
       "text": "Obalno-kraška"
      },
      {
       "value": "6",
       "text": "Osrednjeslovenska"
      },
      {
       "value": "7",
       "text": "Podravska"
      },
      {
       "value": "8",
       "text": "Pomurska"
      },
      {
       "value": "9",
       "text": "Posavska"
      },
      {
       "value": "10",
       "text": "Primorsko-notranjska"
      },
      {
       "value": "11",
       "text": "Savinjska"
      },
      {
       "value": "12",
       "text": "Zasavska"
      }
     ]
    },
    {
     "type": "dropdown",
     "name": "QF2SL7",
     "visible": false,
     "visibleIf": "{QF2SL}} = \"7\"",
     "title": {
      "default": "Could you precise in which municipality do you live?",
      "sl": "Lahko natančneje navedete občino, v kateri živite?"
     },
     "choices": [
      {
       "value": "1",
       "text": "Benedikt"
      },
      {
       "value": "2",
       "text": "Cerkvenjak"
      },
      {
       "value": "3",
       "text": "Cirkulane"
      },
      {
       "value": "4",
       "text": "Destrnik"
      },
      {
       "value": "5",
       "text": "Dornava"
      },
      {
       "value": "6",
       "text": "Duplek"
      },
      {
       "value": "7",
       "text": "Gorišnica"
      },
      {
       "value": "8",
       "text": "Hajdina"
      },
      {
       "value": "9",
       "text": "Hoče - Slivnica"
      },
      {
       "value": "10",
       "text": "Juršinci"
      },
      {
       "value": "11",
       "text": "Kidričevo"
      },
      {
       "value": "12",
       "text": "Kungota"
      },
      {
       "value": "13",
       "text": "Lenart"
      },
      {
       "value": "14",
       "text": "Lovrenc na Pohorju"
      },
      {
       "value": "15",
       "text": "Majšperk"
      },
      {
       "value": "16",
       "text": "Makole"
      },
      {
       "value": "17",
       "text": "Maribor"
      },
      {
       "value": "18",
       "text": "Markovci"
      },
      {
       "value": "19",
       "text": "Miklavž na Dravskem polju"
      },
      {
       "value": "20",
       "text": "Oplotnica"
      },
      {
       "value": "21",
       "text": "Ormož"
      },
      {
       "value": "22",
       "text": "Pesnica"
      },
      {
       "value": "23",
       "text": "Podlehnik"
      },
      {
       "value": "24",
       "text": "Poljčane"
      },
      {
       "value": "25",
       "text": "Ptuj"
      },
      {
       "value": "26",
       "text": "Rače - Fram"
      },
      {
       "value": "27",
       "text": "Ruše"
      },
      {
       "value": "28",
       "text": "Selnica ob Dravi"
      },
      {
       "value": "29",
       "text": "Šentilj"
      },
      {
       "value": "30",
       "text": "Slovenska Bistrica"
      },
      {
       "value": "31",
       "text": "Središče ob Dravi"
      },
      {
       "value": "32",
       "text": "Starše"
      },
      {
       "value": "33",
       "text": "Sveta Ana"
      },
      {
       "value": "34",
       "text": "Sveta Trojica v Slovenskih goricah"
      },
      {
       "value": "35",
       "text": "Sveti Andraž v Slovenskih goricah"
      },
      {
       "value": "36",
       "text": "Sveti Jurij v Slovenskih goricah"
      },
      {
       "value": "37",
       "text": "Sveti Tomaž"
      },
      {
       "value": "38",
       "text": "Trnovska vas"
      },
      {
       "value": "39",
       "text": "Videm"
      },
      {
       "value": "40",
       "text": "Zavrč"
      },
      {
       "value": "41",
       "text": "Žetale"
      }
     ]
    },
    {
     "type": "text",
     "name": "QF3",
     "visible": false,
     "visibleIf": "({QF2FD} notempty and !([\"A11\", \"A13\"] anyof {QF2FD}))\r\nor\r\n({QF2AR} notempty and !([\"A1\", \"A2\"] anyof {QF2AR}))\r\nor\r\n({QF2GB2} notempty and {QF2GB2} != \"19\")\r\nor\r\n({QFSW1} notempty and !([\"A6\", \"A10\", \"A12\", \"A19\"] anyof {QFSW1}))\r\nor\r\n{QFSW1} == \"A2\"\r\nor\r\n({QF2SL} notempty and {QF2SL} != \"7\")",
     "title": {
      "default": "Could you please specify your postal code?",
      "de": "Bitte nennen Sie uns die Postleitzahl Ihres Wohnortes.",
      "sl": "Lahko navedete poštno številko?",
      "fr": "Quel est votre code postal?",
      "it": "Puoi indicare per favore il codice di avviamento postale (cap) del tuo comune?",
      "de-ch": "Bitte nennen Sie uns die Postleitzahl Ihres Wohnortes.",
      "de-at": "Bitte nennen Sie uns die Postleitzahl Ihres Wohnortes."
     }
    }
   ]
  },
  {
   "name": "activities",
   "elements": [
    {
     "type": "checkbox",
     "name": "EQ1AU",
     "visible": false,
     "visibleIf": "{QF1} == \"at\" or {QF1} == \"li\" or ({QF1} == \"de\" and {QF2GB} == \"A2\") or ({QF1} == \"ch\" and ({QFSW1} == \"A10\" or {QFSW1} == \"A19\"))",
     "title": {
      "default": "In the Vorarlberg Region do you usually carry out any of the following activities? (Multiple answers are possible)",
      "de": "Welche dieser Aktivitäten führen Sie regelmäßig in Vorarlberg aus?\n(Mehrfachnennungen sind möglich)",
      "de-at": "Welche dieser Aktivitäten führen Sie regelmäßig in Vorarlberg aus? \n\n(Mehrfachnennungen sind möglich)",
      "de-ch": "Welche dieser Aktivitäten führen Sie regelmäßig in Vorarlberg aus? \n\n(Mehrfachnennungen sind möglich)"
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Work/Business",
        "de": "Arbeit/Geschäftlich",
        "de-at": "Arbeit/Geschäftlich",
        "de-ch": "Arbeit/Geschäftlich"
       }
      },
      {
       "value": "2",
       "text": {
        "default": "Study",
        "de": "Ausbildung",
        "de-at": "Ausbildung",
        "de-ch": "Ausbildung"
       }
      },
      {
       "value": "3",
       "text": {
        "default": "Shopping",
        "de": "Einkaufen",
        "de-ch": "Einkaufen",
        "de-at": "Einkaufen"
       }
      },
      {
       "value": "4",
       "text": {
        "default": "Leisure activities (free time)",
        "de": "Freizeitaktivitäten",
        "de-at": "Freizeitaktivitäten",
        "de-ch": "Freizeitaktivitäten"
       }
      },
      {
       "value": "5",
       "text": {
        "default": "Other",
        "de": "Sonstiges",
        "de-at": "Sonstiges",
        "de-ch": "Sonstiges"
       }
      },
      {
       "value": "6",
       "text": {
        "default": "None",
        "de": "Keine der genannten",
        "de-at": "Keine der genannten",
        "de-ch": "Keine der genannten"
       }
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "EQ1GE",
     "visible": false,
     "visibleIf": "{QF1} == \"de\"",
     "title": {
      "default": "In the Landkreis Ebersberg do you usually carry out any of the following activities? (Multiple answers are possible)",
      "de": "Welche dieser Aktivitäten führen Sie regelmäßig im Landkreis Ebersberg aus? (Mehrfachnennungen sind möglich)"
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Work/Business",
        "de": "Arbeit"
       }
      },
      {
       "value": "2",
       "text": {
        "default": "Study",
        "de": "Studium"
       }
      },
      {
       "value": "3",
       "text": {
        "default": "Shopping",
        "de": "Einkaufen"
       }
      },
      {
       "value": "4",
       "text": {
        "default": "Leisure activities (free time)",
        "de": "Freizeitaktivitäten"
       }
      },
      {
       "value": "5",
       "text": {
        "default": "Other",
        "de": "Sonstiges"
       }
      },
      {
       "value": "6",
       "text": {
        "default": "None",
        "de": "Keine der genannten"
       }
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "EQ1IT",
     "visible": false,
     "visibleIf": "{QF1} == 'it' and {QF2ITUTI} notempty and [\"16\", \"21\", \"30\", \"31\", \"34\", \"48\"] contains {QF2ITUTI}",
     "title": {
      "default": "In one or more of these municipalities: Porcia, Fontanafredda, Roveredo in Piano, Zoppola, Cordenons do you usually carry out any of the following activities? (multiple answers are possible)",
      "it": "In uno o più di questi comuni: Porcia, Fontanafredda, Roveredo in Piano, Zoppola, Cordenons svolgi solitamente una o più delle seguenti attività?\n(sono possibili più risposte)"
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Work/Business",
        "it": "Lavoro/affari"
       }
      },
      {
       "value": "2",
       "text": {
        "default": "Study",
        "it": "Studio"
       }
      },
      {
       "value": "3",
       "text": {
        "default": "Shopping",
        "it": "Acquisti"
       }
      },
      {
       "value": "4",
       "text": {
        "default": "Leisure activities (free time)",
        "it": "Attività di svago (nel tempo libero)"
       }
      },
      {
       "value": "5",
       "text": {
        "default": "Other",
        "it": "Altro"
       }
      },
      {
       "value": "6",
       "text": {
        "default": "None",
        "it": "Nessuna"
       }
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "EQ1SL",
     "visible": false,
     "visibleIf": "{QF1} == 'si'",
     "title": {
      "default": "In the city of Maribor do you usually carry out any of the following activities? (Multiple answers are possible)",
      "sl": "Ali v mestu Maribor običajno izvajate katere od naslednjih aktivnosti?\n(Možnih je več odgovorov)"
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Work/Business",
        "sl": "Delo/posel"
       }
      },
      {
       "value": "2",
       "text": {
        "default": "Study",
        "sl": "Študij"
       }
      },
      {
       "value": "3",
       "text": {
        "default": "Shopping",
        "sl": "Nakupovanje"
       }
      },
      {
       "value": "4",
       "text": {
        "default": "Leisure activities (free time)",
        "sl": "Aktivnosti v prostem času "
       }
      },
      {
       "value": "5",
       "text": {
        "default": "Other",
        "sl": "Drugo"
       }
      },
      {
       "value": "6",
       "text": {
        "default": "None",
        "sl": "Nobenega izmed navedenih"
       }
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "EQ1SW1",
     "visible": false,
     "visibleIf": "{QFSW1} == 'A6'",
     "title": {
      "default": "In the Canton of Berne do you usually carry out any of the following activities? (Multiple answers are possible)",
      "de": "Welche dieser Aktivitäten führen Sie in ihrer Wohngemeinde regelmässig aus?\n(Mehrfachnennungen sind möglich)",
      "sl": "Ali v mestu Maribor običajno izvajate katere od naslednjih aktivnosti?\n(Možnih je več odgovorov)",
      "de-ch": "Welche dieser Aktivitäten führen Sie in ihrer Wohngemeinde regelmässig aus?\n(Mehrfachnennungen sind möglich)",
      "de-at": "Welche dieser Aktivitäten führen Sie in ihrer Wohngemeinde regelmässig aus?\n(Mehrfachnennungen sind möglich)"
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Work/Business",
        "de": "Arbeit/Geschäftlich",
        "de-at": "Arbeit/Geschäftlich",
        "de-ch": "Arbeit"
       }
      },
      {
       "value": "2",
       "text": {
        "default": "Study",
        "de": "Ausbildung",
        "de-at": "Ausbildung",
        "de-ch": "Studium"
       }
      },
      {
       "value": "3",
       "text": {
        "default": "Shopping",
        "de": "Einkaufen",
        "de-at": "Einkaufen",
        "de-ch": "Einkaufen"
       }
      },
      {
       "value": "4",
       "text": {
        "default": "Leisure activities (free time)",
        "de": "Freizeitaktivitäten",
        "de-at": "Freizeitaktivitäten",
        "de-ch": "Freizeitaktivitäten"
       }
      },
      {
       "value": "5",
       "text": {
        "default": "Other",
        "de": "Sonstiges",
        "de-at": "Sonstiges",
        "de-ch": "Sonstiges"
       }
      },
      {
       "value": "6",
       "text": {
        "default": "None",
        "de": "Keine der genannten",
        "de-at": "Keine der genannten",
        "de-ch": "Keine der genannten"
       }
      }
     ]
    }
   ]
  },
  {
   "name": "activities_greater_lyon",
   "elements": [
    {
     "type": "checkbox",
     "name": "EQ1FRGL",
     "title": {
      "default": "In the Greater Lyon",
      "fr": "Sur le Grand Lyon"
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Work/Business",
        "fr": "Travail"
       }
      },
      {
       "value": "2",
       "text": {
        "default": "Study",
        "fr": "Etudes"
       }
      },
      {
       "value": "3",
       "text": {
        "default": "Shopping",
        "fr": "Courses"
       }
      },
      {
       "value": "4",
       "text": {
        "default": "Leisure activities (free time)",
        "fr": "Loisirs"
       }
      },
      {
       "value": "5",
       "text": {
        "default": "Other",
        "fr": "Autres"
       }
      },
      {
       "value": "6",
       "text": {
        "default": "None",
        "fr": "Aucune"
       }
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "EQ1FRGA",
     "title": {
      "default": "In the Greater Annecy",
      "fr": "Sur le Grand Annecy"
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Work/Business",
        "fr": "Travail"
       }
      },
      {
       "value": "2",
       "text": {
        "default": "Study",
        "fr": "Etudes"
       }
      },
      {
       "value": "3",
       "text": {
        "default": "Shopping",
        "fr": "Courses"
       }
      },
      {
       "value": "4",
       "text": {
        "default": "Leisure activities (free time)",
        "fr": "Loisirs"
       }
      },
      {
       "value": "5",
       "text": {
        "default": "Other",
        "fr": "Autres"
       }
      },
      {
       "value": "6",
       "text": {
        "default": "None",
        "fr": "Aucune"
       }
      }
     ]
    }
   ],
   "visibleIf": "{QF2FD} == 'A1' or {QF2FD} == 'A3' or {QF2FD} == 'A5' or {QF2FD} == 'A6' or {QF2FD} == 'A7' or {QF2FD} == 'A8' or {QF2FD} == 'A10' or {QF2FD} == 'A11' or {QF2FD} == 'A12' or {QF2FD} == 'A13'",
   "description": {
    "default": "In the Greater Lyon or Greater Annecy do you usually carry out any of the following activities?",
    "fr": "Quelles activités pratiquez-vous sur le Grand Lyon ou le Grand Annecy?\n(plusieurs réponses possibles)"
   }
  },
  {
   "name": "question1",
   "elements": [
    {
     "type": "checkbox",
     "name": "Q1TRAIN",
     "title": {
      "default": "Which of these aspects would you associate to the TRAIN?",
      "it": "Quali aspetti associeresti al TRENO?",
      "de": "Welchen Aspekt verknüpfen Sie mit der BAHN?",
      "de-at": "Welchen Aspekt verknüpfen Sie mit der BAHN?",
      "de-ch": "Welchen Aspekt verknüpfen Sie mit der BAHN?",
      "sl": "Katere od teh vidikov bi povezali z VLAKOM?",
      "fr": "Quels sont les qualificatifs qui correspondent le mieux au TRAIN?"
     },
     "validators": [
      {
       "type": "expression",
       "text": {
        "default": "Please select at most 3 aspects",
        "it": "Per favore, seleziona al massimo 3 delle opzioni elencate",
        "de": "Bitte wählen Sie max. drei der folgenden Optionen",
        "sl": "Za vsako rešitev mobilnosti izberite največ 3 možnosti.",
        "fr": "Sélectionnez au maximum 3 termes parmi ceux proposés",
        "de-at": "Bitte wählen Sie max. drei der folgenden Optionen",
        "de-ch": "Bitte wählen Sie max. drei der folgenden Optionen"
       },
       "expression": "{Q1TRAIN.length} <= 3"
      }
     ],
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Good Comfort",
        "it": "Comfort/comodità",
        "de": "Guter Komfort",
        "de-at": "Guter Komfort",
        "de-ch": "Guter Komfort",
        "sl": "Udobje",
        "fr": "Bon confort"
       },
       "enableIf": "{Q1TRAIN} anyof \"1\" or {Q1TRAIN.length} < 3"
      },
      {
       "value": "2",
       "text": {
        "default": "High Accessibility",
        "it": "Elevata facilità di accesso",
        "de": "Hohe Barrierefreiheit",
        "de-at": "Hohe Barrierefreiheit",
        "de-ch": "Hohe Barrierefreiheit",
        "sl": "Visoka dostopnost",
        "fr": "Grande accesibilité"
       },
       "enableIf": "{Q1TRAIN} anyof \"2\" or {Q1TRAIN.length} < 3"
      },
      {
       "value": "3",
       "text": {
        "default": "Cost efficiency",
        "it": "Buon rapporto qualità/prezzo",
        "de-at": "Kostengünstig",
        "de-ch": "Kostengünstig",
        "de": "Kostengünstig",
        "sl": "Stroškovna učinkovitost",
        "fr": "Bon rapport qualité / prix"
       },
       "enableIf": "{Q1TRAIN} anyof \"3\" or {Q1TRAIN.length} < 3"
      },
      {
       "value": "4",
       "text": {
        "default": "Time saving",
        "it": "Risparmio di tempo",
        "de": "Zeitsparend",
        "de-at": "Zeitsparend",
        "de-ch": "Zeitsparend",
        "sl": "Prihranek časa",
        "fr": "Gain de temps"
       },
       "enableIf": "{Q1TRAIN} anyof \"4\" or {Q1TRAIN.length} < 3"
      },
      {
       "value": "5",
       "text": {
        "default": "Reducing pollution",
        "it": "Riduzione dell'inquinamento",
        "de": "Umweltfreundlich",
        "de-at": "Umweltfreundlich",
        "de-ch": "Umweltfreundlich",
        "sl": "Zmanjšanje onesnaževanja",
        "fr": "Réduction de la pollution"
       },
       "enableIf": "{Q1TRAIN} anyof \"5\" or {Q1TRAIN.length} < 3"
      },
      {
       "value": "6",
       "text": {
        "default": "Improve health conditions",
        "it": "Miglioramento della propria salute",
        "de": "Gesundheitsfördernd",
        "de-ch": "Gesundheitsfördernd",
        "de-at": "Gesundheitsfördernd",
        "sl": "Boljši zdravstveni pogoji",
        "fr": "Amélioration de la santé"
       },
       "enableIf": "{Q1TRAIN} anyof \"6\" or {Q1TRAIN.length} < 3"
      },
      {
       "value": "7",
       "text": {
        "default": "High Sociability",
        "it": "Elevata socialità (relazione con altre persone)",
        "de": "Geselligkeit",
        "de-at": "Geselligkeit",
        "de-ch": "Geselligkeit",
        "sl": "Družabnost",
        "fr": "Grande sociabilité"
       },
       "enableIf": "{Q1TRAIN} anyof \"7\" or {Q1TRAIN.length} < 3"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "Q1CAR",
     "title": {
      "default": "Which of these aspects would you associate to the CAR?",
      "it": "Quali aspetti associeresti all'AUTO?",
      "de": "Welchen Aspekt verknüpfen Sie mit AUTOVERKEHR?",
      "de-ch": "Welchen Aspekt verknüpfen Sie mit AUTOVERKEHR?",
      "de-at": "Welchen Aspekt verknüpfen Sie mit AUTOVERKEHR?",
      "sl": "Katere od teh vidikov bi povezali z AVTOMOBILOM?",
      "fr": "Quels sont les qualificatifs qui correspondent le mieux au CAR?"
     },
     "validators": [
      {
       "type": "expression",
       "text": {
        "default": "Please select at most 3 aspects",
        "it": "Per favore, seleziona al massimo 3 delle opzioni elencate",
        "de": "Bitte wählen Sie max. drei der folgenden Optionen",
        "sl": "Za vsako rešitev mobilnosti izberite največ 3 možnosti.",
        "fr": "Sélectionnez au maximum 3 termes parmi ceux proposés",
        "de-at": "Bitte wählen Sie max. drei der folgenden Optionen",
        "de-ch": "Bitte wählen Sie max. drei der folgenden Optionen"
       },
       "expression": "{Q1CAR.length} <= 3"
      }
     ],
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Good Comfort",
        "it": "Comfort/comodità",
        "de": "Guter Komfort",
        "de-at": "Guter Komfort",
        "de-ch": "Guter Komfort",
        "sl": "Udobje",
        "fr": "Bon confort"
       },
       "enableIf": "{Q1CAR} anyof \"1\" or {Q1CAR.length} < 3"
      },
      {
       "value": "2",
       "text": {
        "default": "High Accessibility",
        "it": "Elevata facilità di accesso",
        "de": "Hohe Barrierefreiheit",
        "de-at": "Hohe Barrierefreiheit",
        "de-ch": "Hohe Barrierefreiheit",
        "sl": "Visoka dostopnost",
        "fr": "Grande accesibilité"
       },
       "enableIf": "{Q1CAR} anyof \"2\" or {Q1CAR.length} < 3"
      },
      {
       "value": "3",
       "text": {
        "default": "Cost efficiency",
        "it": "Buon rapporto qualità/prezzo",
        "de": "Kostengünstig",
        "de-at": "Kostengünstig",
        "de-ch": "Kostengünstig",
        "sl": "Stroškovna učinkovitost",
        "fr": "Bon rapport qualité / prix"
       },
       "enableIf": "{Q1CAR} anyof \"3\" or {Q1CAR.length} < 3"
      },
      {
       "value": "4",
       "text": {
        "default": "Time saving",
        "it": "Risparmio di tempo",
        "de": "Zeitsparend",
        "de-at": "Zeitsparend",
        "de-ch": "Zeitsparend",
        "sl": "Prihranek časa",
        "fr": "Gain de temps"
       },
       "enableIf": "{Q1CAR} anyof \"4\" or {Q1CAR.length} < 3"
      },
      {
       "value": "5",
       "text": {
        "default": "Reducing pollution",
        "it": "Riduzione dell'inquinamento",
        "de": "Umweltfreundlich",
        "de-at": "Umweltfreundlich",
        "de-ch": "Umweltfreundlich",
        "sl": "Zmanjšanje onesnaževanja",
        "fr": "Réduction de la pollution"
       },
       "enableIf": "{Q1CAR} anyof \"5\" or {Q1CAR.length} < 3"
      },
      {
       "value": "6",
       "text": {
        "default": "Improve health conditions",
        "it": "Miglioramento della propria salute",
        "de": "Gesundheitsfördernd",
        "de-at": "Gesundheitsfördernd",
        "de-ch": "Gesundheitsfördernd",
        "sl": "Boljši zdravstveni pogoji",
        "fr": "Amélioration de la santé"
       },
       "enableIf": "{Q1CAR} anyof \"6\" or {Q1CAR.length} < 3"
      },
      {
       "value": "7",
       "text": {
        "default": "High Sociability",
        "it": "Elevata socialità (relazione con altre persone)",
        "de": "Geselligkeit",
        "de-at": "Geselligkeit",
        "de-ch": "Geselligkeit",
        "sl": "Družabnost",
        "fr": "Grande sociabilité"
       },
       "enableIf": "{Q1CAR} anyof \"7\" or {Q1CAR.length} < 3"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "Q1PT",
     "title": {
      "default": "Which of these aspects would you associate to the PUBLIC TRANSPORT (Bus, Tram, Metro)?",
      "it": "Quali aspetti associeresti al TRASPORTO PUBBLICO (Bus, Tram, Metro)?",
      "de": "Welchen Aspekt verknüpfen Sie mit DEM ÖPNV?",
      "de-at": "Welchen Aspekt verknüpfen Sie mit DEM ÖPNV?",
      "de-ch": "Welchen Aspekt verknüpfen Sie mit DEM ÖFFENTLICHEN VERKEHR?",
      "sl": "Katere od teh vidikov bi povezali z JAVNIM PREVOZOM?",
      "fr": "Quels sont les qualificatifs qui correspondent le mieux au TRANSPORT PUBLIC URBAIN (Bus, Tram, Metro)?"
     },
     "validators": [
      {
       "type": "expression",
       "text": {
        "default": "Please select at most 3 aspects",
        "it": "Per favore, seleziona al massimo 3 delle opzioni elencate",
        "de": "Bitte wählen Sie max. drei der folgenden Optionen",
        "sl": "Za vsako rešitev mobilnosti izberite največ 3 možnosti.",
        "fr": "Sélectionnez au maximum 3 termes parmi ceux proposés",
        "de-at": "Bitte wählen Sie max. drei der folgenden Optionen",
        "de-ch": "Bitte wählen Sie max. drei der folgenden Optionen"
       },
       "expression": "{Q1PT.length} <= 3"
      }
     ],
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Good Comfort",
        "it": "Comfort/comodità",
        "de-ch": "Guter Komfort",
        "de-at": "Guter Komfort",
        "de": "Guter Komfort",
        "sl": "Udobje",
        "fr": "Bon confort"
       },
       "enableIf": "{Q1PT} anyof \"1\" or {Q1PT.length} < 3"
      },
      {
       "value": "2",
       "text": {
        "default": "High Accessibility",
        "it": "Elevata facilità di accesso",
        "de": "Hohe Barrierefreiheit",
        "de-at": "Hohe Barrierefreiheit",
        "de-ch": "Hohe Barrierefreiheit",
        "sl": "Visoka dostopnost",
        "fr": "Grande accesibilité"
       },
       "enableIf": "{Q1PT} anyof \"2\" or {Q1PT.length} < 3"
      },
      {
       "value": "3",
       "text": {
        "default": "Cost efficiency",
        "it": "Buon rapporto qualità/prezzo",
        "de-ch": "Kostengünstig",
        "de-at": "Kostengünstig",
        "de": "Kostengünstig",
        "sl": "Stroškovna učinkovitost",
        "fr": "Bon rapport qualité / prix"
       },
       "enableIf": "{Q1PT} anyof \"3\" or {Q1PT.length} < 3"
      },
      {
       "value": "4",
       "text": {
        "default": "Time saving",
        "it": "Risparmio di tempo",
        "de-ch": "Zeitsparend",
        "de-at": "Zeitsparend",
        "de": "Zeitsparend",
        "sl": "Prihranek časa",
        "fr": "Gain de temps"
       },
       "enableIf": "{Q1PT} anyof \"4\" or {Q1PT.length} < 3"
      },
      {
       "value": "5",
       "text": {
        "default": "Reducing pollution",
        "it": "Riduzione dell'inquinamento",
        "de-ch": "Umweltfreundlich",
        "de-at": "Umweltfreundlich",
        "de": "Umweltfreundlich",
        "sl": "Zmanjšanje onesnaževanja",
        "fr": "Réduction de la pollution"
       },
       "enableIf": "{Q1PT} anyof \"5\" or {Q1PT.length} < 3"
      },
      {
       "value": "6",
       "text": {
        "default": "Improve health conditions",
        "it": "Miglioramento della propria salute",
        "de-ch": "Gesundheitsfördernd",
        "de-at": "Gesundheitsfördernd",
        "de": "Gesundheitsfördernd",
        "sl": "Boljši zdravstveni pogoji",
        "fr": "Amélioration de la santé"
       },
       "enableIf": "{Q1PT} anyof \"6\" or {Q1PT.length} < 3"
      },
      {
       "value": "7",
       "text": {
        "default": "High Sociability",
        "it": "Elevata socialità (relazione con altre persone)",
        "de": "Geselligkeit",
        "de-at": "Geselligkeit",
        "de-ch": "Geselligkeit",
        "sl": "Družabnost",
        "fr": "Grande sociabilité"
       },
       "enableIf": "{Q1PT} anyof \"7\" or {Q1PT.length} < 3"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "Q1BIKE",
     "title": {
      "default": "Which of these aspects would you associate to the BIKE?",
      "it": "Quali aspetti associeresti alla BICICLETTA?",
      "de": "Welchen Aspekt verknüpfen Sie mit FAHRRADFAHREN?",
      "de-ch": "Welchen Aspekt verknüpfen Sie mit FAHRRADFAHREN?",
      "de-at": "Welchen Aspekt verknüpfen Sie mit FAHRRADFAHREN?",
      "sl": "Katere od teh vidikov bi povezali s KOLESOM?",
      "fr": "Quels sont les qualificatifs qui correspondent le mieux au VÉLO?"
     },
     "validators": [
      {
       "type": "expression",
       "text": {
        "default": "Please select at most 3 aspects",
        "it": "Per favore, seleziona al massimo 3 delle opzioni elencate",
        "de": "Bitte wählen Sie max. drei der folgenden Optionen",
        "sl": "Za vsako rešitev mobilnosti izberite največ 3 možnosti.",
        "fr": "Sélectionnez au maximum 3 termes parmi ceux proposés",
        "de-at": "Bitte wählen Sie max. drei der folgenden Optionen",
        "de-ch": "Bitte wählen Sie max. drei der folgenden Optionen"
       },
       "expression": "{Q1BIKE.length} <= 3"
      }
     ],
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Good Comfort",
        "it": "Comfort/comodità",
        "de": "Guter Komfort",
        "de-at": "Guter Komfort",
        "de-ch": "Guter Komfort",
        "sl": "Udobje",
        "fr": "Bon confort"
       },
       "enableIf": "{Q1BIKE} anyof \"1\" or {Q1BIKE.length} < 3"
      },
      {
       "value": "2",
       "text": {
        "default": "High Accessibility",
        "it": "Elevata facilità di accesso",
        "de": "Hohe Barrierefreiheit",
        "de-at": "Hohe Barrierefreiheit",
        "de-ch": "Hohe Barrierefreiheit",
        "sl": "Visoka dostopnost",
        "fr": "Grande accesibilité"
       },
       "enableIf": "{Q1BIKE} anyof \"2\" or {Q1BIKE.length} < 3"
      },
      {
       "value": "3",
       "text": {
        "default": "Cost efficiency",
        "it": "Buon rapporto qualità/prezzo",
        "de": "Kostengünstig",
        "de-at": "Kostengünstig",
        "de-ch": "Kostengünstig",
        "sl": "Stroškovna učinkovitost",
        "fr": "Bon rapport qualité / prix"
       },
       "enableIf": "{Q1BIKE} anyof \"3\" or {Q1BIKE.length} < 3"
      },
      {
       "value": "4",
       "text": {
        "default": "Time saving",
        "it": "Risparmio di tempo",
        "de": "Zeitsparend",
        "de-at": "Zeitsparend",
        "de-ch": "Zeitsparend",
        "sl": "Prihranek časa",
        "fr": "Gain de temps"
       },
       "enableIf": "{Q1BIKE} anyof \"4\" or {Q1BIKE.length} < 3"
      },
      {
       "value": "5",
       "text": {
        "default": "Reducing pollution",
        "it": "Riduzione dell'inquinamento",
        "de": "Umweltfreundlich",
        "de-at": "Umweltfreundlich",
        "de-ch": "Umweltfreundlich",
        "sl": "Zmanjšanje onesnaževanja",
        "fr": "Réduction de la pollution"
       },
       "enableIf": "{Q1BIKE} anyof \"5\" or {Q1BIKE.length} < 3"
      },
      {
       "value": "6",
       "text": {
        "default": "Improve health conditions",
        "it": "Miglioramento della propria salute",
        "de": "Gesundheitsfördernd",
        "de-at": "Gesundheitsfördernd",
        "de-ch": "Gesundheitsfördernd",
        "sl": "Boljši zdravstveni pogoji",
        "fr": "Amélioration de la santé"
       },
       "enableIf": "{Q1BIKE} anyof \"6\" or {Q1BIKE.length} < 3"
      },
      {
       "value": "7",
       "text": {
        "default": "High Sociability",
        "it": "Elevata socialità (relazione con altre persone)",
        "de": "Geselligkeit",
        "de-at": "Geselligkeit",
        "de-ch": "Geselligkeit",
        "sl": "Družabnost",
        "fr": "Grande sociabilité"
       },
       "enableIf": "{Q1BIKE} anyof \"7\" or {Q1BIKE.length} < 3"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "Q1WALK",
     "title": {
      "default": "Which of these aspects would you associate to the WALK?",
      "it": "Quali aspetti associeresti al CAMMINARE?",
      "de": "Welchen Aspekt verknüpfen Sie mit DEM ZU Fuß GEHEN?",
      "de-at": "Welchen Aspekt verknüpfen Sie mit DEM ZU Fuß GEHEN?",
      "de-ch": "Welchen Aspekt verknüpfen Sie mit DEM ZU FUSS GEHEN?",
      "sl": "Katere od teh vidikov bi povezali s HOJO?",
      "fr": "Quels sont les qualificatifs qui correspondent le mieux À LA MARCHE?"
     },
     "validators": [
      {
       "type": "expression",
       "text": {
        "default": "Please select at most 3 aspects",
        "it": "Per favore, seleziona al massimo 3 delle opzioni elencate",
        "de": "Bitte wählen Sie max. drei der folgenden Optionen",
        "sl": "Za vsako rešitev mobilnosti izberite največ 3 možnosti.",
        "fr": "Sélectionnez au maximum 3 termes parmi ceux proposés",
        "de-at": "Bitte wählen Sie max. drei der folgenden Optionen",
        "de-ch": "Bitte wählen Sie max. drei der folgenden Optionen"
       },
       "expression": "{Q1WALK.length} <= 3"
      }
     ],
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Good Comfort",
        "it": "Comfort/comodità",
        "de": "Guter Komfort",
        "de-at": "Guter Komfort",
        "de-ch": "Guter Komfort",
        "sl": "Udobje",
        "fr": "Bon confort"
       },
       "enableIf": "{Q1WALK} anyof \"1\" or {Q1WALK.length} < 3"
      },
      {
       "value": "2",
       "text": {
        "default": "High Accessibility",
        "it": "Elevata facilità di accesso",
        "de": "Hohe Barrierefreiheit",
        "de-ch": "Hohe Barrierefreiheit",
        "de-at": "Hohe Barrierefreiheit",
        "sl": "Visoka dostopnost",
        "fr": "Grande accesibilité"
       },
       "enableIf": "{Q1WALK} anyof \"2\" or {Q1WALK.length} < 3"
      },
      {
       "value": "3",
       "text": {
        "default": "Cost efficiency",
        "it": "Buon rapporto qualità/prezzo",
        "de": "Kostengünstig",
        "de-at": "Kostengünstig",
        "de-ch": "Kostengünstig",
        "sl": "Stroškovna učinkovitost",
        "fr": "Bon rapport qualité / prix"
       },
       "enableIf": "{Q1WALK} anyof \"3\" or {Q1WALK.length} < 3"
      },
      {
       "value": "4",
       "text": {
        "default": "Time saving",
        "it": "Risparmio di tempo",
        "de-ch": "Zeitsparend",
        "de-at": "Zeitsparend",
        "de": "Zeitsparend",
        "sl": "Prihranek časa",
        "fr": "Gain de temps"
       },
       "enableIf": "{Q1WALK} anyof \"4\" or {Q1WALK.length} < 3"
      },
      {
       "value": "5",
       "text": {
        "default": "Reducing pollution",
        "it": "Riduzione dell'inquinamento",
        "de-ch": "Umweltfreundlich",
        "de-at": "Umweltfreundlich",
        "de": "Umweltfreundlich",
        "sl": "Zmanjšanje onesnaževanja",
        "fr": "Réduction de la pollution"
       },
       "enableIf": "{Q1WALK} anyof \"5\" or {Q1WALK.length} < 3"
      },
      {
       "value": "6",
       "text": {
        "default": "Improve health conditions",
        "it": "Miglioramento della propria salute",
        "de-ch": "Gesundheitsfördernd",
        "de-at": "Gesundheitsfördernd",
        "de": "Gesundheitsfördernd",
        "sl": "Boljši zdravstveni pogoji",
        "fr": "Amélioration de la santé"
       },
       "enableIf": "{Q1WALK} anyof \"6\" or {Q1WALK.length} < 3"
      },
      {
       "value": "7",
       "text": {
        "default": "High Sociability",
        "it": "Elevata socialità (relazione con altre persone)",
        "de": "Geselligkeit",
        "de-at": "Geselligkeit",
        "de-ch": "Geselligkeit",
        "sl": "Družabnost",
        "fr": "Grande sociabilité"
       },
       "enableIf": "{Q1WALK} anyof \"7\" or {Q1WALK.length} < 3"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "Q1MOTORB",
     "title": {
      "default": "Which of these aspects would you associate to the MOTORBIKE/MOPED?",
      "it": "uali aspetti associeresti alla MOTOCICLETTA/MOTORINO?",
      "de": "Welchen Aspekt verknüpfen Sie mit MOTORRADFAHREN?",
      "de-at": "Welchen Aspekt verknüpfen Sie mit MOTORRADFAHREN?",
      "de-ch": "Welchen Aspekt verknüpfen Sie mit MOTORRADFAHREN?",
      "fr": "Quels sont les qualificatifs qui correspondent le mieux aux 2 ROUES MOTORISÉS?",
      "sl": "Katere od teh vidikov bi povezali z MOTORJEM/MOPEDOM?"
     },
     "validators": [
      {
       "type": "expression",
       "text": {
        "default": "Please select at most 3 aspects",
        "it": "Per favore, seleziona al massimo 3 delle opzioni elencate",
        "de": "Bitte wählen Sie max. drei der folgenden Optionen",
        "sl": "Za vsako rešitev mobilnosti izberite največ 3 možnosti.",
        "fr": "Sélectionnez au maximum 3 termes parmi ceux proposés",
        "de-at": "Bitte wählen Sie max. drei der folgenden Optionen",
        "de-ch": "Bitte wählen Sie max. drei der folgenden Optionen"
       },
       "expression": "{Q1MOTORB.length} <= 3"
      }
     ],
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Good Comfort",
        "it": "Comfort/comodità",
        "de": "Guter Komfort",
        "de-ch": "Guter Komfort",
        "de-at": "Guter Komfort",
        "sl": "Udobje",
        "fr": "Bon confort"
       },
       "enableIf": "{Q1MOTORB} anyof \"1\" or {Q1MOTORB.length} < 3"
      },
      {
       "value": "2",
       "text": {
        "default": "High Accessibility",
        "it": "Elevata facilità di accesso",
        "de": "Hohe Barrierefreiheit",
        "de-at": "Hohe Barrierefreiheit",
        "de-ch": "Hohe Barrierefreiheit",
        "sl": "Visoka dostopnost",
        "fr": "Grande accesibilité"
       },
       "enableIf": "{Q1MOTORB} anyof \"2\" or {Q1MOTORB.length} < 3"
      },
      {
       "value": "3",
       "text": {
        "default": "Cost efficiency",
        "it": "Buon rapporto qualità/prezzo",
        "de": "Kostengünstig",
        "de-at": "Kostengünstig",
        "de-ch": "Kostengünstig",
        "sl": "Stroškovna učinkovitost",
        "fr": "Bon rapport qualité / prix"
       },
       "enableIf": "{Q1MOTORB} anyof \"3\" or {Q1MOTORB.length} < 3"
      },
      {
       "value": "4",
       "text": {
        "default": "Time saving",
        "it": "Risparmio di tempo",
        "de": "Zeitsparend",
        "de-at": "Zeitsparend",
        "de-ch": "Zeitsparend",
        "sl": "Prihranek časa",
        "fr": "Gain de temps"
       },
       "enableIf": "{Q1MOTORB} anyof \"4\" or {Q1MOTORB.length} < 3"
      },
      {
       "value": "5",
       "text": {
        "default": "Reducing pollution",
        "it": "Riduzione dell'inquinamento",
        "de": "Umweltfreundlich",
        "de-at": "Umweltfreundlich",
        "de-ch": "Umweltfreundlich",
        "sl": "Zmanjšanje onesnaževanja",
        "fr": "Réduction de la pollution"
       },
       "enableIf": "{Q1MOTORB} anyof \"5\" or {Q1MOTORB.length} < 3"
      },
      {
       "value": "6",
       "text": {
        "default": "Improve health conditions",
        "it": "Miglioramento della propria salute",
        "de": "Gesundheitsfördernd",
        "de-at": "Gesundheitsfördernd",
        "de-ch": "Gesundheitsfördernd",
        "sl": "Boljši zdravstveni pogoji",
        "fr": "Amélioration de la santé"
       },
       "enableIf": "{Q1MOTORB} anyof \"6\" or {Q1MOTORB.length} < 3"
      },
      {
       "value": "7",
       "text": {
        "default": "High Sociability",
        "it": "Elevata socialità (relazione con altre persone)",
        "de": "Geselligkeit",
        "de-at": "Geselligkeit",
        "de-ch": "Geselligkeit",
        "sl": "Družabnost",
        "fr": "Grande sociabilité"
       },
       "enableIf": "{Q1MOTORB} anyof \"7\" or {Q1MOTORB.length} < 3"
      }
     ]
    }
   ],
   "description": {
    "default": "Which of these aspects would you associate to the following different transport modes: TRAIN, CAR, PUBLIC TRANSPORT, BICYCLE, WALK, MOTORBIKE/MOPED? Please, for each mobility solution select maximum 3 options between the given ones.",
    "it": "Quale di questi aspetti associeresti ai seguenti mezzi di spostamento: TRENO, AUTO, TRASPORTO PUBBLICO, BICICLETTA, CAMMINARE, MOTOCICLETTA/MOTORINO?\nPer favore, per ogni mezzo seleziona al massimo 3 delle opzioni elencate",
    "de": "Welche Assoziationen verknüpfen Sie mit den folgenden Mobilitätsformen: Eisenbahn, Auto, ÖPNV, Fahrrad, zu Fuß, Motorrad?\n(Bitte wählen Sie für jede Mobilitätsart max. drei der folgenden Optionen)",
    "de-ch": "Welche Assoziationen verknüpfen Sie mit den folgenden Mobilitätsformen: Eisenbahn, Auto, öffentlicher Verkehr, Fahrrad, zu FuSS, Motorrad?\nBitte wählen Sie für jede Mobilitätsart max. drei der folgenden Optionen.",
    "de-at": "Welche der folgenden Aspekte würden Sie den folgenden Verkehrsmitteln zuordnen? Eisenbahn, Auto, öffentlicher Nahverkehr, Fahrrad, zu Fuß, Motorrad?\n(Bitte wählen Sie für jede Mobilitätsart max. drei der folgenden Optionen)",
    "sl": "Katere od teh vidikov bi povezali z naslednjimi vrstami prevoza: VLAK, AVTOMOBIL, JAVNI PREVOZ, KOLO, HOJA, MOTOR/MOPED?\nZa vsako rešitev mobilnosti izberite največ 3 možnosti.",
    "fr": "Quels sont les qualificatifs qui correspondent le mieux à ces différents modes de transport (train, car, transport public, vélo, marche, 2 roues motorisés)?\nPour chaque mode de transport, sélectionnez au maximum 3 termes parmi ceux proposés."
   }
  },
  {
   "name": "mobilita_quotidiana_1",
   "elements": [
    {
     "type": "checkbox",
     "name": "Q2",
     "title": "What are the means of transport you use for your daily travels? (Multiple answers are possible)",
     "choices": [
      {
       "value": "1",
       "text": "Car (both as a driver/passenger)"
      },
      {
       "value": "2",
       "text": "Motorbike"
      },
      {
       "value": "3",
       "text": "Public transport (Bus/tram/metro)"
      },
      {
       "value": "4",
       "text": "Train"
      },
      {
       "value": "5",
       "text": "Bicycle (also e-bike)"
      },
      {
       "value": "6",
       "text": "Walk"
      },
      {
       "value": "7",
       "text": "Other (scooter/skateboard/hoverboard, …)"
      }
     ]
    }
   ]
  },
  {
   "name": "mobilita_quotidiana_2",
   "elements": [
    {
     "type": "radiogroup",
     "name": "Q3",
     "title": "What is the mean of transport you use the most (longest trip in terms of distance)?",
     "choices": [
      {
       "value": "1",
       "text": "Car (both as a driver/passenger)"
      },
      {
       "value": "2",
       "text": "Motorbike"
      },
      {
       "value": "3",
       "text": "Public transport (Bus/tram/metro)"
      },
      {
       "value": "4",
       "text": "Train"
      },
      {
       "value": "5",
       "text": "Bicycle (also e-bike)"
      },
      {
       "value": "6",
       "text": "Walk"
      },
      {
       "value": "7",
       "text": "Other (scooter/skateboard/hoverboard, …)"
      }
     ]
    }
   ]
  },
  {
   "name": "mobilita_quotidiana_3",
   "elements": [
    {
     "type": "checkbox",
     "name": "Q4",
     "title": "Which of the following travel services have you ever heard of?",
     "choices": [
      {
       "value": "1",
       "text": "Car sharing"
      },
      {
       "value": "2",
       "text": "Car pooling"
      },
      {
       "value": "3",
       "text": "Bike sharing"
      },
      {
       "value": "4",
       "text": "Ride hailing"
      },
      {
       "value": "5",
       "text": "Scooter sharing"
      },
      {
       "value": "6",
       "text": "Hitchhiking benches"
      },
      {
       "value": "7",
       "text": "None of these"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "Q5",
     "title": "Which of those have you ever used?",
     "choices": [
      {
       "value": "1",
       "text": "Car sharing"
      },
      {
       "value": "2",
       "text": "Car pooling"
      },
      {
       "value": "3",
       "text": "Bike sharing"
      },
      {
       "value": "4",
       "text": "Ride hailing"
      },
      {
       "value": "5",
       "text": "Scooter sharing"
      },
      {
       "value": "6",
       "text": "Hitchhiking benches"
      },
      {
       "value": "7",
       "text": "None of these"
      }
     ]
    }
   ]
  },
  {
   "name": "mobility_capital",
   "elements": [
    {
     "type": "checkbox",
     "name": "Q6",
     "title": "Which means of transport do you own or have access to*?",
     "description": "* to have access to means that you can easily use it even if you don't own it (for example: \"my parents own a car I can use if I want/need\")",
     "validators": [
      {
       "type": "expression",
       "text": "You can't select anything if you selected \"None of these\"",
       "expression": "(!({Q6} anyof \"9\")) or {Q6.length} == 1"
      }
     ],
     "choices": [
      {
       "value": "1",
       "text": "Cars",
       "enableIf": "{Q6} anyof \"1\" or !({Q6} anyof \"9\")"
      },
      {
       "value": "2",
       "text": "Public Transport Season ticket",
       "enableIf": "{Q6} anyof \"2\" or !({Q6} anyof \"9\")"
      },
      {
       "value": "3",
       "text": "Motorbike/moped",
       "enableIf": "{Q6} anyof \"3\" or !({Q6} anyof \"9\")"
      },
      {
       "value": "4",
       "text": "Bicycle",
       "enableIf": "{Q6} anyof \"4\" or !({Q6} anyof \"9\")"
      },
      {
       "value": "5",
       "text": "Scooter/skateboard/hoverboard",
       "enableIf": "{Q6} anyof \"5\" or !({Q6} anyof \"9\")"
      },
      {
       "value": "6",
       "text": "Bike Sharing account",
       "enableIf": "{Q6} anyof \"6\" or !({Q6} anyof \"9\")"
      },
      {
       "value": "7",
       "text": "Car sharing account",
       "enableIf": "{Q6} anyof \"7\" or !({Q6} anyof \"9\")"
      },
      {
       "value": "8",
       "text": "Other",
       "enableIf": "{Q6} anyof \"8\" or !({Q6} anyof \"9\")"
      },
      {
       "value": "9",
       "text": "None of these",
       "enableIf": "{Q6} anyof \"9\" or {Q6.length} == 0"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "Q6CARS",
     "visibleIf": "{Q6} anyof \"1\"",
     "title": "How often do you have access to a car?",
     "description": "To have access to means that you can easily use it even if you don't own it.",
     "choices": [
      {
       "value": "1",
       "text": "Always"
      },
      {
       "value": "2",
       "text": "Often"
      },
      {
       "value": "3",
       "text": "Rarely"
      },
      {
       "value": "4",
       "text": "Never"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "Q6MOTOR",
     "visibleIf": "{Q6} anyof \"3\"",
     "title": "How often do you have access to a Motorbike/moped?",
     "description": "To have access to means that you can easily use it even if you don't own it.",
     "choices": [
      {
       "value": "1",
       "text": "Always"
      },
      {
       "value": "2",
       "text": "Often"
      },
      {
       "value": "3",
       "text": "Rarely"
      },
      {
       "value": "4",
       "text": "Never"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "Q6BIKES",
     "visibleIf": "{Q6} anyof \"4\"",
     "title": "How often do you have access to a bicycle/e-bike?",
     "description": "To have access to means that you can easily use it even if you don't own it.",
     "choices": [
      {
       "value": "1",
       "text": "Always"
      },
      {
       "value": "2",
       "text": "Often"
      },
      {
       "value": "3",
       "text": "Rarely"
      },
      {
       "value": "4",
       "text": "Never"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "Q6SCOOT",
     "visibleIf": "{Q6} anyof \"5\"",
     "title": "How often do you have access to a scooter/skateboard/hoverboard?",
     "description": "To have access to means that you can easily use it even if you don't own it.",
     "choices": [
      {
       "value": "1",
       "text": "Always"
      },
      {
       "value": "2",
       "text": "Often"
      },
      {
       "value": "3",
       "text": "Rarely"
      },
      {
       "value": "4",
       "text": "Never"
      }
     ]
    }
   ]
  },
  {
   "name": "q6_driving_licence",
   "elements": [
    {
     "type": "radiogroup",
     "name": "Q6DRIVEL",
     "visibleIf": "{QF1} == 'ch'",
     "title": {
      "default": "Do you have a driving licence?",
      "de-ch": "Hast Du einen Führerschein?",
      "de-at": "Hast Du einen Führerschein?",
      "de": "Hast Du einen Führerschein?"
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Yes",
        "de-ch": "Ja",
        "de": "Ja",
        "de-at": "Ja"
       }
      },
      {
       "value": "2",
       "text": {
        "default": "No",
        "de-ch": "Nein",
        "de-at": "Nein",
        "de": "Nein"
       }
      }
     ]
    }
   ]
  },
  {
   "name": "quiz1",
   "elements": [
    {
     "type": "radiogroup",
     "name": "Q7dot1IT",
     "visibleIf": "{QF1} == 'it'",
     "title": "What can be, on average, the monthly cost of owning a (petrol) car in Italy (considering fuel, depreciation, taxes, insurance and maintenance)?\n\nClose to…",
     "choices": [
      {
       "value": "1",
       "text": "150 euros"
      },
      {
       "value": "2",
       "text": "300 euros"
      },
      {
       "value": "3",
       "text": "600 euros"
      },
      {
       "value": "4",
       "text": "1200 euros"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "Q7dot1AU",
     "visibleIf": "{QF1} == 'at' or {QF1} == 'li'",
     "title": "What can be, on average, the monthly cost of owning a (petrol) car in Austria (considering fuel, depreciation, taxes, insurance and maintenance)?\n\nClose to…",
     "choices": [
      {
       "value": "1",
       "text": "100 euros"
      },
      {
       "value": "2",
       "text": "250 euros"
      },
      {
       "value": "3",
       "text": "500 euros"
      },
      {
       "value": "4",
       "text": "1000 euros"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "Q7dot1SL",
     "visibleIf": "{QF1} == 'si'",
     "title": "What can be, on average, the monthly cost of owning a (petrol) car in the EU (considering fuel, depreciation, taxes, insurance and maintenance)?\n\nClose to…",
     "choices": [
      {
       "value": "1",
       "text": "100 euros"
      },
      {
       "value": "2",
       "text": "250 euros"
      },
      {
       "value": "3",
       "text": "500 euros"
      },
      {
       "value": "4",
       "text": "1000 euros"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "Q7dot1SW",
     "visibleIf": "{QF1} == 'ch'",
     "title": "What can be, on average, the monthly cost of owning a (petrol) car in Switzerland (considering fuel, depreciation, taxes, insurance and maintenance)?\n\nClose to…",
     "choices": [
      {
       "value": "1",
       "text": "100 Fr."
      },
      {
       "value": "2",
       "text": "250 Fr."
      },
      {
       "value": "3",
       "text": "500 Fr."
      },
      {
       "value": "4",
       "text": "1000 Fr."
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "Q7dot1FR",
     "visibleIf": "{QF1} == 'fr'",
     "title": "What can be, on average, the monthly cost of owning a (petrol) car in France (considering fuel, depreciation, taxes, insurance and maintenance)?\n\nClose to…",
     "choices": [
      {
       "value": "1",
       "text": "100 euros"
      },
      {
       "value": "2",
       "text": "250 euros"
      },
      {
       "value": "3",
       "text": "500 euros"
      },
      {
       "value": "4",
       "text": "1000 euros"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "Q7dot1GE",
     "visibleIf": "{QF1} == 'de'",
     "title": "What can be, on average, the monthly cost of owning a (petrol) car in Germany (considering fuel, depreciation, taxes, insurance and maintenance)?\n\nClose to…",
     "choices": [
      {
       "value": "1",
       "text": "100 euros"
      },
      {
       "value": "2",
       "text": "250 euros"
      },
      {
       "value": "3",
       "text": "500 euros"
      },
      {
       "value": "4",
       "text": "1000 euros"
      }
     ]
    }
   ],
   "description": "Here you find some questions about aspects of daily life connected to mobility. Even if you don’t know the correct answer we kindly ask you to select the option you think is closest to the reality according to your experience or ideas."
  },
  {
   "name": "quiz2",
   "elements": [
    {
     "type": "radiogroup",
     "name": "Q7dot2",
     "title": "In your opinion which of these two phenomena cause more deaths in the European Union?",
     "choices": [
      {
       "value": "1",
       "text": "Roads incidents"
      },
      {
       "value": "2",
       "text": "Air pollution"
      }
     ]
    }
   ]
  },
  {
   "name": "quiz3",
   "elements": [
    {
     "type": "radiogroup",
     "name": "Q7dot3",
     "title": "How much physical activity WHO recommend to do every day? How many minutes of daily walking activities does it correspond to?",
     "choices": [
      {
       "value": "A1",
       "text": "5 minutes"
      },
      {
       "value": "A2",
       "text": "20 minutes"
      },
      {
       "value": "A3",
       "text": "1 hour"
      },
      {
       "value": "A4",
       "text": "1,5 hours"
      }
     ]
    }
   ]
  },
  {
   "name": "Sustainable behaviour",
   "elements": [
    {
     "type": "checkbox",
     "name": "Q8",
     "title": "Have you done any of the following actions in the past six months? (Multiple answers possible)",
     "validators": [
      {
       "type": "expression",
       "text": "You can't select anything if you selected \"None\" or \"I don't known\"",
       "expression": "((!({Q8} anyof \"10\")) and (!({Q8} anyof \"11\"))) or {Q8.length} == 1"
      }
     ],
     "choices": [
      {
       "value": "1",
       "text": "Chosen a more environmentally-friendly way of travelling (walk, bicycle, public transport, electric car)",
       "enableIf": "{Q8} anyof \"1\" or !({Q8} anyof \"10\" or {Q8} anyof \"11\")"
      },
      {
       "value": "2",
       "text": "Avoided buying over-packaged products",
       "enableIf": "{Q8} anyof \"2\" or !({Q8} anyof \"10\" or {Q8} anyof \"11\")"
      },
      {
       "value": "3",
       "text": "Bought local products",
       "enableIf": "{Q8} anyof \"3\" or !({Q8} anyof \"10\" or {Q8} anyof \"11\")"
      },
      {
       "value": "4",
       "text": "Cut down your water consumption",
       "enableIf": "{Q8} anyof \"4\" or !({Q8} anyof \"10\" or {Q8} anyof \"11\")"
      },
      {
       "value": "5",
       "text": "Separated most of your waste for recycling",
       "enableIf": "{Q8} anyof \"5\" or !({Q8} anyof \"10\" or {Q8} anyof \"11\")"
      },
      {
       "value": "6",
       "text": "Used your car less by avoiding unnecessary trips, working from home (teleworking), etc.",
       "enableIf": "{Q8} anyof \"6\" or !({Q8} anyof \"10\" or {Q8} anyof \"11\")"
      },
      {
       "value": "7",
       "text": "Bought products marked with an environmental label",
       "enableIf": "{Q8} anyof \"7\" or !({Q8} anyof \"10\" or {Q8} anyof \"11\")"
      },
      {
       "value": "8",
       "text": "Avoided single-use plastic goods other than plastic bags (e.g. plastic cutlery, cups, plates, etc.) or bought reusable plastic products",
       "enableIf": "{Q8} anyof \"8\" or !({Q8} anyof \"10\" or {Q8} anyof \"11\")"
      },
      {
       "value": "9",
       "text": "Avoided single-use plastic goods other than plastic bags (e.g. plastic cutlery, cups, plates, etc.) or bought reusable plastic products",
       "enableIf": "{Q8} anyof \"9\" or !({Q8} anyof \"10\" or {Q8} anyof \"11\")"
      },
      {
       "value": "10",
       "text": "None",
       "enableIf": "{Q8} anyof \"10\" or {Q8.length} == 0"
      },
      {
       "value": "11",
       "text": "I don’t know",
       "enableIf": "{Q8} anyof \"11\" or {Q8.length} == 0"
      }
     ]
    }
   ]
  },
  {
   "name": "Responsibility",
   "elements": [
    {
     "type": "checkbox",
     "name": "Q9",
     "title": "In your opinion who should be mainly responsible for promoting new mobility policies in order to reduce air pollution? (maximum two answers are possible)",
     "validators": [
      {
       "type": "expression",
       "text": "Please select at most 2 answers",
       "expression": "{Q9.length} <= 2"
      }
     ],
     "choices": [
      {
       "value": "1",
       "text": "City authorities",
       "enableIf": "{Q9} anyof \"1\" or {Q9.length} < 2"
      },
      {
       "value": "2",
       "text": "Citizens themselves",
       "enableIf": "{Q9} anyof \"2\" or {Q9.length} < 2"
      },
      {
       "value": "3",
       "text": "Regional authorities",
       "enableIf": "{Q9} anyof \"3\" or {Q9.length} < 2"
      },
      {
       "value": "4",
       "text": "National Government",
       "enableIf": "{Q9} anyof \"4\" or {Q9.length} < 2"
      },
      {
       "value": "5",
       "text": "EU bodies",
       "enableIf": "{Q9} anyof \"5\" or {Q9.length} < 2"
      },
      {
       "value": "6",
       "text": "Private companies",
       "enableIf": "{Q9} anyof \"6\" or {Q9.length} < 2"
      },
      {
       "value": "7",
       "text": "Trade Unions or Political Parties",
       "enableIf": "{Q9} anyof \"7\" or {Q9.length} < 2"
      },
      {
       "value": "8",
       "text": "Non-profit Associations/non-governmental organizations",
       "enableIf": "{Q9} anyof \"8\" or {Q9.length} < 2"
      },
      {
       "value": "9",
       "text": "Other",
       "enableIf": "{Q9} anyof \"9\" or {Q9.length} < 2"
      }
     ]
    }
   ]
  },
  {
   "name": "Sources of information",
   "elements": [
    {
     "type": "checkbox",
     "name": "Q10",
     "title": "From the following list, which are your three main sources of information about the environment (climate change, pollution, …)?\n\n(maximum 3 answers possible)",
     "validators": [
      {
       "type": "expression",
       "text": "You can't select anything if you selected \"I am not interested in the environment\" or \"I don't known\"",
       "expression": "((!({Q10} anyof \"8\")) and (!({Q10} anyof \"9\"))) or {Q10.length} == 1"
      },
      {
       "type": "expression",
       "text": "Maximum 3 answers possible",
       "expression": "{Q10.length} <= 3"
      }
     ],
     "choices": [
      {
       "value": "1",
       "text": "Newspapers and magazines",
       "enableIf": "{Q10} anyof \"1\" or !({Q10} anyof \"12\" or {Q10} anyof \"13\")"
      },
      {
       "value": "2",
       "text": "Television news and/or radio",
       "enableIf": "{Q10} anyof \"3\" or !({Q10} anyof \"12\" or {Q10} anyof \"13\")"
      },
      {
       "value": "3",
       "text": "Family, friends, neighbours or colleagues",
       "enableIf": "{Q10} anyof \"5\" or !({Q10} anyof \"12\" or {Q10} anyof \"13\")"
      },
      {
       "value": "4",
       "text": "Books or scientific publications and/or information materials",
       "enableIf": "{Q10} anyof \"6\" or !({Q10} anyof \"12\" or {Q10} anyof \"13\")"
      },
      {
       "value": "5",
       "text": "Online social networks (facebook, Instagram, Twitter, …)",
       "enableIf": "{Q10} anyof \"9\" or !({Q10} anyof \"12\" or {Q10} anyof \"13\")"
      },
      {
       "value": "6",
       "text": "The Internet (other websites, newsletters, blogs, forums, etc., NO social networks)",
       "enableIf": "{Q10} anyof \"10\" or !({Q10} anyof \"12\" or {Q10} anyof \"13\")"
      },
      {
       "value": "7",
       "text": "Other",
       "enableIf": "{Q10} anyof \"11\" or !({Q10} anyof \"12\" or {Q10} anyof \"13\")"
      },
      {
       "value": "8",
       "text": "I am not interested in the environment",
       "enableIf": "{Q10} anyof \"12\" or {Q10.length} == 0"
      },
      {
       "value": "9",
       "text": "I don't know",
       "enableIf": "{Q10} anyof \"13\" or {Q10.length} == 0"
      }
     ]
    }
   ]
  },
  {
   "name": "sociodemo",
   "elements": [
    {
     "type": "radiogroup",
     "name": "Q11",
     "title": "What is your age?",
     "choices": [
      {
       "value": "A1",
       "text": "16-20"
      },
      {
       "value": "A2",
       "text": "21-25"
      },
      {
       "value": "A3",
       "text": "26-35"
      },
      {
       "value": "A4",
       "text": "36-45"
      },
      {
       "value": "A5",
       "text": "46-55"
      },
      {
       "value": "A6",
       "text": "56-65"
      },
      {
       "value": "A7",
       "text": "66-75"
      },
      {
       "value": "A8",
       "text": "over 75"
      }
     ]
    },
    {
     "type": "dropdown",
     "name": "Q12",
     "title": "You are:",
     "choices": [
      {
       "value": "1",
       "text": "Male"
      },
      {
       "value": "2",
       "text": "Female"
      },
      {
       "value": "3",
       "text": "Other"
      },
      {
       "value": "4",
       "text": "No answer"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "Q13",
     "title": "What is your highest level of education?",
     "choices": [
      {
       "value": "1",
       "text": "PhD (ISCED 8)"
      },
      {
       "value": "2",
       "text": "University degree (ISCED 5-7)"
      },
      {
       "value": "3",
       "text": "Upper-secondary school diploma (ISCED 3-4)"
      },
      {
       "value": "4",
       "text": "Lower-secondary and primary school (ISCED 2-1)"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "Q15",
     "title": "Number of members in your houselhold (with you)",
     "choices": [
      {
       "value": "0",
       "text": "One"
      },
      {
       "value": "1",
       "text": "Two"
      },
      {
       "value": "2",
       "text": "3 or more"
      }
     ]
    }
   ],
   "description": "In this last section we will ask you some socio-demograpich information in order to better contextualise your answers.\n\nWe remind you that all the answers will be kept anonymous and no one will be able to connect any information to your identity now and in the future."
  },
  {
   "name": "job",
   "elements": [
    {
     "type": "radiogroup",
     "name": "Q14",
     "title": "What is your occupational status?",
     "choices": [
      {
       "value": "1",
       "text": "Employed"
      },
      {
       "value": "2",
       "text": "Unemployed"
      },
      {
       "value": "3",
       "text": "Retired"
      },
      {
       "value": "4",
       "text": "Student"
      },
      {
       "value": "5",
       "text": "Pupil"
      },
      {
       "value": "6",
       "text": "Other"
      }
     ]
    }
   ]
  },
  {
   "name": "job2",
   "elements": [
    {
     "type": "radiogroup",
     "name": "Q14bis",
     "visibleIf": "{Q14} == \"1\"",
     "title": "You work as:",
     "choices": [
      {
       "value": "1",
       "text": "Self Employed"
      },
      {
       "value": "2",
       "text": "Employee"
      },
      {
       "value": "3",
       "text": "Other"
      }
     ]
    }
   ]
  },
  {
   "name": "mail",
   "elements": [
    {
     "type": "text",
     "name": "MA",
     "title": "If you like to receive any information and updates about Melinda project's events and progresses you can leave us your e-mail address in order to be informed in the future.   (The collected email addresses will be stored on secure servers located in the EU and processed in accordance to GDPR, not traded to anybody else, kept for the time of project activity, and always separately from the other survey data)",
     "validators": [
      {
       "type": "email"
      }
     ],
     "inputType": "email"
    }
   ]
  }
 ],
 "checkErrorsMode": "onValueChanged"
};
