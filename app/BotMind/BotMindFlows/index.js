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
    botPrompt: 'Bonjour Dr.',

    answers: [
      {
        nextId: 'groupeone',
      },
    ],
  },
  // /////////////////////////
  // Groupe 1
  groupeone: {

    botPrompt: 'j’ai une douleur du rachis',
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
    botPrompt: 'D\'accord',
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
    botPrompt: '28 ans',
    input: selectField(['avez-vous des antécédents personnels de néoplasie, infection, psoriasis, MICI ?', 'êtes-vous fumeur ?', 'où avez-vous mal ?', 'Retourner aux réponses précidents']),
    answers: [
      {
        answer: 'avez-vous des antécédents personnels de néoplasie, infection, psoriasis, MICI ?',
        nextId: 'MICI',
      },
      {
        answer: 'êtes-vous fumeur ?',
        nextId: 'fumeur',
      },
      {
        answer: 'où avez-vous mal ?',
        nextId: 'mal',
      },
      {
        answer: 'Retourner aux réponses précidents',
        nextId: 'returnerGroupe1',

      }

    ],





  },
  profession: {
    botPrompt: 'Serveur',
    input: selectField(['avez-vous des antécédents personnels de néoplasie, infection, psoriasis, MICI ?', 'êtes-vous fumeur ?', 'où avez-vous mal ?', 'Retourner aux réponses précidents']),
    answers: [
      {
        answer: 'avez-vous des antécédents personnels de néoplasie, infection, psoriasis, MICI ?',
        nextId: 'MICI',
      },
      {
        answer: 'êtes-vous fumeur ?',
        nextId: 'fumeur',
      },
      {
        answer: 'où avez-vous mal ?',
        nextId: 'mal',
      },
      {
        answer: 'Retourner aux réponses précidents',
        nextId: 'returnerGroupe1',

      }

    ],




  },
  antecedents: {
    botPrompt: 'non',
    input: selectField(['avez-vous des antécédents personnels de néoplasie, infection, psoriasis, MICI ?', 'êtes-vous fumeur ?', 'où avez-vous mal ?', 'Retourner aux réponses précidents']),
    answers: [
      {
        answer: 'avez-vous des antécédents personnels de néoplasie, infection, psoriasis, MICI ?',
        nextId: 'MICI',
      },
      {
        answer: 'êtes-vous fumeur ?',
        nextId: 'fumeur',
      },
      {
        answer: 'où avez-vous mal ?',
        nextId: 'mal',
      },
      {
        answer: 'Retourner aux réponses précidents',
        nextId: 'returnerGroupe1',

      }

    ],




  },

  // Groupe 1
  // Groupe 2//////
  retournerGroupe2: {
    botPrompt: 'D\'accord',
    input: selectField(['avez-vous des antécédents personnels de néoplasie, infection, psoriasis, MICI ?', 'êtes-vous fumeur ?', 'où avez-vous mal ?', 'Retourner aux réponses précidents']),
    answers: [
      {
        answer: 'avez-vous des antécédents personnels de néoplasie, infection, psoriasis, MICI ?',
        nextId: 'MICI',
      },
      {
        answer: 'êtes-vous fumeur ?',
        nextId: 'fumeur',
      },
      {
        answer: 'où avez-vous mal ?',
        nextId: 'mal',
      },
      {
        answer: 'Retourner aux réponses précidents',
        nextId: 'returnerGroupe1',

      }

    ],



  },

  MICI: {
    botPrompt: 'non',
    input: selectField(['la douleur a commencé de façon brutale ?', 'Depuis combien de temps avez-vous ?', 'est-ce que la douleur évolue par poussée ?', 'Retourner aux réponses précidents']),
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
        answer: 'Retourner aux réponses précidents',
        nextId: 'retournerGroupe2',

      }

    ],





  },


  fumeur: {
    botPrompt: 'oui, je fume 1 paquet par jour depuis 10 ans',
    input: selectField(['la douleur a commencé de façon brutale ?', 'Depuis combien de temps avez-vous ?', 'est-ce que la douleur évolue par poussée ?', 'Retourner aux réponses précidents']),
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
        answer: 'Retourner aux réponses précidents',
        nextId: 'retournerGroupe2',

      }

    ],

  },
  mal: {
    botPrompt: 'au niveau du bas du dos',
    input: selectField(['la douleur a commencé de façon brutale ?', 'Depuis combien de temps avez-vous ?', 'est-ce que la douleur évolue par poussée ?', 'Retourner aux réponses précidents']),
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
        answer: 'Retourner aux réponses précidents',
        nextId: 'retournerGroupe2',

      }

    ],



  },

  // FIN Groupe 2//////
  //  Groupe 3/////
  retournerGroupe3: {
    botPrompt: 'D\'accord',
    input: selectField(['la douleur a commencé de façon brutale ?', 'Depuis combien de temps avez-vous ?', 'est-ce que la douleur évolue par poussée ?', 'Retourner aux réponses précidents']),
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
        answer: 'Retourner aux réponses précidents',
        nextId: 'retournerGroupe2',

      }

    ],



  },


  brutale: {
    botPrompt: 'non, petit à petit',
    input: selectField(['y at il un facteur déclenchant (traumatisme, faux mouvement, port de charge lourde) ?', 'comment est la douleur ? à type de crampes ou de fourmillements ?', 'pouvez vous chiffré cette douleur de 0 à 10 ?', 'Retourner aux réponses précidents']),
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
        answer: 'Retourner aux réponses précidents',
        nextId: 'retournerGroupe3',

      }

    ],





  },
  avezvous: {
    botPrompt: 'depuis 6 mois',
    input: selectField(['y at il un facteur déclenchant (traumatisme, faux mouvement, port de charge lourde) ?', 'comment est la douleur ? à type de crampes ou de fourmillements ?', 'pouvez vous chiffré cette douleur de 0 à 10 ?', 'Retourner aux réponses précidents']),
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
        answer: 'Retourner aux réponses précidents',
        nextId: 'retournerGroupe3',

      }

    ],



  },
  poussee: {
    botPrompt: 'oui, par poussée 2-3 mois',
    input: selectField(['y at il un facteur déclenchant (traumatisme, faux mouvement, port de charge lourde) ?', 'comment est la douleur ? à type de crampes ou de fourmillements ?', 'pouvez vous chiffré cette douleur de 0 à 10 ?', 'Retourner aux réponses précidents']),
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
        answer: 'Retourner aux réponses précidents',
        nextId: 'retournerGroupe3',

      }

    ],

  },
  // Fin Groupe 3/////
  retournerGroupe4: {
    botPrompt: 'D\'accord',
    input: selectField(['y at il un facteur déclenchant (traumatisme, faux mouvement, port de charge lourde) ?', 'comment est la douleur ? à type de crampes ou de fourmillements ?', 'pouvez vous chiffré cette douleur de 0 à 10 ?', 'Retourner aux réponses précidents']),
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
        answer: 'Retourner aux réponses précidents',
        nextId: 'retournerGroupe3',

      }

    ],



  },

  lourde: {
    botPrompt: 'non',
    input: selectField(['est ce que la douleur irradie au niveau du membre inférieur ?', 'quand sentez-vous cette douleur ?', 'vous vous sentez raide le matin ? Pendant combien de temps ?', 'Retourner aux réponses précidents']),
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
        answer: 'Retourner aux réponses précidents',
        nextId: 'retournerGroupe4',

      }

    ],




  },
  fourmillements: {
    botPrompt: 'à type de crampes',
    input: selectField(['est ce que la douleur irradie au niveau du membre inférieur ?', 'quand sentez-vous cette douleur ?', 'vous vous sentez raide le matin ? Pendant combien de temps ?', 'Retourner aux réponses précidents']),
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
        answer: 'Retourner aux réponses précidents',
        nextId: 'retournerGroupe4',

      }

    ],



  },
  ten: {
    botPrompt: '6/10',
    input: selectField(['est ce que la douleur irradie au niveau du membre inférieur ?', 'quand sentez-vous cette douleur ?', 'vous vous sentez raide le matin ? Pendant combien de temps ?', 'Retourner aux réponses précidents']),

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
        answer: 'Retourner aux réponses précidents',
        nextId: 'retournerGroupe4',

      }

    ],
  },
  // Fin Groupe 4/////
  // Groupe 5 /////
  retournerGroupe5: {
    botPrompt: 'D\'accord',
    input: selectField(['est ce que la douleur irradie au niveau du membre inférieur ?', 'quand sentez-vous cette douleur ?', 'vous vous sentez raide le matin ? Pendant combien de temps ?', 'Retourner aux réponses précidents']),
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
        answer: 'Retourner aux réponses précidents',
        nextId: 'retournerGroupe4',

      }

    ],



  },
  inferieur:{
    botPrompt: 'non',
    input: selectField(['est ce que cette douleur est impulsive à la toux ?', 'Avez-vous mal au niveau des fesses ?', 'avez-vous mal au niveau des talons, surtout le matin au réveil ?', 'Retourner aux réponses précidents']),
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
        answer: 'Retourner aux réponses précidents',
        nextId: 'retournerGroupe5',

      }

    ],



  },
  douleur:{
    botPrompt: 'surtout la 2ème moitié de la nuit et elle est calmée lors de l’activité physique',
    input: selectField(['est ce que cette douleur est impulsive à la toux ?', 'Avez-vous mal au niveau des fesses ?', 'avez-vous mal au niveau des talons, surtout le matin au réveil ?', 'Retourner aux réponses précidents']),
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
        answer: 'Retourner aux réponses précidents',
        nextId: 'retournerGroupe5',

      }

    ],


  },
  temps:{
    botPrompt: 'oui, 1h',
    input: selectField(['est ce que cette douleur est impulsive à la toux ?', 'Avez-vous mal au niveau des fesses ?', 'avez-vous mal au niveau des talons, surtout le matin au réveil ?', 'Retourner aux réponses précidents']),
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
        answer: 'Retourner aux réponses précidents',
        nextId: 'retournerGroupe5',

      }

    ],


  },
  // FIN GROUPE 5/////
  // GROUPE 6/////
  retournerGroupe6:{
    botPrompt: 'D\'accord',
    input: selectField(['est ce que cette douleur est impulsive à la toux ?', 'Avez-vous mal au niveau des fesses ?', 'avez-vous mal au niveau des talons, surtout le matin au réveil ?', 'Retourner aux réponses précidents']),
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
        answer: 'Retourner aux réponses précidents',
        nextId: 'retournerGroupe5',

      }

    ],



  },


