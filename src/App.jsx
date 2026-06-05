import { Link } from "react-router-dom";
import HeartCard from "./component/HeartCard";
import CloudCard from "./component/CloudCard";
import TagCard from "./component/TagCard";
import BookCard from "./component/BookCard";
import CircleCard from "./component/CircleCard";
import NoteCard from "./component/NoteCard";

const cards = [
  {
    id: 1,
    title: "EXERCICES",
    type: "book",
    path: "/exercices",
  },
  {
    id: 2,
    title: "NEWS READING",
    type: "circle",
    path: "/news-reading",
  },
  {
    id: 3,
    title: "DAILY QUIZZ",
    type: "note",
    path: "/daily-quizz",
  },
  {
    id: 4,
    title: "RESOURCES",
    type: "tag",
    path: "/resources",
  },
  {
    id: 5,
    title: "MY WORLDS",
    type: "cloud",
    path: "/my-worlds",
  },
  {
    id: 6,
    title: "AFTER-SCHOOL HELP",
    type: "heart",
    path: "/after-school-help",
  },
];

export default function App() {
  return (
    <main className="min-h-screen bg-neutral-200">
      <section className="mx-auto max-w-7xl  bg-[#8EB4E8] px-4 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
        <header>
          <h1
            className="
              text-center
              font-black
              uppercase
              text-white
              tracking-wider
              drop-shadow-[4px_4px_0_rgba(0,0,0,0.15)]
              text-[clamp(1.8rem,5vw,4rem)]
            "
          >
            Welcome To English Language Arts
          </h1>

          <p className="mt-3 text-center text-xs tracking-[0.3em] text-slate-700 sm:text-sm">
            ELLEN DOWNING
          </p>
        </header>

        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-y-14
            place-items-center
            sm:grid-cols-2
            md:grid-cols-3
            lg:mt-16
          "
        >
          {cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </section>
    </main>
  );
}

function Card({ title, type, path }) {
  const content = (() => {
    switch (type) {
      case "book":
        return <BookCard title={title} />;

      case "circle":
        return <CircleCard title={title} />;

      case "note":
        return <NoteCard title={title} />;

      case "tag":
        return <TagCard title={title} />;

      case "cloud":
        return <CloudCard title={title} />;

      case "heart":
        return <HeartCard title={title} />;

      default:
        return null;
    }
  })();

  return <Link to={path}>{content}</Link>;
}





