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
  inferieur: {
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
  douleur: {
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
  temps: {
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
  retournerGroupe6: {
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


  toux: {
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
  fesses: {
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
  reveil: {
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
  retournerGroupe7: {
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

  saucisse: {
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
  periode: {
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
  fievre: {
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

  retournerGroupe8: {
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






  associeesgr7: {
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
  nocturnesgr7: {
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
  debutgr7: {
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
  retournerGroupe9: {
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





  autres8: {
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
  dysurie8: {
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
  visuel8: {
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
  retournerGroupe10: {
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
  squameuses9: {
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
  diarrhee9: {
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
  traitement9: {
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
  moteur10: {
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
  impuissance10: {
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

  secondaires11: {
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
        nextId: 'listInPart2',

      }

    ],





  },
  mauvaiseReponse: {
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
  // Partie 2

  listInPart2: {
    botPrompt: 'D\'accord',
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
    botPrompt: 'effacement lordose',
    input: selectField(['Paplation']),
    answers: [
      {
        answer: 'Paplation',
        nextId: 'paplation',
      },


    ],





  },
  paplation: {
    botPrompt: 'épineuses lombaires douloureuses et Contracture des muscles para vertébraux',
    input: selectField(['sonnette']),

    answers: [
      {
        answer: 'sonnette',
        nextId: 'tofigure1',
      },
    ]



  },
  sonnette: {
    botPrompt: 'sonnette',
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
    botPrompt: 'négative',
    input: selectField(['Indice de Shober']),
    answers: [
      {
        answer: 'Indice de Shober',
        nextId: 'tofigure2',
      },


    ],



  },

  Shober: {
    botPrompt: '2 cm',
    input: selectField([':Distance doigts sol']),
    answers: [
      {
        answer: ':Distance doigts sol',
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
    botPrompt: '+10 cm',
    input: selectField(['lasegue']),
    answers: [
      {
        answer: 'lasegue',
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
    botPrompt: '100°',
    input: selectField(['examen du rachis lombaire : syndrome rachidien avec raideur segmentaire et sans signe de confit disco-radiculaire']),
    answers: [
      {
        answer: 'examen du rachis lombaire : syndrome rachidien avec raideur segmentaire et sans signe de confit disco-radiculaire',
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
    botPrompt: 'D\'accord',
    input: selectField(['déformation dans le plan sagital']),
    answers: [
      {
        answer: 'déformation dans le plan sagital',
        nextId: 'sagital',
      },


    ],





  },
  sagital: {
    botPrompt: 'non',
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
    botPrompt: 'non',
    input: selectField(['palpation']),
    answers: [
      {
        answer: 'palpation',
        nextId: 'palpation',
      },
    ],

  },
  palpation: {
    botPrompt: 'indolore',
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
    botPrompt: 'indolore et non limité',
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
    botPrompt: '3 cm',
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
    botPrompt: '5 cm',
    input: selectField([
      'examen du rachis entier: pas de limitation ou de douleur au niveau du rachis cervical et dorsal']),
    answers: [
      {
        answer: 'examen du rachis entier: pas de limitation ou de douleur au niveau du rachis cervical et dorsal',
        nextId: 'listInPart2',
      },
    ],



  },
  // Fin de examen rachi entier
  // Debut de Examen des sacro-iliaques

  iliaques: {
    botPrompt: 'D\'accord',
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
    botPrompt: 'douleur',
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
    botPrompt: 'positif',
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
    botPrompt: 'positif',
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
    botPrompt: 'positif',
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
    botPrompt: 'négatif',
    input: selectField(['examen des sacro iliaques: Trois tests sur cinq sont positifs']),
    answers: [
      {
        answer: 'examen des sacro iliaques: Trois tests sur cinq sont positifs',
        nextId: 'listInPart2',
      },
    ],

  },
  // Fin de Examen des sacro-iliaques
  // Debut de Examen des articulations périphériques
  peripheriques: {
    botPrompt: 'D\'accord',
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
    botPrompt: 'pas de tuméfaction',
    input: selectField(['mobilité articulaire']),
    answers: [
      {
        answer: 'mobilité articulaire',
        nextId: 'articulaire1',
      },
    ],

  },


  articulaire1: {
    botPrompt: 'indolore et non limité',
    input: selectField(['mobilité des hanches']),
    answers: [
      {
        answer: 'mobilité des hanches',
        nextId: 'hanches',
      },
    ],

  },
  hanches: {
    botPrompt: '130/10/45/30/45/30',
    input: selectField(['examen des articulations périphérique: les articulations sont libres et indolores']),
    answers: [
      {
        answer: 'examen des articulations périphérique: les articulations sont libres et indolores',
        nextId: 'listInPart2',
      },
    ],


  },
  // Fin de Examen des articulations périphériques
  // Debut de Examen neurologique

  neurologique: {
    botPrompt: 'D\'accord',
    input: selectField(['deficit moteur ou sensitive']),
    answers: [
      {
        answer: 'deficit moteur ou sensitive',
        nextId: 'sensitive1',
      },
    ],


  },
  sensitive1: {
    botPrompt: 'non',
    input: selectField(['réflexe ostéo-tendineux']),
    answers: [
      {
        answer: 'réflexe ostéo-tendineux',
        nextId: 'tendineux1',
      },
    ],


  },
  tendineux1: {
    botPrompt: 'présents et symétriques',
    input: selectField(['anesthésie en selle']),
    answers: [
      {
        answer: 'anesthésie en selle',
        nextId: 'selle1',
      },
    ],


  },
  selle1: {
    botPrompt: 'non',
    input: selectField(['D\'accord']),
    answers: [
      {
        answer: 'D\'accord',
        nextId: 'listInPart2',
      },
    ],

  },
  // Fin de Examen neurologique
  // Debut de Examen cardio pulmonaire
  pulmonaire: {
    botPrompt: 'D\'accord',
    input: selectField(['auscultation cardiaque']),
    answers: [
      {
        answer: 'auscultation cardiaque',
        nextId: 'cardiaque1',
      },
    ],
  },
  cardiaque1: {
    botPrompt: 'normale',
    input: selectField(['ausculatation pulmonaire']),
    answers: [
      {
        answer: 'ausculatation pulmonaire',
        nextId: 'pulmonaire1',
      },
    ],

  },
  pulmonaire1: {
    botPrompt: 'normale',
    input: selectField(['D\'accord']),
    answers: [
      {
        answer: 'D\'accord',
        nextId: 'listInPart2',
      },
    ],


  },
  // Fin de Examen cardio pulmonaire
  // Debut de Examen abdomino pelvien
  pelvien: {
    botPrompt: 'D\'accord',
    input: selectField(['palpation']),
    answers: [
      {
        answer: 'palpation',
        nextId: 'palpation1',
      },
    ],
  },
  palpation1: {
    botPrompt: 'normale',
    input: selectField(['viscéromégalie']),
    answers: [
      {
        answer: 'viscéromégalie',
        nextId: 'listInPart2',
      },
    ],
  },

  // Partie 3
  partie3: {
    botPrompt: 'qu’elle est l’étape suivante Dr',
    input: selectField(['IRM rachidienne', 'Radiographie du bassin et du rachis lombaire face et profil', 'TDM des sacro-iliaque']),
    answers: [
      {
        answer: 'IRM rachidienne',
        nextId: 'mauvaiseReponse',
      },
      {
        answer: 'Radiographie du bassin et du rachis lombaire face et profil',
        nextId: 'tofigue15',
      },
      {
        answer: 'TDM des sacro-iliaque',
        nextId: 'mauvaiseReponse',
      },
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
        nextId: 'mauvaiseReponse',
      },
      {
        answer: 'Atteinte dégénérative des sacro-iliaques et discopathie dégénérative de L4L5',
        nextId: 'mauvaiseReponse',
      },
      {
        answer: 'Sacro-iliite bilatérale stade IV et mise au carré des vertèbres',
        nextId: 'mauvaiseReponse',
      },
    ],



  },
  vertebres1: {
    botPrompt: 'dois-je faire un bilan biologique Dr ?',
    input: selectField([
      'VS, CRP',
      'Typage HLA',
      'Bilan phosphocalcique',
      'Hémocultures']),

    answers: [
      {
        answer: 'VS, CRP',
        nextId: 'CRP',
      },
      {
        answer: 'Typage HLA',
        nextId: 'CRP',
      },
      {
        answer: 'Bilan phosphocalcique',
        nextId: 'mauvaiseReponse',
      },
      {
        answer: 'Hémocultures',
        nextId: 'mauvaiseReponse',
      },
    ],
  },
  CRP: {
    botPrompt: 'quel est votre diagnostic Dr ?',
    input: selectField([
      'Spondylarthrite axiale radiographique',
      'Spondylarthrite axiale radiographique et enthésitique',
      'Spondylodiscite infectieuse ',
      'Lombosciatique commune']),

    answers: [
      {
        answer: 'Spondylarthrite axiale radiographique',
        nextId: 'mauvaiseReponse',
      },
      {
        answer: 'Spondylarthrite axiale radiographique et enthésitique',
        nextId: 'vraireponse',
      },
      {
        answer: 'Spondylodiscite infectieuse ',
        nextId: 'mauvaiseReponse',
      },
      {
        answer: 'Lombosciatique commune',
        nextId: 'mauvaiseReponse',
      },
    ],


  },
  vraireponse: {
    input: endOfConversation(),
    botPrompt: '<strong style="color:green">Bravo! Vous avez terminé le teste avec succès</strong>!',
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