toux:{
  botPrompt: 'non',
  input: selectField(['avez-vous présenté une tuméfaction d’un doigts ou d’un orteils en saucisse ?', 'sentez vous une asthénie ou une perte de l’appétit pendant cette période ?', 'avez-vous de la fièvre ?', 'Retourner aux réponses précidents']),
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
        answer: 'Retourner aux réponses précidents',
        nextId: 'retournerGroupe6',

      }

    ],




},
fesses:{
  botPrompt: 'oui, des 2 côtés me réveillant la 2ème moitié de la nuit',
  input: selectField(['avez-vous présenté une tuméfaction d’un doigts ou d’un orteils en saucisse ?', 'sentez vous une asthénie ou une perte de l’appétit pendant cette période ?', 'avez-vous de la fièvre ?', 'Retourner aux réponses précidents']),
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
      answer: 'Retourner aux réponses précidents',
      nextId: 'retournerGroupe6',

    }

  ],


},
reveil:{
  botPrompt: 'oui',
  input: selectField(['avez-vous présenté une tuméfaction d’un doigts ou d’un orteils en saucisse ?', 'sentez vous une asthénie ou une perte de l’appétit pendant cette période ?', 'avez-vous de la fièvre ?', 'Retourner aux réponses précidents']),
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
      answer: 'Retourner aux réponses précidents',
      nextId: 'retournerGroupe6',

    }

  ],


},

