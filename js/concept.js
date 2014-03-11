var lines = [
  "'Sblood, there is something in this more than natural, if philosophy could find it out.",
  "'Tis gone!",
  "'Tis gone, and will not answer.",
  "'Tis in my memory lock'd, And you yourself shall keep the key of it.",
  "'Tis now struck twelve; get thee to bed, Francisco.",
  "'Tis strange.",
  "'Tis very strange.",
  "'Tis well: I'll have thee speak out the rest soon.",
  "'tis an unweeded garden, That grows to seed; things rank and gross in nature Possess it merely.",
  "2 'Tis here!",
  "2 My lord, I have news to tell you.",
  "A countenance more in sorrow than in anger.",
  "A double blessing is a double grace, Occasion smiles upon a second leave.",
  "A dream itself is but a shadow.",
  "A mote it is to trouble the mind's eye.",
  "A piece of him.",
  "A truant disposition, good my lord.",
  "A worthy pioner!",
  "Aboard, aboard, for shame!",
  "About, my brains!",
  "According to the phrase or the addition Of man and country.",
  "Adieu.",
  "Affection!",
  "Ah fie!",
  "Ah, Rosencrantz!",
  "Ah, ha, boy!",
  "Alas, poor ghost!",
  "All is not well; I doubt some foul play: would the night were come!",
  "Am I a coward?",
  "And all for nothing!",
  "And fix'd his eyes upon you?",
  "And hath given countenance to his speech, my lord, With almost all the holy vows of heaven.",
  "And let him ply his music.",
  "And liegemen to the Dane.",
  "And now, Laertes, what's the news with you?",
  "And now, good friends, As you are friends, scholars and soldiers, Give me one poor request.",
  "And shall I couple hell?",
  "And then it started like a guilty thing Upon a fearful summons.",
  "And then, sir, does he this--he does--what was I about to say?",
  "And therefore as a stranger give it welcome.",
  "And these few precepts in thy memory See thou character.",
  "And yet, to me, what is this quintessence of dust?",
  "Angels and ministers of grace defend us!",
  "Are they so followed?",
  "Arm'd, my lord.",
  "Arm'd, say you?",
  "Art thou there, truepenny?",
  "As gaming, my lord.",
  "As of a man faithful and honourable.",
  "As the indifferent children of the earth.",
  "Aside How say you by that?",
  "Aside Nay, then, I have an eye of you.--If you love me, hold not off.",
  "Aside Still on my daughter.",
  "Aside Though this be madness, yet there is method in 't.",
  "Aside to GUILDENSTERN What say you?",
  "Away, I do beseech you, both away: I'll board him presently.",
  "Ay, amen!",
  "Ay, by heaven, my lord.",
  "Ay, fashion you may call it; go to, go to.",
  "Ay, madam, it is common.",
  "Ay, my lord, I would know that.",
  "Ay, my lord.",
  "Ay, or drinking, fencing, swearing, quarrelling, Drabbing: you may go so far.",
  "Ay, sir; to be honest, as this world goes, is to be one man picked out of ten thousand.",
  "Ay, springes to catch woodcocks.",
  "Ay, that they do, my lord; Hercules and his load too.",
  "Ay, thou poor ghost, while memory holds a seat In this distracted globe.",
  "Ay, very well, my lord.",
  "Be ruled; you shall not go.",
  "Be thou familiar, but by no means vulgar.",
  "Be wary then; best safety lies in fear: Youth to itself rebels, though none else near.",
  "Before my God, I might not this believe Without the sensible and true avouch Of mine own eyes.",
  "Bernardo has my place.",
  "Bernardo!",
  "Bernardo?",
  "Between who?",
  "Beware Of entrance to a quarrel, but being in, Bear't that the opposed may beware of thee.",
  "Bleeding sword Now falls on Priam.",
  "Breaks my pate across?",
  "But how hath she Received his love?",
  "But let that go.",
  "But now, my cousin Hamlet, and my son,-- Aside A little more than kin, and less than kind.",
  "But what is your affair in Elsinore?",
  "But what, in faith, make you from Wittenberg?",
  "But where was this?",
  "But you'll be secret?",
  "But, in the beaten way of friendship, what make you at Elsinore?",
  "But, look, where sadly the poor wretch comes reading.",
  "But, my good lord,-- Wherefore should you do this?",
  "But, soft!",
  "Buz, buz!",
  "By heaven I charge thee, speak!",
  "By heaven, I'll make a ghost of him that lets me!",
  "By the mass, I was about to say something: where did I leave?",
  "By'r lady, your ladyship is nearer to heaven than when I saw you last, by the altitude of a chopine.",
  "Came this from Hamlet to her?",
  "Come away.",
  "Come on--you hear this fellow in the cellarage-- Consent to swear.",
  "Come, bird, come.",
  "Come, deal justly with me: come, come; nay, speak.",
  "Come, go with me: I will go seek the king.",
  "Come, sirs.",
  "Denmark's a prison.",
  "Did you not speak to it?",
  "Do not, my lord.",
  "Do the boys carry it away?",
  "Do they grow rusty?",
  "Do they hold the same estimation they did when I was in the city?",
  "Do you believe his tenders, as you call them?",
  "Do you consent we shall acquaint him with it, As needful in our loves, fitting our duty?",
  "Do you doubt that?",
  "Do you know me, my lord?",
  "Do you mark this, Reynaldo?",
  "Do you think 'tis this?",
  "Do, if it will not stand.",
  "Doors he went without their helps, And, to the last, bended their light on me.",
  "Dost thou hear me, old friend; can you play the Murder of Gonzago?",
  "Ear: for, lo!",
  "Even those you were wont to take delight in, the tragedians of the city.",
  "Excellent well; you are a fishmonger.",
  "Fare thee well at once!",
  "Fare you well, my lord.",
  "Farewell!",
  "Farewell, Ophelia; and remember well What I have said to you.",
  "Farewell, and let your haste commend your duty.",
  "Farewell.",
  "Farewell: my blessing season this in thee!",
  "Fie on't!",
  "Fie upon't!",
  "Fie!",
  "Foh!",
  "Follow him, friends: we'll hear a play to-morrow.",
  "Follow that lord; and look you mock him not.",
  "For God's love, let me hear.",
  "For Hecuba!",
  "For all, our thanks.",
  "For if the sun breed maggots in a dead dog, being a god kissing carrion,--Have you a daughter?",
  "For the law of writ and the liberty, these are the only men.",
  "For this relief much thanks: 'tis bitter cold, And I am sick at heart.",
  "For, by my fay, I cannot reason.",
  "Friend, look to 't.",
  "Friends to this ground.",
  "From top to toe?",
  "Gentlemen, you are welcome to Elsinore.",
  "Give every man thy ear, but few thy voice; Take each man's censure, but reserve thy judgment.",
  "Give first admittance to the ambassadors; My news shall be the fruit to that great feast.",
  "Give him this money and these notes, Reynaldo.",
  "Give me up the truth.",
  "Give thy thoughts no tongue, Nor any unproportioned thought his act.",
  "Give you good night.",
  "Go on; I'll follow thee.",
  "Go, some of you, And bring these gentlemen where Hamlet is.",
  "God!",
  "God's bodykins, man, much better: use every man after his desert, and who should 'scape whipping?",
  "Good Hamlet, cast thy nighted colour off, And let thine eye look like a friend on Denmark.",
  "Good even, sir.",
  "Good lads, how do ye both?",
  "Good madam, stay awhile; I will be faithful.",
  "Good my lord!",
  "Good my lord, tell it.",
  "Good my lord, will you see the players well bestowed?",
  "Hail to your lordship!",
  "Hamlet, remember me.",
  "Happily he's the second time come to them; for they say an old man is twice a child.",
  "Happy, in that we are not over-happy; On fortune's cap we are not the very button.",
  "Have I, my lord?",
  "Have after.",
  "Have you had quiet guard?",
  "Have you your father's leave?",
  "He hath, my lord, of late made many tenders Of his affection to me.",
  "He tells me, my dear Gertrude, he hath found The head and source of all your son's distemper.",
  "He was a man, take him for all in all, I shall not look upon his like again.",
  "He waxes desperate with imagination.",
  "He.",
  "Heaven and earth!",
  "Heaven will direct it.",
  "Heavens make our presence and our practises Pleasant and helpful to him!",
  "Hic et ubique?",
  "Hillo, ho, ho, boy!",
  "Hillo, ho, ho, my lord!",
  "His beard was grizzled--no?",
  "Hold off your hands.",
  "Hold you the watch to-night?",
  "Hold, hold, my heart; And you, my sinews, grow not instant old, But bear me stiffly up.",
  "Holla!",
  "Honest, my lord!",
  "How are they escoted?",
  "How chances it they travel?",
  "How comes it?",
  "How dost thou, Guildenstern?",
  "How infinite in faculty!",
  "How is it that the clouds still hang on you?",
  "How is't, my noble lord?",
  "How may we try it further?",
  "How noble in reason!",
  "How now, Horatio!",
  "How now, Ophelia!",
  "How pregnant sometimes his replies are!",
  "How say you, then; would heart of man once think it?",
  "How weary, stale, flat and unprofitable, Seem to me all the uses of this world!",
  "I am but mad north-north-west: when the wind is southerly I know a hawk from a handsaw.",
  "I am glad to see thee well.",
  "I am glad to see you well: Horatio,--or I do forget myself.",
  "I am sorry.",
  "I charge thee, speak!",
  "I do not know, my lord, what I should think.",
  "I doubt it is no other but the main; His father's death, and our o'erhasty marriage.",
  "I have seen nothing.",
  "I have sworn 't.",
  "I have, my lord.",
  "I heard it not: then it draws near the season Wherein the spirit held his wont to walk.",
  "I mean, the matter that you read, my lord.",
  "I pray thee, do not mock me, fellow-student; I think it was to see my mother's wedding.",
  "I saw him once; he was a goodly king.",
  "I say, away!",
  "I shall in all my best obey you, madam.",
  "I shall obey, my lord.",
  "I shall the effect of this good lesson keep, As watchman to my heart.",
  "I shall, my lord.",
  "I stay too long: but here my father comes.",
  "I think I hear them.",
  "I think it lacks of twelve.",
  "I think their inhibition comes by the means of the late innovation.",
  "I warrant it will.",
  "I will prophesy he comes to tell me of the players; mark it.",
  "I will watch to-night; Perchance 'twill walk again.",
  "I will, my lord.",
  "I will.",
  "I would I had been there.",
  "I would fain prove so.",
  "I'll cross it, though it blast me.",
  "I'll speak to him again.",
  "I'm sorry they offend you, heartily; Yes, 'faith heartily.",
  "If it be, Why seems it so particular with thee?",
  "If thou didst ever thy dear father love-- O God!",
  "If you call me Jephthah, my lord, I have a daughter that I love passing well.",
  "If you do meet Horatio and Marcellus, The rivals of my watch, bid them make haste.",
  "In action how like an angel!",
  "In apprehension how like a god!",
  "In faith, My lord, not I.",
  "In form and moving how express and admirable!",
  "In my mind's eye, Horatio.",
  "In that and all things will we show our duty.",
  "In the same figure, like the king that's dead.",
  "In the secret parts of fortune?",
  "In what, my dear lord?",
  "Indeed, indeed, sirs, but this troubles me.",
  "Indeed, my lord, it follow'd hard upon.",
  "Indeed, upon my sword, indeed.",
  "Indeed?",
  "Into my grave.",
  "Is a vile phrase: but you shall hear.",
  "Is good.",
  "Is it a custom?",
  "Is it a free visitation?",
  "Is it not like the king?!",
  "Is it your own inclining?",
  "Is't possible?",
  "It beckons you to go away with it, As if it some impartment did desire To you alone.",
  "It faded on the crowing of the cock.",
  "It is a nipping and an eager air.",
  "It is not nor it cannot come to good: But break, my heart; for I must hold my tongue.",
  "It is offended.",
  "It likes us well; And at our more consider'd time we'll read, Answer, and think upon this business.",
  "It may be, very likely.",
  "It shall to the barber's, with your beard.",
  "It was about to speak, when the cock crew.",
  "It was, as I have seen it in his life, A sable silver'd.",
  "It waves me forth again: I'll follow it.",
  "It waves me still.",
  "It will not speak; then I will follow it.",
  "It would be spoke to.",
  "It would have much amazed you.",
  "Let not thy mother lose her prayers, Hamlet: I pray thee, stay with us; go not to Wittenberg.",
  "Let us go in together; And still your fingers on your lips, I pray.",
  "Let's do't, I pray; and I this morning know Where we shall find him most conveniently.",
  "Let's follow; 'tis not fit thus to obey him.",
  "List, list, O, list!",
  "Lo, where it comes again!",
  "Long live the king!",
  "Longer, longer.",
  "Look to't, I charge you: come your ways.",
  "Look, my lord, it comes!",
  "Look, whether he has not turned his colour and has tears in's eyes.",
  "Look, with what courteous action It waves you to a more removed ground: But do not go with it.",
  "Looks it not like the king?",
  "Mad for thy love?",
  "Madam, I swear I use no art at all.",
  "Man delights not me: no, nor woman neither, though by your smiling you seem to say so.",
  "Marcellus?",
  "Mark it, Horatio.",
  "Mark me.",
  "Marry, well said; very well said.",
  "Masters, you are all welcome.",
  "Methinks I scent the morning air; Brief let me be.",
  "Monday morning; 'twas so indeed.",
  "More matter, with less art.",
  "Most constantly.",
  "Most fair return of greetings and desires.",
  "Most horrible!",
  "Most humbly do I take my leave, my lord.",
  "Most like: it harrows me with fear and wonder.",
  "Murder most foul, as in the best it is; But this most foul, strange and unnatural.",
  "Murder!",
  "Must I remember?",
  "My excellent good friends!",
  "My fate cries out, And makes each petty artery in this body As hardy as the Nemean lion's nerve.",
  "My father!--methinks I see my father.",
  "My father's spirit in arms!",
  "My good friends, I'll leave you till night: you are welcome to Elsinore.",
  "My good lord-- I am very glad to see you.",
  "My honoured lord!",
  "My hour is almost come, When I to sulphurous and tormenting flames Must render up myself.",
  "My lord, I came to see your father's funeral.",
  "My lord, I did intend it.",
  "My lord, I do not know; But truly, I do fear it.",
  "My lord, I have.",
  "My lord, I think I saw him yesternight.",
  "My lord, I will use them according to their desert.",
  "My lord, from head to foot.",
  "My lord, he hath importuned me with love In honourable fashion.",
  "My lord, my lord,-- Lord Hamlet,-- Heaven secure him!",
  "My lord, that would dishonour him.",
  "My lord, the king your father.",
  "My lord, there was no such stuff in my thoughts.",
  "My lord, upon the platform where we watch'd.",
  "My lord, we were sent for.",
  "My lord, we will not.",
  "My most dear lord!",
  "My uncle!",
  "Nay, answer me: stand, and unfold yourself.",
  "Nay, but swear't.",
  "Nay, come, let's go together.",
  "Nay, let's follow him.",
  "Nay, that follows not.",
  "Nay, very pale.",
  "Neither, my lord.",
  "Never make known what you have seen to-night.",
  "Never to speak of this that you have seen, Swear by my sword.",
  "No more but so?",
  "No, by no means.",
  "No, indeed, are they not.",
  "No, it is struck.",
  "No, my good lord, but, as you did command, I did repel his letters and denied His access to me.",
  "No; you'll reveal it.",
  "None, my lord, but that the world's grown honest.",
  "Nor I, my lord, in faith.",
  "Nor I, my lord.",
  "Nor the soles of her shoe?",
  "Not I, my lord, by heaven.",
  "Not I, my lord.",
  "Not a mouse stirring.",
  "Not that I know.",
  "Not when I saw't.",
  "Now to my word; It is 'Adieu, adieu!",
  "O God!",
  "O Jephthah, judge of Israel, what a treasure hadst thou!",
  "O all you host of heaven!",
  "O day and night, but this is wondrous strange!",
  "O earth!",
  "O most pernicious woman!",
  "O my prophetic soul!",
  "O villain, villain, smiling, damned villain!",
  "O, farewell, honest soldier: Who hath relieved you?",
  "O, fear me not.",
  "O, fie!",
  "O, give me leave: How does my good Lord Hamlet?",
  "O, horrible!",
  "O, most true; she is a strumpet.",
  "O, most wicked speed, to post With such dexterity to incestuous sheets!",
  "O, my lord, my lord, I have been so affrighted!",
  "O, my old friend!",
  "O, speak of that; that do I long to hear.",
  "O, that this too too sullied flesh would melt Thaw and resolve itself into a dew!",
  "O, there has been much throwing about of brains.",
  "O, vengeance!",
  "O, what a rogue and peasant slave am I!",
  "O, wonderful!",
  "O, yes, my lord; he wore his beaver up.",
  "Observe his inclination in yourself.",
  "Once more remove, good friends.",
  "Or that the Everlasting had not fix'd His canon 'gainst self-slaughter!",
  "Our duty to your honour.",
  "Out, out, thou strumpet, Fortune!",
  "Pale or red?",
  "Perpend.",
  "Pity me not, but lend thy serious hearing To what I shall unfold.",
  "Plucks off my beard, and blows it in my face?",
  "Pooh!",
  "Pray God, your voice, like a piece of uncurrent gold, be not cracked within the ring.",
  "Pray you, no more.",
  "Prison, my lord!",
  "Prithee, say on: he's for a jig or a tale of bawdry, or he sleeps: say on: come to Hecuba.",
  "Propose the oath, my lord.",
  "Question it, Horatio.",
  "Remember thee!",
  "Remorseless, treacherous, lecherous, kindless villain!",
  "Rest, rest, perturbed spirit!",
  "Revenge his foul and most unnatural murder.",
  "Saw?",
  "Say'st thou so?",
  "Say, Voltimand, what from our brother Norway?",
  "Say, What, is Horatio there?",
  "Say, why is this?",
  "See, it stalks away!",
  "Seems, madam!",
  "Shadows.",
  "Shall I strike at it with my partisan?",
  "Shall we to the court?",
  "Sir, my good friend; I'll change that name with you: And what make you from Wittenberg, Horatio?",
  "So art thou to revenge, when thou shalt hear.",
  "So be it!",
  "So have I heard and do in part believe it.",
  "So he does indeed.",
  "So much for him.",
  "So please you, something touching the Lord Hamlet.",
  "So, fare you well: Upon the platform, 'twixt eleven and twelve, I'll visit you.",
  "So, proceed you.",
  "Something is rotten in the state of Denmark.",
  "Speak, speak!",
  "Speak; I am bound to hear.",
  "Speak; I'll go no further.",
  "Stand, ho!",
  "Stay!",
  "Stay'd it long?",
  "Stay, illusion!",
  "Still am I call'd.",
  "Stop it, Marcellus.",
  "Swear.",
  "Take them in.",
  "Take thy fair hour, Laertes; time be thine, And thy best graces spend it at thy will!",
  "Thanks, Rosencrantz and gentle Guildenstern.",
  "That can I; At least, the whisper goes so.",
  "That hath made him mad.",
  "That it should come to this!",
  "That you must teach me.",
  "That's very true, my lord.",
  "The air bites shrewdly; it is very cold.",
  "The air.",
  "The ambassadors from Norway, my good lord, Are joyfully return'd.",
  "The beauty of the world!",
  "The earth so fast?",
  "The funeral baked meats Did coldly furnish forth the marriage tables.",
  "The glow-worm shows the matin to be near, And 'gins to pale his uneffectual fire: Adieu, adieu!",
  "The king my father!",
  "The name of God?",
  "The paragon of animals!",
  "The right, old Jephthah?",
  "The same, my lord, and your poor servant ever.",
  "The sere; and the lady shall say her mind freely, or the blank verse shall halt for't.",
  "The sun.",
  "The sun: conception is a blessing: but not as your daughter may conceive.",
  "The throat, As deep as to the lungs?",
  "The time invites you; go; your servants tend.",
  "The time is out of joint: O cursed spite, That ever I was born to set it right!",
  "The wind sits in the shoulder of your sail, And you are stay'd for.",
  "The worst.",
  "Their residence, both in reputation and profit, was better both ways.",
  "Then I would you were so honest a man.",
  "Then is doomsday near: but your news is not true.",
  "Then is the world one.",
  "Then saw you not his face?",
  "Then we'll shift our ground.",
  "Then you live about her waist, or in the middle of her favours?",
  "There are more things in heaven and earth, Horatio, Than are dreamt of in your philosophy.",
  "There are the players.",
  "There needs no ghost, my lord, come from the grave To tell us this.",
  "There's ne'er a villain dwelling in all Denmark But he's an arrant knave.",
  "There's no offence, my lord.",
  "There; my blessing with thee!",
  "These are but wild and whirling words, my lord.",
  "These tedious old fools!",
  "This business is well ended.",
  "This is too long.",
  "Thou art a scholar; speak to it, Horatio.",
  "Thou still hast been the father of good news.",
  "Thrift, thrift, Horatio!",
  "Thus twice before, and jump at this dead hour, With martial stalk hath he gone by our watch.",
  "Thy face is valenced since I saw thee last: comest thou to beard me in Denmark?",
  "Thyself do grace to them, and bring them in.",
  "To POLONIUS God save you, sir!",
  "To visit you, my lord; no other occasion.",
  "To what end, my lord?",
  "To what issue will this come?",
  "Truly, and I hold ambition of so airy and light a quality that it is but a shadow's shadow.",
  "Tush, tush, 'twill not appear.",
  "Tweaks me by the nose?",
  "Unhand me, gentlemen.",
  "Upon my sword.",
  "Use them after your own honour and dignity: the less they deserve, the more merit is in your bounty.",
  "Very good, my lord.",
  "Very like, very like.",
  "Very well.",
  "Videlicet, a brothel, or so forth.",
  "We do, my lord.",
  "We doubt it nothing: heartily farewell.",
  "We have sworn, my lord, already.",
  "We think not so, my lord.",
  "We will try it.",
  "We will.",
  "We'll ha't to-morrow night.",
  "We'll teach you to drink deep ere you depart.",
  "We'll wait upon you.",
  "Welcome, Horatio: welcome, good Marcellus.",
  "Welcome, dear Rosencrantz and Guildenstern!",
  "Welcome, good friends.",
  "Welcome, my good friends!",
  "Well be with you, gentlemen!",
  "Well said, old mole!",
  "Well, God-a-mercy.",
  "Well, good night.",
  "Well, my lord.",
  "Well, sit we down, And let us hear Bernardo speak of this.",
  "Well, we shall sift him.",
  "Were you not sent for?",
  "What a piece of work is a man!",
  "What a treasure had he, my lord?",
  "What do you read, my lord?",
  "What do you think of me?",
  "What does this mean, my lord?",
  "What else?",
  "What follows, then, my lord?",
  "What hour now?",
  "What is between you?",
  "What is the matter, my lord?",
  "What is't, Ophelia, he hath said to you?",
  "What is't, my lord?",
  "What news, my lord?",
  "What players are they?",
  "What said he?",
  "What says Polonius?",
  "What should we do?",
  "What should we say, my lord?",
  "What speech, my lord?",
  "What think you on't?",
  "What would he do, Had he the motive and the cue for passion That I have?",
  "What wouldst thou have, Laertes?",
  "What's Hecuba to him, or he to Hecuba, That he should weep for her?",
  "What's the matter?",
  "What's the news?",
  "What, are they children?",
  "What, has this thing appear'd again to-night?",
  "What, have you given him any hard words of late?",
  "What, look'd he frowningly?",
  "What, my young lady and mistress!",
  "What?",
  "When Roscius was an actor in Rome,-- The actors are come hither, my lord.",
  "When it proved otherwise?",
  "Where wilt thou lead me?",
  "Where, my lord?",
  "Wherefore?",
  "While one with moderate haste might tell a hundred.",
  "Who calls me villain?",
  "Who does me this?",
  "Who maintains 'em?",
  "Who's there?!",
  "Who's there?",
  "Who?",
  "Why did you laugh then, when I said 'man delights not me'?",
  "Why then, your ambition makes it one; 'tis too narrow for your mind.",
  "Why, 'tis a loving and a fair reply: Be as ourself in Denmark.",
  "Why, any thing, but to the purpose.",
  "Why, what an ass am I!",
  "Why, what should be the fear?",
  "Will they pursue the quality no longer than they can sing?",
  "Will you walk out of the air, my lord?",
  "Words, words, words.",
  "Would I had met my dearest foe in heaven Or ever I had seen that day, Horatio!",
  "Ye; Now I am alone.",
  "Yes, by Saint Patrick, but there is, Horatio, And much offence too.",
  "Yet here, Laertes!",
  "You are welcome, masters; welcome, all.",
  "You are welcome: but my uncle-father and aunt-mother are deceived.",
  "You come most carefully upon your hour.",
  "You go to seek the Lord Hamlet; there he is.",
  "You have me, have you not?",
  "You know, sometimes he walks four hours together Here in the lobby.",
  "You shall not go, my lord.",
  "You speak like a green girl, Unsifted in such perilous circumstance.",
  "You told us of some suit; what is't, Laertes?",
  "You tremble and look pale: Is not this something more than fantasy?",
  "You; fare you well.",
  "Your loves, as mine to you: farewell."
];

$('.title-wrapper').each(function(index) {
  var titleWidth = $(this).children('.post-title').children('.post-title-inner').width();
  console.log(titleWidth);
  var possible = [];
  lines.forEach(function(line) {
    if (Math.abs(line.length - titleWidth / 15) <= 1) possible.push(line);
  })
  $(this).children('.concept').text(possible[Math.floor(Math.random() * possible.length)]);
});
