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
6. Start the application using `npm start`.

## Data Persistence
The application uses the browser's Local Storage to save user data. This approach ensures that user data like saved links, notes, and selected backgrounds remain consistent across page refreshes.

## Areas for Improvement

While the Dashboard project is functional and well-structured, there are several areas where improvements can be made:

1. **Title Length Management**: The handling of long titles in the `.title-text` element, needs improvement. Long titles can disrupt the layout or overflow their container. Implementing a character limit or text-overflow handling could resolve this.

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
