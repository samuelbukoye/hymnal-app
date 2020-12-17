import {Injectable} from '@angular/core'
import {IHymn} from '../shared/hymn'

@Injectable({
  providedIn : 'root'
})

export class HymnService {
  getHymns(){
      return hymns
  }
  getHymn(no: string){
    return hymns.find(hymn => hymn.hymnNo === no)
  }
  getLength(){
    return hymns.length
  }
  
}

const hymns : IHymn[] = [
  {
    "hymnNo": "1",
    "title": "All Your Anxiety",
    "category": "admonition",
    "hymnChorus": [
      "All your anxiety, all your care,",
      "Bring to the mercy seat--leave it there;",
      "Never a burden He cannot bear,",
      "Never a friend like Jesus."
    ],
    "hymnStanzards": [
      [
        "Is there a heart o'er-bound by sorrow?",
        "Is there a life weighed down by care?",
        "Come to the cross--each burden bearing,",
        "All your anxiety--leave it there."
      ],
      [
        "No other friend so keen to help you,",
        "No other friend so quick to hear;",
        "No other place to leave your burden,",
        "No other one to hear your prayer."
      ],
      [
        "Come then at once--delay no longer!",
        "Heed His entreaty kind and sweet;",
        "You need not fear a disappointment--",
        "You shall find peace at the mercy seat."
      ]
    ]
  },
  {
    "hymnNo": "2",
    "title": "Come Unto Me",
    "category": "admonition",
    "hymnChorus": [
      "Come unto me; I will give you rest;",
      "Take My yoke upon you, hear Me and be blest;",
      "I am meek and lowly, come and trust My might;",
      "Come, My yoke is easy, and My burden's light."
    ],
    "hymnStanzards": [
      [
        "Hear the blessed Saviour Calling the oppressed,",
        "\"O ye heavy laden, come to me and rest;",
        "Come, no longer tarry, I your load will bear,",
        "Bring Me ev'ry burden, bring me ev'ry care\"."
      ],
      [
        "Are you disappointed, wand'ring here and there,",
        "Dragging chains of doubt and loaded down with care?",
        "Do unholy feelings struggle in your breast?",
        "Bring your case to Jesus, He will give you rest."
      ],
      [
        "Stumbling on the mountains dark with sin and shame, ",
        "Stumbling tow'rd the pit of hell's consuming flames,",
        "By the pow'rs of sin deluded and oppressed,",
        "Hear the tender Shepherd, \"Come to Me and rest\""
      ],
      [
        "Have you cares of business, cares of pressing debt?",
        "Cares of social life or cares of hope unmet?",
        "Are you by remorse of sense of guilt depressed,",
        "Come right to Jesus, He will give you rest."
      ],
      [
        "Have you by temptations often conquered been,",
        "Has a sense of weakness brought distress within?",
        "Christ will sanctify you, if you'll claim His best,",
        "In the Holy Spirit, He will give you rest."
      ]
    ]
  },
  {
    "hymnNo": "3",
    "title": "Impatient Heart Be Still",
    "category": "admonition",
    "hymnChorus": [
      "Be still! Be still!",
      "Impatient heart be still!"
    ],
    "hymnStanzards": [
      [
        "Impatient heart, be still!",
        "What though He tarries long?",
        "What though the triumph song",
        "Is still (is still) delayed?",
        "Thou hast His promise sure,",
        "And that is all secure;",
        "Be not afraid! Be not afraid!"
      ],
      [
        "My eager heart, be still!",
        "Thy Lord will surely come,",
        "And take thee to His home,",
        "With Him (with Him) to dwell;",
        "It may not be today;",
        "And yet, my soul, it may;",
        "I cannot tell, I cannot tell."
      ],
      [
        "My anxious heart, be still!",
        "Watch, work, and pray, and then",
        "It will not matter when",
        "Thy Lord (Thy Lord) shall come;",
        "At midnight, or at noon;",
        "He cannot come too soon",
        "To take thee home, to take thee home.",
        ""
      ]
    ]
  },
  {
    "hymnNo": "4",
    "title": "Leave It There",
    "category": "admonition",
    "hymnChorus": [
      "Leave it there, leave it there,",
      "Take your burden to the Lord and leave it there.",
      "If you trust and never doubt, He will surely bring you out.",
      "Take your burden to the Lord and leave it there."
    ],
    "hymnStanzards": [
      [
        "If the world from you withhold of its silver and its gold,",
        "And you have to get along with meager fare,",
        "Just remember, in His Word, how He feeds the little bird;",
        "Take your burden to the Lord and leave it there."
      ],
      [
        "If your body suffers pain and your health you can’t regain,",
        "And your soul is almost sinking in despair,",
        "Jesus knows the pain you feel, He can save and He can heal;",
        "Take your burden to the Lord and leave it there."
      ],
      [
        "When your enemies assail and your heart begins to fail,",
        "Don’t forget that God in Heaven answers prayer;",
        "He will make a way for you and will lead you safely through.",
        "Take your burden to the Lord and leave it there."
      ],
      [
        "When your youthful days are gone and old age is stealing on,",
        "And your body bends beneath the weight of care;",
        "He will never leave you then, He’ll go with you to the end.",
        "Take your burden to the Lord and leave it there.",
        ""
      ]
    ]
  },
  {
    "hymnNo": "5",
    "title": "Never Give Up",
    "category": "admonition",
    "hymnChorus": [
      "Never give up, never give up,",
      "Never give up to thy sorrows,",
      "Jesus will bid them depart.",
      "Trust in the Lord, trust in the Lord,",
      "Sing when your trials are greatest,",
      "Trust in the Lord and take heart."
    ],
    "hymnStanzards": [
      [
        "Never be sad or desponding,",
        "If thou hast faith to believe.",
        "Grace, for the duties before thee,",
        "Ask of thy God and receive."
      ],
      [
        "What if thy burdens oppress thee;",
        "What though thy life may be drear;",
        "Look on the side that is brightest,",
        "Pray, and thy path will be clear."
      ],
      [
        "Never be sad or desponding,",
        "There is a morrow for thee;",
        "Soon thou shalt dwell in its brightness,",
        "There with the Lord thou shalt be."
      ],
      [
        "Never be sad or desponding,",
        "Lean on the arm of thy Lord;",
        "Dwell in the depths of His mercy,",
        "Thou shalt receive thy reward."
      ],
      [
        ""
      ]
    ]
  },
  {
    "hymnNo": "6",
    "title": "Yield Not To Temptation",
    "category": "admonition",
    "hymnChorus": [
      "Ask the Saviour to help you;",
      "Comfort, strengthen and keep you;",
      "He's willing to aid you,",
      "He will carry you through."
    ],
    "hymnStanzards": [
      [
        "Yield not to temptation, for yielding is sin;",
        "Each victory will help you some other to win;",
        "Fight manfully onward, dark passions subdue;",
        "Look ever to Jesus, He'll carry you through."
      ],
      [
        "Shun evil companions, bad language disdain;",
        "God's name hold in reverence, nor take it in vain;",
        "Be thoughtful and earnest, kind-hearted and true;",
        "Look ever to Jesus, He'll carry you through."
      ],
      [
        "To him that o'ercometh, God giveth a crown;",
        "Through faith we will conquer, though often cast down;",
        "He who is our Saviour, our strength will renew;",
        "Look ever to Jesus, He'll carry you through."
      ]
    ]
  },
  {
    "hymnNo": "7",
    "title": "Turn Your Eyes Unto Jesus",
    "category": "admonition",
    "hymnChorus": [
      "Turn your eyes upon Jesus,",
      "Look full in His wonderful face,",
      "And the things of earth will grow strangely dim,",
      "In the light of His glory and grace."
    ],
    "hymnStanzards": [
      [
        "O soul, are you weary and troubled?",
        "No light in the darkness you see?",
        "There’s a light for a look at the Savior,",
        "And life more abundant and free!"
      ],
      [
        "Through death into life everlasting",
        "He passed, and we follow Him there;",
        "Over us sin no more hath dominion—",
        "For more than conquerors we are!"
      ],
      [
        "His Word shall not fail you—He promised;",
        "Believe Him, and all will be well:",
        "Then go to a world that is dying,",
        "His perfect salvation to tell!"
      ]
    ]
  },
  {
    "hymnNo": "8",
    "title": "Blessed Be The Name",
    "category": "adoration",
    "hymnChorus": [
      "Blessed be the name, ",
      "Blessed be the name, ",
      "Blessed be the name of the Lord,",
      "Blessed be the name, ",
      "Blessed be the name, ",
      "Blessed be the name of the Lord,"
    ],
    "hymnStanzards": [
      [
        "O for a thousand tonngues to sing, ",
        "Blessed be the name of the Lord!",
        "The glories of my God and King!",
        "Blessed be the name of the Lord"
      ],
      [
        "Jesus! The name that charms our fears,",
        "Blessed be the name og the lord!",
        "'Tis music in the sinner's ears,",
        "Blessed be the name of the Lord"
      ],
      [
        "He breaks the pow'r of cancelled sin,",
        "Blessed be the Name of the Lord!",
        "His blood can make the foulest clean,",
        "Blessed be the Name of the Lord!"
      ],
      [
        "I never shall forget that day",
        "Blessed be the name of the Lord! ",
        "When Jesus washed my sins away, ",
        "Blessed be the Name of the Lord"
      ]
    ]
  },
  {
    "hymnNo": "9",
    "title": "Great Is Thy Faithfulness",
    "category": "adoration",
    "hymnChorus": [
      "Great is Thy faithfulness! Great is Thy faithfulness!",
      "Morning by morning new mercies I see;",
      "All I have needed Thy hand hath provided,",
      "Great is Thy faithfulness, Lord, unto me!"
    ],
    "hymnStanzards": [
      [
        "Great is Thy faithfulness, O God my Father,",
        "There is no shadow of turning with Thee;",
        "Thou changest not, Thy compassions they fail not,",
        "As Thou hast been Thou for ever wilt be."
      ],
      [
        "Summer and winter, and spring-time and harvest,",
        "Sun, moon and stars in their courses above,",
        "Join with all nature in manifold witness",
        "To Thy great faithfulness, mercy and love."
      ],
      [
        "Pardon for sin and a peace that endureth,",
        "Thine own dear presence to cheer and to guide;",
        "Strength for today and bright hope for tomorrow,",
        "Blessings all mine, with ten thousand beside!"
      ]
    ]
  },
  {
    "hymnNo": "10",
    "title": "Oh For A Thousand",
    "category": "adoration",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "O for a thousand tongues to sing",
        "My great Redeemer’s praise,",
        "The glories of my God and King,",
        "The triumphs of His grace."
      ],
      [
        "Jesus! the name that charms our fears,",
        "That bids our sorrows cease;",
        "’Tis music in the sinner’s ears,",
        "’Tis life, and health, and peace."
      ],
      [
        "His love my heart has captive made,",
        "His captive would I be,",
        "For He was bound, and scourged and died,",
        "My captive soul to free."
      ],
      [
        "He breaks the power of canceled sin,",
        "He sets the prisoner free;",
        "His blood can make the foulest clean;",
        "His blood availed for me."
      ],
      [
        "So now Thy blessed Name I love,",
        "Thy will would e’er be mine.",
        "Had I a thousand hearts to give,",
        "My Lord, they all were Thine!"
      ]
    ]
  },
  {
    "hymnNo": "11",
    "title": "Holy Holy Holy",
    "category": "adoration",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Holy, holy, holy, Lord God Almighty!",
        "Early in the morning our song shall rise to Thee;",
        "Holy, holy, holy, merciful and mighty!",
        "God in Three Persons, blessed Trinity."
      ],
      [
        "Holy, holy, holy, though the darkness hide Thee,",
        "Though the eye of sinful man Thy glory may not see,",
        "Only Thou art holy; there is none beside Thee,",
        "Perfect in power, in love, and purity."
      ],
      [
        "Holy, holy, holy, Lord God Almighty!",
        "All Thy works shall praise Thy name, in earth, and sky, and sea!",
        "Holy, holy, holy, merciful and mighty!",
        "God in Three Persons, blessed Trinity."
      ]
    ]
  },
  {
    "hymnNo": "12",
    "title": "Praise Him Praise Him Jesus Our Blessed",
    "category": "adoration",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Praise Him! Praise Him! Jesus our blessed Redeemer,",
        "Sing, O earth, His wonderful love proclaim;",
        "Hail Him! Hail Him! Highest archangels in glory,",
        "Strength and honour give to His holy name.",
        "Like a shepherd, Jesus will guard His children,",
        "In His arms He carries them all day long;",
        "O ye saints that dwell on the mountain of Zion,",
        "Praise Him! Praise Him! Ever in joyful song."
      ],
      [
        "Praise Him! Praise Him! Jesus our blessed Redeemer,",
        "Heav'nly portals, loud with hosannas ring;",
        "Jesus, Saviour, reigneth forever and ever,",
        "Crown Him! Crown Him! Prophet and Priest and King!",
        "Death is vanquished! Tell it with joy, ye faithful,",
        "Where is now thy victory, boasting grave?",
        "Jesus lives! No longer thy portals are cheerless,",
        "Jesus lives, the mighty and strong to save."
      ]
    ]
  },
  {
    "hymnNo": "13",
    "title": "To God Be The Glory",
    "category": "adoration",
    "hymnChorus": [
      "Praise the Lord! Praise the Lord!",
      "Let the earth hear His voice!",
      "Praise the Lord! Praise the Lord!",
      "Let the people rejoice!",
      "Oh come to the Father, through Jesus the Son,",
      "And give Him the glory; great things He hath done."
    ],
    "hymnStanzards": [
      [
        "To God be the glory, great things He hath done,",
        "So loved He the world that He gave us His Son,",
        "Who yielded His life an atonement for sin,",
        "And opened the life gate that all may go in."
      ],
      [
        "O perfect redemption, the purchase of blood,",
        "To ev'ry believer the promise of God;",
        "The vilest offender who truly believes,",
        "That moment from Jesus a pardon receives."
      ],
      [
        "Great things He hath taught us, great things He hath done,",
        "And great our rejoicing through Jesus the Son;",
        "But purer, and higher, and greater will be,",
        "Our wonder, our transport when Jesus we see."
      ]
    ]
  },
  {
    "hymnNo": "14",
    "title": "How Great Thou Art",
    "category": "adoration",
    "hymnChorus": [
      "Then sings my soul, my Saviour God, to Thee,",
      "How great Thou art! How great Thou art!",
      "Then sings my soul, my Saviour God, to Thee,",
      "How great Thou art! How great Thou art!"
    ],
    "hymnStanzards": [
      [
        "O Lord my God! When I in awesome wonder",
        "Consider all the works Thy hand hath made,",
        "I see the stars, I hear the mighty thunder,",
        "Thy power throughout the universe displayed."
      ],
      [
        "When through the woods and forest glades I wander",
        "And hear the birds sing sweetly in the trees;",
        "When I look down from lofty mountain grandeur,",
        "And hear the brook, and feel the gentle breeze."
      ],
      [
        "And when I think that God His Son not sparing,",
        "Sent Him to die - I scarce can take it in.",
        "That on the Cross my burden gladly bearing,",
        "He bled and died to take away my sin."
      ],
      [
        "When Christ shall come with shout of acclamation",
        "And take me home - what joy shall fill my heart!",
        "Then shall I bow in humble adoration",
        "And there proclaim, my God, how great Thou art!"
      ]
    ]
  },
  {
    "hymnNo": "15",
    "title": "O Worship The King",
    "category": "adoration",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "O worship the King, all glorious above,",
        "O gratefully sing His power and His love;",
        "Our Shield and Defender, the Ancient of Days,",
        "Pavillion'd in splendour, and girded with praise."
      ],
      [
        "Thy bountiful care, what tongue can recite?",
        "It breathes in the air, it shines in the light,",
        "It streams from the hills, it descends to the plain,",
        "And sweetly distils in the dew and the rain."
      ],
      [
        "Frail children of dust, and feeble as frail;",
        "In Thee do we trust, nor find Thee to fail;",
        "Thy mercies, how tender, how firm to the end,",
        "Our Maker, Defender, Redeemer, and Friend!"
      ],
      [
        "O measureless Might! Ineffable Love!",
        "While angels delight to hymn Thee above,",
        "The humbler creation, though feeble their lays,",
        "With true adoration shall lisp to Thy praise."
      ]
    ]
  },
  {
    "hymnNo": "16",
    "title": "If God Be For Us",
    "category": "assurance & confidence",
    "hymnChorus": [
      "\"If God be for us, if God be for us,",
      "If God be for us, who can be against us? ",
      "Who? Who? Who?",
      "Who can be against us, against us?\""
    ],
    "hymnStanzards": [
      [
        "Rejoice in the Lord! Oh, let His mercy cheer; ",
        "He sunders the bands that enthral;",
        "Redeem'd by His blood why should we ever fear ",
        "Since Jesus is our \"all in all\"?"
      ],
      [
        "Be strong in the Lord! rejoicing in His might,",
        "Be loyal and true day by day; ",
        "When evils assail, be valiant for the right, ",
        "And He will be our strength and stay."
      ],
      [
        "Confide in His word - His promises so sure;",
        "In Christ they are \"yea and amen;\"",
        "Though earth pass away, they ever shall endure,",
        "'Tis written o'er and o'er again."
      ],
      [
        "Abide in the Lord; secure in His control, ",
        "'Tis life everlasting begun; ",
        "To pluck from His hand the weakest, trembling soul- ",
        "It never, never can be done!"
      ]
    ]
  },
  {
    "hymnNo": "17",
    "title": "Nothing But The Blood",
    "category": "assurance & confidence",
    "hymnChorus": [
      "Oh! precious is the flow",
      "That makes me white as snow;",
      "No other fount I know,",
      "Nothing but the blood of Jesus."
    ],
    "hymnStanzards": [
      [
        "What can wash away my sin?",
        "Nothing but the blood of Jesus;",
        "What can make me whole again?",
        "Nothing but the blood of Jesus."
      ],
      [
        "For my pardon, this I see,",
        "Nothing but the blood of Jesus;",
        "For my cleansing this my plea,",
        "Nothing but the blood of Jesus."
      ],
      [
        "Nothing can for sin atone,",
        "Nothing but the blood of Jesus;",
        "Naught of good that I have done,",
        "Nothing but the blood of Jesus."
      ],
      [
        "This is all my hope and peace,",
        "Nothing but the blood of Jesus;",
        "This is all my righteousness,",
        "Nothing but the blood of Jesus."
      ],
      [
        "Now by this I'll overcome—",
        "Nothing but the blood of Jesus,",
        "Now by this I'll reach my home—",
        "Nothing but the blood of Jesus."
      ],
      [
        "Glory! Glory! This I sing—",
        "Nothing but the blood of Jesus,",
        "All my praise for this I bring—",
        "Nothing but the blood of Jesus."
      ]
    ]
  },
  {
    "hymnNo": "18",
    "title": "Blessed Assurance",
    "category": "assurance & confidence",
    "hymnChorus": [
      "This is my story, this is my song,",
      "Praising my Saviour all the day long;",
      "This is my story, this is my song,",
      "Praising my Saviour all the day long."
    ],
    "hymnStanzards": [
      [
        "Blessed assurance, Jesus is mine!",
        "Oh, what a foretaste of glory divine!",
        "Heir of salvation, purchase of God,",
        "Born of His Spirit, washed in His blood."
      ],
      [
        "Perfect submission, perfect delight,",
        "Visions of rapture now burst on my sight;",
        "Angels descending, bring from above",
        "Echoes of mercy, whispers of love."
      ],
      [
        "Perfect submission, all is at rest,",
        "I in my Saviour am happy and blest;",
        "Watching and waiting, looking above,",
        "Filled with His goodness, lost in His love."
      ]
    ]
  },
  {
    "hymnNo": "19",
    "title": "Christ Jesus Hath The Power",
    "category": "assurance & confidence",
    "hymnChorus": [
      "Christ Jesus hath the pow'r, ",
      "the pow'r of God He wields!",
      "Christ Jesus hath the pow'r,",
      " my heart surrender yields!",
      "Christ Jesus hath the pow'r,",
      "I trust Him evermore!",
      "Christ Jesus hath the pow'r,",
      "I worship and adore!"
    ],
    "hymnStanzards": [
      [
        "Christ Jesus hath the power, the power to forgive,",
        "The pow'r to quicken whom He will and make the sinner live.",
        "Christ Jesus hath the pow'r, O tell it far and near!",
        "O bring to Him your guilty heart, and grace shall banish fear!"
      ],
      [
        "Christ Jesus hath the pow'r, the power to renew,",
        "The pow'r to cleanse your heart from sin, and make you wholly true.",
        "Christ Jesus hath the pow'r for evermore to keep:",
        "O none can pluck you from His hand or rob Him of His sheep!"
      ],
      [
        "Christ Jesus hath the pow'r, the power to console,",
        "The pow'r to carry all your care - on Him your burdens roll.",
        "Christ Jesus hath the pow'r to wipe the tear away:",
        "O place in Him your confidence! O trust Him and obey!"
      ],
      [
        "Christ Jesus hath the pow'r, the power to destroy,",
        "The pow'r to bruise your enemy, who would your soul annoy.",
        "Christ Jesus hath the pow'r, when on your dying bed,",
        "To give your soul the victory, the pow'r to raise the dead!"
      ]
    ]
  },
  {
    "hymnNo": "20",
    "title": "The Way The Truth The Life",
    "category": "assurance & confidence",
    "hymnChorus": [
      "“I am the Way, the Truth, and the Life,",
      "No man cometh unto the Father but by Me.”",
      "“I am the Way, the Truth, and the Life,",
      "No man cometh unto the Father but by Me.”"
    ],
    "hymnStanzards": [
      [
        "1 “I am the Way,” the Saviour said,",
        "And I would follow on,",
        "Content to know that after night",
        "Shall break a glorious dawn."
      ],
      [
        "“I am the Truth;” then Truth shall be",
        "A beacon light to guide",
        "My bark across the stormy sea",
        "To where still waters glide."
      ],
      [
        "“I am the Life,” there is no death",
        "For me to fear, nor dread,",
        "Since by His all-atoning blood",
        "My life to His is wed."
      ]
    ]
  },
  {
    "hymnNo": "21",
    "title": "Will Your Anchor Hold",
    "category": "assurance & confidence",
    "hymnChorus": [
      "We have an anchor that keeps the soul",
      "Steadfast and sure while the billows roll:",
      "Fasten'd to the Rock which cannot move,",
      "Grounded firm and deep in the Saviour's love!"
    ],
    "hymnStanzards": [
      [
        " ",
        " Will your anchor hold in the storms of life?",
        " When the clouds unfold their wings of strife;",
        " When the strong tides lift and the cables strain,",
        " Will your anchor drift, or firm remain?",
        " ",
        "    We have an anchor that keeps the soul",
        "    Steadfast and sure while the billows roll:",
        "    Fasten'd to the Rock which cannot move,",
        "    Grounded firm and deep in the Saviour's love!",
        " ",
        " It is safely moored 'twill the storms withstand,",
        " For 'tis well secured by the Saviour's hand;",
        " And the cables passed from His heart to mine,",
        " Can defy the blast through strength divine.",
        " ",
        " It will firmly hold in the straits of fear,",
        " When the breakers have told the reef is near,",
        " Though the tempest rave and the wild winds blow,",
        " Not an angry wave shall our bark o'erflow.",
        " ",
        " It will surely hold in the floods of death,",
        " When the waters cold, chill our latest breath,",
        " On the rising tide it can never fail,",
        " While our hopes abide within the veil!",
        " ",
        " When our eyes behold, through the gathering night",
        " The city of gold, our harbour bright,",
        " We shall anchor fast by the heavenly shore,",
        " With the storms all past for evermore.",
        " "
      ],
      [
        " ",
        " ",
        ""
      ]
    ]
  },
  {
    "hymnNo": "22",
    "title": "Simply Trusting Everyday",
    "category": "assurance & confidence",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Simply trusting every day;",
        "Trusting through a stormy way;",
        "Even when my faith is small,",
        "Trusting Jesus, that is all"
      ],
      [
        "Brightly doth His Spirit shine",
        "Into this poor heart of mine;",
        "While He leads I cannot fall,",
        "Trusting Jesus, that is all."
      ],
      [
        "Singing if my way be clear,",
        "Praying if the path be drear;",
        "If in danger, for Him call,",
        "Trusting Jesus, that is all."
      ],
      [
        "Trusting Him while life shall last,",
        "Trusting Him till earth is past,",
        "Till His gracious advent call,",
        "Trusting Jesus, that is all."
      ]
    ]
  },
  {
    "hymnNo": "23",
    "title": "No Other Plea",
    "category": "assurance & confidence",
    "hymnChorus": [
      "I need no other argument.",
      "I need no other plea,",
      "It is enough that Jesus died,",
      "And that He died for me."
    ],
    "hymnStanzards": [
      [
        "My faith has found a resting place,",
        "Not in device nor creed;",
        "I trust the ever Living One,",
        "His wounds for me shall plead."
      ],
      [
        "Enough for me that Jesus saves,",
        "This ends my fear and doubt;",
        "A sinful soul I come to Him,",
        "He'll never cast me out."
      ],
      [
        "My heart is leaning on the Word,",
        "The written Word of God,",
        "Salvation by my Saviour's Name,",
        "Salvation through His Blood."
      ],
      [
        "My great Physician heals the sick,",
        "The lost He came to save:",
        "For me His precious Blood He shed,",
        "For me His life He gave."
      ]
    ]
  },
  {
    "hymnNo": "24",
    "title": "It Is Well With My Soul",
    "category": "assurance & confidence",
    "hymnChorus": [
      "It is well . . . with my soul . . .",
      "It is well, it is well with my soul."
    ],
    "hymnStanzards": [
      [
        "When peace like a river attendeth my way,",
        "When sorrows like sea billows roll;",
        "Whatever my lot, Thou hast taught me to say,",
        "It is well, it is well with my soul."
      ],
      [
        "Though Satan should buffet, tho' trials should come,",
        "Let this blest assurance control,",
        "That Christ has regarded my helpless estate,",
        "And hath shed His own blood for my soul."
      ],
      [
        "My sin - oh the bliss of this glorious thought -",
        "My sin - not in part, but the whole -",
        "Is nailed to His cross: and I bear it no more,",
        "Praise the Lord, praise the Lord, O my soul!"
      ],
      [
        "For me, be it Christ, be it Christ hence to live!",
        "If Jordan above me shall roll;",
        "No pang shall be mine, for in death as in life",
        "Thou wilt whisper Thy peace to my soul."
      ],
      [
        "But Lord, 'tis for Thee, for Thy coming we wait,",
        "The sky, not the grave, is our goal:",
        "Oh, trump of the angel! oh, voice of the Lord!",
        "Blessed hope! Blessed rest of my soul!"
      ]
    ]
  },
  {
    "hymnNo": "25",
    "title": "Now I Belong To Jesus",
    "category": "assurance & confidence",
    "hymnChorus": [
      "Now I belong to Jesus,",
      "Jesus belongs to me,",
      "Not for the years of time alone,",
      "But for eternity."
    ],
    "hymnStanzards": [
      [
        "Jesus, my Lord will love me forever,",
        "From Him no pow'r of evil can sever,",
        "He gave His life to ransom my soul;",
        "Now I belong to Him;"
      ],
      [
        "Once I was lost in sin's degradation,",
        "Jesus came down to bring me salvation,",
        "Lifted me up from sorrow and shame,",
        "Now I belong to Him;"
      ],
      [
        "Now I belong to Jesus,",
        "Jesus belongs to me,",
        "Not for the years of time alone,",
        "But for eternity."
      ],
      [
        "Joy floods my soul for Jesus has saved me,",
        "Freed me from sin that long had enslaved me",
        "His precious blood, He came to redeem,",
        "Now I belong to Him;"
      ],
      [
        "Now I belong to Jesus,",
        "Jesus belongs to me,",
        "Not for the years of time alone,",
        "But for eternity."
      ]
    ]
  },
  {
    "hymnNo": "26",
    "title": "I Know Whom I Have Believed",
    "category": "assurance & confidence",
    "hymnChorus": [
      "But I know Whom I have believèd,",
      "And am persuaded that He is able",
      "To keep that which I’ve committed",
      "Unto Him against that day."
    ],
    "hymnStanzards": [
      [
        "I know not why God’s wondrous grace",
        "To me He hath made known,",
        "Nor why, unworthy, Christ in love",
        "Redeemed me for His own."
      ],
      [
        "I know not how this saving faith",
        "To me He did impart,",
        "Nor how believing in His Word",
        "Wrought peace within my heart."
      ],
      [
        "I know not how the Spirit moves,",
        "Convincing us of sin,",
        "Revealing Jesus through the Word,",
        "Creating faith in Him."
      ],
      [
        "I know not what of good or ill",
        "May be reserved for me,",
        "Of weary ways or golden days,",
        "Before His face I see."
      ],
      [
        "I know not when my Lord may come,",
        "At night or noonday fair,",
        "Nor if I walk the vale with Him,",
        "Or meet Him in the air.",
        ""
      ]
    ]
  },
  {
    "hymnNo": "27",
    "title": "I Am Bound For Canan",
    "category": "assurance & confidence",
    "hymnChorus": [
      "Let those who will stay in Egypt land,",
      "I am bound for Canaan,",
      "Where milk and honey flowing, shall every need supply;",
      "All battles fought and the victory won,",
      "Peace and joy my portion,",
      "My soul shall rest on its shore by and by."
    ],
    "hymnStanzards": [
      [
        "Storms do not alarm me, they sometime must cease,",
        "Trials cannot harm me, for I have blessed peace;",
        "All I've left behind me, I long for no more,",
        "Better things shall find me on Canaan's shore."
      ],
      [
        "Troubles do not fret me, they cannot abide,",
        "Though they may beset me, in Jesus, I will hide,",
        "All the world's commotion about me may roam,",
        "There's no stormy ocean on Canaan's shore."
      ],
      [
        "I in grace abiding, am trying to stay,",
        "In the shadow hiding of Canaan's perfect day;",
        "All I trust may fail me, 'twill matter no more,",
        "Nothing can assail me on Canaan's shore."
      ],
      [
        ""
      ]
    ]
  },
  {
    "hymnNo": "28",
    "title": "I Am Living In Cannan",
    "category": "assurance & confidence",
    "hymnChorus": [
      "I am living in Canaan now,",
      "Where the showers of blessing abound",
      "Where the riches of grace in plenty are found,",
      "I am living in Canaan now."
    ],
    "hymnStanzards": [
      [
        "All that draw me I have left behind",
        "Here in Canaan better joys I find;",
        "Peace abiding, blessings unconfined,",
        "For I'm living in Canaan now."
      ],
      [
        "Safe abiding I will never fear,",
        "For my Saviour ever will be near;",
        "When I call Him He will always hear,",
        "For I'm living in Canaan now."
      ],
      [
        "I am drinking from a ceaseless well,",
        "Here in Canaan where I love to dwell,",
        "So to others I am glad to tell,",
        "That I'm living in Canaan now."
      ],
      [
        "Praises ever I am glad to bring",
        "Unto Jesus, my Redeemer, King;",
        "For His mercies I will shout and sing,",
        "For I'm living in Canaan now.",
        ""
      ]
    ]
  },
  {
    "hymnNo": "29",
    "title": "I Know Who Holds Tomorrow",
    "category": "assurance & confidence",
    "hymnChorus": [
      "Many things about tomorrow,",
      "I don't seem to understand;",
      "But I know Who holds tomorrow,",
      "And I know Who holds my hand."
    ],
    "hymnStanzards": [
      [
        "I don't know about tomorrow,",
        "I just live from day to day.",
        "I don't borrow from its sunshine,",
        "For its skies may turn to gray.",
        "I don't worry o'er the future,",
        "For I know what Jesus said,",
        "And today I'll walk beside Him,",
        "For He knows what is ahead."
      ],
      [
        "Ev'ry step is getting brighter,",
        "As the golden stairs I climb;",
        "Ev'ry burden's getting lighter;",
        "Ev'ry cloud is silver lined.",
        "There the sun is always shining,",
        "There no tear will dim the eyes,",
        "At the ending of the rainbow,",
        "Where the mountains touch the sky."
      ],
      [
        "I don't know about tomorrow,",
        "It may bring me poverty;",
        "But the One Who feeds the sparrow,",
        "Is the One Who stands by me.",
        "And the path that be my portion,",
        "May be through the flame or flood,",
        "But His presence goes before me,",
        "And I'm covered with His blood."
      ]
    ]
  },
  {
    "hymnNo": "30",
    "title": "I've Anchored In Jesus",
    "category": "assurance & confidence",
    "hymnChorus": [
      "I’ve anchored in Jesus, the storms of life I’ll brave,",
      "I’ve anchored in Jesus, I fear no wind or wave.",
      "I’ve anchored in Jesus, for He hath power to save,",
      "I’ve anchored to the Rock of Ages."
    ],
    "hymnStanzards": [
      [
        "Upon life’s boundless ocean where mighty billows roll,",
        "I’ve fixed my hope in Jesus, blest anchor of my soul;",
        "When trials fierce assail me as storms are gathering o’er,",
        "I rest upon His mercy and trust Him more."
      ],
      [
        "He keeps my soul from evil and gives me blessèd peace,",
        "His voice hath stilled the waters and bid their tumult cease;",
        "My Pilot and Deliverer, to Him I all confide,",
        "For always when I need Him, He’s at my side."
      ],
      [
        "He is my Friend and Savior, in Him my anchor’s cast,",
        "He drives away my sorrows and shields me from the blast;",
        "By faith I’m looking upward beyond life’s troubled sea,",
        "There I behold a haven prepared for me.",
        ""
      ]
    ]
  },
  {
    "hymnNo": "31",
    "title": "He Touched Me",
    "category": "assurance & confidence",
    "hymnChorus": [
      "He touched me, Oh He touched me,",
      "And oh the joy that floods my soul!",
      "Something happened and now I know,",
      "He touched me and made me whole."
    ],
    "hymnStanzards": [
      [
        "Shackled by a heavy burden,",
        "'Neath a load of guilt and shame.",
        "Then the hand of Jesus touched me,",
        "And now I am no longer the same."
      ],
      [
        "Since I met this blessed Savior,",
        "Since He cleansed and made me whole,",
        "I will never cease to praise Him,",
        "I'll shout it while eternity rolls."
      ]
    ]
  },
  {
    "hymnNo": "32",
    "title": "Heaven Came Down",
    "category": "assurance & confidence",
    "hymnChorus": [
      "Heaven came down and glory filled my soul,",
      "When at the cross the Saviour made me whole;",
      "My sins were washed away",
      "And my night was turned to day –",
      "Heaven came down and glory filled my soul."
    ],
    "hymnStanzards": [
      [
        "O what a wonderful, wonderful day –",
        "Day I will never forget;",
        "After I'd wandered in darkness away,",
        "Jesus my Saviour I met;",
        "O what a tender, compassionate Friend –",
        "He met the need of my heart;",
        "Shadows dispelling, with joy I am telling,",
        "He made all the darkness depart!"
      ],
      [
        "Born of the Spirit with life from above",
        "Into God's fam'ly divine,",
        "Justified fully thru Calvary's love",
        "O what a standing is mine!",
        "And the transaction so quickly was made",
        "When as a sinner I came,",
        "Took of the offer of grace He did proffer –",
        "He saved me, O praise His dear name."
      ],
      [
        "Now I've a hope that will surely endure",
        "After the passing of time;",
        "I have a future in heaven for sure,",
        "There in those mansions sublime;",
        "And it's because of that wonderful day",
        "When at the cross I believed;",
        "Riches eternal and blessings supernal",
        "From His precious hand I received."
      ]
    ]
  },
  {
    "hymnNo": "33",
    "title": "Since Jesus Came Into My Heart",
    "category": "assurance & confidence",
    "hymnChorus": [
      "Since Jesus came into my heart",
      "Since Jesus came into my heart;",
      "Floods of joy o'er my soul like the sea billows roll,",
      "Since Jesus came into my heart"
    ],
    "hymnStanzards": [
      [
        "What a wonderful change in my life has been wrought",
        "Since Jesus came into my heart; ",
        "I have light in my soul for which long I had sought,",
        "Since Jesus came into my heart."
      ],
      [
        "I have ceased from my wand'ring and going astray, ",
        "Since Jesus came into my heart; ",
        "And my sins which were many are all washed away,",
        "Since Jesus came into my heart."
      ],
      [
        "I'm possessed of a hope that is steadfast and sure,",
        "Since Jesus came into my heart!",
        "And no dark clouds of doubt now my pathway obscure,",
        "Since Jesus came into my heart!"
      ],
      [
        "There's a light in the valley of death now for me,",
        "Since Jesus came into my heart!",
        "And the gates of the City beyond I can see,",
        "Since Jesus came into my heart!"
      ],
      [
        "I shall go there to dwell in that City I know,",
        "Since Jesus came into my heart; ",
        "And I'm happy, so happy as onward I go, ",
        "Since Jesus came into my heart."
      ]
    ]
  },
  {
    "hymnNo": "34",
    "title": "Constantly Abiding",
    "category": "assurance & confidence",
    "hymnChorus": [
      "Constantly abiding, Jesus is mine;",
      "Constantly abiding, rapture divine;",
      "He never leaves me lonely,",
      "Whispers, O so kind:",
      "I will never leave thee, Jesus is mine."
    ],
    "hymnStanzards": [
      [
        "There’s a peace in my heart",
        "That the world never gave,",
        "A peace it cannot take away;",
        "Though the trials of life",
        "May surround like a cloud,",
        "I’ve a peace that has come here to stay!"
      ],
      [
        "All the world seemed to sing",
        "Of a Savior and king,",
        "When peace sweetly came to my heart;",
        "Troubles all fled away",
        "And my night turned to day,",
        "Blessed Jesus, how glorious Thou art!"
      ],
      [
        "This treasure I have",
        "In a temple of clay,",
        "While here on His footstool I roam;",
        "But He’s coming to take",
        "Me some glorious day,",
        "Over there to my heavenly home!",
        ""
      ]
    ]
  },
  {
    "hymnNo": "35",
    "title": "A New Name In Glory",
    "category": "assurance & confidence",
    "hymnChorus": [
      "There's a new name written down in glory,",
      "And it's mine, O yes, it's mine!",
      "And the white robed angels sing the story,",
      "\"A sinner has come home.\"",
      "For there's a new name written down in glory,",
      "And it's mine, O yes, it's mine!",
      "With my sins forgiven I am bound for Heaven,",
      "Never more to roam."
    ],
    "hymnStanzards": [
      [
        "I was once a sinner, but I came",
        "Pardon to receive from my Lord:",
        "This was freely given, and I found",
        "That He always kept His word. "
      ],
      [
        "I was humbly kneeling at the cross,",
        "Fearing naught but God's angry frown;",
        "When the heavens opened and I saw",
        "That my name was written down! "
      ],
      [
        "In the Book 'tis written, \"Saved by Grace,\"",
        "O the joy that came to my soul!",
        "Now I am forgiven, and I know",
        "By the blood I am made whole!"
      ]
    ]
  },
  {
    "hymnNo": "36",
    "title": "My Name's Written There",
    "category": "assurance & confidence",
    "hymnChorus": [
      "My name's written there,",
      "On the page white and fair;",
      "In the Book of God's kingdom,",
      "My name's written there."
    ],
    "hymnStanzards": [
      [
        "1 I am bought not with riches,",
        "Neither silver nor gold;",
        "But Christ hath redeemed me,",
        "I am safe in His fold;",
        "In the Book of His kingdom,",
        "With its pages so fair,",
        "Through Jesus my Saviour,",
        "My name's written there."
      ],
      [
        "My sins, they were many,",
        "Like the sands of the sea,",
        "But the blood of my Saviour",
        "Is sufficient for me;",
        "For His promise is written,",
        "In bright letters that glow,",
        "\"Though your sins be as scarlet,",
        "I will make them like snow.\""
      ],
      [
        "Oh! that beautiful city,",
        "With its mansions of light,",
        "With its glorified beings,",
        "In pure garments of white;",
        "Where no evil thing cometh",
        "To despoil what is fair;",
        "Where the angels are watching,",
        "My name's written there. "
      ]
    ]
  },
  {
    "hymnNo": "37",
    "title": "When I See The Blood",
    "category": "blood of jesus",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Christ our Redeemer died on the cross,",
        "Died for the sinner, paid all his due;",
        "All who receive Him need never fear,",
        "Yes, He will pass, will pass over you. "
      ],
      [
        "Chiefest of sinners, Jesus will save;",
        "As He has promised, so He will do;",
        "Oh, sinner, hear Him, trust in His Word,",
        "Then He will pass, will pass over you."
      ],
      [
        "Judgment is coming, all will be there.",
        "Who have rejected, who have refused?",
        "Oh, sinner, hasten, let Jesus in,",
        "Oh, He will pass, will pass over you."
      ],
      [
        "O great compassion! O boundless love!",
        "Jesus hath power, Jesus is true;",
        "All who believe are safe from the storm,",
        "Oh, He will pass, will pass over you."
      ]
    ]
  },
  {
    "hymnNo": "38",
    "title": "Have You Been To Jesus",
    "category": "blood of jesus",
    "hymnChorus": [
      "Are you washed in the blood,",
      "In the soul cleansing blood of the Lamb?",
      "Are your garments spotless?",
      "Are they white as snow?",
      "Are you washed in the blood of the Lamb?"
    ],
    "hymnStanzards": [
      [
        "Have you been to Jesus for the cleansing power?",
        "Are you washed in the blood of the Lamb?",
        "Are you fully trusting in His grace this hour?",
        "Are you washed in the blood of the Lamb?"
      ],
      [
        "Are you walking daily by the Savior's side?",
        "Are you washed in the blood of the Lamb?",
        "Do you rest each moment in the Crucified?"
      ],
      [
        "When the Bridegroom cometh will your robes be white?",
        "Are you washed in the blood of the Lamb?",
        "Will your soul be ready for the mansions bright,",
        "And be washed in the blood of the Lamb?"
      ],
      [
        "Lay aside the garments that are stained with sin,",
        "And be washed in the blood of the Lamb;",
        "There's a fountain flowing for the soul unclean,",
        "O be washed in the blood of the Lamb!"
      ]
    ]
  },
  {
    "hymnNo": "39",
    "title": "Power In The Blood",
    "category": "blood of jesus",
    "hymnChorus": [
      "There is pow'r, pow'r, wonder-working pow'r",
      "In the blood of the Lamb,",
      "There is pow'r, pow'r, wonder-working pow'r",
      "In the precious blood of the Lamb."
    ],
    "hymnStanzards": [
      [
        "Would you be free from your burden of sin?",
        "There's pow'r in the blood, pow'r in the blood;",
        "Would you o'er evil a victory win?",
        "There's wonderful pow'r in the blood."
      ],
      [
        "Would you be free from your passion and pride?",
        "There's pow'r in the blood, pow'r in the blood;",
        "Come for a cleansing to Calvary's tide,",
        "There's wonderful pow'r in the blood."
      ],
      [
        "Would you be whiter. Much whiter than snow?",
        "There's pow'r in the blood, pow'r in the blood;",
        "Sin stains are lost in its life-giving flow,",
        "There's wonderful pow'r in the blood."
      ],
      [
        "Would you do service for Jesus your King?",
        "There's pow'r in the blood, pow'r in the blood;",
        "Would you live daily His praises to sing?",
        "There's wonderful pow'r in the blood."
      ]
    ]
  },
  {
    "hymnNo": "40",
    "title": "Wash Me O Lamb Of God",
    "category": "blood of jesus",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Wash me, O Lamb of God,",
        "Wash me from sin!",
        "By Thine atoning blood,",
        "Oh, make me clean!",
        "Purge me from every stain,",
        "Let me Thine image gain,",
        "In love and mercy reign",
        "O'er all within."
      ],
      [
        "Wash me, O Lamb of God,",
        "Wash me from sin!",
        "I will not, cannot, rest",
        "Till pure within.",
        "All human skill is vain,",
        "But Thou canst cleanse each stain",
        "Till not a spot remain –",
        "Made wholly clean."
      ],
      [
        "Wash me, O Lamb of God,",
        "Wash me from sin!",
        "By faith Thy cleansing blood",
        "Now makes clean.",
        "So near art Thou to me,",
        "So sweet my rest in Thee –",
        "Oh, blessed purity,",
        "Saved, saved from sin."
      ],
      [
        "Wash me, O Lamb of God,",
        "Wash me from sin!",
        "Thou, while I trust in Thee,",
        "Wilt keep me clean.",
        "Each day to Thee I bring",
        "Heart, life – yea everything;",
        "Saved, while to Thee I cling,",
        "Saved from all sin!"
      ]
    ]
  },
  {
    "hymnNo": "41",
    "title": "Onward Christian Soldiers",
    "category": "christian life",
    "hymnChorus": [
      "Onward Christian soldiers!",
      "Marching as to war,",
      "With the cross of Jesus",
      "Going on before."
    ],
    "hymnStanzards": [
      [
        "Onward, Christian soldiers! marching as to war,",
        "With the cross of Jesus going on before;",
        "Christ, the royal Master leads against the foe;",
        "Forward into battle, see, His banners go!"
      ],
      [
        "Like a mighty army moves the Church of God;",
        "Brothers we are treading where the saints have trod;",
        "We are not divided, all one body we;",
        "One in hope and doctrine, one in charity."
      ],
      [
        "Crowns and thrones may perish, kingdoms rise and wane;",
        "But the Church of Jesus constant will remain;",
        "Gates of hell can never 'gainst that Church prevail;",
        "We have Christ's own promise, which can never fail."
      ],
      [
        "Onward, then, ye people, join our happy throng;",
        "Blend with ours your voices in the triumph song;",
        "Glory, laud, and honour, unto Christ the King;",
        "This thro' countless ages men and angels sing."
      ]
    ]
  },
  {
    "hymnNo": "42",
    "title": "Close To Thee",
    "category": "christian life",
    "hymnChorus": [
      "Close to Thee, close to Thee,",
      "Close to Thee, close to Thee;",
      "All along my pilgrim journey,",
      "Saviour, let me walk with Thee."
    ],
    "hymnStanzards": [
      [
        "Thou my everlasting Portion,",
        "More than friend or life to me;",
        "All along my pilgrim journey,",
        "Saviour, let me walk with Thee."
      ],
      [
        "Not for ease or worldly pleasure,",
        "Or for fame, my pray'r shall be;",
        "Gladly will I toil and suffer,",
        "Only let me walk with Thee."
      ],
      [
        "Close to Thee, close to Thee,",
        "Close to Thee, close to Thee;",
        "Gladly will I toil and suffer,",
        "Only let me walk with Thee."
      ],
      [
        "Lead me thro' the vale of shadow;",
        "Bear me o'er life's fitful sea;",
        "Then the gate of life eternal,",
        "May I enter, Lord, with Thee."
      ],
      [
        "Close to Thee, close to Thee,",
        "Close to Thee, close to Thee;",
        "Then the gates of life eternal,",
        "May I enter, Lord, with Thee."
      ]
    ]
  },
  {
    "hymnNo": "43",
    "title": "Trust And Obey",
    "category": "christian life",
    "hymnChorus": [
      "Trust and obey, for there's no other way",
      "To be happy in Jesus,",
      "But to trust and obey."
    ],
    "hymnStanzards": [
      [
        "When we walk with the Lord",
        "In the light of His Word",
        "What a glory He sheds on our way!",
        "While we do His good will,",
        "He abides with us still,",
        "And with all who will trust and obey."
      ],
      [
        "Not a shadow can rise,",
        "Not a cloud in the skies,",
        "But His smile quickly drives it away;",
        "Not a doubt or a fear,",
        "Not a sight nor a tear,",
        "Can abide while we trust and obey."
      ],
      [
        "Not a burden we bear,",
        "Not a sorrow we share,",
        "But our toil He doth richly repay;",
        "Not a grief nor a loss,",
        "Not a frown nor a cross,",
        "But is blest if we trust and obey."
      ],
      [
        "But we never can prove",
        "The delights of His love",
        "Until all on the altar we lay;",
        "For the favour He shows,",
        "And the joy He bestows,",
        "Are for them who will trust and obey."
      ],
      [
        "Then in fellowship sweet",
        "We will sit at His feet,",
        "Or we'll walk by His side in the way;",
        "What He says we will do,",
        "Where He leads we will go,",
        "Never fear, only trust and obey."
      ]
    ]
  },
  {
    "hymnNo": "44",
    "title": "Come Over",
    "category": "christian life",
    "hymnChorus": [
      "Come over, come over,",
      "To the land of corn and wine;",
      "There is nothing can compare",
      "With the many holy pleasures there;",
      "Come over, come over,",
      "Leave the desert plain below",
      "And come away, away,",
      "Come over."
    ],
    "hymnStanzards": [
      [
        "There’s a land of peace and plenty,",
        "And its gates are open wide,",
        "And the pure in heart and holy",
        "In its shelter may abide;",
        "It is not through gates of glory",
        "That a soul must enter in;",
        "But all who would find entrance there",
        "Must leave the ways of sin."
      ],
      [
        "There is bread of heaven growing,",
        "In its fair and fertile fields,",
        "And the wine of love its vineyard",
        "To the thirsting mortal yields;",
        "There are mountain heights of glory",
        "That await the trav’ler’s rod,",
        "And blest retreats where empty souls",
        "Draw nearer unto God."
      ],
      [
        "Who would stay without its borders,",
        "In the desert dark and drear,",
        "When the luscious grapes of Eschol",
        "Are so very, very near?",
        "Enter in then with rejoicing,",
        "For the Lord is on your side,",
        "And in his glorious presence",
        "Evermore you shall abide."
      ]
    ]
  },
  {
    "hymnNo": "45",
    "title": "Jesus My Strengh My Hope",
    "category": "christian life",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "JESUS, my strength, my hope,",
        "On thee I cast my care,",
        "With humble confidence look up,",
        "And know thou hearest prayer.",
        "Give me on thee to wait,",
        "Till I can all things do,",
        "On thee, almighty to create,",
        "Almighty to renew."
      ],
      [
        "I want a godly fear,",
        "A quick-discerning eye,",
        "That looks to thee when sin is near,",
        "And sees the tempter fly;",
        "A spirit still prepared",
        "And armed with jealous care,",
        "For ever standing on its guard,",
        "And watching unto prayer."
      ],
      [
        "",
        "I rest upon thy word;",
        "The promise is for me;",
        "My succour and salvation, Lord,",
        "Shall surely come from thee.",
        "But let me still abide,",
        "Nor from my hope remove,",
        "Till thou my patient spirit guide",
        "Into thy perfect love."
      ]
    ]
  },
  {
    "hymnNo": "46",
    "title": "A Christian Home",
    "category": "christian life",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "O give us homes built firm upon the Saviour,",
        "Where Christ is Head, and Counsellor and Guide;",
        "Where ev'ry child is taught His love and favor",
        "And gives his heart to Christ, the crucified:",
        "How sweet to know that tho' his footsteps waver",
        "His faithful Lord is walking by his side!"
      ],
      [
        "O give us homes where Christ is Lord and Master,",
        "The Bible read, the precious hymns still sung;",
        "Where prayer comes first in peace or in disaster,",
        "And praise is natural speech to ev'ry tongue;",
        "Where mountains move before a faith that's vaster,",
        "And Christ sufficient is for old and young."
      ],
      [
        "O Lord, our God, our homes are Thine forever!",
        "We trust to Thee their problems, toil, and care;",
        "Their bonds of love no enemy can sever",
        "If Thou art always Lord and Master there:",
        "Be Thou the center of our least endeavor:",
        "Be Thou our Guest, our hearts and homes to share."
      ]
    ]
  },
  {
    "hymnNo": "47",
    "title": "Just Obey",
    "category": "christian life",
    "hymnChorus": [
      "Just obey . . ., just obey . . .,",
      "Is the way . . ., God's way . . .,",
      "When His message comes to you,",
      "There is but one thing to do:",
      "Just obey . . . just obey."
    ],
    "hymnStanzards": [
      [
        "Just as God who reigns on high",
        "Spake to men in days gone by;",
        "So the Lord is calling men today;",
        "And, my brother, this is true,",
        "Whatsoe'er He says to you,",
        "There is but one thing to do -",
        "Just obey."
      ],
      [
        "If you're in the Saviour's hands,",
        "You must do as He commands,",
        "For there is no other gospel way;",
        "Never put the message by,",
        "Never stop to reason, \"why?\"",
        "When the Saviour speaks to you -",
        "Just obey."
      ],
      [
        "If for mansions fair you sigh,",
        "In that land beyond the sky,",
        "After time with you has pass'd away;",
        "Though the way you may not see,",
        "Christ is calling, \"Follow me,\"",
        "Faith and duty both will cry -",
        "Just obey."
      ]
    ]
  },
  {
    "hymnNo": "48",
    "title": "Tis So Sweet To Trust",
    "category": "NOT FOUND",
    "hymnChorus": [
      "Jesus, Jesus, how I trust Him,",
      "How I've proved Him o'er and o'er!",
      "Jesus, Jesus, precious Jesus!",
      "O for grace to trust Him more!"
    ],
    "hymnStanzards": [
      [
        "'Tis so sweet to trust in Jesus,",
        "Just to take Him at His word;",
        "Just to lean upon His promise,",
        "Just to know, \"Thus saith the Lord.\""
      ],
      [
        "O how sweet to trust in Jesus,",
        "Just to trust His cleansing blood;",
        "Just in simple faith to plunge me",
        "'Neath the healing, cleansing flood!"
      ],
      [
        "Yes, 'tis sweet to trust in Jesus –",
        "Just from sin and self to cease;",
        "Just from Jesus simply taking",
        "Life and rest, and joy and peace!"
      ],
      [
        "I'm so glad I learned to trust Thee,",
        "Precious Jesus, Saviour, Friend;",
        "And I know that Thou art with me,",
        "Wilt be with me to the end."
      ]
    ]
  },
  {
    "hymnNo": "49",
    "title": "Let Others See Jesus In You",
    "category": "christian life",
    "hymnChorus": [
      "Let others see Jesus in you…",
      "Let others see Jesus in you…;",
      "Keep telling the story, be faithful and true,",
      "Let others see Jesus in you."
    ],
    "hymnStanzards": [
      [
        "While passing through this world of sin,",
        "And others your life shall view;",
        "Be clean and pure without, within,",
        "Let others see Jesus in you."
      ],
      [
        "Your life's a book before their eyes,",
        "They're reading it through and through;",
        "Say, does it point them to the skies,",
        "Do others see Jesus in you?"
      ],
      [
        "What joy 'twill be at set of sun,",
        "In mansions beyond the blue,",
        "To find some souls that you have won;",
        "Let others see Jesus in you."
      ],
      [
        "Then live for Christ both day and night,",
        "Be faithful, be brave and true,",
        "And lead the lost to life and light;",
        "Let others see Jesus in you."
      ]
    ]
  },
  {
    "hymnNo": "50",
    "title": "Count Your Blessings",
    "category": "christian life",
    "hymnChorus": [
      "Count your blessings, name them one by one;",
      "Count your blessings, see what God hath done;",
      "Count your blessings, name them one by one;",
      "Count your many blessings, see what God hath done."
    ],
    "hymnStanzards": [
      [
        "When upon life's billows you are tempest tossed,",
        "When you are discouraged, thinking all is lost,",
        "Count your many blessings, name them one by one,",
        "And it will surprise you what the Lord hath done."
      ],
      [
        "Are you ever burdened with a load of care?",
        "Does the cross seem heavy you are called to bear?",
        "Count your many blessings, ev'ry doubt will fly,",
        "And you will be singing as the days go by."
      ],
      [
        "When you look at others with their lands and gold,",
        "Think that Christ has promised you His wealth untold;",
        "Count your many blessings, money cannot buy",
        "Your reward in Heaven, nor your home on high."
      ],
      [
        "So, amid the conflict, whether great or small,",
        "Do not be discouraged, God is over all;",
        "Count your many blessings, angels will attend,",
        "Help and comfort give you to your journey's end."
      ]
    ]
  },
  {
    "hymnNo": "51",
    "title": "That Blessed Canan Land",
    "category": "christian life",
    "hymnChorus": [
      "It is wonderful to live in Canaan,",
      "Where the milk and honey flow.",
      "Where the land is bearing in abundance",
      "And the grapes of Eschol grow.",
      "It is wonderful to live in Canaan,",
      "Where the milk and honey flow.",
      "Won't you join that band,",
      "Where the live is grand,",
      "In that blessed Canaan land?"
    ],
    "hymnStanzards": [
      [
        "There's a blessed land that we call Canaan,",
        "Land of promise, land of victory,",
        "Where the Spirit's given without measure,",
        "Where the soul from self has been set free."
      ],
      [
        "In the land of Canaan there is blessing,",
        "All HIs fullness as He takes control.",
        "Blessed fullness of the Holy Spirit;",
        "O what glory He brings to the soul! "
      ],
      [
        "Have you crossed the Jordan into Canaan,",
        "Have you left the wilderness behind",
        "And received the Spirit in His fullness?",
        "If you haven't then make up your mind."
      ]
    ]
  },
  {
    "hymnNo": "52",
    "title": "Count Me",
    "category": "christian life",
    "hymnChorus": [
      "Count me with the children of the heavenly King;",
      "Count me with the servants who would service bring;",
      "Count me with the ransomed who His praises sing;",
      "Count me… count me…"
    ],
    "hymnStanzards": [
      [
        "When you count the ones who love the Lord,",
        "Count me, count me;",
        "When you count up those who trust His Word,",
        "Count me, count me."
      ],
      [
        "When you count up those who 're saved by grace,",
        "Count me, count me;",
        "Who have found in Christ a hiding place,",
        "Count me, count me."
      ],
      [
        "When you count up those who do the right,",
        "Count me, count me;",
        "Who are walking in the Gospel light",
        "Count me, count me."
      ],
      [
        "When you count up those who forward press,",
        "Count me, count me;",
        "Who shall gain the crown of righteousness,",
        "Count me, count me."
      ]
    ]
  },
  {
    "hymnNo": "53",
    "title": "So Send I You",
    "category": "christian service & reward",
    "hymnChorus": [
      "\"As the Father hath sent me, so send I you\""
    ],
    "hymnStanzards": [
      [
        "So send I you to labour unrewarded",
        "To serve unpaid, unloved, unsought, unknown",
        "To bear rebuke, ot suffer scorn and scoffing",
        "So send I you to toil for Me alone"
      ],
      [
        "So send I you to bind the bruised and broken",
        "Over wandering souls to work, to weep, to wake",
        "To bear the burdens of a world a-weary",
        "So send I you to suffer for My sake"
      ],
      [
        "So send I you to loneliness and longing",
        "With hart a-hungering for tthe loved and known",
        "Forsaking kin and kindred, friend and dear one",
        "So send I you to know My love alone"
      ],
      [
        "So send I you to leave your life's ambition",
        "To die to dear desire, self-will resign",
        "To labour long, and love where men revile you",
        "So send I you to lsoe you life in Mine"
      ],
      [
        "So send I you to hearts made hard by hatred",
        "To eyes made blind because they will not see",
        "To spend, though it be blood to spend and spare not",
        "So send I you to taste of Calvary"
      ],
      [
        ""
      ]
    ]
  },
  {
    "hymnNo": "54",
    "title": "I Am Ready For Service",
    "category": "christian service & reward",
    "hymnChorus": [
      "I am ready for the service for Thee, dear Lord,",
      "Here am I, send me,",
      "I am willing to be what you’d have me be,",
      "I will go where you want me to go,",
      "I am ready for service for Thee, dear Lord,",
      "Here am I, send me",
      "Tho’ the pathway seems dark, for Thee I’ll do or die,",
      "I am ready for service, Lord."
    ],
    "hymnStanzards": [
      [
        "Listen to the Master’s pleading,",
        "There is urgent work for all;",
        "Heed the Spirit’s interceding,",
        "Give this answer to the call"
      ],
      [
        "There’s a voice to you now calling,",
        "Will you heed the earnest word?",
        "On the ear ‘tis gently falling,",
        "Give this answer to your Lord"
      ],
      [
        "Many souls in sin are dying;",
        "Haste to help them while you may,",
        "For the time is swiftly flying,",
        "Will you now to Jesus say? "
      ]
    ]
  },
  {
    "hymnNo": "55",
    "title": "Anywhere With Jesus",
    "category": "christian service & reward",
    "hymnChorus": [
      "Anywhere! Any where!",
      "Fear I cannot know;",
      "Anywhere with Jesus",
      "I can safely go."
    ],
    "hymnStanzards": [
      [
        "Anywhere with Jesus I can safely go;",
        "Anywhere He leads me in this world below;",
        "Anywhere without Him dearest joys would fade;",
        "Anywhere with Jesus, I am not afraid."
      ],
      [
        "Anywhere with Jesus I am not alone;",
        "Other friends may fail me, He is still my own;",
        "Tho' His hand may lead me over the dreariest ways,",
        "Anywhere with Jesus is a house of praise."
      ],
      [
        "Anywhere with Jesus over land and sea,",
        "Telling souls in darkness of salvation free;",
        "Ready as He summons me to go or stay,",
        "Anywhere with Jesus when He points the way."
      ],
      [
        "Anywhere with Jesus I can go to sleep,",
        "When the dark'ning shadows round about me creep;",
        "Knowing I shall waken never more to roam,",
        "Anywhere with Jesus will be home, sweet home."
      ]
    ]
  },
  {
    "hymnNo": "56",
    "title": "I Love My Master",
    "category": "christian service & reward",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "I love, I love my Master,",
        "I will not go out free!",
        "For He is my Redeemer;",
        "He paid the price for me.",
        "I would not leave His service,",
        "It is so sweet and blest;",
        "And in the weariest moments",
        "He gives the truest rest."
      ],
      [
        "I would not halve my service,",
        "His only it must be!",
        "His only – Who so loved me,",
        "And gave Himself for me.",
        "Rejoicing and adoring,",
        "Henceforth my song shall be –",
        "\"I love, I love my Master,",
        "I will not go out free!\""
      ]
    ]
  },
  {
    "hymnNo": "57",
    "title": "They That Wait Upon The Lord",
    "category": "christian service & reward",
    "hymnChorus": [
      "For “they that wait upon the Lord",
      "shall renew their strength,",
      "they shall mount up with wings,",
      "they shall mount up with wings as eagles,",
      "They shall run and not be weary;",
      "they shall walk and not faint;",
      "They shall run and not be weary;",
      "they shall walk and not faint;",
      "They shall run and not be weary,",
      "shall walk and not faint.”"
    ],
    "hymnStanzards": [
      [
        "Ho, reapers in the whitened harvest!",
        "Oft feeble, faint and few;",
        "Come, wait upon the blessed Master,",
        "Our strength He will renew."
      ],
      [
        "Too oft aweary and discouraged,",
        "We pour a sad complaint;",
        "Believing in a living Saviour,",
        "Why should we ever faint?"
      ],
      [
        "Rejoice, for He is with us alway,",
        "Lo, even to the end!",
        "Look up, take courage and go forward,",
        "All needed grace He’ll send!"
      ]
    ]
  },
  {
    "hymnNo": "58",
    "title": "The Last Mile Of The Way",
    "category": "christian service & reward",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "If I walk in the pathway of duty,",
        "If I work till the close of the day;",
        "I shall see the great King in His beauty",
        "When I've gone the last mile of the way."
      ],
      [
        "If for Christ I proclaim the glad story,",
        "If I seek for His sheep gone astray;",
        "I am sure He will show me His glory",
        "When I've gone the last mile of the way."
      ],
      [
        "Here the dearest of ties we must sever,",
        "Tears of sorrow are seen everyday;",
        "But no sickness, no sighing forever",
        "When I've gone the last mile of the way."
      ],
      [
        "And if here I have earnestly striven",
        "And have tried all His will to obey;",
        "'Twill enhance all the rapture of heaven",
        "When I've gone the last mile of the way."
      ]
    ]
  },
  {
    "hymnNo": "59",
    "title": "Little Is Much When God Is In It",
    "category": "christian service & reward",
    "hymnChorus": [
      "Little is much when God is in it!",
      "Labor not for wealth or fame.",
      "There’s a crown—and you can win it,",
      "If you go in Jesus’ Name."
    ],
    "hymnStanzards": [
      [
        "In the harvest field now ripened",
        "There’s a work for all to do;",
        "Hark! the voice of God is calling",
        "To the harvest calling you."
      ],
      [
        "In the mad rush of the broad way,",
        "In the hurry and the strife,",
        "Tell of Jesus’ love and mercy,",
        "Give to them the Word of Life."
      ],
      [
        "Does the place you’re called to labor",
        "Seem too small and little known?",
        "It is great if God is in it,",
        "And He’ll not forget His own."
      ],
      [
        "Are you laid aside from service,",
        "Body worn from toil and care?",
        "You can still be in the battle,",
        "In the sacred place of prayer."
      ],
      [
        "When the conflict here is ended",
        "And our race on earth is run,",
        "He will say, if we are faithful,",
        "“Welcome home, My child—well done!\"",
        ""
      ]
    ]
  },
  {
    "hymnNo": "60",
    "title": "Where Could I Go",
    "category": "christian service & reward",
    "hymnChorus": [
      "Where could I go, O where could I go,",
      "Seeking a refuge for my soul?",
      "Needing a friend to save me in the end,",
      "Where could I go but to the Lord?"
    ],
    "hymnStanzards": [
      [
        "Living below in this old sinful world,",
        "Hardly a comfort can afford;",
        "Striving alone to face temptations sore,",
        "Where could I go but to the Lord?"
      ],
      [
        "Neighbours are kind, I love them every one,",
        "We get along in sweet accord;",
        "But when my soul needs manna from above,",
        "Where could I go but to the Lord?"
      ],
      [
        "Life here is grand with friends I love so dear,",
        "Comfort I get from God's own word;",
        "Yet when I face the chilling hand of death,",
        "Where could I go but to the Lord?"
      ]
    ]
  },
  {
    "hymnNo": "61",
    "title": "Lord Speak To Me",
    "category": "christian service & reward",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Lord, speak to me, that I may speak",
        "In living echoes of Thy tone;",
        "As Thou hast sought, so let me seek",
        "Thy erring children lost and lone."
      ],
      [
        "Oh, strengthen me, that while I stand",
        "Firm on the Rock, and strong in Thee,",
        "I may stretch out a loving hand",
        "To wrestlers with the troubled sea."
      ],
      [
        "Oh, teach me, Lord, that I may teach",
        "The precious things Thou dost impart;",
        "And wing my words, that they may reach",
        "The hidden depths of many a heart."
      ],
      [
        "Oh, give Thine own sweet rest to me,",
        "That I may speak with soothing power",
        "A word in season, as from Thee,",
        "To weary ones in needful hour."
      ],
      [
        "Oh, fill me with Thy fulness, Lord,",
        "Until my very heart o'erflow",
        "In kindling thought, and glowing word,",
        "Thy love to tell, Thy praise to show."
      ],
      [
        "Oh, use me Lord, use even me,",
        "Just as Thou wilt and how, and where;",
        "Until Thy blessed face I see,",
        "Thy rest, Thy joy, Thy glory share."
      ]
    ]
  },
  {
    "hymnNo": "62",
    "title": "Go Labor On",
    "category": "christian service & reward",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Go, labour on, spend, and be spent,",
        "Thy joy to do the Father's will;",
        "It is the way the Master went,",
        "Should not the servant tread it still?"
      ],
      [
        "Men die in darkness at your side,",
        "Without a hope to cheer the tomb:",
        "Take up the torch, and wave it wide,",
        "The torch that lights time's thickest gloom."
      ],
      [
        "Toil on, and in thy toil rejoice,",
        "For toil comes rest, for exile home;",
        "Soon shalt thou hear the Bridegroom's voice,",
        "The midnight peal, \"Behold, I come!'"
      ]
    ]
  },
  {
    "hymnNo": "63",
    "title": "Will There Be Any Stars",
    "category": "christian service & reward",
    "hymnChorus": [
      "Will there be any stars, any stars in my crown",
      "When at evening the sun goeth down?",
      "When I wake with the blest in the mansions of rest",
      "Will there be any stars in my crown?"
    ],
    "hymnStanzards": [
      [
        "I am thinking today of that beautiful land",
        "I shall reach when the sun goeth down;",
        "When through wonderful grace by my Savior I stand,",
        "Will there be any stars in my crown?"
      ],
      [
        "In the strength of the Lord let me labor and pray,",
        "Let me watch as a winner of souls,",
        "That bright stars may be mine in the glorious day,",
        "When His praise like the sea billow rolls."
      ],
      [
        "O what joy it will be when His face I behold,",
        "Living gems at his feet to lay down!",
        "It would sweeten my bliss in the city of gold,",
        "Should there be any stars in my crown.",
        ""
      ]
    ]
  },
  {
    "hymnNo": "64",
    "title": "The Old Rugged Cross",
    "category": "christ our saviour",
    "hymnChorus": [
      "So I'll cherish the old rugged cross,",
      "Till my trophies at last I lay down;",
      "I will cling to the old rugged cross,",
      "And exchange some day for a crown."
    ],
    "hymnStanzards": [
      [
        "On a hill far away stood the old rugged cross",
        "The emblem of suffering and shame,",
        "And I love that old cross where the dearest and best",
        "For a world of lost sinners was slain."
      ],
      [
        "O that old rugged cross, so despised by the world,",
        "Has a wondrous attraction for me,",
        "For the dear Lamb of God left His glory above,",
        "To bear it to dark Calvary."
      ],
      [
        "In the old rugged cross, stained with blood so divine,",
        "A wondrous beauty I see;",
        "For 'twas on that old cross Jesus suffered and died,",
        "To pardon and sanctify me."
      ],
      [
        "To the old rugged cross I will ever be true,",
        "Its shame and reproach gladly bear;",
        "Then He'll call me some day to my home far away,",
        "Where His glory for ever I'll share."
      ]
    ]
  },
  {
    "hymnNo": "65",
    "title": "Oh How I Love Jeus",
    "category": "christ our saviour",
    "hymnChorus": [
      "O how I love Jesus!",
      "And O how I love Jesus!",
      "O how I love Jesus",
      "Because He first loved me!"
    ],
    "hymnStanzards": [
      [
        "I am thinking today of that beautiful land",
        "I shall reach when the sun goeth down;",
        "When through wonderful grace by my Savior I stand,",
        "Will there be any stars in my crown?"
      ],
      [
        "Will there be any stars, any stars in my crown",
        "When at evening the sun goeth down?",
        "When I wake with the blest in the mansions of rest",
        "Will there be any stars in my crown?"
      ],
      [
        "In the strength of the Lord let me labor and pray,",
        "Let me watch as a winner of souls,",
        "That bright stars may be mine in the glorious day,",
        "When His praise like the sea billow rolls."
      ],
      [
        "O what joy it will be when His face I behold,",
        "Living gems at his feet to lay down!",
        "It would sweeten my bliss in the city of gold,",
        "Should there be any stars in my crown.",
        ""
      ]
    ]
  },
  {
    "hymnNo": "66",
    "title": "Jesus Is The Sweetest",
    "category": "christ our saviour",
    "hymnChorus": [
      "Jesus is the sweetest name I know,",
      "And He’s just the same as His lovely Name,",
      "And that’s the reason why I love Him so;",
      "Oh, Jesus is the sweetest name I know."
    ],
    "hymnStanzards": [
      [
        "There have been names that I have loved to hear,",
        "But never has there been a name so dear",
        "To this heart of mine, as the Name divine,",
        "The precious, precious Name of Jesus."
      ],
      [
        "There is no name in earth or Heav’n above,",
        "That we should give such honor and such love",
        "As the blessèd Name, let us all acclaim,",
        "That wondrous, glorious Name of Jesus."
      ],
      [
        "And some day I shall see Him face to face",
        "To thank and praise Him for His wondrous grace,",
        "Which He gave to me, when He made me free,",
        "The blessèd Son of God called Jesus.",
        ""
      ]
    ]
  },
  {
    "hymnNo": "67",
    "title": "My Jesus I Love Thee",
    "category": "christ our saviour",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "My Jesus I love Thee, I know Thou art mine;",
        "For Thee all the follies of sin I resign;",
        "My gracious Redeemer, my Saviour art Thou;",
        "If ever I loved Thee, my Jesus 'tis now."
      ],
      [
        "I'll love Thee in life, I will love Thee in death,",
        "And praise Thee as long as Thou lendest me breath;",
        "And say when the death-dew lies cold on my brow,",
        "\"If ever I loved Thee, my Jesus, 'tis now.\""
      ],
      [
        "In mansions of glory and endless delight,",
        "I'll ever adore Thee in heaven so bright;",
        "I'll sing with the glittering crown on my brow,",
        "\"If ever I loved Thee, my Jesus 'tis now.\""
      ]
    ]
  },
  {
    "hymnNo": "68",
    "title": "Like A Shepherd Lead Us",
    "category": "christ our saviour",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Saviour, like a Shepherd, lead us,",
        "Much we need Thy tender care;",
        "In Thy pleasant pastures feed us,",
        "For our use Thy folds prepare;",
        "Blessed Jesus, Blessed Jesus,",
        "Thou hast bought us Thine we are;",
        "Blessed Jesus, Blessed Jesus,",
        "Thou hast bought us Thine we are."
      ],
      [
        "Thou has promised to receive us,",
        "Poor and sinful though we be;",
        "Thou hast mercy to relieve us,",
        "Grace to cleanse and pow'r to free;",
        "Blessed Jesus, Blessed Jesus,",
        "Early let us turn to Thee;",
        "Blessed Jesus, Blessed Jesus,",
        "Early let us turn to Thee."
      ],
      [
        "Early let us seek Thy favour,",
        "Early let us do Thy will;",
        "Blessed Lord and only Saviour",
        "With Thy love our bosoms fill;",
        "Blessed Jesus, Blessed Jesus,",
        "Thou hast loved us, love us still;",
        "Blessed Jesus, Blessed Jesus,",
        "Thou hast loved us, love us still."
      ],
      [
        "Like a Shepherd come receive us",
        "When Thou comest in the air;",
        "In Thine arms wilt Thou now take us",
        "To that joyful union there;",
        "Blessed Jesus, Blessed Jesus,",
        "In that land beyond compare;",
        "Blessed Jesus, Blessed Jesus,",
        "In that land beyond compare."
      ]
    ]
  },
  {
    "hymnNo": "69",
    "title": "Christ Be Beside Me",
    "category": "christ our saviour",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Christ beside me,",
        "Christ before me,",
        "Christ behind me,",
        "King of my heart;",
        "Christ within me,",
        "Christ below me,",
        "Christ above me",
        "never to part."
      ],
      [
        "Chist be in all hearts thinking about me,",
        "Christ be in all tongues telling of me",
        "Christ be the vision in eyes that see me ",
        "in ears that hear me ",
        "Chist ever be"
      ],
      [
        "Christ beside me,",
        "Christ before me,",
        "Christ behind me,",
        "King of my heart;",
        "Christ within me,",
        "Christ below me,",
        "Christ above me",
        "never to part.",
        ""
      ]
    ]
  },
  {
    "hymnNo": "70",
    "title": "Have You Any Room For Jesus",
    "category": "christ our saviour",
    "hymnChorus": [
      "Room for Jesus, King of Glory!",
      "Hasten now, His Word obey.",
      "Swing the heart’s door widely open;",
      "Bid Him enter while you may."
    ],
    "hymnStanzards": [
      [
        "Have you any room for Jesus,",
        "He who bore your load of sin?",
        "As He knocks and asks admission,",
        "Sinner, will you let Him in?"
      ],
      [
        "Room for pleasure, room for business;",
        "But for Christ, the Crucified,",
        "Not a place that He can enter,",
        "In the heart for which He died? "
      ],
      [
        "Have you any room for Jesus, ",
        "Soon will pass God's day of grace ",
        "Soon thy heart left cold and silent",
        "And thy saviour pleading cease"
      ],
      [
        "Room and time now give to Jesus;",
        "Soon will pass God’s day of grace -",
        "Soon your heart left cold and silent,",
        "And your Savior’s pleading cease.",
        ""
      ]
    ]
  },
  {
    "hymnNo": "71",
    "title": "I Want To See Jesus Dont You",
    "category": "christ our saviour",
    "hymnChorus": [
      "I want to see Jesus, don’t you?",
      "My Savior so faithful and true;",
      "When I reach the strand of that love-bright land,",
      "O I want to see Jesus, don’t you?"
    ],
    "hymnStanzards": [
      [
        "There is One loved me so that for me He died,",
        "He’s my dear, precious Savior so true;",
        "On the cross for my sins He was crucified:",
        "I want to see Jesus, don’t you?"
      ],
      [
        "When I’m weary and faint He is always near,",
        "With His joy He my strength doth renew;",
        "And He comforts my heart, speaking words of cheer:",
        "I want to see Jesus, don’t you? "
      ],
      [
        "Holy angels keep watch o’er me through the night,",
        "And each morning He guards me anew;",
        "In the smile of His love doth my soul delight:",
        "I want to see Jesus, don’t you?"
      ],
      [
        "He is fairer than lily or rose to me,",
        "And His blessings fall soft as the dew;",
        "O my heart, how it longs His dear face to see:",
        "I want to see Jesus, don’t you? "
      ],
      [
        "There’s a place for my soul that He doth prepare,",
        "And its beauty by faith I can view;",
        "First of all, when I enter that mansion fair,",
        "I want to see Jesus, don’t you?"
      ]
    ]
  },
  {
    "hymnNo": "72",
    "title": "The Solid Rock",
    "category": "christ our saviour",
    "hymnChorus": [
      "On Christ, the Solid Rock, I stand;",
      "All other ground is sinking sand,",
      "All other ground is sinking sand."
    ],
    "hymnStanzards": [
      [
        "My hope is built on nothing less",
        "Than Jesus' blood and righteousness;",
        "I dare not trust the sweetest frame,",
        "But wholly lean on Jesus' name."
      ],
      [
        "When darkness seems to hide His face,",
        "I rest on His unchanging grace;",
        "In every high and stormy gale,",
        "My anchor holds within the vale."
      ],
      [
        "His oath, His covenant, His blood,",
        "Support me in the whelming flood;",
        "When all around my soul gives way,",
        "He then is all my hope and stay."
      ],
      [
        "When He shall come with trumpet sound,",
        "Oh, may I then in Him be found",
        "Dressed in His righteousness alone,",
        "Faultless to stand before the throne."
      ]
    ]
  },
  {
    "hymnNo": "73",
    "title": "Jesus Only Is Our Message",
    "category": "christ our saviour",
    "hymnChorus": [
      "Jesus only, Jesus ever,",
      "Jesus all in all we sing;",
      "Saviour, Sanctifier, Healer,",
      "Baptizer and coming King."
    ],
    "hymnStanzards": [
      [
        "Jesus only is our Message,",
        "Jesus all our theme shall be;",
        "We will lift up Jesus ever",
        "Jesus Only will we see."
      ],
      [
        "Jesus only is our Saviour,",
        "All our guilt He bore away;",
        "All our righteousness He gives us,",
        "All our strength from day to day."
      ],
      [
        "Jesus is our Sanctifier,",
        "Cleansing us from self and sin;",
        "And with all His Spirit's fulness,",
        "Filling all our hearts within."
      ],
      [
        "Jesus only is our Healer,",
        "All our sicknesses He bare;",
        "And His risen life and fulness,",
        "All His members still may share."
      ],
      [
        "Jesus only is our Power,",
        "His the gift of Pentecost;",
        "Jesus, breathe Thy power upon us,",
        "Fill us with the Holy Ghost."
      ],
      [
        "And for Jesus we are waiting,",
        "Listening for the trumpet's sound;",
        "Then it will be us and Jesus,",
        "Living ever with our God."
      ]
    ]
  },
  {
    "hymnNo": "74",
    "title": "The Heart That Was Broken For Me",
    "category": "christ our saviour",
    "hymnChorus": [
      "They crown’d Him with thorns,",
      "He was beaten with stripes,",
      "He was smitten and nailed to the tree;",
      "But the pain in His heart was the hardest to bear,",
      "The heart that was broken for me."
    ],
    "hymnStanzards": [
      [
        "There came from the skies in the days long ago,",
        "The Lord with a message of love;",
        "The world knew Him not; He was treated with scorn—",
        "This wonderful gift from above."
      ],
      [
        "He came to His own—to the ones that He lov’d—",
        "The sheep that had wander’d astray;",
        "They heard not His voice; but the friend of mankind",
        "Was hated and driven away."
      ],
      [
        "The birds have their nest, and the foxes have holes,",
        "But He had no place for His head;",
        "A pallet of stone on the cold mountainside,",
        "Was all that He had for His bed."
      ],
      [
        "I cannot reject such a Saviour as He;",
        "Dishonor and wound Him again;",
        "I'll go to His feet and repent of my sin,",
        "Be willing to suffer the pain."
      ],
      [
        "I'll take up my cross, I will walk by His side,",
        "For the pathway of duty I see;",
        "I will follow my Lord and abide in His heart,",
        "The heart that was broken for me."
      ]
    ]
  },
  {
    "hymnNo": "75",
    "title": "The Church's One Foundation",
    "category": "christ our saviour",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "The church's one foundation",
        "is Jesus Christ, her Lord;",
        "she is his new creation",
        "by water and the Word:",
        "from heav'n he came and sought her",
        "to be his holy bride;",
        "with his own blood he bought her,",
        "and for her life he died."
      ],
      [
        "Though with a scornful wonder",
        "men see her sore oppressed,",
        "by schisms rent asunder,",
        "by heresies distressed,",
        "yet saints their watch are keeping,",
        "their cry goes up, \"How long?\"",
        "And soon the night of weeping",
        "shall be the morn of song."
      ],
      [
        "Mid toil and tribulation,",
        "and tumult of her war,",
        "she waits the consummation",
        "of peace forevermore;",
        "till with the vision glorious",
        "her longing eyes are blest,",
        "and the great church victorious",
        "shall be the church at rest."
      ],
      [
        "Yet she on earth hath union",
        "with the God the Three in One,",
        "and mystic sweet communion",
        "with those whose rest is won:",
        "O happy ones and holy!",
        "Lord, give us grace that we,",
        "like them, the meek and lowly,",
        "on high may dwell with thee."
      ]
    ]
  },
  {
    "hymnNo": "76",
    "title": "In Times Like These",
    "category": "commitment & consecration",
    "hymnChorus": [
      "This Rock is Jesus, Yes He's the One,",
      "This Rock is Jesus, the only One;",
      "Be very sure, be very sure,",
      "Your anchor holds and grips the Solid Rock!"
    ],
    "hymnStanzards": [
      [
        "In times like these you need a Savior,",
        "In times like these you need an anchor;",
        "Be very sure, be very sure,",
        "Your anchor holds and grips the Solid Rock!"
      ],
      [
        "In times like these you need the Bible,",
        "In times like these, O be not idle;",
        "Be very sure, be very sure,",
        "Your anchor holds and grips the Solid Rock!"
      ],
      [
        "In times like these I have a Savior,",
        "In times like these I have an anchor;",
        "I'm very sure, I'm very sure",
        "My anchor holds and grips the Solid Rock!"
      ],
      [
        "This Rock is Jesus, Yes He's the One,",
        "This Rock is Jesus, the only One;",
        "Be very sure, be very sure,",
        "Your anchor holds and grips the Solid Rock!"
      ]
    ]
  },
  {
    "hymnNo": "77",
    "title": "I Have Decided To Follow Jesus",
    "category": "commitment & consecration",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "I have decided to follow Jesus;",
        "I have decided to follow Jesus;",
        "I have decided to follow Jesus;",
        "no turning back, no turning back."
      ],
      [
        "The world behind me, the cross before me;",
        "the world behind me, the cross before me,",
        "the world behind me, the cross before me;",
        "no turning back, no turning back."
      ]
    ]
  },
  {
    "hymnNo": "78",
    "title": "Faith Of Our Fathers",
    "category": "commitment & consecration",
    "hymnChorus": [
      "Faith of our fathers, holy faith!",
      "We will be true to Thee till death."
    ],
    "hymnStanzards": [
      [
        "Faith of our fathers living still",
        "In spite of dungeon, fire and sword,",
        "O how our hearts beat high with joy",
        "Whene'er we hear that glorious word."
      ],
      [
        "Faith of our fathers, we will strive",
        "To win all nations unto Thee,",
        "And through the truth that comes from God",
        "Mankind shall then be truly free."
      ],
      [
        "Faith of our fathers, we will love",
        "Both friend and foe in all our strife,",
        "And preach Thee, too, as love knows how",
        "By kindly words and virtuous life."
      ]
    ]
  },
  {
    "hymnNo": "79",
    "title": "The Way Of The Cross",
    "category": "commitment & consecration",
    "hymnChorus": [
      "The way of the cross leads home,",
      "The way of the cross leads home",
      "It is sweet to know, as I onward go,",
      "The way of the cross leads home."
    ],
    "hymnStanzards": [
      [
        "I must needs go home by the way of the cross,",
        "There's no other way but this; ",
        "I shall ne'er get sight of the Gates of Light, ",
        "If the way of the cross I miss."
      ],
      [
        "I must needs go on in the blood-sprinkled way,",
        "The path that the Saviour trod, ",
        "If I ever climb to the heights sublime, ",
        "Where the soul is at home with God."
      ],
      [
        "Then I bid farewell to the way of the world, ",
        "To walk in it never more; ",
        "For my Lord says \"Come\" and seek my home,",
        "Where He waits at the open door."
      ]
    ]
  },
  {
    "hymnNo": "80",
    "title": "At The Cross",
    "category": "commitment & consecration",
    "hymnChorus": [
      "At the cross, at the cross where i first saw the light",
      "and the burden of my heart rolled away",
      "it was there by faith ireciived my sight",
      "and now i am happy all the day!"
    ],
    "hymnStanzards": [
      [
        "Alas! and did my Savior bleed, ",
        "and did my Sovereign die!",
        "Would he devote that sacred head ",
        "for sinners such as I? "
      ],
      [
        "Was it for crimes that I have done, ",
        "he groaned upon the tree? ",
        "Amazing pity! Grace unknown! ",
        "And love beyond degree! "
      ],
      [
        "Well might the sun in darkness hide, ",
        "and shut its glories in, ",
        "when God, the mighty maker, died ",
        "for his own creature's sin. "
      ],
      [
        "Thus might I hide my blushing face ",
        "while his dear cross appears; ",
        "dissolve my heart in thankfulness, ",
        "and melt mine eyes to tears. "
      ],
      [
        "But drops of tears can ne'er repay ",
        "the debt of love I owe. ",
        "Here, Lord, I give myself away; ",
        "'tis all that I can do. "
      ]
    ]
  },
  {
    "hymnNo": "81",
    "title": "Lead Me To Calvary",
    "category": "commitment & consecration",
    "hymnChorus": [
      "Lest I forget Gethsemane,",
      "Lest I forget thine agony,",
      "Lest I forget thy love for me,",
      "Lead me to Calvary."
    ],
    "hymnStanzards": [
      [
        "King of my life I crown thee now",
        "Thine shall the glory be;",
        "Lest I forget thy thorn-crowned brow,",
        "Lead me to Calvary."
      ],
      [
        "Let me like Mary, thru the gloom,",
        "Come with a gift to thee;",
        "Show to me now the empty tomb ",
        "Lead me to Calvary."
      ],
      [
        "May I be willing, Lord, to bear",
        "Daily my cross for thee;",
        "Even thy cup of grief to share",
        "Thou hast borne all for me."
      ]
    ]
  },
  {
    "hymnNo": "82",
    "title": "When I Survey The Wondrous Cross",
    "category": "commitment & consecration",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "When I survey the wondrous cross",
        "On which the Prince of glory died",
        "My richest gain I count but loss,",
        "And pour contempt on all my pride."
      ],
      [
        "See, from His head, His hands, His feet,",
        "Sorrow and love flow mingled down;",
        "Did e'er such love and sorrow met,",
        "Or thorns compose so rich a crown?"
      ],
      [
        "Were the whole realm of nature mine,",
        "That were an offering far too small;",
        "Love so amazing, so divine,",
        "Demands my soul, my life, my all."
      ]
    ]
  },
  {
    "hymnNo": "83",
    "title": "Thy Word Have I Hid In My Heart",
    "category": "commitment & consecration",
    "hymnChorus": [
      "Thy Word have I hid in my heart…",
      "That I might not sin against thee…",
      "That I might not sin, that I might not sin,",
      "Thy Word have I hid in my heart."
    ],
    "hymnStanzards": [
      [
        "Thy Word is a lamp to my feet;",
        "A light to my path always;",
        "To guide and to save me from sin,",
        "And show me the heavenly way."
      ],
      [
        "For ever o Lord is Thy Word",
        "Established and fixed on high;",
        "Thy faithfulness to all men",
        "Abideth for ever nigh."
      ],
      [
        "At morning, at noon, and at night",
        "I ever will give Thee praise;",
        "For Thou art my portion, O Lord,",
        "And shall be though all my days!"
      ],
      [
        "Through Him whom Thy Word hath foretold,",
        "The Saviour and Morning Star,",
        "Salvation and peace have been brought",
        "To those who have strayed afar."
      ]
    ]
  },
  {
    "hymnNo": "84",
    "title": "Deeper Deeper In The Love Of Jesus",
    "category": "commitment & consecration",
    "hymnChorus": [
      "O deep...er yet, I pray,...",
      "And high...er everyday...",
      "And wis...er, blessed Lord,",
      "In Thy precious, holy word."
    ],
    "hymnStanzards": [
      [
        "Deeper, deeper, in the love of Jesus,",
        "Daily let me go;",
        "Higher, higher in the school of wisdom,",
        "More of grace to know."
      ],
      [
        "Deeper, deeper! blessed Holy Spirit,",
        "Take me deeper still,",
        "Till my life is wholly lost in Jesus",
        "And His perfect will."
      ],
      [
        "Deeper, deeper! though it cost hard trials,",
        "Deeper let me go!",
        "Rooted in the holy love of Jesus,",
        "Let me fruitful grow."
      ],
      [
        "Deeper, higher everyday in Jesus,",
        "Till all conflict past,",
        "Finds me conqu'ror, and in His own image",
        "Perfected at last."
      ]
    ]
  },
  {
    "hymnNo": "85",
    "title": "Give Of Your Best To The Master",
    "category": "commitment & consecration",
    "hymnChorus": [
      "Give of your best to the Master;",
      "Give of the strength of your youth.",
      "Clad in salvation’s full armor,",
      "Join in the battle for truth."
    ],
    "hymnStanzards": [
      [
        "Give of the strength of your youth.",
        "Throw your soul’s fresh, glowing ardor",
        "Into the battle for truth.",
        "Jesus has set the example,",
        "Dauntless was He, young and brave.",
        "Give Him your loyal devotion;",
        "Give Him the best that you have."
      ],
      [
        "Give of your best to the Master;",
        "Give Him first place in your heart.",
        "Give Him first place in your service;",
        "Consecrate every part.",
        "Give, and to you will be given;",
        "God His beloved Son gave.",
        "Gratefully seeking to serve Him,",
        "Give Him the best that you have."
      ],
      [
        "Give of your best to the Master;",
        "Naught else is worthy His love.",
        "He gave Himself for your ransom,",
        "Gave up His glory above.",
        "Laid down His life without murmur,",
        "You from sin’s ruin to save.",
        "Give Him your heart’s adoration;",
        "Give Him the best that you have.",
        ""
      ]
    ]
  },
  {
    "hymnNo": "86",
    "title": "Nothing Between",
    "category": "commitment & consecration",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Nothing between my soul and my Savior,",
        "Naught of this world’s delusive dream;",
        "I have renounced all sinful pleasure;",
        "Jesus is mine, there’s nothing between."
      ],
      [
        "Nothing between, like pride or station;",
        "Self or friends shall not intervene;",
        "Though it may cost me much tribulation,",
        "I am resolved, there’s nothing between."
      ],
      [
        "Nothing between, e’en many hard trials,",
        "Though the whole world against me convene;",
        "Watching with prayer and much self denial,",
        "I’ll triumph at last, there’s nothing between."
      ]
    ]
  },
  {
    "hymnNo": "87",
    "title": "Take My Life",
    "category": "commitment & consecration",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Take my life and let it be",
        "Consecrated, Lord, to Thee;",
        "Take my moments and my days,",
        "Let them flow in ceaseless praise."
      ],
      [
        "Take my voice, and let me sing",
        "Always, only, for my King;",
        "Take my lips, and let them be",
        "Filled with messages from Thee."
      ],
      [
        "Take my silver and my gold;",
        "Not a mite would I withhold;",
        "Take my intellect and use",
        "Every power as Thou shalt choose."
      ],
      [
        "Take my will, and make it thine,",
        "It shall be no longer mine;",
        "Take my heart, it is Thine own,",
        "It shall be Thy royal throne."
      ],
      [
        "Take my love; my Lord, I pour",
        "At Thy feet its treasure-store;",
        "Take myself, and I will be",
        "Ever, only, all for Thee."
      ]
    ]
  },
  {
    "hymnNo": "88",
    "title": "Wherever He Leads I'll Go",
    "category": "commitment & consecration",
    "hymnChorus": [
      "Wherever He leads I'll go,",
      "Wherever He leads I'll go,",
      "I'll follow my Christ, Who loves me so,",
      "Wherever He leads I'll go."
    ],
    "hymnStanzards": [
      [
        "\"Take up thy cross and follow me,\"",
        "I heard my Master say;",
        "\"I gave My life to ransom thee,",
        "Surrender your all today.\""
      ],
      [
        "He drew me closer to His side,",
        "I sought His will to know,",
        "And in that will I now abide,",
        "Wherever He leads I'll go."
      ],
      [
        "It may be through the shadows dim,",
        "Or o'er the stormy sea,",
        "I take my cross and follow Him,",
        "Wherever He leadeth me."
      ],
      [
        "My heart, my life, my all I bring",
        "To Christ Who loves me so;",
        "He is my Master, Lord, and King,",
        "Wherever He leads I'll go."
      ]
    ]
  },
  {
    "hymnNo": "89",
    "title": "O Jesus I Have Promised",
    "category": "commitment & consecration",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "O Jesus, I have promised",
        "To serve Thee to the end;",
        "Be Thou for ever near me,",
        "My Master and my Friend;",
        "I shall not fear the battle",
        "If Thou art by my side,",
        "Nor wander from the pathway",
        "If Thou wilt be my Guide."
      ],
      [
        "O let me hear Thee speaking",
        "In accents clear and still,",
        "Above the storms of passion,",
        "The murmurs of self-will;",
        "O speak to reassure me,",
        "To hasten or control;",
        "O speak, and make me listen,",
        "Thou Guardian of my soul."
      ],
      [
        "O Jesus, Thou hast promised,",
        "To all who follow Thee,",
        "That where Thou art in glory",
        "There shall Thy servant be;",
        "And, Jesus, I have promised",
        "To serve Thee to the end,",
        "O give me grace to follow",
        "My Master and my Friend."
      ],
      [
        "O let me see Thy footmarks,",
        "And in them plant mine own;",
        "My hope to follow duly",
        "Is in Thy strength alone;",
        "O guide me, call me, draw me,",
        "Uphold me to the end;",
        "And then in heav'n receive me,",
        "My Saviour and my Friend!"
      ]
    ]
  },
  {
    "hymnNo": "90",
    "title": "Oh Love That Will Not Let Me Go",
    "category": "commitment & consecration",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "O Love that wilt not let me go,",
        "I rest my weary soul in thee;",
        "I give thee back the life I owe,",
        "That in thine ocean depths its flow",
        "May richer, fuller be."
      ],
      [
        "O Joy that seekest me through pain,",
        "I cannot close my heart to thee;",
        "I trace the rainbow through the rain,",
        "And feel the promise is not vain,",
        "That morn shall tearless be."
      ],
      [
        "O Cross that liftest up my head,",
        "I dare not ask to fly from thee;",
        "I lay in dust life’s glory dead,",
        "And from the ground there blossoms red",
        "Life that shall endless be."
      ]
    ]
  },
  {
    "hymnNo": "91",
    "title": "Where He Leads Me",
    "category": "commitment & consecration",
    "hymnChorus": [
      "Where He leads me I will follow,",
      "Where He leads me I will follow,",
      "Where He leads me I will follow;",
      "I’ll go with Him, with Him, all the way."
    ],
    "hymnStanzards": [
      [
        "I can hear my Savior calling,",
        "I can hear my Savior calling,",
        "I can hear my Savior calling,",
        "“Take thy cross and follow, follow Me.\""
      ],
      [
        "I’ll go with Him through the garden,",
        "I’ll go with Him through the garden,",
        "I’ll go with Him through the garden,",
        "I’ll go with Him, with Him all the way."
      ],
      [
        "I’ll go with Him through the judgment,",
        "I’ll go with Him through the judgment,",
        "I’ll go with Him through the judgment,",
        "I’ll go with Him, with Him all the way."
      ],
      [
        "He will give me grace and glory,",
        "He will give me grace and glory,",
        "He will give me grace and glory,",
        "And go with me, with me all the way.",
        ""
      ]
    ]
  },
  {
    "hymnNo": "92",
    "title": "I Surrender All",
    "category": "commitment & consecration",
    "hymnChorus": [
      "I surrender all,",
      "I surrender all;",
      "All to Thee, my blessed Saviour,",
      "I surrender all."
    ],
    "hymnStanzards": [
      [
        "All to Jesus I surrender,",
        "All to Him I freely give;",
        "I will ever love and trust Him,",
        "In His presence daily live."
      ],
      [
        "All to Jesus I surrender,",
        "Humbly at His feet I bow;",
        "Worldly pleasures all forsaken,",
        "Take me, Jesus, take me now."
      ],
      [
        "All to Jesus I surrender,",
        "Lord, I give myself to Thee;",
        "Fill me with Thy love and power,",
        "Let Thy blessing fall on me."
      ],
      [
        "All to Jesus I surrender,",
        "Now I feel the sacred flame;",
        "O the joy of full salvation!",
        "Glory, glory to His name!"
      ]
    ]
  },
  {
    "hymnNo": "93",
    "title": "More Love To Thee",
    "category": "commitment & consecration",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "More love to Thee, O Christ, more love to Thee!",
        "Hear Thou the prayer I make on bended knee.",
        "This is my earnest plea: More love, O Christ, to Thee;",
        "More love to Thee, more love to Thee!"
      ],
      [
        "Let sorrow do its work, come grief or pain;",
        "Sweet are Thy messengers, sweet their refrain,",
        "When they can sing with me: More love, O Christ, to Thee;",
        "More love to Thee, more love to Thee!"
      ],
      [
        "Then shall my latest breath whisper Thy praise;",
        "This be the parting cry my heart shall raise;",
        "This still its prayer shall be: More love, O Christ to Thee;",
        "More love to Thee, more love to Thee!",
        ""
      ]
    ]
  },
  {
    "hymnNo": "94",
    "title": "Draw Me Nearer Blessed Jesus",
    "category": "commitment & consecration",
    "hymnChorus": [
      "Draw me nearer, nearer blessèd Lord,",
      "To the cross where Thou hast died.",
      "Draw me nearer, nearer, nearer blessèd Lord,",
      "To Thy precious, bleeding side."
    ],
    "hymnStanzards": [
      [
        "I am Thine, O Lord, I have heard Thy voice,",
        "And it told Thy love to me;",
        "But I long to rise in the arms of faith",
        "And be closer drawn to Thee."
      ],
      [
        "Consecrate me now to Thy service, Lord,",
        "By the power of grace divine;",
        "Let my soul look up with a steadfast hope,",
        "And my will be lost in Thine."
      ],
      [
        "O the pure delight of a single hour",
        "That before Thy throne I spend,",
        "When I kneel in prayer, and with Thee, my God",
        "I commune as friend with friend!"
      ],
      [
        "There are depths of love that I cannot know",
        "Till I cross the narrow sea;",
        "There are heights of joy that I may not reach",
        "Till I rest in peace with Thee.",
        ""
      ]
    ]
  },
  {
    "hymnNo": "95",
    "title": "Come Saviour Jesus From Above",
    "category": "commitment & consecration",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "COME, Saviour, Jesus, from above!",
        "Assist me with thy heavenly grace;",
        "Empty my heart of earthly love,",
        "And for thyself prepare the place."
      ],
      [
        "While in this region here below,",
        "No other good will I pursue;",
        "I'll bid this world of noise and show,",
        "With all its glittering snares, adieu!"
      ],
      [
        "That path with humble speed I'll seek,",
        "In which my Saviour's footsteps shine;",
        "Nor will I hear, nor will I speak,",
        "Of any other love but thine."
      ],
      [
        "Henceforth may no profane delight",
        "Divide this consecrated soul;",
        "Possess it thou, who hast the right,",
        "As Lord and Master of the whole."
      ],
      [
        "Wealth, honour, pleasure, and what else",
        "This short-enduring world can give,",
        "Tempt as ye will, my soul repels,",
        "To Christ alone resolved to live."
      ],
      [
        "Thee I can love, and thee alone,",
        "With pure delight and inward bliss:",
        "To know thou tak'st me for thine own,",
        "O what a happiness is this!"
      ],
      [
        "Nothing on earth do I desire,",
        "But thy pure love within my breast;",
        "This, only this, will I require,",
        "And freely give up all the rest."
      ]
    ]
  },
  {
    "hymnNo": "96",
    "title": "Peace Be Still",
    "category": "conflict & victory",
    "hymnChorus": [
      "\"The winds and the waves shall obey My will,",
      "Peace, be still!\"",
      "Whether the wrath of the storm-tossed sea,",
      "Or demons, or men, or whatever it be,",
      "No water can swallow the ship where lies",
      "The Master of ocean and earth and skies;",
      "They all shall sweetly obey My will;",
      "Peace, be still! Peace, be still!",
      "They all shall sweetly obey My will:",
      "Peace, peace, be still!"
    ],
    "hymnStanzards": [
      [
        "Master, the tempest is raging!",
        "The billows are tossing high!",
        "The sky is o'ershadowed with blackness,",
        "No shelter or help is nigh:",
        "\"Careth not Thou not that we perish?\"",
        "How canst Thou lie asleep,",
        "When each moment so madly is threatening",
        "A grave in the angry deep?"
      ],
      [
        "Master, with anguish of spirit",
        "I bow in my grief today;",
        "The depths of my sad heart are troubled;",
        "O waken and save, I pray!",
        "Torrents of sin and of anguish",
        "Sweep o'er my sinking soul!",
        "And I perish! I perish, dear Master;",
        "O hasten, and take control!"
      ],
      [
        "Master, the terror is over,",
        "The elements sweetly rest;",
        "Earth's sun in the calm lake is mirrored,",
        "And heaven's within my breast,",
        "Linger, O blessed Redeemer,",
        "Leave me alone no more;",
        "And with joy I shall make the blest harbour,",
        "And rest on the blissful shore."
      ]
    ]
  },
  {
    "hymnNo": "97",
    "title": "Oft In Danger Oft In Woe",
    "category": "conflict & victory",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Oft in danger, oft in woe,",
        "onward, Christians, onward go;",
        "bear the toil, maintain the strife,",
        "strengthened with the bread of life"
      ],
      [
        "Let not sorrow dim your eye;",
        "soon shall every tear be dry:",
        "let not fears your course impede;",
        "great your strength, if great your need."
      ],
      [
        "Let your drooping hearts be glad;",
        "march in heavenly armour clad;",
        "fight, nor think the battle long:",
        "soon shall victory wake your song."
      ],
      [
        "Onward then in battle move;",
        "more than conquerors ye shall prove:",
        "though opposed by many a foe,",
        "Christian soldiers, onward go."
      ]
    ]
  },
  {
    "hymnNo": "98",
    "title": "The Song Of The Solider",
    "category": "conflict & victory",
    "hymnChorus": [
      "Pour it forth a mighty anthem,",
      "Pour it forth a mighty anthem,",
      "Like the thunders of the sea;",
      "Through the blood of Christ our ransom,",
      "More than conquerors are we,",
      "More than conquerors are we,",
      "More than conquerors are we;",
      "Through the blood of Christ our ransom,",
      "More than conquerors are we."
    ],
    "hymnStanzards": [
      [
        "Rise, ye children of salvation,",
        "All who cleave to Christ the Head;",
        "Wake, arise, O mighty nation,",
        "Ere the foe on Zion tread."
      ],
      [
        "Saints, and heroes long before us",
        "Firmly on this ground have stood;",
        "See their banners waving o’er us,",
        "Conquerors though Jesus’ blood."
      ],
      [
        "Deathless, we are all unfearing,",
        "Life laid up with Christ in God;",
        "In the morn of His appearing",
        "Floweth forth, a glory flood. "
      ],
      [
        "Soon we all shall stand before Him,",
        "See and know our glorious Lord;",
        "Soon in joy and light adore Him,",
        "Each receiving his reward. "
      ]
    ]
  },
  {
    "hymnNo": "99",
    "title": "There Is Victory Within My Soul",
    "category": "conflict & victory",
    "hymnChorus": [
      "Victory, Victory, Vict’ry in my soul,",
      "I have glorious victory",
      "Since Jesus took control,",
      "Victory, Victory, sweeping like a flood,",
      "I have glorious victory thro’ Jesus’ blood."
    ],
    "hymnStanzards": [
      [
        "There is vict’ry within my soul",
        "For the Spirit with me abides,",
        "Let the waves of temptation roll,",
        "Jesus keeps me whate’er betides."
      ],
      [
        "Tho’ the conflict be fierce and long,",
        "Tho’ the tempter my heart assail,",
        "In my weakness yet I am strong,",
        "For with Jesus I’ll e’er prevail."
      ],
      [
        "I have victory over sin,",
        "I have victory o’er grave;",
        "Even death now has lost its sting,",
        "Halleluyah I know I’m saved."
      ]
    ]
  },
  {
    "hymnNo": "100",
    "title": "Christ Our Mighty Captain",
    "category": "conflict & victory",
    "hymnChorus": [
      "Forward! forward! 'tis the Lord's command.",
      "Forward! forward to the promised land;",
      "Forward! forward! let the chorus ring;",
      "We are sure to win with Christ our King!"
    ],
    "hymnStanzards": [
      [
        "Christ, our mighty Captain, leads against the foe;",
        "We will never falter when He bids us go;",
        "Tho' His righteous purpose we may never know,",
        "Yet we'll follow all the way."
      ],
      [
        "Satan's fearful onslaught cannot make us yield",
        "while we trust in Christ our Buckler and our shield",
        "pressing ever on the Spirit's sword we weild,",
        "And follow all the way"
      ],
      [
        "Let our glorious banner ever be unfurled;",
        "From its mighty stronghold evil shall be hurled;",
        "Christ, our mighty Captain, overcomes the world,",
        "And we follow all the way. "
      ],
      [
        "Fierce the battle rages, but 'twill not be long,",
        "Then triumphant shall we join the blessed throng,",
        "Joyfully uniting in the victor's song,",
        "If we follow all the way. "
      ]
    ]
  },
  {
    "hymnNo": "101",
    "title": "My Father Knows",
    "category": "conflict & victory",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "I know my heav’nly Father knows",
        "The storms that would my way oppose;",
        "But He can drive the clouds away,",
        "And turn the darkness into day."
      ],
      [
        "I know my heav’nly Father knows",
        "How frail I am to meet my foes;",
        "But He my cause will e’er defend,",
        "Uphold and keep me to the end."
      ],
      [
        "I know my heav’nly Father knows",
        "The hour my journey here will close;",
        "And may that hour, O faithful Guide,",
        "Find me safe sheltered by Thy side."
      ]
    ]
  },
  {
    "hymnNo": "102",
    "title": "The Healer",
    "category": "divine healing",
    "hymnChorus": [
      "HE WAS WOUNDED FOR OUR TRANSGRESSIONS, ",
      "HE WAS BRUISED FOR OUR INIQUITIES, ",
      "SURELY HE BORE OUR SORROWS,",
      "AND BY HIS STRIPES WE ARE HEALED"
    ],
    "hymnStanzards": [
      [
        "ON THE CROSS CRUCIFIED, IN GREAT SORROW HE DIED; ",
        "THE GIVER OF LIFE WAS HE, ",
        "YET MY LORD WAS DESPISED AND REJECTED OF MEN, ",
        "THIS JESUS OF CALVARY"
      ],
      [
        "PRICE FOR HEALING WAS PAID,",
        "AS THOSE CRUEL STRIPES WERE MADE,",
        "WITHIN PILATE'S JUDGEMENT HALL, ",
        "NOW HIS SUFF'RING AFFORD PERFECT HEALING FOR ALL, ",
        "THIS WONDERFUL HEALER'S MINE"
      ],
      [
        "CAME THE LEPER TO CHRIST, SAYING \"SURELY I KNOW, ",
        "THAT THOU, LORD CANST MAKE ME WHOLE\", ",
        "WHEN HIS GREAT FAITH WAS SEEN",
        "JESUS SAID, \"YES I WILL\",",
        "AND TOUCHED HIM AND MADE HIM CLEAN."
      ],
      [
        "HE HAS HEALED MY SICK SOUL, ",
        "MADE ME EV'RY WHIT WHOLE,",
        "AND HE'LL DO THE SAME FOR YOU, ",
        "HE'S THE SAME YESTERDAY AND TODAY AND FOR AYE, ",
        "THIS HEALER OF MEN TODAY.",
        ""
      ]
    ]
  },
  {
    "hymnNo": "103",
    "title": "He Healed Them All",
    "category": "divine healing",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "He healed them all – the blind, the lame, the palsied,",
        "The sick in body and the weak in mind,",
        "Whoever came, no matter how afflicted,",
        "Were sure a sovereign remedy to find."
      ],
      [
        "And is our Lord, the kind, the good, the tender,",
        "Less loving now than in those days of old?",
        "Or is it that our faith is growing feeble,",
        "And Christian energy is waxing cold?"
      ],
      [
        "Why do we not with equal expectation,",
        "Now bring our sick ones to the Lord in prayer",
        "Right through the throng of unbelieving scruples",
        "Up to His very side and leave them there?"
      ],
      [
        "He never health refused in bygone ages,",
        "Nor feared to take the “chastisement” away;",
        "Then why not ask it now, instead of praying",
        "For “patience” to endure from day to day?"
      ]
    ]
  },
  {
    "hymnNo": "104",
    "title": "Tell Somebody",
    "category": "evangelism",
    "hymnChorus": [
      "Tell somebody, tell somebody",
      "All of the wonderful love you know;",
      "Tell somebody, tell somebody,",
      "Christ and His goodness show."
    ],
    "hymnStanzards": [
      [
        "1 Are you trusting the love of the Savior divine,",
        "Does His smile make the darkest day bright?",
        "Are you laying on Him all the burdens that fret,",
        "Does the cross that He gave you seem light?"
      ],
      [
        "Are you resting today ‘neath the sheltering Rock,",
        "Have you given your Lord full control?",
        "Are you glad in the love that redeemed you from sin,",
        "Has He spoken His peace to your soul? "
      ],
      [
        "Is there victory now where there once was defeat,",
        "Blessed triumph through Jesus alone?",
        "Tell somebody today of a Master and Friend,",
        "And His wonderful mercy make known."
      ]
    ]
  },
  {
    "hymnNo": "105",
    "title": "I'll Tell The World",
    "category": "evangelism",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "I'll tell the world that I'm a Christian –",
        "I'm not ashamed His name to bear;",
        "I'll tell the world that I'm a Christian,",
        "I'll take Him with me anywhere;",
        "I'll tell the world how Jesus saved me,",
        "And how He gave me a life brand-new;",
        "And I know that if you trust Him,",
        "That all He gave me He'll give to you;",
        "I'll tell the world that He's my Saviour,",
        "No other one could love me so;",
        "My life my all is His for ever,",
        "And where He leads me I will go."
      ]
    ]
  },
  {
    "hymnNo": "106",
    "title": "Tell The Whole Wide",
    "category": "evangelism",
    "hymnChorus": [
      "Tell the world, the whole wide world,",
      "Bear the news from shore to shore;",
      "Tell the whole wide world of Jesus,",
      "Praise His name forevermore!"
    ],
    "hymnStanzards": [
      [
        "1. Tell the whole wide world of Jesus,",
        "Bear the news from shore to shore;",
        "Telling sinners of the Savior,",
        "Let the light spread more and more."
      ],
      [
        "Send abroad the Gospel heralds,",
        "Let them take the blessèd light;",
        "Into every land of darkness,",
        "Piercing through the shades of night."
      ],
      [
        "Yes, we’ll send the joyful message,",
        "Over mountain, over wave;",
        "Telling everywhere of Jesus,",
        "And His mighty power to save."
      ],
      [
        "While we pray for other nations,",
        "Send them help with willing hand,",
        "Let us not forget the home fields,",
        "Jesus for our native land! "
      ]
    ]
  },
  {
    "hymnNo": "107",
    "title": "Send The Gospel Light",
    "category": "evangelism",
    "hymnChorus": [
      "Go and tell them, go and tell them, ",
      "Jesus died for sinful men. ",
      "Go and tell them, go and tell them, ",
      "He is coming, He is coming, ",
      "He is coming back again."
    ],
    "hymnStanzards": [
      [
        "Send the gospel of salvation, ",
        "to a world of dying men; ",
        "tell it out to every nation, ",
        "'til the Lord shall come again. "
      ],
      [
        "'This the church's great commission, ",
        "'This the Master's last command; ",
        "Christ has died for every creature, ",
        "tell it out in every land. "
      ],
      [
        "Christ is gathering out a people ",
        "to His name from every race; ",
        "haste to give the invitation ",
        "ere shall end the day of grace. "
      ],
      [
        "Give the gospel as a witness ",
        "to a world of sinful men; ",
        "till the Bride shall be completed, ",
        "and the Lord shall come again",
        ""
      ]
    ]
  },
  {
    "hymnNo": "108",
    "title": "Must I Go And Empty Handed",
    "category": "evangelism",
    "hymnChorus": [
      "\"Must I go, and empty-handed?\"",
      "Must I meet my Saviour so?",
      "Not one soul with which to greet Him,",
      "Must I empty-handed go?"
    ],
    "hymnStanzards": [
      [
        "\"Must I go and empty-handed,\"",
        "Thus my dear Redeemer meet?",
        "Not one day of service give Him,",
        "Lay no trophy at His feet?"
      ],
      [
        "Not at death I shrink nor falter,",
        "For my Saviour saves me now;",
        "But to meet Him empty-handed,",
        "Thought of that now clouds my brow."
      ],
      [
        "O the years in sinning wasted,",
        "Could I but recall them now;",
        "I would give them to my Saviour,",
        "To His will I'd gladly bow."
      ],
      [
        "O ye saints, arouse, be earnest,",
        "Up and work while yet 'tis day;",
        "Ere the night of death o'ertake thee,",
        "Strive for souls while still you may."
      ]
    ]
  },
  {
    "hymnNo": "109",
    "title": "To The Work",
    "category": "evangelism",
    "hymnChorus": [
      "Toiling on, toiling on,",
      "Toiling on, toiling on;",
      "Let us hope, let us watch,",
      "And labor till the Master comes."
    ],
    "hymnStanzards": [
      [
        "To the work! to the work! we are servants of God,",
        "Let us follow the path that our Master has trod;",
        "With the balm of His counsel our strength to renew,",
        "Let us do with our might what our hands find to do."
      ],
      [
        "To the work! to the work! let the hungry be fed,",
        "To the fountain of life let the weary be led;",
        "In the cross and its banner our glory shall be,",
        "While we herald the tidings, \"Salvation is free!\""
      ],
      [
        "To the work! to the work! there is labor for all,",
        "For the kingdom of darkness and error shall fall;",
        "And the name of Jehovah exalted shall be",
        "In the loud swelling chorus, \"Salvation is free!\" "
      ],
      [
        "To the work! to the work! in the strength of the Lord,",
        "And a robe and a crown shall our labor reward",
        "When the home of the faithful our dwelling shall be",
        "And we shout with the ransomed, \"Salvation is free!\"",
        ""
      ]
    ]
  },
  {
    "hymnNo": "110",
    "title": "Till The Whole World Knows",
    "category": "evangelism",
    "hymnChorus": [
      "Till the whole world knows,",
      "Till the whole world knows,",
      "I will shout and sing of Christ my King,",
      "Till the whole world knows."
    ],
    "hymnStanzards": [
      [
        "I will tell to all that God is love;",
        "For the world has never known",
        "The great compassion of His heart",
        "For the wayward and the lone."
      ],
      [
        "I'll tell of mercy's boundless tide,",
        "Like the waters of the sea,",
        "That covers every sin of man;",
        "'Tis salvation full and free."
      ],
      [
        "I'll tell of grace that keeps the soul,",
        "Of abiding peace within,",
        "Of faith that overcomes the world,",
        "With its tumult and its din."
      ],
      [
        "Eternal glory is the goal",
        "That awaits the sons of light;",
        "Eternal darkness, black as death,",
        "For the children of the night."
      ]
    ]
  },
  {
    "hymnNo": "111",
    "title": "Rescue The Perishing",
    "category": "evangelism",
    "hymnChorus": [
      "Rescue the perishing, ",
      "care for the dying,",
      "Jesus is merciful,",
      " Jesus will save."
    ],
    "hymnStanzards": [
      [
        "Rescue the perishing, care for the dying,",
        "Snatch them in pity from sin and the grave;",
        "Weep o'er the erring one, lift up the fallen,",
        "Tell them of Jesus the mighty to save."
      ],
      [
        "Though they are slighting Him, still He is waiting,",
        "Waiting the penitent child to receive;",
        "Plead with them earnestly, plead with them gently,",
        "He will forgive if they only believe."
      ],
      [
        "Down in the human heart, crushed by the tempter,",
        "Feelings lie buried that grace can restore;",
        "Touched by a loving heart, wakened by kindness,",
        "Chords that are broken will vibrate once more."
      ],
      [
        "Rescue the perishing, duty demands it,",
        "Strength for thy labour the Lord will provide;",
        "Back to the narrow way patiently win them,",
        "Tell the poor wanderer a Saviour has died."
      ]
    ]
  },
  {
    "hymnNo": "112",
    "title": "Win Them One By One",
    "category": "evangelism",
    "hymnChorus": [
      "So you bring the one next to you,",
      "And I’ll bring the one next to me;",
      "In all kinds of weather, we’ll all work together,",
      "And see what can be done;"
    ],
    "hymnStanzards": [
      [
        "1 If to Christ our only king",
        "Men redeemed we strive to bring,",
        "Just one way this may be done—",
        "We must win them one by one."
      ],
      [
        "If you’ll bring the one next to you,",
        "And I bring the one next to me,",
        "In no time at all we’ll have them all,",
        "So win them, win them, one by one."
      ],
      [
        "Side by side we stand each day,",
        "Saved are we, but lost are they;",
        "They will come if we but dare",
        "Speak a word backed up by prayer."
      ],
      [
        "Only cowards dare refuse,",
        "Dare this gift of God misuse;",
        "Ere some friend goes to his grave,",
        "Speak a word his soul to save."
      ],
      [
        "Not for hope of great reward",
        "Turn men’s hearts unto the Lord;",
        "Just to see a saved man smile",
        "Makes the effort well worth while."
      ]
    ]
  },
  {
    "hymnNo": "113",
    "title": "Go And Tell The Story",
    "category": "evangelism",
    "hymnChorus": [
      "Go and tell the story, tell it fer and wide,",
      "How the Lord of glory for the sinner died;",
      "And the soul that hears it, and in faith believes,",
      "Straightway he the cleansing from the Lord receives."
    ],
    "hymnStanzards": [
      [
        "Go and tell the story to thy friends to-day,",
        "How the Lord of glory met thee on thy way;",
        "How He cleansed thy spirit from the stain of sin,",
        "Driving out the foe who reigned thy heart within."
      ],
      [
        "Go and tell the story, of His pow'r to save,",
        "Of the sinful \"Legion\" sunk beneath the wave;",
        "Tell of His compassion, of His love so true,",
        "Of the wondrous things the Lord hath done for you."
      ],
      [
        "Go and tell the story, how He reigns above,",
        "Winning men to glory thro' His dying love;",
        "How He waits to crown them kings forevermore,",
        "In the home awaiting, on the other shore.",
        ""
      ]
    ]
  },
  {
    "hymnNo": "114",
    "title": "Brighten The Corner Where You Are",
    "category": "evangelism",
    "hymnChorus": [
      "Brighten the corner where you are!",
      "Brighten the corner where you are!",
      "Someone far from harbour you may guide across the bar,",
      "Brighten the corner where you are."
    ],
    "hymnStanzards": [
      [
        "Do not wait until some deed of greatness you may do,",
        "Do not wait to shed your light afar;",
        "To the many duties ever near you now be true,",
        "Brighten the corner where you are."
      ],
      [
        "Just above are clouded skies that you may help to clear,",
        "Let not narrow self your way debar;",
        "Though into one heart alone may fall your song of cheer,",
        "Brighten the corner where you are."
      ],
      [
        "Here for all your talent you will surely find a need,",
        "Here reflect the Bright and Morning star;",
        "Even from your humble hand the bread of life may feed,",
        "Brighten the corner where you are."
      ]
    ]
  },
  {
    "hymnNo": "115",
    "title": "Lift Him Up",
    "category": "evangelism",
    "hymnChorus": [
      "Lift Him up…Lift Him up …",
      "Still He speaks from eternity:",
      "\"And I, if I be lifted up from the earth,",
      "Will draw all men unto Me.\""
    ],
    "hymnStanzards": [
      [
        "How to reach the masses, men of every birth,",
        "For an answer Jesus gave the key:",
        "\"And I, if I be lifted up from the earth,",
        "Will draw all men unto Me.\""
      ],
      [
        "Oh! The world is hungry for the living bread,",
        "Lift the Saviour up for them to see;",
        "Trust Him, and do not doubt the words that He said,",
        "\"I'll draw all men unto Me.\""
      ],
      [
        "Don't exalt the preacher, don't exalt the pew,",
        "Preach the Gospel simple, full and free;",
        "Prove Him and you will find that promise is true,",
        "\"I'll draw all men unto me.\""
      ],
      [
        "Lift Him up by living as a Christian ought,",
        "Let the world in you the Saviour see;",
        "Then men will gladly follow Him who once taught,",
        "\"I'll draw all men unto me.\""
      ]
    ]
  },
  {
    "hymnNo": "116",
    "title": "Carry Your Bible",
    "category": "evangelism",
    "hymnChorus": [
      "Take it wherever you go,",
      "Take it wherever you go,",
      "God’s message of love,",
      "Sent down from above,",
      "O take it wherever you go."
    ],
    "hymnStanzards": [
      [
        "Carry your Bible with you,",
        "Let all its blessings outflow;",
        "It will supply you each moment,",
        "Take it wherever you go."
      ],
      [
        "Carry the word of pardon,",
        "Sweeter each day it will grow;",
        "Somewhere some heart will be waiting,",
        "Take it wherever you go."
      ],
      [
        "Carry the wondrous story,",
        "Tell it to hearts plunged in woe;",
        "This word of gracious redemption,",
        "Take it wherever you go. "
      ],
      [
        "Carry the word of promise;",
        "Sinners unpardoned may know",
        "God’s path from sin unto safety,",
        "Take it wherever you go."
      ]
    ]
  },
  {
    "hymnNo": "117",
    "title": "Show A Little Bit Of Love And Kindness",
    "category": "evangelism",
    "hymnChorus": [
      "Show a little bit of love and kindness,",
      "Never go along with hatred's blindness,",
      "Take a little time to reach for joy and wear a happy face;",
      "Sing a little bit when the days are dreary,",
      "Give a little help to a friend who's weary ",
      "That's the way to make the world a happy place."
    ],
    "hymnStanzards": [
      [
        "Sing a song, spread some cheer,",
        "There are sad and lonely people ev'rywhere;",
        "Be a friend, show some love,",
        "It will lift them from the dungeons of despair."
      ],
      [
        "Offer help, bring some hope,",
        "To the fainting and discouraged on life's road;",
        "See a need, lend a hand,",
        "There are many who are crushed beneath their load."
      ],
      [
        "Be a light, show the way,",
        "Be a light within the night for those astray;",
        "Speak a word, loving word,",
        "That will bring them back to walk the narrow way."
      ]
    ]
  },
  {
    "hymnNo": "118",
    "title": "I Love To Tell The Story",
    "category": "evangelism",
    "hymnChorus": [
      "I love to tell the story! ",
      "'twill be my theme in glory",
      "to tell the old, old story ",
      "of Jesus and his love."
    ],
    "hymnStanzards": [
      [
        "I love to tell the story ",
        "of unseen things above,",
        "of Jesus and his glory, ",
        "of Jesus and his love.",
        "I love to tell the story ",
        "because I know 'tis true;",
        "it satisfies my longings ",
        "as nothing else could do."
      ],
      [
        "I love to tell the story; ",
        "more wonderful it seems",
        "than all the golden fancies ",
        "of all our golden dreams.",
        "I love to tell the story, ",
        "it did so much for me;",
        "and that is just the reason ",
        "I tell it now to thee."
      ],
      [
        "I love to tell the story; ",
        "'tis pleasant to repeat",
        "what seems, each time I tell it, ",
        "more wonderfully sweet.",
        "I love to tell the story, ",
        "for some have never heard",
        "the message of salvation ",
        "from God's own holy Word. "
      ],
      [
        "I love to tell the story, ",
        "for those who know it best",
        "seem hungering and thirsting ",
        "to hear it like the rest.",
        "And when in scenes of glory ",
        "I sing the new, new song,",
        "'twill be the old, old story",
        "that I have loved so long."
      ]
    ]
  },
  {
    "hymnNo": "119",
    "title": "Do Something For Others",
    "category": "evangelism",
    "hymnChorus": [
      "Do something for others,",
      "Something for others today!",
      "Duty demands it,",
      "And Jesus commands it!",
      "Do something for others today"
    ],
    "hymnStanzards": [
      [
        "Many a soul in the battle of life",
        "Trembles with fear at the din and the strife,",
        "Bearing alone, amid trial and care,",
        "Burdens and sorrows God bids you to share."
      ],
      [
        "Many in doubt or in fear of the way,",
        "Mutely appeal for your guidance today;",
        "On your demeanor the choice may depend—",
        "Are you concerned for the stranger or friend? "
      ],
      [
        "Many, disheartened by cruel deceit,",
        "Broken and worn by the pangs of defeat,",
        "Doubting, despairingly, helplessly stand,",
        "Waiting, perhaps, for your strengthening hand."
      ],
      [
        "Many are turning away from the right",
        "Into the maze of the shadows of night;",
        "Go to them, speak to them, over them pray,",
        "Help them, support them—do something today. [Refrain]"
      ]
    ]
  },
  {
    "hymnNo": "120",
    "title": "Speak A Word For Jesus",
    "category": "evangelism",
    "hymnChorus": [
      "Speak just a word,",
      "Ever to Him be true;",
      "Speak just a word,",
      "Tell what He's doing for you!"
    ],
    "hymnStanzards": [
      [
        "Speak just a word for Jesus,",
        "Tell how he died for you;",
        "Often repeat the story,",
        "Wonderful, glad, and true!"
      ],
      [
        "Speak just a word for Jesus,",
        "Tell how He helps you live;",
        "Tell of the strength and comfort",
        "Which He will freely give! "
      ],
      [
        "Speak just a word for Jesus,",
        "Do not for others wait;",
        "Gladly proclaim the message",
        "Soon it will be too late! "
      ],
      [
        "Speak just a word for Jesus,",
        "Why should you doubt or fear?",
        "Surely His love will bless it;",
        "Some one will gladly hear. "
      ],
      [
        "Speak just a word for Jesus,",
        "Tell of His love for men!",
        "Some one distressed may listen,",
        "Willing to trust Him then. "
      ]
    ]
  },
  {
    "hymnNo": "121",
    "title": "Somebody Else Needs Him Too",
    "category": "evangelism",
    "hymnChorus": [
      "Somebody somewhere perhaps at you side",
      "somewhere is waiting for you Say  that ",
      "for all jesus suffered and died; they needs him ",
      "they need him too"
    ],
    "hymnStanzards": [
      [
        "If you've found Jesus ",
        "the friend  that you",
        "need if He is loving and true,",
        "if you  have found him a saviour indeed,",
        "Somebody else needs him too"
      ],
      [
        "If you are happy, and praise fills your heart,",
        "Trust him to carry you through ",
        "if He His Spirit and love can",
        "impart Somebody else needs Him too.."
      ],
      [
        "If you have comfort in being God's child",
        "If he is faithful to you Think when you see those whom",
        "sin has defiled Somebody else needs Him, tooo.."
      ],
      [
        "When the lord gives you His love and grace ",
        "somethings he give you to do;",
        "you have the gospel  with others to share",
        "somebody needs him too..."
      ]
    ]
  },
  {
    "hymnNo": "122",
    "title": "Somebody Needs Your Love",
    "category": "evangelism",
    "hymnChorus": [
      "Somebody needs your love,",
      "Somebody needs your love,",
      "Someone in sadness,",
      "Yearning for gladness,",
      "Somebody needs your love."
    ],
    "hymnStanzards": [
      [
        "Out in the darkness of sorrow and sin,",
        "Somebody needs your love;",
        "Led by the Master, that soul you may win,",
        "Somebody needs your love."
      ],
      [
        "Many are helpless, and wait for your call,",
        "Somebody needs your love;",
        "Show them that Jesus is all and in all,",
        "Somebody needs your love."
      ],
      [
        "Some one is tempted to turn from the right,",
        "Somebody needs your love;",
        "Longing for courage and strength for the fight,",
        "Somebody needs your love."
      ],
      [
        "Some are down-hearted, in sorrow they roam,",
        "Somebody needs your love;",
        "Many are sighing for heaven and home,",
        "Somebody needs your love."
      ]
    ]
  },
  {
    "hymnNo": "123",
    "title": "No One Like My Saviour",
    "category": "grace & forgiveness",
    "hymnChorus": [
      "No one, no one like my precious Saviour,",
      "No one, no, such a friend can be;",
      "No one, no one like my precious Saviour,",
      "Glory, glory, Jesus cares for me."
    ],
    "hymnStanzards": [
      [
        "There’s no one like my Saviour,",
        "No friend can be like Him;",
        "My never failing sunshine",
        "When earthly lights grow dim;",
        "When summer flow'rs are blooming,",
        "The brightness of my joy;",
        "O, may His happy service",
        "My heart and life employ!"
      ],
      [
        "There’s no one like my Saviour;",
        "In seasons of distress",
        "He draws me closer to Him,",
        "To comfort and to bless;",
        "He gives me in temptation",
        "The strength of His right arm;",
        "His angels camp around me",
        "To keep me from all harm. "
      ],
      [
        "There’s no one like my Saviour;",
        "He pardons all my sin,",
        "And gives his Holy Spirit",
        "A springing well within;",
        "He leads me out to service",
        "With gentle touch and mild;",
        "O wonder of all wonders",
        "That I should be His child!"
      ],
      [
        "There’s no one like my Saviour,",
        "Come now, and find it true;",
        "He gave His life a ransom,",
        "His blood was shed for you;",
        "Then when we reach the City",
        "Of everlasting light,",
        "We’ll sing with saints and angels,",
        "All honour, pow'r and might."
      ]
    ]
  },
  {
    "hymnNo": "124",
    "title": "Christ Receiveth Sinful Men",
    "category": "grace & forgiveness",
    "hymnChorus": [
      "Sing it o'er.. and o'er again...",
      "Christ receiv..eth sinful men...",
      "Make the mes..sages clear and plain",
      "Christ receiv...eth sinful me"
    ],
    "hymnStanzards": [
      [
        "Sinners Jesus will receive: ",
        "Sound this word of grace to all ",
        "Who the heav'nly pathway leave, ",
        "All who linger, all who fall."
      ],
      [
        "Now my heart condemns me not, ",
        "Pure before the law I stand; ",
        "He who cleansed me from all spot ",
        "Satisfied its last demand."
      ],
      [
        "Christ receiveth sinful men, ",
        "Even me with all my sin; ",
        "Purged from ev’ry spot and stain, ",
        "Heav’n with Him I enter in."
      ]
    ]
  },
  {
    "hymnNo": "125",
    "title": "Wondeful Grace Of Jesus",
    "category": "grace & forgiveness",
    "hymnChorus": [
      "Wonderful the matchless Grace of Jesus,",
      "the matchless Grace of Jesus,",
      "Deeper than the mighty rolling sea;",
      "the rolling sea;",
      "Wonderful Grace, all sufficient for me, for even",
      "Higher than the mountain, sparkling like a fountain,",
      "All sufficient Grace for even me.",
      "Broader than the scope of my transgressions,",
      "sing it!",
      "Greater far than all my sin and shame",
      "my sin and shame,",
      "O magnify the precious name of Jesus,",
      "PRAISE HIS NAME!"
    ],
    "hymnStanzards": [
      [
        "Wonderful Grace of Jesus, greater than all my sin;",
        "How shall my tongue describe it,",
        "Where shall its praise begin?",
        "Taking away my burden, setting my spirit free;",
        "O the Wonderful Grace of Jesus reaches me!"
      ],
      [
        "Wonderful Grace of Jesus, reaching to all the lost;",
        "By it I have been pardoned, saved to the uttermost.",
        "Chains have been torn asunder, giving me liberty;",
        "O the Wonderful Grace of Jesus, reaches me!"
      ],
      [
        "Wonderful Grace of Jesus, reaching the most defiled;",
        "By its transforming power,",
        "Making me God's dear child,",
        "Purchasing peace and Heaven, for all eternity;",
        "And the Wonderful Grace of Jesus, reaches me!",
        ""
      ]
    ]
  },
  {
    "hymnNo": "126",
    "title": "Great God Of Wonders",
    "category": "grace & forgiveness",
    "hymnChorus": [
      "Who is a pardoning God like Thee?",
      "or Who has grace so rich and free?"
    ],
    "hymnStanzards": [
      [
        "Great God of wonders!",
        "All Thy ways Are matchless,",
        "Godlike and divine;",
        "But the fair glories of Thy grace",
        "More Godlike and unrivalled shine."
      ],
      [
        "In wonder lost, in trembling joy,",
        "We take the pardon of our God:",
        "Pardon for crimes of deepest dye,",
        "A pardon bought with Jesus' blood."
      ],
      [
        "Pardon - from an offended God!",
        "Pardon - for sins of deepest dye!",
        "Pardon - bestowed throughh Jesus' blood!",
        "Pardon - that brings the rebel nigh!"
      ],
      [
        "O may this strange,",
        "this matchless grace,",
        "This Godlike miracle of love,",
        "Fill the wide earth with grateful praise,",
        "And all the angelic chorus above!"
      ]
    ]
  },
  {
    "hymnNo": "127",
    "title": "Rock Of Ages Cleft For Me",
    "category": "grace & forgiveness",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Rock of ages, cleft for me,",
        "Let me hide myself in Thee;",
        "Let the water and the blood,",
        "From Thy wounded side which flowed,",
        "Be of sin the double cure,",
        "Cleanse me from its guilt and pow'r."
      ],
      [
        "Nothing in my hands I bring,",
        "Simply to Thy cross I cling;",
        "Naked come to Thee for dress,",
        "Helpless look to Thee for grace,",
        "Foul I to the fountain fly,",
        "Cleanse me, Saviour, or I die."
      ],
      [
        "While I draw this fleeting breath,",
        "When mine eyes are closed in death;",
        "While I soar through tracks unknown, ",
        "See Thee on Thy judgement throne,",
        "Rock of ages, cleft for me,",
        "Let me hide myself in Thee."
      ]
    ]
  },
  {
    "hymnNo": "128",
    "title": "Vicory In Jesus",
    "category": "grace & forgiveness",
    "hymnChorus": [
      "O victory in Jesus,",
      "My Savior, forever.",
      "He sought me and bought me",
      "With His redeeming blood;",
      "He loved me ere I knew Him",
      "And all my love is due Him,",
      "He plunged me to victory,",
      "Beneath the cleansing flood."
    ],
    "hymnStanzards": [
      [
        "I heard an old, old story,",
        "How a Savior came from glory,",
        "How He gave His life on Calvary",
        "To save a wretch like me;",
        "I heard about His groaning,",
        "Of His precious blood's atoning,",
        "Then I repented of my sins",
        "And won the victory. "
      ],
      [
        "I heard about His healing,",
        "Of His cleansing pow'r revealing.",
        "How He made the lame to walk again",
        "And caused the blind to see;",
        "And then I cried, \"Dear Jesus,",
        "Come and heal my broken spirit,\"",
        "And somehow Jesus came and bro't",
        "To me the victory. "
      ],
      [
        "I heard about a mansion",
        "He has built for me in glory.",
        "And I heard about the streets of gold",
        "Beyond the crystal sea;",
        "About the angels singing,",
        "And the old redemption story,",
        "And some sweet day I'll sing up there",
        "The song of victory. "
      ]
    ]
  },
  {
    "hymnNo": "129",
    "title": "Grace Greater Than Our Sin",
    "category": "grace & forgiveness",
    "hymnChorus": [
      "Grace, grace, God's grace,",
      "Grace that will pardon and cleanse within;",
      "Grace, grace, God's grace,",
      "Grace that is greater than all our sin."
    ],
    "hymnStanzards": [
      [
        "Marvellous grace of our loving Lord,",
        "Grace that exceeds our sin and our guilt,",
        "Yonder on Calvary's mount outpoured,",
        "There where the blood of the Lamb was split."
      ],
      [
        "Sin and despair like the sea waves cold,",
        "Threaten the soul with infinite loss;",
        "Grace that is greater, yes, grace untold,",
        "Points to the Refuge, the Mighty Cross."
      ],
      [
        "Dark is the stain that we cannot hide,",
        "What can avail to wash it away?",
        "Look! there is flowing a crimson tide;",
        "Whiter than snow you may be today."
      ],
      [
        "Marvellous, infinite, matchless grace,",
        "Freely bestowed on all who believe;",
        "You that are longing to see His face,",
        "Will you this moment His grace receive?"
      ]
    ]
  },
  {
    "hymnNo": "130",
    "title": "Just As I Am Without One Plea",
    "category": "grace & forgiveness",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Just as I am, without one plea,",
        "But that Thy blood was shed for me,",
        "And that Thou bid'st me come to Thee,",
        "O Lamb of God, I come! I come!"
      ],
      [
        "Just as I am, though tossed about",
        "With many a conflict, many a doubt;",
        "Fightings within, and fears without,",
        "O Lamb of God, I come, I come!"
      ],
      [
        "Just as I am, poor, wretched, blind;",
        "Sight, riches, healing of the mind;",
        "Yes, all I need, in Thee to find,",
        "O Lamb of God, I come, I come!"
      ],
      [
        "Just as I am, Thou wilt receive,",
        "Wilt welcome, pardon, cleanse, relieve;",
        "Because Thy promise I believe,",
        "O Lamb of God, I come, I come!"
      ],
      [
        "Just as I am, Thy love unknown",
        "Has broken every barrier down;",
        "Now, to be Thine, yea, Thine alone,",
        "O Lamb of God, I come, I come!"
      ],
      [
        "Just as I am, of that free love",
        "The breadth, length, depth and height to prove,",
        "Here for a season, then above,",
        "O Lamb of God, I come, I come.",
        ""
      ]
    ]
  },
  {
    "hymnNo": "131",
    "title": "In Tenderness He Sought Me",
    "category": "grace & forgiveness",
    "hymnChorus": [
      "Oh, the love that sought me!",
      "Oh, the blood that bought me!",
      "Oh, the grace that brought me to the fold,",
      "Wondrous grace that brought me to the fold!"
    ],
    "hymnStanzards": [
      [
        "In tenderness He sought me,",
        "Weary and sick with sin,",
        "And on His shoulders brought me",
        "Back to His fold again;",
        "While angels in His presence sang,",
        "Until the courts of heaven rang."
      ],
      [
        "He washed the bleeding sin-wounds,",
        "And poured in oil and wine;",
        "He whispered to assure me,",
        "\"I've found thee, thou art Mine,\"",
        "I never heard a sweeter voice,",
        "It made my aching heart rejoice!"
      ],
      [
        "He pointed to the nail-prints,",
        "For me His blood was shed,",
        "A mocking crown so thorny,",
        "Was placed upon His head:",
        "I wondered what He saw in me,",
        "To suffer such deep agony."
      ],
      [
        "I'm sitting in His presence,",
        "The sunshine of His face,",
        "While with adoring wonder",
        "His blessing I retrace;",
        "It seems as if eternal days",
        "Are far too short to sound His praise."
      ],
      [
        "So while the hours are passing,",
        "All is now perfect rest;",
        "I'm waiting for the morning,",
        "The brightest and the best,",
        "When He will call us to His side,",
        "To be with Him, His spotless bride."
      ]
    ]
  },
  {
    "hymnNo": "132",
    "title": "Running Over",
    "category": "grace & forgiveness",
    "hymnChorus": [
      "Running over, running over,",
      "My cups filled and running over",
      "Since the lord saved me",
      "I'm as happy as can be",
      "My cup's filled and running over"
    ],
    "hymnStanzards": [
      [
        "Since the Saviour came to this heart of mine",
        "My cups filled and running over",
        "Filling my poor soul with his joy divine",
        "My cup's filled and running over."
      ],
      [
        "With my Lord so Dear",
        "I have naught to fear",
        "My cup's filled and running over",
        "Though my way be drear",
        "He is ever near",
        "My cup's filled and running over"
      ],
      [
        "Even though I walk",
        "Through the death's darksome vale",
        "My cup's filled and running over",
        "Christ my lord shall be",
        "My comfort still",
        "My cup's filled and running over"
      ],
      [
        "Sinner seek the Lord",
        "Trust his precious word",
        "While the Angels round you hover",
        "Heaven's Bells will ring",
        "And you then will sing",
        "My Cup's filled and running over",
        ""
      ]
    ]
  },
  {
    "hymnNo": "133",
    "title": "Out Of My Bondage",
    "category": "grace & forgiveness",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Out of my bondage, sorrow and night,",
        "Jesus, I come, Jesus, I come;",
        "Into Thy freedom, gladness and light,",
        "Jesus, I come to Thee.",
        "Out of my sickness into Thy health,",
        "Out of my want and into Thy wealth,",
        "Out of my sin and into Thyself,",
        "Jesus, I come to Thee."
      ],
      [
        "Out of unrest and arrogant pride,",
        "Jesus, I come, Jesus, I come;",
        "Into Thy blessed will to abide,",
        "Jesus, I come to Thee.",
        "Out of myself to dwell in Thy love,",
        "Out of despair into raptures above,",
        "Upward for aye on wings like a dove,",
        "Jesus, I come to Thee."
      ],
      [
        "Out of the fear and dread of the tomb,",
        "Jesus I come, Jesus I come;",
        "Into the joy and light of Thy home,",
        "Jesus, I come to Thee.",
        "Out of the depths of ruin untold,",
        "Into the peace of Thy sheltering fold,",
        "Ever Thy glorious face to behold,",
        "Jesus, I come to Thee."
      ]
    ]
  },
  {
    "hymnNo": "134",
    "title": "And Can It Be That I Should Gain",
    "category": "grace & forgiveness",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "And can it be, that I should gain",
        "An interest in the Saviour's blood?",
        "Died He for me, who caused His pain?",
        "For me, who Him to death pursued?",
        "Amazing love! how can it be",
        "That Thou, my God, shouldst die for me?"
      ],
      [
        "He left His Father's throne above",
        "(So free, so infinite His Grace!)",
        "Emptied Himself of all but love,",
        "And bled for Adam's helpless race;",
        "'Tis mercy all, immense and free,",
        "For, O my God, it found out me!"
      ],
      [
        "Long my imprisoned spirit lay",
        "Fast bound in sin and nature's night;",
        "Thine eye diffused a quickening ray,",
        "I woke, the dungeon flamed with light;",
        "My chains fell off, my heart was free,",
        "I rose, went forth, and followed Thee."
      ],
      [
        "No condemnation now I dread,",
        "Jesus, and all in Him, is mine;",
        "Alive in Him, my living Head,",
        "And clothed in righteousness divine,",
        "Bold I approach the eternal throne,",
        "And claim the crown, through Christ my own."
      ]
    ]
  },
  {
    "hymnNo": "135",
    "title": "Tell Me The Old Old Story",
    "category": "grace & forgiveness",
    "hymnChorus": [
      "Tell me the story simply, ",
      "As to a little child;",
      "For I am weak and weary, ",
      "And helpless and defiled."
    ],
    "hymnStanzards": [
      [
        "Tell me the old, old story ",
        "Of unseen things above,",
        "Of Jesus and His glory, ",
        "Of Jesus and His love."
      ],
      [
        "Tell me the story slowly, ",
        "That I may take it in -",
        "That wonderful redemption,",
        "God's remedy for sin.",
        "Tell me the story often,",
        "For I forget so soon;",
        "The early dew of morning",
        "Has passed away at noon."
      ],
      [
        "Tell me the story softly,",
        "With the earnest tones and grave",
        "Remember I'm the sinner",
        "Whom God came to save",
        "Tell me the story always ",
        "If you would really be,",
        "In any timw of trouble",
        "A comforter to me"
      ],
      [
        "Tell me the same old story",
        "When you have cause to fear",
        "That this world's empty glory ",
        "Is costing me too dear.",
        "Yes, and when that world's glory ",
        "is dawning on my soul Tell me the old story",
        "Christ Jesus make thee whole"
      ]
    ]
  },
  {
    "hymnNo": "136",
    "title": "At Calvary",
    "category": "grace & forgiveness",
    "hymnChorus": [
      "Mercy there was great and grace was free,",
      "Pardon there was multiplied to me;",
      "There my burden'd soul found liberty,",
      "At Calvary."
    ],
    "hymnStanzards": [
      [
        "Years I spent in vanity and pride,",
        "Caring not my Lord was crucified,",
        "Knowing not it was for me He died",
        "On Calvary."
      ],
      [
        "By God's word at last my sin I learned,",
        "Then I trembl'd at the law I'd spurn'd,",
        "Till my guilty soul, imploring turned",
        "To Calvary."
      ],
      [
        "Now I've given to Jesus everything;",
        "Now I gladly own Him as my King;",
        "Now my raptured soul can only sing",
        "Of Calvary."
      ],
      [
        "Oh, the love that drew salvation's plan!",
        "Oh, the grace that brought it down to man!",
        "Oh the mighty gulf that God did span",
        "At Calvary!"
      ]
    ]
  },
  {
    "hymnNo": "137",
    "title": "How Beautiful Heaven Must Be",
    "category": "heaven",
    "hymnChorus": [
      "How beautiful heaven must be,",
      "Sweet home of the happy and free;",
      "Fair haven of rest for the weary,",
      "How beautiful heaven must be."
    ],
    "hymnStanzards": [
      [
        "We read of a place that’s called heaven,",
        "It’s made for the pure and the free;",
        "These truths in God’s Word He hath given,",
        "How beautiful heaven must be."
      ],
      [
        "In heaven no drooping nor pining,",
        "No wishing for elsewhere to be;",
        "God’s light is forever there shining,",
        "How beautiful heaven must be."
      ],
      [
        "I'm longing to go to fair heaven, ",
        "To be with the happpy an free",
        "To spend the long ages in singing ",
        "How beautiful heaven must be"
      ],
      [
        "The angels so sweetly are singing,",
        "Up there by the beautiful sea;",
        "Sweet chords from their gold harps are ringing,",
        "How beautiful heaven must be. "
      ]
    ]
  },
  {
    "hymnNo": "138",
    "title": "When We All Get To Heaven",
    "category": "heaven",
    "hymnChorus": [
      "When we all get to heaven,",
      "What a day of rejoicing that will be!",
      "When we all see Jesus,",
      "We'll sing and shout the victory."
    ],
    "hymnStanzards": [
      [
        "Sing the wondrous love of Jesus,",
        "Sing His mercy and His grace;",
        "In the mansions bright and blessed,",
        "He'll prepare for us a place."
      ],
      [
        "While we walk the pilgrim pathway",
        "Clouds will overspread the sky;",
        "But when trav'ling days are over,",
        "Not a shadow, not a sigh."
      ],
      [
        "Let us then be true and faithful,",
        "Trusting, serving ev'ry day;",
        "Just one glimpse of Him in glory",
        "Will the toils of life repay."
      ],
      [
        "Onward to the prize before us!",
        "Soon His beauty we'll behold;",
        "Soon the pearly gates will open,",
        "We shall tread the streets of gold."
      ]
    ]
  },
  {
    "hymnNo": "139",
    "title": "Beautiful Home",
    "category": "heaven",
    "hymnChorus": [
      "Home, Beautiful Home!",
      "Brigh,t beautiful Home!",
      "Home, home of our Saviour,",
      "Bright, beautiful Home!"
    ],
    "hymnStanzards": [
      [
        "There is a Home eternal,",
        "Beautiful and bright,",
        "Where sweet joys supernal",
        "Never are dimm’d by night;",
        "White-rob’d angels are singing",
        "Ever around the bright throne;",
        "When, O when shall I see thee,",
        "Beautiful, beautiful Home?"
      ],
      [
        "Flow’rs are ever springing",
        "In that Home so fair,",
        "Thousands of children are singing",
        "Praises to Jesus there;"
      ],
      [
        "How they swell the glad anthems",
        "Ever around the bright throne;",
        "When, O when shall I see thee,",
        "Beautiful, beautiful Home?"
      ],
      [
        "Soon shall I join that anthem,",
        "Far beyond the sky;",
        "Christ became my ransom,",
        "Why should I fear to die?",
        "Soon my eyes shall behold Him",
        "Seated upon the bright throne;",
        "Then, O then shall I see thee,",
        "Beautiful, beautiful Home? "
      ]
    ]
  },
  {
    "hymnNo": "140",
    "title": "Laying My Treasure Up There",
    "category": "heaven",
    "hymnChorus": [
      "I am laying my treasure up there, up there,",
      "In that beautiful city so fair;",
      "When its glories unfold",
      "I'll have riches untold,",
      "For I'm laying my treasure up there."
    ],
    "hymnStanzards": [
      [
        "On the mountain of Zion beyond the blue sky,",
        "Stands a city so wondrous and fair;",
        "I expect to depart for that land, by and by,",
        "For I'm laying my treasure up there."
      ],
      [
        "There's a mansion awaiting God's people, I'm told,",
        "Which the Savior has gone to prepare;",
        "There the walls are of jasper, the streets are of gold,",
        "I am laying my treasure up there."
      ],
      [
        "All the love of my heart, and my soul, mind and strength,",
        "And the work that with Jesus I share,",
        "Are but some of the riches I'll find there at length,",
        "For I'm laying my treasure up there."
      ],
      [
        "So altho' a poor pilgrim on earth I may roam,",
        "Ever constant in watching and prayer,",
        "Soon I'll hear the glad summons to start for my home,",
        "For I'm laying my treasure up there."
      ]
    ]
  },
  {
    "hymnNo": "141",
    "title": "I Shall See The King",
    "category": "heaven",
    "hymnChorus": [
      "In His glory, I shall see the King,",
      "And forever endless praises sing;",
      "’Twas on Calvary Jesus died for me;",
      "I shall see the King some day."
    ],
    "hymnStanzards": [
      [
        "I shall see the King",
        "Where the angels sing;",
        "I shall see the King some day,",
        "In the better land,",
        "On the golden strand,",
        "And with Him shall ever stay."
      ],
      [
        "In the land of song,",
        "In the glory-throng,",
        "Where there never comes a night,",
        "With my Lord once slain",
        "I shall ever reign",
        "In the glory-land of light."
      ],
      [
        "I shall see the King,",
        "All my tributes bring,",
        "And shall look upon His face;",
        "Then my song shall be",
        "How He ransomed me",
        "And has kept me by His grace.",
        ""
      ]
    ]
  },
  {
    "hymnNo": "142",
    "title": "Holy Holy Is What The Angels Sing",
    "category": "heaven",
    "hymnChorus": [
      "Holy, holy, is what the angels sing,",
      "And I expect to help them make the courts of Heaven ring;",
      "But when I sing redemption’s story, they will fold their wings,",
      "For angels never felt the joys that our salvation brings."
    ],
    "hymnStanzards": [
      [
        "There is singing up in Heaven ",
        "such as we have never known,",
        "Where the angels sing the praises ",
        "of the Lamb upon the throne,",
        "Their sweet harps are ever tuneful, ",
        "and their voices always clear,",
        "O that we might be more like them ",
        "while we serve the Master here!"
      ],
      [
        "But I hear another anthem, ",
        "blending voices clear and strong,",
        "Unto Him who hath redeemed us ",
        "and hath bought us, is the song;",
        "We have come through tribulation ",
        "to this land so fair and bright,",
        "In the fountain freely flowing ",
        "He hath made our garments white."
      ],
      [
        "Then the angels stand and listen, ",
        "for they cannot join the song,",
        "Like the sound of many waters, ",
        "by that happy, blood washed throng,",
        "For they sing about great trials, ",
        "battles fought and vict’ries won,",
        "And they praise their great Redeemer, ",
        "who hath said to them, Well done. "
      ],
      [
        "So, although I’m not an angel, ",
        "yet I know that over there",
        "I will join a blessèd chorus ",
        "that the angels cannot share;",
        "I will sing about my Savior, ",
        "who upon dark Calvary",
        "Freely pardoned my transgressions, ",
        "died to set a sinner free."
      ]
    ]
  },
  {
    "hymnNo": "143",
    "title": "The End Of The Road",
    "category": "heaven",
    "hymnChorus": [
      "When I come to the end, the end of the road,",
      "To the land of eternity,",
      "When I come to the end of life’s long road,",
      "The face of my Lord I’ll see."
    ],
    "hymnStanzards": [
      [
        "When I come to the end of the long, long road,",
        "The shadows will flee away,",
        "And I’ll stand in the glorious light of God,",
        "Where dwelleth eternal day."
      ],
      [
        "Looking back o’er the years that were hard and drear,",
        "The hand of the Christ I’ll see;",
        "While my heart will go forth with a song of praise,",
        "Because of His love for me."
      ],
      [
        "When I come to the end of the long, long road,",
        "And trials will all be past,",
        "I shall look in the face of my dearest Friend,",
        "Safe home in His heav’n at last."
      ]
    ]
  },
  {
    "hymnNo": "144",
    "title": "I Wont Have To Cross Jordan Alone",
    "category": "heaven",
    "hymnChorus": [
      "I won't have to cross Jordan alone",
      "Jesus died all my sins to atone",
      "In the darkness I see",
      "He'll be waiting for me",
      "I won't have to cross Jordan alone"
    ],
    "hymnStanzards": [
      [
        "When I come to the river at the ending of day",
        "When the last winds of sorrow have blown",
        "There'll be somebody waiting to show me the way",
        "I won't have to cross Jordan alone"
      ],
      [
        "Often times I'm weary and troubled and sad",
        "When it seems that my friends have all flown",
        "There is one thought that cheers me and makes my heart glad",
        "I won't have to cross Jordan alone"
      ],
      [
        "I won't have to cross Jordan alone",
        "Jesus died all my sins to atone",
        "In the darkness I see",
        "He'll be waiting for me",
        "I won't have to cross Jordan alone"
      ],
      [
        "Though the billows of trouble and sorrow may sweep",
        "Christ the Savior will care for his own",
        "Till the end of my journey my soul he will keep",
        "And I won't have to cross Jordan alone"
      ],
      [
        "I won't have to cross Jordan alone",
        "Jesus died all my sins to atone",
        "In the darkness I see",
        "He'll be waiting for me",
        "I won't have to cross Jordan alone",
        ""
      ]
    ]
  },
  {
    "hymnNo": "145",
    "title": "When They Ring The Golden Bell",
    "category": "heaven",
    "hymnChorus": [
      "Don’t you hear the bells now ringing?",
      "Don’t you hear the angels singing?",
      "’Tis the glory hallelujah Jubilee.",
      "In that far-off sweet forever,",
      "Just beyond the shining river,",
      "When they ring the golden bells for you and me."
    ],
    "hymnStanzards": [
      [
        "There’s a land beyond the river,",
        "That we call the sweet forever,",
        "And we only reach that shore by faith’s decree;",
        "One by one we’ll gain the portals,",
        "There to dwell with the immortals,",
        "When they ring the golden bells for you and me."
      ],
      [
        "We shall know no sin or sorrow,",
        "In that haven of tomorrow,",
        "When our barque shall sail beyond the silver sea;",
        "We shall only know the blessing",
        "Of our Father’s sweet caressing,",
        "When they ring the golden bells for you and me."
      ],
      [
        "When our days shall know their number,",
        "And in death we sweetly slumber,",
        "When the King commands the spirit to be free;",
        "Nevermore with anguish laden,",
        "We shall reach that lovely Eden,",
        "When they ring the golden bells for you and me"
      ]
    ]
  },
  {
    "hymnNo": "146",
    "title": "Face To Face",
    "category": "heaven",
    "hymnChorus": [
      "Face to face I shall behold Him,",
      "Far beyond the starry sky;",
      "Face to face in all His glory,",
      "I shall see Him by and by!"
    ],
    "hymnStanzards": [
      [
        "Face to face with Christ, my Saviour,",
        "Face to face – what will it be?",
        "When with rapture I behold Him,",
        "Jesus Christ who died for me. "
      ],
      [
        "Only faintly now, I see Him,",
        "With the darkling veil between,",
        "But a blessed day is coming,",
        "When His glory shall be seen. "
      ],
      [
        "What rejoicing in His presence,",
        "When are banished grief and pain;",
        "When the crooked ways are straightened,",
        "And the dark things shall be plain. "
      ],
      [
        "Face to face! O blissful moment!",
        "Face to face – to see and know;",
        "Face to face with my Redeemer,",
        "Jesus Christ who loves me so."
      ]
    ]
  },
  {
    "hymnNo": "147",
    "title": "Sweet By And By",
    "category": "heaven",
    "hymnChorus": [
      "In the sweet by and by,",
      "We shall meet on that beautiful shore;",
      "In the sweet by and by,",
      "We shall meet on that beautiful shore."
    ],
    "hymnStanzards": [
      [
        "There's a land that is fairer than day,",
        "And by faith we can see it afar;",
        "For the Father waits over the way",
        "To prepare us a dwelling place there."
      ],
      [
        "We shall sing on that beautiful shore",
        "The melodious songs of the blessed;",
        "And our spirits shall sorrow no more,",
        "Not a sigh for the blessing of rest."
      ],
      [
        "To our bountiful Father above,",
        "We will offer our tribute of praise",
        "For the glorious gift of His love",
        "And the blessings that hallow our days."
      ]
    ]
  },
  {
    "hymnNo": "148",
    "title": "No Tears In Heaven",
    "category": "heaven",
    "hymnChorus": [
      "No tears No tears, no tears up there,",
      "Sorrow and pain will all have flown;",
      "No tears No tears, no tears up there;",
      "No tears in heaven will be known."
    ],
    "hymnStanzards": [
      [
        "1. No tears in heaven, no sorrows given.",
        "All will be glory in that land;",
        "There'll be no sadness, all will be gladness,",
        "When we shall join that happy band."
      ],
      [
        "Glory is waiting, waiting up yonder,",
        "Where we shall spend an endless day;",
        "There with our Savior, we'll be forever,",
        "Where no more sorrow can dismay."
      ],
      [
        "Some morning yonder, we'll cease to ponder",
        "O'er things this life has brought to view;",
        "All will be clearer, loved ones be dearer",
        "In heav'n where all will be made new."
      ]
    ]
  },
  {
    "hymnNo": "149",
    "title": "Farther Along",
    "category": "heaven",
    "hymnChorus": [
      "Farther along we'll know all about it,",
      "Farther along we'll understand why;",
      "Cheer up, my brother, live in the sunshine,",
      "We'll understand it all by and by."
    ],
    "hymnStanzards": [
      [
        "Tempted and tried we're oft made to wonder",
        "Why it should be thus all the day long,",
        "While there are others living about us,",
        "Never molested tho' in the wrong."
      ],
      [
        "When death has come and taken our loved ones,",
        "It leaves our home so lonely and drear;",
        "Then do we wonder why others prosper,",
        "Living so wicked year after year."
      ],
      [
        "Faithful till death said our loving Master,",
        "A few more days to labour and wait;",
        "Toils of the road will then seem as nothing,",
        "As we sweep through the beautiful gate."
      ],
      [
        "When we see Jesus coming in glory,",
        "When He comes from His home in the sky;",
        "Then we shall meet Him in that bright mansion,",
        "We'll understand it all by and by."
      ]
    ]
  },
  {
    "hymnNo": "150",
    "title": "Pentecostal Power",
    "category": "holy spirit",
    "hymnChorus": [
      "Lord, send the old-time power, the Pentecostal power!",
      "Thy floodgates of blessing, on us throw open wide!",
      "Lord, send the old-time power, the Pentecostal power!",
      "That sinners be converted and Thy Name glorified!"
    ],
    "hymnStanzards": [
      [
        "Lord, as of old, at Pentecost,",
        "Thou didst Thy pow’r display—",
        "With cleansing, purifying flame,",
        "Descend on us today."
      ],
      [
        "For mighty works for Thee, prepare",
        "And strengthen every heart;",
        "Come, take possession of Thine own,",
        "And nevermore depart."
      ],
      [
        "All self consume, all sin destroy!",
        "With earnest zeal endue",
        "Each waiting heart to work for Thee;",
        "O Lord, our faith renew!"
      ],
      [
        "Speak, Lord! before Thy throne we wait,",
        "Thy promise we believe,",
        "And will not let Thee go until",
        "The blessing we receive."
      ]
    ]
  },
  {
    "hymnNo": "151",
    "title": "There Shall Be Showers Of Blessing",
    "category": "holy spirit",
    "hymnChorus": [
      "Showers of blessing,",
      "Showers of blessing we need;",
      "Mercy drops round us are falling,",
      "But for the showers we plead."
    ],
    "hymnStanzards": [
      [
        "\"There shall be showers of blessing:\"",
        "This is the promise of love;",
        "There shall be seasons refreshing,",
        "Sent from the Saviour above."
      ],
      [
        "\"There shall be showers of blessing:\" –",
        "Precious reviving again;",
        "Over the hills and the valleys,",
        "Sound of abundance of rain."
      ],
      [
        "\"There shall be showers of blessing:\"",
        "Send them upon us O Lord!",
        "Grant to us now a refreshing;",
        "Come, and now honour Thy Word."
      ],
      [
        "\"There shall be showers of blessing\"",
        "Oh, that today they might fall,",
        "Now as to God we're confessing,",
        "Now as on Jesus we call."
      ],
      [
        "\"There shall be showers of blessing,\"",
        "If we but trust and obey;",
        "There shall be seasons refreshing,",
        "If we let God have His way."
      ]
    ]
  },
  {
    "hymnNo": "152",
    "title": "Joys Are Flowing Like A River",
    "category": "holy spirit",
    "hymnChorus": [
      "Blessed quietness, holy quietness,",
      "What assurance in my soul !",
      "On the stormy sea, He speaks peace to me,",
      "How the billows cease to roll."
    ],
    "hymnStanzards": [
      [
        "Joys are flowing like a river,",
        "Since the Comforter has come;",
        "He abides with us for ever,",
        "Makes the trusting heart His home."
      ],
      [
        "Bringing life, and health, and gladness,",
        "All around this heav'nly Guest;",
        "Banish'd unbelief and sadness,",
        "Chang'd our weariness to rest."
      ],
      [
        "Like the rain that falls from heaven,",
        "Like the sunlight from the sky,",
        "So the Holy Ghost is given,",
        "Coming on us from on high."
      ],
      [
        "What a wonderful salvation,",
        "Where we always see His face;",
        "What a perfect habitation,",
        "What a quiet resting-place.",
        ""
      ]
    ]
  },
  {
    "hymnNo": "153",
    "title": "With Signs Following",
    "category": "holy spirit",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "When first the risen Lord of pow'r",
        "His chosen ones sent forth,",
        "A charge he gave, that solemn hour,",
        "To preach His saving worth.",
        "\"Go ye,\" said He, \"to all mankind;",
        "Declare My Word, and ye shall find:",
        "These signs shall surely follow them",
        "Who on My Name believe.\""
      ],
      [
        "\"They shall with other tongues declare",
        "The wonders of their God;",
        "The sick beneath their hands, by prayer,",
        "Shall rise, to prove My Word,\"",
        "So let it be! Firm as His Throne",
        "Stands this clear promise to His own:",
        "These signs shall surely follow them",
        "Who on My Name believe."
      ],
      [
        "Crowned with the flame of Pentecost,",
        "A faithful, fearless band",
        "Proclaimed His Name: a ransomed host",
        "Arose from every land.",
        "The Lord worked with them from on High,",
        "His proven Word could none deny:",
        "These signs shall surely follow them",
        "Who on My name believe."
      ],
      [
        "No word of Thine is void of power;",
        "Now promise, Lord, is vain.",
        "Be this a Pentecostal hour",
        "Confirm Thy Word again!",
        "Nor can'st Thou fail! Thou art the same",
        "As when of old Thou did'st' proclaim:",
        "These signs shall surely follow them",
        "Who on My Name believe."
      ]
    ]
  },
  {
    "hymnNo": "154",
    "title": "Give Me A Double Portion",
    "category": "holy spirit",
    "hymnChorus": [
      "Give me, Lord, a double portion, pour Thy Spirit on me,",
      "Thru eyes of faith Thy wondrous works I can see,",
      "But I need Thy helping hand, in this troubled, sinful land,",
      "Give me, Lord, a double portion from Thee."
    ],
    "hymnStanzards": [
      [
        "Long ago in days of old, stood a man of God we're told,",
        "As he talked to Elijah that day;",
        "His request he did repeat, standing at Elijah's feet,",
        "\"A double portion\" I can hear him say."
      ],
      [
        "As Elijah stood that day, to Elisha he did say,",
        "\"Ask me what I shall do unto thee,\"",
        "And Elisha then replied, walking at Elijah's side,",
        "\"A double portion, let it fall on me.\""
      ],
      [
        "Lord, I always to Thee, pray, just for strength from day to day,",
        "But I see there's so much to be done,",
        "That I have to kneel anew and this favor ask of you,",
        "A double portion -- this fight must be won.",
        ""
      ]
    ]
  },
  {
    "hymnNo": "155",
    "title": "Let Jesus Come Into Your Heart",
    "category": "invitation",
    "hymnChorus": [
      "Just now, your doubtings give o'er;",
      "Just now, reject Him no more;",
      "Just now, throw open the door;",
      "Let Jesus come into your heart."
    ],
    "hymnStanzards": [
      [
        "If you are tired of the load of your sin,",
        "Let Jesus come into your heart;",
        "If you desire a new life to begin,",
        "Let Jesus come into your heart."
      ],
      [
        "If it's for purity now that you sigh,",
        "Let Jesus come into your heart;",
        "Fountains for cleansing are flowing nearby,",
        "Let Jesus come into your heart."
      ],
      [
        "If there's a tempest your voice cannot still,",
        "Let Jesus come into your heart;",
        "If there's a void this world never can fill,",
        "Let Jesus come into your heart."
      ],
      [
        "If you would join the glad songs of the blest,",
        "Let Jesus come into your heart;",
        "If you would enter the mansions of rest,",
        "Let Jesus come into your heart."
      ]
    ]
  },
  {
    "hymnNo": "156",
    "title": "Room At The Cross For You",
    "category": "invitation",
    "hymnChorus": [
      "There's room at the cross for you",
      "There's room at the cross for you",
      "Though millions have come, there's still room for one",
      "Yes there's room at the cross for you."
    ],
    "hymnStanzards": [
      [
        "The cross upon which Jesus died",
        "Is a shelter in which we can hide",
        "And its grace so free is sufficient for me",
        "And deep is its fountain as wide as the sea."
      ],
      [
        "Though millions have found him a friend",
        "And have turned from the sins they have sinned",
        "The Savior still waits to open the gates",
        "And welcome a sinner before it's too late."
      ],
      [
        "The hand of my Savior is strong",
        "And the love of my Savior is long",
        "Through sunshine or rain, through loss or in gain,",
        "The blood flows from Calvary to cleanse every stain.",
        ""
      ]
    ]
  },
  {
    "hymnNo": "157",
    "title": "Wandering Child O Come Home",
    "category": "invitation",
    "hymnChorus": [
      "Child, come home, child come home,",
      "Wand'ring child, why longer roam?",
      "'Tis thy Father entreats",
      "Wand'ring child, O come home."
    ],
    "hymnStanzards": [
      [
        "Have you wandered away from your Father's care,",
        "Heavy hearted and sad do you roam?",
        "There's a sweet gentle voice calling now to you",
        "Wand-ring child, wand'ring child, O come home."
      ],
      [
        "Is your frail bark adrift on life's raging sea,",
        "Are you tossed on its billows and foam?",
        "There's a safe harbor home, waiting now for you",
        "Wand-ring child, wand'ring child, O come home. "
      ],
      [
        "He is pleading today, heed His gentle voice,",
        "As He bids you no longer to roam,",
        "To that dear Father's house haste without delay--",
        "Wand-ring child, wand'ring child, O come home."
      ]
    ]
  },
  {
    "hymnNo": "158",
    "title": "Come Believing",
    "category": "invitation",
    "hymnChorus": [
      "Come believing, come believing!",
      "Come to Jesus, look and live!",
      "Come believing, come believing!",
      "Come to Jesus, look and live!"
    ],
    "hymnStanzards": [
      [
        "Once again the Gospel message,",
        "From the Saviour you have heard;",
        "Will you heed the invitation?",
        "Will you turn and seek the Lord?"
      ],
      [
        "Many summers you have wasted,",
        "Ripen'd harvests you have seen;",
        "Winter snows by Spring have melted,",
        "Yet you linger in your sin."
      ],
      [
        "Jesus for your choice is waiting;",
        "Tarry not: at once decide!",
        "While the Spirit now is striving,",
        "Yield, and seek the Saviour's side."
      ],
      [
        "Cease of fitness to be thinking;",
        "Do not longer try to feel!",
        "It is trusting, and not feeling,",
        "That will give the Spirit's seal."
      ],
      [
        "Let your will to God be given,",
        "Trust in Christ's atoning blood;",
        "Look to Jesus now in heaven,",
        "Rest on His unchanging word."
      ]
    ]
  },
  {
    "hymnNo": "159",
    "title": "Why Do You Wait",
    "category": "invitation",
    "hymnChorus": [
      "Why not? why not?",
      "Why not come to Him now?",
      "Why not? why not?",
      "Why not come to Him now?"
    ],
    "hymnStanzards": [
      [
        "Why do you wait, dear brother,",
        "Oh, why do you tarry so long?",
        "Your Saviour is waiting to give you",
        "A place in His sanctified throng."
      ],
      [
        "What do you hope, dear brother,",
        "To gain by a further delay?",
        "There’s no one to save you but Jesus,",
        "There’s no other way but His way."
      ],
      [
        "Do you not feel, dear brother,",
        "His Spirit now striving within?",
        "Oh, why not accept His salvation,",
        "And throw off thy burden of sin."
      ],
      [
        "Why do you wait, dear brother,",
        "The harvest is passing away,",
        "Your Saviour is longing to bless you,",
        "There’s danger and death in delay."
      ]
    ]
  },
  {
    "hymnNo": "160",
    "title": "The Shepherd Of Love",
    "category": "invitation",
    "hymnChorus": [
      "Out of your darkness of sin and shame,",
      "Into His love, forever the same,",
      "Come to Him now, believe on His name,",
      "O answer the call today."
    ],
    "hymnStanzards": [
      [
        "The Shepherd of Love is seeking the lost",
        "In paths that are rough and steep;",
        "He’s calling the lambs that have gone astray,",
        "He’s calling, calling His sheep."
      ],
      [
        "The Shepherd of Love knows His sheep by name,",
        "And tenderly leads the way;",
        "O weary one, come to the Shepherd’s fold,",
        "He’s calling, calling today."
      ],
      [
        "The Shepherd of Love our ransom hath paid,",
        "And offers salvation free;",
        "He’s patiently waiting for thee to come,",
        "He’s calling, calling for thee."
      ],
      [
        "The Shepherd of Love now seeketh His sheep,",
        "He seeketh whate’er the cost;",
        "Behold, He is calling the wand’rer home,",
        "He’s calling, calling the lost. [Refrain]"
      ]
    ]
  },
  {
    "hymnNo": "161",
    "title": "Who'll Be The Next To Follow Jesus",
    "category": "invitation",
    "hymnChorus": [
      "Who’ll be the next, who’ll be the next?",
      "Who’ll be the next to follow Jesus?",
      "Who’ll be the next to follow les us now?",
      "Follow Jesus now?"
    ],
    "hymnStanzards": [
      [
        "Who'll be the next to follow Jesus?",
        "Who’ll be the next his cross to bear?",
        "Someone is ready, someone is waiting;",
        "Who’ll be the next a crown to wear?"
      ],
      [
        "Who’ll be the next to follow Jesus?",
        "Come and bow at his precious feet;",
        "Who’ll be the next to lay every burden",
        "Down at the Father’s mercy seat?"
      ],
      [
        "Who’ll be the next to follow Jesus?",
        "Who’ll be the next to praise his name?",
        "Who’ll swell the chorus of free redemption,",
        "Sing hallelujah, praise the Lamb?"
      ],
      [
        "Who’ll be the next to follow Jesus",
        "Down through the Jordan’s rolling tide?",
        "Who’ll be the next to join with the ransomed",
        "Singing upon the other side?"
      ]
    ]
  },
  {
    "hymnNo": "162",
    "title": "Almost Persuaded",
    "category": "invitation",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "“Almost persuaded” now to believe;",
        "“Almost persuaded” Christ to receive;",
        "Seems now some soul to say,",
        "“Go, Spirit, go Thy way,",
        "Some more convenient day",
        "on Thee I’ll call.”"
      ],
      [
        "Oh, be persuaded! Christ never fails—",
        "Oh, be persuaded! His blood avails—",
        "Can save from every sin,",
        "Cleanse you without, within—",
        "Will you not let Him in?",
        "Open the door!"
      ],
      [
        "“Almost persuaded,” harvest is past!",
        "“Almost persuaded,” doom comes at last;",
        "“Almost” cannot avail;",
        "“Almost” is but to fail!",
        "Sad, sad that bitter wail—",
        "“Almost—but lost!”"
      ],
      [
        "Be now persuaded, oh, sinner, hear!",
        "Be now persuaded, Jesus is near;",
        "His voice is pleading still,",
        "Turn now with heart and will,",
        "Peace will your spirit fill—",
        "Oh, turn today!"
      ]
    ]
  },
  {
    "hymnNo": "163",
    "title": "My God Is An Hour So Sweet",
    "category": "prayer",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "My God, is any hour so sweet",
        "From blush of morn to evening star,",
        "As that which calls me to Thy feet,",
        "The hour of prayer?"
      ],
      [
        "No words can tell what sweet relief",
        "There for my ev'ry want I find.",
        "What strength for warfare, balm for grief,",
        "What peace of mind!"
      ],
      [
        "Hushed is each doubt, gone ev'ry fear;",
        "My spirit seems in heav’n to stay;",
        "And e’en the penitential tear",
        "Is wiped away."
      ],
      [
        "Lord, till I reach yon blissful shore,",
        "No privilege so dear shall be",
        "As thus my inmost soul to pour",
        "In prayer to thee."
      ]
    ]
  },
  {
    "hymnNo": "164",
    "title": "Prayer Is The Soul S Sincere Desire",
    "category": "prayer",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Prayer is the soul’s sincere desire,",
        "Uttered, or unexpressed;",
        "The motion of a hidden fire",
        "That trembles in the breast."
      ],
      [
        "Prayer is the simplest form of speech",
        "That infant lips can try;",
        "Prayer the sublimest strains that reach",
        "The Majesty on high."
      ],
      [
        "Prayer is the Christian’s vital breath,",
        "The Christian’s native air;",
        "His watchword at the gates of death;",
        "He enters rest with prayer."
      ],
      [
        "The saints in prayer appear as one,",
        "In word, and deed, and mind;",
        "While with the Father and the Son",
        "Sweet fellowship they find."
      ],
      [
        "O Thou, by whom we come to God,",
        "he Life, the Truth, the Way,",
        "The path of prayer Thyself hast trod—",
        "Lord, teach us how to pray."
      ]
    ]
  },
  {
    "hymnNo": "165",
    "title": "Guide Me O Thou Great Jehovah",
    "category": "prayer",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Guide me, O Thou Great Jehovah!",
        "Pilgrim thro' this barren land;",
        "I am weak, but Thou art mighty,",
        "Hold me by Thy pow'rful hand:",
        "Bread of heaven! Bread of heaven!",
        "Feed me now and ever more,",
        "Feed me now and ever more."
      ],
      [
        "If I tread the verge of Jordan,",
        "Bid my anxious fears subside:",
        "Bear me through the swelling torrent,",
        "Land me safe on Canaan's side:",
        "Songs of praises! Songs of praises!",
        "I will ever give to Thee,",
        "I will ever give to Thee."
      ],
      [
        "Saviour, come! we long to see Thee,",
        "Long to dwell with Thee above;",
        "And to know in full communion,",
        "All the sweetness of Thy love.",
        "Come, Lord Jesus! Come, Lord Jesus!",
        "Take Thy waiting people home,",
        "Take Thy waiting people home."
      ]
    ]
  },
  {
    "hymnNo": "166",
    "title": "Did You Think To Pray",
    "category": "prayer",
    "hymnChorus": [
      "O how praying rests the weary!",
      "Prayer will change the night to day;",
      "So when life seems dark and dreary,",
      "Don't forget to pray."
    ],
    "hymnStanzards": [
      [
        "Ere you left your room this morning",
        "Did you think to pray?",
        "In the name of Christ, our Saviour,",
        "Did you sue for loving favour,",
        "As a shield today?"
      ],
      [
        "When you met with great temptation",
        "Did you think to pray?",
        "By His dying love and merit",
        "Did you claim the Holy Spirit",
        "As your guide and stay?"
      ],
      [
        "When your heart was filled with anger",
        "Did you think to pray?",
        "Did you plead for grace, my brother,",
        "That you might forgive another",
        "Who had crossed your way?"
      ],
      [
        "When sore trials came upon you",
        "Did you think to pray?",
        "When your soul was bowed in sorrow,",
        "Balm of Gilead did you borrow",
        "At the gates today?"
      ]
    ]
  },
  {
    "hymnNo": "167",
    "title": "I Must Tell Jesus",
    "category": "prayer",
    "hymnChorus": [
      "I must tell Jesus! I must tell Jesus!",
      "I cannot bear my burdens alone;",
      "I must tell Jesus! I must tell Jesus!",
      "Jesus will help me, Jesus alone."
    ],
    "hymnStanzards": [
      [
        "I must tell Jesus all of my trials;",
        "I cannot bear these burdens alone;",
        "In my distress He kindly will help me;",
        "He ever loves and care for His own."
      ],
      [
        "I must tell Jesus all of my troubles;",
        "He is a kind, compassionate Friend;",
        "If I but ask Him, He will deliver,",
        "Make of my troubles quickly an end."
      ],
      [
        "Tempted and tried, I need a great Saviour,",
        "One Who can help my burdens to bear;",
        "I must tell Jesus, I must tell Jesus;",
        "He all my cares and sorrows will share."
      ],
      [
        "O how the world to evil allures me!",
        "O how my heart is tempted to sin!",
        "I must tell Jesus, and He will help me",
        "Over the world the victory to win."
      ]
    ]
  },
  {
    "hymnNo": "168",
    "title": "I Need Thee Every Hour",
    "category": "prayer",
    "hymnChorus": [
      "I need Thee, oh, I need Thee,",
      "Every hour I need Thee,",
      "Oh, bless me now, my Saviour,",
      "I come to Thee."
    ],
    "hymnStanzards": [
      [
        "I need Thee every hour,",
        "Most gracious Lord;",
        "No tender voice like Thine",
        "Can peace afford."
      ],
      [
        "I need Thee every hour,",
        "Stay Thou nearby;",
        "Temptations lose their power",
        "When Thou art nigh."
      ],
      [
        "I need Thee every hour,",
        "Teach me Thy will;",
        "And Thy rich promises",
        "In me fulfil."
      ],
      [
        "I need Thee every hour,",
        "Most Holy One;",
        "Oh, make me Thine indeed,",
        "Thou blessed Son!"
      ]
    ]
  },
  {
    "hymnNo": "169",
    "title": "What A Friend We Have In Jesus",
    "category": "prayer",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "1. What a Friend we have in Jesus,",
        "All our sins and griefs to bear;",
        "What a privilege to carry ",
        "Ev'rything to God in prayer.",
        "Oh, what peace we often forfeit,",
        "Oh, what needless pain we bear -",
        "All because we do not carry",
        "Ev'rything to God in prayer."
      ],
      [
        "3. Are we weak and heavy laden,",
        "Cumbered with a load of care?",
        "Precious Saviour, still our refuge, - ",
        "Take it to the Lord in prayer.",
        "Do thy friends despise, forsake thee?",
        "Take it to the Lord in prayer."
      ]
    ]
  },
  {
    "hymnNo": "170",
    "title": "Sweet Hour Of Prayer",
    "category": "prayer",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Sweet hour of pray'r! Sweet hour of pray'r!",
        "That calls me from a world of care",
        "And bids me at my Father's throne",
        "Make all my wants and wishes known;",
        "In seasons of distress and grief,",
        "My soul has often found relief,",
        "And oft escaped the tempter's snare",
        "By thy return sweet hour of pray'r."
      ],
      [
        "Sweet hour of pray'r! Sweet hour of pray'r!",
        "May I thy consolation share,",
        "Till from Mount Pisgah's lofty height,",
        "I view my home and take my flight:",
        "This robe of flesh I'll drop and rise",
        "To seize the everlasting prize;",
        "And shout while passing through the air,",
        "Farewell, farewell, sweet hour of pray'r."
      ]
    ]
  },
  {
    "hymnNo": "171",
    "title": "Pass Me Not",
    "category": "prayer",
    "hymnChorus": [
      "Saviour, Saviour,",
      "Hear my humble cry;",
      "While on others Thou art calling,",
      "Do not pass me by."
    ],
    "hymnStanzards": [
      [
        "Pass me not, O gentle Saviour,",
        "Hear my humble cry;",
        "While on others Thou art calling,",
        "Do not pass me by."
      ],
      [
        "Let me at Thy throne of mercy,",
        "Find a sweet relief;",
        "Kneeling there in deep contrition,",
        "Help my unbelief."
      ],
      [
        "Trusting only in Thy merit,",
        "Would I seek Thy face;",
        "Heal my wounded, broken spirit,",
        "Save me by Thy grace."
      ],
      [
        "Thou the Spring of all my comfort,",
        "More than life to me;",
        "Whom have I on earth beside Thee?",
        "Whom in heav'n but Thee?"
      ]
    ]
  },
  {
    "hymnNo": "172",
    "title": "When The Roll Is Called Up Yonder",
    "category": "rapture",
    "hymnChorus": [
      "When the roll . . . is called up yonder,",
      "When the roll . . . is called up yonder,",
      "When the roll . . . is called up yonder,",
      "When the roll is called up yonder, I'll be there."
    ],
    "hymnStanzards": [
      [
        "When the trumpet of the Lord shall sound and time shall be no more,",
        "And the morning breaks eternal, bright and fair;",
        "When the saved of earth shall gather over on the other shore,",
        "And the roll is called up yonder, I'll be there."
      ],
      [
        "On that bright and cloudless morning ",
        "when the dead in Christ shall rise,",
        "And the glory of His resurrection share;",
        "When His chosen ones shall gather to their home beyond the skies,",
        "And the roll is called up yonder, I'll be there."
      ],
      [
        "Let us labour for the Master from the dawn till setting sun,",
        "Let us talk of all His wondrous love and care;",
        "Then when all of life is over and our work on earth is done,",
        "And the roll is called up yonder, I'll be there."
      ]
    ]
  },
  {
    "hymnNo": "173",
    "title": "Is It The Crowning Day",
    "category": "rapture",
    "hymnChorus": [
      "Glad day, glad day!",
      "Is it the crowning day?",
      "I’ll live for today, nor anxious be;",
      "Jesus, my Lord I soon shall see;",
      "Glad day, glad day!",
      "Is it the crowning day?"
    ],
    "hymnStanzards": [
      [
        "Jesus may come today,",
        "Glad day, glad day!",
        "And I would see my Friend;",
        "Dangers and troubles would end",
        "If Jesus should come today."
      ],
      [
        "I may go home today,",
        "Glad day, glad day!",
        "Seemeth I hear their song,",
        "Hail to the radiant throng,",
        "If I should go home today."
      ],
      [
        "Why should I anxious be?",
        "Glad day, glad day!",
        "Lights appear on the shore,",
        "Storms will affright nevermore,",
        "For He is “at hand” today."
      ],
      [
        "Faithful I’ll be today,",
        "Glad day, glad day!",
        "And I will freely tell",
        "Why I should love Him so well,",
        "For He is my all today."
      ]
    ]
  },
  {
    "hymnNo": "174",
    "title": "Jesus Is Coming Again",
    "category": "rapture",
    "hymnChorus": [
      "Coming again coming again",
      "Maybe morning maybe noon",
      "Maybe evening and maybe soon",
      "Coming again coming again",
      "Oh what a wonderful day it will be",
      "Jesus is coming again"
    ],
    "hymnStanzards": [
      [
        "Marvelous message we bring",
        "Glorious carol we sing",
        "Wonderful word of the King",
        "Jesus is coming again"
      ],
      [
        "Forest and flower exclaim",
        "Mountain and meadow the same",
        "All earth and heaven proclaim",
        "Jesus is coming again"
      ],
      [
        "Standing before Him at last",
        "Trial and trouble all past",
        "Crowns at His feet we will cast",
        "Jesus is coming again"
      ]
    ]
  },
  {
    "hymnNo": "175",
    "title": "He Is Comimg Again",
    "category": "rapture",
    "hymnChorus": [
      "He is coming again, He is coming again,",
      "The very same Jesus, rejected of men;",
      "He is coming again, He is coming again,",
      "With pow'r and great glory, He is coming again!"
    ],
    "hymnStanzards": [
      [
        "Lift up your heads, pilgrims a-weary,",
        "See day’s approach now crimson the sky;",
        "Night shadows flee, and your Belovèd,",
        "Awaited with longing, at last draweth nigh."
      ],
      [
        "Dark was the night, sin warred against us;",
        "Heavy the load of sorrow we bore;",
        "But now we see signs of His coming;",
        "Our hearts glow within us, joy’s cup runneth o’er!"
      ],
      [
        "O blessèd hope! O blissful promise!",
        "Filling our hearts with rapture divine;",
        "O day of days! Hail Thy appearing!",
        "Thy transcendent glory forever shall shine!"
      ],
      [
        "Even so come, precious Lord Jesus;",
        "Creation waits redemption to see;",
        "Caught up in clouds, soon we shall meet Thee;",
        "O blessèd assurance, forever with Thee!"
      ]
    ]
  },
  {
    "hymnNo": "176",
    "title": "Christ Returneth",
    "category": "NOT FOUND",
    "hymnChorus": [
      "O Lord Jesus, how long, how long",
      "Ere we shout the glad song,",
      "Christ returneth! ",
      "Hallelujah! hallelujah! ",
      "Amen. Hallelujah! Amen."
    ],
    "hymnStanzards": [
      [
        "It may be at morn, when the day is awaking,",
        "When sunlight through darkness and shadow is breaking,",
        "That Jesus will come in the fullness of glory,",
        "To receive from the world His own."
      ],
      [
        "It may be at midday, it may be at twilight,",
        "It may be, perchance, that the blackness of midnight",
        "Will burst into light in the blaze of His glory,",
        "When Jesus receives His own."
      ],
      [
        "While its hosts cry Hosanna, from heaven descending,",
        "With glorified saints and the angels attending,",
        "With grace on His brow, like a halo of glory,",
        "Will Jesus receive His own."
      ],
      [
        "O joy! O delight! should we go without dying,",
        "No sickness, no sadness, no dread and no crying.",
        "Caught up through the clouds with our Lord into glory,",
        "When Jesus receives His own."
      ]
    ]
  },
  {
    "hymnNo": "177",
    "title": "Search Me O God",
    "category": "sanctification",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Search me, O God, and know my heart today;",
        "Try me, O Lord, and know my thoughts I pray;",
        "See if there be some wicked way in me,",
        "Cleanse me from every sin and set me free."
      ],
      [
        "Lord, take my life, and make it wholly Thine;",
        "Fill my poor heart with Thy great love divine;",
        "Take all my will, my passion, self and pride;",
        "I now surrender – Lord, in me abide."
      ],
      [
        "O Holy Ghost, revival comes from Thee;",
        "Send a revival – start the work in me:",
        "Thy Word declares Thou wilt supply our need;",
        "For blessing now, O Lord, I humbly plead."
      ]
    ]
  },
  {
    "hymnNo": "178",
    "title": "Fill My Cup Lord",
    "category": "sanctification",
    "hymnChorus": [
      "Fill my cup, Lord; I lift it up, Lord!",
      "Come and quench this thirsting of my soul;",
      "Bread of heaven, feed me till I want no more-",
      "Fill my cup, fill it up and make me whole!"
    ],
    "hymnStanzards": [
      [
        "Like the woman at the well I was seeking –",
        "For things that could not satisfy;",
        "And then I heard my Saviour speaking –",
        "\"Draw from My well that never shall run dry.\""
      ],
      [
        "There are millions in this world who are craving – ",
        "The pleasures earthly things afford;",
        "But none can match the wondrous treasure – ",
        "That I find in Jesus Christ, my Lord."
      ],
      [
        "So, my brother, if the things this world gave you –",
        "Leave hungers that won't pass away,",
        "My blessed Lord will come and save you",
        "If you kneel to Him and humbly pray:"
      ]
    ]
  },
  {
    "hymnNo": "179",
    "title": "Higher Ground",
    "category": "rapture",
    "hymnChorus": [
      "Lord, lift me up, and let me stand",
      "By faith on heaven's table land;",
      "A higher plane than I have found,",
      "Lord, plant my feet on higher ground."
    ],
    "hymnStanzards": [
      [
        "I'm pressing on the upward way,",
        "New heights I'm gaining everyday;",
        "Still praying as I onward bound,",
        "Lord, plant my feet on higher ground."
      ],
      [
        "My heart has no desire to stay",
        "Where doubts arise, and fears dismay;",
        "Tho' some may dwell where these abound,",
        "My pray'r my aim is higher ground."
      ],
      [
        "I want to live above the world,",
        "Though Satan's darts at me are hurled",
        "But still I'll pray till heav'n I've found:",
        "\"Lord, lead me on to higher ground.\""
      ],
      [
        "I want to scale the utmost height,",
        "And catch a gleam of glory bright;",
        "For faith has caught the joyful sound,",
        "The song of saints on higher ground."
      ]
    ]
  },
  {
    "hymnNo": "180",
    "title": "Since The Son Hath Made Me Free",
    "category": "sanctification",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Since the Son hath made me free,",
        "Let me taste my liberty;",
        "Thee behold with open face,",
        "Triumph in Thy saving grace,",
        "Thy great will delight to prove,",
        "Glory in Thy perfect love."
      ],
      [
        "Lord, I will not let Thee go",
        "Till the blessing Thou bestow;",
        "Hear my Advocate divine!",
        "Lo! to His my suit I join;",
        "Joined to His, it cannot fail;",
        "Bless me; for I will prevail!"
      ],
      [
        "Heavenly Adam, Life divine,",
        "Change my nature into Thine!",
        "Move and spread throughout my soul,",
        "Actuate and fill the whole!",
        "Be it I no longer now",
        "Living in the flesh, but Thou."
      ],
      [
        "Holy Ghost, no more delay!",
        "Come, and in Thy temple stay!",
        "Now Thine inward witness bear,",
        "Strong, and permanent, and clear;",
        "Spring of life, Thyself impart,",
        "Rise eternal in my heart!"
      ]
    ]
  },
  {
    "hymnNo": "181",
    "title": "All Things Are Possible",
    "category": "sanctification",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "All things are possible to him",
        "That can in Jesus' name believe:",
        "Lord, I no more thy truth blaspheme,",
        "Thy truth I lovingly receive;",
        "I can, I do believe in thee,",
        "All things are possible to me. "
      ],
      [
        "Though earth and hell the word gainsay,",
        "The word of God can never fail;",
        "The Lamb shall take my sins away,",
        "'Tis certain, though impossible;",
        "The thing impossible shall be,",
        "All things are possible to me. "
      ],
      [
        "When thou the work of faith hast wrought,",
        "I here shall in thine image shine,",
        "Nor sin in deed, or word, or thought;",
        "Let men exclaim, and fiends repine,",
        "They cannot break the firm decree;",
        "All things are possible to me. "
      ],
      [
        "Thy mouth, O Lord, hath spoke, hath sworn",
        "That I shall serve thee without fear,",
        "Shall find the pearl which others spurn,",
        "Holy, and pure, and perfect here,",
        "The servant as his Lord shall be;",
        "All things are possible to me. "
      ],
      [
        "All things are possible to God,",
        "To Christ, the power of God in man,",
        "To me, when I am all renewed,",
        "When I in Christ am formed again,",
        "And witness, from all sin set free,",
        "All things are possible to me."
      ]
    ]
  },
  {
    "hymnNo": "182",
    "title": "Blessed Are The Pure In Heart",
    "category": "sanctification",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "BLESSED are the pure in heart,",
        "They have learned the angel-art,",
        "While on earth in heaven to be,",
        "God, by sense unseen, to see.",
        "Cleansed from sin's offensive stain,",
        "Fellowship with him they gain;",
        "Nearness, likeness to their Lord,",
        "Their exceeding great reward."
      ],
      [
        "In creation him they own,",
        "Meet him in its haunts, alone;",
        "Most amidst its Sabbath calm,",
        "Morning light and evening balm.",
        "Him they still through busier life,",
        "Trust in pain and care and strife;",
        "These like clouds o'er noontide blaze,",
        "Temper, not conceal his rays."
      ],
      [
        "Hallowed thus their every breath,",
        "Dying they shall not \"see death;\"",
        "With the Lord in Paradise,",
        "Till, like his, their bodies rise.",
        "Nearer than the seraphim",
        "In their flesh shall saints see him,",
        "With the Father, in the Son,",
        "Through the Spirit, ever one!"
      ]
    ]
  },
  {
    "hymnNo": "183",
    "title": "Come O My God The Promise Seal",
    "category": "sanctification",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Come, O my God, the promise seal,",
        "This mountain, sin, remove;",
        "Now in my waiting soul reveal",
        "The virtue of thy love."
      ],
      [
        "Anger and sloth, desire and pride,",
        "This moment be subdued!",
        "Be cast in the crimson tide",
        "Of my Redeemer's blood!"
      ],
      [
        "Saviour, to thee my soul looks up,",
        "My present Saviour Thou!",
        "In all the confidence of hope,",
        "I claim the blessing now."
      ],
      [
        "‘Tis done! Thou dost this moment save,",
        "With full salvation bless;",
        "Redemption through thy blood I have,",
        "And spotless love and peace."
      ],
      [
        ""
      ]
    ]
  },
  {
    "hymnNo": "184",
    "title": "Saviour From Sin I Wait To Prove",
    "category": "sanctification",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Saviour from sin, I wait to prove",
        "That Jesus is thy healing name;",
        "To lose, when perfected in love,",
        "Whate'er I have, or can, or am:",
        "I stay me on thy faithful word,",
        "\"The servant shall be as his Lord.\" "
      ],
      [
        "Didst thou not in the flesh appear",
        "Sin to condemn, and man to save?",
        "That perfect love might cast out fear?",
        "That I thy mind in me might have",
        "In holiness show forth thy praise,",
        "And serve thee all my spotless days? "
      ],
      [
        "Didst thou not die that I might live",
        "No longer to myself, but thee?",
        "Might body, soul, and spirit give",
        "To him who gave himself for me?",
        "Come then, my Master, and my God,",
        "Take the dear purchase of thy blood. "
      ],
      [
        "Thy own peculiar servant claim,",
        "For thy own truth and mercy's sake;",
        "Hallow in me thy glorious name;",
        "Me for thine own this moment take,",
        "And change, and throughly purify;",
        "Thine only may I live and die."
      ]
    ]
  },
  {
    "hymnNo": "185",
    "title": "The Thing My God Doth Hate",
    "category": "sanctification",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "The things my God doth hate,",
        "That I no more may do,",
        "Thy creature, Lord, again create,",
        "And all my soul renew;"
      ],
      [
        "That blessed law of thine,",
        "Jesu, to me impart;",
        "Thy spirit's law of life divine,",
        "Oh write it in my heart!"
      ],
      [
        "Implant it deep within,",
        "Whence it may ne'er remove,",
        "The law of liberty from sin,",
        "The perfect law of love."
      ],
      [
        "Thy nature be my law,",
        "Thy spotless sanctity,",
        "And sweetly ev'ry moment draw",
        "My happy soul to thee;"
      ],
      [
        "Soul of my soul remain,",
        "Who didst for all fulfil,",
        "In me, O Lord fulfil again",
        "Thy heav'nly father's will."
      ]
    ]
  },
  {
    "hymnNo": "186",
    "title": "God Of All Power And Truth And Grace",
    "category": "sanctification",
    "hymnChorus": [
      "He is coming again, He is coming again,",
      "The very same Jesus, rejected of men;",
      "He is coming again, He is coming again,",
      "With pow'r and great glory, He is coming again!"
    ],
    "hymnStanzards": [
      [
        "Lift up your heads, pilgrims a-weary,",
        "See day’s approach now crimson the sky;",
        "Night shadows flee, and your Belovèd,",
        "Awaited with longing, at last draweth nigh."
      ],
      [
        "Dark was the night, sin warred against us;",
        "Heavy the load of sorrow we bore;",
        "But now we see signs of His coming;",
        "Our hearts glow within us, joy’s cup runneth o’er!"
      ],
      [
        "O blessèd hope! O blissful promise!",
        "Filling our hearts with rapture divine;",
        "O day of days! Hail Thy appearing!",
        "Thy transcendent glory forever shall shine!"
      ],
      [
        "Even so come, precious Lord Jesus;",
        "Creation waits redemption to see;",
        "Caught up in clouds, soon we shall meet Thee;",
        "O blessèd assurance, forever with Thee! "
      ]
    ]
  },
  {
    "hymnNo": "187",
    "title": "Jesus All Atoning Lamb",
    "category": "sanctification",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "JESUS, all-atoning Lamb,",
        "Thine, and only thine, I am;",
        "Take my body, spirit, soul;",
        "Only thou possess the whole."
      ],
      [
        "Fairer than the sons of men,",
        "Do not let me turn again,",
        "Leave the fountain-head of bliss,",
        "Stoop to worldly happiness."
      ],
      [
        "All my treasure is above,",
        "All my riches is thy love;",
        "Who the worth of love can tell?",
        "Infinite, unsearchable."
      ]
    ]
  },
  {
    "hymnNo": "188",
    "title": "O Lord How Happy Should We Be",
    "category": "sanctification",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "O Lord, how happy should we be",
        "If we could cast our care on Thee,",
        "If we from self could rest,",
        "And feel at heart that One above,",
        "In perfect wisdom, perfect love,",
        "Is working for the best!"
      ],
      [
        "Could we but kneel and cast our load,",
        "E'en while we pray, upon our God,",
        "Then rise with lightened cheer,",
        "Sure that the Father, who is nigh",
        "To still the famished raven's cry,",
        "Will hear in that we fear!"
      ],
      [
        "Lord, make these faithless hearts of ours",
        "Such lesson learns from birds and flowers;",
        "Make them from self to cease,",
        "Leave all things to a Father's will,",
        "And taste, before Him lying still,",
        "E'en in affliction, peace."
      ]
    ]
  },
  {
    "hymnNo": "189",
    "title": "Take Time To Be Holy",
    "category": "sanctification",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Take time to be holy, speak of with thy Lord;",
        "Abide in Him always, and feed on His Word;",
        "Make friends of God's children, help those who are weak;",
        "Forgetting in nothing, His blessing to seek."
      ],
      [
        "Take time to be holy, let Him be thy Guide;",
        "And run not before Him, whatever betide;",
        "In joy or in sorrow, still follow thy Lord,",
        "And, looking to Jesus, still trust in His word."
      ],
      [
        "Take time to be holy, be calm in thy soul;",
        "Each thought and each temper beneath His control:",
        "Thus led by His Spirit to fountains of love,",
        "Thou soon shalt be fitted for service above."
      ]
    ]
  },
  {
    "hymnNo": "190",
    "title": "Called Unto Holiness",
    "category": "sanctification",
    "hymnChorus": [
      "\"Holiness unto the Lord,\" is our watchword and song,",
      "\"Holiness unto the Lord,\" as we're marching along:",
      "Sing . . . it, shout it, loud . . . and long,",
      "\"Holiness unto the Lord,\" now and for ever."
    ],
    "hymnStanzards": [
      [
        "Called unto holiness,\" Church of our God,",
        "Purchased of Jesus, redeemed by His blood;",
        "Called from the world and its idols to flee,",
        "Called from the bondage of sin to be free."
      ],
      [
        "\"Called unto holiness,\" children of light,",
        "Walking with Jesus in garments of white;",
        "Raiment unsullied nor tarnished with sin,",
        "God's Holy Spirit abiding within."
      ],
      [
        "\"Called unto holiness,\" praise His dear name,",
        "This blessed secret to faith now made plain,",
        "Not our own righteousness, but Christ within,",
        "Living and reigning, and saving from sin."
      ],
      [
        "\"Called unto holiness,\" glorious thought!",
        "Up from the wilderness wanderings brought",
        "Out from the shadows and darkness of night",
        "Into the Canaan of perfect delight."
      ],
      [
        "\"Called unto holiness,\" Bride of the Lamb,",
        "Waiting the Bridegroom's returning again;",
        "Lift up your heads, for the day draweth near,",
        "When in His beauty the King shall appear."
      ]
    ]
  },
  {
    "hymnNo": "191",
    "title": "Come Holy Ghost All Quickening Fire",
    "category": "sanctification",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Come, Holy Ghost, all-quickening fire,",
        "Come, and my hallowed heart inspire,",
        "Sprinkled with the atoning blood:",
        "Now to my soul Thyself reveal;",
        "Thy mighty working let me feel,",
        "And know that I am born of God."
      ],
      [
        "Let earth no more my heart divide,",
        "With Christ may I be crucified,",
        "To Thee with my whole soul aspire;",
        "Dead to the world, and all its toys,",
        "Its idle pomp, and fading joys,",
        "Be Thou alone my one desire."
      ],
      [
        "My will be swallowed up in Thee;",
        "Light in Thy light still may I see,",
        "Beholding Thee with open face:",
        "Called the full power of faith to prove,",
        "Let all my hallowed heart be love,",
        "And all my sinless life be praise."
      ],
      [
        ""
      ]
    ]
  },
  {
    "hymnNo": "192",
    "title": "O For A Heart To Praise My God",
    "category": "sanctification",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "O for a heart to praise my God,",
        "a heart from sin set free;",
        "a heart that's sprinkled with the blood",
        "so freely shed for me:"
      ],
      [
        "A humble, lowly, contrite heart,",
        "believing, true, and clean,",
        "which neither life nor death can part",
        "from him that dwells within:"
      ],
      [
        "A heart in every thought renewed,",
        "and full of love divine;",
        "perfect and right and pure and good —",
        "a copy, Lord, of thine."
      ],
      [
        "Thy nature, gracious Lord, impart,",
        "come quickly from above;",
        "write thy new name upon my heart,",
        "thy new best name of Love."
      ]
    ]
  },
  {
    "hymnNo": "193",
    "title": "Another Year",
    "category": "special occasions",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Another year is dawning, ",
        "a path unknown, untried.",
        "T’would fill me with foreboding,",
        "Had I no hand to Guide; ",
        "But He who walked beside me ",
        "all through the yesteryear, ",
        "Whatever may betide me,",
        "has promised to be near."
      ],
      [
        "Another year to trust Him.",
        "Yes, I can trust Him still. ",
        "Who never yet has failed me",
        "as I have sought His will. ",
        "His rod and staff He giveth, ",
        "to be my strength and stay,",
        "and tenderly He leadeth, ",
        "along the homeward way."
      ],
      [
        "Another year to serve Him,",
        "to labor for Him here, ",
        "E’en while the shadows lengthen ",
        "and night is drawing near.",
        "I no not when He’ll call me to lay my sickle by,",
        "Oh, may I then be faithful while now the moments fly!"
      ],
      [
        "Another year to love Him,",
        "Whom I have loved so long;",
        "another year to praise Him In glad triumphant song.",
        "What’er the future holdeth of sorrow, toil, or pain",
        "His precious love endureth forevermore the same."
      ],
      [
        "Another year with Jesus!",
        "I thank thee, Lord, today",
        "For thy unfailing presence Along life’s rugged way.",
        "Guide me, O blest Redeemer; ",
        "Teach me to do Thy will. ",
        "And Thine own perfect purpose ",
        "In me each day fulfill."
      ]
    ]
  },
  {
    "hymnNo": "194",
    "title": "O Day Of Rest And Gladness",
    "category": "special occasions",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "O day of rest and gladness,",
        "O day of joy and light,",
        "O balm of care and sadness,",
        "most beautiful, most bright;",
        "on thee the high and lowly",
        "through ages joined in tune,",
        "sing \"Holy, holy, holy\"",
        "to the great God Triune."
      ],
      [
        "Today on weary nations",
        "the heav'nly manna falls;",
        "to holy convocations",
        "the silver trumpet calls,",
        "where gospel light is glowing",
        "with pure and radiant beams,",
        "and living water flowing",
        "with soul refreshing streams."
      ],
      [
        "New graces ever gaining",
        "from this our day of rest,",
        "we reach the rest remaining",
        "to spirits of the blest.",
        "To Holy Ghost be praises,",
        "to Father, and to Son;",
        "the church her voice upraises",
        "to thee, blest Three in One."
      ]
    ]
  },
  {
    "hymnNo": "195",
    "title": "Another Year Is Dawning",
    "category": "special occasions",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Another year is dawning, dear Father let it be,",
        "In working or in waiting, another year with Thee;",
        "Another year of progress, another year of praise,",
        "Another year of proving Thy presence all the days."
      ],
      [
        "Another year of service, of witness for Thy love;",
        "Another year of training for holier work above;",
        "Another year is dawning! Dear Father, let it be,",
        "On earth, or else in heaven, another year for Thee."
      ]
    ]
  },
  {
    "hymnNo": "196",
    "title": "Does Jesus Care",
    "category": "The lord's love and care",
    "hymnChorus": [
      "O yes, He cares, I know He cares,",
      "His heart is touched with my grief;",
      "When the days are weary,",
      "The long night dreary,",
      "I know my Saviour cares."
    ],
    "hymnStanzards": [
      [
        "Does Jesus care when my heart is pained",
        "Too deeply for mirth or song;",
        "As the burdens press, and the cares distress,",
        "And the way grows weary and long?"
      ],
      [
        "Does Jesus care when my way is dark",
        "With a nameless dread and fear?",
        "As the daylight fades into deep night shades,",
        "Does He care enough to be near?"
      ],
      [
        "Does Jesus care when I've tried and failed",
        "To resist some temptation strong;",
        "When for my deep grief there is no relief,",
        "Though my tears flow all the night long?"
      ],
      [
        "Does Jesus care when I've said goodbye",
        "To the dearest on earth to me,",
        "And my sad heart aches till it nearly breaks,",
        "Is it aught to Him? Does He care?"
      ]
    ]
  },
  {
    "hymnNo": "197",
    "title": "Love Found A Way",
    "category": "The lord's love and care",
    "hymnChorus": [
      "Love found a way to redeem my soul,",
      "Love found a way that could make me whole;",
      "Love sent my Lord to the cross of shame,",
      "Love found a way, O praise His holy name!"
    ],
    "hymnStanzards": [
      [
        "Wonderful love that rescued me, ",
        "Sunk deep in sin,",
        "Guilty and vile as I could be",
        "No hope within;",
        "When ev'ry ray of light had fled, ",
        "O glorious day!",
        "Raising my soul from out the dead, ",
        "Love found a way."
      ],
      [
        "Love bro't my Saviour here to die ",
        "On Calvary,",
        "For such a sinful wretch as I,",
        "How can it be?",
        "Love bridged the gulf 'twixt me and Heav'n, ",
        "Taught me to pray;",
        "I am redeemed, set free, forgiv'n,",
        "Love found a way. "
      ],
      [
        "Love opened wide the gates of light ",
        "To Heav'n's domain,",
        "Where in eternal pow'r and might ",
        "Jesus shall reign;",
        "Love lifted me from depths of woe ",
        "To endless day,",
        "There was no help in earth below,",
        "Love found a way. "
      ]
    ]
  },
  {
    "hymnNo": "198",
    "title": "His Love Can Never Fail",
    "category": "The lord's love and care",
    "hymnChorus": [
      "His love can never fail,",
      "His love can never fail;",
      "My soul is satisfied to know",
      "His love can never fail."
    ],
    "hymnStanzards": [
      [
        "1 I do not ask to see the way",
        "My feet will have to tread;",
        "But only that my soul may feed",
        "Upon the living bread.",
        "'Tis better far that I should walk",
        "By faith close to His side, ",
        "I may not know the way I go,",
        "But oh, I know my Guide. "
      ],
      [
        "2 And if my feet would go astray,",
        "They cannot, for I know",
        "That Jesus guides my falt'ring steps,",
        "As joyfully I go.",
        "And tho' I may not see His face,",
        "My faith is strong and clear",
        "That in each hour of sore distress,",
        "My Savior will be near."
      ],
      [
        "3 I will not fear, tho' darkness come",
        "Abroad o'er all the land,",
        "If I may only feel the touch",
        "Of His own loving hand.",
        "And tho' I tremble when I think",
        "How weak I am, how frail,",
        "My soul is satisfied to know",
        "His love can never fail. "
      ]
    ]
  },
  {
    "hymnNo": "199",
    "title": "Resting In His Love",
    "category": "The lord's love and care",
    "hymnChorus": [
      "I am resting, resting,",
      "Resting in His love; I am resting in His love,",
      "Resting in the shelter of His love."
    ],
    "hymnStanzards": [
      [
        "God has shown His loving face",
        "From His throne in heav'n above;",
        "And I've found a resting-place,",
        "In the shelter of his love"
      ],
      [
        "What the care of his life oppress ",
        "When the sky is dark above;",
        "I can always find rest ",
        "In the shelter of His Love"
      ],
      [
        "O, If you were never blest,",
        "with this peace from heaven above;",
        "There's for you a wonderous rest, ",
        "In the shelter of his love"
      ]
    ]
  },
  {
    "hymnNo": "200",
    "title": "The Ninety And Nine",
    "category": "The lord's love and care",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "There were ninety and nine that safely lay",
        "In the shelter of the fold.",
        "But one was out on the hills away,",
        "Far off from the gates of gold.",
        "Away on the mountains wild and bare.",
        "Away from the tender Shepherd's care.",
        "Away from the tender Shepherd's care."
      ],
      [
        "But none of the ransomed ever knew",
        "How deep were the waters crossed;",
        "Nor how dark was the night the Lord passed through",
        "Ere He found His sheep that was lost.",
        "Out in the desert He heard its cry,",
        "Sick and helpless and ready to die;",
        "Sick and helpless and ready to die."
      ],
      [
        "\"Lord, whence are those blood drops all the way",
        "That mark out the mountain's track?\"",
        "\"They were shed for one who had gone astray",
        "Ere the Shepherd could bring him back.\"",
        "\"Lord, whence are Thy hands so rent and torn?\"",
        "\"They are pierced tonight by many a thorn;",
        "They are pierced tonight by many a thorn.\""
      ],
      [
        "And all through the mountains, thunder riven",
        "And up from the rocky steep,",
        "There arose a glad cry to the gate of Heaven,",
        "\"Rejoice! I have found My sheep!\"",
        "And the angels echoed around the throne,",
        "\"Rejoice, for the Lord brings back His own!",
        "Rejoice, for the Lord brings back His own!\""
      ]
    ]
  },
  {
    "hymnNo": "201",
    "title": "Love Lifted Me",
    "category": "The lord's love and care",
    "hymnChorus": [
      "Love lifted me! Love lifted me! ",
      "When nothing else could help,",
      "Love lifted me.",
      "Love lifted me! Love lifted me! ",
      "When nothing else could help,",
      "Love lifted me."
    ],
    "hymnStanzards": [
      [
        "I was sinking deep in sin,",
        "far from the peaceful shore,",
        "very deeply stained within,",
        "sinking to rise no more;",
        "but the Master of the sea",
        "heard my despairing cry,",
        "from the waters lifted me;",
        "now safe am I. "
      ],
      [
        "All my heart to Him i give",
        "Ever to Him I'll cling in His presence live",
        "Ever His praises sing,",
        "Love so mighty and so true ",
        "merits my soul's best songs ",
        "Faithful, loving service too,",
        "to him belongs"
      ],
      [
        "Souls in danger, look above,",
        "Jesus completely saves;",
        "he will lift you by his love",
        "out of the angry waves.",
        "He’s the Master of the sea,",
        "billows his will obey;",
        "he your Savior wants to be -",
        "be saved today. [Refrain]"
      ]
    ]
  },
  {
    "hymnNo": "202",
    "title": "Wonderful Story Of Love",
    "category": "The lord's love and care",
    "hymnChorus": [
      "Won...der...ful ",
      "Won...der...ful",
      "Won...der...ful",
      "Wonderful, story of love."
    ],
    "hymnStanzards": [
      [
        "Wonderful story of love;",
        "Tell it to me again;",
        "Wonderful story of love;",
        "Wake the immortal strain!",
        "Angels with rapture announce it,",
        "Shepherds with wonder receive it;",
        "Sinner, O won’t you believe it?"
      ],
      [
        "Wonderful story of love;",
        "Though you are far away;",
        "Wonderful story of love;",
        "Still He doth call today;",
        "Calling from Calvary’s mountain,",
        "Down from the crystal bright fountain,",
        "E’en from the dawn of creation,"
      ],
      [
        "Wonderful story of love;",
        "Jesus provides a rest;",
        "Wonderful story of love;",
        "For all the pure and blest,",
        "Rest in those mansions above us,",
        "With those who’ve gone on before us,",
        "Singing the rapturous chorus,"
      ],
      [
        ""
      ]
    ]
  },
  {
    "hymnNo": "203",
    "title": "There Is No Love Like The Love Of Jesus",
    "category": "The lord's love and care",
    "hymnChorus": [
      "Jesus' love, precious love,",
      "Boundless and pure and free!",
      "Oh, turn to that love, weary, wand'ring soul,",
      "Jesus pleadeth for thee!"
    ],
    "hymnStanzards": [
      [
        "There is no love like the love of Jesus,",
        "Never to fail or fall,",
        "Till into the fold of the peace of God,",
        "He has gathered us all."
      ],
      [
        "There is no eye like the eye of Jesus,",
        "piercing so fa away; Ne'er out of the sight of  it's tender",
        "light Can wanderer stray"
      ],
      [
        "There is no voice like the voice of Jesus,",
        "Tender and sweet its chime ",
        "Like musical ring of a flowing spring ",
        "in the bright summertime"
      ],
      [
        "4 There is no heart like the heart of Jesus,",
        "Fill'd with a tender love;",
        "No throb of woe that our hearts can know,",
        "But He feeds it above.",
        ""
      ]
    ]
  },
  {
    "hymnNo": "204",
    "title": "Ye Must Be Born Again",
    "category": "warning & judgment",
    "hymnChorus": [
      "Ye must be born again,",
      "Ye must be born again;",
      "I verily, verily say unto thee,",
      "Ye must be born again.\""
    ],
    "hymnStanzards": [
      [
        "A ruler once came to Jesus by night",
        "To ask Him the way of salvation and light;",
        "The Master made answer in words true and plain,",
        "\"Ye must be born again.",
        "Ye must be born again,",
        "Ye must be born again;",
        "I verily, verily say unto thee,",
        "Ye must be born again.\""
      ],
      [
        "Ye children of men, attend to the word",
        "So solemnly uttered by Jesus the Lord;",
        "And let not this message to you be in vain,",
        "\"Ye must be born again.",
        "Ye must be born again,",
        "Ye must be born again;",
        "I verily, verily say unto thee,",
        "Ye must be born again.\""
      ],
      [
        "O ye who would enter that glorious rest,",
        "And sing with the ransomed the song of the blest,",
        "The life everlasting if ye would obtain,",
        "\"Ye must be born again.",
        "Ye must be born again,",
        "Ye must be born again;",
        "I verily, verily say unto thee,",
        "Ye must be born again.\""
      ],
      [
        "A dear one in heaven thy heart yearns to see,",
        "At the beautiful gate may be watching for thee,",
        "Then list to the note of this solemn refrain,",
        "\"Ye must be born again.",
        ""
      ]
    ]
  },
  {
    "hymnNo": "205",
    "title": "Have You Counted The Cost",
    "category": "warning & judgment",
    "hymnChorus": [
      "Have you counted the cost, if your soul should be lost,",
      "Though you gain the whole world for your own?",
      "Even now it may be that the line you have crossed,",
      "Have you counted, have you counted the cost?"
    ],
    "hymnStanzards": [
      [
        "There's a line that is drawn by rejecting our Lord,",
        "Where the call of His Spirit is lost …",
        "And you hurry along with the pleasure-mad throng –",
        "Have you counted, have you counted the cost?"
      ],
      [
        "You may barter your hope of eternity's morn,",
        "For a moment of joy at the most …",
        "For the glitter of sin and the things it will win –",
        "Have you counted, have you counted the cost?"
      ],
      [
        "While the door of His mercy is open to you,",
        "Ere the depth of His love you exhaust …",
        "Won't you come and be healed, won't you whisper \"I yield –",
        "I have counted, I have counted the cost.\""
      ]
    ]
  },
  {
    "hymnNo": "206",
    "title": "Where Will You Spend Eternity",
    "category": "warning & judgment",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Where will you spend eternity?",
        "This question comes to you and me!",
        "Tell me, what shall your answer be?",
        "Where will you spend eternity?",
        "Eternity! eternity!",
        "Where will you spend eternity?"
      ],
      [
        "Leaving the strait and narrow way,",
        "Going the downward road today,",
        "Sad will their final ending be,",
        "Lost thro’ a long eternity!",
        "Eternity! eternity!",
        "Lost thro’ a long eternity!"
      ],
      [
        "Repent, believe, this very hour,",
        "Trust in the Savior’s grace and pow'r.",
        "Then will your joyous answer be,",
        "Saved thro’ a long eternity!",
        "Eternity! eternity!",
        "Saved thro’ a long eternity!"
      ]
    ]
  },
  {
    "hymnNo": "207",
    "title": "There's A Great Day Coming",
    "category": "warning & judgment",
    "hymnChorus": [
      "Are you ready? Are you ready?",
      "Are you ready for the judgment day?",
      "Are you ready? Are you ready",
      "For the judgment day?"
    ],
    "hymnStanzards": [
      [
        "There's a great day coming, a great day coming,",
        "There's a great day coming by and by;",
        "When the saints and the sinners shall be parted left and right,",
        "Are you ready for that day to come?"
      ],
      [
        "There's a bright day coming, a bright day coming,",
        "There's a bright day coming by and by;",
        "But its brightness shall only come to them that love the Lord,",
        "Are you ready for that day to come?"
      ],
      [
        "There's a sad day coming, a sad day coming,",
        "There's a sad day coming by and by;",
        "When the sinner shall hear his doom, \"Depart, I know ye not,\"",
        "Are you ready for that day to come?"
      ]
    ]
  },
  {
    "hymnNo": "208",
    "title": "The Great Judgement Morning",
    "category": "warning & judgment",
    "hymnChorus": [
      "And O, what a weeping and wailing,",
      "As the lost were told of their fate;",
      "They cried for the rocks and the mountains,",
      "They prayed, but their prayer was too late."
    ],
    "hymnStanzards": [
      [
        "I dreamed that the great judgment morning",
        "Had dawned, and the trumpet had blown;",
        "I dreamed that the nations had gathered",
        "To judgment before the white throne;",
        "From the throne came a bright shining angel,",
        "And stood on the land and the sea,",
        "And swore with his hand raised to heaven,",
        "That time was no longer to be."
      ],
      [
        "The rich man was there, but his money",
        "Had melted and vanished away;",
        "A pauper he stood in the judgment,",
        "His debts were too heavy to pay;",
        "The great man was there, but his greatness,",
        "When death came, was left far behind!",
        "The angel that opened the records,",
        "Not a trace of his greatness could find."
      ],
      [
        "The widow was there with the orphans,",
        "God heard and remembered their cries;",
        "No sorrow in heaven for ever,",
        "God wiped all the tears from their eyes;",
        "The gambler was there and the drunkard,",
        "And the man that had sold them the drink,",
        "With the people who gave him the license,",
        "Together in hell they did sink."
      ],
      [
        "The moral man came to the judgment,",
        "But his self-righteous rags would not do;",
        "The men who had crucified Jesus",
        "Had passed off as moral men too;",
        "The soul that had put off salvation,",
        "\"Not tonight; I'll get saved by and by,",
        "No time now to think of religion!\"",
        "At last they had found time to die."
      ]
    ]
  },
  {
    "hymnNo": "209",
    "title": "I Will Not Forget Thee",
    "category": "The lord's love and care",
    "hymnChorus": [
      "I will not forget thee or leave thee;",
      "In my hands I'll hold thee, in my arms I'll fold thee;",
      "I will not forget thee or leave thee;",
      "I am thy Redeemer, I will care for thee."
    ],
    "hymnStanzards": [
      [
        "Sweet is the promise - \"I will not forget thee,\"",
        "Nothing can molest or turn my soul away;",
        "E'en tho' the night be dark within the valley,",
        "Just beyond is shining an eternal day."
      ],
      [
        "Trusting the promise - \"I will not forget thee,\"",
        "Onward will I go with songs of joy and love;",
        "Tho' earth despise me, tho' my friends forsake me,",
        "I shall be remembered in my home above."
      ],
      [
        "When at the golden portals I am standing,",
        "All my tribulations, all my sorrows past,",
        "How sweet to hear the blessed proclamation,",
        "\"Enter, faithful servant, welcome home at last!\""
      ]
    ]
  },
  {
    "hymnNo": "210",
    "title": "Open My Eyes That I May See",
    "category": "commitment & consecration",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Open my eyes, that I may see",
        "Glimpses of truth Thou hast for me;",
        "Place in my hands the wonderful key",
        "That shall unclasp and set me free.",
        " ",
        "Open my ears, that I may hear",
        "Voices of truth Thou sendest clear;",
        "And while the wave notes fall on my ear,",
        "Everything false will disappear.",
        " ",
        "Open my mouth, and let me bear,",
        "Gladly the warm truth everywhere;",
        "Open my heart and let me prepare",
        "Love with Thy children thus to share."
      ],
      [
        "Open my way, that i may bring",
        "Trophies of grace to Thee, my King",
        "Echoed in love Thy word shall out ring",
        "Sweet as the note that angels sing ",
        "Silently now i wait for thee",
        "Ready, my God, Thy will to see",
        "Open my way, illuminate me, Spirit Divine!",
        ""
      ]
    ]
  },
  {
    "hymnNo": "211",
    "title": "Crown Him With Many Crowns",
    "category": "adoration",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Crown him with many crowns,",
        "the Lamb upon his throne.",
        "Hark! how the heavenly anthem drowns",
        "all music but its own.",
        "Awake, my soul, and sing",
        "of him who died for thee,",
        "and hail him as thy matchless king",
        "through all eternity."
      ],
      [
        "Crown him the Lord of love;",
        "behold his hands and side,",
        "rich wounds, yet visible above,",
        "in beauty glorified;",
        "no angels in the sky",
        "can fully bear that sight,",
        "but downward bends their burning eye",
        "at mysteries so bright."
      ],
      [
        "Crown him the Lord of years,",
        "the potentate of time,",
        "creator of the rolling spheres,",
        "ineffably sublime.",
        "All hail, Redeemer, hail!",
        "for thou hast died for me;",
        "thy praise shall never, never fail",
        "throughout eternity.",
        ""
      ]
    ]
  },
  {
    "hymnNo": "212",
    "title": "Jesus Shall Reign",
    "category": "adoration",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Jesus shall reign where'er the sun",
        "does its successive journeys run,",
        "his kingdom stretch from shore to shore,",
        "till moons shall wax and wane no more."
      ],
      [
        "People and realms of every tongue",
        "dwell on his love with sweetest song,",
        "and infant voices shall proclaim",
        "their early blessings on his name."
      ],
      [
        "Blessings abound where'er he reigns:",
        "the prisoners leap to lose their chains,",
        "the weary find eternal rest,",
        "and all who suffer want are blest."
      ],
      [
        "Let every creature rise and bring",
        "the highest honors to our King,",
        "angels descend with songs again,",
        "and earth repeat the loud amen. "
      ]
    ]
  },
  {
    "hymnNo": "213",
    "title": "Rejoice The Lord Is King",
    "category": "adoration",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Rejoice, the Lord is King:",
        "Your Lord and King adore!",
        "Rejoice, give thanks and sing,",
        "And triumph evermore.",
        "Lift up your heart,",
        "Lift up your voice!",
        "Rejoice, again I say, rejoice!"
      ],
      [
        "His kingdom cannot fail,",
        "He rules o'er earth and heav'n;",
        "The keys of death and hell",
        "Are to our Jesus giv'n:",
        "Lift up your heart,",
        "Lift up your voice!",
        "Rejoice, again I say, rejoice!"
      ],
      [
        "Rejoice in glorious hope!",
        "Our Lord and judge shall come",
        "And take His servants up",
        "To their eternal home:",
        "Lift up your heart,",
        "Lift up your voice!",
        "Rejoice, again I say, rejoice!"
      ]
    ]
  },
  {
    "hymnNo": "214",
    "title": "All Hail The Power Of Jesus",
    "category": "adoration",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "All hail the power of Jesus' name!",
        "Let angels prostrate fall.",
        "Bring forth the royal diadem,",
        "and crown him Lord of all.",
        "Bring forth the royal diadem,",
        "and crown him Lord of all!"
      ],
      [
        "Let every tongue and every tribe",
        "responsive to his call,",
        "to him all majesty ascribe,",
        "and crown him Lord of all.",
        "To him all majesty ascribe,",
        "and crown him Lord of all!"
      ],
      [
        "Oh, that with all the sacred throng",
        "we at his feet may fall!",
        "We'll join the everlasting song",
        "and crown him Lord of all.",
        "We'll join the everlasting song",
        "and crown him Lord of all. "
      ]
    ]
  },
  {
    "hymnNo": "215",
    "title": "Ohappy Day That Fixed My Choice",
    "category": "special occasions",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "O happy day, that fixed my choice",
        "On Thee, my Saviour and my God!",
        "Well may this glowing heart rejoice,",
        "And tell its raptures all abroad."
      ],
      [
        "O happy bond, that seals my vows",
        "To Him Who merits all my love!",
        "Let cheerful anthems fill His house,",
        "While to that sacred shrine I move."
      ],
      [
        "'Tis done: the great transaction's done!",
        "I am the Lord's and He is mine;",
        "He drew me, and I followed on;",
        "Charmed to confess the voice divine."
      ],
      [
        "Now rest, my long divided heart,",
        "Fixed on this blissful centre, rest.",
        "Here have I found a nobler part;",
        "Here heavenly pleasures fill my breast."
      ],
      [
        "High heaven, that heard the solemn vow,",
        "That vow renewed shall daily hear,",
        "Till in life's latest hour I bow",
        "And bless in death a bond so dear."
      ],
      [
        ""
      ]
    ]
  },
  {
    "hymnNo": "216",
    "title": "More About Jesus Would I Know",
    "category": "commitment & consecration",
    "hymnChorus": [
      "More, more about Jesus,",
      "More, more about Jesus;",
      "More of His saving fullness see,",
      "More of His love who died for me."
    ],
    "hymnStanzards": [
      [
        "More about Jesus would I know,",
        "More of His grace to others show;",
        "More of His saving fullness see,",
        "More of His love who died for me. "
      ],
      [
        "More about Jesus let me learn,",
        "More of His holy will discern;",
        "Spirit of God, my teacher be,",
        "Showing the things of Christ to me."
      ],
      [
        "More about Jesus, in His Word,",
        "Holding communion with my Lord;",
        "Hearing His voice in every line,",
        "Making each faithful saying mine."
      ],
      [
        "More about Jesus on His throne,",
        "Riches in glory all His own;",
        "More of His kingdom's sure increase;",
        "More of His coming, Prince of Peace.",
        ""
      ]
    ]
  },
  {
    "hymnNo": "217",
    "title": "O Perfect Love All Human Thought Transcending",
    "category": "christian life",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "O perfect Love, all human thought transcending, ",
        "lowly we kneel in prayer before thy throne, ",
        "that theirs may be the love which knows no ending, ",
        "whom thou in sacred vow dost join in one. "
      ],
      [
        "Grant them the joy which brightens earthly sorrow; ",
        "grant them the peace which calms all earthly strife; ",
        "grant them the vision of the glorious morrow ",
        "that will reveal eternal love and life. "
      ]
    ]
  },
  {
    "hymnNo": "218",
    "title": "Love Divine All Loves",
    "category": "The lord's love and care",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Love divine, all loves excelling,",
        "Joy of heaven, to earth come down;",
        "Fix in us Thy humble dwelling;",
        "All Thy faithful mercies crown.",
        "Jesus, Thou art all compassion,",
        "Pure, unbounded love Thou art;",
        "Visit us with Thy salvation;",
        "Enter every trembling heart."
      ],
      [
        "Come, Almighty to deliver,",
        "Let us all Thy life receive;",
        "Suddenly return, and never,",
        "Never more Thy temples leave:",
        "Thee we would be always blessing,",
        "Serving as Thy hosts above,",
        "Pray, and praise Thee without ceasing,",
        "Glory in Thy perfect love."
      ],
      [
        "Finish then Thy new creation;",
        "Pure and spotless let us be;",
        "Let us see Thy great salvation,",
        "Perfectly restored in Thee:",
        "Changed from glory into glory,",
        "Till in heaven we take our place,",
        "Till we cast our crowns before Thee,",
        "Lost in wonder, love, and praise."
      ]
    ]
  },
  {
    "hymnNo": "219",
    "title": "More More Holiness Give Me",
    "category": "sanctification",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "More holiness give me, ",
        "More striving within;",
        "More patience in suff'ring,",
        "More sorrow for sin;",
        "More faith in my Savior,",
        "More sense of His care.",
        "More joy in His service, ",
        "More purpose in prayer."
      ],
      [
        "More purity give me, ",
        "More strength to o’ercome;",
        "More freedom from earth-stains,",
        "More longings for home;",
        "More fit for the kingdom, ",
        "More used would I be;",
        "More blessèd and holy, ",
        "More, Savior, like Thee."
      ]
    ]
  },
  {
    "hymnNo": "220",
    "title": "When I Saw The Cleansing Fountain",
    "category": "blood of jesus",
    "hymnChorus": [
      "I will praise Him! I will praise Him!",
      "Praise the Lamb for sinners slain;",
      "Give Him glory, all ye people,",
      "For His blood can wash away each stain."
    ],
    "hymnStanzards": [
      [
        "1 When I saw the cleansing fountain,",
        "Open wide for all my sin,",
        "I obeyed the Spirit’s wooing",
        "When He said, “Wilt thou be clean?”"
      ],
      [
        "Tho' the way seems straight and narrow,",
        "All I claimed was swept away;",
        "My ambitions, plans and wishes,",
        "At my feet in ashes lay."
      ],
      [
        "Blessed be the name of Jesus!",
        "I’m so glad He took me in;",
        "He’s forgiven my transgressions,",
        "He has cleansed my heart from sin."
      ],
      [
        "Glory, glory to the Father!",
        "Glory, glory to the Son!",
        "Glory, glory to the Spirit!",
        "Glory to the Three in One!"
      ]
    ]
  },
  {
    "hymnNo": "221",
    "title": "Lets Not Thy Hands Be Slack",
    "category": "evangelism",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Let not thy hands be slack,",
        "Live not in vain;",
        "Out on life's lonely track",
        "Men toil in pain.",
        "Play thou a brother's part,",
        "Strength, love and hope impart;",
        "Bid thou the fainting heart",
        "Look up again."
      ],
      [
        "Let not thy hands be slack,",
        "Haste to the fray!",
        "Dream not of turning back;",
        "Life is not play!",
        "Gird thou thy armor on,",
        "Fight till the battle's won,",
        "Then shall thy Lord's \"Well done,\"",
        "More than repay!"
      ],
      [
        "Let not thy hands be slack,",
        "\"Fear not! be strong!\"",
        "Cease not to make attack",
        "On ev'ry wrong!",
        "Press on for Truth and Right,",
        "Hold high the Gospel Light,",
        "Expel the dirge of night",
        "With heaven's Song!"
      ],
      [
        "Let not thy hands be slack,",
        "The days fly fast.",
        "Lost moments come not back",
        "From the dark past.",
        "Then be not slack of hand!",
        "Help thou the weak to stand!",
        "To God and Fatherland",
        "Give all thou hast!"
      ]
    ]
  },
  {
    "hymnNo": "222",
    "title": "Speed Thy Servants Saviour Speed Them",
    "category": "evangelism",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Speed thy servants, Saviour, speed them; ",
        "Thou art Lord of winds and waves; ",
        "They were bound, but thou hast freed them; ",
        "Now they go to free the slaves: ",
        "Be thou with them, 'Tis thine arm alone that save. ",
        "'Tis thine arm alone that saves. "
      ],
      [
        "Where no fruit appears to cheer them, ",
        "And they seem to toil in vain, ",
        "Then in mercy, Lord, draw near them, ",
        "Then their sinking hopes sustain: ",
        "Thus supported, ",
        "Let their zeal revive again. ",
        "Thus supported, ",
        "Let their zeal revive again. "
      ],
      [
        "In the midst of opposition ",
        "Let them trust, O Lord, in thee; ",
        "When success attends their mission, ",
        "Let thy servants humbler be: ",
        "Never leave them ",
        "Till thy face in heav'n they see. ",
        "Never leave them ",
        "Till thy face in heav'n they see. "
      ],
      [
        "There to reap in joy forever, ",
        "Fruit that grows from seed here sown ",
        "There to be with him who never Ceases to preserve His",
        "own; And with gladness, Give the praise to Him alone",
        ""
      ]
    ]
  },
  {
    "hymnNo": "223",
    "title": "I Gave My Life For Thee",
    "category": "christian life",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "I gave my life for thee,",
        "My precious blood I shed,",
        "That thou might'st ransomed be,",
        "And quickened from the dead;",
        "I gave, I gave My life for thee – ",
        "What hast thou giv'n for me?"
      ],
      [
        "I suffered much for thee,",
        "More than thy tongue can tell,",
        "Of bitt'rest agony",
        "To rescue thee from hell;",
        "I've borne, I've borne it all for thee –",
        "What hast thou borne for me?"
      ],
      [
        "And I have brought to thee,",
        "Down from My home above,",
        "Salvation full and free,",
        "My pardon and My love;",
        "I bring, I bring rich gifts to thee –",
        "What hast thou brought to Me?"
      ]
    ]
  },
  {
    "hymnNo": "224",
    "title": "Oh The Bitter Shame And Sorrow",
    "category": "grace & forgiveness",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "O the bitter shame and sorrow,",
        "That a time could ever be,",
        "When I let the Savior’s pity",
        "Plead in vain, and proudly answered,",
        "All of self, and none of Thee!"
      ],
      [
        "Day by day His tender mercy,",
        "Healing, helping, full and free,",
        "Sweet and strong, and ah! so patient,",
        "Brought me lower, while I whispered,",
        "Less of self, and more of Thee!"
      ],
      [
        "Higher than the highest heavens,",
        "Deeper than the deepest sea,",
        "Lord, Thy love at last hath conquered:",
        "Grant me now my supplication,",
        "None of self, and all of Thee!"
      ]
    ]
  },
  {
    "hymnNo": "225",
    "title": "Burn Fire Of God",
    "category": "holy spirit",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Burn fire of God! my ransomed soul possessing;",
        "Pure fire Thou art, and I would dwell in Thee.",
        "Light of my life, true source of every blessing,",
        "Grant all my days one holy flame to be."
      ],
      [
        "Burn fire of God! Thy cloven tongue bestowing,",
        "Baptising me with heavenly energy.",
        "Touched with live coals from off Thine altar glowing,",
        "My purgèd  lips shall speak alone of Thee."
      ],
      [
        "Burn fire of God! with seven-fold refining,",
        "Till, mirrored from my deeps Thine eyes shall see",
        "In purest gold Thy perfect image shining:",
        "Thy Christ revealed in clear irradiancy."
      ],
      [
        "Burn fire of God! by Thine own love transcending,",
        "Let all I hold be Thine, and Thine alone!",
        "Heart, mind and will a sacrifice ascending,",
        "Consumed by fire from out Thy fiery Throne."
      ]
    ]
  },
  {
    "hymnNo": "226",
    "title": "Thy Blessed Will Divine",
    "category": "commitment & consecration",
    "hymnChorus": [
      "Thy blessed will divine, with joy I make it mine,",
      "My heart shall be Thy throne, and Thine alone.",
      "Choose Thou the path I tread and whither, I am led,",
      "Help me to follow on, O mighty Saviour."
    ],
    "hymnStanzards": [
      [
        "I want my life to be all filled with praise to Thee,",
        "My precious Lord divine Who died for me,",
        "Let all my will be Thine, Controlled by love divine",
        "Live out in me Thy life, O Mighty Saviour."
      ],
      [
        "A pilgrim born anew, a stranger going through,",
        "Not of this world am I, since I am Thine.",
        "Weaned from its passing show, transformed Thy love to know,",
        "Hold Thou my hand in Thine, O mighty Saviour."
      ],
      [
        "When evil foes assail and almost would prevail,",
        "In that dark hour be Thou my strength and shield.",
        "Lend then Thy strong embrace, uphold me by Thy grace,",
        "In weakness be my strength, O mighty Saviour."
      ],
      [
        "Yea, choose the path for me, although I may not see,",
        "The reason Thou dost will to lead me so.",
        "I know the toilsome way will lead to realms of day,",
        "Where I shall dwell with Thee, O mighty Saviour."
      ]
    ]
  },
  {
    "hymnNo": "227",
    "title": "Nearer My God To Thee",
    "category": "commitment & consecration",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Nearer, my God, to Thee, nearer to Thee!",
        "E’en though it be a cross that raiseth me,",
        "Still all my song shall be, nearer, my God, to Thee."
      ],
      [
        "There let the way appear, steps unto Heav’n;",
        "All that Thou sendest me, in mercy given;",
        "Angels to beckon me nearer, my God, to Thee."
      ],
      [
        "Then, with my waking thoughts bright with Thy praise,",
        "Out of my stony griefs Bethel I’ll raise;",
        "So by my woes to be nearer, my God, to Thee."
      ],
      [
        "Or, if on joyful wing cleaving the sky,",
        "Sun, moon, and stars forgot, upward I’ll fly,",
        "Still all my song shall be, nearer, my God, to Thee."
      ],
      [
        "There in my Father’s home, safe and at rest,",
        "There in my Savior’s love, perfectly blest;",
        "Age after age to be, nearer my God to Thee.",
        ""
      ]
    ]
  },
  {
    "hymnNo": "228",
    "title": "O Why Not Tonight",
    "category": "invitation",
    "hymnChorus": [
      "O why not tonight? O why not to-night?",
      "Wilt thou ne saved?",
      "Then why not tonight?"
    ],
    "hymnStanzards": [
      [
        "Oh, do not let thy Lord depart,",
        "And close thine eyes against the light;",
        "Poor sinner, harden not thy heart;",
        "Be saved, O tonight."
      ],
      [
        "Tomorrow’s sun may never rise",
        "To bless thy long-deluded sight;",
        "This is the time!—oh, then, be wise!",
        "Be saved, O tonight."
      ],
      [
        "Our God in pity lingers still;",
        "Oh, wilt thou thus His love requite?",
        "Renounce at length thy stubborn will,",
        "Be saved, O tonight."
      ],
      [
        "Our blessèd Lord refuses none",
        "Who would to Him their souls unite;",
        "Believe, obey the work is done",
        "Be saved, O tonight.",
        ""
      ]
    ]
  },
  {
    "hymnNo": "229",
    "title": "Hold The Fort",
    "category": "conflict & victory",
    "hymnChorus": [
      "\"Hold the fort, for I am coming,\"",
      "Jesus signals still;",
      "Wave the answer back to heaven,",
      "\"By Thy grace we will.\""
    ],
    "hymnStanzards": [
      [
        "Ho, my comrades! see the signal",
        "Waving in the sky!",
        "Reinforcements now appearing,",
        "Victory is nigh!"
      ],
      [
        "See the mighty host advancing,",
        "Satan leading on:",
        "Mighty men around us falling,",
        "Courage almost gone!"
      ],
      [
        "See the glorious banner waving!",
        "Hear the trumpet blow!",
        "In our Leader's name we'll triumph",
        "Over every foe!"
      ],
      [
        "Fierce and long the battle rages,",
        "But our help is near:",
        "Onward comes our great Commander,",
        "Cheer, my comrades, cheer!"
      ]
    ]
  },
  {
    "hymnNo": "230",
    "title": "Bring Your Vessel Not A Few",
    "category": "holy spirit",
    "hymnChorus": [
      "He will fill your heart today to overflowing.",
      "As the Lord commandeth you,",
      "“Bring your vessels, not a few.\"",
      "He will fill your heart today to overflowing",
      "With the Holy Ghost and power."
    ],
    "hymnStanzards": [
      [
        "Are you longing for the fullness",
        "Of the blessing of the Lord",
        "In your heart and life today?",
        "Claim the promise of your Father;",
        "Come according to His Word,",
        "In the blessèd, old time way."
      ],
      [
        "Bring your empty earthen vessels,",
        "Clean through Jesus’ precious blood.",
        "Come, ye needy, one and all;",
        "And in human consecration",
        "Wait before the throne of God",
        "Till the Holy Ghost shall fall."
      ],
      [
        "Like the cruse of oil unfailing",
        "Is His grace forevermore,",
        "And His love unchanging still;",
        "And according to His promise,",
        "With the Holy Ghost and power",
        "He will every vessel fill."
      ],
      [
        ""
      ]
    ]
  },
  {
    "hymnNo": "231",
    "title": "Send The Light",
    "category": "evangelism",
    "hymnChorus": [
      "Send the light, the blessed Gospel light;",
      "Let it shine from shore to shore!",
      "Send the light, and let its radiant beams,",
      "Light the world forevermore!"
    ],
    "hymnStanzards": [
      [
        "There's a call comes ringing o'er the restless wave,",
        "\"Send the light! Send the light!\"",
        "There are souls to rescue, there are souls to save,",
        "Send the light! Send the light! "
      ],
      [
        "We have heard the Macedonian call today,",
        "\"Send the light! Send the light!\"",
        "And a golden off'ring at the cross we lay,",
        "Send the light! Send the light!"
      ],
      [
        "Let us pray that grace may everywhere abound,",
        "\"Send the light! Send the light!\"",
        "And a Christ-like spirit everywhere be found,",
        "Send the light! Send the light!"
      ],
      [
        "Let us not grow weary in the work of love,",
        "\"Send the light! Send the light!\"",
        "Let us gather jewels for a crown above,",
        "Send the light! Send the light!"
      ]
    ]
  },
  {
    "hymnNo": "232",
    "title": "Blest Be The Tie That Binds",
    "category": "christian life",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Blest be the tie that binds",
        "Our hearts in Christian love;",
        "The fellowship of kindred minds",
        "Is like to that above."
      ],
      [
        "We share our mutual woes,",
        "Our mutual burdens bear;",
        "And often for each other flows",
        "The sympathising tear."
      ],
      [
        "When we asunder part",
        "It gives us inward pain;",
        "But we shall still be joined in heart,",
        "And hope to meet again."
      ],
      [
        "This glorious hope revives",
        "Our courage by the way;",
        "While each in expectation lives,",
        "And longs to see the day."
      ],
      [
        "From sorrow, toil and pain,",
        "And sin, we shall be free,",
        "And perfect love and friendship reign",
        "Through all eternity."
      ]
    ]
  },
  {
    "hymnNo": "233",
    "title": "Stand Up Stand Up For Jesus",
    "category": "conflict & victory",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Stand up, stand up for Jesus!",
        "Ye soldiers of the Cross;",
        "Lift high His royal banner,",
        "It must not suffer loss:",
        "From victr'y unto victr'y",
        "His army shall He lead,",
        "Till ev'ry foe is vanquished",
        "And Christ is Lord indeed."
      ],
      [
        "Stand up, stand up for Jesus!",
        "Stand in His strength alone;",
        "The arm of flesh will fail you;",
        "Ye dare not trust your own:",
        "Put on the gospel armour,",
        "Each piece put on with prayer;",
        "Where duty calls or danger,",
        "Be never wanting there."
      ],
      [
        "Stand up, stand up for Jesus!",
        "The strife will not be long;",
        "This day the noise of battle,",
        "The next the victor's song:",
        "To him that overcometh,",
        "A crown of life shall be;",
        "He with the King of glory",
        "Shall reign eternally."
      ]
    ]
  },
  {
    "hymnNo": "234",
    "title": "O Lord With One Accord",
    "category": "holy spirit",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "O Lord \"with one accord\" ",
        "we gather round Thy holy throne",
        "to worship the alone.",
        "Now send from heaven the Holy ghost",
        "Be this another Pentecost"
      ],
      [
        "Where is the mighty wind That",
        "shook the holy place that gladdened",
        "every mind and brightened every face? ",
        "And where the cloven tongues of flames",
        "That marked each follower of the Lamb?"
      ],
      [
        "There is no chance in Thee, Lord God the Holy Ghost,",
        "Thy glorious majesty Is as a Pentecost!",
        "O may our loosened tongues proclaim ",
        "That Thou our God art still the same"
      ],
      [
        "And may the living wave That issues from on high,",
        "whose golden waters lave thy eternally ",
        "Flow doen in power on us to-day, ",
        "And none shall go unblessed away"
      ],
      [
        "Anoint us with Thy grace, to yield ourselves to Thee",
        "To run our daily grace with joy and energy ",
        "until we hear the Bridegroom say, ",
        "\"Rise up my love and come and stay\"",
        ""
      ]
    ]
  },
  {
    "hymnNo": "235",
    "title": "The Holy Spirit's Power",
    "category": "holy spirit",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "The holy Spirit's power",
        "Ye need th master said \"So wait till comes ",
        "the hours when on you He is shed so praise",
        "did all their soul employ as tarried they ",
        "with fervent joy"
      ],
      [
        "Their loosened tongues were filled",
        "with strange and wondrous words;",
        "Heaven's life their hearts has thrilled,",
        "God's goodness they declared;",
        "\"And unto all, \"th' Apostle said, ",
        "\"Is the gift, since Christ has bled.\""
      ],
      [
        "Come now, ye sons of men This message now received ,",
        "The holy spirit given To all believe;",
        "Ye, too, may know His mighty power,",
        "And speak with tongues this very hour."
      ],
      [
        "Then charity divine",
        "Your yaerning hearts shall fill",
        "T'wards those who now repine, ",
        "Held in sin's bondage still; ",
        "For these your zeal shall never tire",
        "To snatch them from the everlsating fire.",
        ""
      ]
    ]
  },
  {
    "hymnNo": "236",
    "title": "Lord God The Holyghost",
    "category": "holy spirit",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Lord God, the Holy Ghost,",
        "In this accepted hour,",
        "As on the day of Pentecost,",
        "Descend in all Thy power."
      ],
      [
        "Like mighty rushing wind",
        "Upon the waves beneath,",
        "Move with one impulse every mind;",
        "One soul, one feeling breathe."
      ],
      [
        "The young, the old inspire",
        "With wisdom from above;",
        "And give us hearts and tongues of fire,",
        "To pray, and praise, and love."
      ],
      [
        "Spirit of light, explore",
        "And chase our gloom away,",
        "With luster shining more and more",
        "Unto the perfect day."
      ],
      [
        "Spirit of truth, be Thou",
        "In life and death, our guide;",
        "O Spirit of adoption, now",
        "May we be sanctified!"
      ]
    ]
  },
  {
    "hymnNo": "237",
    "title": "Peace Perfect Peace",
    "category": "conflict & victory",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Peace, perfect peace, in this dark world of sin?",
        "The blood of Jesus whispers peace within."
      ],
      [
        "Peace, perfect peace, with sorrows surging round?",
        "On Jesus' bosom naught but calm is found."
      ],
      [
        "Peace, perfect peace, with loved ones far away?",
        "In Jesus' keeping we are safe, and they."
      ],
      [
        "Peace, perfect peace, our future all unknown?",
        "Jesus we know, and He is on the throne."
      ],
      [
        "Peace, perfect peace, death shadowing us and ours?",
        "Jesus has vanquished death and all its powers."
      ],
      [
        "It is enough: earth's struggles soon shall cease,",
        "And Jesus call us to heaven's perfect peace",
        ""
      ]
    ]
  },
  {
    "hymnNo": "238",
    "title": "Thou Hidden Source Of Calm Repose",
    "category": "christ our saviour",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Thou hidden source of calm repose,",
        "thou all-sufficient love divine,",
        "my help and refuge from my foes,",
        "secure i am, if thou art mine:",
        "and lo, from sin, and grief, and shame,",
        "I hide me, Jesus, in thy name."
      ],
      [
        "Jesus, my all in all thou art:",
        "my rest in toil, my ease in pain,",
        "the medicine of my broken heart,",
        "in war my peace, in loss my gain,",
        "my smile beneath the tyrant's frown,",
        "in shame my glory and my crown;"
      ],
      [
        "In want my plentiful supply,",
        "in weakness my almighty power,",
        "in bonds my perfect liberty,",
        "my light in Satan's darkest hour,",
        "in grief my joy unspeakable,",
        "my life in death, my heaven,my all."
      ]
    ]
  },
  {
    "hymnNo": "239",
    "title": "One There Is Above All Others",
    "category": "christ our saviour",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "One there is, above all others,",
        "well deserves the name of Friend;",
        "his is love beyond a brother's,",
        "costly, free, and knows no end.",
        "They who once his kindness prove",
        "find it everlasting love."
      ],
      [
        "When he lived on earth abased,",
        "\"Friend of sinners\" was his name.",
        "Now above all glory raised,",
        "he rejoices in the same;",
        "still he calls them brethren, friends,",
        "and to all their wants attends."
      ],
      [
        "O for grace our hearts to soften!",
        "Teach us, Lord, at length to love;",
        "we, alas! forget too often",
        "what a Friend we have above:",
        "but when home our souls are brought,",
        "we will love you as we ought."
      ]
    ]
  },
  {
    "hymnNo": "240",
    "title": "Jesus Is The Same Forever",
    "category": "assurance & confidence",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Jesus Is The Same Forever",
        "As Of Old, So Now Today;",
        "All The Host Of Hell Endeavour",
        "Vainly To Obstruct His Sway,",
        "In His People’s Hearts He",
        "Reigneth,",
        "Finishes What He Begins;",
        "Jesus Still “All Power”",
        "Retaineth,",
        "Saves His People From Their",
        "Sins."
      ],
      [
        "Jesus Is The Same Forever;",
        "Still He Says “In Me Abide,”",
        "From His Ha No Power Can Sever",
        "Those Who In Their Lord Confide,",
        "Sweetly From All Care He Frees Us,",
        "Ours The Comfort His The Shame",
        "Blessed Saviour; Precious Jesus",
        "There’s No Music Like Thy Name."
      ]
    ]
  },
  {
    "hymnNo": "241",
    "title": "I've Found The Pearl Of Greatest Peice",
    "category": "adoration",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "I've found the pearl of greatest price,",
        "My heart doth sing for joy:",
        "And sing I must, a Christ I have;",
        "O what a Christ have I?"
      ],
      [
        "Christ is a prophet, priest and king,",
        "A Prophet full of light,",
        "A Priest that stands 'twixt God and man,",
        "A King that rules with might."
      ],
      [
        "Christ's manhood is a temple, where",
        "The altar God doth rest;",
        "My Christ, he is the sacrifice,",
        "My Christ he is the priest."
      ],
      [
        "My Christ he is the Lord of lords,",
        "He is the King of kings;",
        "He is the Sun of righteousness,",
        "With healing in his wings."
      ],
      [
        "My Christ, he is the Tree of Life,",
        "Which in God's garden grows;",
        "Whose fruit does feed, whose leaves do heal;",
        "My Christ is Sharon's rose."
      ],
      [
        "Christ is my meat, Christ is my drink,",
        "My physic and my health,",
        "My peace, my strength, my joy, my crown,",
        "My glory and my wealth."
      ],
      [
        "Christ is my father, and my friend,",
        "My brother and my love;",
        "My head, my hope, my counselor,",
        "My advocate above."
      ],
      [
        "My Christ, he is the Heaven of heavens,",
        "My Christ what shall I call?",
        "My Christ is first, my Christ is last,",
        "My Christ is all in all."
      ]
    ]
  },
  {
    "hymnNo": "242",
    "title": "A Good High Priest Is Come",
    "category": "grace & forgiveness",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "A good High Priest is come,",
        "supplying Aaron's place,",
        "and taking up his room,",
        "dispensing life and grace;",
        "the law by Aaron's priesthood came,",
        "but grace and truth by Jesus' name."
      ],
      [
        "He died, but lives again,",
        "and by the throne He stands,",
        "there shows how He was slain,",
        "opening His piercèd hands;",
        "our Priest abides and pleads the cause",
        "of us who have transgressed His laws."
      ],
      [
        "I other priests disclaim,",
        "and laws and off'rings too;",
        "none but the bleeding Lamb",
        "the mighty work can do;",
        "He shall have all the praise: for He ",
        "has loved, and died, and lives for me."
      ]
    ]
  },
  {
    "hymnNo": "243",
    "title": "Standing On The Promises",
    "category": "assurance & confidence",
    "hymnChorus": [
      "Standing, standing,",
      "Standing on the promises of God my Saviour;",
      "Standing, standing,",
      "I'm standing on the promises of God."
    ],
    "hymnStanzards": [
      [
        "Standing on the promises of Christ my King,",
        "Through eternal ages let His praises ring;",
        "Glory in the highest I will shout and sing,",
        "Standing on the promises of God."
      ],
      [
        "Standing on the promises that cannot fail,",
        "When the howling storms of doubt and fear assail,",
        "By the living Word of God I shall prevail,",
        "Standing on the promises of God."
      ],
      [
        "Standing on the promises I now can see",
        "Perfect, present cleansing in the blood for me;",
        "Standing in the liberty where Christ makes free,",
        "Standing on the promises of God."
      ],
      [
        "Standing on the promises of Christ the Lord,",
        "Bound to Him eternally by love's strong cord,",
        "Overcoming daily by the Spirit's sword,",
        "Standing on the promises of God."
      ],
      [
        "Standing on the promises I cannot fall,",
        "List'ning ev'ry moment to the Spirit's call,",
        "Resting in my Saviour, as my all in all,",
        "Standing on the promises of God."
      ]
    ]
  },
  {
    "hymnNo": "244",
    "title": "All Things In Jesus",
    "category": "assurance & confidence",
    "hymnChorus": [
      "All that I want is in Jesus.",
      "He satisfies, joy He supplies;",
      "Life would be worthless without Him;",
      "All things in Jesus I find."
    ],
    "hymnStanzards": [
      [
        "Friends all around me are trying to find",
        "What the heart yearns for by sin undermined;",
        "I have the secret, I know where 'tis found:",
        "Only true pleasures in Jesus abound."
      ],
      [
        "Some carry burdens whose weight has for years",
        "Crushed them with sorrow and blinded with tears.",
        "Yet One stands ready to help them just now,",
        "If they will humbly in penitence bow."
      ],
      [
        "No other name thrills the joy chords within,",
        "And through none else is remission of sin.",
        "He knows the pain of the heart sorely tried.",
        "Both need and want will by Him be supplied."
      ],
      [
        "Jesus is all this poor world needs today.",
        "Blindly they strive, for sin darkens their way.",
        "O to draw back the grim curtains of night,",
        "One glimpse of Jesus and all will be bright!"
      ]
    ]
  },
  {
    "hymnNo": "245",
    "title": "Is Your Life A Channel Of Blessing",
    "category": "christian life",
    "hymnChorus": [
      "Make me a channel of blessing today,",
      "Make me a channel of blessing, I pray;",
      "My life possessing, my service blessing,",
      "Make me a channel of blessing today."
    ],
    "hymnStanzards": [
      [
        "Is your life a channel of blessing?",
        "Is the love of God flowing through you?",
        "Are you telling the lost of the Savior?",
        "Are you ready His service to do? "
      ],
      [
        "Is your life a channel of blessing?",
        "Are you burdened for those that are lost?",
        "Have you urged upon those who are straying",
        "The Savior Who died on the cross?"
      ],
      [
        "Is your life a channel of blessing?",
        "Is it a daily telling for Him?",
        "Have you spoken the Word of salvation",
        "To those who are dying in sin? "
      ],
      [
        "We cannot be channels of blessing",
        "If our lives are not free from known sin;",
        "We will barriers be and a hindrance",
        "To those we are trying to win."
      ]
    ]
  },
  {
    "hymnNo": "246",
    "title": "O Brother Life S Journey Beginning",
    "category": "conflict & victory",
    "hymnChorus": [
      "God help you to follow His banner,",
      "And serve Him wherever you go;",
      "And when you are tempted, my brother,",
      "God give you the grace to say No!"
    ],
    "hymnStanzards": [
      [
        "O brother, life’s journey beginning,",
        "With courage and firmness arise!",
        "Look well to the course thou art choosing;",
        "Be earnest, be watchful, and wise!",
        "Remember—two paths are before thee,",
        "And both thy attention invite;",
        "But one leadeth on to destruction,",
        "The other to joy and delight."
      ],
      [
        "O brother, yield not to the tempter,",
        "No matter what others may do;",
        "Stand firm in the strength of the Master,",
        "Be loyal, be faithful, and true!",
        "Each trial will make you the stronger,",
        "If you, in the name of the Lord,",
        "Fight manfully under your Leader,",
        "Obeying the voice of His Word."
      ],
      [
        "O brother, the Savior is calling!",
        "Beware of the danger of sin;",
        "Resist not the voice of the Spirit,",
        "That whispers so gently within.",
        "God calls you to enter His service—",
        "To live for Him here, day by day;",
        "And share by and by in the glory",
        "That never shall vanish away.",
        ""
      ]
    ]
  },
  {
    "hymnNo": "247",
    "title": "The Finished The Messiah Dies",
    "category": "christ our saviour",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "'Tis finished! the Messiah dies, ",
        "cut off for sins, but not his own. ",
        "Accomplished is the sacrifice, ",
        "the great redeeming work is done. "
      ],
      [
        "'Tis finished! All my guilt and pain, ",
        "I want no sacrifice beside; ",
        "for me, for me the Lamb is slain; ",
        "'tis finished! I am justified. "
      ],
      [
        "The reign of sin and death is o'er, ",
        "and all may live from sin set free; ",
        "Satan hath lost his mortal power; ",
        "'tis swallowed up in victory. "
      ]
    ]
  },
  {
    "hymnNo": "248",
    "title": "The Mercy Seat",
    "category": "conflict & victory",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "From ev'ry stormy wind that blows,",
        "from ev'ry swelling tide of woes,",
        "there is a calm, a sure retreat;",
        "'tis found beneath the mercy seat."
      ],
      [
        "There is a spot where spirits blend,",
        "where friend holds fellowship with friend,",
        "tho' sundered far; by faith they meet",
        "around the common mercy seat."
      ],
      [
        "Ah, whither could we flee for aid,",
        "when tempted, desolate, dismayed,",
        "or how the hosts of hell defeat,",
        "had suff'ring saints no mercy seat?"
      ],
      [
        "There, there on eagle wings we soar,",
        "and time and sense seem all no more,",
        "and heav'n comes down our souls to greet,",
        "and glory crowns the mercy seat."
      ],
      [
        "O may my hand forget her skill,",
        "my tongue be silent, cold, and still,",
        "this bounding heart forget to beat,",
        "if I forget the mercy seat."
      ]
    ]
  },
  {
    "hymnNo": "249",
    "title": "Come Sing The Praise Of Jesus",
    "category": "adoration",
    "hymnChorus": [
      "Praise and glory be to Jesus,",
      "praise and glory be to Jesus,",
      "praise and glory be to Jesus,",
      "for Jesus Christ is king."
    ],
    "hymnStanzards": [
      [
        "Come sing the praise of Jesus",
        "Sing His love with hearts aflame,",
        "Sing his wondrous birth of Mary",
        "when to save the world He came;",
        "Tell the life he lived for others",
        "and His mighty deeds proclaim",
        "for Jesus Christ is King."
      ],
      [
        "When foes arose and slew Him,",
        "He was victor in the fight;",
        "Over death and hell He triumphed",
        "In His resurrection-might;",
        "He has raised our fallen manhood",
        "And enthroned it in the height,",
        "For Jesus Christ is King."
      ],
      [
        "There’s joy for all who serve Him,",
        "More than human tongue can say;",
        "There is pardon for the sinner,",
        "And the night is turned to day;",
        "There is healing for our sorrows,",
        "There is music all the way,",
        "For Jesus Christ is king."
      ],
      [
        "We witness to His beauty,",
        "And we spread His love abroad;",
        "And we cleave the hosts of darkness,",
        "With the Spirit’s piercing sword;",
        "We will lead the souls in prison",
        "To the freedom of the Lord,",
        "For Jesus Christ is king."
      ],
      [
        "To Jesus be the glory,",
        "The dominion, and the praise;",
        "He is Lord of all creation,",
        "He is guide of all our ways;",
        "And the world shall be His empire",
        "In the fulness of the days",
        "For Jesus Christ is king."
      ],
      [
        ""
      ]
    ]
  },
  {
    "hymnNo": "250",
    "title": "For My Sake And The Gospel S Go",
    "category": "evangelism",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "'For my sake and the gospel's, go",
        "and tell redemption's story';",
        "his heralds answer, 'Be it so,",
        "and thine, Lord, all the glory!'",
        "They preach his birth, his life, his cross,",
        "the love of his atonement,",
        "for whom they count the world but loss,",
        "his Easter, his enthronement. "
      ],
      [
        "Still on and on the anthems spread",
        "Of alleluia voices,",
        "In concert with the holy dead",
        "The warrior church rejoices;",
        "Their snow white robes are washed in blood,",
        "Their golden harps are ringing;",
        "Earth and the paradise of God",
        "One triumph song are singing."
      ],
      [
        "He comes, whose advent trumpet drowns",
        "the last of time's evangels,",
        "Immanuel, crowned with many crowns,",
        "the Lord of saints and angels.",
        "O Life, Light, Love, the great I AM,",
        "Triune, who changest never,",
        "the throne of God and of the Lamb",
        "is thine, and thine for ever."
      ]
    ]
  },
  {
    "hymnNo": "251",
    "title": "Only Remembered",
    "category": "christian service & reward",
    "hymnChorus": [
      "Only remembered, only remembered,",
      "Only remembered by what we have done,",
      "Thus would we pass from the earth and its toiling,",
      "Only remembered by what we have done."
    ],
    "hymnStanzards": [
      [
        "Fading away like the stars of the morning",
        "Losing their light in the glorious sun,",
        "Thus would we pass from the earth and its toiling,",
        "Only remembered by what we have done."
      ],
      [
        "Shall we be missed, tho' by others succeeded,",
        "Reaping the fields we in springtime have sown?",
        "Yes, but the sowers must pass from their labours,",
        "Ever remembered by what they have done."
      ],
      [
        "Only the truth that in life we have spoken,",
        "Only the seed that on earth we have sown,",
        "These shall pass onward when we are forgotten,",
        "Fruits of the harvest and what we have done."
      ],
      [
        "Oh, when the Saviour shall make up His jewels,",
        "When the bright crowns of rejoicing are won,",
        "Then shall His weary and faithful disciples",
        "All be remembered by what they have done."
      ]
    ]
  },
  {
    "hymnNo": "252",
    "title": "It Is Morning In My Heart",
    "category": "adoration",
    "hymnChorus": [
      "It is morning, it is morning in my heart;",
      "Jesus made the gloomy shadows all depart.",
      "Songs of gladness now I sing,",
      "For since Jesus is my King",
      "It is morning, it is morning in my heart."
    ],
    "hymnStanzards": [
      [
        "All the darkness of the night has passed away,",
        "It is morning in my heart;",
        "I am living in the sunlight of the day,",
        "It is morning in my heart."
      ],
      [
        "I can the songbirds their refain, ",
        "It is morning in my heart;",
        "And i know that life for me begins",
        "again, It is morning in my heart"
      ],
      [
        "Christ has made the world a paradise to me,",
        "It is morning in my heart;",
        "Every duty in the light of love I see,",
        "It is morning in my heart."
      ],
      [
        "Joy has come to dwell with me forever ",
        "it is morning in my heart; ",
        "i shall sing when it reach the other shore,",
        "It is morning in my heart."
      ]
    ]
  },
  {
    "hymnNo": "253",
    "title": "My Portion Forever",
    "category": "commitment & consecration",
    "hymnChorus": [
      "Take, take the world, with all its gilded toys,",
      "Take, take the world, I covet not its joys,",
      "Mine is a wealth no moth nor rust destroys;",
      "He is my portion forever."
    ],
    "hymnStanzards": [
      [
        "All, all to Jesus, I consecrate anew;",
        "He is my portion forever,",
        "Only His glory henceforth will I pursue:",
        "He is my portion forever."
      ],
      [
        "All, all to Jesus, my trusting heart can say:",
        "He is my portion forever.",
        "Led by His mercy, I'm walking ev'ry day:",
        "He is my portion forever."
      ],
      [
        "Though He may try me, this blessed truth I know:",
        "He is my portion forever,",
        "He will not leave me, His promise tells me so;",
        "He is my portion forever."
      ],
      [
        "All, all to Jesus, I cheerfully resign:",
        "He is my portion forever;",
        "I have the witness that He, my Lord, is mine;",
        "He is my portion forever."
      ]
    ]
  },
  {
    "hymnNo": "254",
    "title": "Lower And Lower",
    "category": "assurance & confidence",
    "hymnChorus": [
      "Lower and lower, down at Thy cross,",
      "All the world’s treasure counting but dross;",
      "Down at Thy feet, blessed Savior, we fall,",
      "Lower, still lower, Christ all in all!"
    ],
    "hymnStanzards": [
      [
        "Lower and lower, dear Lord, at Thy feet,",
        "Seeking Thy Spirit, Thy mercy so sweet;",
        "Down in our need, blessed Master, we fall,",
        "Lower and lower; be Thou all in all."
      ],
      [
        "Lower and lower, dear Savior, we pray,",
        "Losing the self-life still more every day;",
        "Weak and unworthy, we’re looking above:",
        "Empty us wholly; then fill us with love."
      ],
      [
        "Lower and lower; yet higher we rise",
        "Lifted in Christ, freed from all the earth ties:",
        "Humbly we follow the way of the cross.",
        "Then, crowns of glory, and gain for all loss.",
        ""
      ]
    ]
  },
  {
    "hymnNo": "255",
    "title": "Let The Fire Fall",
    "category": "holy spirit",
    "hymnChorus": [
      "Let the fire fall, let the fire fall,",
      "Let the fire from heaven fall;",
      "We are waiting and expecting,",
      "Now in faith, dear Lord, we call;",
      "Let the fire fall, let the fire fall,",
      "On Thy promise we depend;",
      "From the glory of Thy presence",
      "Let the Pentecostal fire descend."
    ],
    "hymnStanzards": [
      [
        "They were gathered in an upper chamber,",
        "As commanded by the risen Lord,",
        "And the promise of the Father",
        "There they sought with one accord,",
        "When the Holy Ghost from heaven descended",
        "Like a rushing wind and tongues of fire:",
        "So dear Lord, we seek Thy blessing,",
        "Come with glory now our hearts inspire."
      ],
      [
        "As Elijah we would raise the altar",
        "For our testimony clear and true,",
        "Christ the Saviour, loving Healer,",
        "Coming Lord, Baptizer too,",
        "Ever flowing grace and full salvation,",
        "For a ruined race Thy love has planned;",
        "For this blessed revelation,",
        "For Thy written Word we dare to stand."
      ],
      [
        "'Tis the covenanted promise given,",
        "To as many as the Lord shall call,",
        "To the Fathers and their children,",
        "To Thy people, one and all;",
        "So rejoicing in Thy Word unfailing,",
        "We draw nigh in faith Thy power to know;",
        "Come, O come Thou burning Spirit,",
        "Set our hearts with heav'nly fire aglow."
      ],
      [
        "With a living coal from off Thy altar",
        "Touch our lips to swell Thy wondrous praise,",
        "To extol Thee, bless, adore Thee,",
        "And our songs of worship raise;",
        "Let the cloud of glory now descending,",
        "Fill our hearts with holy ecstasy;",
        "Come in all Thy glorious fulness,",
        "Blessed Holy Spirit, have Thy way."
      ]
    ]
  },
  {
    "hymnNo": "256",
    "title": "Redeemed",
    "category": "grace & forgiveness",
    "hymnChorus": [
      "Redeemed, redeemed,",
      "Redeemed by the blood of the Lamb;",
      "Redeemed, redeemed,",
      "His child, and forever, I am."
    ],
    "hymnStanzards": [
      [
        "Redeemed—how I love to proclaim it!",
        "Redeemed by the blood of the Lamb;",
        "Redeemed through His infinite mercy,",
        "His child, and forever, I am."
      ],
      [
        "Redeemed and so happy in Jesus,",
        "No language my rapture can tell;",
        "I know that the light of His presence",
        "With me doth continually dwell."
      ],
      [
        "I think of my blessed Redeemer,",
        "I think of Him all the day long;",
        "I sing, for I cannot be silent;",
        "His love is the theme of my song."
      ],
      [
        "I know I shall see in His beauty",
        "The King in whose way I delight;",
        "Who lovingly guardeth my footsteps,",
        "And giveth me songs in the night."
      ]
    ]
  },
  {
    "hymnNo": "257",
    "title": "Jesus Send More Labourers",
    "category": "evangelism",
    "hymnChorus": [
      "Oh Lord, but start with me",
      "Jesus, begin with me",
      "Who will go for You, Lord?",
      "Who will go for You, Lord?",
      "Here I am, Lord Send me",
      "Send me, Lord Send me"
    ],
    "hymnStanzards": [
      [
        "Jesus, send more labourers",
        "For, Lord, we see the need",
        "The land is ready for harvest",
        "The fields are ripe indeed"
      ],
      [
        "Lord, we love our country",
        "Countless lives to be won",
        "Jesus, bring revival",
        "That through us Your will be done"
      ],
      [
        "Lord, we sense Your moving",
        "Touching our lives with power",
        "We are ready to serve You",
        "To go this day, this hour"
      ]
    ]
  },
  {
    "hymnNo": "258",
    "title": "Oh To Be Like Thee",
    "category": "prayer",
    "hymnChorus": [
      "Oh, to be like Thee, Oh! to be like Thee,",
      "Blessed Redeemer, pure as Thou art;",
      "Come in Thy sweetness, come in Thy fulness;",
      "Stamp Thine own image deep on my heart."
    ],
    "hymnStanzards": [
      [
        "Oh, to be like Thee, blessed Redeemer,",
        "This is my constant longing and prayer;",
        "Gladly I'll forfeit all of earth's treasures,",
        "Jesus, Thy perfect likeness to wear."
      ],
      [
        "O, to be like Thee, full of compassion,",
        "Loving, forgiving, tender and kind,",
        "Helping the helpless, cheering the fainting,",
        "Seeking the wand'ring sinner to find."
      ],
      [
        "Oh, to be like Thee, lowly in spirit,",
        "Holy and harmless, patient and brave;",
        "Meekly enduring cruel reproaches,",
        "Willing to suffer, others to save."
      ],
      [
        "Oh, to be like Thee, Lord, I am coming,",
        "Now to receive th' anointing divine,",
        "All that I am and have I am bringing,",
        "Lord, from this moment all shall be Thine."
      ],
      [
        "Oh, to be like Thee, while I am pleading,",
        "Pour out Thy Spirit, fill with Thy love,",
        "Make me a temple meet for Thy dwelling,",
        "Fit me for life and heaven above."
      ]
    ]
  },
  {
    "hymnNo": "259",
    "title": "More Like The Master",
    "category": "christian life",
    "hymnChorus": [
      "Take Thou my heart, I would be Thine alone;",
      "Take Thou my heart and make it all Thine own.",
      "Purge me from sin, O Lord, I now implore,",
      "Wash me and keep me Thine forevermore."
    ],
    "hymnStanzards": [
      [
        "More like the Master I would ever be,",
        "More of His meekness, more humility;",
        "More zeal to labor, more courage to be true,",
        "More consecration for work He bids me do. "
      ],
      [
        "More like the Master is my daily prayer;",
        "More strength to carry crosses I must bear;",
        "More earnest effort to bring His kingdom in,",
        "More of His Spirit, the wanderer to win."
      ],
      [
        "More like the Master I would live and grow;",
        "More of His love to others I would show;",
        "More self-denial, like His in Galilee,",
        "More like the Master I long to ever be."
      ]
    ]
  },
  {
    "hymnNo": "260",
    "title": "Gracious Spirit Dwell With Me",
    "category": "invitation",
    "hymnChorus": [],
    "hymnStanzards": [
      [
        "Gracious Spirit, dwell with me:",
        "I myself would gracious be;",
        "and with words that help and heal",
        "would thy life in mine reveal;",
        "and with actions bold and meek",
        "would for Christ my Savior speak."
      ],
      [
        "Mighty Spirit, dwell with me:",
        "I myself would mighty be;",
        "mighty so as to prevail",
        "where unaided man must fail;",
        "ever by a mighty hope",
        "pressing on and bearing up."
      ],
      [
        "Holy Spirit, dwell with me:",
        "I myself would holy be;",
        "separate from sin, I would",
        "choose and cherish all things good,",
        "and whatever I can be,",
        "give to him who gave me thee!"
      ]
    ]
  }
]