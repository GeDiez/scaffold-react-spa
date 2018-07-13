import { Container } from "unstated";

class Session extends Container {
  state = {
    user: {},
    isAuthenticated: false,
  };

  authenticate({ user, password }) {
    return this.setState({ isAuthenticated: true });
  };

  getUser() {
    return this.setState({ user: {
      name: 'Gibran',
      email: 'gibran@michelada.io',
      username: 'gibran',
    }});
  }

  logout = () => {
    return this.setState({ isAuthenticated: false });
  }
}

export default Session;