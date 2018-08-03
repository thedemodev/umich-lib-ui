import React from 'react';
import Markdown from 'markdown-to-jsx';
import PropTypes from 'prop-types';
import Example from './Example';
import Props from './Props';

import {
  Heading,
  Alert
} from 'umich-lib-components-react'

const ComponentPage = ({component}) => {
  const {name, description, props, examples, docs} = component;

  return (
    <div className="componentpage">
      <Heading level={1} size="xlarge">{name}</Heading>
      <p>{description}</p>

      {docs.map(md => (
        <Markdown
          children={md}
          className="y-spacing"
          options={{
            overrides: {
              Alert: {
                component: Alert,
              },
            },
          }}
        />
      ))}

      {
        examples.length > 0 ?
        examples.map(example => <Example key={example.code} name={name} code={example.code} /> ) :
        "No examples exist."
      }

      <Heading level={2} size="large">Props</Heading>
      {
        props ?
        <Props props={props} /> :
        "This component accepts no props."
      }
    </div>
  )
};

ComponentPage.propTypes = {
  component: PropTypes.object.isRequired
};

export default ComponentPage;
