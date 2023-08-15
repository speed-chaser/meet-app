import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/showAndHideEventsDetails.feature");

defineFeature(feature, (test) => {
  // Scenario 1
  test("An event element is collapsed by default.", ({ given, when, then }) => {
    let AppComponent;
    given("the user first opens the app", () => {
      AppComponent = render(<App />);
    });

    when(
      "the user recieves the full list of events (specific for the city or all events)",
      async () => {
        const AppDOM = AppComponent.container.firstChild;
        const EventListDOM = AppDOM.querySelector("#event-list");

        await waitFor(() => {
          const EventListItems = EventListDOM.querySelectorAll(".event");
          expect(EventListItems.length).toBe(32);
        });
      }
    );

    then("all events will colapse by default.", () => {
      const EventListDOM =
        AppComponent.container.firstChild.querySelector("#event-list");
      const details = EventListDOM.querySelector(".details");
      expect(details).toBeNull();
    });
  });

  // Scenario 2
  test("User can expand an event to see its details", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given("the user gets a list of events", async () => {
      AppComponent = render(<App />);
      await waitFor(() => {
        const eventList =
          AppComponent.container.firstChild.querySelectorAll(".event");
        expect(eventList[0]).toBeTruthy();
      });
    });

    when("a user selects an event's details", async () => {
      const EventListDOM =
        AppComponent.container.firstChild.querySelector("#event-list");
      const button = EventListDOM.querySelector(".details-btn");

      await userEvent.click(button);
    });

    then("the details will show up for that choosen event", () => {
      const EventListDOM =
        AppComponent.container.firstChild.querySelector("#event-list");
      const details = EventListDOM.querySelector(".details");
      expect(details).toBeInTheDocument();
    });
  });

  // Scenario 3
  test("User can collapse an event to hide its details", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let button;
    given("the user sees the details of an event", async () => {
      AppComponent = render(<App />);
      await waitFor(() => {
        const eventList =
          AppComponent.container.firstChild.querySelectorAll(".event");
        expect(eventList[0]).toBeTruthy();
      });

      const EventListDOM =
        AppComponent.container.firstChild.querySelector("#event-list");
      button = EventListDOM.querySelector(".details-btn");
      await userEvent.click(button);

      const details = EventListDOM.querySelector(".details");
      expect(details).toBeInTheDocument();
    });

    when("the user presses a button to hide event's details", async () => {
      await userEvent.click(button);
    });

    then("the details of that event will be hidden", () => {
      const EventListDOM =
        AppComponent.container.firstChild.querySelector("#event-list");
      const details = EventListDOM.querySelector(".details");
      expect(details).not.toBeInTheDocument();
    });
  });
});
