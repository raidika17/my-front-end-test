import LayoutsStyles from "../styles/layouts.styles";

export default function Layouts({ children }) {
  return (
    <>
      <nav className={LayoutsStyles.BACKGROUND_NAVBAR}>
        <a className={LayoutsStyles.BRAND} href="#">
          TO DO LIST APP
        </a>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col">{children}</div>
        </div>
      </div>
    </>
  );
}
