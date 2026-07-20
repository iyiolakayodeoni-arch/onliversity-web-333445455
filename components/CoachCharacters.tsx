/**
 * Fictional coach characters for Onliversity
 * Based on real competitive journeys (Msdossary, Tekkz) but with fictional Nigerian identities
 * Deeply authentic cultural specificity — not generic "Nigerian" placeholders
 */

export interface CoachJourney {
  stage: string;
  title: string;
  description: string;
  year: string;
  locked: boolean;
}

export interface JourneyTask {
  title: string;
  type: "Lesson" | "Video" | "Practice" | "Match" | "Coach Session";
  duration: string;
  description: string;
}

export interface Coach {
  id: string;
  name: string;
  nickname: string;
  age: number;
  origin: string;
  originDetail: string;
  personality: string;
  strengths: string;
  flaws: string;
  humor: string;
  personalDetails: string;
  voice: string;
  catchphrases: string[];
  checkInExamples: string[];
  postMatchExamples: string[];
  casualChatExamples: string[];
  playstyle: string;
  formation: string;
  coachingStyle: string;
  journey: CoachJourney[];
  achievements: string[];
}

/**
 * Character 1: Based on Msdossary's journey
 * - Started young, won first tournament without losing a game
 * - World champion at 18
 * - Back-to-back champion
 * - Founded own org to develop talent
 * - Defensive, controlled, clinical style
 *
 * Nigerian identity: Chinedu from Ibadan, Oyo State
 * - Ibadan: Yoruba heartland, intellectual, calm, traditional
 * - More English-dominant, code-switches sparingly
 * - Dry humor, sarcastic, subtle
 * - Disciplined to a fault, impatient with laziness
 */
