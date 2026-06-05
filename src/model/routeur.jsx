import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Exercices from "../view/Exercices";
import NewsReading from "../view/NewsReading";
import Ressources from "../view/Ressources";
import MyWorlds from "../view/MyWorlds";
import DailyQuizz from "../DailyQuizz";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/exercices",
    element: <Exercices />
  },
  {
    path: "/news-reading",
    element: <NewsReading />
  },
  {
    path: "/resources",
    element: <Ressources />
  },
  {
    path: "/my-worlds",
    element: <MyWorlds />
  },
  {
    path: "/daily-quizz",
    element: <DailyQuizz />
  }
]);