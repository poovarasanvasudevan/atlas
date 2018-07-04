// @flow
import React, {Component} from 'react'
import Icon from '@atlaskit/icon'

import {
  AddressBook,
} from './icon'

class FolderIcon extends Component<{}, {}> {
  render() {
    return <Icon glyph={AddressBook} label="Custom icon" size="medium"/>
  }
}

export default FolderIcon
