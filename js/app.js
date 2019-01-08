let eventItem = document.querySelectorAll('.event_item');

eventItem.forEach(item => {
  item.addEventListener('click', function() {
    item.classList.toggle('event_item_active');
  });
});