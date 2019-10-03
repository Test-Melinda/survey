// Survey definition
export const surveyModel = {
        "pages": [
                  {
                   "name": "filtering",
                   "elements": [
                    {
                     "type": "radiogroup",
                     "name": "QF1",
                     "title": "Please select your Country of residence",
                     "isRequired": true,
                     "choices": [
                      {
                       "value": "at",
                       "text": "Austria"
                      },
                      {
                       "value": "fr",
                       "text": "France"
                      },
                      {
                       "value": "de",
                       "text": "Germany"
                      },
                      {
                       "value": "it",
                       "text": "Italy"
                      },
                      {
                       "value": "fl",
                       "text": "Liechtenstein"
                      },
                      {
                       "value": "slo",
                       "text": "Slovenia"
                      },
                      {
                       "value": "ch",
                       "text": "Switzerland"
                      }
                     ]
                    },
                    {
                     "type": "dropdown",
                     "name": "QF2FD",
                     "visible": false,
                     "visibleIf": "{QF1} = \"fr\"",
                     "title": "Could you please precise in which Department do you live?",
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
                     "title": "Could you please precise in which Region do you live?",
                     "isRequired": true,
                     "choices": [
                      {
                       "value": "A1",
                       "text": "Vorarlberg"
                      },
                      {
                       "value": "A2",
                       "text": "Tyrol"
                      },
                      {
                       "value": "A3",
                       "text": "Salzburg"
                      },
                      {
                       "value": "A4",
                       "text": "Carinthia"
                      },
                      {
                       "value": "A5",
                       "text": "Styria"
                      },
                      {
                       "value": "A6",
                       "text": "Upper Austria"
                      },
                      {
                       "value": "A7",
                       "text": "Lower Austria"
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
                     "title": "In which municipality? (if \"other\" please specify your Postal Code)",
                     "isRequired": true,
                     "hasOther": true,
                     "choices": [
                      {
                       "value": "A1",
                       "text": "Zirl"
                      }
                     ],
                     "otherText": "Other (postal code)"
                    },
                    {
                     "type": "dropdown",
                     "name": "QF2FD10",
                     "visible": false,
                     "visibleIf": "{QF2FD} = \"A11\"",
                     "title": "In which municipality?",
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
                     "title": "In which municipality?",
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
                     "title": "Could you please precise in which Bundesland do you live?",
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
                     "title": "Could you precise in which Landkreis?",
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
                     "title": "In Landkreis Ebersberg, in which municipality do you live?",
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
                     "title": "Could you please precise in which Canton do you live?",
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
                     "title": "In which province do you live?",
                     "choices": [
                      {
                       "value": "1",
                       "text": "Provincia di Pordenone"
                      },
                      {
                       "value": "2",
                       "text": "Other"
                      }
                     ]
                    },
                    {
                     "type": "dropdown",
                     "name": "QF2ITUTI",
                     "visible": false,
                     "visibleIf": "{QF2IT} = \"1\"",
                     "title": "In which municipality? If \"Other\" please specify your postal code",
                     "isRequired": true,
                     "hasOther": true,
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
                     "otherText": "Other (CAP)"
                    },
                    {
                     "type": "dropdown",
                     "name": "QF2SL",
                     "visible": false,
                     "visibleIf": "{QF1} = \"slo\"",
                     "title": "Could you precise in which region do you live?",
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
                     "title": "Could you precise in which municipality do you live?",
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
                     "title": "Could you please specify your postal code?"
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
                     "visibleIf": "{QF1} == \"at\" or {QF1} == \"fl\" or ({QF1} == \"de\" and {QF2GB} == \"A2\") or ({QF1} == \"ch\" and ({QFSW1} == \"A10\" or {QFSW1} == \"A19\"))",
                     "title": "in the Vorarlberg Region do you usually carry out any of the following activities? (Multiple answers are possible)",
                     "choices": [
                      {
                       "value": "1",
                       "text": "Work/Business"
                      },
                      {
                       "value": "2",
                       "text": "Study"
                      },
                      {
                       "value": "3",
                       "text": "Shopping"
                      },
                      {
                       "value": "4",
                       "text": "Leisure activities (free time)"
                      },
                      {
                       "value": "5",
                       "text": "Other"
                      }
                     ]
                    },
                    {
                     "type": "checkbox",
                     "name": "EQ1GE",
                     "visible": false,
                     "visibleIf": "{QF1} == \"de\"",
                     "title": "In the Landkreis Ebersberg do you usually carry out any of the following activities? (Multiple answers are possible)",
                     "choices": [
                      {
                       "value": "1",
                       "text": "Work/Business"
                      },
                      {
                       "value": "2",
                       "text": "Study"
                      },
                      {
                       "value": "3",
                       "text": "Shopping"
                      },
                      {
                       "value": "4",
                       "text": "Leisure activities (free time)"
                      },
                      {
                       "value": "5",
                       "text": "Other"
                      }
                     ]
                    },
                    {
                     "type": "checkbox",
                     "name": "EQ1FR",
                     "visible": false,
                     "visibleIf": "{QF2FD}} == \"A11\" or {QF2FD}} == \"A13\"",
                     "title": "In the Greater Lyon or Greater Annecy do you usually carry out any of the following activities? (Multiple answers are possible)",
                     "choices": [
                      {
                       "value": "1",
                       "text": "Work/Business"
                      },
                      {
                       "value": "2",
                       "text": "Study"
                      },
                      {
                       "value": "3",
                       "text": "Shopping"
                      },
                      {
                       "value": "4",
                       "text": "Leisure activities (free time)"
                      },
                      {
                       "value": "5",
                       "text": "Other"
                      }
                     ]
                    },
                    {
                     "type": "checkbox",
                     "name": "EQ1IT",
                     "visible": false,
                     "visibleIf": "{QF1} == 'it' and {QF2ITUTI} notempty and [\"16\", \"21\", \"30\", \"31\", \"34\", \"48\"] contains {QF2ITUTI}",
                     "title": "In one or more of these municipalities: Porcia, Fontanafredda, Roveredo in Piano, Zoppola, Cordenons do you usually carry out any of the following activities? (multiple answers are possible)",
                     "choices": [
                      {
                       "value": "1",
                       "text": "Work/Business"
                      },
                      {
                       "value": "2",
                       "text": "Study"
                      },
                      {
                       "value": "3",
                       "text": "Shopping"
                      },
                      {
                       "value": "4",
                       "text": "Leisure activities (free time)"
                      },
                      {
                       "value": "5",
                       "text": "Other"
                      }
                     ]
                    },
                    {
                     "type": "checkbox",
                     "name": "EQ1SL",
                     "visible": false,
                     "visibleIf": "{QF1} == 'slo'",
                     "title": "In the city of Maribor do you usually carry out any of the following activities? (Multiple answers are possible)",
                     "choices": [
                      {
                       "value": "1",
                       "text": "Work/Business"
                      },
                      {
                       "value": "2",
                       "text": "Study"
                      },
                      {
                       "value": "3",
                       "text": "Shopping"
                      },
                      {
                       "value": "4",
                       "text": "Leisure activities (free time)"
                      },
                      {
                       "value": "5",
                       "text": "Other"
                      }
                     ]
                    },
                    {
                     "type": "checkbox",
                     "name": "EQ1SW1",
                     "visible": false,
                     "visibleIf": "{QFSW1} == 'A6'",
                     "title": "In the Canton of Berne do you usually carry out any of the following activities? (Multiple answers are possible)",
                     "choices": [
                      {
                       "value": "1",
                       "text": "Work/Business"
                      },
                      {
                       "value": "2",
                       "text": "Study"
                      },
                      {
                       "value": "3",
                       "text": "Shopping"
                      },
                      {
                       "value": "4",
                       "text": "Leisure activities (free time)"
                      },
                      {
                       "value": "5",
                       "text": "Other"
                      }
                     ]
                    },
                    {
                     "type": "checkbox",
                     "name": "EQ1SW2",
                     "visible": false,
                     "visibleIf": "{QF1} == \"ch\" and ({QFSW1} == \"A10\" or {QFSW1} == \"A12\" or {QFSW1} == \"A19\")",
                     "title": "In at least one of these Cantons: St.Gallen, Graubünden, Lucerne, do you usually carry out any of the following activities? (Multiple answers are possible)",
                     "choices": [
                      {
                       "value": "1",
                       "text": "Work/Business"
                      },
                      {
                       "value": "2",
                       "text": "Study"
                      },
                      {
                       "value": "3",
                       "text": "Shopping"
                      },
                      {
                       "value": "4",
                       "text": "Leisure activities (free time)"
                      },
                      {
                       "value": "5",
                       "text": "Other"
                      }
                     ]
                    }
                   ],
                   "title": "Activities in the pilot area"
                  },
                  {
                   "name": "question1",
                   "elements": [
                    {
                     "type": "checkbox",
                     "name": "Q1TRAIN",
                     "title": "Which of these aspects would you associate to the TRAIN?",
                     "validators": [
                      {
                       "type": "expression",
                       "text": "Please select at most 3 aspects",
                       "expression": "{Q1TRAIN.length} <= 3"
                      }
                     ],
                     "choices": [
                      {
                       "value": "1",
                       "text": "Good Comfort",
                       "enableIf": "{Q1TRAIN} anyof \"1\" or {Q1TRAIN.length} < 3"
                      },
                      {
                       "value": "2",
                       "text": "High Accessibility",
                       "enableIf": "{Q1TRAIN} anyof \"2\" or {Q1TRAIN.length} < 3"
                      },
                      {
                       "value": "3",
                       "text": "Cost efficiency",
                       "enableIf": "{Q1TRAIN} anyof \"3\" or {Q1TRAIN.length} < 3"
                      },
                      {
                       "value": "4",
                       "text": "Time saving",
                       "enableIf": "{Q1TRAIN} anyof \"4\" or {Q1TRAIN.length} < 3"
                      },
                      {
                       "value": "5",
                       "text": "Reducing pollution",
                       "enableIf": "{Q1TRAIN} anyof \"5\" or {Q1TRAIN.length} < 3"
                      },
                      {
                       "value": "6",
                       "text": "Improve health conditions",
                       "enableIf": "{Q1TRAIN} anyof \"6\" or {Q1TRAIN.length} < 3"
                      },
                      {
                       "value": "7",
                       "text": "High Sociability",
                       "enableIf": "{Q1TRAIN} anyof \"7\" or {Q1TRAIN.length} < 3"
                      }
                     ]
                    },
                    {
                     "type": "checkbox",
                     "name": "Q1CAR",
                     "title": "Which of these aspects would you associate to the CAR?",
                     "validators": [
                      {
                       "type": "expression",
                       "text": "Please select at most 3 aspects",
                       "expression": "{Q1CAR.length} <= 3"
                      }
                     ],
                     "choices": [
                      {
                       "value": "1",
                       "text": "Good Comfort",
                       "enableIf": "{Q1CAR} anyof \"1\" or {Q1CAR.length} < 3"
                      },
                      {
                       "value": "2",
                       "text": "High Accessibility",
                       "enableIf": "{Q1CAR} anyof \"2\" or {Q1CAR.length} < 3"
                      },
                      {
                       "value": "3",
                       "text": "Cost efficiency",
                       "enableIf": "{Q1CAR} anyof \"3\" or {Q1CAR.length} < 3"
                      },
                      {
                       "value": "4",
                       "text": "Time saving",
                       "enableIf": "{Q1CAR} anyof \"4\" or {Q1CAR.length} < 3"
                      },
                      {
                       "value": "5",
                       "text": "Reducing pollution",
                       "enableIf": "{Q1CAR} anyof \"5\" or {Q1CAR.length} < 3"
                      },
                      {
                       "value": "6",
                       "text": "Improve health conditions",
                       "enableIf": "{Q1CAR} anyof \"6\" or {Q1CAR.length} < 3"
                      },
                      {
                       "value": "7",
                       "text": "High Sociability",
                       "enableIf": "{Q1CAR} anyof \"7\" or {Q1CAR.length} < 3"
                      }
                     ]
                    },
                    {
                     "type": "checkbox",
                     "name": "Q1PT",
                     "title": "Which of these aspects would you associate to the PUBLIC TRANSPORT (Bus, Tram, Metro)?",
                     "validators": [
                      {
                       "type": "expression",
                       "text": "Please select at most 3 aspects",
                       "expression": "{Q1PT.length} <= 3"
                      }
                     ],
                     "choices": [
                      {
                       "value": "1",
                       "text": "Good Comfort",
                       "enableIf": "{Q1PT} anyof \"1\" or {Q1PT.length} < 3"
                      },
                      {
                       "value": "2",
                       "text": "High Accessibility",
                       "enableIf": "{Q1PT} anyof \"2\" or {Q1PT.length} < 3"
                      },
                      {
                       "value": "3",
                       "text": "Cost efficiency",
                       "enableIf": "{Q1PT} anyof \"3\" or {Q1PT.length} < 3"
                      },
                      {
                       "value": "4",
                       "text": "Time saving",
                       "enableIf": "{Q1PT} anyof \"4\" or {Q1PT.length} < 3"
                      },
                      {
                       "value": "5",
                       "text": "Reducing pollution",
                       "enableIf": "{Q1PT} anyof \"5\" or {Q1PT.length} < 3"
                      },
                      {
                       "value": "6",
                       "text": "Improve health conditions",
                       "enableIf": "{Q1PT} anyof \"6\" or {Q1PT.length} < 3"
                      },
                      {
                       "value": "7",
                       "text": "High Sociability",
                       "enableIf": "{Q1PT} anyof \"7\" or {Q1PT.length} < 3"
                      }
                     ]
                    },
                    {
                     "type": "checkbox",
                     "name": "Q1BIKE",
                     "title": "Which of these aspects would you associate to the BIKE?",
                     "validators": [
                      {
                       "type": "expression",
                       "text": "Please select at most 3 aspects",
                       "expression": "{Q1BIKE.length} <= 3"
                      }
                     ],
                     "choices": [
                      {
                       "value": "1",
                       "text": "Good Comfort",
                       "enableIf": "{Q1BIKE} anyof \"1\" or {Q1BIKE.length} < 3"
                      },
                      {
                       "value": "2",
                       "text": "High Accessibility",
                       "enableIf": "{Q1BIKE} anyof \"2\" or {Q1BIKE.length} < 3"
                      },
                      {
                       "value": "3",
                       "text": "Cost efficiency",
                       "enableIf": "{Q1BIKE} anyof \"3\" or {Q1BIKE.length} < 3"
                      },
                      {
                       "value": "4",
                       "text": "Time saving",
                       "enableIf": "{Q1BIKE} anyof \"4\" or {Q1BIKE.length} < 3"
                      },
                      {
                       "value": "5",
                       "text": "Reducing pollution",
                       "enableIf": "{Q1BIKE} anyof \"5\" or {Q1BIKE.length} < 3"
                      },
                      {
                       "value": "6",
                       "text": "Improve health conditions",
                       "enableIf": "{Q1BIKE} anyof \"6\" or {Q1BIKE.length} < 3"
                      },
                      {
                       "value": "7",
                       "text": "High Sociability",
                       "enableIf": "{Q1BIKE} anyof \"7\" or {Q1BIKE.length} < 3"
                      }
                     ]
                    },
                    {
                     "type": "checkbox",
                     "name": "Q1WALK",
                     "title": "Which of these aspects would you associate to the WALK?",
                     "validators": [
                      {
                       "type": "expression",
                       "text": "Please select at most 3 aspects",
                       "expression": "{Q1WALK.length} <= 3"
                      }
                     ],
                     "choices": [
                      {
                       "value": "1",
                       "text": "Good Comfort",
                       "enableIf": "{Q1WALK} anyof \"1\" or {Q1WALK.length} < 3"
                      },
                      {
                       "value": "2",
                       "text": "High Accessibility",
                       "enableIf": "{Q1WALK} anyof \"2\" or {Q1WALK.length} < 3"
                      },
                      {
                       "value": "3",
                       "text": "Cost efficiency",
                       "enableIf": "{Q1WALK} anyof \"3\" or {Q1WALK.length} < 3"
                      },
                      {
                       "value": "4",
                       "text": "Time saving",
                       "enableIf": "{Q1WALK} anyof \"4\" or {Q1WALK.length} < 3"
                      },
                      {
                       "value": "5",
                       "text": "Reducing pollution",
                       "enableIf": "{Q1WALK} anyof \"5\" or {Q1WALK.length} < 3"
                      },
                      {
                       "value": "6",
                       "text": "Improve health conditions",
                       "enableIf": "{Q1WALK} anyof \"6\" or {Q1WALK.length} < 3"
                      },
                      {
                       "value": "7",
                       "text": "High Sociability",
                       "enableIf": "{Q1WALK} anyof \"7\" or {Q1WALK.length} < 3"
                      }
                     ]
                    },
                    {
                     "type": "checkbox",
                     "name": "Q1MOTORB",
                     "title": "Which of these aspects would you associate to the MOTORBIKE/MOPED?",
                     "validators": [
                      {
                       "type": "expression",
                       "text": "Please select at most 3 aspects",
                       "expression": "{Q1MOTORB.length} <= 3"
                      }
                     ],
                     "choices": [
                      {
                       "value": "1",
                       "text": "Good Comfort",
                       "enableIf": "{Q1MOTORB} anyof \"1\" or {Q1MOTORB.length} < 3"
                      },
                      {
                       "value": "2",
                       "text": "High Accessibility",
                       "enableIf": "{Q1MOTORB} anyof \"2\" or {Q1MOTORB.length} < 3"
                      },
                      {
                       "value": "3",
                       "text": "Cost efficiency",
                       "enableIf": "{Q1MOTORB} anyof \"3\" or {Q1MOTORB.length} < 3"
                      },
                      {
                       "value": "4",
                       "text": "Time saving",
                       "enableIf": "{Q1MOTORB} anyof \"4\" or {Q1MOTORB.length} < 3"
                      },
                      {
                       "value": "5",
                       "text": "Reducing pollution",
                       "enableIf": "{Q1MOTORB} anyof \"5\" or {Q1MOTORB.length} < 3"
                      },
                      {
                       "value": "6",
                       "text": "Improve health conditions",
                       "enableIf": "{Q1MOTORB} anyof \"6\" or {Q1MOTORB.length} < 3"
                      },
                      {
                       "value": "7",
                       "text": "High Sociability",
                       "enableIf": "{Q1MOTORB} anyof \"7\" or {Q1MOTORB.length} < 3"
                      }
                     ]
                    }
                   ],
                   "description": "Which of these aspects would you associate to the following different transport modes: TRAIN, CAR, PUBLIC TRANSPORT, BICYCLE, WALK, MOTORBIKE/MOPED? Please, for each mobility solution select maximum 3 options between the given ones."
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
                       "text": "Bicycle"
                      },
                      {
                       "value": "6",
                       "text": "Walk"
                      },
                      {
                       "value": "7",
                       "text": "Other"
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
                       "text": "Bicycle"
                      },
                      {
                       "value": "6",
                       "text": "Walk"
                      },
                      {
                       "value": "7",
                       "text": "Other"
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
                     "title": "Which of the following Mobility Solutions have you ever heard of?",
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
                   "name": "quiz1",
                   "elements": [
                    {
                     "type": "radiogroup",
                     "name": "Q6dot1IT",
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
                     "name": "Q6dot1AU",
                     "visibleIf": "{QF1} == 'at' or {QF1} == 'fl'",
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
                     "name": "Q6dot1SL",
                     "visibleIf": "{QF1} == 'slo'",
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
                     "name": "Q6dot1SW",
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
                     "name": "Q6dot1FR",
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
                     "name": "Q6dot1GE",
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
                     "name": "Q6dot2",
                     "title": "In EU how much frequent are deaths due to air pollution versus road incidents?\n\nCompared to deaths due to road incidents, Air pollution-linked deaths, are:",
                     "choices": [
                      {
                       "value": "1",
                       "text": "At least 10 times more numerous"
                      },
                      {
                       "value": "2",
                       "text": "At least 5 times more numerous"
                      },
                      {
                       "value": "3",
                       "text": "At least 5 times less numerous"
                      },
                      {
                       "value": "4",
                       "text": "At least 10 times less numerous"
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
                     "name": "Q6dot3",
                     "title": "How much physical activity must be done every day in order to match WHO recommendations? How many minutes of daily walking activities does it correspond to?",
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
                     "name": "Q7",
                     "title": "Have you done any of the following actions in the past six months? (Multiple answers possible)",
                     "validators": [
                      {
                       "type": "expression",
                       "text": "You can't select anything if you selected \"None\" or \"I don't known\"",
                       "expression": "((!({Q7} anyof \"10\")) and (!({Q7} anyof \"11\"))) or {Q7.length} == 1"
                      }
                     ],
                     "choices": [
                      {
                       "value": "1",
                       "text": "Chosen a more environmentally-friendly way of travelling (walk, bicycle, public transport, electric car)"
                      },
                      {
                       "value": "2",
                       "text": "Avoided buying over-packaged products"
                      },
                      {
                       "value": "3",
                       "text": "Bought local products"
                      },
                      {
                       "value": "4",
                       "text": "Cut down your water consumption"
                      },
                      {
                       "value": "5",
                       "text": "Separated most of your waste for recycling"
                      },
                      {
                       "value": "6",
                       "text": "Used your car less by avoiding unnecessary trips, working from home (teleworking), etc."
                      },
                      {
                       "value": "7",
                       "text": "Bought products marked with an environmental label"
                      },
                      {
                       "value": "8",
                       "text": "Avoided single-use plastic goods other than plastic bags (e.g. plastic cutlery, cups, plates, etc.) or bought reusable plastic products"
                      },
                      {
                       "value": "9",
                       "text": "Avoided single-use plastic goods other than plastic bags (e.g. plastic cutlery, cups, plates, etc.) or bought reusable plastic products"
                      },
                      {
                       "value": "10",
                       "text": "None"
                      },
                      {
                       "value": "11",
                       "text": "I don’t know"
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
                     "name": "Q8",
                     "title": "In your opinion who should be mainly responsible for promoting new mobility policies in order to reduce air pollution? (maximum two answers are possible)",
                     "validators": [
                      {
                       "type": "expression",
                       "text": "Please select at most 2 answers",
                       "expression": "{Q8.length} <= 2"
                      }
                     ],
                     "choices": [
                      {
                       "value": "1",
                       "text": "City authorities",
                       "enableIf": "{Q8} anyof \"1\" or {Q8.length} < 2"
                      },
                      {
                       "value": "2",
                       "text": "Citizens themselves",
                       "enableIf": "{Q8} anyof \"2\" or {Q8.length} < 2"
                      },
                      {
                       "value": "3",
                       "text": "Regional authorities",
                       "enableIf": "{Q8} anyof \"3\" or {Q8.length} < 2"
                      },
                      {
                       "value": "4",
                       "text": "National Government",
                       "enableIf": "{Q8} anyof \"4\" or {Q8.length} < 2"
                      },
                      {
                       "value": "5",
                       "text": "Private companies",
                       "enableIf": "{Q8} anyof \"5\" or {Q8.length} < 2"
                      },
                      {
                       "value": "6",
                       "text": "Trade Unions or Political Parties",
                       "enableIf": "{Q8} anyof \"6\" or {Q8.length} < 2"
                      },
                      {
                       "value": "7",
                       "text": "Non-profit Associations/non-governmental organizations",
                       "enableIf": "{Q8} anyof \"7\" or {Q8.length} < 2"
                      },
                      {
                       "value": "8",
                       "text": "Other",
                       "enableIf": "{Q8} anyof \"8\" or {Q8.length} < 2"
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
                     "name": "Q9",
                     "title": "From the following list, which are your three main sources of information about the environment (climate change, pollution, …)?\n\n(maximum 3 answers possible)",
                     "validators": [
                      {
                       "type": "expression",
                       "text": "You can't select anything if you selected \"I am not interested in the environment\" or \"I don't known\"",
                       "expression": "((!({Q9} anyof \"12\")) and (!({Q9} anyof \"13\"))) or {Q9.length} == 1"
                      },
                      {
                       "type": "expression",
                       "text": "Maximum 3 answers possible",
                       "expression": "{Q9.length} <= 3"
                      }
                     ],
                     "choices": [
                      {
                       "value": "1",
                       "text": "National newspapers and magazines"
                      },
                      {
                       "value": "2",
                       "text": "Regional or local newspapers"
                      },
                      {
                       "value": "3",
                       "text": "Television news and/or radio"
                      },
                      {
                       "value": "4",
                       "text": "Films and documentaries on television"
                      },
                      {
                       "value": "5",
                       "text": "Family, friends, neighbours or colleagues"
                      },
                      {
                       "value": "6",
                       "text": "Books or scientific publications and/or information materials"
                      },
                      {
                       "value": "7",
                       "text": "Events (conferences, fairs, exhibitions, festivals, etc.)"
                      },
                      {
                       "value": "8",
                       "text": "Museums, national or regional parks"
                      },
                      {
                       "value": "9",
                       "text": "Online social networks (facebook, Instagram, Twitter, …)"
                      },
                      {
                       "value": "10",
                       "text": "The Internet (other websites, newsletters, blogs, forums, etc., NO social networks)"
                      },
                      {
                       "value": "11",
                       "text": "Other"
                      },
                      {
                       "value": "12",
                       "text": "I am not interested in the environment"
                      },
                      {
                       "value": "13",
                       "text": "I don't know"
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
                     "name": "Q10",
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
                     "name": "Q11",
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
                       "text": "I don't want to answer"
                      }
                     ]
                    },
                    {
                     "type": "radiogroup",
                     "name": "Q12",
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
                       "value": "1",
                       "text": "Up to 2"
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
                     "name": "Q13",
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
                     "name": "Q13bis",
                     "visibleIf": "{Q13} == \"1\"",
                     "title": "You work as:",
                     "choices": [
                      {
                       "value": "1",
                       "text": "Entrepreneur"
                      },
                      {
                       "value": "2",
                       "text": "Professional (lawyer, doctor, …)"
                      },
                      {
                       "value": "3",
                       "text": "Manager"
                      },
                      {
                       "value": "4",
                       "text": "Self Employed"
                      },
                      {
                       "value": "5",
                       "text": "Employee"
                      },
                      {
                       "value": "6",
                       "text": "Worker"
                      },
                      {
                       "value": "7",
                       "text": "Other"
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
                     "name": "Q14",
                     "title": "Which means of transport do you own or have access to*?",
                     "description": "* to have access to means that you can easily use it even if you don't own it (for example: \"my parents own a car I can use if I want/need\")",
                     "validators": [
                      {
                       "type": "expression",
                       "text": "You can't select anything if you selected \"None of these\"",
                       "expression": "(!({Q14} anyof \"9\")) or {Q14.length} == 1"
                      }
                     ],
                     "choices": [
                      {
                       "value": "1",
                       "text": "Cars"
                      },
                      {
                       "value": "2",
                       "text": "Public Transport Season ticket"
                      },
                      {
                       "value": "3",
                       "text": "Motorbike/moped"
                      },
                      {
                       "value": "4",
                       "text": "Bicycle"
                      },
                      {
                       "value": "5",
                       "text": "Scooter/skateboard/hoverboard"
                      },
                      {
                       "value": "6",
                       "text": "Bike Sharing account"
                      },
                      {
                       "value": "7",
                       "text": "Car sharing account"
                      },
                      {
                       "value": "8",
                       "text": "Other"
                      },
                      {
                       "value": "9",
                       "text": "None of these"
                      }
                     ]
                    },
                    {
                     "type": "text",
                     "name": "Q14CARS",
                     "visibleIf": "{Q14} anyof \"1\"",
                     "title": "How many cars you have access to?",
                     "description": "To have access to means that you can easily use it even if you don't own it.",
                     "inputType": "number"
                    },
                    {
                     "type": "text",
                     "name": "Q14MOTOR",
                     "visibleIf": "{Q14} anyof \"3\"",
                     "title": "How many motorbikes/mopeds you have access to?",
                     "description": "To have access to means that you can easily use it even if you don't own it.",
                     "inputType": "number"
                    },
                    {
                     "type": "text",
                     "name": "Q14BIKES",
                     "visibleIf": "{Q14} anyof \"4\"",
                     "title": "How many bicycles you have access to?",
                     "description": "To have access to means that you can easily use it even if you don't own it.",
                     "inputType": "number"
                    },
                    {
                     "type": "text",
                     "name": "Q14SCOOT",
                     "visibleIf": "{Q14} anyof \"5\"",
                     "title": "How many scooter/skateboard/hoverboard you have access to?",
                     "description": "To have access to means that you can easily use it even if you don't own it.",
                     "inputType": "number"
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
