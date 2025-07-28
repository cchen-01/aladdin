import NavDestop from "./components/NavDesktop";
import NavMobile from "./components/NavMobile";

export default function Nav(props) {
  return (
    <>
      {/* Desktop Nav: visible on sm and up */}
      <div className="hidden sm:block">
        <NavDestop {...props} />
      </div>
      {/* Mobile Nav: visible below sm */}
      <div className="block sm:hidden">
        <NavMobile {...props} />
      </div>
    </>
  );
}
