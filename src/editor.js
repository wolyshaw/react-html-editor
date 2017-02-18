import React, {Component, propTypes, defaultProps} from 'react'
import {render} from 'react-dom'
import styles from './static/editor.css'

let content

class Editor extends Component {
  constructor(props) {
    super(props)
    this.content = content ? content.innerHTML : ''
  }

  render() {
    return (
      <div className={styles.wrap}>
        <div className={styles.ctrl}>
          <span draggable="true" onClick={() => document.execCommand('bold')} className={styles.iconfont}>&#xe61d;</span>
          <span draggable="true" onClick={() => document.execCommand('italic')} className={styles.iconfont}>&#xe71a;</span>
          <span draggable="true" onClick={() => document.execCommand('insertUnorderedList')} className={styles.iconfont}>&#xe696;</span>
          <span draggable="true" onClick={() => document.execCommand('insertOrderedList')} className={styles.iconfont}>&#xe6c1;</span>
          <span draggable="true" onClick={() => document.execCommand('bold')} className={styles.iconfont}>&#xe62d;</span>
          <span draggable="true" onClick={() => document.execCommand('undo')} className={styles.iconfont}>&#xe62c;</span>
        </div>
        <div className={styles.content}
          contentEditable="true"
          spellCheck="false"
          ref={n => content = n}
          data-placeholder={this.props.placeholder}
        >
        </div>
      </div>
    )
  }
}

Editor.defaultProps = {
  placeholder: 'content'
}

Editor.propTypes = {
  placeholder: React.PropTypes.string
}

export default Editor