//FIN GROUPE 6 ////////
//GROUPE 7 /////
retournerGroupe7:{
  botPrompt: 'D\'accord',
  input: selectField(['avez-vous présenté une tuméfaction d’un doigts ou d’un orteils en saucisse ?', 'sentez vous une asthénie ou une perte de l’appétit pendant cette période ?', 'avez-vous de la fièvre ?', 'Retourner aux réponses précidents']),
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
      answer: 'Retourner aux réponses précidents',
      nextId: 'retournerGroupe6',

    }

  ],



},

saucisse:{
  botPrompt: 'oui',
  input: selectField(['sentez vous des douleurs articulaires ou musculaires associées ?', 'avez-vous des sueurs nocturnes ?', 'avez-vous présenté une infection récente (urétrite, diarrhée 1 mois avant le début) ?', 'Retourner aux réponses précidents']),
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
      answer: 'Retourner aux réponses précidents',
      nextId: 'retournerGroupe7',

    }

  ],




},
periode:{
  botPrompt: 'non',
  input: selectField(['sentez vous des douleurs articulaires ou musculaires associées ?', 'avez-vous des sueurs nocturnes ?', 'avez-vous présenté une infection récente (urétrite, diarrhée 1 mois avant le début) ?', 'Retourner aux réponses précidents']),
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
      answer: 'Retourner aux réponses précidents',
      nextId: 'retournerGroupe7',

    }

  ],


},
fievre:{
  botPrompt: 'non',
  input: selectField(['sentez vous des douleurs articulaires ou musculaires associées ?', 'avez-vous des sueurs nocturnes ?', 'avez-vous présenté une infection récente (urétrite, diarrhée 1 mois avant le début) ?', 'Retourner aux réponses précidents']),
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
      answer: 'Retourner aux réponses précidents',
      nextId: 'retournerGroupe7',

    }

  ],


},
// FIN GROUPE 7/////////
// GROUPE 8 /////

