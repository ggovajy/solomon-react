import React, {useState, useRef} from 'react'
import { useRouter } from "next/router";
import 'react-sidebar-ui/dist/index.css';
import Footer from './Footer'
import Top from './Top'
import {
    Checkbox,
    Grid,
    Header,
    Icon,
    Image,
    Menu,
    Segment,
    Sidebar,
  } from 'semantic-ui-react'

const Nav = () => {
    const router = useRouter();
    let activeItem;
    const segmentRef = useRef()
    const [visible, setVisible] = useState(false)

    if (router.pathname === "/") {
        activeItem = "home";
      } else if (router.pathname === "/chart") {
        activeItem = "chart";
      } else if (router.pathname === "/about") {
        activeItem = "about";
      } else if (router.pathname === "/admin") {
        activeItem = "admin";
      } else if (router.pathname === "/solomon01") {
        activeItem = "solomon01";
      } else if (router.pathname === "/solomon02") {
        activeItem = "solomon02";
      } else if (router.pathname === "/solomon03") {
        activeItem = "solomon03";
      } else if (router.pathname === "/solomon04") {
        activeItem = "solomon04";
      }

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
      
        <Checkbox
          checked={visible}
          label={{ children: <code>visible</code> }}
          onChange={(e, data) => setVisible(data.checked)}
        />
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item name="home" active={activeItem === "home"} onClick={goLink}>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name="solomon1" active={activeItem === "solomon1"} onClick={goLink}>
              <Icon name='coffee' />
              여민수
            </Menu.Item>
            <Menu.Item name="solomon2" active={activeItem === "solomon2"} onClick={goLink}>
              <Icon name='search' />
              이원옥
            </Menu.Item>
            <Menu.Item name="solomon3" active={activeItem === "solomon3"} onClick={goLink}>
              <Icon name='smile' />
              김정연
            </Menu.Item>
            <Menu.Item name="solomon4" active={activeItem === "solomon4"} onClick={goLink}>
              <Icon name='users' />
              ....
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
              <div style={{height:"930px"}}>
                <Top></Top>
                <Footer></Footer>
              </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      
    </div>
  )
};
export default Nav;