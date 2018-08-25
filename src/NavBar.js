import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            as={Link}
            to='/'
            position='right'
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick} />
          <Menu.Item
            as={Link}
            to='bio'
            position='center'
            name='bio'
            active={activeItem === 'bio'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to='projects'
            position='left'
            name='projects'
            active={activeItem === 'projects'}
            onClick={this.handleItemClick}
          />
        </Menu>
        {/* <Segment>
          <img src='/images/wireframe/media-paragraph.png' />
        </Segment> */}
      </div>
    );
  }
}