retournerGroupe8:{
  botPrompt: 'D\'accord',
  input: selectField(['sentez vous des douleurs articulaires ou musculaires associées ?', 'avez-vous des sueurs nocturnes ?', 'avez-vous présenté une infection récente (urétrite, diarrhée 1 mois avant le début) ?', 'Retourner aux réponses précidents']),
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
      answer: 'Retourner aux réponses précidents',
      nextId: 'retournerGroupe7',

    }

  ],



},






associeesgr7:{
botPrompt: 'non',
input: selectField(['avez-vous des brulures mictionnels, une toux ou autres ?', 'avez-vous une hématémèse, une hémoptysie ou une dysurie ?', 'avez-vous présenté une rougeur oculaire avec un flou visuel ?', 'Retourner aux réponses précidents']),
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
    answer: 'Retourner aux réponses précidents',
    nextId: 'retournerGroupe8',

  }

],


},
nocturnesgr7:{
botPrompt: 'non',
input: selectField(['avez-vous des brulures mictionnels, une toux ou autres ?', 'avez-vous une hématémèse, une hémoptysie ou une dysurie ?', 'avez-vous présenté une rougeur oculaire avec un flou visuel ?', 'Retourner aux réponses précidents']),
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
    answer: 'Retourner aux réponses précidents',
    nextId: 'retournerGroupe8',

  }

],


},
debutgr7:{
botPrompt: 'non',
input: selectField(['avez-vous des brulures mictionnels, une toux ou autres ?', 'avez-vous une hématémèse, une hémoptysie ou une dysurie ?', 'avez-vous présenté une rougeur oculaire avec un flou visuel ?', 'Retourner aux réponses précidents']),
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
    answer: 'Retourner aux réponses précidents',
    nextId: 'retournerGroupe8',

  }

],


},
// FIN GROUPE 8
// GROUPE 9
retournerGroupe9:{
  botPrompt: 'D\'accord',
  input: selectField(['avez-vous des brulures mictionnels, une toux ou autres ?', 'avez-vous une hématémèse, une hémoptysie ou une dysurie ?', 'avez-vous présenté une rougeur oculaire avec un flou visuel ?', 'Retourner aux réponses précidents']),
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
      answer: 'Retourner aux réponses précidents',
      nextId: 'retournerGroupe8',
  
    }
  
  ],



},





