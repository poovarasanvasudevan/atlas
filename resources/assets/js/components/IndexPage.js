import React, {Component} from 'react'
import ArrowLeftIcon from '@atlaskit/icon/glyph/arrow-left'
import Button from '@atlaskit/button'
import ChevronRightIcon from '@atlaskit/icon/glyph/chevron-right'
import CalendarIcon from '@atlaskit/icon/glyph/calendar'
import ConfluenceIcon from '@atlaskit/icon/glyph/confluence'
import {ConfluenceWordmark} from '@atlaskit/logo'
import DiscoverIcon from '@atlaskit/icon/glyph/discover'
import EditorAlignLeftIcon from '@atlaskit/icon/glyph/editor/align-left'
import JiraIcon from '@atlaskit/icon/glyph/jira'
import Page, {Grid, GridColumn} from '@atlaskit/page'
import Tooltip from '@atlaskit/tooltip'
import TrayIcon from '@atlaskit/icon/glyph/tray'
import WorldIcon from '@atlaskit/icon/glyph/world'
import QuestionIcon from '@atlaskit/icon/glyph/question'
import {AkSearch} from '@atlaskit/quick-search'
import Icon from '@atlaskit/icon'
import Navigation, {
  AkContainerLogo,
  AkContainerNavigationNested,
  AkCreateDrawer,
  AkNavigationItemGroup,
  AkNavigationItem,
  AkSearchDrawer,
  presetThemes,
} from '@atlaskit/navigation'
import TestIcon from "./icons/TestIcon"
import {AreaChart, Cog, Comment, Cubes, Folder, Globe, Plus, Search, User, Users} from "./icons/icon"
import ChatUsers from "./module/ChatUsers"
import {Box, Flex} from "reflexbox"

const BackIcon = (
  <Tooltip position="right" content="Back">
    <ArrowLeftIcon label="Back icon" size="medium"/>
  </Tooltip>
)

const ContainerHeaderComponent = ({
                                    stackLength,
                                    goBackHome,
                                  }: {
  stackLength: number,
  goBackHome: () => mixed,
}) => (
  <div>
    <AkContainerLogo>
      <ConfluenceWordmark/>
    </AkContainerLogo>
    {stackLength > 1 ? (
      <AkNavigationItem
        icon={<ArrowLeftIcon label="Add-ons icon"/>}
        onClick={() => goBackHome()}
        onKeyDown={(event: KeyboardEvent) => {
          if (event.key === 'Enter') {
            goBackHome()
          }
        }}
        text="Add-ons"
      />
    ) : null}
  </div>
)

const GlobalCreateIcon = ({openDrawer}: { openDrawer: string => mixed }) => (
  <Tooltip position="right" content="Create">
    <Icon
      label="Create icon"
      secondaryColor="inherit"
      glyph={Plus}
      size="medium"
      onClick={() => openDrawer('create')}
    />
  </Tooltip>
)

const GlobalSearchIcon = ({openDrawer}: { openDrawer: string => mixed }) => (
  <Tooltip position="right" content="Search">
    <Icon
      label="Search icon"
      secondaryColor="inherit"
      size="medium"

      glyph={Search}
      onClick={() => openDrawer('search')}
    />
  </Tooltip>
)

export default class IndexPage extends Component<*, *> {


  constructor() {
    super()

    this.state = {
      isOpen: false,
      menuLoading: true,
      openDrawer: null,
      stack: [
        [
          <AkNavigationItem
            text="Activity"
            icon={<DiscoverIcon label="Activity icon" size="medium"/>}
            isSelected
          />,
          <AkNavigationItem
            text="Your work"
            icon={<AreaChart name='rocket'/>}
          />,
          <AkNavigationItem
            text="Spaces"
            icon={<Folder label="Spaces icon" size="medium"/>}
          />,
          <AkNavigationItem
            text="People"
            icon={<Users label="People icon" size="medium"/>}
          />,
          <AkNavigationItem
            action={
              <Button
                appearance="subtle"
                iconBefore={<ChevronRightIcon label="add" size="medium"/>}
                spacing="none"
              />
            }
            text="Add-ons"
            onClick={() => this.addOnsNestedNav()}
            icon={<Icon glyph={Cubes} label="Add-ons icon" size="medium"/>}
          />,
          <AkNavigationItem
            text="Settings"
            icon={<Icon glyph={Cog} label="Settings icon" size="medium"/>}
          />,
          <AkNavigationItemGroup title="New Confluence Experience">
            <AkNavigationItem
              icon={<Comment label="Feedback icon" size="medium"/>}
              text="Give feedback"
            />
          </AkNavigationItemGroup>,
          <AkNavigationItemGroup title="My Spaces">
            <AkNavigationItem
              icon={<ConfluenceIcon label="Confluence icon" size="medium"/>}
              text="Confluence ADG 3"
            />
            <AkNavigationItem
              icon={<Globe label="World icon" size="medium"/>}
              text="Atlaskit"
            />
          </AkNavigationItemGroup>,
        ],
      ],
      width: 200,
    }

  }

