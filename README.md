# meet-app

## Feature 1

As a user,
I should be able to filter events by city
So that I can see events that take place in that city.

**Scenario 1: User opens the app and has searched a city.**
- **Given** the main page is open;
- **When** user types a city in the textbox;
- **Then** the user should receive a list of cities (suggestions) that match what they've typed.

**Scenario 2: When a user hasn't searched for a specific city.**
- **Given** user hasn't searched for any city;
- **When** the user opens the app;
- **Then** the user should see a list of upcoming events.

**Scenario 3: User can select a city from the suggested list.**
- **Given** user was typing "Berlin" in the city textbox AND the list of suggested cities is showing;
- **When** the user selects a city (e.g., "Berlin, Germany") from the list;
- **Then** their city should be changed to that city(i.e., "Berlin, Germany") AND the user should receive a list of upcoming events in that city.

## Feature 2

As a user, I would like to be able to show/hide event details so that I can see more/less
information about an event

**Scenario 1: An event element is collapsed by default.**
- **Given** user has searched for events regardless to the chosen city or not;
- **When** the user receives the full list of events (specific for the city or all events);
- **Then** all eventrs will colapse by default.

**Scenario 2: User can expand an event to see its details.**
- **Given** user gets a list of events;
- **When** use selects an event's details;
- **Then** the details will show up for that chosen event.

**Scenario 3: User can collapse an event to hide its details.**
- **Given** user sees the details of an event;
- **When** user presses a button to hide an event's details;
- **Then** details of that event will be hidden.

## Feature 3

 As a user, I would like to be able to specify the number of events I want to view in the app so
that I can see more or fewer events in the events list at once.


**Scenario 1: When the user hasn't specified a number, 32 is the default number.**
- **Given** user hasn't specified or filtered the number of events;
- **When** he chooses to display events in a specific city or all events;
- **Then** the default number of displayed events will be 32.

**Scenario 2: User can change the number of events they wish to see.**
- **Given** the user has events displayed;
- **When** the user chooses to change the number of events displayed;
- **Then* the number of events displayed will update to the number the user selected.

## Feature 4

As a user, I would like to be able to use the app when offline so that I can see the events I
viewed the last time I was online

**Scenario 1: Show cached data when there's no internet connection.**
- **Given** user has no internet connection;
- **When** user is accessing the app;
- **Then** cached data, stored inside the app, will be porovided to the user.

**Scenario 2: Show error when the user changes the settings (city, time range).**
- **Given** the user has no internet connection;
- **When** the user is trying to access new event information (change the city, etc);
- **Then** the app will show an error.

## Feature 5

As a user, I would like to be able to add the app shortcut to my home screen so that I can
open the app faster.

**Scenario 1: User can install the meet app as a shortcut on their device home screen.**
- **Given** the user waants to install the app;
- **When** the user selects to install the app as a shortcut;
- **Then** a shortcut is created on the user's homescreen.

## Feature 6

As a user, I would like to be able to see a chart showing the upcoming events in each city so
that I know what events are organized in which city

**Scenario 1: Show a chard with the number of upcoming events in each city.**
- **Given** the user is in the events detail page;
- **When** the user clicks the button to see a chart of events in each of their corrosponding cities;
- **Then** a chart with the number of upcoming events for each city will be shown to the user.

