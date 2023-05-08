import { Header } from "./components";
import { About, BarberImg, Main } from "./sections";

export default function App() {
  return (
    <div>
      <Header />
      <BarberImg />
      <Main />
      <About />
      <BarberImg />
    </div>
  );
}
