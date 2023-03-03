import React from 'react'
import { Container, Header, Sidebar, Sidenav, Content, Navbar, Nav } from 'rsuite';
import CogIcon from '@rsuite/icons/legacy/Cog';
import AngleLeftIcon from '@rsuite/icons/legacy/AngleLeft';
import AngleRightIcon from '@rsuite/icons/legacy/AngleRight';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import DashboardIcon from '@rsuite/icons/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import PageLayout from '@/components/core/PageLayout';
import Link from 'next/link';
import { getSession } from 'next-auth/react';

export async function getServerSideProps(context) {
  const session = await getSession(context)

  const response = await fetch(`http://localhost:3000/api/projects`)
  const projects = await response.json()

	return { props: { session, projects } }
}

export default function Dashboard ({ session, projects }){
  const [expand, setExpand] = React.useState(true);

  return (
    <PageLayout>
      <div className="show-fake-browser sidebar-page">
        <Container >
          <Sidebar
            style={{ height: "calc(100vh - (70px + 80px))" }}
            width={expand ? 260 : 56}
            collapsible
            className="bg-back-light border-r border-soft flex flex-col justify-between"
          >
            <div className="">
              {/* <Sidenav.Header>
                <div className="py-5 bg-primary text-light whitespace-nowrap overflow-hidden">
                  <span style={{ marginLeft: 12 }}>Console</span>
                </div>
              </Sidenav.Header> */}
              <Sidenav expanded={expand} defaultOpenKeys={['3']}  appearance="subtle" >
                <Sidenav.Body>
                  <Nav>
                    <Nav.Item eventKey="1" active icon={<DashboardIcon />}>
                      Projects
                    </Nav.Item>
                    <Nav.Menu
                      color=''
                      eventKey="3"
                      trigger="hover"
                      title="Training"
                      icon={<MagicIcon />}
                      placement="rightStart"
                    >
                      <Link href="/train/with-text">With text</Link> 
                      <Nav.Item eventKey="3-4">With JSON</Nav.Item>
                      <Nav.Item eventKey="3-2">With CSV</Nav.Item>
                      <Nav.Item eventKey="3-3">With Excel</Nav.Item>
                      <Nav.Item eventKey="3-5">With Books (PDF)</Nav.Item>
                    </Nav.Menu>
                    <Nav.Item eventKey="2" icon={<GroupIcon />}>
                      Publish
                    </Nav.Item>
                    {/* <Nav.Menu
                      eventKey="4"
                      trigger="hover"
                      title="Tutorial"
                      icon={<GearCircleIcon />}
                      placement="rightStart"
                    >
                      <Nav.Item eventKey="4-1">Applications</Nav.Item>
                      <Nav.Item eventKey="4-2">Websites</Nav.Item>
                      <Nav.Item eventKey="4-3">Channels</Nav.Item>
                      <Nav.Item eventKey="4-4">Tags</Nav.Item>
                      <Nav.Item eventKey="4-5">Versions</Nav.Item>
                    </Nav.Menu> */}
                  </Nav>
                </Sidenav.Body>
              </Sidenav>
            </div>
            <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
          </Sidebar>

          <Container className='m-8'>
            <Header>
              <h2 className='text-4xl mb-4 font-poppins text-dark font-bold'>Your proyects</h2>
            </Header>
            <Content>
              <span className='text-dark text-xl'>You don't have any project yet, create the first one with the button below.</span>
              <Link href="/projects/create" className='block my-8 px-8 py-4 bg-primary rounded-full text-light text-center hover:text-light font-bold text-lg uppercase' >
                Create proyect
              </Link>

              <div className="grid grid-cols-4 gap-8 text-center items-center">
                {
                  projects && (
                    projects.map( project => {
                      return (
                        <div key={project.id} className="bg-back-light text-dark p-4 rounded-lg">
                          <h3 className='text-xl'>{ project['name'] }</h3>
                          <p>{ project.description }</p>
                        </div>
                      )
                    })
                  )
                }
              </div>

            </Content>
          </Container>
        </Container>
      </div>
    </PageLayout>
  )
}

const NavToggle = ({ expand, onChange }) => {
  return (
    <Navbar appearance="subtle" className="nav-toggle">
      <Nav>
        <Nav.Menu
          noCaret
          placement="topStart"
          trigger="click"
          title={<CogIcon style={{ width: 20, height: 20 }} size="sm" />}
        >
          <Nav.Item>Help</Nav.Item>
          <Nav.Item>Settings</Nav.Item>
          <Nav.Item>Sign out</Nav.Item>
        </Nav.Menu>
      </Nav>

      <Nav pullRight>
        <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
          {expand ? <AngleLeftIcon /> : <AngleRightIcon />}
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};
