import React, {useState} from 'react'
import {Sidebar, InputItem, DropdownItem, Icon, Item, Logo, LogoText} from 'react-sidebar-ui'
import 'react-sidebar-ui/dist/index.css';
import { Checkbox } from 'semantic-ui-react';

const Nav = () => {

    const [visible, setVisible] = useState(false)

    function goLink(e, data) {
        if (data.name === "home") {
          router.push("/");
        } else if (data.name === "chart") {
          router.push("/chart");
        } else if (data.name === "about") {
          router.push("/about");
        } else if (data.name === "admin") {
          router.push("/admin");
        } else if (data.name === "solomon01") {
          router.push("/solomon01/solomon01");
        } else if (data.name === "solomon02") {
          router.push("/solomon02/solomon02");
        } else if (data.name === "solomon03") {
          router.push("/solomon03/solomon03");
        } else if (data.name === "solomon04") {
          router.push("/solomon04/solomon04");
        }
    }
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
        <Checkbox
            // checked={visable}
            onChange={(e, data) =>setVisable(data.checked)}
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