autres8:{
botPrompt: 'non',
input: selectField(['avez-vous des lésions cutanées squameuses ?', 'avez-vous une diarrhée ?', 'avez-vous reçu un traitement ?', 'Retourner aux réponses précidents']),
answers: [
  {
    answer: 'avez-vous des lésions cutanées squameuses ?',
    nextId: 'squameuses9',
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
    answer: 'Retourner aux réponses précidents',
    nextId: 'retournerGroupe9',

  }

],


},
dysurie8:{
botPrompt: 'non',
input: selectField(['avez-vous des lésions cutanées squameuses ?', 'avez-vous une diarrhée ?', 'avez-vous reçu un traitement ?', 'Retourner aux réponses précidents']),
answers: [
  {
    answer: 'avez-vous des lésions cutanées squameuses ?',
    nextId: 'squameuses9',
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
    answer: 'Retourner aux réponses précidents',
    nextId: 'retournerGroupe9',

  }

],


},
visuel8:{
botPrompt: 'non',
input: selectField(['avez-vous des lésions cutanées squameuses ?', 'avez-vous une diarrhée ?', 'avez-vous reçu un traitement ?', 'Retourner aux réponses précidents']),
answers: [
  {
    answer: 'avez-vous des lésions cutanées squameuses ?',
    nextId: 'squameuses9',
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
    answer: 'Retourner aux réponses précidents',
    nextId: 'retournerGroupe9',

  }

],


},
// FIN GROUPE 9
// GROUPE 10
retournerGroupe10:{
  botPrompt: 'D\'accord',
  input: selectField(['avez-vous des lésions cutanées squameuses ?', 'avez-vous une diarrhée ?', 'avez-vous reçu un traitement ?', 'Retourner aux réponses précidents']),
  answers: [
    {
      answer: 'avez-vous des lésions cutanées squameuses ?',
      nextId: 'squameuses9',
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
      answer: 'Retourner aux réponses précidents',
      nextId: 'retournerGroupe9',
  
    }
  
  ],



},
squameuses9:{
botPrompt: 'non',
input: selectField(['déficit moteur ?', 'fuite /rétention urinaire, incontinence anale, constipation, impuissance ?', 'Retourner aux réponses précidents']),
answers: [
  {
    answer: 'déficit moteur ?',
    nextId: 'moteur10',
  },
  {
    answer: 'fuite /rétention urinaire, incontinence anale, constipation, impuissance ?',
    nextId: 'impuissance10',
  },
  {
    answer: 'Retourner aux réponses précidents',
    nextId: 'retournerGroupe10',

  }

],


},
diarrhee9:{
botPrompt: 'non',
input: selectField(['déficit moteur ?', 'fuite /rétention urinaire, incontinence anale, constipation, impuissance ?', 'Retourner aux réponses précidents']),
answers: [
  {
    answer: 'déficit moteur ?',
    nextId: 'moteur10',
  },
  {
    answer: 'fuite /rétention urinaire, incontinence anale, constipation, impuissance ?',
    nextId: 'impuissance10',
  },
  {
    answer: 'Retourner aux réponses précidents',
    nextId: 'retournerGroupe10',

  }

],


},
traitement9:{
botPrompt: 'oui, des anti stéroïdiens de synthèse, avec une nette amélioration',
input: selectField(['déficit moteur ?', 'fuite /rétention urinaire, incontinence anale, constipation, impuissance ?', 'Retourner aux réponses précidents']),
answers: [
  {
    answer: 'déficit moteur ?',
    nextId: 'moteur10',
  },
  {
    answer: 'fuite /rétention urinaire, incontinence anale, constipation, impuissance ?',
    nextId: 'impuissance10',
  },
  {
    answer: 'Retourner aux réponses précidents',
    nextId: 'retournerGroupe10',

  }

],


},
// FIN GROUPE 10
// GROUPE 11
moteur10:{
botPrompt: 'non',
input: selectField(['Vous êtes devant un tableau de lombalgies secondaires', 'Vous êtes devant un tableau de lombalgies communes']),
answers: [
  {
    answer: 'Vous êtes devant un tableau de lombalgies secondaires',
    nextId: 'secondaires11',
  },
  {
    answer: 'Vous êtes devant un tableau de lombalgies communes',
    nextId: 'communes11',
  },

],


},
impuissance10:{
botPrompt: 'non',
input: selectField(['Vous êtes devant un tableau de lombalgies secondaires', 'Vous êtes devant un tableau de lombalgies communes']),
answers: [
  {
    answer: 'Vous êtes devant un tableau de lombalgies secondaires',
    nextId: 'secondaires11',
  },
  {
    answer: 'Vous êtes devant un tableau de lombalgies communes',
    nextId: 'mauvaiseReponse',
  },

],


},

//FIN GROUPE 11 
// QUESTION 1

secondaires11:{
  botPrompt: 'Que faire Dr ?',
  input: selectField(['continuer le traitement', 'faire une IRM du rachis', 'examiner votre patient']),
answers: [
  {
    answer: 'continuer le traitement',
    nextId: 'mauvaiseReponse',
  },
  {
    answer: 'faire une IRM du rachis',
    nextId: 'mauvaiseReponse',
  },
  {
    answer: 'examiner votre patient',
    nextId: 'firstInPart2',

  }

],





},
mauvaiseReponse:{
  input: endOfConversation(),
  botPrompt: '<strong>vous choisissez la mauvaise réponse, vous devez répéter</strong>',
  type: RTypes.TRANSFORMED_TEXT,
  varName: 'userName',
  answers: [
    {
      nextId: null,
    },
  ],





},

firstInPart2:{

}



























};


export default questions;
