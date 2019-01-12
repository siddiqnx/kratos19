let eventItem = document.querySelectorAll('.event_item');

var events = [
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
]

for(var i = 0; i < eventItem.length; i++) {
  eventItem[i].addEventListener('click', (function(i) {
    return function() {
      var eventDescription = document.getElementById('event_description');
      eventDescription.setAttribute('aria-hidden', false);
      eventDescription.scrollIntoView();
      document.body.classList.toggle('noscroll');
      console.log(eventDescription.getBoundingClientRect());
      document.getElementById('event_desc_title').innerText = events[i].title;
      document.getElementById('event_desc_time').innerText = events[i].time;
      document.getElementById('event_desc_desc').innerText = events[i].description;
      events[i].rules.forEach(function(rule) {
        var li = document.createElement('li');
        li.innerText = rule;
        document.getElementById('event_desc_rules').appendChild(li);
      })
      document.getElementById('event_head_name').innerText = events[i].eventHead;
      document.getElementById('event_head_phone').innerText = events[i].eventHeadMobile;
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