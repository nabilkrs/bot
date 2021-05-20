import {
    optionCards,
    selectField,
    tagsField,
    textField,
    disabledFieldText,
    endOfConversation,
  } from '../StateFormatter';
  import * as RTypes from '../responseTypes';
  
  const common_greetings = /(^hello|^hllo|^hi|^hey|^hola|^sup)\b\s?.*$/i;
  const common_greetings_negative = /(?!(^hello|^hi|^hey|^hllo|^sup|^hola)\b)\w+/i;
  
  const questions = {
     //  Examen du rachis lombaire

  lombaire: {

    botPrompt: '<div style="height:auto;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">effacement lordose</div>',
    input: selectField(['quitter l\'examen','Paplation']),
    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        answer: 'Paplation',
        nextId: 'paplation',
      },


    ],





  },
  paplation: {
    botPrompt: '<div style="height:auto;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">épineuses lombaires douloureuses et Contracture des muscles para vertébraux</div>',


    input: selectField(['quitter l\'examen','signe de la sonnette']),

    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        answer: 'signe de la sonnette',
        nextId: 'tofigure1',
      },
    ]



  },
  sonnette: {

    botPrompt: '<div style="height:auto;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">sonnette</div>',

    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        nextId: 'tofigure1',
      },
    ]



  },


  tofigure1: {
    botPrompt: 'https://firebasestorage.googleapis.com/v0/b/rheumatology-92f91.appspot.com/o/figure%201.png?alt=media&token=0f720ab9-220a-4699-b283-d2b13c9a9f15',
    type: RTypes.MEDIA,
    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        nextId: 'negative',
      },
    ],


  },
  negative: {

    botPrompt: '<div style="height:auto;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">négative</div>',

    input: selectField(['quitter l\'examen','Indice de Shober']),
    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        answer: 'Indice de Shober',
        nextId: 'tofigure2',
      },


    ],



  },

  Shober: {

    botPrompt: '<div style="height:auto;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">2 cm</div>',

    input: selectField(['quitter l\'examen','Distance doigts sol']),
    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        answer: 'Distance doigts sol',
        nextId: 'tofigure3',
      },


    ],



  },





  tofigure2: {
    botPrompt: 'https://firebasestorage.googleapis.com/v0/b/rheumatology-92f91.appspot.com/o/figure%202.png?alt=media&token=9e823faa-5e3a-4415-af0e-91088fb5aa5c',
    type: RTypes.MEDIA,
    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        nextId: 'Shober',
      },
    ],


  },
  sol: {

    botPrompt: '<div style="height:auto;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">+10 cm</div>',

    input: selectField(['quitter l\'examen','signe de lasegue']),
    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        answer: 'signe de lasegue',
        nextId: 'tofigure4',
      },


    ],




  },
  tofigure3: {
    botPrompt: 'https://firebasestorage.googleapis.com/v0/b/rheumatology-92f91.appspot.com/o/figure%203.png?alt=media&token=e58e5b4d-f79c-41c3-9d60-38999fc69db6',
    type: RTypes.MEDIA,
    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        nextId: 'sol',
      },
    ],


  },
  lasegue: {

    botPrompt: '<div style="height:auto;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">100°</div>',


    answers:[{
      nextId:'conclusionexamen1'

    }]


  },
  conclusionexamen1:{
    botPrompt: '<div style="height: auto;;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">conclure : examen du rachis lombaire : syndrome rachidien avec raideur segmentaire et sans signe de confit disco-radiculaire</div>',
      answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        nextId: 'listInPart2',
      },


    ],


  },





  tofigure4: {
    botPrompt: 'https://firebasestorage.googleapis.com/v0/b/rheumatology-92f91.appspot.com/o/figure%204.png?alt=media&token=da445573-3051-4722-b695-a102cf62380f',
    type: RTypes.MEDIA,
    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        nextId: 'lasegue',
      },
    ],




  },
  // Fin de Examen du rachis lombaire

  // Examen du rachis entier :
  entier: {
        botPrompt: '<div style="height: auto;border-radius: 10px;color:white;font-weight: bold" hidden></div>',



    input: selectField(['quitter l\'examen','déformation dans le plan sagital']),
    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        answer: 'déformation dans le plan sagital',
        nextId: 'sagital',
      },


    ],





  },
  sagital: {
    botPrompt: '<div style="height:auto;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">non</div>',

    input: selectField(['quitter l\'examen','déformation dans le plan frontal']),
    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        answer: 'déformation dans le plan frontal',
        nextId: 'tofigure5',
      },


    ],




  },
  tofigure5: {
    botPrompt: 'https://firebasestorage.googleapis.com/v0/b/rheumatology-92f91.appspot.com/o/figure%205.png?alt=media&token=104f2894-4d12-4325-a9ba-a7d7f97c7cfd',
    type: RTypes.MEDIA,
    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        nextId: 'frontal',
      },
    ],

  },
  frontal: {
    botPrompt: '<div style="height:auto;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">non</div>',

    input: selectField(['quitter l\'examen','palpation']),
    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        answer: 'palpation',
        nextId: 'palpation',
      },
    ],

  },
  palpation: {

    botPrompt: '<div style="height:auto;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">indolore</div>',

    input: selectField(['quitter l\'examen','mobilité rachis cervical']),
    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        answer: 'mobilité rachis cervical',
        nextId: 'tofigure6',
      },
    ],



  },
  tofigure6: {
    botPrompt: 'https://firebasestorage.googleapis.com/v0/b/rheumatology-92f91.appspot.com/o/figure%206.png?alt=media&token=37591786-26c1-464d-83d5-497955014787',
    type: RTypes.MEDIA,
    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        nextId: 'cervical',
      },
    ],

  },

  cervical: {

    botPrompt: '<div style="height:auto;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">indolore et non limité</div>',

    input: selectField(['quitter l\'examen','calcul de schober dorsal']),
    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        answer: 'calcul de schober dorsal',
        nextId: 'tofigure7',
      },
    ],

  },
  tofigure7: {
    botPrompt: 'https://firebasestorage.googleapis.com/v0/b/rheumatology-92f91.appspot.com/o/figure%207.png?alt=media&token=1231d376-c5d8-4e04-ae87-0b4ea5b2cc03',
    type: RTypes.MEDIA,
    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        nextId: 'dorsal',
      },
    ],


  },
  dorsal: {

    botPrompt: '<div style="height:auto;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">3 cm</div>',

    input: selectField(['quitter l\'examen','ampliation thoracique']),
    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        answer: 'ampliation thoracique',
        nextId: 'tofigure8',
      },
    ],


  },
  tofigure8: {
    botPrompt: 'https://firebasestorage.googleapis.com/v0/b/rheumatology-92f91.appspot.com/o/figure%208.png?alt=media&token=3d027f8d-f9b6-47de-946b-4e3f0d997582',
    type: RTypes.MEDIA,
    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        nextId: 'thoracique',
      },
    ],


  },
  thoracique: {

    botPrompt: '<div style="height:auto;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">5 cm</div>',

    answers:[{
      nextId:'conclusionexamen2'

    }]


  },
  conclusionexamen2:{
    botPrompt: '<div style="height: auto;;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">conclure : examen du rachis entier: pas de limitation ou de douleur au niveau du rachis cervical et dorsal</div>',
      answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        nextId: 'listInPart2',
      },


    ],


  },





  // Fin de examen rachi entier
  // Debut de Examen des sacro-iliaques

  iliaques: {
        botPrompt: '<div style="height: auto;border-radius: 10px;color:white;font-weight: bold" hidden></div>',



    input: selectField(['quitter l\'examen','trépied']),
    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        answer: 'trépied',
        nextId: 'tofigure9',
      },


    ],


  },
  tofigure9: {
    botPrompt: 'https://firebasestorage.googleapis.com/v0/b/rheumatology-92f91.appspot.com/o/figure%209.png?alt=media&token=97f6bb43-15c4-4c2c-b981-0540c822eb05',
    type: RTypes.MEDIA,
    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        nextId: 'trepied',
      },
    ],




  },
  trepied: {

    botPrompt: '<div style="height:auto;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">douleur</div>',

    input: selectField(['quitter l\'examen','gaenslen']),
    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        answer: 'gaenslen',
        nextId: 'tofigure10',
      },
    ],




  },
  tofigure10: {
    botPrompt: 'https://firebasestorage.googleapis.com/v0/b/rheumatology-92f91.appspot.com/o/figure%2010.png?alt=media&token=2439f9ef-cc11-471d-846e-8ae1eee85fb7',
    type: RTypes.MEDIA,
    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        nextId: 'gaenslen',
      },
    ],

  },
  gaenslen: {

    botPrompt: '<div style="height:auto;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">positif</div>',

    input: selectField(['quitter l\'examen','rapprochement']),
    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        answer: 'rapprochement',
        nextId: 'tofigure11',
      },
    ],


  },
  tofigure11: {
    botPrompt: 'https://firebasestorage.googleapis.com/v0/b/rheumatology-92f91.appspot.com/o/figure%2011.png?alt=media&token=8641297f-dd68-450b-9ed1-6e8b09f98ea4',
    type: RTypes.MEDIA,
    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        nextId: 'rapprochement',
      },
    ],


  },
  rapprochement: {
    botPrompt: '<div style="height:auto;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">positif</div>',
    input: selectField(['quitter l\'examen','écartement']),
    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        answer: 'écartement',
        nextId: 'tofigure12',
      },
    ],

  },
  tofigure12: {
    botPrompt: 'https://firebasestorage.googleapis.com/v0/b/rheumatology-92f91.appspot.com/o/figure%2012.png?alt=media&token=8eaf9593-c093-4a73-a825-825dc9584456',
    type: RTypes.MEDIA,
    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        nextId: 'ecartement',
      },
    ],

  },
  ecartement: {
    botPrompt: '<div style="height:auto;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">positif</div>',
    input: selectField(['quitter l\'examen','test de cisaillement vertical']),
    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        answer: 'test de cisaillement vertical',
        nextId: 'tofigure13',
      },
    ],

  },
  tofigure13: {
    botPrompt: 'https://firebasestorage.googleapis.com/v0/b/rheumatology-92f91.appspot.com/o/figure%2013.png?alt=media&token=34d26a1d-cf40-4af9-ad47-b51fd773fadf',
    type: RTypes.MEDIA,
    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        nextId: 'vertical',
      },
    ],
  },
  vertical: {

    botPrompt: '<div style="height:auto;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">négatif</div>',

    answers:[{
      nextId:'conclusionexamen3'

    }]


  },
  conclusionexamen3:{
    botPrompt: '<div style="height: auto;;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">conclure : examen des sacro iliaques: Trois tests sur cinq sont positifs</div>',
      answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        nextId: 'listInPart2',
      },


    ],


  },


  // Fin de Examen des sacro-iliaques
  // Debut de Examen des articulations périphériques
  peripheriques: {
        botPrompt: '<div style="height: auto;border-radius: 10px;color:white;font-weight: bold" hidden></div>',



    input: selectField(['quitter l\'examen','chercher une tuméfaction articulaire']),
    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        answer: 'chercher une tuméfaction articulaire',
        nextId: 'tofigure14',
      },
    ],

  },
  tofigure14: {
    botPrompt: 'https://firebasestorage.googleapis.com/v0/b/rheumatology-92f91.appspot.com/o/figure%2014.png?alt=media&token=c30c543d-6f37-4679-badb-e1f40ec0cac2',
    type: RTypes.MEDIA,
    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        nextId: 'articulaire',
      },
    ],

  },
  articulaire: {

    botPrompt: '<div style="height:auto;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">pas de tuméfaction</div>',

    input: selectField(['quitter l\'examen','mobilité articulaire']),
    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        answer: 'mobilité articulaire',
        nextId: 'articulaire1',
      },
    ],

  },


  articulaire1: {

    botPrompt: '<div style="height:auto;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">indolore et non limité</div>',

    input: selectField(['quitter l\'examen','mobilité des hanches']),
    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        answer: 'mobilité des hanches',
        nextId: 'hanches',
      },
    ],

  },
  hanches: {

    botPrompt: '<div style="height:auto;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">130/10/45/30/45/30</div>',

    answers:[{
      nextId:'conclusionexamen4'

    }]


  },
  conclusionexamen4:{
    botPrompt: '<div style="height: auto;;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">conclure : examen des articulations périphérique: les articulations sont libres et indolores</div>',
      answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        nextId: 'listInPart2',
      },


    ],


  },
  // Fin de Examen des articulations périphériques
  // Debut de Examen neurologique

  neurologique: {
        botPrompt: '<div style="height: auto;border-radius: 10px;color:white;font-weight: bold" hidden></div>',



    input: selectField(['quitter l\'examen','deficit moteur ou sensitive']),
    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        answer: 'deficit moteur ou sensitive',
        nextId: 'sensitive1',
      },
    ],


  },
  sensitive1: {
    botPrompt: '<div style="height:auto;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">non</div>',

    input: selectField(['quitter l\'examen','réflexe ostéo-tendineux']),
    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        answer: 'réflexe ostéo-tendineux',
        nextId: 'tendineux1',
      },
    ],


  },
  tendineux1: {
 botPrompt: '<div style="height:auto;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">présents et symétriques</div>',

    input: selectField(['quitter l\'examen','anesthésie en selle']),
    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        answer: 'anesthésie en selle',
        nextId: 'selle1',
      },
    ],


  },
  selle1: {
    botPrompt: '<div style="height:auto;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">non</div>',

    answers:[{
      nextId:'conclusionexamen5'

    }]


  },
  conclusionexamen5:{
    botPrompt: '<div style="height: auto;;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">Examen neurologique sans anomalie</div>',
      answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        nextId: 'listInPart2',
      },


    ],


  },
  // Fin de Examen neurologique
  // Debut de Examen cardio pulmonaire
  pulmonaire: {
        botPrompt: '<div style="height: auto;border-radius: 10px;color:white;font-weight: bold" hidden></div>',



    input: selectField(['quitter l\'examen','auscultation cardiaque']),
    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        answer: 'auscultation cardiaque',
        nextId: 'cardiaque1',
      },
    ],
  },
  cardiaque1: {
    botPrompt: '<div style="height:auto;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">normale</div>',
    input: selectField(['quitter l\'examen','ausculatation pulmonaire']),
    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        answer: 'ausculatation pulmonaire',
        nextId: 'pulmonaire1',
      },
    ],

  },
  pulmonaire1: {
    botPrompt: '<div style="height:auto;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">normale</div>',
    answers:[{
      nextId:'conclusionexamen6'

    }]


  },
  conclusionexamen6:{
    botPrompt: '<div style="height: auto;;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">Examen cardio-pulmonaire sans anomalie</div>',
      answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        nextId: 'listInPart2',
      },


    ],


  },
  // Fin de Examen cardio pulmonaire
  // Debut de Examen abdomino pelvien
  pelvien: {
        botPrompt: '<div style="height: auto;border-radius: 10px;color:white;font-weight: bold" hidden></div>',



    input: selectField(['quitter l\'examen','palpation']),
    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        answer: 'palpation',
        nextId: 'palpation1',
      },
    ],
  },
  palpation1: {
    botPrompt: '<div style="height:auto;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">normale</div>',
    input: selectField(['quitter l\'examen','viscéromégalie']),
    answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        answer: 'viscéromégalie',
        nextId: 'visceromégalie',
      },
    ],},
    visceromégalie:{
    botPrompt: '<div style="height:auto;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">normale</div>',
    answers:[{
      nextId:'conclusionexamen7'

    }]


  },
  conclusionexamen7:{
    botPrompt: '<div style="height: auto;;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">Examen abdomino-pelvien sans anomalie</div>',
      answers: [

{
answer: 'quitter l\'examen',
nextId: 'listInPart2',
 },
      {
        nextId: 'listInPart2',
      },


    ],


  },
   
  
  
    
  };
  
  
  export default questions;
  