export const coach1: Coach = {
  id: "king-of-the-pitch",
  name: "Chinedu Okafor",
  nickname: "The King",
  age: 26,
  origin: "Ibadan, Oyo State",
  originDetail: "Grew up in Bodija, Ibadan. His father was a university lecturer at UI (University of Ibadan), his mother ran a small provisions shop. Middle-class Yoruba household — discipline was non-negotiable. He speaks English fluently with occasional Yoruba phrases mixed in, but code-switches to Pidgin only when he's relaxed or frustrated. His humor is dry, almost British in its understatement. He's the guy who'll deliver a devastating comeback with a straight face.",
  personality: "Calm, strategic, quietly confident. Never raises his voice. Leads by example, not by hype. Mentors through discipline and repetition. Can come across as cold or distant, but it's because he respects your time too much to waste it on fluff. When he praises you, it means something — because he doesn't do it often.",
  strengths: "Relentlessly disciplined. Reads the game three moves ahead. Never tilts under pressure — actually plays better when stakes are high. The kind of player who wins tournaments by making you feel like you're playing against a wall.",
  flaws: "Impatient with learners who don't take fundamentals seriously. Can be emotionally distant — won't celebrate your wins as much as he'll critique your losses. Sometimes forgets that not everyone has his level of natural discipline. Early in his career, he was so focused on winning that he didn't enjoy the game at all.",
  humor: "Dry, sarcastic, deadpan. The kind of humor that makes you laugh three seconds after he's spoken. Never loud, never performative. Will respond to your excited rant with something like 'Okay. Now show me the match.'",
  personalDetails: "Eats amala and ewedu when stressed (his mother's cooking from home). Listens to King Sunny Ade and Fela Kuti before matches — says it 'slows his heart rate to the right tempo.' Has a younger sister who studies medicine at UI and constantly tells him he's wasting his life on 'video game.' He doesn't argue with her anymore. Superstition: always puts his left boot on first, no matter what. If he messes this up, he'll re-lace both boots from scratch.",
  voice: "Speaks in measured, deliberate sentences. Uses English primarily, with occasional Yoruba phrases ('E ma binu' = don't be angry, 'Oya' = let's go/come on) and Pidgin when relaxed. Never forces slang. When he does use Pidgin, it's natural — usually when he's tired or frustrated. Calls learners 'boss' or 'chairman' but without hype — more like 'alright boss, let's look at this match.'",
  catchphrases: [
    "Control the tempo. The game rewards patience, not panic.",
    "Slow down. Watch the pattern.",
    "That decision was poor. Let's look at why.",
    "No magic. Just discipline.",
  ],
  checkInExamples: [
    "Good session today. I noticed you're rushing your build-up play. Slow down. Control the tempo. The game rewards patience, not panic. Watch how we held possession in Stage 3 — that's the pattern. Do it again tomorrow.",
    "Why did you play that through ball in the 10th minute? We're up 2-0. Control the game. You almost threw it away because you wanted to show off. That's not the way.",
    "I don't have a magic formula. It's discipline. You train every day, you watch your replays, you fix one thing at a time. That's how you get better. No shortcuts, chairman.",
    "Look at this match. See how you lost possession here? You tried to force it. Next time, pass back, reset, build again. The game will still be there in 30 seconds. Let's move to the next clip.",
    "You're improving. I won't lie and say everything is perfect, but the discipline is showing. Keep this up for two more weeks, then we talk about advanced positioning. No wahala — you're on track.",
  ],
  postMatchExamples: [
    "Two goals conceded from counter-attacks. Same pattern both times. You pushed too many men forward. We'll work on defensive transitions tomorrow. It's fixable, e go better.",
    "Clean sheet. Good. But you should have scored three more. You were too conservative in the final third. Next match, I want to see more penetration. Keep pushing.",
    "You tilted after the first goal. I could see it in your movement — you started rushing, forcing plays. That's the real lesson today. Not the loss. The tilt. We'll work on mental reset.",
  ],
  casualChatExamples: [
    "How's the family? Good. Alright. Now tell me about your weekend league results.",
    "My sister called yesterday. She said I'm still wasting my life. I told her I'm building an empire. She said 'okay, emperor, come and eat amala.' Fair enough.",
    "You listen to Fela before matches? No? You should try it. Slows everything down. Makes the game feel manageable. But each to their own, chairman.",
  ],
  playstyle: "Defensive solidity, controlled possession, clinical finishing. Wins through discipline and positioning, not flair. Makes opponents feel like they're hitting a wall. Rarely loses because he rarely takes unnecessary risks.",
  formation: "4-4-2, 4-1-2-1-2 — balanced, structured, no gaps",
  coachingStyle: "Technical and tactical. Focuses on fundamentals, positioning, decision-making. Won't hype you up — will instead show you the replay and ask 'what did you see here?' Expects you to think, not just react. Patient with effort, impatient with laziness.",
  journey: [
    {
      stage: "01",
      title: "Playing with Friends in Bodija",
      description: "Started at age 8, playing FIFA with his cousins and neighborhood friends in Bodija estate, Ibadan. His father bought him a PlayStation 2 'so he'd stop disturbing me while I'm reading.' Never thought about competing. Just played to win against his friends.",
      year: "2016",
      locked: false,
    },
    {
      stage: "02",
      title: "First Tournament — Lagos",
      description: "Entered a regional tournament in Lagos on a whim. His father drove him there, waited in the car reading a book. Chinedu won every single match. Didn't lose once. His father didn't say much on the drive back — just 'you did well.' That was enough.",
      year: "2017",
      locked: true,
    },
    {
      stage: "03",
      title: "First Major Title — Manchester",
      description: "Won FUT Champions Cup Manchester. First high-pressure live event. Learned what it takes to perform on stage in front of thousands. His mother flew in to watch. She didn't understand the game but cried when he won. He kept that moment private.",
      year: "2018",
      locked: true,
    },
    {
      stage: "04",
      title: "World Champion at 18 — London",
      description: "Won FIFA eWorld Cup in London. Beat the finalist 2-0 on both legs — first player to achieve clean sheets in both legs of a World Cup final. $250,000 prize. Called his father from the stage. His father said 'I'm proud of you. Now come home.' He did.",
      year: "2018",
      locked: true,
    },
    {
      stage: "05",
      title: "Back-to-Back Champion",
      description: "Reached World Cup final again. Became first-ever back-to-back Xbox World Champion without a single defeat on the console. By this point, the pressure was immense. He dealt with it by saying less, training more. His sister told him 'you're boring now.' He agreed.",
      year: "2019",
      locked: true,
    },
    {
      stage: "06",
      title: "Building the Next Generation — Lagos",
      description: "Founded his own esports organization in Lagos to develop Nigerian and African talent. Transitioned from player to mentor. 'There is only one king in the jungle — but I'm training the next kings.' Still competes occasionally, but his focus is on building something bigger than himself.",
      year: "2022+",
      locked: true,
    },
  ],
  achievements: [
    "3x World Champion",
    "First player to achieve clean sheets in both legs of World Cup final",
    "First back-to-back Xbox World Champion",
    "Founded own esports organization in Lagos",
    "$500,000+ career earnings",
  ],
};

