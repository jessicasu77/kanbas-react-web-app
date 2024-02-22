function kanbasSmallNav() {
    return (
        <ul className="kb-navigation-small">
      <a href="/Kanbas/Courses/Home/screen.html">
        <div className="x">
          <i className="fa-solid fa-x"></i>
        </div>
      </a>
      <li>
        <a href="/Kanbas/Dashboard/screen.html">
          <i className="fa-solid fa-gauge"></i>Dashboard</a
        >
      </li>
      <li>
        <a href="/Kanbas/Account/Profile/screen.html"
          ><i className="fa-solid fa-user"></i>Account</a
        >
      </li>
      <li>
        <a href="/Kanbas/Courses/Home/screen.html"
          ><i className="fa-solid fa-book"></i> Courses</a
        >
      </li>
      <li>
        <a href="#"><i className="fa fa-calendar"></i> Calendar</a>
      </li>
      <li>
        <a href="#"><i className="fa-solid fa-inbox"></i> Inbox</a>
      </li>
      <li>
        <a href="#"><i className="fa-solid fa-tv"></i> Studio</a>
      </li>
      <li>
        <a href="#"><i className="fa-solid fa-arrow-right"></i> Commons</a>
      </li>
      <li>
        <a href="#"><i className="fa-solid fa-clock"></i> History</a>
      </li>
      <li>
        <a href="#"><i className="fa-solid fa-question"></i> Help</a>
      </li>
    </ul>
    )
}

export default kanbasSmallNav;