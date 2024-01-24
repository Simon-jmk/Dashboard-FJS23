# Dashboard Project

## Project Overview
The Dashboard project is an interactive web application designed as a personal dashboard. It displays time and date and features four main components:

- **Links**: A card for saving web links.
- **Weather**: A card that displays current weather information using the OpenWeatherMap API.
- **Random GIFs**: A card for displaying random GIFs, powered by the Giphy API.
- **Notebook**: A card for note-taking.

Additionally, the dashboard features dynamic backgrounds from Unsplash. It defaults to a 'gradient' background but allows users to search and display images using specific keywords.

The application is built using modern web technologies, Node.js, Vite, and Axios. It utilizes Local Storage to save user data, ensuring information persistence across browser refreshes.

## API Key Information
To use all features of the Dashboard, you need to obtain and set up the following API keys in a `.env` file:

- `VITE_GIPHY_API_KEY`: Your Giphy Developers API key ([Giphy Developers](https://developers.giphy.com/dashboard/)).
- `VITE_OPEN_WEATHER_API_KEY`: Your OpenWeatherMap API key ([OpenWeatherMap API](https://openweathermap.org/api)).
- `VITE_UNSPLASH_API_KEY`: Your Unsplash Developers API key ([Unsplash Developers](https://unsplash.com/developers)).

## Installation and Usage
To set up and run the project:

1. Install Node.js.
2. Clone or download the project.
3. Create a `.env` file in the `Vite - Dashboard` directory and add your API keys.
4. Open a terminal and navigate to `Vite - Dashboard`.
5. Run `npm install` to install the dependencies, including Vite and Axios.
6. Start the application using `npm run dev`.

## Data Persistence
The application uses the browser's Local Storage to save user data. This approach ensures that user data like saved links, notes, and selected backgrounds remain consistent across page refreshes.

## Areas for Improvement

While the Dashboard project is functional and well-structured, there are several areas where improvements can be made:

1. **Title Length Management**:
   - **Title bug**: The handling of long titles in the `.title-text` element, needs improvement. Long titles can disrupt the layout or overflow their container.

2. **CSS Optimization and Refactoring**:
   - **Generalization of CSS Classes**: The current CSS classes are quite specific. Refactoring some of these into more general classes can improve the scalability and maintainability of the styling.
   - **Consolidation of Similar Styles**: Several styles are repeated across different classes. Consolidating these can reduce the overall size of the CSS file and make it easier to manage.

3. **Responsive Design**:
   - **Flexibility Across Various Screen Sizes**: The application is currently optimized for a couple of specific screen formats and has a good mobile view. However, its appearance on various other screen sizes is suboptimal. Implementing a more fluid responsive design using media queries can enhance user experience across all devices.
   - **Dynamic Resizing of Components**: Some components, like cards and buttons, do not resize well on different screens. 

4. **Data Persistence with Local Storage**:
   - **Enhancing User Experience**: Ensure that the use of Local Storage effectively maintains user data like saved links, notes, and selected backgrounds across browser sessions. Test and validate the functionality to ensure data is correctly saved and retrieved.

5. **Accessibility Considerations**:
   - **Scroll Bar Implementation**: Currently, the application does not have visible scroll bars in sections where content might overflow, such as in the notes or links card. Implementing custom, visually appealing scroll bars can significantly enhance the user experience. This addition would allow users to easily navigate through content while maintaining the aesthetic appeal of the application.

6. **Enhancements to Link Management**:
   - **Organizing and Editing Saved Links**: Adding the capability for users to edit the titles and URLs of saved links would significantly improve the usability of the link management feature.
   - **Drag-and-Drop Functionality**: Introducing a drag-and-drop feature for saved links would greatly enhance the user experience. This would allow users to easily rearrange their links, helping them prioritize or organize them according to their preferences. Such an interactive feature would add significant value to the usability of the link management system.
   - **Handling of Duplicate Links**: Currently, if multiple links with the same URL are saved, deleting one of them results in the deletion of all instances with that URL. Implementing a more nuanced deletion mechanism that targets individual instances, regardless of URL duplication, would enhance the management and organization of saved links.

7. **Weather Feature Enhancements**:
   - **Time-aware Weather Icons**: The current weather feature uses the same icon for clear weather both during the day and night, as it does not distinguish between different times of the day. Implementing time-aware icons that change based on the time (e.g., sun icon for day and moon icon for night) would enhance the accuracy and user experience of the weather feature.
   - **Styling of Weather Card**: The presentation of the temperature and related weather information could benefit from more sophisticated styling. Designing a more visually appealing weather card that creatively displays temperature, weather conditions, and other relevant information would make the weather feature more engaging and informative.
   - **Comprehensive Set of Weather Icons**: Currently, some weather conditions lack corresponding icons in the application. To provide a more accurate and informative weather feature, a complete set of weather icons should be incorporated. These icons should cover all the weather conditions listed in the OpenWeatherMap's [Weather Conditions](https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2). This would ensure that the application can display an appropriate icon for every possible weather scenario.

8. **Options for Note Card**:
   - **Text Format Features**: Currently, the note card lacks text formatting capabilities such as bold, italic, underline, and title headers. Incorporating these features would greatly enhance the user experience by allowing for more expressive and organized note-taking. Users could emphasize important points, create headings for better structure, and stylize their notes to suit their preferences.
   - **Saving Multiple Notes**: As of now, the note card does not support saving multiple notes separately. Introducing a feature to manage and save multiple notes would significantly improve the application's utility. This could include options to create new notes, switch between different notes, and organize them, perhaps with titles or tags for easy retrieval and categorization.



