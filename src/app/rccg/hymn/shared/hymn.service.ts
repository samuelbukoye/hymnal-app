import {Injectable} from '@angular/core'

@Injectable()

export class HymnService {

  

    getHymns(){
        return hymns
    }
    getHymn(no){
      return hymns.find(hymn => hymn.hymnNo === no)
    }
    
}


const hymns = [
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },
  {
    hymnNo:1,
    title:"How marvelous are you",
    category:'worship',
    metre: 'LM',
    bibleReference:'Romans 8:38-39',
    bibleReferenceQ:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    hymnToneUrl: '../../../assets/tones/rccg-hymn-1.m4a',
    hymnStanzards:[
      [
        'oh Lord of host',
        "how wonderful you are",
        "in all the whole earth",
        "how wonderful you are"
      ],
      [
        'abba father',
        "you made the world",
        "how loving you are",
        "unforgetable you are"
      ]
    ],
    hymnChorus:{
      '1':[
        "Thou art the potter,",
        "I am the clay",
        "Mold me and make me,",
        "After thy will",
        "While I am waiting,",
        "yeilded and still."
      ],
    }
  },
  {
    hymnNo:2,
    title:"Thy works are wonderous",
    category:'prayer',
    metre: 'CM',
    bibleReference:'Lamentations 3:22-23',
    bibleReferenceQ:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'My song forever shall record',
        'the tender mercies of the Lord',
        'thy faithfulness will I proclaim',
        'and every age shall know thy name',
        'I sing of mercies that endure',
        'forever builded firm and sure'
      ],
      [
        'roh thine own way, Lord! own way!',
        'Wounded and weary, help me I pray!',
        'Power, all power, surely is thine!',
        'Touch me and heal me, Savior divine!',
      ] 
    ]
  },
  {
    hymnNo:3,
    title:"how great thou art",
    category:'praise',
    metre: '8.6.8.6',
    bibleReference:'2 Corinthians 4:16-18',
    bibleReferenceQ:'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
    hymnToneUrl: '',
    hymnStanzards:[
      [
        'Almighty God, thy lofty throne',
        'has justice for its cornerstone',
        'and shining bright before thy face',
        'are truth and love and boundless grace',
        'The heavens shall join in glad accord',
        'to praise thy wondrous works, O Lord'

      ],
      [
        'thine own way, Lord! own way!',
        'Search me and try me, Savior today!',
        'Wash me just now, Lord, wash me just now,',
        'as in thy presence humbly I bow.',
      ]
    ]
  },
  {
    hymnNo:4,
    title:"Mighty man in battle",
    category:'praise',
    metre: 'LM',
    bibleReference:'Deuteronomy 31:6',
    bibleReferenceQ:'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.',
    hymnToneUrl:'',
    hymnStanzards:[
      [
        'Have thine own way, Lord! Have thine own way!',
        'Hold o’er my being absolute sway.',
        'Fill with thy Spirit till all shall see',
        'Christ only, always, living in me!',
      ],
      [
        'Have tne own way, Lord! Have tne own way!',
        'Thou art the potter, I am the clay.',
        'Mold me and make me after thy will,',
        'while I am waiting, yielded and still.'
      ]
    ]
  },

]