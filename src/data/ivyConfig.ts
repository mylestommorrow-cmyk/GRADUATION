export interface StoryChapter {
  number: string;
  era: string;
  title: string;
  description: string;
}

export const ivyConfig = {
  name: 'Ivy Njuguna',
  shortName: 'Ivy',
  fullName: 'Ivy Njuguna',
  classYear: 'Class of 2026',
  university: 'KCA University',
  clubRole: 'KCA Tech Club Leadership',
  tributeAuthor: 'Mark Teddy',

  hero: {
    headline: 'Congratulations once again, Ivy Njuguna.',
    intro:
      'From leading and building together in the KCA Tech Club to crossing the graduation stage at KCA University, thank you for being such an inspiring leader, collaborator, and friend.',
    portraitSrc: '/assets/aistudio/IVY_f5aac7eb.jpeg',
    portraitAlt: 'Ivy Njuguna smiling in her KCA University graduation gown and mortarboard cap',
    portraitCaption: 'Graduation Day · KCA University',
  },

  tributeLetter: {
    eyebrow: 'A Graduation Note From Mark Teddy',
    salutation: 'Congratulations once again, Ivy! ❤️🎓',
    paragraphs: [
      "Honestly, it was such a pleasure and so much fun working with you. Beyond the experiences and memories, you've been a great inspiration to me in so many ways. I've learned a lot just from interacting and working alongside you, and I truly appreciate the person you are.",
      'As you step into this new chapter, I wish you nothing but the very best. May greater opportunities find you, may your dreams become reality, and may you continue to grow, shine, and make an impact wherever life takes you.',
      "Keep being the amazing person you are. The world is waiting for what you have to offer. I'm genuinely happy for you, and I hope our paths continue to cross. All the best, Ivy! ❤️✨",
    ],
    signOff: 'Mark Teddy · KCA Tech Club',
  },

  storyChapters: [
    {
      number: '01.',
      era: 'KCA University',
      title: 'Purpose, Growth & Dedication',
      description:
        'Every step across KCA University reflected steady determination, curiosity, and warmth—turning hard work into a milestone worth celebrating.',
    },
    {
      number: '02.',
      era: 'KCA Tech Club',
      title: 'Joy & Inspiration in Leadership',
      description:
        'Working alongside Ivy in the KCA Tech Club meant learning every day—from thoughtful leadership and shared laughs to the confidence she sparks in everyone around her.',
    },
    {
      number: '03.',
      era: 'The New Chapter',
      title: 'Ready for Greater Opportunities',
      description:
        'The world is waiting for what Ivy has to offer. Here is to dreams becoming reality, doors opening wide, and a future full of lasting impact.',
    },
  ] as StoryChapter[],

  soundtrack: {
    title: 'Still the One',
    artist: 'Sauti Sol',
    album: 'Live and Die in Afrika',
    coverSrc: '/assets/aistudio/STILL_THE_ONE_467083c7.jpeg',
    coverAlt: 'Sauti Sol Live and Die in Afrika album cover for Still the One',
    dedicationCaption:
      'Through every season of growth, late nights, and shared victories at KCA University, you are still the one lighting the way forward.',
    // SWAP HERE: Paste a Spotify, YouTube, or Apple Music embed URL if you want a pre-loaded iframe
    defaultEmbedUrl: '',
    listenLinks: {
      spotifySearch: 'https://open.spotify.com/search/Sauti%20Sol%20Still%20the%20One',
      youtubeSearch: 'https://www.youtube.com/results?search_query=Sauti+Sol+Still+the+One',
      appleMusicSearch: 'https://music.apple.com/us/search?term=Sauti%20Sol%20Still%20the%20One',
    },
  },
};
