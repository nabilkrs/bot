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


  // Start
  start: {
    
   
    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">bonjour Dr, j’ai mal au dos</div>',


    answers: [
      {
        nextId: 'bot1',
      },
    ],
  },
  // /////////////////////////
  // Groupe 1
  bot1: {

    
    botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">Vous voulez en savoir plus sur ….</div>',
    input: selectField(['Sur le terrain du patient', 'Sur les caractéristiques de la douleur', 'Sur les signes associés']),
    shouldEstimateRecommendation: true,
    answers: [
      {

        answer: 'Sur le terrain du patient',
        nextId: 'groupeone',
      },
      {
        answer: 'Sur les caractéristiques de la douleur',
        nextId: 'groupe2boot',
      },
      {
        answer: 'Sur les signes associés',
        nextId: 'groupe3boot',
      },

    ],

    // answers: [
    //   {
    //     nextId: 'groupeone',
    //   },
    // ],
  },




  groupeone: {

  
    botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">D\'accord</div>',

    

    input: selectField(['quel âge avez-vous ?', 'quelle est votre profession ?', 'avez-vous des antécédents familiaux de rhumatisme ?']),
    shouldEstimateRecommendation: true,
    answers: [
      {

        answer: 'quel âge avez-vous ?',
        nextId: 'age',
      },
      {
        answer: 'quelle est votre profession ?',
        nextId: 'profession',
      },
      {
        answer: 'avez-vous des antécédents familiaux de rhumatisme ?',
        nextId: 'antecedents',
      },

    ],
  },
  returnerGroupe1: {
    botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">D\'accord</div>',


    input: selectField(['quel âge avez-vous ?', 'quelle est votre profession ?', 'avez-vous des antécédents familiaux de rhumatisme ?']),

    answers: [
      {
        answer: 'quel âge avez-vous ?',
        nextId: 'age',
      },
      {
        answer: 'quelle est votre profession ?',
        nextId: 'profession',
      },
      {
        answer: 'avez-vous des antécédents familiaux de rhumatisme ?',
        nextId: 'antecedents',
      },

    ],


  },
  age: {

    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">28 ans</div>',

    input: selectField(['avez-vous des antécédents personnels de néoplasie, infection, psoriasis, MICI ?', 'êtes-vous fumeur ?', 'Retourner aux réponses précédentes']),
    answers: [
      {
        answer: 'avez-vous des antécédents personnels de néoplasie, infection, psoriasis, MICI ?',
        nextId: 'MICI',
      },
      {
        answer: 'êtes-vous fumeur ?',
        nextId: 'fumeur',
      },
      // {
      //   answer: 'où avez-vous mal ?',
      //   nextId: 'mal',
      // },
      {
        answer: 'Retourner aux réponses précédentes',
        nextId: 'returnerGroupe1',

      }

    ],





  },
  profession: {
    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">serveur</div>',
    input: selectField(['avez-vous des antécédents personnels de néoplasie, infection, psoriasis, MICI ?', 'êtes-vous fumeur ?', 'Retourner aux réponses précédentes']),
    answers: [
      {
        answer: 'avez-vous des antécédents personnels de néoplasie, infection, psoriasis, MICI ?',
        nextId: 'MICI',
      },
      {
        answer: 'êtes-vous fumeur ?',
        nextId: 'fumeur',
      },
      // {
      //   answer: 'où avez-vous mal ?',
      //   nextId: 'mal',
      // },
      {
        answer: 'Retourner aux réponses précédentes',
        nextId: 'returnerGroupe1',

      }

    ],




  },
  antecedents: {
    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">non</div>',

    input: selectField(['avez-vous des antécédents personnels de néoplasie, infection, psoriasis, MICI ?', 'êtes-vous fumeur ?', 'Retourner aux réponses précédentes']),
    answers: [
      {
        answer: 'avez-vous des antécédents personnels de néoplasie, infection, psoriasis, MICI ?',
        nextId: 'MICI',
      },
      {
        answer: 'êtes-vous fumeur ?',
        nextId: 'fumeur',
      },
      // {
      //   answer: 'où avez-vous mal ?',
      //   nextId: 'mal',
      // },
      {
        answer: 'Retourner aux réponses précédentes',
        nextId: 'returnerGroupe1',

      }

    ],




  },
  groupe2boot:{
    botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">D\'accord</div>',

      input: selectField(['où avez-vous mal ?','la douleur a commencé de façon brutale ?', 'Depuis combien de temps avez-vous ?', 'est-ce que la douleur évolue par poussée ?']),
    answers: [
      {
        answer: 'où avez-vous mal ?',
        nextId: 'mal',
      },
      {
        answer: 'la douleur a commencé de façon brutale ?',
        nextId: 'brutale',
      },
      {
        answer: 'Depuis combien de temps avez-vous ?',
        nextId: 'avezvous',
      },
      {
        answer: 'est-ce que la douleur évolue par poussée ?',
        nextId: 'poussee',
      },


    ],

  },


  // Groupe 1
  // Groupe 2//////
  retournerGroupe2: {
        botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">D\'accord</div>',



    input: selectField(['avez-vous des antécédents personnels de néoplasie, infection, psoriasis, MICI ?', 'êtes-vous fumeur ?', 'Retourner aux réponses précédentes']),
    answers: [
      {
        answer: 'avez-vous des antécédents personnels de néoplasie, infection, psoriasis, MICI ?',
        nextId: 'MICI',
      },
      {
        answer: 'êtes-vous fumeur ?',
        nextId: 'fumeur',
      },
      // {
      //   answer: 'où avez-vous mal ?',
      //   nextId: 'mal',
      // },
      {
        answer: 'Retourner aux réponses précédentes',
        nextId: 'returnerGroupe1',

      }

    ],



  },

  MICI: {
    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">non</div>',

    // input: selectField(['la douleur a commencé de façon brutale ?', 'Depuis combien de temps avez-vous ?', 'est-ce que la douleur évolue par poussée ?', 'Retourner aux réponses précédentes']),
    // answers: [
    //   {
    //     answer: 'la douleur a commencé de façon brutale ?',
    //     nextId: 'brutale',
    //   },
    //   {
    //     answer: 'Depuis combien de temps avez-vous ?',
    //     nextId: 'avezvous',
    //   },
    //   {
    //     answer: 'est-ce que la douleur évolue par poussée ?',
    //     nextId: 'poussee',
    //   },
    //   {
    //     answer: 'Retourner aux réponses précédentes',
    //     nextId: 'retournerGroupe2',

    //   }

    // ],
    answers:[
      {
        nextId:'bot1'
      }
    ]





  },


  fumeur: {

    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">oui, je fume 1 paquet par jour depuis 10 ans</div>',

    // input: selectField(['la douleur a commencé de façon brutale ?', 'Depuis combien de temps avez-vous ?', 'est-ce que la douleur évolue par poussée ?', 'Retourner aux réponses précédentes']),
    // answers: [
    //   {

    //     answer: 'la douleur a commencé de façon brutale ?',
    //     nextId: 'brutale',
    //   },
    //   {
    //     answer: 'Depuis combien de temps avez-vous ?',
    //     nextId: 'avezvous',
    //   },
    //   {
    //     answer: 'est-ce que la douleur évolue par poussée ?',
    //     nextId: 'poussee',
    //   },
    //   {
    //     answer: 'Retourner aux réponses précédentes',
    //     nextId: 'retournerGroupe2',

    //   }

    // ],
    answers:[
      {
        nextId:'bot1'
      }
    ]

  },
  mal: {

    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">au niveau du bas du dos</div>',

    input: selectField(['la douleur a commencé de façon brutale ?', 'Depuis combien de temps avez-vous ?', 'est-ce que la douleur évolue par poussée ?', 'Retourner aux réponses précédentes']),
    answers: [
      {
        answer: 'la douleur a commencé de façon brutale ?',
        nextId: 'brutale',
      },
      {
        answer: 'Depuis combien de temps avez-vous ?',
        nextId: 'avezvous',
      },
      {
        answer: 'est-ce que la douleur évolue par poussée ?',
        nextId: 'poussee',
      },
      {
        answer: 'Retourner aux réponses précédentes',
        nextId: 'retournerGroupe2',

      }

    ],



  },

  // FIN Groupe 2//////
  //  Groupe 3/////
  retournerGroupe3: {
        botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">D\'accord</div>',



    input: selectField(['où avez-vous mal ?','la douleur a commencé de façon brutale ?', 'Depuis combien de temps avez-vous ?', 'est-ce que la douleur évolue par poussée ?', 'Retourner aux réponses précédentes']),
    answers: [
      {
        answer: 'où avez-vous mal ?',
        nextId: 'mal',
      },
      {
        answer: 'la douleur a commencé de façon brutale ?',
        nextId: 'brutale',
      },
      {
        answer: 'Depuis combien de temps avez-vous ?',
        nextId: 'avezvous',
      },
      {
        answer: 'est-ce que la douleur évolue par poussée ?',
        nextId: 'poussee',
      },
      {
        answer: 'Retourner aux réponses précédentes',
        nextId: 'retournerGroupe2',

      }

    ],



  },


  brutale: {

    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">non, petit à petit</div>',

    input: selectField(['y a-t-il un facteur déclenchant (traumatisme, faux mouvement, port de charge lourde) ?', 'comment est la douleur ? à type de crampes ou de fourmillements ?', 'pouvez vous chiffrer cette douleur de 0 à 10 ?', 'Retourner aux réponses précédentes']),
    answers: [
      {
        answer: 'y a-t-il un facteur déclenchant (traumatisme, faux mouvement, port de charge lourde) ?',
        nextId: 'lourde',
      },
      {
        answer: 'comment est la douleur ? à type de crampes ou de fourmillements ?',
        nextId: 'fourmillements',
      },
      {
        answer: 'pouvez vous chiffrer cette douleur de 0 à 10 ?',
        nextId: 'ten',
      },
      {
        answer: 'Retourner aux réponses précédentes',
        nextId: 'retournerGroupe3',

      }

    ],





  },
  avezvous: {

    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">depuis 6 mois</div>',

    input: selectField(['y at il un facteur déclenchant (traumatisme, faux mouvement, port de charge lourde) ?', 'comment est la douleur ? à type de crampes ou de fourmillements ?', 'pouvez vous chiffré cette douleur de 0 à 10 ?', 'Retourner aux réponses précédentes']),
    answers: [
      {
        answer: 'y at il un facteur déclenchant (traumatisme, faux mouvement, port de charge lourde) ?',
        nextId: 'lourde',
      },
      {
        answer: 'comment est la douleur ? à type de crampes ou de fourmillements ?',
        nextId: 'fourmillements',
      },
      {
        answer: 'pouvez vous chiffré cette douleur de 0 à 10 ?',
        nextId: 'ten',
      },
      {
        answer: 'Retourner aux réponses précédentes',
        nextId: 'retournerGroupe3',

      }

    ],



  },
  poussee: {
    
    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">oui, par poussée 2-3 mois</div>',
    input: selectField(['y at il un facteur déclenchant (traumatisme, faux mouvement, port de charge lourde) ?', 'comment est la douleur ? à type de crampes ou de fourmillements ?', 'pouvez vous chiffré cette douleur de 0 à 10 ?', 'Retourner aux réponses précédentes']),
    answers: [
      {
        answer: 'y at il un facteur déclenchant (traumatisme, faux mouvement, port de charge lourde) ?',
        nextId: 'lourde',
      },
      {
        answer: 'comment est la douleur ? à type de crampes ou de fourmillements ?',
        nextId: 'fourmillements',
      },
      {
        answer: 'pouvez vous chiffré cette douleur de 0 à 10 ?',
        nextId: 'ten',
      },
      {
        answer: 'Retourner aux réponses précédentes',
        nextId: 'retournerGroupe3',

      }

    ],

  },
  // Fin Groupe 3/////
  retournerGroupe4: {
        botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">D\'accord</div>',



    input: selectField(['y at il un facteur déclenchant (traumatisme, faux mouvement, port de charge lourde) ?', 'comment est la douleur ? à type de crampes ou de fourmillements ?', 'pouvez vous chiffré cette douleur de 0 à 10 ?', 'Retourner aux réponses précédentes']),
    answers: [
      {
        answer: 'y at il un facteur déclenchant (traumatisme, faux mouvement, port de charge lourde) ?',
        nextId: 'lourde',
      },
      {
        answer: 'comment est la douleur ? à type de crampes ou de fourmillements ?',
        nextId: 'fourmillements',
      },
      {
        answer: 'pouvez vous chiffré cette douleur de 0 à 10 ?',
        nextId: 'ten',
      },
      {
        answer: 'Retourner aux réponses précédentes',
        nextId: 'retournerGroupe3',

      }

    ],



  },

  lourde: {
    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">non</div>',

    input: selectField(['est ce que la douleur irradie au niveau du membre inférieur ?', 'quand sentez-vous cette douleur ?', 'vous vous sentez raide le matin ? Pendant combien de temps ?', 'Retourner aux réponses précédentes']),
    answers: [
      {
        answer: 'est ce que la douleur irradie au niveau du membre inférieur ?',
        nextId: 'inferieur',
      },
      {
        answer: 'quand sentez-vous cette douleur ?',
        nextId: 'douleur',
      },
      {
        answer: 'vous vous sentez raide le matin ? Pendant combien de temps ?',
        nextId: 'temps',
      },
      {
        answer: 'Retourner aux réponses précédentes',
        nextId: 'retournerGroupe4',

      }

    ],




  },
  fourmillements: {

    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">à type de crampes</div>',
    input: selectField(['est ce que la douleur irradie au niveau du membre inférieur ?', 'quand sentez-vous cette douleur ?', 'vous vous sentez raide le matin ? Pendant combien de temps ?', 'Retourner aux réponses précédentes']),
    answers: [
      {
        answer: 'est ce que la douleur irradie au niveau du membre inférieur ?',
        nextId: 'inferieur',
      },
      {
        answer: 'quand sentez-vous cette douleur ?',
        nextId: 'douleur',
      },
      {
        answer: 'vous vous sentez raide le matin ? Pendant combien de temps ?',
        nextId: 'temps',
      },
      {
        answer: 'Retourner aux réponses précédentes',
        nextId: 'retournerGroupe4',

      }

    ],



  },
  ten: {

    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">6/10</div>',
    input: selectField(['est ce que la douleur irradie au niveau du membre inférieur ?', 'quand sentez-vous cette douleur ?', 'vous vous sentez raide le matin ? Pendant combien de temps ?', 'Retourner aux réponses précédentes']),

    answers: [
      {
        answer: 'est ce que la douleur irradie au niveau du membre inférieur ?',
        nextId: 'inferieur',
      },
      {
        answer: 'quand sentez-vous cette douleur ?',
        nextId: 'douleur',
      },
      {
        answer: 'vous vous sentez raide le matin ? Pendant combien de temps ?',
        nextId: 'temps',
      },
      {
        answer: 'Retourner aux réponses précédentes',
        nextId: 'retournerGroupe4',

      }

    ],
  },
  // Fin Groupe 4/////
  // Groupe 5 /////
  retournerGroupe5: {
        botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">D\'accord</div>',



    input: selectField(['est ce que la douleur irradie au niveau du membre inférieur ?', 'quand sentez-vous cette douleur ?', 'vous vous sentez raide le matin ? Pendant combien de temps ?', 'Retourner aux réponses précédentes']),
    answers: [
      {
        answer: 'est ce que la douleur irradie au niveau du membre inférieur ?',
        nextId: 'inferieur',
      },
      {
        answer: 'quand sentez-vous cette douleur ?',
        nextId: 'douleur',
      },
      {
        answer: 'vous vous sentez raide le matin ? Pendant combien de temps ?',
        nextId: 'temps',
      },
      {
        answer: 'Retourner aux réponses précédentes',
        nextId: 'retournerGroupe4',

      }

    ],



  },
  inferieur: {
    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">non</div>',

    input: selectField(['est ce que cette douleur est impulsive à la toux ?', 'Avez-vous mal au niveau des fesses ?',  'Retourner aux réponses précédentes']),
    answers: [
      {
        answer: 'est ce que cette douleur est impulsive à la toux ?',
        nextId: 'toux',
      },
      {
        answer: 'Avez-vous mal au niveau des fesses ?',
        nextId: 'fesses',
      },
      // {
      //   answer: 'avez-vous mal au niveau des talons, surtout le matin au réveil ?',
      //   nextId: 'reveil',
      // },
      {
        answer: 'Retourner aux réponses précédentes',
        nextId: 'retournerGroupe5',

      }

    ],



  },
  douleur: {

    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">surtout la 2ème moitié de la nuit et elle est calmée lors de l’activité physique</div>',
    input: selectField(['est ce que cette douleur est impulsive à la toux ?', 'Avez-vous mal au niveau des fesses ?', 'avez-vous mal au niveau des talons, surtout le matin au réveil ?', 'Retourner aux réponses précédentes']),
    answers: [
      {
        answer: 'est ce que cette douleur est impulsive à la toux ?',
        nextId: 'toux',
      },
      {
        answer: 'Avez-vous mal au niveau des fesses ?',
        nextId: 'fesses',
      },
      {
        answer: 'avez-vous mal au niveau des talons, surtout le matin au réveil ?',
        nextId: 'reveil',
      },
      {
        answer: 'Retourner aux réponses précédentes',
        nextId: 'retournerGroupe5',

      }

    ],


  },
  temps: {

    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">oui, 1h</div>',
    // input: selectField(['est ce que cette douleur est impulsive à la toux ?', 'Avez-vous mal au niveau des fesses ?', 'avez-vous mal au niveau des talons, surtout le matin au réveil ?', 'Retourner aux réponses précédentes']),
    // answers: [
    //   {
    //     answer: 'est ce que cette douleur est impulsive à la toux ?',
    //     nextId: 'toux',
    //   },
    //   {
    //     answer: 'Avez-vous mal au niveau des fesses ?',
    //     nextId: 'fesses',
    //   },
    //   {
    //     answer: 'avez-vous mal au niveau des talons, surtout le matin au réveil ?',
    //     nextId: 'reveil',
    //   },
    //   {
    //     answer: 'Retourner aux réponses précédentes',
    //     nextId: 'retournerGroupe5',

    //   }

    // ],
    answers:[{
      nextId:'bot1'
    }]


  },
  // FIN GROUPE 5/////
  // GROUPE 6/////
  retournerGroupe6: {
        botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">D\'accord</div>',



    input: selectField(['est ce que cette douleur est impulsive à la toux ?', 'Avez-vous mal au niveau des fesses ?', 'avez-vous mal au niveau des talons, surtout le matin au réveil ?', 'Retourner aux réponses précédentes']),
    answers: [
      {
        answer: 'est ce que cette douleur est impulsive à la toux ?',
        nextId: 'toux',
      },
      {
        answer: 'Avez-vous mal au niveau des fesses ?',
        nextId: 'fesses',
      },
      {
        answer: 'avez-vous mal au niveau des talons, surtout le matin au réveil ?',
        nextId: 'reveil',
      },
      {
        answer: 'Retourner aux réponses précédentes',
        nextId: 'retournerGroupe5',

      }

    ],



  },
  groupe3boot:{
        botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">D\'accord</div>',



        input: selectField(['avez-vous mal au niveau des talons, surtout le matin au réveil ?','avez-vous présenté une tuméfaction d’un doigt ou d’un orteil en saucisse ?', 'sentez vous une asthénie ou une perte de l’appétit pendant cette période ?', 'avez-vous de la fièvre ?']),
    answers: [
      {
        answer: 'avez-vous mal au niveau des talons, surtout le matin au réveil ?',
        nextId: 'reveil',
      },
      {
        answer: 'avez-vous présenté une tuméfaction d’un doigt ou d’un orteil en saucisse ?',
        nextId: 'saucisse',
      },
      {
        answer: 'sentez vous une asthénie ou une perte de l’appétit pendant cette période ?',
        nextId: 'periode',
      },
      {
        answer: 'avez-vous de la fièvre ?',
        nextId: 'fievre',
      },

    ],


  },


  toux: {
    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">non</div>',

    // input: selectField(['avez-vous présenté une tuméfaction d’un doigts ou d’un orteils en saucisse ?', 'sentez vous une asthénie ou une perte de l’appétit pendant cette période ?', 'avez-vous de la fièvre ?', 'Retourner aux réponses précédentes']),
    // answers: [
    //   {
    //     answer: 'avez-vous présenté une tuméfaction d’un doigts ou d’un orteils en saucisse ?',
    //     nextId: 'saucisse',
    //   },
    //   {
    //     answer: 'sentez vous une asthénie ou une perte de l’appétit pendant cette période ?',
    //     nextId: 'periode',
    //   },
    //   {
    //     answer: 'avez-vous de la fièvre ?',
    //     nextId: 'fievre',
    //   },
    //   {
    //     answer: 'Retourner aux réponses précédentes',
    //     nextId: 'retournerGroupe6',

    //   }

    // ],
    answers:[{
      nextId:'bot1'
    }]




  },
  fesses: {

    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">oui, des 2 côtés me réveillant la 2ème moitié de la nuit</div>',
    // input: selectField(['avez-vous présenté une tuméfaction d’un doigts ou d’un orteils en saucisse ?', 'sentez vous une asthénie ou une perte de l’appétit pendant cette période ?', 'avez-vous de la fièvre ?', 'Retourner aux réponses précédentes']),
    // answers: [
    //   {
    //     answer: 'avez-vous présenté une tuméfaction d’un doigts ou d’un orteils en saucisse ?',
    //     nextId: 'saucisse',
    //   },
    //   {
    //     answer: 'sentez vous une asthénie ou une perte de l’appétit pendant cette période ?',
    //     nextId: 'periode',
    //   },
    //   {
    //     answer: 'avez-vous de la fièvre ?',
    //     nextId: 'fievre',
    //   },
    //   {
    //     answer: 'Retourner aux réponses précédentes',
    //     nextId: 'retournerGroupe6',

    //   }

    // ],
    answers:[{
      nextId:'bot1'
    }]


  },
  reveil: {
    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">oui</div>',
    input: selectField(['avez-vous présenté une tuméfaction d’un doigts ou d’un orteils en saucisse ?', 'sentez vous une asthénie ou une perte de l’appétit pendant cette période ?', 'avez-vous de la fièvre ?', 'Retourner aux réponses précédentes']),
    answers: [
      {
        answer: 'avez-vous présenté une tuméfaction d’un doigts ou d’un orteils en saucisse ?',
        nextId: 'saucisse',
      },
      {
        answer: 'sentez vous une asthénie ou une perte de l’appétit pendant cette période ?',
        nextId: 'periode',
      },
      {
        answer: 'avez-vous de la fièvre ?',
        nextId: 'fievre',
      },
      {
        answer: 'Retourner aux réponses précédentes',
        nextId: 'retournerGroupe6',

      }

    ],


  },

  //FIN GROUPE 6 ////////
  //GROUPE 7 /////
  retournerGroupe7: {
        botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">D\'accord</div>',



    input: selectField(['avez-vous présenté une tuméfaction d’un doigts ou d’un orteils en saucisse ?', 'sentez vous une asthénie ou une perte de l’appétit pendant cette période ?', 'avez-vous de la fièvre ?', 'Retourner aux réponses précédentes']),
    answers: [
      {
        answer: 'avez-vous présenté une tuméfaction d’un doigts ou d’un orteils en saucisse ?',
        nextId: 'saucisse',
      },
      {
        answer: 'sentez vous une asthénie ou une perte de l’appétit pendant cette période ?',
        nextId: 'periode',
      },
      {
        answer: 'avez-vous de la fièvre ?',
        nextId: 'fievre',
      },
      {
        answer: 'Retourner aux réponses précédentes',
        nextId: 'retournerGroupe6',

      }

    ],



  },

  saucisse: {
    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">oui</div>',
    input: selectField(['sentez vous des douleurs articulaires ou musculaires associées ?', 'avez-vous des sueurs nocturnes ?', 'avez-vous présenté une infection récente (urétrite, diarrhée 1 mois avant le début) ?', 'Retourner aux réponses précédentes']),
    answers: [
      {
        answer: 'sentez vous des douleurs articulaires ou musculaires associées ?',
        nextId: 'associeesgr7',
      },
      {
        answer: 'avez-vous des sueurs nocturnes ?',
        nextId: 'nocturnesgr7',
      },
      {
        answer: 'avez-vous présenté une infection récente (urétrite, diarrhée 1 mois avant le début) ?',
        nextId: 'debutgr7',
      },
      {
        answer: 'Retourner aux réponses précédentes',
        nextId: 'retournerGroupe7',

      }

    ],




  },
  periode: {
    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">non</div>',

    input: selectField(['sentez vous des douleurs articulaires ou musculaires associées ?', 'avez-vous des sueurs nocturnes ?', 'avez-vous présenté une infection récente (urétrite, diarrhée 1 mois avant le début) ?', 'Retourner aux réponses précédentes']),
    answers: [
      {
        answer: 'sentez vous des douleurs articulaires ou musculaires associées ?',
        nextId: 'associeesgr7',
      },
      {
        answer: 'avez-vous des sueurs nocturnes ?',
        nextId: 'nocturnesgr7',
      },
      {
        answer: 'avez-vous présenté une infection récente (urétrite, diarrhée 1 mois avant le début) ?',
        nextId: 'debutgr7',
      },
      {
        answer: 'Retourner aux réponses précédentes',
        nextId: 'retournerGroupe7',

      }

    ],


  },
  fievre: {
    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">non</div>',

    input: selectField(['sentez vous des douleurs articulaires ou musculaires associées ?', 'avez-vous des sueurs nocturnes ?', 'avez-vous présenté une infection récente (urétrite, diarrhée 1 mois avant le début) ?', 'Retourner aux réponses précédentes']),
    answers: [
      {
        answer: 'sentez vous des douleurs articulaires ou musculaires associées ?',
        nextId: 'associeesgr7',
      },
      {
        answer: 'avez-vous des sueurs nocturnes ?',
        nextId: 'nocturnesgr7',
      },
      {
        answer: 'avez-vous présenté une infection récente (urétrite, diarrhée 1 mois avant le début) ?',
        nextId: 'debutgr7',
      },
      {
        answer: 'Retourner aux réponses précédentes',
        nextId: 'retournerGroupe7',

      }

    ],


  },
  // FIN GROUPE 7/////////
  // GROUPE 8 /////

  retournerGroupe8: {
        botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">D\'accord</div>',



    input: selectField(['sentez vous des douleurs articulaires ou musculaires associées ?', 'avez-vous des sueurs nocturnes ?', 'avez-vous présenté une infection récente (urétrite, diarrhée 1 mois avant le début) ?', 'Retourner aux réponses précédentes']),
    answers: [
      {
        answer: 'sentez vous des douleurs articulaires ou musculaires associées ?',
        nextId: 'associeesgr7',
      },
      {
        answer: 'avez-vous des sueurs nocturnes ?',
        nextId: 'nocturnesgr7',
      },
      {
        answer: 'avez-vous présenté une infection récente (urétrite, diarrhée 1 mois avant le début) ?',
        nextId: 'debutgr7',
      },
      {
        answer: 'Retourner aux réponses précédentes',
        nextId: 'retournerGroupe7',

      }

    ],



  },






  associeesgr7: {
    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">non</div>',

    input: selectField(['avez-vous des brulures mictionnels, une toux ou autres ?', 'avez-vous une hématémèse, une hémoptysie ou une dysurie ?', 'avez-vous présenté une rougeur oculaire avec un flou visuel ?', 'Retourner aux réponses précédentes']),
    answers: [
      {
        answer: 'avez-vous des brulures mictionnels, une toux ou autres ?',
        nextId: 'autres8',
      },
      {
        answer: 'avez-vous une hématémèse, une hémoptysie ou une dysurie ?',
        nextId: 'dysurie8',
      },
      {
        answer: 'avez-vous présenté une rougeur oculaire avec un flou visuel ?',
        nextId: 'visuel8',
      },
      {
        answer: 'Retourner aux réponses précédentes',
        nextId: 'retournerGroupe8',

      }

    ],


  },
  nocturnesgr7: {
    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">non</div>',

    input: selectField(['avez-vous des brulures mictionnels, une toux ou autres ?', 'avez-vous une hématémèse, une hémoptysie ou une dysurie ?', 'avez-vous présenté une rougeur oculaire avec un flou visuel ?', 'Retourner aux réponses précédentes']),
    answers: [
      {
        answer: 'avez-vous des brulures mictionnels, une toux ou autres ?',
        nextId: 'autres8',
      },
      {
        answer: 'avez-vous une hématémèse, une hémoptysie ou une dysurie ?',
        nextId: 'dysurie8',
      },
      {
        answer: 'avez-vous présenté une rougeur oculaire avec un flou visuel ?',
        nextId: 'visuel8',
      },
      {
        answer: 'Retourner aux réponses précédentes',
        nextId: 'retournerGroupe8',

      }

    ],


  },
  debutgr7: {
    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">non</div>',

    input: selectField(['avez-vous des brulures mictionnels, une toux ou autres ?', 'avez-vous une hématémèse, une hémoptysie ou une dysurie ?', 'avez-vous présenté une rougeur oculaire avec un flou visuel ?', 'Retourner aux réponses précédentes']),
    answers: [
      {
        answer: 'avez-vous des brulures mictionnels, une toux ou autres ?',
        nextId: 'autres8',
      },
      {
        answer: 'avez-vous une hématémèse, une hémoptysie ou une dysurie ?',
        nextId: 'dysurie8',
      },
      {
        answer: 'avez-vous présenté une rougeur oculaire avec un flou visuel ?',
        nextId: 'visuel8',
      },
      {
        answer: 'Retourner aux réponses précédentes',
        nextId: 'retournerGroupe8',

      }

    ],
    

  },
  // FIN GROUPE 8
  // GROUPE 9
  retournerGroupe9: {
        botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">D\'accord</div>',



    input: selectField(['avez-vous des brulures mictionnels, une toux ou autres ?', 'avez-vous une hématémèse, une hémoptysie ou une dysurie ?', 'avez-vous présenté une rougeur oculaire avec un flou visuel ?', 'Retourner aux réponses précédentes']),
    answers: [
      {
        answer: 'avez-vous des brulures mictionnels, une toux ou autres ?',
        nextId: 'autres8',
      },
      {
        answer: 'avez-vous une hématémèse, une hémoptysie ou une dysurie ?',
        nextId: 'dysurie8',
      },
      {
        answer: 'avez-vous présenté une rougeur oculaire avec un flou visuel ?',
        nextId: 'visuel8',
      },
      {
        answer: 'Retourner aux réponses précédentes',
        nextId: 'retournerGroupe8',

      }

    ],



  },





  autres8: {
    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">non</div>',

    input: selectField(['fuite /rétention urinaire, incontinence anale, constipation, impuissance ?', 'avez-vous une diarrhée ?', 'avez-vous reçu un traitement ?', 'Retourner aux réponses précédentes']),
    answers: [
      {
        answer: 'fuite /rétention urinaire, incontinence anale, constipation, impuissance ?',
        nextId: 'impuissance10',
      },



      {
        answer: 'avez-vous une diarrhée ?',
        nextId: 'diarrhee9',
      },
      {
        answer: 'avez-vous reçu un traitement ?',
        nextId: 'traitement9',
      },
      {
        answer: 'Retourner aux réponses précédentes',
        nextId: 'retournerGroupe9',

      }

    ],


  },
  dysurie8: {
    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">non</div>',

    input: selectField(['fuite /rétention urinaire, incontinence anale, constipation, impuissance ?','avez-vous une diarrhée ?', 'avez-vous reçu un traitement ?', 'Retourner aux réponses précédentes']),
    answers: [
      {
        answer: 'fuite /rétention urinaire, incontinence anale, constipation, impuissance ?',
        nextId: 'impuissance10',
      },



      {
        answer: 'avez-vous une diarrhée ?',
        nextId: 'diarrhee9',
      },
      {
        answer: 'avez-vous reçu un traitement ?',
        nextId: 'traitement9',
      },
      {
        answer: 'Retourner aux réponses précédentes',
        nextId: 'retournerGroupe9',

      }

    ],


  },
  visuel8: {
    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">non</div>',

    input: selectField(['fuite /rétention urinaire, incontinence anale, constipation, impuissance ?', 'avez-vous une diarrhée ?', 'avez-vous reçu un traitement ?', 'Retourner aux réponses précédentes']),
    answers: [
      {
        answer: 'fuite /rétention urinaire, incontinence anale, constipation, impuissance ?',
        nextId: 'impuissance10',
      },


      {
        answer: 'avez-vous une diarrhée ?',
        nextId: 'diarrhee9',
      },
      {
        answer: 'avez-vous reçu un traitement ?',
        nextId: 'traitement9',
      },
      {
        answer: 'Retourner aux réponses précédentes',
        nextId: 'retournerGroupe9',

      }

    ],


  },
  // FIN GROUPE 9
  // GROUPE 10
  retournerGroupe10: {
        botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">D\'accord</div>',



    input: selectField(['fuite /rétention urinaire, incontinence anale, constipation, impuissance ?','avez-vous une diarrhée ?', 'avez-vous reçu un traitement ?', 'Retourner aux réponses précédentes']),
    answers: [
      {
        answer: 'fuite /rétention urinaire, incontinence anale, constipation, impuissance ?',
        nextId: 'impuissance10',
      },

      {
        answer: 'avez-vous une diarrhée ?',
        nextId: 'diarrhee9',
      },
      {
        answer: 'avez-vous reçu un traitement ?',
        nextId: 'traitement9',
      },
      {
        answer: 'Retourner aux réponses précédentes',
        nextId: 'retournerGroupe9',

      }

    ],



  },
  squameuses9: {
    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">non</div>',

    input: selectField(['fuite /rétention urinaire, incontinence anale, constipation, impuissance ?', 'Retourner aux réponses précédentes']),
    answers: [
      {
        answer: 'fuite /rétention urinaire, incontinence anale, constipation, impuissance ?',
        nextId: 'impuissance10',
      },
      {
        answer: 'Retourner aux réponses précédentes',
        nextId: 'retournerGroupe10',

      }

    ],


  },
  diarrhee9: {
    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">non</div>',

    answers:[{
      nextId:'conclusionboot2'
    }]


  },
  traitement9: {

    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">oui, des anti stéroïdiens de synthèse, avec une nette amélioration</div>',
    answers:[{
      nextId:'conclusionboot2'
    }]


  },
  // FIN GROUPE 10
  // GROUPE 11






  moteur10: {
    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">non</div>',

    // input: selectField(['Vous êtes devant un tableau de lombalgies secondaires', 'Vous êtes devant un tableau de lombalgies communes']),
    // answers: [
    //   {
    //     answer: 'Vous êtes devant un tableau de lombalgies secondaires',
    //     nextId: 'secondaires11',
    //   },
    //   {
    //     answer: 'Vous êtes devant un tableau de lombalgies communes',
    //     nextId: 'communes11',
    //   },

    // ],
    answers:[{
      nextId:'conclusionboot'
    }]


  },
  backtosame:{
    botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:red;border-radius: 10px;color:white;font-weight: bold;">Mauvaise réponse, essayer de nouveau</div>',
    // botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">Mauvaise réponse, essayer de nouveau</div>',

 
    
    answers: [
      {
        nextId: 'conclusionboot',
      },
    ],




  },
  conclusionboot:{
    botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">Que peux-tu conclure ?</div>',
    input: selectField(['Vous êtes devant un tableau de lombalgies secondaires', 'Vous êtes devant un tableau de lombalgies communes']),
    answers: [
      {
        answer: 'Vous êtes devant un tableau de lombalgies secondaires',
        nextId: 'secondaires11',
      },
      {
        answer: 'Vous êtes devant un tableau de lombalgies communes',
        nextId: 'backtosame',
      },

    ],



  },











  conclusionboot2:{
    botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">Que peux-tu conclure ?</div>',
    input: selectField(['Vous êtes devant un tableau de lombalgies secondaires', 'Vous êtes devant un tableau de lombalgies communes']),
    answers: [
      {
        answer: 'Vous êtes devant un tableau de lombalgies secondaires',
        nextId: 'secondaires11',
      },
      {
        answer: 'Vous êtes devant un tableau de lombalgies communes',
        nextId: 'backtosame',
      },

    ],



  },









  impuissance10: {
    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">non</div>',

    answers:[{
      nextId:'conclusionboot2'
    }]



  },

  //FIN GROUPE 11 
  // QUESTION 1

  secondaires11: {
    // botPrompt: 'Que faire Dr ?',
    botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">Que faire à ce stade ?</div>',
    input: selectField(['continuer le traitement', 'faire une IRM du rachis', 'examiner votre patient']),
    answers: [
      {
        answer: 'continuer le traitement',
        nextId: 'mauvaiseReponse1',
      },
      {
        answer: 'faire une IRM du rachis',
        nextId: 'mauvaiseReponse1',
      },
      {
        answer: 'examiner votre patient',
        nextId: 'listInPart2',

      }

    ],





  },
  mauvaiseReponse1:{
    botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:red;border-radius: 10px;color:white;font-weight: bold;">Mauvaise réponse, essayer de nouveau</div>',
    answers: [
      {
        nextId:'secondaires11'
      }

    ],


  },



  mauvaiseReponse: {
    input: endOfConversation(),
    botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:red;border-radius: 10px;color:white;font-weight: bold;">Mauvaise réponse, essayer de nouveau</div>',
    
    type: RTypes.TRANSFORMED_TEXT,
    varName: 'userName',
    answers: [
      {
        nextId: null,
      },
    ],





  },
  // Partie 2

  listInPart2: {
    botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">Que cherchez-vous à l’examen clinique ?</div>',

    input: selectField([
      'Examen du rachis lombaire',
      'Examen du rachis entier',
      'Examen des sacro-iliaques',
      'Examen des articulations périphériques',
      'Examen neurologique',
      'Examen cardio pulmonaire',
      'Examen abdomino pelvien',
      'Passer les examens'
    ]),

    answers: [
      {
        answer: 'Examen du rachis lombaire',
        nextId: 'lombaire',
      },
      {
        answer: 'Examen du rachis entier',
        nextId: 'entier',
      },
      {
        answer: 'Examen des sacro-iliaques',
        nextId: 'iliaques',
      },
      {
        answer: 'Examen des articulations périphériques',
        nextId: 'peripheriques',
      },
      {
        answer: 'Examen neurologique',
        nextId: 'neurologique',
      },
      {
        answer: 'Examen cardio pulmonaire',
        nextId: 'pulmonaire',
      },
      {
        answer: 'Examen abdomino pelvien',
        nextId: 'pelvien',
      },
      {
        answer: 'Passer les examens',
        nextId: 'partie3',
      },



    ],





  },

  //  Examen du rachis lombaire

  lombaire: {

    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">effacement lordose</div>',
    input: selectField(['Paplation']),
    answers: [
      {
        answer: 'Paplation',
        nextId: 'paplation',
      },


    ],





  },
  paplation: {
    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">épineuses lombaires douloureuses et Contracture des muscles para vertébraux</div>',


    input: selectField(['signe de la sonnette']),

    answers: [
      {
        answer: 'signe de la sonnette',
        nextId: 'tofigure1',
      },
    ]



  },
  sonnette: {

    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">sonnette</div>',

    answers: [
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
        nextId: 'negative',
      },
    ],


  },
  negative: {

    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">négative</div>',

    input: selectField(['Indice de Shober']),
    answers: [
      {
        answer: 'Indice de Shober',
        nextId: 'tofigure2',
      },


    ],



  },

  Shober: {

    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">2 cm</div>',

    input: selectField(['Distance doigts sol']),
    answers: [
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
        nextId: 'Shober',
      },
    ],


  },
  sol: {

    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">+10 cm</div>',

    input: selectField(['signe de lasegue']),
    answers: [
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
        nextId: 'sol',
      },
    ],


  },
  lasegue: {

    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">100°</div>',

    // input: selectField(['examen du rachis lombaire : syndrome rachidien avec raideur segmentaire et sans signe de confit disco-radiculaire']),
    // answers: [
    //   {
    //     answer: 'examen du rachis lombaire : syndrome rachidien avec raideur segmentaire et sans signe de confit disco-radiculaire',
    //     nextId: 'listInPart2',
    //   },


    // ],
    answers:[{
      nextId:'conclusionexamen1'

    }]


  },
  conclusionexamen1:{
    botPrompt: '<div style="height: auto;margin:-20px 0px 0px 0px;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">conclure : examen du rachis lombaire : syndrome rachidien avec raideur segmentaire et sans signe de confit disco-radiculaire</div>',
      answers: [
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
        nextId: 'lasegue',
      },
    ],




  },
  // Fin de Examen du rachis lombaire

  // Examen du rachis entier :
  entier: {
        botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">D\'accord</div>',



    input: selectField(['déformation dans le plan sagital']),
    answers: [
      {
        answer: 'déformation dans le plan sagital',
        nextId: 'sagital',
      },


    ],





  },
  sagital: {
    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">non</div>',

    input: selectField(['déformation dans le plan frontal']),
    answers: [
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
        nextId: 'frontal',
      },
    ],

  },
  frontal: {
    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">non</div>',

    input: selectField(['palpation']),
    answers: [
      {
        answer: 'palpation',
        nextId: 'palpation',
      },
    ],

  },
  palpation: {

    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">indolore</div>',

    input: selectField(['mobilité rachis cervical']),
    answers: [
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
        nextId: 'cervical',
      },
    ],

  },

  cervical: {

    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">indolore et non limité</div>',

    input: selectField(['calcul de schober dorsal']),
    answers: [
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
        nextId: 'dorsal',
      },
    ],


  },
  dorsal: {

    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">3 cm</div>',

    input: selectField(['ampliation thoracique']),
    answers: [
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
        nextId: 'thoracique',
      },
    ],


  },
  thoracique: {

    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">5 cm</div>',

    answers:[{
      nextId:'conclusionexamen2'

    }]


  },
  conclusionexamen2:{
    botPrompt: '<div style="height: auto;margin:-20px 0px 0px 0px;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">conclure : examen du rachis entier: pas de limitation ou de douleur au niveau du rachis cervical et dorsal</div>',
      answers: [
      {
        nextId: 'listInPart2',
      },


    ],


  },





  // Fin de examen rachi entier
  // Debut de Examen des sacro-iliaques

  iliaques: {
        botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">D\'accord</div>',



    input: selectField(['trépied']),
    answers: [
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
        nextId: 'trepied',
      },
    ],




  },
  trepied: {

    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">douleur</div>',

    input: selectField(['gaenslen']),
    answers: [
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
        nextId: 'gaenslen',
      },
    ],

  },
  gaenslen: {

    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">positif</div>',

    input: selectField(['rapprochement']),
    answers: [
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
        nextId: 'rapprochement',
      },
    ],


  },
  rapprochement: {
    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">positif</div>',
    input: selectField(['écartement']),
    answers: [
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
        nextId: 'ecartement',
      },
    ],

  },
  ecartement: {
    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">positif</div>',
    input: selectField(['test de cisaillement vertical']),
    answers: [
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
        nextId: 'vertical',
      },
    ],
  },
  vertical: {

    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">négatif</div>',

    answers:[{
      nextId:'conclusionexamen3'

    }]


  },
  conclusionexamen3:{
    botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">conclure : examen des sacro iliaques: Trois tests sur cinq sont positifs</div>',
      answers: [
      {
        nextId: 'listInPart2',
      },


    ],


  },


  // Fin de Examen des sacro-iliaques
  // Debut de Examen des articulations périphériques
  peripheriques: {
        botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">D\'accord</div>',



    input: selectField(['chercher une tuméfaction articulaire']),
    answers: [
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
        nextId: 'articulaire',
      },
    ],

  },
  articulaire: {

    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">pas de tuméfaction</div>',

    input: selectField(['mobilité articulaire']),
    answers: [
      {
        answer: 'mobilité articulaire',
        nextId: 'articulaire1',
      },
    ],

  },


  articulaire1: {

    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">indolore et non limité</div>',

    input: selectField(['mobilité des hanches']),
    answers: [
      {
        answer: 'mobilité des hanches',
        nextId: 'hanches',
      },
    ],

  },
  hanches: {

    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">130/10/45/30/45/30</div>',

    answers:[{
      nextId:'conclusionexamen4'

    }]


  },
  conclusionexamen4:{
    botPrompt: '<div style="height: auto;margin:-20px 0px 0px 0px;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">conclure : examen des articulations périphérique: les articulations sont libres et indolores</div>',
      answers: [
      {
        nextId: 'listInPart2',
      },


    ],


  },
  // Fin de Examen des articulations périphériques
  // Debut de Examen neurologique

  neurologique: {
        botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">D\'accord</div>',



    input: selectField(['deficit moteur ou sensitive']),
    answers: [
      {
        answer: 'deficit moteur ou sensitive',
        nextId: 'sensitive1',
      },
    ],


  },
  sensitive1: {
    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">non</div>',

    input: selectField(['réflexe ostéo-tendineux']),
    answers: [
      {
        answer: 'réflexe ostéo-tendineux',
        nextId: 'tendineux1',
      },
    ],


  },
  tendineux1: {
 botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">présents et symétriques</div>',

    input: selectField(['anesthésie en selle']),
    answers: [
      {
        answer: 'anesthésie en selle',
        nextId: 'selle1',
      },
    ],


  },
  selle1: {
    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">non</div>',

    answers:[{
      nextId:'conclusionexamen5'

    }]


  },
  conclusionexamen5:{
    botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">Examen neurologique sans anomalie</div>',
      answers: [
      {
        nextId: 'listInPart2',
      },


    ],


  },
  // Fin de Examen neurologique
  // Debut de Examen cardio pulmonaire
  pulmonaire: {
        botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">D\'accord</div>',



    input: selectField(['auscultation cardiaque']),
    answers: [
      {
        answer: 'auscultation cardiaque',
        nextId: 'cardiaque1',
      },
    ],
  },
  cardiaque1: {
    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">normale</div>',
    input: selectField(['ausculatation pulmonaire']),
    answers: [
      {
        answer: 'ausculatation pulmonaire',
        nextId: 'pulmonaire1',
      },
    ],

  },
  pulmonaire1: {
    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">normale</div>',
    answers:[{
      nextId:'conclusionexamen6'

    }]


  },
  conclusionexamen6:{
    botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">Examen cardio-pulmonaire sans anomalie</div>',
      answers: [
      {
        nextId: 'listInPart2',
      },


    ],


  },
  // Fin de Examen cardio pulmonaire
  // Debut de Examen abdomino pelvien
  pelvien: {
        botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">D\'accord</div>',



    input: selectField(['palpation']),
    answers: [
      {
        answer: 'palpation',
        nextId: 'palpation1',
      },
    ],
  },
  palpation1: {
    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">normale</div>',
    input: selectField(['viscéromégalie']),
    answers: [
      {
        answer: 'viscéromégalie',
        nextId: 'visceromégalie',
      },
    ],},
    visceromégalie:{
    botPrompt: '<div style="height:auto;margin:0px 0px -80px 0px;background-color:rgba(220, 42, 35, 0.1);border-radius: 10px;color:rgba(0, 0, 0,0.7)">normale</div>',
    answers:[{
      nextId:'conclusionexamen7'

    }]


  },
  conclusionexamen7:{
    botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">Examen abdomino-pelvien sans anomalie</div>',
      answers: [
      {
        nextId: 'listInPart2',
      },


    ],


  },


  // Partie 3
  partie3: {
  
    botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">Qu’elle est l’étape suivante, vous demandez …..</div>',

    input: selectField(['IRM rachidienne', 'Radiographie du bassin et du rachis lombaire face et profil', 'TDM des sacro-iliaque']),
    answers: [
      {
        answer: 'IRM rachidienne',
        nextId: 'mauvaiseReponse2',
      },
      {
        answer: 'Radiographie du bassin et du rachis lombaire face et profil',
        nextId: 'tofigue15',
      },
      {
        answer: 'TDM des sacro-iliaque',
        nextId: 'mauvaiseReponse2',
      },
    ],




  },
  mauvaiseReponse2:{
    botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:red;border-radius: 10px;color:white;font-weight: bold;">Mauvaise réponse, essayer de nouveau</div>',
    answers: [
      {
        nextId:'partie3'
      }

    ],


  },
  tofigue15: {
    botPrompt: 'https://firebasestorage.googleapis.com/v0/b/rheumatology-92f91.appspot.com/o/figure%2015.png?alt=media&token=5bc56fa8-c066-42cb-b93f-a54fe0cfd30f',
    type: RTypes.MEDIA,
    answers: [
      {
        nextId: 'tofigure16',
      },
    ],


  },
  tofigure16: {


    botPrompt: 'https://firebasestorage.googleapis.com/v0/b/rheumatology-92f91.appspot.com/o/figure%2016.png?alt=media&token=1753c982-4c3d-4814-8b52-d169d5e75b94',
    input: selectField([
      'Sacro-iliite bilatérale stade III et mise au carré des vertèbres',
      'Sacro-iliite droite avec aspect irrégulier des plateaux vertébraux de L4 L5',
      'Atteinte dégénérative des sacro-iliaques et discopathie dégénérative de L4L5',
      'Sacro-iliite bilatérale stade IV et mise au carré des vertèbres']),
    type: RTypes.MEDIA,
    answers: [
      {
        answer: 'Sacro-iliite bilatérale stade III et mise au carré des vertèbres',
        nextId: 'vertebres1',
      },
      {
        answer: 'Sacro-iliite droite avec aspect irrégulier des plateaux vertébraux de L4 L5',
        nextId: 'mauvaiseReponse3',
      },
      {
        answer: 'Atteinte dégénérative des sacro-iliaques et discopathie dégénérative de L4L5',
        nextId: 'mauvaiseReponse3',
      },
      {
        answer: 'Sacro-iliite bilatérale stade IV et mise au carré des vertèbres',
        nextId: 'mauvaiseReponse3',
      },
    ],



  },
  mauvaiseReponse3:{
    botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:red;border-radius: 10px;color:white;font-weight: bold;">Mauvaise réponse, essayer de nouveau</div>',
    answers: [
      {
        nextId:'tofigue15'
      }

    ],


  },
  vertebres1: {

    botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">Vous voulez prescrire un bilan biologique ?</div>',

    input: selectField([
      'VS, CRP, Typage HLA',

      'Bilan phosphocalcique',
      'Hémocultures']),

    answers: [
      {
        answer: 'VS, CRP, Typage HLA',
        nextId: 'greenResults',
      },
      {
        answer: 'Bilan phosphocalcique',
        nextId: 'mauvaiseReponse4',
      },
      {
        answer: 'Hémocultures',
        nextId: 'mauvaiseReponse4',
      },
    ],
  },
  mauvaiseReponse4:{
    botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:red;border-radius: 10px;color:white;font-weight: bold;">Mauvaise réponse, essayer de nouveau</div>',
    answers: [
      {
        nextId:'vertebres1'
      }

    ],


  },
  greenResults:{
    botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">HLA B27 <br> VS= 14 mm <br> CRP à 18 mg/l  </div>',
    answers:[{
      nextId:'CRP'

    }]


  },

  CRP: {

    botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:DarkGrey;border-radius: 10px;color:white;font-weight: bold;">Quel est votre diagnostic Dr ?</div>',

    input: selectField([
      'Spondylarthrite axiale radiographique',
      'Spondylarthrite axiale radiographique et enthésitique',
      'Spondylodiscite infectieuse ',
      'Lombosciatique commune']),

    answers: [
      {
        answer: 'Spondylarthrite axiale radiographique',
        nextId: 'mauvaiseReponse5',
      },
      {
        answer: 'Spondylarthrite axiale radiographique et enthésitique',
        nextId: 'vraireponse',
      },
      {
        answer: 'Spondylodiscite infectieuse ',
        nextId: 'mauvaiseReponse5',
      },
      {
        answer: 'Lombosciatique commune',
        nextId: 'mauvaiseReponse5',
      },
    ],


  },
  mauvaiseReponse5:{
    botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:red;border-radius: 10px;color:white;font-weight: bold;">Mauvaise réponse, essayer de nouveau</div>',
    answers: [
      {
        nextId:'CRP'
      }

    ],


  },
  vraireponse: {
    input: endOfConversation(),
    botPrompt: '<div style="height: auto;margin:-80px 0px 0px 0px;background-color:green;border-radius: 10px;color:white;font-weight: bold;">Bravo, bonne réponse. Mr Zied présente une spondylarthrite axiale radiographique et enthésitique.</div>',


    finishConversation: true,
    type: RTypes.TRANSFORMED_TEXT,
    varName: 'userName',
    answers: [
      {
        nextId: null,
      },
    ],
  }






















};


export default questions;
