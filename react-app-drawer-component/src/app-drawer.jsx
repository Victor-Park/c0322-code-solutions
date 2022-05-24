import React from 'react';

class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { drawerOpen: false };
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
  }

  openDrawer() {
    this.setState({ drawerOpen: true });
  }

  closeDrawer() {
    this.setState({ drawerOpen: false });
  }

  render() {
    let drawer;
    let menu;
    let overlay;
    if (this.state.drawerOpen) {
      drawer = 'drawer-on';
      menu = 'menu-on';
      overlay = 'overlay on';
    } else {
      drawer = 'drawer-off';
      menu = 'menu-off';
      overlay = 'overlay off';
    }
    return (
      <>
      <div className="container">
        <div className={drawer}>
          <div className={menu}>
            <h1>Menu</h1>
              <a onClick={this.closeDrawer}>About</a>
            <a onClick={this.closeDrawer}>Get Started</a>
            <a onClick={this.closeDrawer}>Sign In</a>
          </div>
        </div>
        <div onClick={this.closeDrawer} className={overlay}>
        </div>
        <div className="hamburger">
          <i onClick={this.openDrawer} className="fa-solid fa-bars hamburger"></i>
        </div>
      <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/streams/2013/March/130326/1C6639340-google-logo.jpg"></img>
      </div>
      </>
    );
  }
}

export default Drawer;
