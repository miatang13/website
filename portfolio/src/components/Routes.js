import { Route, Switch } from "react-router-dom";
import About from "../pages/About";
import AsOneGame from "../pages/projects/AsOneGame";
import Bechdel from "../pages/projects/Bechdel";
import HolidayAR from "../pages/projects/HolidayAR";
import Jam3 from "../pages/projects/Jam3";
import SoDRebrand from "../pages/projects/SoDRebrand";
import Work from "../pages/Work";
import { AnimatePresence } from "framer-motion";

export default function Routes(props) {
  return (
    <Route
      render={({ location }) => (
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route
              exact
              path="/"
              render={() => (
                <Work
                  cssContainerRef={props.cssContainerRef}
                  thumbnailRefs={props.thumbnailRefs}
                  descriptionRefs={props.descriptionRefs}
                />
              )}
            />
            <Route path="/about" component={About} />
            <Route path="/jam3-internship" component={Jam3} />
            <Route path="/bechdel-directors-data-vis" component={Bechdel} />
            <Route path="/holiday-AR" component={HolidayAR} />
            <Route path="/cmu-sod-rebrand" component={SoDRebrand} />
            <Route path="/as-one-narrative-game" component={AsOneGame} />
          </Switch>
        </AnimatePresence>
      )}
    />
  );
}
