import './SlideFooterCut.css';

export default function SlideFooterCut() {
  return (
    <div className="slide-footer-cut" aria-hidden="true">
      <div className="slide-footer-cut__shape">
        <img
          src="/formfooter-cut.png"
          alt=""
          className="slide-footer-cut__fallback"
        />
      </div>
    </div>
  );
}
