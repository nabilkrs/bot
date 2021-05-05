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
   
  
  
    start: {
      botPrompt: 'I\'m <strong>custimizing</strong> this boot in order to use it in my own purpose',
      answers: [
        {
          nextId: 'question1',
        },
      ],
    },
    yourName: {
      botPrompt: 'chesmk?',
      input: textField(),
      answers: [
        {
          answer: common_greetings,
          nextId: 'greetings_notAName',
        },
        {
          answer: common_greetings_negative,
          catchName: true,
          nextId: 'asYouCanSee',
        },
      ],
    },
    greetings_notAName: {
        botPrompt: 'Hello! <strong>I\'m still learning how to talk to humans</strong>, which means my conversational range is not very wide yet... 😅',
        answers: [
          {
            nextId: 'greetings_whatsYourNameAgain',
          },
        ],
    },
    greetings_whatsYourNameAgain: {
        botPrompt: 'So <strong>chesmk?/strong>?',
        input: textField(),
        answers: [
          {
            answer: common_greetings,
            nextId: 'greetings_notAName',
          },
          {
            answer: common_greetings_negative,
            catchName: true,
            nextId: 'asYouCanSee',
          },
        ],
    },
    asYouCanSee: {
      botPrompt: 'So <strong>@varName</strong>,wnk labes',
      type: RTypes.TRANSFORMED_TEXT,
      varName: 'userName',
      answers: [
              { nextId: 'bagsSystem' },
      ],
    },
  
    bagsSystem: {
      botPrompt: "ayy bara nesselk chway ase2la",
      answers: [
              { nextId: 'question1' },
      ],
    },
    letsTryIt: {
      botPrompt: "ayy bara nabdou",
      answers: [
              { nextId: 'question1' },
      ],
    },
    //+++++++++++++ QUESTIONS AREA +++++++++++//
    question1: {
      botPrompt: 'sayeem?',
      type: RTypes.TRANSFORMED_TEXT,
      varName: 'userName',
      input: selectField(['eh', '3azga']),
      answers: [
        {
          answer: 'eh',
          nextId: 'cool',
          // sumToBags: [{ name: 'rickAndMorty', points: 3 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
        },
        {
          answer: '3azga',
          nextId: 'hmkay',
          // sumToBags: [{ name: 'shroedingersCat', points: 1 }, { name: 'recursion', points: 3 }],
        },
        
      ],
    },
    cool: {
      botPrompt: 'heyl ysr',
      answers: [
        {
          nextId: 'question2',
        },
      ],
    },
  
    hmkay: {
      botPrompt: 'khiih 3lik',
      answers: [
        {
          nextId: 'question2',
        },
      ],
    },
    question2: {
      botPrompt: 'wa9teeh toftor?',
      input: selectField(['7h', '10h', "chihemk"]),
      answers: [
        {
          answer: '7h',
          // shouldEstimateRecommendation: true,
          nextId: 'vrai',
          // sumToBags: [{ name: 'rickAndMorty', points: 3 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
        },
        {
          answer: '10h',
          // shouldEstimateRecommendation: true,
          nextId: 'faux',
          // sumToBags: [{ name: 'shroedingersCat', points: 1 }, { name: 'recursion', points: 1 }],
        },
        {
          answer: "chihemk",
          // shouldEstimateRecommendation: true,
          nextId: 'karrzet',
          // sumToBags: [{ name: 'karrzet', points: 2 }],
        },
      ],
    },
  
    karrzet: {
      botPrompt: '<strong>Game Over</strong>',
      // type: RTypes.MEDIA,
      finishConversation: true,
      answers: [
        {
          nextId: 'check_out1',
        },
      ],
    },
  
    vrai: {
      // input: endOfConversation(),
      botPrompt: 'rabbi yet9abll si <strong>@varName</strong>!',
      // finishConversation: true,
      type: RTypes.TRANSFORMED_TEXT,
      varName: 'userName',
      answers: [
        {
          nextId: 'vraimsg',
        },
      ],
    },
  
    vraimsg: {
      input: endOfConversation(),
      botPrompt: '<strong style="color:green">ijebtk s7i7a</strong>!',
      finishConversation: true,
      type: RTypes.TRANSFORMED_TEXT,
      varName: 'userName',
      answers: [
        {
          nextId: null,
        },
      ],
    },
  
  
  
  
  
  
    faux: {
      // input: endOfConversation(),
      botPrompt: 'ya <strong>@varName</strong> ya khoya ech tfallem!',
      type: RTypes.TRANSFORMED_TEXT,
      varName: 'userName',
      answers: [
        {
          nextId: 'msg',
        },
      ],
    },
    msg: {
      input: endOfConversation(),
      botPrompt: '<strong>ijebtk ghalta</strong>',
      type: RTypes.TRANSFORMED_TEXT,
      varName: 'userName',
      answers: [
        {
          nextId: null,
        },
      ],
    },
  
  
  
  
  
  
    rickAndMorty: {
      botPrompt: 'rabbi yet9abll si <strong>@varName</strong>!',
      type: RTypes.TRANSFORMED_TEXT,
      varName: 'userName',
      answers: [
        {
          nextId: null,
        },
      ],
    },
    gottaGive: {
      botPrompt: 'For demonstrative purposes I gotta give you some kind of recommendation, so...',
      answers: [
        {
          nextId: 'rickAndMorty2',
        },
      ],
    },
    rickAndMorty2: {
      botPrompt: "My best recommendation is you should go and watch something <a href='www.adultswim.com/videos/rick-and-morty/'>fun</a>!",
      answers: [
        {
          nextId: 'rickAndMorty3',
        },
      ],
    },
    rickAndMorty3: {
      botPrompt: 'https://media.giphy.com/media/l41lI4bYmcsPJX9Go/giphy.gif',
      finishConversation: true,
      type: RTypes.MEDIA,
      answers: [
        {
          nextId: 'check_out1',
        },
      ],
    },
    shroedingersCat: {
      botPrompt: "ya <strong>@varName</strong> ya khoya ech tfallem?",
      type: RTypes.TRANSFORMED_TEXT,
      varName: 'userName',
      answers: [
        {
          nextId: 'shroedingersCat2',
        },
      ],
    },
    shroedingersCat2: {
      botPrompt: 'https://media.giphy.com/media/XA4cpc6YbjPO/giphy.gif',
      type: RTypes.MEDIA,
      answers: [
        {
          nextId: 'shroedingersCat3',
        },
      ],
    },
    shroedingersCat3: {
      botPrompt: "It looks like you're in a sort of <strong>quantum-superposition state</strong>. You should really go out and figure out where (and when) you are at in your life... Cheers!",
      answers: [
        {
          nextId: 'check_out1',
          finishConversation: true,
        },
      ],
    },
    recursion: {
      botPrompt: 'https://media.giphy.com/media/l4HnKwiJJaJQB04Zq/giphy.gif',
      type: RTypes.MEDIA,
      answers: [
        {
          nextId: 'recursion2',
        },
      ],
    },
    recursion2: {
      botPrompt: "You're really a no-nonsense kind of type, huh?",
      answers: [
        {
          nextId: 'recursion3',
        },
      ],
    },
    recursion3: {
      botPrompt: "You know what else isn't any fun <strong>@varName</strong>?",
      type: RTypes.TRANSFORMED_TEXT,
      varName: 'userName',
      answers: [
        {
          nextId: 'recursion4',
        },
      ],
    },
    recursion4: {
      botPrompt: 'Recursion.',
      input: selectField(['What?', 'Yes', 'No', 'Stop It']),
      answers: [
        {
          answer: 'What?',
          nextId: 'recursion3',
        },
        {
          answer: 'Yes',
          nextId: 'recursion3',
        },
        {
          answer: 'No',
          nextId: 'recursion3',
        },
        {
          answer: 'Stop It',
          nextId: 'sorry',
        },
      ],
    },
    sorry: {
      botPrompt: 'https://media.giphy.com/media/l3Ucl5pIqSaGa82T6/giphy.gif',
      type: RTypes.MEDIA,
      finishConversation: true,
      answers: [
        {
          nextId: 'check_out1',
        },
      ],
    },
    check_out1: {
      botPrompt: '<strong>You selected the wrong response</strong>',
      answers: [
        {
          nextId: 'check_out2',
        },
      ],
    },
    check_out2: {
      botPrompt: '<strong>Click restart to start again</strong>',
      // type: RTypes.LINK,
      input: endOfConversation(),
      answers: [
        {
          nextId: 'check_out2',
        },
      ],
    },
  };
  
  
  export default questions;
  