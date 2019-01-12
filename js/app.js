let eventItem = document.querySelectorAll('.event_item');

var events = [
  
  // Start: Technical Events
  {
    title: 'Paper Presentation',
    time: '10.00 AM',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    rules: [
      'Mi proin sed libero enim sed faucibus turpis in',
      'Mi proin sed libero enim sed faucibus turpis in',
      'Mi proin sed libero enim sed faucibus turpis in',
      'Mi proin sed libero enim sed faucibus turpis in'
    ],
    eventHead: 'Surya Elavazhagan',
    eventHeadMobile: '+91 9840363615',
    eventPosterBackground: '../images/technical/paper-presentation.jpg',
  },
  {
    title: 'Clash of Codes',
    time: '10.00 AM',
    description: 'So, you think you can code? Then come test your skills at “Clash of codes”, an event to crown the king of coders.So get ready to conquer!',
    rules: [
      'Mi proin sed libero enim sed faucibus turpis in',
      'Mi proin sed libero enim sed faucibus turpis in',
      'Mi proin sed libero enim sed faucibus turpis in',
      'Mi proin sed libero enim sed faucibus turpis in'
    ],
    eventHead: 'Surya Elavazhagan',
    eventHeadMobile: '+91 9840363615',
    eventPosterBackground: '../images/technical/clash-of-codes.jpg',
  },
  {
    title: 'Tech Treasure Hunt',
    time: '10.00 AM',
    description: 'Decode and decrypt your way around this technical quest to find a trove of unimaginable wealth. Just remember: ‘X’ marks the spot.',
    rules: [
      'Mi proin sed libero enim sed faucibus turpis in',
      'Mi proin sed libero enim sed faucibus turpis in',
      'Mi proin sed libero enim sed faucibus turpis in',
      'Mi proin sed libero enim sed faucibus turpis in'
    ],
    eventHead: 'Surya Elavazhagan',
    eventHeadMobile: '+91 9840363615',
    eventPosterBackground: '../images/technical/treasure-hunt.jpg',
  },
  {
    title: 'Deadlocked DB',
    time: '10.00 AM',
    description: 'Our world revolves around data. And the one who masters data rules the world. Can you become an SQL master?',
    rules: [
      'Mi proin sed libero enim sed faucibus turpis in',
      'Mi proin sed libero enim sed faucibus turpis in',
      'Mi proin sed libero enim sed faucibus turpis in',
      'Mi proin sed libero enim sed faucibus turpis in'
    ],
    eventHead: 'Surya Elavazhagan',
    eventHeadMobile: '+91 9840363615',
    eventPosterBackground: '../images/technical/deadlocked-db.jpg',
  },
  {
    title: 'Google It',
    time: '10.00 AM',
    description: 'Anyone can google it, right? But with over 3.5 million results to choose from, can you find the right answer?',
    rules: [
      'Mi proin sed libero enim sed faucibus turpis in',
      'Mi proin sed libero enim sed faucibus turpis in',
      'Mi proin sed libero enim sed faucibus turpis in',
      'Mi proin sed libero enim sed faucibus turpis in'
    ],
    eventHead: 'Surya Elavazhagan',
    eventHeadMobile: '+91 9840363615',
    eventPosterBackground: '../images/technical/google-it.jpg',
  },
  {
    title: 'Gadgets and Gizmos',
    time: '10.00 AM',
    description: 'In this world of technology surplus, specs are everything.Review our array of gadgets & gizmos and compete (in this event) to find out if YOU have the right specs!',
    rules: [
      'Mi proin sed libero enim sed faucibus turpis in',
      'Mi proin sed libero enim sed faucibus turpis in',
      'Mi proin sed libero enim sed faucibus turpis in',
      'Mi proin sed libero enim sed faucibus turpis in'
    ],
    eventHead: 'Surya Elavazhagan',
    eventHeadMobile: '+91 9840363615',
    eventPosterBackground: '../images/technical/gadget-and-gizmos.jpg',
  },

  // Start: Non-Technical Events
  {
    title: 'Murder in Multiplayer',
    time: '10.00 AM',
    description: 'A paused game, a broken joystick and a dead body. Find the culprit….before he finds you.',
    rules: [
      'Mi proin sed libero enim sed faucibus turpis in',
      'Mi proin sed libero enim sed faucibus turpis in',
      'Mi proin sed libero enim sed faucibus turpis in',
      'Mi proin sed libero enim sed faucibus turpis in'
    ],
    eventHead: 'Surya Elavazhagan',
    eventHeadMobile: '+91 9840363615',
    eventPosterBackground: '../images/non-technical/murder-in-multiplayer.jpg',
  },
  {
    title: 'Prison Break',
    time: '10.00 AM',
    description: 'Unfortunately, you’ve been locked up in a prison. Fortunately you’ve got smart mind and a single clue. Can you escape?',
    rules: [
      'Mi proin sed libero enim sed faucibus turpis in',
      'Mi proin sed libero enim sed faucibus turpis in',
      'Mi proin sed libero enim sed faucibus turpis in',
      'Mi proin sed libero enim sed faucibus turpis in'
    ],
    eventHead: 'Surya Elavazhagan',
    eventHeadMobile: '+91 9840363615',
    eventPosterBackground: '../images/non-technical/prison-break.jpg',
  },
  {
    title: 'Pitch Impossible',
    time: '10.00 AM',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    rules: [
      'Mi proin sed libero enim sed faucibus turpis in',
      'Mi proin sed libero enim sed faucibus turpis in',
      'Mi proin sed libero enim sed faucibus turpis in',
      'Mi proin sed libero enim sed faucibus turpis in'
    ],
    eventHead: 'Surya Elavazhagan',
    eventHeadMobile: '+91 9840363615',
    eventPosterBackground: '../images/non-technical/pitch-impossible.jpg',
  },
  {
    title: 'Comic Quiz',
    time: '10.00 AM',
    description: 'A spectacular event to test your knowledge on the comic-verse. Unite the League cause. This is your EndGame!',
    rules: [
      'Mi proin sed libero enim sed faucibus turpis in',
      'Mi proin sed libero enim sed faucibus turpis in',
      'Mi proin sed libero enim sed faucibus turpis in',
      'Mi proin sed libero enim sed faucibus turpis in'
    ],
    eventHead: 'Surya Elavazhagan',
    eventHeadMobile: '+91 9840363615',
    eventPosterBackground: '../images/non-technical/comic-quiz.jpg',
  },
  {
    title: 'Box Cricket',
    time: '10.00 AM',
    description: 'Are you a cricket enthusiast? Does cricket run in your veins? Then this is the event for you!. Bowl and bat your way to victory!',
    rules: [
      'Mi proin sed libero enim sed faucibus turpis in',
      'Mi proin sed libero enim sed faucibus turpis in',
      'Mi proin sed libero enim sed faucibus turpis in',
      'Mi proin sed libero enim sed faucibus turpis in'
    ],
    eventHead: 'Surya Elavazhagan',
    eventHeadMobile: '+91 9840363615',
    eventPosterBackground: '../images/non-technical/box-cricket.jpg',
  },
  {
    title: 'Gaming',
    time: '10.00 AM',
    description: 'Calling all avid gamer in the region to the battlefield! Dust off your joystick , brush up  your cheat codes and lets play.',
    rules: [
      'Mi proin sed libero enim sed faucibus turpis in',
      'Mi proin sed libero enim sed faucibus turpis in',
      'Mi proin sed libero enim sed faucibus turpis in',
      'Mi proin sed libero enim sed faucibus turpis in'
    ],
    eventHead: 'Surya Elavazhagan',
    eventHeadMobile: '+91 9840363615',
    eventPosterBackground: '../images/non-technical/gaming.jpg',
  },

  // Start: Online Events
  {
    title: 'Signature Meme Contest',
    time: '10.00 AM',
    description: 'Are you a cricket enthusiast? Does cricket run in your veins? Then this is the event for you!. Bowl and bat your way to victory!',
    rules: [
      'All memes must be created under the theme “Life of Meme Creators”',
      '#Kratos2k19 watermark should be present in all the memes',
      'Memes should be sent to our official Kratos Facebook page or Instagram page',
      'One participant can send 3 memes at the maximum',
      'Inappropriate memes might be disqualified without prior notification',
      'Memes should not offend any individual or an organization or the government',
      'Winners will be announced on the 13th February, 2019',
      'The winners will be judged based on the reach in social media (no of likes, comments, shares, in both instagram and facebook)  and our critics’ decision',
    ],
    eventHead: 'Surya Elavazhagan',
    eventHeadMobile: '+91 9840363615',
    eventPosterBackground: '../images/online/signature-meme.jpg',
  },
  {
    title: 'Picturesque',
    time: '10.00 AM',
    description: 'Are you a cricket enthusiast? Does cricket run in your veins? Then this is the event for you!. Bowl and bat your way to victory!',
    rules: [
      'Theme for the photography contest is “Colors of Life”',
      'Photographs should be sent to our official Kratos Facebook page or Instagram page',
      'Last date to submit your photographs is 10th February, 2019',
      'A participant can send only one photograph',
      'The photograph should be the participant’s own creation',
      'Plagiarised pictures will be monitored seriously and will be disqualified without notification',
      'Winners will be announced on the 13th February, 2019',
      'The winners will be judged based on the reach in social media (no of likes, comments, shares, in both instagram and facebook)  and our critics’ decision',
    ],
    eventHead: 'Surya Elavazhagan',
    eventHeadMobile: '+91 9840363615',
    eventPosterBackground: '../images/online/picturesque.jpg',
  },
  {
    title: 'Lights Camera Action!',
    time: '10.00 AM',
    description: 'Are you a cricket enthusiast? Does cricket run in your veins? Then this is the event for you!. Bowl and bat your way to victory!',
    rules: [
      'After the credit slide kindly add a slide mentioning “Submitted for Kratos2k19”',
      'Films should be sent to our official Kratos Facebook page or Instagram page',
      'Last date to submit your work is 10th February, 2019',
      'A participant/team can send only one short film',
      'The Short film should be the participant’s own creation ',
      'Winners will be announced on the 13th February, 2019',
      'Core content, acting, cinematography skills and the efficiency of rendering will all be considered while scoring',
      'The winners will be judged based on our critics’ decision and the reach in social media. (no of likes, comments, shares, in both instagram and facebook)',
    ],
    eventHead: 'Surya Elavazhagan',
    eventHeadMobile: '+91 9840363615',
    eventPosterBackground: '../images/online/lights-camera-action.jpg',
  },
  {
    title: 'Drama Maxx',
    time: '10.00 AM',
    description: 'Are you a cricket enthusiast? Does cricket run in your veins? Then this is the event for you!. Bowl and bat your way to victory!',
    rules: [
      'Videos should be sent to our official Kratos Facebook page or Instagram page',
      'Last date to submit your video is 10th February, 2019',
      'A participant can send only one entry',
      'The Video must contain the participant in it',
      'Winners will be announced on 13th February, 2019',
      'Core content and acting will all be considered while scoring',
      'The winners will be judged based on our critics’ decision and the reach in social media. (no of likes, comments, shares, in both instagram and facebook)',
    ],
    eventHead: 'Surya Elavazhagan',
    eventHeadMobile: '+91 9840363615',
    eventPosterBackground: '../images/online/drama-maxx.jpg',
  },
  {
    title: 'Gamify Kratos',
    time: '10.00 AM',
    description: 'Are you a cricket enthusiast? Does cricket run in your veins? Then this is the event for you!. Bowl and bat your way to victory!',
    rules: [
      'Theme for the Poster Designing contest is “Gaming addiction”',
      'Use the theme to design a poster holding the words “KRATOS 2K19” as the content',
      'Posters should be sent to our official Kratos Facebook page or Instagram page',
      'Last date to submit your entry is 10th February, 2019',
      'A participant can send only one entry',
      'The poster should be the participant’s own creation and plagiarized ones will be disqualified without notification',
      'Winners will be announced on 13th February, 2019',
      'The winners will be judged based on our critics’ decision (Tip: Score more with your creativity) and the reach in social media. (no of likes, comments, shares, in both instagram and facebook)',
    ],
    eventHead: 'Surya Elavazhagan',
    eventHeadMobile: '+91 9840363615',
    eventPosterBackground: '../images/online/gamify-kratos.jpg',
  },
]

