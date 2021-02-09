import React, {useState} from 'react'
import {Sidebar, InputItem, DropdownItem, Icon, Item, Logo, LogoText} from 'react-sidebar-ui'
import { Dropdown, Menu } from 'semantic-ui-react'
import 'react-sidebar-ui/dist/index.css';
import { Checkbox } from 'semantic-ui-react';

const Nav = () => {

    const [visible, setVisible] = useState(false)

  return (
    <div>

      <Sidebar bgColor='black' isCollapsed={visible}>
        <Logo
          image='/images/logo/solomon.jpg'
          imageName='solomon logo'/>
        <LogoText>Solomon Sample App</LogoText>
        <DropdownItem
          values={['First', 'Second', 'Third']}
          bgColor={'black'}>
          Menu
        </DropdownItem>
        <Menu.Item>Home</Menu.Item>
    <Dropdown text='Messages' pointing='left' className='link item'>
      <Dropdown.Menu>
        <Dropdown.Item>Inbox</Dropdown.Item>
        <Dropdown.Item>Starred</Dropdown.Item>
        <Dropdown.Item>Sent Mail</Dropdown.Item>
        <Dropdown.Item>Drafts (143)</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Spam (1009)</Dropdown.Item>
        <Dropdown.Item>Trash</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Menu.Item>Browse</Menu.Item>
    <Menu.Item>Help</Menu.Item>
        <Checkbox
            checked={visible}
            onChange={(e, data) =>setVisible(data.checked)}
        />
        <Item bgColor='black'>
          <Icon><i className="fas fa-home"/></Icon>
          Home
        </Item>
        <Item bgColor='black'>
          <Icon><i className="fas fa-info"/></Icon>
          About
        </Item>
        <Item bgColor='black'>
          <Icon><i className="fas fa-sitemap"/></Icon>
          My Website
        </Item>
        <Item bgColor='black'>
          <Icon><i className="far fa-address-book"/></Icon>
          Contacts
        </Item>
        <Item bgColor='black'>
          <Icon><i className="fas fa-rss-square"/></Icon>
          Blog
        </Item>
      </Sidebar>
    </div>
  )
};
export default Nav;