import { render, screen, waitFor } from "@testing-library/react";
import Event from "../components/Event";
import userEvent from "@testing-library/user-event"; // Make sure you have installed this library
import { getEvents } from "../api";

describe("<Event /> component", () => {
  let allEvents;

  // Applied to all async functions
  beforeAll(async () => {
    allEvents = await getEvents();
  });

  test("renders event location", () => {
    const EventComponent = render(<Event event={allEvents[0]} />);
    expect(
      EventComponent.queryByText(allEvents[0].location)
    ).toBeInTheDocument();
  });

  test("renders event name", () => {
    const EventComponent = render(<Event event={allEvents[0]} />);
    expect(
      EventComponent.queryByText(allEvents[0].summary)
    ).toBeInTheDocument();
  });

  test("renders event date", () => {
    const EventComponent = render(<Event event={allEvents[0]} />);
    expect(
      EventComponent.queryByText(allEvents[0].start.dateTime)
    ).toBeInTheDocument();
  });

  test("renders event details button with the title (show details)", () => {
    const EventComponent = render(<Event event={allEvents[0]} />);
    expect(EventComponent.queryByText("show details")).toBeInTheDocument();
  });

  test("by default, event's details section should be hidden", async () => {
    const EventComponent = render(<Event event={allEvents[0]} />);

    await waitFor(() => {
      const eventDetails = EventComponent.queryByText("details");
      expect(eventDetails).not.toBeInTheDocument();
    });
  });

  test("shows the details section when the user clicks on the 'show details' button", async () => {
    const EventComponent = render(<Event event={allEvents[0]} />);
    const showDetailsButton = EventComponent.queryByRole("button", {
      name: "show details",
    });

    userEvent.click(showDetailsButton);

    await waitFor(() => {
      const eventDetails = EventComponent.queryByTestId("details");
      expect(eventDetails).toBeInTheDocument();
    });

    await waitFor(() => {
      const eventDetails = EventComponent.queryByTestId("details");
      expect(eventDetails).toHaveClass("details");
    });
  });

  test("hides the details section when the user clicks on the 'hide details' button", async () => {
    const EventComponent = render(<Event event={allEvents[0]} />);
    const hideDetailsButton = EventComponent.queryByRole("button", {
      name: "hide details",
    });
    userEvent.click(hideDetailsButton);

    await waitFor(() => {
      const eventDetails = EventComponent.queryByTestId("details");
      expect(eventDetails).not.toBeInTheDocument();
    });
  });
});
