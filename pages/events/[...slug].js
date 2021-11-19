import { useRouter } from "next/router";
import { Fragment } from "react";

import { getFilteredEvents } from "../../helpers/api-util";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

function FilteredEventsPage(props) {
  const router = useRouter();

  const filterData = router.query.slug;

  console.log(filterData);

  // if (!filterData) {
  //   return <p className="center">loading...</p>;
  // }

  // const filteredYear = filterData[0];
  // const filteredMonth = filterData[1];

  // const numYear = +filteredYear;
  // const numMonth = +filteredMonth;

  if (props.hasError) {
    return
    <Fragment>
      <ErrorAlert>
        <p>Invalid filter. Please adjust your values</p>;
      </ErrorAlert>
      <div className="center">
        <Button link="/events">Show All Events</Button>
      </div>
    </Fragment>;
  }

  const filteredEvents = props.events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return(
    <Fragment>
      <ErrorAlert>
        <p>No events founds for the chosen filter!</p>
      </ErrorAlert>
      <div className="center">
        <Button link="/events">Show All Events</Button>
      </div>
    </Fragment>
    )}

  const date = new Date(props.date.year, props.date.month - 1)

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export async function getServerSideProps(context){
  const { params }  = context;
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (props.hasError) {
    return (
      <Fragment>
      <ErrorAlert>
        <p>Invalid filter. Please adjust your values</p>;
      </ErrorAlert>
      <div className="center">
        <Button link="/events">Show All Events</Button>
      </div>
    </Fragment>
    )
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });
  return {
    props: {
       events: filteredEvents,
       date: {
         year: numYear,
         month: numMonth
       }
    }
  }
}

export default FilteredEventsPage;
