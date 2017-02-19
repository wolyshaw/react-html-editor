import React, {Component, propTypes, defaultProps} from 'react'
import {render} from 'react-dom'
import './static/editor.css'

let content

class Editor extends Component {
  constructor(props) {
    super(props)
    this.content = content ? encodeURIComponent(content.innerHTML.trim()) : ''
    this.setImage = this.setImage
  }

  setImage(image) {
    content.focus()
    document.execCommand('insertImage', true, image)
  }

  render() {
    let styles = this.props.classObject
    return (
      <div className={styles.wrap || 'wrap'}>
        <div className={styles.ctrl || 'ctrl'}>
          <span draggable="true" onClick={() => document.execCommand('bold')} className={styles.iconfont || 'iconfont'}>&#xe61d;</span>
          <span draggable="true" onClick={() => document.execCommand('italic')} className={styles.iconfont || 'iconfont'}>&#xe71a;</span>
          <span draggable="true" onClick={() => document.execCommand('insertUnorderedList')} className={styles.iconfont || 'iconfont'}>&#xe696;</span>
          <span draggable="true" onClick={() => document.execCommand('insertOrderedList')} className={styles.iconfont || 'iconfont'}>&#xe6c1;</span>
          <span draggable="true" onClick={this.props.setImage} className={styles.iconfont || 'iconfont'}>&#xe62d;</span>
          <span draggable="true" onClick={() => document.execCommand('undo')} className={styles.iconfont || 'iconfont'}>&#xe62c;</span>
        </div>
        <div className={styles.content || 'content'}
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
  placeholder: 'content',
  classObject: {}
}

Editor.propTypes = {
  placeholder: React.PropTypes.string,
  setImage: React.PropTypes.func.isRequired
}

export default Editor
