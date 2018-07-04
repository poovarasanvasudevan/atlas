import React, {Component} from "react"
import Icon from '@atlaskit/icon'

const FolderI = () => (
  <svg width="1em" height="1em" viewBox="0 0 1792 1792" className="normalIcon">
    <path d="M1728 608v704q0 92-66 158t-158 66H288q-92 0-158-66t-66-158V352q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z" />
  </svg>
);

class Folder extends Component<{}, {}> {
  render() {
    return <Icon glyph={FolderI} label="Custom icon" size="medium"/>
  }
}
export default Folder;
