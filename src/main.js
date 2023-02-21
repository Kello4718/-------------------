import { returnHtmlTripInfo } from './views/trip-info-view';
import { returnHtmlMenu } from './views/menu-view';
import { returnHtmlTripFilters } from './views/trip-filters-view';
import { returnHtmlTripSort } from './views/trip-sort-view';
// import { returnHtmlTripEventsMessageLoading } from './views/trip-events-message-loading';
// import { returnHtmlTripEventsMessageNoTrips } from './views/trip-events-message-no-trips';
import { returnHtmlTripEventsList } from './views/trip-events-list-view';
import { returnHtmlTripEventsListItem } from './views/trip-events-list-item-view';

const QUANTITY_OF_TRIPS = 3;

const tripMain = document.querySelector('.trip-main');
const tripControlsNavigation = document.querySelector('.trip-controls__navigation');
const tripControlsFilter = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');

const render = (container, template, place) => container.insertAdjacentHTML(place, template);


render(tripMain, returnHtmlTripInfo(), 'afterbegin');
render(tripControlsNavigation, returnHtmlMenu(), 'afterbegin');
render(tripControlsFilter, returnHtmlTripFilters(), 'afterbegin');
// render(tripEvents, returnHtmlTripEventsMessageLoading(), 'afterbegin');
// render(tripEvents, returnHtmlTripEventsMessageNoTrips(), 'afterbegin');
render(tripEvents, returnHtmlTripSort(), 'beforeend');
render(tripEvents, returnHtmlTripEventsList(), 'beforeend');
const tripEventsList = document.querySelector('.trip-events__list');
for (let i = 0; i < QUANTITY_OF_TRIPS; i++) {
  render(tripEventsList, returnHtmlTripEventsListItem(), 'beforeend');
}


