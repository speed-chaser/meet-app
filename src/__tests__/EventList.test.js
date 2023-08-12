import { render, screen } from "@testing-library/react";
import EventList from "../components/EventList";
import { getEvents } from "../api";

describe("<EventList /> component", () => {
  let allEvents;

  // Fetch all events before running tests
  beforeAll(async () => {
    allEvents = await getEvents();
  });

  test('has an element with "list" role', () => {
    render(<EventList events={[]} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  test("renders correct number of events", async () => {
    render(<EventList events={allEvents} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(allEvents.length);
  });
});
