module.exports = /* eslint-disable */ [{"name":"Alert","description":"Use Alerts to notify users of important information.","props":{"intent":{"type":{"name":"enum","value":[{"value":"\"informational\"","computed":false},{"value":"\"error\"","computed":false},{"value":"\"warning\"","computed":false},{"value":"\"success\"","computed":false},{"value":"\"none\"","computed":false}]},"required":false,"description":"","defaultValue":{"value":"'informational'","computed":false}},"onCloseButtonClick":{"type":{"name":"func"},"required":false,"description":"","defaultValue":{"value":"() => {}","computed":false}},"className":{"type":{"name":"string"},"required":false,"description":""},"closeable":{"type":{"name":"bool"},"required":false,"description":"","defaultValue":{"value":"true","computed":false}}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\nimport { Button } from 'umich-lib-components-react'\nimport classNames from 'classnames';\nimport './Alert.css'\n\n/**\n  Use Alerts to notify users of important information. \n*/\nclass Alert extends React.Component {\n  state = {\n    open: true\n  }\n\n  handleClose = () => {\n    this.setState({ open: false })\n    this.props.onCloseButtonClick()\n  }\n\n  render() {\n    const {\n      intent,\n      className,\n      closeable,\n      children\n    } = this.props\n\n    const alertClasses = classNames({\n      'alert': true,\n      'alert--informational': intent === 'informational',\n      'alert--success': intent === 'success',\n      'alert--warning': intent === 'warning',\n      'alert--error': intent === 'error'\n    }, className);\n\n    if (this.state.open) {\n      return (\n        <div className={alertClasses}>\n          <div className=\"alert-inner\">\n            <div className=\"alert-message\">{children}</div>\n\n            {closeable && (\n              <Button\n                onClick={this.handleClose}\n                className=\"alert-dismiss-button\"\n                kind=\"tertiary\"\n                small={true}\n              >\n                Close\n              </Button>\n            )}\n\n          </div>\n        </div>\n      )\n    }\n\n    return null\n  }\n}\n\nAlert.propTypes = {\n  intent: PropTypes.oneOf([\n    \"informational\",\n    \"error\",\n    \"warning\",\n    \"success\",\n    \"none\"\n  ]),\n  onCloseButtonClick: PropTypes.func,\n  className: PropTypes.string,\n  closeable: PropTypes.bool\n};\n\nAlert.defaultProps = {\n  intent: 'informational',\n  onCloseButtonClick: () => {},\n  closeable: true\n};\n\nexport default Alert\n","examples":[{"name":"Alert","code":"<div className=\"y-spacing\">\n  <Alert intent=\"warning\">Don't do it!</Alert>\n  <Alert intent=\"success\">You did it!</Alert>\n  <Alert intent=\"error\" closable={false}>It's too late.</Alert>\n  <Alert intent=\"informational\">Hello there</Alert>\n  <Alert intent=\"none\"><p>We're not sure. <a href=\"#\">What about html?</a></p></Alert>\n</div>\n"}],"docs":""},{"name":"Button","description":"Use buttons to move though a transaction, aim to use only one primary button per page.","props":{"children":{"type":{"name":"node"},"required":false,"description":""},"className":{"type":{"name":"string"},"required":false,"description":""},"disabled":{"type":{"name":"bool"},"required":false,"description":"","defaultValue":{"value":"false","computed":false}},"small":{"type":{"name":"bool"},"required":false,"description":"","defaultValue":{"value":"false","computed":false}},"kind":{"type":{"name":"enum","value":[{"value":"'start'","computed":false},{"value":"'primary'","computed":false},{"value":"'secondary'","computed":false},{"value":"'tertiary'","computed":false}]},"required":false,"description":"","defaultValue":{"value":"'primary'","computed":false}},"href":{"type":{"name":"string"},"required":false,"description":""},"type":{"type":{"name":"enum","value":[{"value":"'button'","computed":false},{"value":"'reset'","computed":false},{"value":"'submit'","computed":false}]},"required":false,"description":"","defaultValue":{"value":"'button'","computed":false}}},"code":"import React from 'react';\nimport classNames from 'classnames';\nimport PropTypes from 'prop-types';\nimport './Button.css'\n\n/**\n  Use buttons to move though a transaction, aim to use only one primary button per page.\n*/\nconst Button = ({\n  children,\n  href,\n  disabled,\n  className,\n  kind,\n  type,\n  small,\n  ...other\n}) => {\n  const buttonClasses = classNames({\n    'button': true,\n    'button--small': small,\n    'button--start': kind === 'start',\n    'button--primary': kind === 'primary',\n    'button--secondary': kind === 'secondary',\n    'button--tertiary': kind === 'tertiary',\n  }, className);\n\n  const commonProps = {\n    className: buttonClasses,\n  };\n\n  const button = (\n    <button {...other} {...commonProps} disabled={disabled} type={type}>\n      {children}\n    </button>\n  );\n\n  const anchor = (\n    <a {...other} {...commonProps} href={href} role=\"button\">\n      {children}\n    </a>\n  );\n\n  return href ? anchor : button;\n}\n\nButton.propTypes = {\n  children: PropTypes.node,\n  className: PropTypes.string,\n  disabled: PropTypes.bool,\n  small: PropTypes.bool,\n  kind: PropTypes.oneOf([\n    'start',\n    'primary',\n    'secondary',\n    'tertiary',\n  ]).isRequired,\n  href: PropTypes.string,\n  type: PropTypes.oneOf(['button', 'reset', 'submit']),\n};\n\nButton.defaultProps = {\n  type: 'button',\n  disabled: false,\n  small: false,\n  kind: 'primary',\n};\n\nexport default Button;\n","examples":[{"name":"Button","code":"<ul className=\"y-spacing\">\n  <li>\n    <Button kind=\"start\">Most important</Button>\n  </li>\n  <li>\n    <Button>Standard</Button>\n  </li>\n  <li>\n    <Button kind=\"secondary\">Maybe</Button>\n  </li>\n  <li>\n    <Button kind=\"tertiary\">Probably not</Button>\n  </li>\n  <li>\n    <Button small kind=\"primary\">Small is possible</Button>\n  </li>\n</ul>"}],"docs":""},{"name":"Chat","description":"Use to provide users access to Ask a Librarian services.","props":{"fixed":{"type":{"name":"bool"},"required":false,"description":"Fix to the bottom right of the viewport on screen widths of 100px or more.","defaultValue":{"value":"false","computed":false}}},"code":"import React from 'react'\nimport axios from 'axios'\nimport classNames from 'classnames';\nimport PropTypes from 'prop-types';\n\nimport {\n  Button,\n  Icon\n} from 'umich-lib-components-react'\n\nimport './Chat.css'\n\n/**\n  Use to provide users access to Ask a Librarian services.\n*/\nclass Chat extends React.Component {\n  state = {\n    open: false\n  }\n\n  isFixed = () => {\n    /**\n      Prevents the chat widget from being fixed on small screens. It's better\n      to have af new window opens up to use the chat widget.\n\n      Note: This check is on initial load. It won't adjust as viewport is resized.\n    */\n    if (window) {\n      const frameWidth = window.innerWidth;\n\n      if (frameWidth < 1000) {\n        return false\n      }\n    }\n\n    return this.props.fixed\n  }\n\n  componentDidMount() {\n    const presenceUrl = 'https://libraryh3lp-com.proxy.lib.umich.edu/presence/jid/umlibraryaskalibrarian/chat.libraryh3lp.com/text'\n\n    /**\n      Get the online status of the LibraryH3lp service.\n    */\n    axios.get(presenceUrl)\n      .then((response) => {\n        if (response.data) {\n          switch (response.data) {\n            case 'available':\n              this.setState({ status: 'online' })\n              break;\n            case 'unavailable':\n              this.setState({ status: 'offline' })\n              break;\n            default:\n              break;\n          }\n        }\n      })\n  }\n\n  /**\n    When this is fixed it will open a chat widget fixed to the viewport.\n    Otherwise it will open the service in a new window.\n  */\n  handleClick = () => {\n    const fixed = this.isFixed()\n\n    if (!fixed) {\n      window.open(\n        \"https://libraryh3lp.com/chat/umlibraryaskalibrarian@chat.libraryh3lp.com?skin=27279\",\n        \"_blank\",\n        \"resizable=1, height=500, width=400\"\n      )\n    } else {\n      this.setState({ open: !this.state.open })\n    }\n  }\n\n  render() {\n    const { status, open } = this.state\n    const fixed = this.isFixed()\n\n    const chatClassNames = classNames('chat', {\n      'chat--fixed': fixed\n    })\n\n    if (status === 'online') {\n      if (fixed) {\n        return (\n          <div className={chatClassNames}>\n            <button\n              className=\"chat-fixed__button\"\n              onClick={this.handleClick}\n              kind=\"secondary\"\n              aria-expanded={open}\n            >\n              <span className=\"chat__button-inner\">\n                <span className=\"chat-flex-center\">\n                  <Icon icon=\"chat-bubble\" size={18} className=\"chat__icon\" />\n                  <span>Ask a Librarian</span>\n                </span>\n                {open ? (\n                  <Icon icon=\"expand-down\" size={28} className=\"chat__expand-icon\" />\n                ) : (\n                  <Icon icon=\"expand-up\" size={28} className=\"chat__expand-icon\" />\n                )}\n              </span>\n            </button>\n\n            <iframe hidden={!open} src=\"https://libraryh3lp.com/chat/umlibraryaskalibrarian@chat.libraryh3lp.com?skin=27279\" className=\"chat__iframe\" title=\"Chat with Ask a Librarian\"></iframe>\n          </div>\n        )\n      } else {\n        return (\n          <Button\n            className={chatClassNames}\n            onClick={this.handleClick}\n            role=\"link\"\n            kind=\"secondary\"\n          >\n            <span className=\"chat__button-inner\">\n              <Icon icon=\"chat-bubble\" size={18} className=\"chat__icon\" />\n              <span>Ask a Librarian</span>\n            </span>\n          </Button>\n        )\n      }\n    }\n\n    return null\n  }\n}\n\nChat.propTypes = {\n  /** Fix to the bottom right of the viewport on screen widths of 100px or more. */\n  fixed: PropTypes.bool\n}\n\nChat.defaultProps = {\n  fixed: false,\n};\n\nexport default Chat\n","examples":[{"name":"Chat","code":"<Chat fixed />\n"}]},{"name":"Expandable","description":"Use Expandable to show only the first few items. The remaining will be hidden and can be expanded by the user.","props":{"expanded":{"type":{"name":"bool"},"required":false,"description":"","defaultValue":{"value":"false","computed":false}},"disabled":{"type":{"name":"bool"},"required":false,"description":""}},"code":"import React, { Component } from 'react';\nimport PropTypes from 'prop-types';\nimport './Expandable.css'\n\nconst ExpandableContext = React.createContext();\n\n/**\n  Use Expandable to show only the first few items. The remaining will be hidden and can be expanded by the user.\n*/\nclass Expandable extends Component {\n  state = {\n    expanded: false,\n    toggleExpanded: () => {\n      this.setState({\n        expanded: !this.state.expanded\n      })\n    },\n    disabled: false,\n    disable: () => {\n      this.setState({\n        disabled: true\n      })\n    }\n  }\n\n  render() {\n    return (\n      <ExpandableContext.Provider value={this.state}>\n        {this.props.children}\n      </ExpandableContext.Provider>\n    )\n  }\n}\n\nExpandable.propTypes = {\n  expanded: PropTypes.bool,\n  disabled: PropTypes.bool\n};\n\nExpandable.defaultProps = {\n  expanded: false\n};\n\nexport default Expandable\nexport {\n  ExpandableContext\n}\n","examples":[{"name":"Expandable","code":"() => {\n  const colors = [ \"Red\", \"Orange\", \"Yellow\", \"Green\", \"Cyan\", \"Blue\", \"Indigo\", \"Violet\", \"Purple\", \"Magenta\", \"Pink\", \"Brown\", \"White\", \"Gray\", \"Black\"]\n  \n  return (\n    <Expandable>\n      <ul>\n        <ExpandableChildren show={3}>\n          {colors.map((color, key) => <li key={key}>{color}</li>)}\n        </ExpandableChildren>\n      </ul>\n\n      <ExpandableButton\n        kind=\"tertiary\"\n        name=\"colors\"\n        count={colors.length}\n      />\n    </Expandable>\n  )\n}"}]},{"name":"Header","description":"Keep your header as simple as possible. Use a header for critical navigation elements.","props":{"name":{"type":{"name":"string"},"required":true,"description":"Site name"},"siteUrl":{"type":{"name":"string"},"required":false,"description":"The url to go to when a user clicks the site name.","defaultValue":{"value":"'/'","computed":false}},"nav":{"type":{"name":"array"},"required":false,"description":"The nav is an array of objects. The objects can have `text` and `href` or `to` attributes."},"renderAnchor":{"type":{"name":"func"},"required":false,"description":"A render prop to handle the nav object `to` prop."}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\nimport './Header.css'\n\nimport UMichBlockM from './UMichBlockM'\nimport UMichLibrary from './UMichLibrary'\n\nconst NavItem = ({\n  item,\n  renderAnchor\n}) => {\n  if (item.href) {\n    return (\n      <a href={item.href}>{ item.text }</a>\n    )\n  }\n\n  if (item.to) {\n    return (\n      renderAnchor(item)\n    )\n  }\n}\n\n/**\n  Keep your header as simple as possible. Use a header for critical navigation elements.\n*/\nconst Header = ({\n  name,\n  siteUrl,\n  nav,\n  renderAnchor\n}) => {\n  return (\n    <header className=\"header\">\n      <div className=\"header__inner\">\n        <div className=\"logo\">\n          <a href=\"https://umich.edu/\" className=\"logo__blockm\"><UMichBlockM className=\"logo__svg\" /></a>\n          <a href=\"https://www.lib.umich.edu/\" className=\"logo__library\"><UMichLibrary className=\"logo__svg\" /></a>\n          {name && siteUrl && (<a href={siteUrl} className=\"logo__site-name-link\">{name}</a>)}\n        </div>\n\n        {nav && nav.length && (\n          <nav className=\"header__nav\">\n            <ul className=\"header__nav-list\">\n              {nav.map((item, key) => (\n                <li key={key} className=\"header__nav-list-item\"><NavItem item={item} renderAnchor={renderAnchor} /></li>\n              ))}\n            </ul>\n          </nav>\n        )}\n      </div>\n    </header>\n  )\n}\n\nHeader.propTypes = {\n  /**\n    Site name\n  */\n  name: PropTypes.string.isRequired,\n  /**\n    The url to go to when a user clicks the site name.\n  */\n  siteUrl: PropTypes.string.isRequired,\n  /**\n    The nav is an array of objects. The objects can have `text` and `href` or `to` attributes.\n  */\n  nav: PropTypes.array,\n  /**\n    A render prop to handle the nav object `to` prop.\n  */\n  renderAnchor: PropTypes.func\n};\n\nHeader.defaultProps = {\n  siteUrl: '/',\n};\n\nexport default Header\n","examples":[{"name":"Header","code":"<Header\n  name=\"App\"\n  siteUrl=\"/app\"\n  renderAnchor={(data) => (\n    <a href={data.to}>{data.text}</a>\n  )}\n  nav={[\n    { text: 'About', to: '/about' },\n    { text: 'My Account', href: 'https://www.lib.umich.edu/my-account/' }\n  ]}\n/>\n"}]},{"name":"Heading","description":"Use headings consistently to create a clear content hierarchy.","props":{"children":{"type":{"name":"node"},"required":false,"description":""},"className":{"type":{"name":"string"},"required":false,"description":""},"level":{"type":{"name":"enum","value":[{"value":"1","computed":false},{"value":"2","computed":false},{"value":"3","computed":false},{"value":"4","computed":false},{"value":"5","computed":false},{"value":"6","computed":false}]},"required":false,"description":"Avoid skipping heading levels: always start the page from level 1, next use level 2 and so on. Avoid using level 1 more than once on a page.","defaultValue":{"value":"1","computed":false}},"size":{"type":{"name":"enum","value":[{"value":"'xsmall'","computed":false},{"value":"'small'","computed":false},{"value":"'medium'","computed":false},{"value":"'large'","computed":false},{"value":"'xlarge'","computed":false}]},"required":false,"description":"","defaultValue":{"value":"'small'","computed":false}}},"code":"import React from 'react';\nimport classNames from 'classnames';\nimport PropTypes from 'prop-types';\nimport './Heading.css'\n\n/**\n  Use headings consistently to create a clear content hierarchy.\n*/\nconst Heading = ({\n  children,\n  size,\n  level,\n  className,\n  ...other\n}) => {\n\n\n  const headingClasses = classNames({\n    'heading': true,\n    [`heading--${size}`]: true\n  }, className);\n\n  const HeadingTag = `h${level}`\n\n  return (\n    <HeadingTag className={headingClasses}>{children}</HeadingTag>\n  )\n}\n\nHeading.propTypes = {\n  children: PropTypes.node,\n  className: PropTypes.string,\n  /**\n    Avoid skipping heading levels: always start the page from level 1, next use level 2 and so on. Avoid using level 1 more than once on a page.\n  */\n  level: PropTypes.oneOf([1,2,3,4,5,6]),\n  size: PropTypes.oneOf([\n    'xsmall',\n    'small',\n    'medium',\n    'large',\n    'xlarge',\n  ]).isRequired\n};\n\nHeading.defaultProps = {\n  level: 1,\n  size: 'small'\n};\n\nexport default Heading;\n","examples":[{"name":"Heading","code":"<Heading size=\"medium\" level={2}>Hello World</Heading>"}]},{"name":"Icon","description":"Use this to render SVG icons.","props":{"icon":{"type":{"name":"string"},"required":true,"description":"Icon name."},"size":{"type":{"name":"number"},"required":false,"description":"Size of the icon in pixels.","defaultValue":{"value":"16","computed":false}},"title":{"type":{"name":"string"},"required":false,"description":"Include a title if this icon requires a text alternative."}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames';\nimport './Icon.css'\nimport icons from './icons'\n\n/**\n  Use this to render SVG icons.\n*/\nconst Icon = ({\n  icon,\n  size,\n  title,\n  className\n}) => {\n  if (!icons.hasOwnProperty(icon)) {\n    console.warn(`[Icon] \"${icon}\" is not a valid icon name.`)\n  }\n\n  const styles = {\n    svg: {\n      display: 'inline-block',\n      verticalAlign: 'middle',\n    }\n  };\n\n  const iconClasses = classNames({\n    'icon': true,\n  }, className);\n\n  return (\n    <svg\n      style={styles.svg}\n      width={`${size}px`}\n      height={`${size}px`}\n      viewBox=\"0 0 48 48\"\n      className={iconClasses}\n    >\n      {title && <title>{title}</title>}\n      <path\n        style={styles.path}\n        d={icons[icon]}\n      ></path>\n    </svg>\n  )\n}\n\nIcon.propTypes = {\n  /** Icon name. */\n  icon: PropTypes.string.isRequired,\n  /** Size of the icon in pixels. */\n  size: PropTypes.number,\n  /** Include a title if this icon requires a text alternative. */\n  title: PropTypes.string\n}\n\nIcon.defaultProps = {\n  size: 16,\n};\n\nexport default Icon\n","examples":[{"name":"Icon","code":"<div className=\"y-spacing\">\n  <Icon icon=\"error\" size={64} />\n\n  <ul className=\"y-spacing\">\n    {Object.keys(icons).map((i, k) => (\n      <li key={k}>\n        <Icon icon={i} size={24} className=\"margin-right-half\"/>\n        {i}\n      </li>\n    ))}\n  </ul>\n</div>\n"}]},{"name":"RecordFields","description":"Use to display metadata, often with field values that link out.","props":{"fields":{"type":{"name":"array"},"required":true,"description":"Each field has a single term and one or many descriptions. Each description contains `text` and an optional `to` or `href` attribute. Nest descriptions for heirarchy."},"condensed":{"type":{"name":"bool"},"required":false,"description":"For more condensed styles","defaultValue":{"value":"false","computed":false}},"renderAnchor":{"type":{"name":"func"},"required":false,"description":""}},"code":"import React from 'react';\nimport classNames from 'classnames';\nimport PropTypes from 'prop-types';\nimport './RecordFields.css'\n\nconst FieldDescription = ({ desc, renderAnchor }) => {\n  if (Array.isArray(desc)) {\n    return (\n      <ol className=\"field-nested\">\n        {desc.map((nestedDesc, i) => (\n          <li className=\"field-nested__desc\" key={i}>\n            <FieldDescription desc={nestedDesc} renderAnchor={renderAnchor} />\n          </li>\n        ))}\n      </ol>\n    )\n  }\n\n  if (desc.href) {\n    return (\n      <a href={desc.href}>{ desc.text }</a>\n    )\n  }\n\n  if (desc.to) {\n    return (\n      renderAnchor(desc)\n    )\n  }\n\n  return desc.text\n}\n\nconst Field = ({ field, renderAnchor }) => {\n  const { term, description } = field\n\n  return (\n    <div className=\"record-fields__field\">\n      <dt className=\"record-fields__term\">{term}</dt>\n      <dd className=\"record-fields__description\">\n        {description.map((desc, i) => (\n          <span className=\"record-fields__description-item\" key={i}>\n            <FieldDescription desc={desc} renderAnchor={renderAnchor} />\n          </span>\n        ))}\n      </dd>\n    </div>\n  )\n}\n\n/**\n  Use to display metadata, often with field values that link out.\n*/\nconst RecordFields = ({\n  fields,\n  renderAnchor,\n  condensed\n}) => {\n  const RecordFieldsClasses = classNames({\n    'record-fields': true,\n    'record-fields--full': condensed ? false : true\n  });\n\n  return (\n    <dl className={RecordFieldsClasses}>\n      {fields.map((field, i) => (\n        <Field field={field} renderAnchor={renderAnchor} key={i} />\n      ))}\n    </dl>\n  )\n}\n\nRecordFields.propTypes = {\n  /** Each field has a single term and one or many descriptions. Each description contains `text` and an optional `to` or `href` attribute. Nest descriptions for heirarchy. */\n  fields: PropTypes.array.isRequired,\n  /** For more condensed styles */\n  condensed: PropTypes.bool,\n  renderAnchor: PropTypes.func\n};\n\nRecordFields.defaultProps = {\n  condensed: false\n};\n\nexport default RecordFields\n","examples":[{"name":"RecordFields","code":"() => {\n  const fields = [\n    {\n      term: \"Published\",\n      description: [{ text: \"2012 - Carlton, Vic. : BirdLife Australia\" }]\n    },\n    {\n      term: \"Previous Title\",\n      description: [\n        { text: \"Wing span (Melbourne, Vic.)\", to: \"#\" },\n        { text: \"Bird observer (Hawthorn, Vic.)\", to: \"#\" }\n      ]\n    },\n    {\n      term: \"Source of Description Note\",\n      description: [\n        { text: \"Description based on: Vol. 1, no. 1 (Mar. 2012); title from cover.\" },\n        { text: \"Latest issue consulted: Vol. 1, no. 3 (Sept. 2012).\" }\n      ]\n    },\n    {\n      term: \"Academic Discipline\",\n      description: [\n        [\n          { text: \"Science\", to: \"#\" },\n          { text: \"Biology\", to: \"#\" },\n          { text: \"Zoology\", to: \"#\" }\n        ],\n        [\n          { text: \"Science\", to: \"#\" },\n          { text: \"Biology\", to: \"#\" },\n          { text: \"Ecology and Evolutionary Biology\", to: \"#\" }\n        ],\n        [\n          { text: \"International Studies\", to: \"#\" },\n          { text: \"Asian Studies\", to: \"#\" },\n          { text: \"Pacific/Australia/New Zealand Studies\", to: \"#\" }\n        ]\n      ]\n    }\n  ]\n\n  return (\n    <RecordFields\n      fields={fields}\n      renderAnchor={data => (\n        <a className=\"rendered-prop-anchor-example\" href={data.to}>\n        {data.text}\n        </a>\n      )}\n    />\n  )\n}\n"}]},{"name":"ResourceAccess","description":"Use this component to provide a comprehensive listing of options to access a resource.","props":{"headings":{"type":{"name":"array"},"required":true,"description":"Table column headings."},"rows":{"type":{"name":"array"},"required":true,"description":"Table rows must be an array of arrays. Each inner array represent a row and will contain objects for each cell. A cell object must contain a text key with a string value. If you wish the cell to be linked somewhere then include `to` or an `href` key. See `renderAnchor` prop to decide between `to` or `href`."},"name":{"type":{"name":"string"},"required":false,"description":"Name used to show all rows."},"caption":{"type":{"name":"string"},"required":false,"description":"The displayed table caption. If you do not use this prop, make sure the preceding heading is appropriate."},"captionLink":{"type":{"name":"shape","value":{"text":{"name":"string","required":true},"href":{"name":"string","required":true}}},"required":false,"description":"Link to more information about the table caption."},"notes":{"type":{"name":"array"},"required":false,"description":"Notes necessary to understand the resource access options."},"renderAnchor":{"type":{"name":"func"},"required":false,"description":"Row cells that use key 'to' instead of 'href' will use this render prop. This is useful if you want to use a routing library such as React Router instead of an HTML anchor."}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames';\nimport {\n  Icon,\n  Expandable,\n  ExpandableChildren,\n  ExpandableButton\n} from 'umich-lib-components-react'\n\nimport './ResourceAccess.css'\n\n\nconst Cell = ({\n  cell,\n  renderAnchor\n}) => {\n  return (\n    <React.Fragment>\n      {cell.icon && (<Icon icon={cell.icon} className=\"margin-right-quarter\" />)}\n\n      {(() => {\n        if (cell.href) {\n          return (<a href={cell.href}>{cell.text}</a>)\n        }\n\n        if (cell.to) {\n          return (renderAnchor(cell))\n        }\n\n        if (cell.html) {\n          return <span className=\"resource-access__cell-html\" dangerouslySetInnerHTML={{ __html: cell.html }} />\n        }\n\n        return (<React.Fragment>{cell.text}</React.Fragment>)\n      })()}\n    </React.Fragment>\n  )\n}\n\n/**\n  Use this component to provide a comprehensive listing of options to access a resource.\n*/\nclass ResourceAccess extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      tabindex: null\n    }\n    this.captionId = 'caption-' + Math.random().toString(36).substr(2, 9);\n    this.containerRef = React.createRef();\n  }\n\n  componentDidMount() {\n    let container = this.containerRef.current\n    let scrollable = container.scrollWidth > container.clientWidth;\n    this.setState({\n      tabindex: scrollable ? '0' : null\n    });\n  }\n\n  getCellClassNames = (cell) => {\n    const cellClassNames = classNames({\n      'resource-access__cell': true,\n      'resource-access__cell--success': cell.intent === 'success',\n      'resource-access__cell--warning': cell.intent === 'warning',\n      'resource-access__cell--error': cell.intent === 'error',\n    });\n\n    return cellClassNames\n  }\n\n  render() {\n    const {\n      caption,\n      notes,\n      captionLink,\n      headings,\n      rows,\n      count,\n      name,\n      renderAnchor\n    } = this.props\n\n    return (\n      <div\n        className=\"resource-access__container\"\n        tabIndex={this.state.tabindex}\n        aria-labelledby={this.captionId}\n        ref={this.containerRef}\n        role=\"group\"\n      >\n        <Expandable>\n          <table className=\"resource-access__table\">\n            {caption && (\n              <caption id={this.captionId} className=\"resource-access__caption\">\n                <span className=\"resource-access__caption-text\">{caption}</span>\n                {captionLink && (<a href={captionLink.href} className=\"resource-access__caption-link\">{captionLink.text}</a>)}\n                {notes && (\n                  <React.Fragment>\n                    {notes.map((note, n) => <span key={n} className=\"resource-access__caption-note\">{note}</span>)}\n                  </React.Fragment>\n                )}\n                {this.state.tabindex === '0' && <small className=\"resource-access__caption-scroll-text\">(scroll to see more)</small>}\n              </caption>\n            )}\n\n            <thead>\n              <tr>\n                {headings.map((heading, i) => (\n                  <th scope=\"col\" key={i}>{heading}</th>\n                ))}\n              </tr>\n            </thead>\n\n            <tbody>\n              <ExpandableChildren show={1}>\n                {rows.map((row, i) => (\n                  <tr key={i}>\n                    {row.map((cell, t) => (\n                      <td key={t} className={this.getCellClassNames(cell)}>\n                        <Cell cell={cell} renderAnchor={renderAnchor} />\n                      </td>\n                    ))}\n                  </tr>\n                ))}\n              </ExpandableChildren>\n            </tbody>\n          </table>\n\n          <ExpandableButton kind=\"tertiary\" small={true} count={rows.length} name={name} />\n        </Expandable>\n      </div>\n    )\n  }\n}\n\nResourceAccess.propTypes = {\n  /**\n    Table column headings.\n  */\n  headings: PropTypes.array.isRequired,\n  /**\n    Table rows must be an array of arrays. Each inner array represent a row and will contain objects for each cell. A cell object must contain a text key with a string value. If you wish the cell to be linked somewhere then include `to` or an `href` key. See `renderAnchor` prop to decide between `to` or `href`.\n  */\n  rows: PropTypes.array.isRequired,\n  /**\n    Name used to show all rows.\n  */\n  name: PropTypes.string,\n  /**\n    The displayed table caption. If you do not use this prop, make sure the preceding heading is appropriate.\n  */\n  caption: PropTypes.string,\n  /**\n    Link to more information about the table caption.\n  */\n  captionLink: PropTypes.shape({\n    text: PropTypes.string.isRequired,\n    href: PropTypes.string.isRequired\n  }),\n  /**\n    Notes necessary to understand the resource access options.\n  */\n  notes: PropTypes.array,\n  /** Row cells that use key 'to' instead of 'href' will use this render prop. This is useful if you want to use a routing library such as React Router instead of an HTML anchor. */\n  renderAnchor: PropTypes.func\n};\n\nexport default ResourceAccess\n","examples":[{"name":"ResourceAccess","code":"<ResourceAccess\n  caption={\"Research Museums Center Birds Division\"}\n  captionLink={{ text: 'About location', href: 'http://www.lib.umich.edu/location/museums-library/unit/31' }}\n  notes={['Library has: 1- : 2012-']}\n  headings={[\"Link\", \"Description\", \"Status\"]}\n  rows={[\n    [\n      { text: \"Get this\", href: \"https://search.lib.umich.edu/catalog/record/012977832/get-this/39015072357000\" },\n      { text: \"v.1 2012\" },\n      { text: \"On shelf\", intent: 'success', icon: 'check-circle' }\n    ],\n    [\n      { text: \"Get this\", href: \"https://search.lib.umich.edu/catalog/record/012977832/get-this/39015072357000\" },\n      { text: \"v.2 2013\" },\n      { text: \"Missing\", intent: 'warning', icon: 'warning' }\n    ],\n    [\n      { text: \"Get this\", href: \"https://search.lib.umich.edu/catalog/record/012977832/get-this/39015072357000\" },\n      { text: \"v.2 2014\" },\n      { text: \"Checked out\", intent: 'error', icon: 'error' }\n    ],\n  ]}\n  renderAnchor={data => (\n    <a href={data.to}>\n      {data.text}\n    </a>\n  )}\n  name={\"Holdings\"}\n/>\n"}],"docs":""},{"name":"TextInput","description":"Use this when you need to let users enter text that's no longer than a single line.","props":{"id":{"type":{"name":"string"},"required":true,"description":""},"labelText":{"type":{"name":"node"},"required":true,"description":""},"hideLabel":{"type":{"name":"bool"},"required":false,"description":""},"className":{"type":{"name":"string"},"required":false,"description":""},"defaultValue":{"type":{"name":"union","value":[{"name":"string"},{"name":"number"}]},"required":false,"description":""},"disabled":{"type":{"name":"bool"},"required":false,"description":"","defaultValue":{"value":"false","computed":false}},"onChange":{"type":{"name":"func"},"required":false,"description":"","defaultValue":{"value":"() => {}","computed":false}},"onClick":{"type":{"name":"func"},"required":false,"description":"","defaultValue":{"value":"() => {}","computed":false}},"placeholder":{"type":{"name":"string"},"required":false,"description":""},"type":{"type":{"name":"string"},"required":false,"description":"","defaultValue":{"value":"'text'","computed":false}},"value":{"type":{"name":"union","value":[{"name":"string"},{"name":"number"}]},"required":false,"description":""},"invalid":{"type":{"name":"bool"},"required":false,"description":"","defaultValue":{"value":"false","computed":false}},"invalidText":{"type":{"name":"string"},"required":false,"description":"","defaultValue":{"value":"''","computed":false}}},"code":"import React from 'react'\nimport classNames from 'classnames';\nimport PropTypes from 'prop-types';\n\nimport './TextInput.css'\n\n/**\n  Use this when you need to let users enter text that's no longer than a single line.\n*/\nconst TextInput = ({\n  labelText,\n  descriptionText,\n  className,\n  id,\n  placeholder,\n  type,\n  onChange,\n  onClick,\n  hideLabel,\n  invalid,\n  invalidText,\n  ...other\n}) => {\n  const textInputProps = {\n    id,\n    onChange: evt => {\n      if (!other.disabled) {\n        onChange(evt);\n      }\n    },\n    onClick: evt => {\n      if (!other.disabled) {\n        onClick(evt);\n      }\n    },\n    placeholder,\n    type,\n  };\n\n  const errorId = id + '-error-msg';\n  const textInputClasses = classNames('input', 'text-input', className);\n  const labelClasses = classNames('label', {\n    'visually-hidden': hideLabel,\n  });\n\n  const formItemClasses = classNames('form-item', {\n    'form-item--error': invalid\n  })\n\n  const description = descriptionText ? (\n    <span className=\"text-input__description\">\n      {descriptionText}\n    </span>\n  ) : null;\n\n  const label = labelText ? (\n    <label htmlFor={id} className={labelClasses}>\n      <span className=\"label-text\">{labelText}</span>\n      {description}\n    </label>\n  ) : null;\n\n  const error = invalid ? (\n    <p className=\"form-item__error-message\" id={errorId}>\n      {invalidText}\n    </p>\n  ) : null;\n\n  const input = invalid ? (\n    <input\n      {...other}\n      {...textInputProps}\n      data-invalid\n      aria-invalid\n      aria-describedby={errorId}\n      className={textInputClasses}\n    />\n  ) : (\n    <input {...other} {...textInputProps} className={textInputClasses} />\n  );\n\n  return (\n    <div className={formItemClasses}>\n      {label}\n      {input}\n      {error}\n    </div>\n  );\n}\n\nTextInput.propTypes = {\n  id: PropTypes.string.isRequired,\n  labelText: PropTypes.node.isRequired,\n  hideLabel: PropTypes.bool,\n  className: PropTypes.string,\n  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),\n  disabled: PropTypes.bool,\n  onChange: PropTypes.func,\n  onClick: PropTypes.func,\n  placeholder: PropTypes.string,\n  type: PropTypes.string,\n  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),\n  invalid: PropTypes.bool,\n  invalidText: PropTypes.string\n};\n\nTextInput.defaultProps = {\n  disabled: false,\n  type: 'text',\n  onChange: () => {},\n  onClick: () => {},\n  invalid: false,\n  invalidText: ''\n};\n\nexport default TextInput;\n","examples":[{"name":"TextInput","code":"<div className=\"y-spacing\">\n  <TextInput\n    id=\"full-name\"\n    value=\"Rambo\"\n    labelText=\"Full name\"\n    type=\"text\"\n  />\n\n  <TextInput\n    id=\"email-address\"\n    labelText=\"Email address\"\n    descriptionText=\"We will only use this to send you a confirmation email.\"\n    type=\"email\"\n    placeholder=\"uniqname@umich.edu\"\n    invalid\n    invalidText=\"Enter a valid email address.\"\n  />\n\n  <form action=\"https://search.lib.umich.edu/everything\" method=\"get\">\n    <Heading size=\"medium\" level={3}>Library Search</Heading>\n\n    <div className=\"layout-flex x-spacing\">\n      <TextInput\n        id=\"search-query\"\n        labelText=\"Search terms\"\n        type=\"search\"\n        hideLabel\n        name=\"query\"\n      />\n      <Button type=\"submit\">Search</Button>\n    </div>\n  </form>\n</div>\n"}]}]