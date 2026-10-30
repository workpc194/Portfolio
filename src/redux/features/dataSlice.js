import { createSlice } from "@reduxjs/toolkit";
import eComPhoto from '../../content/e-commerce.webP'
import currencyPhoto from '../../content/currency-converter.webP'
import rockPaperPhoto from '../../content/rock-paper-game.webP'
import photoVideoSearch from '../../content/search-photo-video.webP'
import notesAppPhoto from '../../content/notes-app.webP'
import galleryAppPhoto from '../../content/gallery-app.webP'

export const dataSlice = createSlice({
    name: 'dataSlice',
    initialState: {
        cards: [
            {
                id: 0,
                img: eComPhoto,
                heading: 'E-Commerce Store',
                mini_description: 'A responsive, feature-rich e-commerce web application built with React, featuring dynamic product catalogs and smooth user interactions.',
                main_description: 'NexMall is a modern, high-performance e-commerce web application designed to emulate a real-world digital storefront. It integrates with the DummyJSON Products API to dynamically fetch, filter, and render a wide-ranging catalog of products. The application features a responsive layout, interactive shopping cart management, instant search functionality, and sleek product detail views. Built with component-driven architecture, it showcases optimized state management, fluid navigation, and clean styling to ensure an engaging, frictionless user checkout and shopping experience across all device sizes.',
                main_skills: ['ReactJS', 'Tailwind CSS', 'JavaScript'],
                all_skills: ['ReactJS', 'Tailwind CSS', 'Axios', 'JavaScript', 'Lucide', 'Git', 'GitHub', 'Local State Managment'],
                user_benefit: ['Instant filtering and responsive grid layouts let users find and examine items in seconds.', 'Real-time cart calculation and clean item management provide an intuitive purchasing flow.', 'Fully responsive design adapts fluidly from mobile screens to desktop displays without layout friction.'],
                challange: 'Managing complex global state and asynchronous data synchronization: Handling dynamic cart updates, quantity alterations, and real-time total price calculations simultaneously while fetching and filtering asynchronous catalog data from an external API without causing layout shifts or state desynchronization.',
                url: 'https://nexmall-e-commerce-project.vercel.app/',
                source_code: 'https://github.com/workpc194/e-commerce-project'
            },
            {
                id: 1,
                img: currencyPhoto,
                heading: 'Currency Converter',
                mini_description: 'A sleek, real-time currency conversion tool featuring accurate exchange rates and instant calculations.',
                main_description: 'A modern, lightweight web application built to perform fast and precise currency conversions across global markets. The application integrates with live financial data APIs to fetch up-to-date exchange rates dynamically. Featuring an intuitive user interface, instant input conversion, and quick currency swapping mechanics, it provides a seamless experience for users looking to calculate exchange values instantly across different currencies without friction.',
                main_skills: ['JavaScript', 'CSS3', 'API'],
                all_skills: ['HTML', 'CSS', 'JavaScript', 'GIT', 'GitHub'],
                user_benefit: ['Converts currencies dynamically as you type without requiring manual submit reloads.', 'Pulls live financial rates to guarantee precision in currency calculations.', 'Allows users to invert source and target currencies instantly with a single click.'],
                challange: 'Managing bidirectional inputs where modifying either the base or target currency triggers live recalculations while gracefully handling API latency and preventing state loops.',
                url: 'https://currency-converter-eta-wine.vercel.app/',
                source_code: 'https://github.com/workpc194/currency-converter'
            },
            {
                id: 2,
                img: rockPaperPhoto,
                heading: 'Rock Paper Game',
                mini_description: 'An interactive, beautifully styled Rock Paper Scissors web game featuring score tracking.',
                main_description: 'A polished, modern web implementation of the classic Rock Paper Scissors game designed to deliver a fun and engaging user experience. The application features intuitive click interactions, animated choice transitions, and real-time score tracking against a computer opponent. Built with clean frontend architecture and responsive styling, it ensures seamless gameplay, instant feedback, and an enjoyable layout across mobile and desktop devices.',
                main_skills: ['JavaScript', 'CSS', 'Event Handling'],
                all_skills: ['JavaScript', 'CSS', 'Event Handling', 'HTML', 'GIT', 'GitHub'],
                user_benefit: ['Quick response times and smooth animations make every round engaging.', 'Keeps count of wins, losses, and ties during the session to challenge yourself.', 'Optimized layout that works smoothly on both mobile touch screens and desktop browsers.'],
                challange: 'Managing game state synchronization—evaluating user choice versus a randomized computer choice, instantly determining win/loss/tie outcomes, and updating scoreboard states without UI lag or desynchronization.',
                url: 'https://rock-paper-scissors-game-teal-delta.vercel.app/',
                source_code: 'https://github.com/workpc194/rock-paper-scissors-game'

            },
            {
                id: 3,
                img: photoVideoSearch,
                heading: 'Photos Videos Searcher',
                mini_description: 'A dynamic media search web app leveraging Redux for state management and API integration.',
                main_description: 'A powerful, feature-rich media discovery web application designed to let users instantly search and explore photos, videos, and GIFs from external media sources. Built with React and Redux Toolkit, the application implements robust centralized state management to handle complex search queries, pagination, favorites, and asynchronous API requests efficiently. It features a responsive grid layout and optimized rendering, delivering a smooth, high-performance multimedia browsing experience across all devices.',
                main_skills: ['Redux', 'ReactJS', 'Media Fetching'],
                all_skills: ['Redux', 'ReactJS', 'Media Fetching', 'Tailwind CSS', 'JS Promises', 'Async', 'Await', 'GIT', 'GitHub'],
                user_benefit: ['Search across multiple media formats (photos, videos, and GIFs) in one unified interface.', 'Redux ensures lightning-fast filtering, caching, and state synchronization across components.', 'Adapts fluidly to different screen sizes for an immersive multimedia browsing experience.'],
                challange: 'Managing complex global state transitions (pending, fulfilled, rejected) while switching between disparate media APIs and maintaining pagination, search history, and favorite states simultaneously.',
                url: 'https://searchphotovideogif.vercel.app/',
                source_code: 'https://github.com/workpc194/redux/tree/main/redux-project'

            },
            {
                id: 4,
                img: notesAppPhoto,
                heading: 'Notes App',
                mini_description: 'A responsive React notes application with real-time editing and local persistence.',
                main_description: 'A clean, efficient note-taking web application designed to help users quickly capture, organize, and manage their daily thoughts and tasks. Built with React component-driven architecture, the app provides real-time text editing, instant note creation, editing, and deletion. It utilizes local browser storage to ensure user notes persist across sessions without requiring a backend database. Featuring a modern, clutter-free user interface, it provides a seamless productivity experience across desktop and mobile screens.',
                main_skills: ['React', 'CSS', 'JavaScript'],
                all_skills: ['React', 'CSS', 'JavaScript', 'HTML', 'Git', 'GitHub'],
                user_benefit: ['Your notes stay saved locally on your browser even after closing or refreshing the tab.', 'Minimalist UI allows you to focus purely on drafting and organizing your ideas quickly.', 'Create, edit, and delete notes instantly with zero server lag or reloading delays.'],
                challange: 'Managing state update cycles to ensure real-time local storage serialization on every note addition, edit, or deletion without causing unneeded re-renders or performance drops during rapid typing.',
                url: 'https://notes-app-by-noman.vercel.app/',
                source_code: 'https://github.com/workpc194/react-learning/tree/main/notes-app'
            },
            {
                id: 5,
                img: galleryAppPhoto,
                heading: 'Gallery App',
                mini_description: 'A responsive photo gallery web application featuring dynamic image filtering and layout customization.',
                main_description: 'A sleek, visually engaging media gallery web application designed to showcasing high-resolution imagery in a clean, modern interface. Built with React, the application offers fluid photo search, category filtering, and responsive grid layouts that adapt seamlessly across devices. It incorporates smooth hover states, lightboxes or detail overlays for enhanced viewing, and efficient state handling to deliver an intuitive, immersive visual browsing experience.',
                main_skills: ['React', 'CSS', 'InfiniteScroll'],
                all_skills: ['React', 'CSS', 'InfiniteScroll', 'HTML', 'GIT', 'GitHub'],
                user_benefit: ['Quickly filter and search through media categories without page reloads.', 'Responsive media grid automatically adjusts card ratios for optimal viewing on mobile and desktop screens.', 'Clean, focused dark-mode aesthetic puts full emphasis on the photography content.'],
                challange: 'Maintaining smooth layout recalculations and fast grid adjustments during rapid search filtering or category switching without layout shifts or performance drops.',
                url: 'https://gallery-app-by-noman.vercel.app/',
                source_code: 'https://github.com/workpc194/react-learning/tree/main/gallery-project'
            },
            {
                id: 6,
                img: '',
                heading: '',
                mini_description: '',
                main_description: '',
                main_skills: [],
                all_skills: [],
                user_benefit: [],
                challange: '',
                url: '',
                source_code: ''
            }
        ],
        //When You will add any new Project in Array Must Change Last Index empty also change id (available on next) number with empty index and also change in ProjectCardInfo.jsx
        id: 6,
        hide: true
    },
    reducers: {
        setID: (state, action) => {
            state.id = action.payload
        },
        setHide: (state, action) => {
            state.hide = action.payload
        }
    }
})

export const { setID, setHide } = dataSlice.actions
export default dataSlice.reducer