for(var i = 0; i < eventItem.length; i++) {
  eventItem[i].addEventListener('click', (function(i) {
    return function() {
      var eventDescription = document.getElementById('event_description');
      eventDescription.style.background = 'linear-gradient(60deg, rgba(171, 86, 207, .8), rgba(85,29,252,.8) 20%, rgba(117,121,255,.8)), url(' + events[i].eventPosterBackground +')';
      eventDescription.style.backgroundSize = 'cover';
      eventDescription.style.backgroundPosition = 'center';
      eventDescription.setAttribute('aria-hidden', false);
      eventDescription.scrollIntoView();
      document.body.classList.toggle('noscroll');
      document.getElementById('event_desc_title').innerHTML = events[i].title;
      document.getElementById('event_desc_time').innerHTML = events[i].time;
      document.getElementById('event_desc_desc').innerHTML = events[i].description;
      document.getElementById('event_desc_rules').innerHTML = '';
      events[i].rules.forEach(function(rule) {
        var li = document.createElement('li');
        li.innerHTML = rule;
        document.getElementById('event_desc_rules').appendChild(li);
      })
      document.getElementById('event_head_name').innerHTML = events[i].eventHead;
      document.getElementById('event_head_phone').innerHTML = events[i].eventHeadMobile;
    }
  })(i));
}

document.getElementById('event_desc_close').addEventListener('click', function(e) {
  e.preventDefault();
  e.stopPropagation();

  var eventDescription = document.getElementById('event_description');
  eventDescription.setAttribute('aria-hidden', true);
  document.body.classList.toggle('noscroll');
})