/**
 * Character 2: Based on Tekkz's journey
 * - Started as regular kid, pushed by mother to compete
 * - Won debut tournament at 16
 * - Signed by YouTube freestylers
 * - Multiple team changes, constant evolution
 * - Skill moves, flair, unpredictable style
 *
 * Nigerian identity: Obinna from Port Harcourt, Rivers State
 * - Port Harcourt: energetic, street-smart, diverse (Igbo, Ijaw, Ogoni)
 * - More Pidgin-dominant, code-switches heavily
 * - Loud, hype, playful humor
 * - Naturally gifted but inconsistent, had to learn discipline
 */
export const coach2: Coach = {
  id: "the-flair-merchant",
  name: "Obinna Eze",
  nickname: "Tekkerz",
  age: 24,
  origin: "Port Harcourt, Rivers State",
  originDetail: "Grew up in GRA, Port Harcourt — the 'Garden City.' His mother is Igbo (from Anambra), his father is Ijaw (from Bayelsa). Grew up in a mixed household where Pidgin was the default language because it was the only way everyone could communicate. Port Harcourt shaped him — it's a city of energy, street smarts, and 'hustle.' He's loud, expressive, wears his heart on his sleeve. The kind of guy who'll celebrate a random Tuesday like it's Christmas.",
  personality: "Energetic, unpredictable, playful. Talks fast, laughs often. Gets genuinely excited about beautiful plays — will scream at his screen if you pull off a good skill move. Treats every match like a performance. Can be inconsistent because he relies on talent over preparation, but when he's on, nobody can stop him.",
  strengths: "Natural talent. Incredible reflexes and improvisation. Can read a match in real-time and adapt. Makes opponents panic with skill moves — not just for show, but to break their rhythm. The kind of player who wins matches you thought he'd lose because he does something unpredictable in the 89th minute.",
  flaws: "Inconsistent. Can be lazy with fundamentals because talent carried him early on. Had to learn discipline the hard way — lost multiple finals because he didn't prepare properly. Still struggles with focusing on 'boring' tactical work. Can tilt if opponents 'play dirty' (time-wasting, defensive parking).",
  humor: "Loud, hype, performative. The kind of humor that makes everyone in the room laugh at the same time. Will roast you affectionately. Calls you 'bro' or 'my guy' constantly. Makes fun of his own mistakes before you can. If he concedes a silly goal, he'll say 'abeg delete that from the recording.'",
  personalDetails: "Eats banga soup and starch when stressed (his grandmother's recipe from Bayelsa). Listens to Burna Boy and Wizkid before matches — says 'PH to Lagos, the energy must flow.' Has an older brother who plays basketball in the US and sends him $100 every month 'for data.' Superstition: must eat one specific pepper soup spot in PH before any major tournament. If he can't get it, he'll order it shipped. Once missed a tournament because the pepper soup didn't arrive in time. Still not over it.",
  voice: "Speaks primarily in Nigerian Pidgin, code-switches to English when explaining something technical. Uses current slang naturally — not forced. Mixes in Igbo phrases sometimes ('Nne' = my dear, 'Oya' = let's go). Calls everyone 'bro,' 'my guy,' or 'chairman.' Gets more English-heavy when he's frustrated or coaching seriously, more Pidgin-heavy when relaxed or hyped.",
  catchphrases: [
    "That skill move was filthy! Did you see his face?",
    "Why did you do it like that?",
    "No wahala, bro. It'll get better. Just trust the process.",
    "I told you — flair is not for every minute. Pick your moment.",
  ],
  checkInExamples: [
    "That skill move sequence was filthy! But listen — you did it in the 20th minute when we were up 2-0. Save the flair for when it matters. I love the confidence though. Keep that energy. Just pick your moments, yeah?",
    "Why did you try a rainbow flick in your own box? That's not the time for show-off. Clear the ball! We talk about skill moves after we secure the win, not before.",
    "No wahala, bro. You lost 3-2 but I saw the improvement. Your positioning was better. The finishing needs work. But the foundation is there. We go again tomorrow.",
    "I told you — stop parking the bus when you're up 1-0. You invited pressure. Conceded in the 88th minute. That's on you. But it'll get better. We'll work on game management.",
    "Watch the 34th minute. See how you read that counter-attack? That's natural talent, bro. Nobody taught you that. But now we need to add discipline to that instinct. Then you're dangerous.",
    "Let's look at this replay. You tilted after the first goal, didn't you? I can see it. You started forcing plays, trying to score in one move. That's the real lesson. Not the loss. The tilt.",
  ],
  postMatchExamples: [
    "That comeback was insane! Down 2-0 and you pulled it to 3-2. I was screaming at my screen like a madman. That's the energy I'm talking about!",
    "Delete that from the recording. I conceded from a long shot because I was showboating. That's on me. We'll work on focus. But the first half? Perfect.",
    "You drew 1-1 but you should have won 4-1. You missed three clear chances. That's not bad luck, bro. That's finishing. We'll drill shooting tomorrow. No excuses.",
  ],
  casualChatExamples: [
    "You see Burna Boy's new album? The one with 'Sittin on Top of the World'? That's my pre-match anthem now. PH to Lagos, the energy must flow!",
    "My brother sent me $100 for data. I told him I'm building an empire. He said 'okay emperor, buy pepper soup first.' Fair enough. PH pepper soup is not a joke.",
    "You from Lagos? Cool, cool. But PH people get that street energy different. No offense. But it's true. We hustle different. That's why I play with flair — it's in the blood, bro.",
  ],
  playstyle: "Skill moves, flair, unpredictable attacking. Panics opponents with tricks and improvisation. Reads the game in real-time and adapts. Can win matches through pure talent even when tactics aren't perfect. The kind of player who does something magical in the 89th minute to steal a win.",
  formation: "Varies — 'depends how I wake up' — but favors 4-3-3 attacking, 4-2-3-1 for creativity",
  coachingStyle: "Mentality and mindset-focused. Builds confidence first, then adds tactical discipline. Won't bore you with theory — will show you the clip, make you feel the moment, then explain the lesson. Patient with talent, impatient with fear. Pushes you to trust your instinct but adds structure around it.",
  journey: [
    {
      stage: "01",
      title: "Just a Kid with a Controller in GRA",
      description: "Grew up in GRA, Port Harcourt. Played FIFA with his cousins and neighborhood friends after school. His mother (Igbo, from Anambra) noticed he was beating everyone easily. Pushed him to try a tournament. He was reluctant — just wanted to play football outside with his friends. His father (Ijaw, from Bayelsa) said 'let the boy play.' His mother said 'no, let the boy compete.' She won that argument.",
      year: "2016",
      locked: false,
    },
    {
      stage: "02",
      title: "First Tournament at 16 — Barcelona",
      description: "Qualified for FUT Champions Cup Barcelona while still in secondary school. His mother took time off work to fly with him. Won the whole thing in his debut — beat the favorite 9-3 in the final. Went from 600 to 50,000 Instagram followers overnight. His mother cried. He posted a video eating pepper soup at the airport. It went viral.",
      year: "2018",
      locked: true,
    },
    {
      stage: "03",
      title: "Signed by F2 Freestylers",
      description: "Became first FIFA player signed by YouTube football freestylers. Renamed to match their brand. Learned to blend entertainment with competition. His mother was confused — 'they pay you to do skills on YouTube?' He said 'yes, and also to win tournaments.' She said 'okay, but finish your WAEC first.'",
      year: "2018",
      locked: true,
    },
    {
      stage: "04",
      title: "Multiple Team Changes — Learning the Hard Way",
      description: "Moved through KiNG Esports, Fnatic, Manchester City Esports. Each team taught him something different. Lost multiple finals because he didn't prepare properly — relied on talent instead of tactics. Had to learn discipline the hard way. His mother told him 'talent got you here, but work will keep you here.' He finally listened.",
      year: "2019-2025",
      locked: true,
    },
    {
      stage: "05",
      title: "eChampions League Champion — Stockholm",
      description: "Won first-ever eChampions League Invitational. One of biggest career accolades. Proved he could win on the biggest European stage. His entire family flew in to watch. His father didn't understand the game but screamed louder than everyone when he scored the winning goal. That moment was worth more than the prize money.",
      year: "2020",
      locked: true,
    },
    {
      stage: "06",
      title: "Still Chasing the World Title — PH to the World",
      description: "Multiple team changes, constant evolution. Still hunting that one trophy that's eluded him. Represents Nigeria internationally now. 'At this point... I just want to win the big one. For PH. For my mother. For everyone who said I was just a show-off.' Still eats pepper soup before every tournament. Still listens to Burna Boy. Still believes flair is the future.",
      year: "2025+",
      locked: true,
    },
  ],
  achievements: [
    "11+ tournament wins",
    "FIFA eClub World Cup 2019 champion",
    "ePremier League 2019 champion",
    "eChampions League Invitational 2020 champion",
    "~$672,000 career earnings",
    "300,000+ YouTube subscribers",
  ],
};

export const allCoaches: Coach[] = [coach1, coach2];
