let validateEvent;
try {
  ({ validateEvent } = require('./lib/common/schemas/event'));
} catch {
  console.error('event-service: FAIL - the library is not in lib/common');
  process.exit(1);
}

if (validateEvent({ id: 'evt-1' }) !== true) {
  console.error('event-service: FAIL - an event with an id should be valid');
  process.exit(1);
}
console.log('event-service: ok');