  getCreateDrawer = () => (
    <AkCreateDrawer
      backIcon={BackIcon}
      isOpen={this.state.openDrawer === 'create'}
      key="create"
      onBackButton={this.closeDrawer}
      primaryIcon={<ConfluenceIcon label="Confluence icon" size="large"/>}
    >
      <AkNavigationItem text="Item outside a group"/>
      <AkNavigationItemGroup title="Create item group">
        <AkNavigationItem
          icon={<ConfluenceIcon label="Confluence icon"/>}
          text="Item with an icon"
        />
        <AkNavigationItem
          icon={<JiraIcon label="Jira icon"/>}
          text="A really, really, quite long, actually super long container name"
        />
      </AkNavigationItemGroup>
    </AkCreateDrawer>
  )

  getSearchDrawer = () => (
    <AkSearchDrawer
      backIcon={BackIcon}
      isOpen={this.state.openDrawer === 'search'}
      key="seach"
      onBackButton={this.closeDrawer}
      primaryIcon={<ConfluenceIcon label="Confluence icon" size="large"/>}
    >
      <AkSearch placeholder="Search..." onKeyDown={() => {
      }}>
        <AkNavigationItemGroup title="RECENTLY VIEWED">
          <AkNavigationItem
            icon={<EditorAlignLeftIcon label="Editor icon"/>}
            text="Article 1"
          />
          <AkNavigationItem
            icon={<EditorAlignLeftIcon label="Editor icon"/>}
            text="Article 2"
          />
        </AkNavigationItemGroup>
        <AkNavigationItemGroup title="RECENT SPACES">
          <AkNavigationItem
            icon={<ConfluenceIcon label="Confluence icon"/>}
            text="Confluence"
          />
          <AkNavigationItem icon={<JiraIcon label="Jira icon"/>} text="Jira"/>
        </AkNavigationItemGroup>
      </AkSearch>
    </AkSearchDrawer>
  )

  addOnsNestedNav = () => {
    this.setState({
      stack: [
        ...this.state.stack,
        [
          <AkNavigationItem
            icon={<CalendarIcon label="Calendar"/>}
            text="Calendars"
          />,
          <AkNavigationItem
            icon={<QuestionIcon label="Question"/>}
            text="Questions"
          />,
        ],
      ],
    })
  }
  openDrawer = (name: string) => {

    console.log("drawer oprned" + name)
    this.setState({
      openDrawer: name,
    })
  }

  closeDrawer = () => {
    this.setState({
      openDrawer: null,
    })
  }

  resize = (resizeState: { isOpen: boolean, width: number }) => {
    console.log('onResize called')
    localStorage.setItem("drawer", resizeState.isOpen)
    this.setState({
      isOpen: resizeState.isOpen,
      width: resizeState.width,
    })
  }

  goBackHome = () => {
    if (this.state.stack.length <= 1) {
      return false
    }

    const stack = this.state.stack.slice(0, this.state.stack.length - 1)
    return this.setState({stack})
  }

  timerMenu = () => {
    setTimeout(() => this.setState({menuLoading: false}), 2000)
  }

  render() {
    return (
      <Page
        navigation={
          <Navigation
            drawers={[this.getSearchDrawer(), this.getCreateDrawer()]}
            containerTheme={presetThemes.global}
            containerHeaderComponent={() => (
              <ContainerHeaderComponent
                stackLength={this.state.stack.length}
                goBackHome={this.goBackHome}
              />
            )}
            globalCreateIcon={<GlobalCreateIcon openDrawer={this.openDrawer}/>}
            globalPrimaryIcon={
              <ConfluenceIcon label="Confluence icon" size="large"/>
            }
            globalPrimaryItemHref="/"
            globalSearchIcon={<GlobalSearchIcon openDrawer={this.openDrawer}/>}
            isOpen={this.state.isOpen}
            onResize={this.resize}
            onResizeStart={e => console.log('resizeStart', e)}
            hasScrollHintTop
          >
            <AkContainerNavigationNested stack={this.state.stack}/>
          </Navigation>
        }
      >
        <Flex flex={true} className="full-content">

          <Box auto={true} w={10 / 12} p={2}>
            <h1>Main heading</h1>
            <p>
              Lorem ipsum dolor sit amet and consectetur adipisicing elit.
              Blanditiis voluptatum perspiciatis doloribus dignissimos accusamus
              commodi, nobis ut, error iusto, quas vitae nesciunt consequatur
              possimus labore! Mollitia est quis minima asperiores.
            </p>
          </Box>

          <ChatUsers/>

        </Flex>
      </Page>
    )
  }
}
